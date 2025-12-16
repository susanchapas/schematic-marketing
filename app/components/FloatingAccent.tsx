'use client';

import { motion, useReducedMotion } from 'framer-motion';
import styles from './FloatingAccent.module.css';

interface FloatingAccentProps {
  size?: 'sm' | 'md' | 'lg';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  color?: 'peach' | 'warm' | 'navy';
  delay?: number;
}

const sizeMap = {
  sm: 100,
  md: 200,
  lg: 300,
};

const positionMap = {
  'top-left': { top: '-5%', left: '-5%' },
  'top-right': { top: '-5%', right: '-5%' },
  'bottom-left': { bottom: '-5%', left: '-5%' },
  'bottom-right': { bottom: '-5%', right: '-5%' },
  center: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
};

export default function FloatingAccent({
  size = 'md',
  position = 'top-right',
  color = 'peach',
  delay = 0,
}: FloatingAccentProps) {
  const shouldReduceMotion = useReducedMotion();
  const dimension = sizeMap[size];
  const positionStyles = positionMap[position];

  if (shouldReduceMotion) {
    return (
      <div
        className={`${styles.accent} ${styles[color]}`}
        style={{
          ...positionStyles,
          width: dimension,
          height: dimension,
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <motion.div
      className={`${styles.accent} ${styles[color]}`}
      style={{
        ...positionStyles,
        width: dimension,
        height: dimension,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.4, scale: 1 }}
      transition={{
        duration: 1.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      aria-hidden="true"
    />
  );
}
