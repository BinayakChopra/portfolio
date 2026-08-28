import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function MagneticButton({
  children,
  className = '',
  style = {},
  strength = 0.3,
  glow = true,
  onClick,
  as: Component = 'div',
  ...props
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  const springConfig = { damping: 18, stiffness: 200, mass: 0.1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-30, 30], [8, -8]);
  const rotateY = useTransform(springX, [-30, 30], [-8, 8]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    mouseX.set(distanceX * strength);
    mouseY.set(distanceY * strength);

    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const MotionComponent = motion[Component] || motion.div;

  return (
    <MotionComponent
      ref={ref}
      className={className}
      style={{
        display: 'inline-block',
        position: 'relative',
        transformStyle: 'preserve-3d',
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...props}
    >
      {glow && (
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            background: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                `radial-gradient(180px circle at ${x}px ${y}px, rgba(124, 91, 245, 0.25), transparent 80%)`
            ),
          }}
          aria-hidden="true"
        />
      )}
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </MotionComponent>
  );
}
