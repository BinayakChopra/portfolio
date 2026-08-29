import React, { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import useCursorGlow from '../hooks/useCursorGlow';

export default function CursorFollower() {
  const { position, isPointer, isVisible } = useCursorGlow();

  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.1 };
  const smoothX = useSpring(position.x, springConfig);
  const smoothY = useSpring(position.y, springConfig);

  useEffect(() => {
    smoothX.set(position.x);
    smoothY.set(position.y);
  }, [position.x, position.y, smoothX, smoothY]);

  if (!isVisible || isTouchDevice) return null;

  return (
    <>
      {/* Outer ambient glow orb */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: isPointer ? 320 : 220,
          height: isPointer ? 320 : 220,
          borderRadius: '50%',
          background: isPointer
            ? 'radial-gradient(circle, rgba(124, 91, 245, 0.18) 0%, rgba(79, 125, 249, 0.08) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(79, 125, 249, 0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.3s ease, height 0.3s ease, background 0.3s ease',
        }}
        aria-hidden="true"
      />

      {/* Inner sharp dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: position.x,
          y: position.y,
          translateX: '-50%',
          translateY: '-50%',
          width: isPointer ? 12 : 6,
          height: isPointer ? 12 : 6,
          borderRadius: '50%',
          background: 'var(--accent)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0.75,
          transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
          boxShadow: '0 0 10px var(--accent)',
        }}
        aria-hidden="true"
      />
    </>
  );
}
