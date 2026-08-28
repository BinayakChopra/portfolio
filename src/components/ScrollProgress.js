import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setProgress(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* Top bar progress */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'var(--accent-gradient)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 10000,
          boxShadow: '0 0 12px rgba(79, 125, 249, 0.5)',
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      {/* Circular progress indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: progress > 5 ? 1 : 0, scale: progress > 5 ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          width: '56px',
          height: '56px',
          zIndex: 10000,
          pointerEvents: 'none',
        }}
      >
        <svg width="56" height="56" viewBox="0 0 56 56">
          {/* Background circle */}
          <circle
            cx="28"
            cy="28"
            r="24"
            fill="var(--glass-bg)"
            stroke="var(--card-border)"
            strokeWidth="1.5"
            style={{
              backdropFilter: 'blur(12px)',
            }}
          />

          {/* Progress circle */}
          <motion.circle
            cx="28"
            cy="28"
            r="24"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="150.8"
            strokeDashoffset="150.8"
            style={{
              pathLength,
              rotate: -90,
              transformOrigin: 'center',
            }}
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--accent-secondary)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Percentage text */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {progress}%
        </div>
      </motion.div>
    </>
  );
}
