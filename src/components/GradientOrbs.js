import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GradientOrbs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const orbs = [
    {
      id: 1,
      size: isMobile ? 280 : 500,
      color: 'rgba(79, 125, 249, 0.15)',
      left: '5%',
      top: '10%',
      duration: 20,
      delay: 0,
    },
    {
      id: 2,
      size: isMobile ? 240 : 400,
      color: 'rgba(124, 91, 245, 0.12)',
      right: '5%',
      top: '30%',
      duration: 25,
      delay: 2,
    },
    ...(!isMobile
      ? [
          {
            id: 3,
            size: 350,
            color: 'rgba(0, 210, 255, 0.08)',
            left: '50%',
            bottom: '20%',
            duration: 22,
            delay: 4,
          },
          {
            id: 4,
            size: 300,
            color: 'rgba(153, 115, 255, 0.1)',
            right: '25%',
            bottom: '25%',
            duration: 18,
            delay: 1,
          },
        ]
      : []),
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          style={{
            position: 'absolute',
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: isMobile ? 'blur(35px)' : 'blur(60px)',
            transform: 'translateZ(0)',
            willChange: isMobile ? 'auto' : 'transform',
            ...Object.fromEntries(
              Object.entries({ left: orb.left, right: orb.right, top: orb.top, bottom: orb.bottom })
                .filter(([, v]) => v !== undefined)
            ),
          }}
          animate={
            isMobile
              ? { opacity: [0.3, 0.5, 0.3] }
              : {
                  x: [0, 30, -20, 0],
                  y: [0, -40, 20, 0],
                  scale: [1, 1.1, 0.95, 1],
                  opacity: [0.4, 0.6, 0.5, 0.4],
                }
          }
          transition={{
            duration: isMobile ? 8 : orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default GradientOrbs;
