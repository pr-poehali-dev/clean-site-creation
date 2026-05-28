import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import Icon from '@/components/ui/icon';

const stats = [
  { value: '12 000+', label: 'Студентов обучились' },
  { value: '85+', label: 'Курсов в каталоге' },
  { value: '97%', label: 'Довольных выпускников' },
  { value: '5 лет', label: 'Опыта на рынке' },
];

const features = [
  { icon: 'BookOpen', title: 'Обучение', desc: 'Структурированные программы от практикующих экспертов' },
  { icon: 'TrendingUp', title: 'Прогресс', desc: 'Отслеживайте рост навыков в личном кабинете' },
  { icon: 'Target', title: 'Цели', desc: 'Персональный план развития под ваши задачи' },
  { icon: 'Users', title: 'Сообщество', desc: 'Нетворкинг с единомышленниками и менторами' },
  { icon: 'Briefcase', title: 'Портфолио', desc: 'Реальные проекты для резюме уже в процессе' },
  { icon: 'Award', title: 'Достижения', desc: 'Сертификаты, признанные работодателями' },
];

const courses = [
  {
    tag: 'Популярное',
    title: 'Цифровой маркетинг',
    desc: 'Освойте SMM, SEO, таргет и аналитику с нуля до про',
    duration: '3 месяца',
    level: 'Начинающий',
    color: 'bg-brand-teal',
  },
  {
    tag: 'Новинка',
    title: 'Data Science',
    desc: 'Python, ML и анализ данных для карьеры в IT',
    duration: '4 месяца',
    level: 'Средний',
    color: 'bg-brand-green',
  },
  {
    tag: 'Топ продаж',
    title: 'UX/UI Дизайн',
    desc: 'Figma, дизайн-системы и работа с продуктовой командой',
    duration: '3.5 месяца',
    level: 'Начинающий',
    color: 'bg-brand-blue',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-light">
      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-brand-dark">
        {/* Pattern bg */}
        <div className="absolute inset-0 brand-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-teal/20 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="animate-fade-up">
                <span className="inline-block bg-brand-green/20 text-brand-green font-inter text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                  Образовательная платформа нового поколения
                </span>
              </div>
              <h1 className="font-montserrat font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-up delay-100">
                Учись.<br />
                <span className="text-brand-green">Развивайся.</span><br />
                Достигай.
              </h1>
              <p className="font-inter text-lg text-white/70 leading-relaxed mb-8 max-w-lg animate-fade-up delay-200">
                Progress Education — современная образовательная платформа для тех, кто стремится к знаниям и будущему. Практические курсы от экспертов.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
                <Link to="/courses" className="btn-primary px-7 py-3.5 rounded-xl font-montserrat font-bold text-base">
                  Смотреть курсы
                </Link>
                <Link to="/contact" className="btn-outline px-7 py-3.5 rounded-xl font-montserrat font-bold text-base border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                  Получить консультацию
                </Link>
              </div>
            </div>

            {/* Logo animated */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="absolute -inset-8 bg-brand-green/10 rounded-full blur-3xl" />
                <Logo size="lg" animate={true} />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-up delay-400">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-montserrat font-black text-3xl text-brand-green mb-1">
                  {stat.value}
                </div>
                <div className="font-inter text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-3xl md:text-4xl text-brand-dark mb-4">
              Всё для вашего роста
            </h2>
            <p className="font-inter text-muted-foreground text-lg max-w-xl mx-auto">
              Мы создали экосистему, где каждый элемент работает на ваш результат
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`card-hover bg-brand-light rounded-2xl p-7 border border-transparent hover:border-brand-teal/20 animate-fade-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-5">
                  <Icon name={f.icon} size={22} className="text-brand-teal" fallback="Star" />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-brand-dark mb-2">{f.title}</h3>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES PREVIEW */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="font-montserrat font-black text-3xl md:text-4xl text-brand-dark mb-3">
                Популярные курсы
              </h2>
              <p className="font-inter text-muted-foreground">
                Выбирайте из более 85 программ по востребованным направлениям
              </p>
            </div>
            <Link to="/courses" className="btn-outline px-6 py-3 rounded-xl font-montserrat font-bold text-sm flex-shrink-0">
              Все курсы →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <div
                key={course.title}
                className={`card-hover bg-white rounded-2xl overflow-hidden shadow-sm animate-fade-up`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className={`h-2 ${course.color}`} />
                <div className="p-6">
                  <span className="inline-block bg-brand-light text-brand-teal font-inter text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {course.tag}
                  </span>
                  <h3 className="font-montserrat font-bold text-xl text-brand-dark mb-2">
                    {course.title}
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground mb-6 leading-relaxed">
                    {course.desc}
                  </p>
                  <div className="flex items-center justify-between text-xs font-inter text-muted-foreground mb-5">
                    <span className="flex items-center gap-1.5">
                      <Icon name="Clock" size={13} className="text-brand-teal" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="BarChart2" size={13} className="text-brand-teal" />
                      {course.level}
                    </span>
                  </div>
                  <Link
                    to="/courses"
                    className="btn-primary w-full text-center block py-2.5 rounded-xl font-montserrat font-semibold text-sm"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-brand-teal relative overflow-hidden">
        <div className="absolute inset-0 brand-pattern opacity-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="font-montserrat font-black text-3xl md:text-5xl text-white mb-4">
            Готовы начать путь к цели?
          </h2>
          <p className="font-inter text-white/80 text-lg mb-10 max-w-lg mx-auto">
            Присоединяйтесь к 12 000 студентов, которые уже меняют свою жизнь с нами
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-brand-teal px-10 py-4 rounded-xl font-montserrat font-bold text-lg hover:bg-brand-light transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            Начать бесплатно
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
