'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import styles from './Footer.module.css';

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Our Work' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className={styles.footer}>
      <div className={styles.divider} aria-hidden="true" />

      <div className={`container ${styles.footerContent}`}>
        <AnimatedSection className={styles.footerMain}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="Schematic Marketing Home">
              <svg
                width="36"
                height="36"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="40" height="40" rx="4" fill="#ffffff" />
                <path d="M12 28V12h4l4 10 4-10h4v16h-3V18l-3.5 9h-3L15 18v10h-3z" fill="#102f5d" />
              </svg>
              <span>Schematic Marketing</span>
            </Link>
            <p className={styles.tagline}>Strategy With Architectural Precision.</p>
          </div>

          <div className={styles.cta}>
            <h3 className={styles.ctaTitle}>Ready to Engineer Your Solution?</h3>
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <Link href="/contact" className={styles.ctaButton}>
                Start the Schematic
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className={styles.footerBottom}>
          <nav aria-label="Footer navigation" className={styles.footerNav}>
            <ul className={styles.navList}>
              {footerLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.social}>
            <motion.a
              href="https://www.linkedin.com/company/schematic-marketing/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on LinkedIn"
              className={styles.socialLink}
              whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -3 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/schematicmarketing/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className={styles.socialLink}
              whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -3 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </motion.a>
          </div>
        </AnimatedSection>

        <div className={styles.copyright}>
          <p>&copy; {currentYear} Schematic Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
