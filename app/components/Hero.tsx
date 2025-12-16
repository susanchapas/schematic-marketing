'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './Hero.module.css';
import LivingSchematic from './LivingSchematic';
import FloatingAccent from './FloatingAccent';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  showGrid?: boolean;
}

const titleWords = ['Strategy', 'With', 'Architectural', 'Precision.'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -20 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

export default function Hero({
  title,
  subtitle = 'We engineer marketing systems built on clarity, research, and structural thinking.',
  ctaText = 'Start the Schematic',
  ctaHref = '/contact',
  showGrid = true,
}: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={`${styles.hero} ${showGrid ? styles.withGrid : ''}`}>
      {/* Floating accent decorations */}
      <FloatingAccent size="lg" position="top-right" color="peach" delay={0.3} />
      <FloatingAccent size="md" position="bottom-left" color="warm" delay={0.5} />

      <div className={`container ${styles.heroContent}`}>
        <motion.div
          className={styles.textContent}
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        >
          {title ? (
            <h1 className={styles.title}>
              {title}
              <motion.span
                className={styles.underline}
                initial={shouldReduceMotion ? {} : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
              />
            </h1>
          ) : (
            <motion.h1
              className={styles.title}
              variants={shouldReduceMotion ? {} : containerVariants}
              initial="hidden"
              animate="visible"
            >
              <span className={styles.titleWords}>
                {titleWords.map((word, index) => (
                  <motion.span
                    key={index}
                    className={styles.word}
                    variants={shouldReduceMotion ? {} : wordVariants}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <motion.span
                className={styles.underline}
                initial={shouldReduceMotion ? {} : { scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.33, 1, 0.68, 1] }}
              />
            </motion.h1>
          )}

          <motion.p
            className={styles.subtitle}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <Link href={ctaHref} className={styles.cta}>
              <span className={styles.ctaText}>{ctaText}</span>
              <motion.span
                className={styles.ctaArrow}
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          aria-hidden="true"
        >
          <LivingSchematic className={styles.schematic} />
        </motion.div>
      </div>
    </section>
  );
}
