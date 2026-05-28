import { Link } from 'react-router-dom';
import Logo from './Logo';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo size="md" variant="full" />
            </div>
            <p className="text-brand-green font-inter italic text-sm mb-4">
              Учись. Развивайся. Достигай.
            </p>
            <p className="text-white/60 font-inter text-sm leading-relaxed max-w-xs">
              Современная образовательная платформа для тех, кто стремится к знаниям и будущему.
            </p>
            <div className="flex gap-4 mt-6">
              {['Telegram', 'Instagram', 'Youtube'].map((s) => (
                <button
                  key={s}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-teal transition-all duration-200 hover:scale-110 flex items-center justify-center"
                  title={s}
                >
                  <Icon
                    name={s === 'Telegram' ? 'Send' : s === 'Instagram' ? 'Camera' : 'Play'}
                    size={16}
                    className="text-white"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-montserrat font-bold text-sm uppercase tracking-widest text-white/40 mb-5">
              Навигация
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Главная', path: '/' },
                { label: 'Курсы', path: '/courses' },
                { label: 'Команда', path: '/team' },
                { label: 'Связаться', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="font-inter text-sm text-white/70 hover:text-brand-green transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-montserrat font-bold text-sm uppercase tracking-widest text-white/40 mb-5">
              Контакты
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon name="Mail" size={16} className="text-brand-green mt-0.5 flex-shrink-0" />
                <span className="font-inter text-sm text-white/70">stroganov.ilya09@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Phone" size={16} className="text-brand-green mt-0.5 flex-shrink-0" />
                <span className="font-inter text-sm text-white/70">+7 (977) 727-67-64</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Send" size={16} className="text-brand-green mt-0.5 flex-shrink-0" />
                <span className="font-inter text-sm text-white/70">@flafik77rus</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-white/40">
            © 2024 Progress Education. Все права защищены.
          </p>
          <p className="font-inter text-xs text-white/30 italic">
            Расти сегодня. Лидируй завтра.
          </p>
        </div>
      </div>
    </footer>
  );
}