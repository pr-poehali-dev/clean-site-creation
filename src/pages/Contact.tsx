import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  { icon: 'Mail', label: 'Email', value: 'stroganov.ilya09@gmail.com' },
  { icon: 'Phone', label: 'Телефон', value: '+7 (977) 727-67-64' },
  { icon: 'Send', label: 'Telegram', value: '@flafik77rus' },
  { icon: 'MapPin', label: 'Адрес', value: 'Москва, Россия' },
];

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Введите ваше имя';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Введите корректный email';
    if (!form.message.trim()) e.message = 'Напишите сообщение';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <div className="min-h-screen bg-brand-light">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 brand-pattern opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-block bg-brand-green/20 text-brand-green font-inter text-sm font-medium px-4 py-1.5 rounded-full mb-5">
              Мы на связи
            </span>
            <h1 className="font-montserrat font-black text-4xl md:text-5xl text-white mb-4">
              Свяжитесь с нами
            </h1>
            <p className="font-inter text-white/60 text-lg leading-relaxed">
              Есть вопросы о курсах или хотите подобрать программу? Напишите нам — ответим в течение часа
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

            {/* Contact info */}
            <div className="lg:col-span-2 animate-fade-up">
              <h2 className="font-montserrat font-bold text-2xl text-brand-dark mb-8">
                Контактная информация
              </h2>
              <div className="space-y-5 mb-10">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={18} className="text-brand-teal" fallback="Info" />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-muted-foreground mb-0.5">{item.label}</p>
                      <p className="font-inter font-medium text-brand-dark">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ teaser */}
              <div className="bg-brand-dark rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 brand-pattern opacity-20" />
                <div className="relative z-10">
                  <Icon name="MessageCircle" size={28} className="text-brand-green mb-4" />
                  <h3 className="font-montserrat font-bold text-white text-lg mb-2">
                    Хотите пройти консультацию?
                  </h3>
                  <p className="font-inter text-white/60 text-sm mb-4">
                    Наш эксперт поможет выбрать подходящую программу лично для вас
                  </p>
                  <p className="font-inter text-brand-green font-medium text-sm">
                    📞 +7 (977) 727-67-64
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 animate-fade-up delay-200">
              <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
                {!submitted ? (
                  <>
                    <h2 className="font-montserrat font-bold text-2xl text-brand-dark mb-2">
                      Напишите нам
                    </h2>
                    <p className="font-inter text-muted-foreground text-sm mb-8">
                      Заполните форму и мы ответим в ближайшее время
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name */}
                      <div>
                        <label className="block font-inter font-medium text-sm text-brand-dark mb-1.5">
                          Ваше имя <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Иван Иванов"
                          value={form.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border font-inter text-sm outline-none transition-all duration-200
                            focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 bg-brand-light
                            ${errors.name ? 'border-red-400' : 'border-border'}`}
                        />
                        {errors.name && (
                          <p className="font-inter text-xs text-red-400 mt-1">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block font-inter font-medium text-sm text-brand-dark mb-1.5">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="ivan@example.com"
                          value={form.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border font-inter text-sm outline-none transition-all duration-200
                            focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 bg-brand-light
                            ${errors.email ? 'border-red-400' : 'border-border'}`}
                        />
                        {errors.email && (
                          <p className="font-inter text-xs text-red-400 mt-1">{errors.email}</p>
                        )}
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block font-inter font-medium text-sm text-brand-dark mb-1.5">
                          Тема
                        </label>
                        <select
                          value={form.subject}
                          onChange={(e) => handleChange('subject', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-border font-inter text-sm outline-none transition-all duration-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 bg-brand-light text-brand-dark"
                        >
                          <option value="">Выберите тему</option>
                          <option value="courses">Вопрос о курсах</option>
                          <option value="payment">Оплата и рассрочка</option>
                          <option value="corporate">Корпоративное обучение</option>
                          <option value="other">Другое</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block font-inter font-medium text-sm text-brand-dark mb-1.5">
                          Сообщение <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          placeholder="Расскажите, чем мы можем помочь..."
                          rows={5}
                          value={form.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border font-inter text-sm outline-none transition-all duration-200 resize-none
                            focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 bg-brand-light
                            ${errors.message ? 'border-red-400' : 'border-border'}`}
                        />
                        {errors.message && (
                          <p className="font-inter text-xs text-red-400 mt-1">{errors.message}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="btn-primary w-full py-4 rounded-xl font-montserrat font-bold text-base flex items-center justify-center gap-2"
                      >
                        <Icon name="Send" size={18} />
                        Отправить сообщение
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12 animate-fade-up">
                    <div className="w-20 h-20 rounded-full bg-brand-green/15 flex items-center justify-center mx-auto mb-6">
                      <Icon name="CheckCircle" size={40} className="text-brand-green" />
                    </div>
                    <h3 className="font-montserrat font-black text-2xl text-brand-dark mb-3">
                      Сообщение отправлено!
                    </h3>
                    <p className="font-inter text-muted-foreground mb-8">
                      Спасибо, {form.name}! Мы свяжемся с вами на {form.email} в течение часа.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                      className="btn-outline px-8 py-3 rounded-xl font-montserrat font-bold text-sm"
                    >
                      Отправить ещё
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}