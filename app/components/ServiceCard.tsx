'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  href?: string;
  icon?: React.ReactNode;
  delay?: number;
}

export default function ServiceCard({
  title,
  subtitle,
  description,
  href = '/contact',
  icon,
  delay = 0,
}: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className={styles.card}
      initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.92, rotate: -2, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      whileHover={shouldReduceMotion ? {} : { y: -6 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    >
      <div className={styles.cardInner}>
        {icon && (
          <motion.div
            className={styles.icon}
            whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>
        )}
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {description && <p className={styles.description}>{description}</p>}
        <Link href={href} className={styles.cta}>
          <span>Learn More</span>
          <motion.span className={styles.ctaArrow} initial={{ x: 0 }} whileHover={{ x: 6 }}>
            →
          </motion.span>
        </Link>
      </div>
      <div className={styles.accentLine} aria-hidden="true" />
    </motion.article>
  );
}
