import React from 'react';

const features = [
  {
    title: 'Пишу код',
    description: 'Реализую фичи и компоненты на любом языке прямо в вашем проекте.',
    icon: '💻',
    color: 'from-violet-500/20',
  },
  {
    title: 'Отлаживаю',
    description: 'Нахожу и исправляю баги, читаю стектрейсы и логи.',
    icon: '🐛',
    color: 'from-emerald-500/20',
  },
  {
    title: 'Рефакторю',
    description: 'Улучшаю структуру, читаемость и производительность кода.',
    icon: '🔧',
    color: 'from-amber-500/20',
  },
  {
    title: 'Работаю с терминалом',
    description: 'Выполняю bash-команды, запускаю сборки и скрипты.',
    icon: '🧭',
    color: 'from-cyan-500/20',
  },
  {
    title: 'Ищу в коде',
    description: 'Быстро нахожу файлы, функции и места использования.',
    icon: '🔍',
    color: 'from-fuchsia-500/20',
  },
  {
    title: 'Планирую задачи',
    description: 'Разбиваю крупные задачи на понятные шаги и веду по ним.',
    icon: '🧠',
    color: 'from-sky-500/20',
  },
  {
    title: 'Ищу в интернете',
    description: 'Добываю актуальную информацию и документацию.',
    icon: '🌐',
    color: 'from-blue-500/20',
  },
  {
    title: 'Проверяю тесты',
    description: 'Запускаю тесты и линтеры, довожу изменения до зелёного.',
    icon: '🧪',
    color: 'from-rose-500/20',
  },
];

const Features = () => {
  return (
    <section id="capabilities" className="relative py-20 sm:py-28">
      <div
        className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            Возможности
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">
            Что я <span className="gradient-text">умею</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400 text-lg">
            Это не чат-бот «просто поговорить». Big Pickle работает с реальным
            кодом и инструментами.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass rounded-2xl p-6 card-hover relative overflow-hidden"
            >
              <div
                className={
                  'absolute inset-0 bg-gradient-to-br ' +
                  feature.color +
                  ' to-transparent opacity-0 hover:opacity-100 transition-opacity'
                }
                aria-hidden="true"
              />
              <div className="relative">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
