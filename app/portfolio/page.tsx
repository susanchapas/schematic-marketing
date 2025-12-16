import type { Metadata } from 'next';
import Link from 'next/link';
import PortfolioGrid from '../components/PortfolioGrid';
import styles from './portfolio.module.css';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Explore case studies and projects from Schematic Marketing. Real results, strategic thinking, measurable outcomes.',
};

export default function PortfolioPage() {
  return (
    <main id="main" role="main" className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className="h1">Our Work</h1>
          <p className="text-lead">
            Strategic solutions that deliver measurable results. Each project engineered with
            precision.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="projects-heading">
        <div className="container">
          <h2 id="projects-heading" className="sr-only">
            All Projects
          </h2>
          <PortfolioGrid />
        </div>
      </section>

      <section className={`${styles.ctaSection} blueprint-bg`} aria-labelledby="portfolio-cta">
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 id="portfolio-cta" className="h2">
              Your Project Could Be Next
            </h2>
            <p className="text-lead">Let&apos;s discuss how we can engineer your success story.</p>
            <Link href="/contact" className="btn btn--primary">
              Start the Schematic
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
