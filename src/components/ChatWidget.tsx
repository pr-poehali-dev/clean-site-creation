import { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const CHAT_URL = 'https://functions.poehali.dev/b1c6cf7c-0136-4d69-a5db-be40e9920863';

const QUICK_QUESTIONS = [
  'Какие курсы есть?',
  'Как записаться?',
  'Есть рассрочка?',
  'Сколько длится обучение?',
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Привет! Я ИИ-ассистент Progress Education 👋\nПомогу выбрать курс или ответить на вопросы.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasNew, setHasNew] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open) {
      setHasNew(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: Message = { role: 'user', content: trimmed };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(CHAT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
      if (!open) setHasNew(true);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Извините, произошла ошибка. Попробуйте написать нам напрямую: @flafik77rus' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  return (
    <>
      {/* Bubble button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ background: 'linear-gradient(135deg, #206F6C, #4CAF7D)' }}
        aria-label="Открыть чат поддержки"
      >
        {hasNew && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        )}
        <Icon
          name={open ? 'X' : 'MessageCircle'}
          size={24}
          className="text-white transition-transform duration-300"
        />
      </button>

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-up"
          style={{
            height: '480px',
            background: 'var(--chat-bg, #fff)',
            border: '1px solid var(--chat-border, #e5e7eb)',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #0D1B2A, #206F6C)' }}
          >
            <div className="w-9 h-9 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
              <Icon name="Bot" size={18} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-montserrat font-bold text-sm text-white leading-tight">ИИ-ассистент</p>
              <p className="font-inter text-xs text-white/60">Progress Education</p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="font-inter text-xs text-white/60">онлайн</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ background: 'var(--chat-messages-bg, #f8fafc)' }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: 'linear-gradient(135deg, #206F6C, #4CAF7D)' }}>
                    <Icon name="Bot" size={13} className="text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm font-inter leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'text-white rounded-tr-sm'
                      : 'rounded-tl-sm'
                  }`}
                  style={
                    msg.role === 'user'
                      ? { background: 'linear-gradient(135deg, #206F6C, #4CAF7D)', color: 'white' }
                      : { background: 'var(--chat-bubble-bg, #fff)', color: 'var(--chat-bubble-text, #0D1B2A)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }
                  }
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #206F6C, #4CAF7D)' }}>
                  <Icon name="Bot" size={13} className="text-white" />
                </div>
                <div className="px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1 items-center"
                  style={{ background: 'var(--chat-bubble-bg, #fff)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="w-2 h-2 rounded-full bg-brand-teal/50 animate-bounce"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5 flex-shrink-0" style={{ background: 'var(--chat-messages-bg, #f8fafc)' }}>
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="text-xs font-inter px-3 py-1.5 rounded-full border transition-all duration-150 hover:scale-105"
                  style={{
                    borderColor: '#206F6C',
                    color: '#206F6C',
                    background: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#206F6C';
                    (e.currentTarget as HTMLElement).style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.color = '#206F6C';
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div
            className="px-3 py-3 flex gap-2 items-end flex-shrink-0 border-t"
            style={{ background: 'var(--chat-bg, #fff)', borderColor: 'var(--chat-border, #e5e7eb)' }}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Напишите сообщение..."
              rows={1}
              className="flex-1 resize-none rounded-xl px-3 py-2.5 text-sm font-inter outline-none border transition-all duration-200"
              style={{
                background: 'var(--chat-input-bg, #f2f4f7)',
                borderColor: 'var(--chat-border, #e5e7eb)',
                color: 'var(--chat-bubble-text, #0D1B2A)',
                maxHeight: '96px',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#206F6C')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--chat-border, #e5e7eb)')}
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim() || loading}
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: 'linear-gradient(135deg, #206F6C, #4CAF7D)' }}
            >
              <Icon name="Send" size={15} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
