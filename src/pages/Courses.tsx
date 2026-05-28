import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'Маркетинг', 'IT и разработка', 'Дизайн', 'Бизнес', 'Аналитика'];

const courses = [
  { id: 1, cat: 'Маркетинг', tag: 'Хит', title: 'Цифровой маркетинг', desc: 'SMM, SEO, таргет и аналитика — полный курс от практиков рынка', duration: '3 месяца', level: 'Начинающий', students: 3200, color: 'bg-brand-teal' },
  { id: 2, cat: 'IT и разработка', tag: 'Новинка', title: 'Data Science', desc: 'Python, машинное обучение и анализ данных для карьеры в IT', duration: '4 месяца', level: 'Средний', students: 1800, color: 'bg-brand-green' },
  { id: 3, cat: 'Дизайн', tag: 'Топ', title: 'UX/UI Дизайн', desc: 'Figma, дизайн-системы и работа с продуктовой командой', duration: '3.5 месяца', level: 'Начинающий', students: 2600, color: 'bg-brand-blue' },
  { id: 4, cat: 'Бизнес', tag: '', title: 'Управление проектами', desc: 'Agile, Scrum, Kanban — современные подходы к управлению командой', duration: '2 месяца', level: 'Средний', students: 980, color: 'bg-brand-teal' },
  { id: 5, cat: 'Аналитика', tag: '', title: 'Продуктовая аналитика', desc: 'Метрики, A/B тесты и принятие решений на основе данных', duration: '2.5 месяца', level: 'Продвинутый', students: 760, color: 'bg-brand-green' },
  { id: 6, cat: 'IT и разработка', tag: 'Популярное', title: 'Frontend разработка', desc: 'HTML, CSS, JavaScript, React — с нуля до первой работы', duration: '5 месяцев', level: 'Начинающий', students: 4100, color: 'bg-brand-blue' },
  { id: 7, cat: 'Маркетинг', tag: '', title: 'Контент-маркетинг', desc: 'Стратегия, создание и дистрибуция контента для бизнеса', duration: '1.5 месяца', level: 'Начинающий', students: 1340, color: 'bg-brand-teal' },
  { id: 8, cat: 'Бизнес', tag: 'Новинка', title: 'Корпоративные продажи', desc: 'B2B продажи, переговоры и работа с ключевыми клиентами', duration: '2 месяца', level: 'Средний', students: 620, color: 'bg-brand-green' },
  { id: 9, cat: 'Дизайн', tag: '', title: 'Графический дизайн', desc: 'Визуальная коммуникация, брендинг и рекламные материалы', duration: '3 месяца', level: 'Начинающий', students: 1500, color: 'bg-brand-blue' },
];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('Все');

  const filtered = activeCategory === 'Все'
    ? courses
    : courses.filter((c) => c.cat === activeCategory);

  return (
    <div className="min-h-screen bg-brand-light">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 brand-pattern opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-block bg-brand-green/20 text-brand-green font-inter text-sm font-medium px-4 py-1.5 rounded-full mb-5">
              85+ курсов
            </span>
            <h1 className="font-montserrat font-black text-4xl md:text-5xl text-white mb-4">
              Каталог курсов
            </h1>
            <p className="font-inter text-white/60 text-lg leading-relaxed">
              Выбирайте направление, стартуйте в удобном темпе — наши программы созданы для реального результата
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full font-inter font-medium text-sm transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-teal text-white shadow-md shadow-brand-teal/30'
                    : 'bg-brand-light text-brand-dark hover:bg-brand-teal/10 hover:text-brand-teal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course, i) => (
              <div
                key={course.id}
                className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-transparent hover:border-brand-teal/20 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className={`h-1.5 ${course.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block bg-brand-light text-muted-foreground font-inter text-xs font-medium px-3 py-1 rounded-full">
                      {course.cat}
                    </span>
                    {course.tag && (
                      <span className="inline-block bg-brand-green/15 text-brand-teal font-inter text-xs font-semibold px-3 py-1 rounded-full">
                        {course.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-brand-dark mb-2">
                    {course.title}
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground mb-5 leading-relaxed">
                    {course.desc}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-inter text-muted-foreground mb-5">
                    <span className="flex items-center gap-1.5">
                      <Icon name="Clock" size={13} className="text-brand-teal" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="BarChart2" size={13} className="text-brand-teal" />
                      {course.level}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="Users" size={13} className="text-brand-teal" />
                      {course.students.toLocaleString('ru')}
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className="btn-primary w-full text-center block py-3 rounded-xl font-montserrat font-semibold text-sm"
                  >
                    Записаться
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="font-inter text-muted-foreground">Курсы не найдены</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
