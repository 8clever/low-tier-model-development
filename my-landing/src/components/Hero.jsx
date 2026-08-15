import React from 'react';

const stats = [
  { value: '200K', label: 'токенов контекста' },
  { value: '$0', label: 'цена за токены' },
  { value: '32K', label: 'токенов на выход' },
  { value: '✓', label: 'reasoning' },
];

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-violet-600/25 blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 -left-32 w-[400px] h-[400px] rounded-full bg-cyan-500/15 blur-3xl animate-blob-slow"
        aria-hidden="true"
      />
      <div
        className="absolute top-64 -right-32 w-[400px] h-[400px] rounded-full bg-fuchsia-500/15 blur-3xl animate-blob"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-zinc-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          opencode · бесплатная модель для разработки
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-6">
          Big <span className="gradient-text">Pickle</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-400 mb-10">
          ИИ-ассистент, который пишет, отлаживает и рефакторит код прямо в
          терминале. Мышление вслух (reasoning), контекст в 200&nbsp;000 токенов
          и нативные инструменты — полностью бесплатно.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#code"
            className="px-7 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-xl shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 hover:brightness-110 transition-all"
          >
            Начать бесплатно
          </a>
          <a
            href="#capabilities"
            className="px-7 py-3.5 rounded-xl font-semibold glass text-zinc-200 hover:border-violet-400/40 hover:text-white transition-all"
          >
            Возможности
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl py-5 card-hover">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="mt-1 text-xs text-zinc-400 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-xl mx-auto text-left glass rounded-2xl shadow-2xl shadow-black/40 overflow-hidden animate-float">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
            <span className="ml-3 text-xs text-zinc-400 font-mono">~ big-pickle</span>
          </div>
          <div className="px-5 py-5 font-mono text-sm leading-relaxed">
            <p>
              <span className="text-fuchsia-400">$</span>{' '}
              <span className="text-zinc-300">Сделай красивый лендинг для модели</span>
            </p>
            <p className="mt-3 text-zinc-400">
              Готово. Собрал тёмную тему, градиенты, карточки с параметрами и
              стеком навыков.
            </p>
            <p className="mt-3">
              <span className="text-emerald-400">✓</span>{' '}
              <span className="text-zinc-300">Проверил в браузере — ошибок нет</span>
              <span className="text-cyan-400 animate-blink">▌</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
