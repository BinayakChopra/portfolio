import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CyberTerminal from './components/CyberTerminal';
import Experience from './components/Experience';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GradientOrbs from './components/GradientOrbs';
import FloatingParticles from './components/FloatingParticles';
import CursorFollower from './components/CursorFollower';
import ScrollProgress from './components/ScrollProgress';
import SpatialDock from './components/SpatialDock';
import CommandPalette from './components/CommandPalette';

export default function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd+K (Mac) or Ctrl+K (Windows/Linux) to open command palette
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      {/* Custom Glowing Cursor */}
      <CursorFollower />

      {/* Enhanced Gradient Scroll Progress Bar */}
      <ScrollProgress />

      {/* Animated Floating Gradient Background Orbs */}
      <GradientOrbs />

      {/* Interactive Magnetic Particle Constellation */}
      <FloatingParticles />

      {/* Command Palette (Spotlight) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* visionOS-Style Floating Spatial Dock */}
      <SpatialDock onCommandPaletteOpen={() => setIsCommandPaletteOpen(true)} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <CyberTerminal />
          <Experience />
          <Education />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
