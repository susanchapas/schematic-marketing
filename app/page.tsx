import Link from 'next/link';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import PortfolioGrid from './components/PortfolioGrid';
import styles from './page.module.css';

export default function Home() {
  return (
    <main id="main" role="main">
      <Hero />

      {/* Services Section */}
      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <header className="section__header">
            <h2 id="services-heading" className="h2 section__title">
              Our Services
            </h2>
            <p className="section__subtitle text-lead">
              Modular solutions designed to build, grow, and sustain your brand&apos;s presence.
            </p>
          </header>
          <ServicesGrid />
          <div className={styles.sectionCta}>
            <Link href="/contact" className="btn btn--primary">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className={`section ${styles.workSection}`} aria-labelledby="work-heading">
        <div className="container">
          <header className="section__header">
            <h2 id="work-heading" className="h2 section__title">
              Featured Work
            </h2>
            <p className="section__subtitle text-lead">
              A curated selection of projects that showcase our strategic approach and creative
              execution.
            </p>
          </header>
          <PortfolioGrid limit={3} />
          <div className={styles.sectionCta}>
            <Link href="/portfolio" className="btn btn--secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section" aria-labelledby="why-heading">
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyContent}>
              <h2 id="why-heading" className="h2">
                Why Schematic?
              </h2>
              <p className="text-lead">
                We don&apos;t just execute—we engineer. Every campaign, every design, every line of
                code is built with intention and measured precision.
              </p>
              <ul className={styles.whyList}>
                <li>
                  <strong>Strategic Foundation</strong> — We plan before we act, ensuring every
                  element has purpose.
                </li>
                <li>
                  <strong>Modular Approach</strong> — Components designed to scale and adapt as your
                  business grows.
                </li>
                <li>
                  <strong>Human-Centered</strong> — Data-driven decisions guided by empathy and
                  authentic connection.
                </li>
                <li>
                  <strong>Accessible Innovation</strong> — Cutting-edge solutions that remain
                  inclusive and usable.
                </li>
              </ul>
              <Link href="/values" className="btn btn--ghost">
                Explore Our Values
              </Link>
            </div>
            <div className={`surface ${styles.whyVisual}`} aria-hidden="true">
              <div className={styles.blueprintPattern}>
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="20"
                    y="20"
                    width="160"
                    height="160"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <rect
                    x="40"
                    y="40"
                    width="120"
                    height="120"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <rect
                    x="60"
                    y="60"
                    width="80"
                    height="80"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1" />
                  <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section ${styles.ctaSection}`} aria-labelledby="cta-heading">
        <div className="container">
          <div className={`surface ${styles.ctaCard}`}>
            <h2 id="cta-heading" className="h2">
              Ready to Build Something Great?
            </h2>
            <p className="text-lead">
              Let&apos;s architect your next campaign together. From strategy to execution,
              we&apos;ll engineer growth that lasts.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn--primary">
                Start a Project
              </Link>
              <Link href="/about" className="btn btn--secondary">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
