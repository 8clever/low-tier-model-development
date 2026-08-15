import React from 'react';

const links = [
  { href: '#params', label: 'Характеристики' },
  { href: '#capabilities', label: 'Возможности' },
  { href: '#limits', label: 'Ограничения' },
  { href: '#code', label: 'Подключение' },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-zinc-950/70 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 flex items-center justify-center text-lg shadow-lg shadow-fuchsia-500/30 group-hover:scale-105 transition-transform">
            🥒
          </span>
          <span className="font-bold text-lg tracking-tight">
            Big<span className="gradient-text">Pickle</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#code"
          className="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 hover:brightness-110 transition-all"
        >
          Подключить
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
