import React from 'react';
import { motion } from 'framer-motion';

export default function TextReveal({
  text = '',
  className = '',
  style = {},
  variant = 'blur', // 'blur' | 'slide' | 'wave' | 'words'
  delay = 0,
  stagger = 0.03,
  as: Component = 'span',
  once = true,
}) {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (customDelay = delay) => ({
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: customDelay,
      },
    }),
  };

  const getChildVariants = () => {
    switch (variant) {
      case 'slide':
        return {
          hidden: { opacity: 0, y: 30, rotateX: 45 },
          visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
              type: 'spring',
              damping: 15,
              stiffness: 140,
            },
          },
        };
      case 'wave':
        return {
          hidden: { opacity: 0, y: 20, scale: 0.8 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: 'spring',
              damping: 12,
              stiffness: 200,
            },
          },
        };
      case 'words':
        return {
          hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
          visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        };
      case 'blur':
      default:
        return {
          hidden: {
            opacity: 0,
            y: 12,
            filter: 'blur(10px)',
            scale: 0.95,
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            scale: 1,
            transition: {
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        };
    }
  };

  const childVariants = getChildVariants();

  if (variant === 'words') {
    return (
      <motion.span
        className={className}
        style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0.25em', ...style }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-40px' }}
        custom={delay}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={childVariants}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  return (
    <motion.span
      className={className}
      style={{ display: 'inline-block', ...style }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-40px' }}
      custom={delay}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={childVariants}
          style={{
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
