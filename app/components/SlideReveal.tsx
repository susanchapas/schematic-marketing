'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
}

const directionConfig = {
  left: { x: -100, y: 0 },
  right: { x: 100, y: 0 },
  up: { x: 0, y: 100 },
  down: { x: 0, y: -100 },
};

export default function SlideReveal({
  children,
  className = '',
  direction = 'left',
  delay = 0,
  duration = 0.7,
}: SlideRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const offset = directionConfig[direction];

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ margin: '-100px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
