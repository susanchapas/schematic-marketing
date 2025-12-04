import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './values.module.css';

export const metadata: Metadata = {
  title: 'Our Values',
  description:
    'Discover the core principles that guide Schematic Marketing: Structural Integrity, Modular Flexibility, Human Fluidity, and Accessible Innovation.',
};

const values = [
  {
    title: 'Structural Integrity',
    subtitle: 'Plan before you act',
    description:
      'Every element has purpose. We research, strategize, and architect solutions before executing. This foundation ensures that campaigns, designs, and digital products stand the test of time and market changes.',
    principles: [
      'Data-informed decision making',
      'Strategic planning before execution',
      'Measurable goals and KPIs',
      'Long-term sustainability',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: 'Modular Flexibility',
    subtitle: 'Build to scale and adapt',
    description:
      'Components should compose and recompose without friction. We design systems, not just solutions—allowing your brand to grow, pivot, and evolve while maintaining consistency and efficiency.',
    principles: [
      'Scalable design systems',
      'Reusable component libraries',
      'Flexible campaign frameworks',
      'Future-proof architecture',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="8" height="8" rx="1" />
        <rect x="14" y="2" width="8" height="8" rx="1" />
        <rect x="2" y="14" width="8" height="8" rx="1" />
        <rect x="14" y="14" width="8" height="8" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Human Fluidity',
    subtitle: 'Data and empathy coexist',
    description:
      'Analytics guide us, but empathy drives us. We never lose sight of the humans behind the metrics—crafting experiences that resonate emotionally while delivering measurable results.',
    principles: [
      'User-centered design',
      'Authentic brand storytelling',
      'Community-first engagement',
      'Emotional intelligence in messaging',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Accessible Innovation',
    subtitle: 'High-tech meets high-touch',
    description:
      'We embrace cutting-edge technology while ensuring everything we create remains readable, usable, and inclusive. Innovation should open doors, not close them.',
    principles: [
      'WCAG compliance as standard',
      'Inclusive design practices',
      'Performance optimization',
      'Technology that serves users',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
];

const commitments = [
  {
    title: 'Transparency',
    description: 'Clear communication, honest timelines, and no hidden agendas.',
  },
  {
    title: 'Quality Over Quantity',
    description: 'We take on projects we can deliver excellently, not just profitably.',
  },
  {
    title: 'Continuous Learning',
    description: 'We stay current with industry trends while honoring proven principles.',
  },
  {
    title: 'Partnership Mindset',
    description: "Your success is our success. We're invested in outcomes, not outputs.",
  },
];

export default function ValuesPage() {
  return (
    <main id="main" role="main">
      {/* Hero Section */}
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className="h1">Our Values Define Our Work</h1>
            <p className="text-lead">
              These aren&apos;t just words on a wall. They&apos;re the principles that shape every
              decision, every design, and every relationship we build.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section" aria-labelledby="values-heading">
        <div className="container">
          <h2 id="values-heading" className="sr-only">
            Core Values
          </h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <article
                key={value.title}
                className={`surface ${styles.valueCard} ${index % 2 === 1 ? styles.valueCardAlt : ''}`}
              >
                <div className={styles.valueIcon} aria-hidden="true">
                  {value.icon}
                </div>
                <div className={styles.valueContent}>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueSubtitle}>{value.subtitle}</p>
                  <p className={styles.valueDescription}>{value.description}</p>
                  <ul className={styles.valuePrinciples}>
                    {value.principles.map(principle => (
                      <li key={principle}>{principle}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Voice & Tone Section */}
      <section className={`section ${styles.voiceSection}`} aria-labelledby="voice-heading">
        <div className="container">
          <header className="section__header">
            <h2 id="voice-heading" className="h2 section__title">
              Our Voice
            </h2>
            <p className="section__subtitle">How we communicate reflects who we are.</p>
          </header>
          <div className={styles.voiceGrid}>
            <div className={`surface ${styles.voiceCard}`}>
              <h3>The Architect</h3>
              <p className={styles.voiceType}>Primary Voice</p>
              <p>
                Confident, crisp, and declarative. We speak with authority born from expertise,
                always clear and constructive.
              </p>
            </div>
            <div className={`surface ${styles.voiceCard}`}>
              <h3>The Artist</h3>
              <p className={styles.voiceType}>Secondary Voice</p>
              <p>
                Warmer, more expressive—used sparingly to add human touch and creative flair to our
                communications.
              </p>
            </div>
          </div>
          <div className={styles.actionWords}>
            <h3>Our Action Language</h3>
            <div className={styles.wordCloud}>
              {['Constructive', 'Layered', 'Lucid', 'Tactile', 'Blueprint', 'Flow'].map(word => (
                <span key={word} className={styles.actionWord}>
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="section" aria-labelledby="commitments-heading">
        <div className="container">
          <header className="section__header">
            <h2 id="commitments-heading" className="h2 section__title">
              Our Commitments
            </h2>
            <p className="section__subtitle">What you can expect when working with us.</p>
          </header>
          <div className={styles.commitmentsGrid}>
            {commitments.map(commitment => (
              <article key={commitment.title} className={`surface ${styles.commitmentCard}`}>
                <h3>{commitment.title}</h3>
                <p>{commitment.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section ${styles.ctaSection}`} aria-labelledby="cta-heading">
        <div className="container">
          <div className={`surface ${styles.ctaCard}`}>
            <h2 id="cta-heading" className="h2">
              Values in Action
            </h2>
            <p>
              See how our principles translate into results. Explore our portfolio or start a
              conversation about your project.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/portfolio" className="btn btn--primary">
                View Our Work
              </Link>
              <Link href="/contact" className="btn btn--secondary">
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
