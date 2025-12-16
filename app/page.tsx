'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import Hero from './components/Hero';
import IndustryTicker from './components/IndustryTicker';
import ServicesGrid from './components/ServicesGrid';
import MorphCard from './components/MorphCard';
import AnimatedSection from './components/AnimatedSection';
import SlideReveal from './components/SlideReveal';
import AnimatedCounter from './components/AnimatedCounter';
import FloatingAccent from './components/FloatingAccent';
import styles from './page.module.css';

const processSteps = [
  {
    number: '01',
    title: 'Initial Blueprint',
    description: 'Deep-dive discovery to understand your business, market, and objectives.',
  },
  {
    number: '02',
    title: 'Research Schematic',
    description: 'Data-driven analysis that reveals opportunities and informs strategy.',
  },
  {
    number: '03',
    title: 'Structural Strategy',
    description: 'Comprehensive plan with clear milestones, metrics, and execution roadmap.',
  },
];

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 340, suffix: '%', label: 'Avg. Growth Rate' },
  { value: 12, suffix: '', label: 'Industry Verticals' },
  { value: 98, suffix: '%', label: 'Client Retention' },
];

const whySchematicPillars = [
  {
    icon: '◇',
    title: 'Strategic Foundation',
    description: 'We plan before we act, ensuring every element has purpose.',
  },
  {
    icon: '⧉',
    title: 'Modular Approach',
    description: 'Components designed to scale and adapt as your business grows.',
  },
  {
    icon: '◎',
    title: 'Human-Centered',
    description: 'Data-driven decisions guided by empathy and authentic connection.',
  },
  {
    icon: '⬡',
    title: 'Accessible Innovation',
    description: 'Cutting-edge solutions that remain inclusive and usable.',
  },
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main id="main" role="main">
      <Hero />

      <IndustryTicker />

      {/* Stats Section - NEW */}
      <section className={`${styles.statsSection} section--peach`} aria-labelledby="stats-heading">
        <div className="container">
          <h2 id="stats-heading" className="sr-only">
            Our Impact in Numbers
          </h2>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Schematic Section */}
      <section className={`${styles.whySection}`} aria-labelledby="why-heading">
        <div className={`container ${styles.whySectionInner}`}>
          <FloatingAccent size="lg" position="top-right" color="warm" delay={0.2} />
          <FloatingAccent size="md" position="bottom-left" color="peach" delay={0.4} />

          <AnimatedSection className={styles.whyHeader}>
            <h2 id="why-heading" className={`h2 ${styles.whyTitle}`}>
              The Schematic Process
            </h2>
            <div className={styles.accentBar} aria-hidden="true" />
          </AnimatedSection>

          <div className={styles.whyGrid}>
            {processSteps.map((step, index) => (
              <MorphCard
                key={step.number}
                className={styles.processCard}
                delay={index * 0.12}
                as="article"
              >
                <div className={styles.stepNumberWrapper}>
                  <span className={styles.stepNumber}>{step.number}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </MorphCard>
            ))}
          </div>

          <AnimatedSection delay={0.4} className={styles.whyCta}>
            <Link href="/about" className="btn btn--accent">
              See Our Full Methodology
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section
        className={`section ${styles.servicesSection} section--peach`}
        aria-labelledby="services-heading"
      >
        <div className="container">
          <SlideReveal direction="left">
            <header className="section__header">
              <h2 id="services-heading" className="h2 section__title">
                Our Services
              </h2>
              <p className="section__subtitle text-lead">
                Modular solutions engineered to build, scale, and sustain your brand.
              </p>
            </header>
          </SlideReveal>
          <ServicesGrid />
          <AnimatedSection delay={0.3} className={styles.sectionCta}>
            <Link href="/services" className="btn btn--primary">
              Explore All Services
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Schematic Section */}
      <section className={`${styles.whySchematicSection}`} aria-labelledby="why-schematic-heading">
        <div className="container">
          <FloatingAccent size="md" position="bottom-right" color="peach" delay={0.3} />
          <FloatingAccent size="sm" position="top-left" color="warm" delay={0.5} />

          <SlideReveal direction="right">
            <header className="section__header">
              <h2 id="why-schematic-heading" className="h2 section__title">
                Why Schematic?
              </h2>
              <p className="section__subtitle text-lead">
                We don&apos;t just execute—we engineer. Every campaign, every design, every line of
                code is built with intention and measured precision.
              </p>
            </header>
          </SlideReveal>

          <div className={styles.whySchematicGrid}>
            {whySchematicPillars.map((pillar, index) => (
              <MorphCard
                key={pillar.title}
                className={styles.whySchematicCard}
                delay={index * 0.1}
                as="article"
              >
                <div className={styles.whySchematicCardContent}>
                  <span className={styles.pillarIcon} aria-hidden="true">
                    {pillar.icon}
                  </span>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDescription}>{pillar.description}</p>
                </div>
              </MorphCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`${styles.ctaSection} blueprint-bg`} aria-labelledby="cta-heading">
        <div className="container">
          <FloatingAccent size="lg" position="center" color="navy" delay={0.2} />

          <AnimatedSection className={styles.ctaContent}>
            <h2 id="cta-heading" className="h2">
              Ready to <span className="highlight">Engineer</span> Your Solution?
            </h2>
            <p className="text-lead">
              Let&apos;s architect your next campaign together. Strategy, precision, results.
            </p>
            <div className={styles.ctaButtons}>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -3 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              >
                <Link href="/contact" className="btn btn--primary">
                  Start the Schematic
                </Link>
              </motion.div>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -3 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              >
                <Link href="/about" className="btn btn--secondary">
                  Learn About Us
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
