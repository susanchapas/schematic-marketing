'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface MorphCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: number;
  as?: 'div' | 'article' | 'section';
}

export default function MorphCard({
  children,
  className = '',
  delay = 0,
  hoverScale = 1.02,
  as: Component = 'div',
}: MorphCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motion[Component];

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: hoverScale, y: -4 }}
      viewport={{ margin: '-100px', once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    >
      {children}
    </MotionComponent>
  );
}
