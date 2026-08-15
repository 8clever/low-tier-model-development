import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 flex items-center justify-center text-base">
              🥒
            </span>
            <span className="font-bold">
              Big<span className="gradient-text">Pickle</span>
            </span>
          </a>

          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a
              href="https://opencode.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              opencode.ai
            </a>
            <a
              href="https://github.com/anomalyco/opencode"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://opencode.ai/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Документация
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 text-center text-xs text-zinc-600">
          © 2026 Big Pickle · opencode · Бесплатная модель — бесплатный агент
        </div>
      </div>
    </footer>
  );
};

export default Footer;
