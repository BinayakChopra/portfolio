import React, { useState, useEffect, useRef } from 'react';

const CyberScrambleText = ({
  text,
  speed = 40,
  scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*',
  trigger = 'mount',
  className = '',
  style = {},
  as = 'span',
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (trigger === 'mount' && !hasAnimated.current) {
      hasAnimated.current = true;
      animateText();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (trigger === 'always') {
      animateText();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  useEffect(() => {
    if (trigger === 'inView') {
      const node = ref.current;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated.current) {
              hasAnimated.current = true;
              animateText();
            }
          });
        },
        { threshold: 0.5 }
      );

      if (node) {
        observer.observe(node);
      }

      return () => {
        if (node) {
          observer.unobserve(node);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  const animateText = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    let iteration = 0;
    const maxIterations = text.length * 3;

    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';

            if (index < iteration / 3) {
              return text[index];
            }

            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          })
          .join('')
      );

      iteration++;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
      }
    }, speed);

    return () => clearInterval(interval);
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover' && !isAnimating) {
      hasAnimated.current = false;
      animateText();
    }
  };

  const Component = as;

  return (
    <Component
      ref={ref}
      className={className}
      style={style}
      onMouseEnter={trigger === 'hover' ? handleMouseEnter : undefined}
    >
      {displayText}
    </Component>
  );
};

export default CyberScrambleText;
