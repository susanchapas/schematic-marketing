'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export default function AnimatedCounter({
  value,
  suffix = '',
  label,
  delay = 0,
}: AnimatedCounterProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="stat-item"
      initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      style={{ textAlign: 'center' }}
    >
      <motion.span
        className="stat-number"
        initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: delay + 0.2,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        {value}
        {suffix}
      </motion.span>
      <p className="stat-label">{label}</p>
    </motion.div>
  );
}
