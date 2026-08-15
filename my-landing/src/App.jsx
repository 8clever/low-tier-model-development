import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Params from './components/Params';
import Features from './components/Features';
import Limits from './components/Limits';
import CodeDemo from './components/CodeDemo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Params />
        <Features />
        <Limits />
        <CodeDemo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
