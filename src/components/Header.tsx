import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'Главная', path: '/' },
  { label: 'Курсы', path: '/courses', dropdown: [
    { label: 'Все курсы', path: '/courses' },
    { label: 'Для начинающих', path: '/courses#beginner' },
    { label: 'Профессиональные', path: '/courses#professional' },
    { label: 'Корпоративные', path: '/courses#corporate' },
  ]},
  { label: 'Команда', path: '/team' },
  { label: 'Связаться', path: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-light'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <Logo size="sm" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.path}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.path}
                className={`nav-link font-inter font-medium text-sm flex items-center gap-1 py-2 ${
                  location.pathname === item.path
                    ? 'text-brand-teal active'
                    : 'text-brand-dark hover:text-brand-teal'
                }`}
              >
                {item.label}
                {item.dropdown && (
                  <Icon
                    name="ChevronDown"
                    size={14}
                    className={`transition-transform duration-200 ${
                      openDropdown === item.label ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </Link>

              {/* Dropdown */}
              {item.dropdown && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-brand-light overflow-hidden animate-slide-down">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className="block px-4 py-3 text-sm font-inter text-brand-dark hover:bg-brand-light hover:text-brand-teal transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="btn-primary px-5 py-2.5 rounded-xl font-montserrat font-600 text-sm"
          >
            Начать обучение
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-brand-light transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Icon name={mobileOpen ? 'X' : 'Menu'} size={22} className="text-brand-dark" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-brand-light animate-slide-down">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg font-inter font-medium text-sm transition-colors ${
                    location.pathname === item.path
                      ? 'bg-brand-light text-brand-teal'
                      : 'text-brand-dark hover:bg-brand-light'
                  }`}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 border-l-2 border-brand-light pl-3 mt-1 mb-2 flex flex-col gap-1">
                    {item.dropdown.slice(1).map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block px-3 py-2 rounded-lg text-xs font-inter text-muted-foreground hover:text-brand-teal transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-brand-light mt-2">
              <Link
                to="/contact"
                className="btn-primary block text-center px-5 py-3 rounded-xl font-montserrat font-semibold text-sm"
              >
                Начать обучение
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
