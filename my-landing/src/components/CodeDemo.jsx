import React from 'react';

const configCode = `{
  "model": "opencode/big-pickle",
  "provider": "opencode",
  "api": "https://opencode.ai/zen/v1",
  "reasoning": true
}`;

const shellCode = `$ npm i -g opencode-ai
$ opencode
> Выберите модель: opencode/big-pickle
✓ Готово — Big Pickle в вашем терминале`;

const CodeDemo = () => {
  const [tab, setTab] = React.useState('config');

  const code = tab === 'config' ? configCode : shellCode;

  return (
    <section id="code" className="relative py-20 sm:py-28">
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-fuchsia-600/10 blur-3xl animate-blob-slow"
        aria-hidden="true"
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Подключение
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">
            Начните <span className="gradient-text">за 30 секунд</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400 text-lg">
            OpenCode — open-source агент разработки в терминале. Big Pickle
            доступен в нём бесплатно.
          </p>
        </div>

        <div className="glass rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
          <div className="flex items-center gap-2 px-4 pt-4 pb-3 border-b border-white/10 bg-white/5">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
            <div className="ml-4 flex items-center gap-1 bg-white/5 rounded-lg p-1">
              {['config', 'shell'].map((key) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={
                    'px-3 py-1 rounded-md text-xs font-medium transition-colors ' +
                    (tab === key
                      ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white'
                      : 'text-zinc-400 hover:text-zinc-200')
                  }
                >
                  {key === 'config' ? 'opencode.json' : 'терминал'}
                </button>
              ))}
            </div>
          </div>
          <pre className="px-5 py-5 font-mono text-sm leading-relaxed text-zinc-300 overflow-x-auto">
            {code}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default CodeDemo;
