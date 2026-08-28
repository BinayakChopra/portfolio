import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, Shield, Search, Layout } from 'lucide-react';

const learningItems = [
  { label: 'Java', icon: Code2 },
  { label: 'Data Structures & Algorithms', icon: BookOpen },
  { label: 'Cybersecurity', icon: Shield },
  { label: 'Digital Forensics', icon: Search },
  { label: 'Frontend Engineering', icon: Layout },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const styles = {
  section: {
    padding: '60px 0 100px',
  },
  heading: {
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: 700,
    letterSpacing: '-0.03em',
    marginBottom: '2rem',
    color: 'var(--text-primary)',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  },
  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 20px',
    background: 'var(--card-bg)',
    backdropFilter: 'blur(16px) saturate(1.4)',
    WebkitBackdropFilter: 'blur(16px) saturate(1.4)',
    border: '1px solid var(--card-border)',
    borderRadius: '14px',
    boxShadow: '0 2px 12px var(--glass-shadow), inset 0 1px 0 rgba(255,255,255,0.08)',
    cursor: 'default',
    transition: 'transform 0.3s ease, background 0.25s ease, box-shadow 0.25s ease',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: 'var(--status-green)',
    boxShadow: '0 0 6px var(--status-green)',
    flexShrink: 0,
    animation: 'learnPulse 2s ease-in-out infinite',
  },
  iconWrap: {
    color: 'var(--accent)',
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: 550,
    color: 'var(--text-primary)',
    letterSpacing: '-0.01em',
  },
};

/* Inject keyframe for the pulsing dot */
const pulseKeyframe = `
@keyframes learnPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}
`;

export default function Learning() {
  return (
    <section id="learning" style={styles.section}>
      <style>{pulseKeyframe}</style>
      <div className="section-container">
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          Currently Learning
        </motion.h2>

        <motion.div
          style={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {learningItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                style={styles.pill}
                variants={pillVariants}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
                  e.currentTarget.style.background = 'var(--card-hover-bg)';
                  e.currentTarget.style.boxShadow =
                    '0 6px 20px var(--glass-shadow), inset 0 1px 0 rgba(255,255,255,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'var(--card-bg)';
                  e.currentTarget.style.boxShadow =
                    '0 2px 12px var(--glass-shadow), inset 0 1px 0 rgba(255,255,255,0.08)';
                }}
              >
                <div style={styles.dot} />
                <div style={styles.iconWrap}>
                  <Icon size={16} strokeWidth={2} />
                </div>
                <span style={styles.label}>{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
