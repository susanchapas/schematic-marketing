'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import MorphCard from '../components/MorphCard';
import FloatingAccent from '../components/FloatingAccent';
import styles from './about.module.css';

const coreValues = [
  {
    title: 'Structural Integrity',
    tagline: 'Plan before you act',
    description:
      'Every element has purpose. We research, strategize, and architect solutions before executing. This foundation ensures that campaigns, designs, and digital products stand the test of time and market changes.',
    features: [
      'Data-informed decision making',
      'Strategic planning before execution',
      'Measurable goals and KPIs',
      'Long-term sustainability',
    ],
  },
  {
    title: 'Modular Flexibility',
    tagline: 'Build to scale and adapt',
    description:
      'Components should compose and recompose without friction. We design systems, not just solutions—allowing your brand to grow, pivot, and evolve while maintaining consistency and efficiency.',
    features: [
      'Scalable design systems',
      'Reusable component libraries',
      'Flexible campaign frameworks',
      'Future-proof architecture',
    ],
  },
  {
    title: 'Human Fluidity',
    tagline: 'Data and empathy coexist',
    description:
      'Analytics guide us, but empathy drives us. We never lose sight of the humans behind the metrics—crafting experiences that resonate emotionally while delivering measurable results.',
    features: [
      'User-centered design',
      'Authentic brand storytelling',
      'Community-first engagement',
      'Emotional intelligence in messaging',
    ],
  },
  {
    title: 'Accessible Innovation',
    tagline: 'High-tech meets high-touch',
    description:
      'We embrace cutting-edge technology while ensuring everything we create remains readable, usable, and inclusive. Innovation should open doors, not close them.',
    features: [
      'WCAG compliance as standard',
      'Inclusive design practices',
      'Performance optimization',
      'Technology that serves users',
    ],
  },
];

const missionPillars = [
  {
    title: 'Structural Integrity',
    description: 'Plan before you act. Every element has purpose, every decision is intentional.',
  },
  {
    title: 'Modular Flexibility',
    description: 'Components that compose and recompose without friction—built to scale with you.',
  },
  {
    title: 'Human Fluidity',
    description: 'Data and empathy coexist. We blend analytics with authentic human connection.',
  },
  {
    title: 'Accessible Innovation',
    description: 'High-tech execution that stays readable, usable, and inclusive for everyone.',
  },
];

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main id="main" role="main" className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <FloatingAccent size="lg" position="top-right" color="peach" delay={0.2} />
        <div className="container">
          <AnimatedSection>
            <h1 className="h1">Strategy With Precision</h1>
            <div className={styles.accentBar} aria-hidden="true" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lead">
              We engineer marketing systems that are built on clarity, research, and structural
              thinking.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Section */}
      <section className={styles.founderSection} aria-labelledby="founder-heading">
        <div className="container">
          <div className={styles.founderGrid}>
            <AnimatedSection className={styles.founderImage} direction="left">
              <div className={styles.imagePlaceholder}>
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="20"
                    y="20"
                    width="160"
                    height="160"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <circle cx="100" cy="80" r="35" stroke="currentColor" strokeWidth="1" />
                  <path
                    d="M50 180 Q100 130 150 180"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </div>
            </AnimatedSection>
            <div className={styles.founderContent}>
              <AnimatedSection>
                <h2 id="founder-heading" className="h2">
                  Our Approach
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className={styles.founderText}>
                  At Schematic Marketing, we believe great marketing isn&apos;t about following
                  formulas—it&apos;s about engineering solutions that fit your unique challenges. We
                  combine strategic thinking with technical precision to create systems that scale.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className={styles.founderText}>
                  Every engagement starts with deep research and ends with measurable outcomes. We
                  don&apos;t just execute campaigns; we architect the infrastructure for sustainable
                  growth.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className={styles.founderQuote}>
                  <blockquote>
                    &ldquo;Marketing should be engineered, not improvised.&rdquo;
                  </blockquote>
                  <cite>— Founder, Schematic Marketing</cite>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Values Intro Section */}
      <section className={styles.valuesIntro} aria-labelledby="values-intro-heading">
        <div className="container">
          <FloatingAccent size="md" position="bottom-left" color="warm" delay={0.3} />
          <AnimatedSection className={styles.valuesIntroContent}>
            <h2 id="values-intro-heading" className="h2">
              Our Values Define Our Work
            </h2>
            <div className={styles.accentBarCenter} aria-hidden="true" />
            <p className="text-lead">
              These aren&apos;t just words on a wall. They&apos;re the principles that shape every
              decision, every design, and every relationship we build.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        className={`${styles.coreValuesSection} section--framed`}
        aria-labelledby="core-values-heading"
      >
        <div className="container">
          <AnimatedSection>
            <h2 id="core-values-heading" className="h2 text-center section__title">
              Core Values
            </h2>
          </AnimatedSection>
          <div className={styles.coreValuesGrid}>
            {coreValues.map((value, index) => (
              <MorphCard
                key={value.title}
                className={styles.coreValueCard}
                delay={index * 0.1}
                as="article"
              >
                <div className={styles.coreValueHeader}>
                  <h3 className={styles.coreValueTitle}>{value.title}</h3>
                  <span className={styles.coreValueTagline}>{value.tagline}</span>
                </div>
                <p className={styles.coreValueDescription}>{value.description}</p>
                <ul className={styles.coreValueFeatures} aria-label={`${value.title} features`}>
                  {value.features.map(feature => (
                    <li key={feature} className={styles.coreValueFeature}>
                      <span className={styles.featureBullet} aria-hidden="true">
                        ●
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </MorphCard>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        className={`${styles.missionSection} blueprint-bg`}
        aria-labelledby="mission-heading"
      >
        <div className="container">
          <FloatingAccent size="lg" position="center" color="navy" delay={0.2} />
          <AnimatedSection className={styles.missionContent}>
            <h2 id="mission-heading" className="h2">
              Our Mission
            </h2>
            <div className={styles.accentBarCenterLight} aria-hidden="true" />
            <p className={styles.missionStatement}>
              To deconstruct complex market problems and rebuild them into functional, artistic
              engines of growth.
            </p>
          </AnimatedSection>
          <div className={styles.missionPillarsGrid}>
            {missionPillars.map((pillar, index) => (
              <AnimatedSection key={pillar.title} delay={index * 0.1}>
                <article className={styles.missionPillar}>
                  <h3 className={styles.missionPillarTitle}>{pillar.title}</h3>
                  <p className={styles.missionPillarDescription}>{pillar.description}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection} aria-labelledby="about-cta">
        <div className="container">
          <AnimatedSection className={styles.ctaContent}>
            <h2 id="about-cta" className="h2">
              Let&apos;s Build Together
            </h2>
            <p className="text-lead">
              Ready to engineer your marketing strategy? We&apos;re here to help.
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
