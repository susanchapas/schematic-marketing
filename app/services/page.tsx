'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import ServicesGrid from '../components/ServicesGrid';
import IndustryTicker from '../components/IndustryTicker';
import AnimatedSection from '../components/AnimatedSection';
import FloatingAccent from '../components/FloatingAccent';
import styles from './services.module.css';

export default function ServicesPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main id="main" role="main" className={styles.page}>
      <section className={styles.hero}>
        <FloatingAccent size="lg" position="top-right" color="peach" delay={0.2} />
        <div className="container">
          <AnimatedSection>
            <h1 className="h1">Our Services</h1>
            <div className={styles.accentBar} aria-hidden="true" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lead">
              Modular solutions engineered to build, scale, and sustain your brand presence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className={`section ${styles.servicesSection}`} aria-labelledby="all-services">
        <div className="container">
          <h2 id="all-services" className="sr-only">
            All Services
          </h2>
          <ServicesGrid />
        </div>
      </section>

      <IndustryTicker />

      <section className={`${styles.ctaSection} blueprint-bg`} aria-labelledby="services-cta">
        <div className="container">
          <FloatingAccent size="lg" position="center" color="navy" delay={0.2} />
          <AnimatedSection className={styles.ctaContent}>
            <h2 id="services-cta" className="h2">
              Ready to Start Building?
            </h2>
            <p className="text-lead">
              Every project begins with understanding your goals. Let&apos;s talk strategy.
            </p>
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <Link href="/contact" className="btn btn--primary btn--glow">
                Start the Schematic
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
