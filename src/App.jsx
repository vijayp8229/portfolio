import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SettingsPanel from './components/Settings';

function App() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden bg-[var(--bg-primary)]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <SettingsPanel />
    </div>
  );
}

export default App;
