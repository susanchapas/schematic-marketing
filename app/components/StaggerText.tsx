'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

export default function StaggerText({
  text,
  className = '',
  as = 'span',
  delay = 0,
}: StaggerTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motion[as];

  if (shouldReduceMotion) {
    const Component = as;
    return <Component className={className}>{text}</Component>;
  }

  const words = text.split(' ');

  return (
    <MotionComponent
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: '-100px' }}
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em' }}
      transition={{ delayChildren: delay }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-flex' }}>
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              variants={letterVariants}
              style={{ display: 'inline-block' }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </MotionComponent>
  );
}
