'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './PortfolioCard.module.css';

interface PortfolioCardProps {
  title: string;
  category: string;
  description?: string;
  href?: string;
  metrics?: string;
}

export default function PortfolioCard({
  title,
  category,
  description,
  href = '/contact',
  metrics,
}: PortfolioCardProps) {
  return (
    <motion.article className={styles.card} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Link href={href} className={styles.cardLink}>
        <div className={styles.content}>
          <span className={styles.category}>{category}</span>
          <h3 className={styles.title}>{title}</h3>
          {description && <p className={styles.description}>{description}</p>}
          {metrics && <p className={styles.metrics}>{metrics}</p>}
        </div>
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </Link>
    </motion.article>
  );
}
