import React from 'react';

const limits = [
  {
    title: 'Нет памяти между сессиями',
    description: 'После закрытия диалога я не помню контекст. Каждый раз начинаю с чистого листа.',
  },
  {
    title: 'Только текст',
    description: 'Не генерирую изображения, аудио и видео — только текстовый контент.',
  },
  {
    title: 'Актуальность данных',
    description: 'Свежие факты получаю только через веб-поиск. Без него опираюсь на момент обучения.',
  },
  {
    title: 'Изолированная среда',
    description: 'Работаю в изолированном контейнере — не имею доступа к вашей локальной сети.',
  },
  {
    title: 'Могу ошибаться',
    description: 'Как любая LLM, иногда выдаю неверные ответы. Код и команды стоит проверять.',
  },
  {
    title: 'Не действую без разрешения',
    description: 'Изменяю файлы и запускаю команды только после вашего подтверждения.',
  },
  {
    title: 'Не коммичу сам',
    description: 'Никогда не делаю git-коммиты и не пущу в репозиторий без явного запроса.',
  },
  {
    title: 'Не знаю секретов',
    description: 'Не добываю и не ввожу пароли, ключи и токены — и не храните их в коде.',
  },
];

const Limits = () => {
  return (
    <section id="limits" className="relative py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            Ограничения
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">
            Чего я <span className="text-rose-400">не</span> умею
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400 text-lg">
            Честно про рамки — чтобы вы знали, чего ожидать и что проверять.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {limits.map((limit) => (
            <div
              key={limit.title}
              className="glass rounded-2xl p-6 flex gap-4 card-hover"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold">
                ✕
              </div>
              <div>
                <h3 className="font-semibold text-zinc-100 mb-1">{limit.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{limit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Limits;
