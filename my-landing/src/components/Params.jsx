import React from 'react';

const params = [
  { label: 'Модель', value: 'opencode/big-pickle', mono: true },
  { label: 'Провайдер', value: 'OpenCode Zen' },
  { label: 'Контекст', value: '200 000 токенов' },
  { label: 'Макс. выход', value: '32 000 токенов' },
  { label: 'Reasoning', value: 'Включён' },
  { label: 'Входные данные', value: 'Текст' },
  { label: 'API', value: 'OpenAI-совместимый', mono: true },
  { label: 'Цена', value: '$0 за 1M токенов' },
];

const Params = () => {
  return (
    <section id="params" className="relative py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-fuchsia-400">
            Характеристики
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">
            Параметры модели
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400 text-lg">
            Всё, что нужно знать перед подключением — в одной таблице.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {params.map((param) => (
            <div key={param.label} className="glass rounded-2xl p-6 card-hover">
              <div className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
                {param.label}
              </div>
              <div
                className={
                  'text-lg font-semibold ' +
                  (param.mono
                    ? 'font-mono text-cyan-300 text-base break-all'
                    : 'text-zinc-100')
                }
              >
                {param.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 glass rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm text-zinc-400">
          <span className="text-2xl" aria-hidden="true">🔗</span>
          <span>
            Endpoint:{' '}
            <code className="font-mono text-cyan-300 break-all">
              https://opencode.ai/zen/v1
            </code>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Params;
