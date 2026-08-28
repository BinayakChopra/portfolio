import React, { useState, useEffect, useCallback } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ── scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── active section observer ── */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ── smooth scroll handler ── */
  const handleClick = useCallback(
    (e, href) => {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    },
    [],
  );

  /* ── lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Desktop / Tablet navbar ── */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        style={{
          ...styles.wrapper,
          ...(scrolled ? styles.wrapperScrolled : styles.wrapperTop),
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div style={styles.inner}>
          {/* logo */}
          <a
            href="#hero"
            onClick={(e) => handleClick(e, '#hero')}
            style={styles.logo}
            aria-label="Home"
          >
            BC
          </a>

          {/* desktop links */}
          <ul style={styles.linkList}>
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={href} style={{ listStyle: 'none' }}>
                  <a
                    href={href}
                    onClick={(e) => handleClick(e, href)}
                    style={{
                      ...styles.link,
                      color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                    }}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        style={styles.underline}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* theme toggle */}
          <button
            onClick={toggleTheme}
            style={styles.themeBtn}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.25 }}
                style={{ display: 'flex' }}
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            style={styles.hamburger}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={styles.overlay}
            onClick={() => setMobileOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 340, damping: 28 }}
              style={styles.mobileMenu}
              onClick={(e) => e.stopPropagation()}
            >
              {NAV_LINKS.map(({ label, href }, i) => {
                const isActive = activeSection === href.slice(1);
                return (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={(e) => handleClick(e, href)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.25 }}
                    style={{
                      ...styles.mobileLink,
                      color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                      background: isActive ? 'var(--glass-bg)' : 'transparent',
                    }}
                  >
                    {label}
                  </motion.a>
                );
              })}

              <button
                onClick={toggleTheme}
                style={styles.mobileThemeBtn}
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Styles ── */
const styles = {
  wrapper: {
    position: 'fixed',
    top: 12,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% - 32px)',
    maxWidth: 800,
    zIndex: 50,
    borderRadius: 16,
    transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
  },
  wrapperTop: {
    background: 'transparent',
    border: '1px solid transparent',
    boxShadow: 'none',
  },
  wrapperScrolled: {
    background: 'var(--nav-bg)',
    backdropFilter: 'blur(24px) saturate(1.6)',
    WebkitBackdropFilter: 'blur(24px) saturate(1.6)',
    border: '1px solid var(--nav-border)',
    boxShadow: '0 4px 24px var(--glass-shadow)',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    gap: 8,
  },
  logo: {
    fontWeight: 800,
    fontSize: '1.05rem',
    letterSpacing: '-0.04em',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    flexShrink: 0,
  },
  linkList: {
    display: 'flex',
    gap: 4,
    alignItems: 'center',
    margin: 0,
    padding: 0,
    /* hidden on mobile */
  },
  link: {
    position: 'relative',
    fontSize: '0.82rem',
    fontWeight: 500,
    textDecoration: 'none',
    padding: '6px 12px',
    borderRadius: 10,
    transition: 'color 0.25s ease',
    whiteSpace: 'nowrap',
  },
  underline: {
    position: 'absolute',
    bottom: 2,
    left: '25%',
    width: '50%',
    height: 2,
    borderRadius: 1,
    background: 'var(--accent)',
  },
  themeBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 34,
    height: 34,
    borderRadius: 10,
    border: '1px solid var(--card-border)',
    background: 'var(--glass-bg)',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    flexShrink: 0,
    transition: 'background 0.25s ease',
  },
  hamburger: {
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    width: 34,
    height: 34,
    borderRadius: 10,
    border: '1px solid var(--card-border)',
    background: 'var(--glass-bg)',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    flexShrink: 0,
  },
  overlay: {
    position: 'fixed',
    inset: 0,
    zIndex: 49,
    background: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  mobileMenu: {
    width: '100%',
    maxWidth: 360,
    background: 'var(--nav-bg)',
    backdropFilter: 'blur(32px) saturate(1.6)',
    WebkitBackdropFilter: 'blur(32px) saturate(1.6)',
    border: '1px solid var(--nav-border)',
    borderRadius: 20,
    padding: '12px 8px',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  mobileLink: {
    fontSize: '1rem',
    fontWeight: 500,
    textDecoration: 'none',
    padding: '12px 16px',
    borderRadius: 12,
    transition: 'background 0.2s ease',
  },
  mobileThemeBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: '0.95rem',
    fontWeight: 500,
    padding: '12px 16px',
    borderRadius: 12,
    border: 'none',
    background: 'transparent',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    marginTop: 4,
  },
};

/* ── Responsive CSS injected once ── */
const RESPONSIVE_ID = 'navbar-responsive-css';
if (typeof document !== 'undefined' && !document.getElementById(RESPONSIVE_ID)) {
  const sheet = document.createElement('style');
  sheet.id = RESPONSIVE_ID;
  sheet.textContent = `
    @media (max-width: 768px) {
      nav[role="navigation"] ul { display: none !important; }
      nav[role="navigation"] button[aria-label="Toggle menu"] { display: flex !important; }
    }
  `;
  document.head.appendChild(sheet);
}
