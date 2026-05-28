import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const team = [
  {
    name: 'Строганов Илья',
    role: 'Основатель и CEO',
    desc: 'Предприниматель с 12-летним опытом в EdTech. Запустил 3 образовательных стартапа.',
    skills: ['Стратегия', 'EdTech', 'Инвестиции'],
    emoji: '👨‍💼',
  },
  {
    name: 'Айсель Бехбудова',
    role: 'Директор по обучению',
    desc: 'Эксперт в методологии обучения взрослых. PhD в педагогике, 8 лет в онлайн-образовании.',
    skills: ['Методология', 'Педагогика', 'Curriculum'],
    emoji: '👩‍🏫',
  },
  {
    name: 'Роман Рашидович',
    role: 'Ведущий преподаватель Data Science',
    desc: 'Senior Data Scientist в Яндексе. Обучил более 2000 студентов аналитике и ML.',
    skills: ['Python', 'ML', 'Аналитика'],
    emoji: '👨‍💻',
  },
  {
    name: 'Сергей Чуднов',
    role: 'Преподаватель UX/UI',
    desc: 'Product Designer с опытом в Сбере и Mail.ru. Ментор по дизайну 6 лет.',
    skills: ['Figma', 'UX Research', 'Дизайн-системы'],
    emoji: '👨‍🎨',
  },
  {
    name: 'Эрдни Эрдниев',
    role: 'Преподаватель маркетинга',
    desc: 'CMO с 10-летним опытом в digital. Вёл рекламные кампании с бюджетом 100M+.',
    skills: ['Performance', 'SMM', 'SEO'],
    emoji: '📊',
  },
  {
    name: 'Жуков Захар',
    role: 'Head of Community',
    desc: 'Выстраивает экосистему студентов и выпускников. Организатор 50+ мероприятий.',
    skills: ['Нетворкинг', 'Ивенты', 'HR'],
    emoji: '🤝',
  },
];

const values = [
  { icon: 'TrendingUp', title: 'Развитие', desc: 'Каждый день — шаг вперёд' },
  { icon: 'Target', title: 'Прогресс', desc: 'Измеримые результаты' },
  { icon: 'Heart', title: 'Поддержка', desc: 'Команда всегда рядом' },
  { icon: 'Globe', title: 'Открытость', desc: 'Знания доступны каждому' },
  { icon: 'Shield', title: 'Ответственность', desc: 'За качество и результат' },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-brand-light">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 brand-pattern opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-block bg-brand-green/20 text-brand-green font-inter text-sm font-medium px-4 py-1.5 rounded-full mb-5">
              Наша команда
            </span>
            <h1 className="font-montserrat font-black text-4xl md:text-5xl text-white mb-4">
              Люди за Progress Education
            </h1>
            <p className="font-inter text-white/60 text-lg leading-relaxed">
              Эксперты-практики, которые сами прошли путь от новичка до профессионала и теперь делятся опытом
            </p>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="card-hover bg-brand-light rounded-2xl p-7 border border-transparent hover:border-brand-teal/20 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Avatar */}
                <div className="w-16 h-16 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-3xl mb-5">
                  {member.emoji}
                </div>
                <h3 className="font-montserrat font-bold text-lg text-brand-dark mb-1">
                  {member.name}
                </h3>
                <p className="font-inter text-sm font-medium text-brand-teal mb-3">
                  {member.role}
                </p>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-5">
                  {member.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white text-brand-dark font-inter text-xs font-medium px-3 py-1 rounded-full border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-6">
          <div className="bg-brand-dark rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 brand-pattern opacity-20" />
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full border-2 border-brand-green flex items-center justify-center">
                  <Icon name="Target" size={18} className="text-brand-green" />
                </div>
                <span className="font-montserrat font-bold text-sm uppercase tracking-widest text-brand-green">
                  Миссия
                </span>
              </div>
              <h2 className="font-montserrat font-black text-3xl md:text-4xl text-white mb-6">
                Мы создаём цифровое пространство, где каждый может учиться, развиваться и достигать большего
              </h2>
              <p className="font-inter text-white/60 text-lg">
                Расти сегодня. Лидируй завтра.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-montserrat font-black text-3xl text-brand-dark text-center mb-12">
            Наши ценности
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="card-hover text-center w-44 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-teal/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={v.icon} size={26} className="text-brand-teal" fallback="Star" />
                </div>
                <h3 className="font-montserrat font-bold text-base text-brand-dark mb-1">{v.title}</h3>
                <p className="font-inter text-xs text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}