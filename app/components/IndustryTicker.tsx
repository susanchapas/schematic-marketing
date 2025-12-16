'use client';

import { motion, useReducedMotion } from 'framer-motion';
import styles from './IndustryTicker.module.css';

const industries = [
  'Enterprise',
  'Startups',
  'Nonprofits',
  'Financial Services',
  'Healthcare',
  'Technology',
];

export default function IndustryTicker() {
  const shouldReduceMotion = useReducedMotion();

  // Double the items to create seamless loop
  const tickerItems = [...industries, ...industries];

  return (
    <section className={styles.ticker} aria-labelledby="industries-heading">
      <p id="industries-heading" className="sr-only">
        Industries we serve
      </p>
      <div className={styles.tickerWrapper}>
        <motion.div
          className={styles.tickerTrack}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, '-50%'],
                }
          }
          transition={
            shouldReduceMotion
              ? {}
              : {
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 20,
                    ease: 'linear',
                  },
                }
          }
        >
          {tickerItems.map((item, index) => (
            <span key={`${item}-${index}`} className={styles.tickerItem}>
              {item}
              <span className={styles.separator} aria-hidden="true">
                /
              </span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
