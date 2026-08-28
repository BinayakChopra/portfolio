import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Home, User, Briefcase, Code2, Mail, Volume2, VolumeX, Command, Palette } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import { useTheme } from '../context/ThemeContext';

const SpatialDock = ({ onCommandPaletteOpen }) => {
  const { toggleTheme } = useTheme();
  const [soundEnabled, setSoundEnabled] = useState(sounds.enabled);
  const mouseX = useMotionValue(Infinity);

  const dockItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: User, label: 'About', href: '#about' },
    { icon: Code2, label: 'Projects', href: '#projects' },
    { icon: Briefcase, label: 'Experience', href: '#experience' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  const handleSoundToggle = () => {
    const newState = sounds.toggle();
    setSoundEnabled(newState);
  };

  const handleThemeToggle = () => {
    toggleTheme();
    sounds.playSelect();
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        display: 'flex',
        gap: '8px',
        padding: '12px 16px',
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(24px) saturate(1.8)',
        WebkitBackdropFilter: 'blur(24px) saturate(1.8)',
        border: '1px solid var(--glass-border)',
        borderRadius: '24px',
        boxShadow: '0 12px 48px var(--glass-shadow), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
      }}
    >
      {dockItems.map((item, idx) => (
        <DockIcon
          key={item.label}
          mouseX={mouseX}
          icon={item.icon}
          label={item.label}
          href={item.href}
        />
      ))}

      <div style={{ width: '1px', height: '48px', background: 'var(--card-border)', margin: '0 4px' }} />

      <DockIconButton
        mouseX={mouseX}
        icon={Command}
        label="Command Palette"
        onClick={() => {
          onCommandPaletteOpen?.();
          sounds.playSelect();
        }}
      />

      <DockIconButton
        mouseX={mouseX}
        icon={Palette}
        label="Toggle Theme"
        onClick={handleThemeToggle}
      />

      <DockIconButton
        mouseX={mouseX}
        icon={soundEnabled ? Volume2 : VolumeX}
        label={soundEnabled ? 'Sound On' : 'Sound Off'}
        onClick={handleSoundToggle}
      />
    </motion.div>
  );
};

const DockIcon = ({ mouseX, icon: Icon, label, href }) => {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [48, 64, 48]);
  const width = useSpring(widthSync, { stiffness: 300, damping: 25 });

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{
        width,
        height: 48,
        borderRadius: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        color: 'var(--text-primary)',
        textDecoration: 'none',
        position: 'relative',
        cursor: 'pointer',
        transition: 'border-color 0.2s',
      }}
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => sounds.playHover()}
      onClick={() => sounds.playSelect()}
      aria-label={label}
    >
      <Icon size={22} />
    </motion.a>
  );
};

const DockIconButton = ({ mouseX, icon: Icon, label, onClick }) => {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [48, 64, 48]);
  const width = useSpring(widthSync, { stiffness: 300, damping: 25 });

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      style={{
        width,
        height: 48,
        borderRadius: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        color: 'var(--text-primary)',
        cursor: 'pointer',
        transition: 'border-color 0.2s',
      }}
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => sounds.playHover()}
      aria-label={label}
    >
      <Icon size={22} />
    </motion.button>
  );
};

export default SpatialDock;
