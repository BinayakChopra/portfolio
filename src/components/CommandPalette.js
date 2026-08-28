import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Home, User, Code2, Briefcase, GraduationCap, Mail, FileDown, Moon, Sun, Volume2, VolumeX, X } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import { useTheme } from '../context/ThemeContext';

const CommandPalette = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  const commands = [
    { icon: Home, label: 'Go to Home', action: () => window.location.hash = '#home', keywords: 'home hero' },
    { icon: User, label: 'Go to About', action: () => window.location.hash = '#about', keywords: 'about me bio' },
    { icon: Code2, label: 'Go to Skills', action: () => window.location.hash = '#skills', keywords: 'skills tech stack' },
    { icon: Code2, label: 'Go to Projects', action: () => window.location.hash = '#projects', keywords: 'projects work portfolio' },
    { icon: Briefcase, label: 'Go to Experience', action: () => window.location.hash = '#experience', keywords: 'experience journey timeline' },
    { icon: GraduationCap, label: 'Go to Education', action: () => window.location.hash = '#education', keywords: 'education degree university' },
    { icon: Mail, label: 'Go to Contact', action: () => window.location.hash = '#contact', keywords: 'contact email reach' },
    { icon: FileDown, label: 'Download / View Resume (CV)', action: () => window.open('/resume.html', '_blank'), keywords: 'resume cv download pdf' },
    {
      icon: theme === 'dark' ? Sun : Moon,
      label: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      action: () => { toggleTheme(); sounds.playSelect(); },
      keywords: 'theme dark light mode'
    },
    {
      icon: sounds.enabled ? VolumeX : Volume2,
      label: `Turn Sound ${sounds.enabled ? 'Off' : 'On'}`,
      action: () => { sounds.toggle(); sounds.playSelect(); },
      keywords: 'sound audio mute volume'
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.keywords.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
        sounds.playHover();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
        sounds.playHover();
      } else if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
        e.preventDefault();
        filteredCommands[selectedIndex].action();
        sounds.playSelect();
        onClose();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(8px)',
              zIndex: 99999,
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: '15%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
              maxWidth: '600px',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(28px) saturate(1.8)',
              WebkitBackdropFilter: 'blur(28px) saturate(1.8)',
              border: '1px solid var(--glass-border)',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              zIndex: 100000,
              overflow: 'hidden',
            }}
          >
            {/* Search Input */}
            <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid var(--card-border)' }}>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Search size={20} style={{ color: 'var(--text-tertiary)' }} />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    fontSize: '1.063rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                  }}
                />
                <button
                  onClick={onClose}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px',
                  }}
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Commands List */}
            <div style={{ maxHeight: '400px', overflowY: 'auto', padding: '8px' }}>
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd, idx) => {
                  const Icon = cmd.icon;
                  return (
                    <motion.button
                      key={cmd.label}
                      onClick={() => {
                        cmd.action();
                        sounds.playSelect();
                        onClose();
                      }}
                      onMouseEnter={() => {
                        setSelectedIndex(idx);
                        sounds.playHover();
                      }}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        padding: '12px 16px',
                        background: idx === selectedIndex ? 'var(--card-hover-bg)' : 'transparent',
                        border: idx === selectedIndex ? '1px solid var(--accent)' : '1px solid transparent',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        color: 'var(--text-primary)',
                        fontSize: '0.938rem',
                        fontFamily: 'inherit',
                        fontWeight: 500,
                        textAlign: 'left',
                        transition: 'all 0.15s ease',
                      }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          background: idx === selectedIndex ? 'var(--accent)' : 'var(--card-bg)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: idx === selectedIndex ? '#fff' : 'var(--text-secondary)',
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      {cmd.label}
                    </motion.button>
                  );
                })
              ) : (
                <div
                  style={{
                    padding: '32px',
                    textAlign: 'center',
                    color: 'var(--text-tertiary)',
                    fontSize: '0.938rem',
                  }}
                >
                  No commands found
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div
              style={{
                padding: '12px 20px',
                borderTop: '1px solid var(--card-border)',
                display: 'flex',
                gap: '16px',
                fontSize: '0.75rem',
                color: 'var(--text-tertiary)',
              }}
            >
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
              <span>ESC Close</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
