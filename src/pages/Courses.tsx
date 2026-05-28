import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'Маркетинг', 'IT и разработка', 'Дизайн', 'Бизнес', 'Аналитика', 'Soft Skills', 'Финансы', 'Продажи'];

const courses = [
  // Маркетинг
  { id: 1, cat: 'Маркетинг', tag: 'Хит', title: 'Цифровой маркетинг', desc: 'SMM, SEO, таргет и аналитика — полный курс от практиков рынка', duration: '3 месяца', level: 'Начинающий', students: 3200, color: 'bg-brand-teal' },
  { id: 2, cat: 'Маркетинг', tag: '', title: 'Контент-маркетинг', desc: 'Стратегия, создание и дистрибуция контента для бизнеса', duration: '1.5 месяца', level: 'Начинающий', students: 1340, color: 'bg-brand-teal' },
  { id: 3, cat: 'Маркетинг', tag: '', title: 'SEO-продвижение', desc: 'Технический SEO, семантика, ссылочная стратегия и аналитика позиций', duration: '2 месяца', level: 'Средний', students: 980, color: 'bg-brand-teal' },
  { id: 4, cat: 'Маркетинг', tag: 'Новинка', title: 'Маркетинг в Telegram', desc: 'Монетизация, рост аудитории и рекламные механики в Telegram', duration: '1 месяц', level: 'Начинающий', students: 2100, color: 'bg-brand-teal' },
  { id: 5, cat: 'Маркетинг', tag: '', title: 'Email-маркетинг', desc: 'Рассылки, автоворонки и триггерные письма для роста продаж', duration: '1 месяц', level: 'Начинающий', students: 760, color: 'bg-brand-teal' },
  { id: 6, cat: 'Маркетинг', tag: '', title: 'Performance-маркетинг', desc: 'Яндекс.Директ, Google Ads, таргет ВКонтакте — ROI-ориентированный подход', duration: '2.5 месяца', level: 'Средний', students: 1650, color: 'bg-brand-teal' },
  { id: 7, cat: 'Маркетинг', tag: '', title: 'Бренд-маркетинг', desc: 'Построение бренда, позиционирование и управление репутацией', duration: '2 месяца', level: 'Средний', students: 530, color: 'bg-brand-teal' },
  { id: 8, cat: 'Маркетинг', tag: '', title: 'Influence-маркетинг', desc: 'Работа с блогерами, нативная реклама и измерение эффективности', duration: '1 месяц', level: 'Начинающий', students: 890, color: 'bg-brand-teal' },
  { id: 9, cat: 'Маркетинг', tag: '', title: 'Маркетинговая аналитика', desc: 'Google Analytics 4, Яндекс.Метрика, сквозная аналитика', duration: '1.5 месяца', level: 'Средний', students: 720, color: 'bg-brand-teal' },

  // IT и разработка
  { id: 10, cat: 'IT и разработка', tag: 'Новинка', title: 'Data Science', desc: 'Python, машинное обучение и анализ данных для карьеры в IT', duration: '4 месяца', level: 'Средний', students: 1800, color: 'bg-brand-green' },
  { id: 11, cat: 'IT и разработка', tag: 'Популярное', title: 'Frontend разработка', desc: 'HTML, CSS, JavaScript, React — с нуля до первой работы', duration: '5 месяцев', level: 'Начинающий', students: 4100, color: 'bg-brand-green' },
  { id: 12, cat: 'IT и разработка', tag: '', title: 'Python для начинающих', desc: 'Основы языка, структуры данных, ООП и практические проекты', duration: '2 месяца', level: 'Начинающий', students: 3400, color: 'bg-brand-green' },
  { id: 13, cat: 'IT и разработка', tag: '', title: 'Backend на Python', desc: 'FastAPI, Django, базы данных и деплой серверных приложений', duration: '4 месяца', level: 'Средний', students: 1200, color: 'bg-brand-green' },
  { id: 14, cat: 'IT и разработка', tag: 'Новинка', title: 'Мобильная разработка (Flutter)', desc: 'Кроссплатформенные приложения для iOS и Android на Dart/Flutter', duration: '4.5 месяца', level: 'Средний', students: 870, color: 'bg-brand-green' },
  { id: 15, cat: 'IT и разработка', tag: '', title: 'DevOps основы', desc: 'Docker, CI/CD, Linux, мониторинг и автоматизация инфраструктуры', duration: '3 месяца', level: 'Средний', students: 640, color: 'bg-brand-green' },
  { id: 16, cat: 'IT и разработка', tag: '', title: 'Тестирование ПО (QA)', desc: 'Ручное и автоматическое тестирование, Selenium, Postman', duration: '2.5 месяца', level: 'Начинающий', students: 1560, color: 'bg-brand-green' },
  { id: 17, cat: 'IT и разработка', tag: '', title: 'SQL и базы данных', desc: 'PostgreSQL, проектирование схем, оптимизация запросов', duration: '1.5 месяца', level: 'Начинающий', students: 2200, color: 'bg-brand-green' },
  { id: 18, cat: 'IT и разработка', tag: '', title: '1С: Программирование', desc: 'Разработка на платформе 1С:Предприятие 8.3 с нуля', duration: '3 месяца', level: 'Начинающий', students: 780, color: 'bg-brand-green' },
  { id: 19, cat: 'IT и разработка', tag: 'Топ', title: 'Искусственный интеллект', desc: 'ChatGPT, нейросети, промпт-инжиниринг и автоматизация работы', duration: '2 месяца', level: 'Начинающий', students: 5600, color: 'bg-brand-green' },
  { id: 20, cat: 'IT и разработка', tag: '', title: 'Кибербезопасность', desc: 'Основы защиты данных, этичный хакинг и работа с уязвимостями', duration: '3 месяца', level: 'Средний', students: 430, color: 'bg-brand-green' },
  { id: 21, cat: 'IT и разработка', tag: '', title: 'JavaScript Advanced', desc: 'Продвинутый JS: асинхронность, паттерны, TypeScript, Node.js', duration: '2.5 месяца', level: 'Продвинутый', students: 920, color: 'bg-brand-green' },
  { id: 22, cat: 'IT и разработка', tag: '', title: 'Облачные технологии', desc: 'AWS, Yandex Cloud: виртуальные машины, хранилища, автоскейлинг', duration: '2 месяца', level: 'Средний', students: 380, color: 'bg-brand-green' },

  // Дизайн
  { id: 23, cat: 'Дизайн', tag: 'Топ', title: 'UX/UI Дизайн', desc: 'Figma, дизайн-системы и работа с продуктовой командой', duration: '3.5 месяца', level: 'Начинающий', students: 2600, color: 'bg-brand-blue' },
  { id: 24, cat: 'Дизайн', tag: '', title: 'Графический дизайн', desc: 'Визуальная коммуникация, брендинг и рекламные материалы', duration: '3 месяца', level: 'Начинающий', students: 1500, color: 'bg-brand-blue' },
  { id: 25, cat: 'Дизайн', tag: '', title: 'Motion-дизайн', desc: 'After Effects, анимация интерфейсов и motion graphics', duration: '2.5 месяца', level: 'Средний', students: 640, color: 'bg-brand-blue' },
  { id: 26, cat: 'Дизайн', tag: 'Новинка', title: '3D-дизайн (Blender)', desc: 'Моделирование, рендеринг и визуализация в Blender', duration: '3 месяца', level: 'Начинающий', students: 870, color: 'bg-brand-blue' },
  { id: 27, cat: 'Дизайн', tag: '', title: 'Дизайн презентаций', desc: 'PowerPoint, Keynote, Figma — корпоративные и питч-презентации', duration: '3 недели', level: 'Начинающий', students: 2300, color: 'bg-brand-blue' },
  { id: 28, cat: 'Дизайн', tag: '', title: 'Иллюстрация', desc: 'Цифровая иллюстрация в Procreate и Adobe Illustrator', duration: '2 месяца', level: 'Начинающий', students: 980, color: 'bg-brand-blue' },
  { id: 29, cat: 'Дизайн', tag: '', title: 'Веб-дизайн', desc: 'Создание сайтов в Figma с адаптивной вёрсткой и анимациями', duration: '2.5 месяца', level: 'Начинающий', students: 1760, color: 'bg-brand-blue' },
  { id: 30, cat: 'Дизайн', tag: '', title: 'Брендинг и айдентика', desc: 'Разработка логотипов, фирменного стиля и брендбука', duration: '2 месяца', level: 'Средний', students: 550, color: 'bg-brand-blue' },

  // Бизнес
  { id: 31, cat: 'Бизнес', tag: '', title: 'Управление проектами', desc: 'Agile, Scrum, Kanban — современные подходы к управлению командой', duration: '2 месяца', level: 'Средний', students: 980, color: 'bg-brand-teal' },
  { id: 32, cat: 'Бизнес', tag: 'Новинка', title: 'Корпоративные продажи', desc: 'B2B продажи, переговоры и работа с ключевыми клиентами', duration: '2 месяца', level: 'Средний', students: 620, color: 'bg-brand-teal' },
  { id: 33, cat: 'Бизнес', tag: '', title: 'Стартап с нуля', desc: 'От идеи до MVP: валидация, команда, первые продажи', duration: '2 месяца', level: 'Начинающий', students: 1100, color: 'bg-brand-teal' },
  { id: 34, cat: 'Бизнес', tag: '', title: 'HR-менеджмент', desc: 'Подбор персонала, адаптация, мотивация и удержание сотрудников', duration: '1.5 месяца', level: 'Начинающий', students: 740, color: 'bg-brand-teal' },
  { id: 35, cat: 'Бизнес', tag: '', title: 'Операционный менеджмент', desc: 'Оптимизация бизнес-процессов, KPI и управление эффективностью', duration: '2 месяца', level: 'Средний', students: 460, color: 'bg-brand-teal' },
  { id: 36, cat: 'Бизнес', tag: 'Топ', title: 'Управление командой', desc: 'Лидерство, делегирование и мотивация в современных командах', duration: '1.5 месяца', level: 'Средний', students: 1380, color: 'bg-brand-teal' },
  { id: 37, cat: 'Бизнес', tag: '', title: 'Бизнес-аналитика', desc: 'Анализ рынка, конкурентов и принятие стратегических решений', duration: '2 месяца', level: 'Средний', students: 580, color: 'bg-brand-teal' },
  { id: 38, cat: 'Бизнес', tag: '', title: 'Предпринимательство', desc: 'Открытие ИП/ООО, бизнес-планирование и работа с инвесторами', duration: '1 месяц', level: 'Начинающий', students: 1900, color: 'bg-brand-teal' },
  { id: 39, cat: 'Бизнес', tag: '', title: 'Управление продуктом', desc: 'Product Management: роадмап, метрики и взаимодействие с командой', duration: '3 месяца', level: 'Средний', students: 820, color: 'bg-brand-teal' },

  // Аналитика
  { id: 40, cat: 'Аналитика', tag: '', title: 'Продуктовая аналитика', desc: 'Метрики, A/B тесты и принятие решений на основе данных', duration: '2.5 месяца', level: 'Продвинутый', students: 760, color: 'bg-brand-green' },
  { id: 41, cat: 'Аналитика', tag: 'Хит', title: 'Excel для аналитики', desc: 'Сводные таблицы, Power Query, макросы и визуализация данных', duration: '1 месяц', level: 'Начинающий', students: 4800, color: 'bg-brand-green' },
  { id: 42, cat: 'Аналитика', tag: '', title: 'Power BI', desc: 'Дашборды, визуализация и бизнес-отчётность в Power BI', duration: '1.5 месяца', level: 'Начинающий', students: 2100, color: 'bg-brand-green' },
  { id: 43, cat: 'Аналитика', tag: '', title: 'Tableau', desc: 'Создание интерактивных отчётов и аналитических дашбордов', duration: '1 месяц', level: 'Средний', students: 680, color: 'bg-brand-green' },
  { id: 44, cat: 'Аналитика', tag: '', title: 'Системный аналитик', desc: 'Требования, ТЗ, UML, API и работа в IT-командах', duration: '3 месяца', level: 'Начинающий', students: 1340, color: 'bg-brand-green' },
  { id: 45, cat: 'Аналитика', tag: 'Новинка', title: 'BI и отчётность', desc: 'Проектирование хранилищ данных, ETL и корпоративная аналитика', duration: '2.5 месяца', level: 'Продвинутый', students: 320, color: 'bg-brand-green' },
  { id: 46, cat: 'Аналитика', tag: '', title: 'Финансовое моделирование', desc: 'DCF, LBO, сценарное моделирование в Excel для аналитиков', duration: '2 месяца', level: 'Средний', students: 490, color: 'bg-brand-green' },

  // Soft Skills
  { id: 47, cat: 'Soft Skills', tag: 'Хит', title: 'Публичные выступления', desc: 'Риторика, ораторское мастерство и уверенность на сцене', duration: '1 месяц', level: 'Начинающий', students: 2900, color: 'bg-brand-blue' },
  { id: 48, cat: 'Soft Skills', tag: '', title: 'Эмоциональный интеллект', desc: 'Управление эмоциями, эмпатия и работа в конфликтных ситуациях', duration: '3 недели', level: 'Начинающий', students: 1600, color: 'bg-brand-blue' },
  { id: 49, cat: 'Soft Skills', tag: '', title: 'Тайм-менеджмент', desc: 'GTD, методы планирования и борьба с прокрастинацией', duration: '2 недели', level: 'Начинающий', students: 3400, color: 'bg-brand-blue' },
  { id: 50, cat: 'Soft Skills', tag: '', title: 'Критическое мышление', desc: 'Логика, принятие решений и работа с информацией', duration: '3 недели', level: 'Начинающий', students: 1200, color: 'bg-brand-blue' },
  { id: 51, cat: 'Soft Skills', tag: 'Новинка', title: 'Деловая переписка', desc: 'Письма, отчёты, презентации — деловой стиль на русском и английском', duration: '2 недели', level: 'Начинающий', students: 870, color: 'bg-brand-blue' },
  { id: 52, cat: 'Soft Skills', tag: '', title: 'Управление стрессом', desc: 'Психологические техники и практики для работы в высоком темпе', duration: '2 недели', level: 'Начинающий', students: 1050, color: 'bg-brand-blue' },
  { id: 53, cat: 'Soft Skills', tag: '', title: 'Переговоры', desc: 'Техники убеждения, работа с возражениями и win-win стратегии', duration: '1 месяц', level: 'Средний', students: 740, color: 'bg-brand-blue' },
  { id: 54, cat: 'Soft Skills', tag: '', title: 'Нетворкинг', desc: 'Как строить деловые связи и использовать их для карьеры', duration: '2 недели', level: 'Начинающий', students: 630, color: 'bg-brand-blue' },

  // Финансы
  { id: 55, cat: 'Финансы', tag: 'Хит', title: 'Личные финансы', desc: 'Бюджет, инвестиции, пенсионное планирование и финансовая грамотность', duration: '1 месяц', level: 'Начинающий', students: 5200, color: 'bg-brand-teal' },
  { id: 56, cat: 'Финансы', tag: '', title: 'Инвестиции в акции', desc: 'Фундаментальный анализ, портфель и стратегии долгосрочного инвестора', duration: '2 месяца', level: 'Начинающий', students: 3100, color: 'bg-brand-teal' },
  { id: 57, cat: 'Финансы', tag: 'Новинка', title: 'Криптовалюты', desc: 'Блокчейн, DeFi, NFT и безопасная торговля на биржах', duration: '1.5 месяца', level: 'Начинающий', students: 2400, color: 'bg-brand-teal' },
  { id: 58, cat: 'Финансы', tag: '', title: 'Финансовый директор (CFO)', desc: 'Финансовое планирование, МСФО и стратегическое управление', duration: '4 месяца', level: 'Продвинутый', students: 280, color: 'bg-brand-teal' },
  { id: 59, cat: 'Финансы', tag: '', title: 'Бухгалтерский учёт', desc: '1С, налоги, отчётность и основы бухгалтерии для предпринимателей', duration: '2 месяца', level: 'Начинающий', students: 1800, color: 'bg-brand-teal' },
  { id: 60, cat: 'Финансы', tag: '', title: 'Трейдинг', desc: 'Технический анализ, торговые системы и управление рисками', duration: '2.5 месяца', level: 'Средний', students: 1400, color: 'bg-brand-teal' },

  // Продажи
  { id: 61, cat: 'Продажи', tag: 'Хит', title: 'Менеджер по продажам', desc: 'Холодные звонки, воронка продаж и работа с CRM-системами', duration: '1.5 месяца', level: 'Начинающий', students: 3600, color: 'bg-brand-green' },
  { id: 62, cat: 'Продажи', tag: '', title: 'Розничные продажи', desc: 'Техники продаж на торговой точке, мерчандайзинг и сервис', duration: '1 месяц', level: 'Начинающий', students: 1200, color: 'bg-brand-green' },
  { id: 63, cat: 'Продажи', tag: '', title: 'Продажи в соцсетях', desc: 'Продажи через Instagram, ВКонтакте и Telegram без бюджета', duration: '1 месяц', level: 'Начинающий', students: 2700, color: 'bg-brand-green' },
  { id: 64, cat: 'Продажи', tag: 'Новинка', title: 'Wildberries и Ozon', desc: 'Запуск и продвижение товаров на маркетплейсах с нуля', duration: '2 месяца', level: 'Начинающий', students: 4300, color: 'bg-brand-green' },
  { id: 65, cat: 'Продажи', tag: '', title: 'Работа с возражениями', desc: 'Технологии преодоления возражений и закрытия сложных сделок', duration: '2 недели', level: 'Средний', students: 890, color: 'bg-brand-green' },
  { id: 66, cat: 'Продажи', tag: '', title: 'CRM-системы', desc: 'Работа в Bitrix24, amoCRM: автоматизация воронки и аналитика', duration: '3 недели', level: 'Начинающий', students: 1560, color: 'bg-brand-green' },
  { id: 67, cat: 'Продажи', tag: '', title: 'Телефонные продажи', desc: 'Скрипты, голос, интонация и закрытие сделок по телефону', duration: '2 недели', level: 'Начинающий', students: 980, color: 'bg-brand-green' },
  { id: 68, cat: 'Продажи', tag: 'Топ', title: 'Руководитель отдела продаж', desc: 'Найм, обучение команды, KPI и масштабирование продаж', duration: '2.5 месяца', level: 'Продвинутый', students: 670, color: 'bg-brand-green' },
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
              {courses.length}+ курсов
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
                {cat !== 'Все' && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({courses.filter(c => c.cat === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <p className="font-inter text-sm text-muted-foreground mb-6">
            Найдено курсов: <span className="font-semibold text-brand-dark">{filtered.length}</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course, i) => (
              <div
                key={course.id}
                className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-transparent hover:border-brand-teal/20 animate-fade-up"
                style={{ animationDelay: `${Math.min(i * 0.05, 0.5)}s` }}
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
