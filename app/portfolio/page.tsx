import type { Metadata } from 'next';
import Link from 'next/link';
import PortfolioGrid from '../components/PortfolioGrid';
import styles from './portfolio.module.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore our portfolio of work across web development, branding, social media, SEO, and event planning. See how we architect success for our clients.',
};

const categories = [
  'All',
  'Branding',
  'Web Development',
  'Social Media',
  'SEO',
  'Event Planning',
  'Graphic Design',
];

export default function PortfolioPage() {
  return (
    <main id="main" role="main">
      {/* Hero Section */}
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className="h1">Our Work Speaks for Itself</h1>
            <p className="text-lead">
              A curated selection of projects that demonstrate our strategic approach, creative
              execution, and commitment to measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="section" aria-labelledby="portfolio-heading">
        <div className="container">
          <h2 id="portfolio-heading" className="sr-only">
            Portfolio Projects
          </h2>

          {/* Category Filter - Note: In a real app, this would be interactive */}
          <nav className={styles.filters} aria-label="Project categories">
            <ul className={styles.filterList}>
              {categories.map((category, index) => (
                <li key={category}>
                  <button
                    type="button"
                    className={`${styles.filterButton} ${index === 0 ? styles.filterActive : ''}`}
                    aria-pressed={index === 0}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <PortfolioGrid showAll />

          {/* Note about more projects */}
          <div className={styles.moreInfo}>
            <p>
              These are just a few highlights. Each project tells a story of collaboration,
              strategy, and results.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`section ${styles.processSection}`} aria-labelledby="process-heading">
        <div className="container">
          <header className="section__header">
            <h2 id="process-heading" className="h2 section__title">
              Our Process
            </h2>
            <p className="section__subtitle">How we turn ideas into impactful results.</p>
          </header>
          <div className={styles.processGrid}>
            <article className={`surface ${styles.processCard}`}>
              <span className={styles.processNumber}>01</span>
              <h3>Discover</h3>
              <p>
                We start by understanding your business, audience, and goals through research and
                strategic conversations.
              </p>
            </article>
            <article className={`surface ${styles.processCard}`}>
              <span className={styles.processNumber}>02</span>
              <h3>Strategize</h3>
              <p>
                We develop a blueprint—a clear plan with defined objectives, timelines, and success
                metrics.
              </p>
            </article>
            <article className={`surface ${styles.processCard}`}>
              <span className={styles.processNumber}>03</span>
              <h3>Create</h3>
              <p>
                Our team executes with precision, crafting designs, content, and experiences that
                resonate.
              </p>
            </article>
            <article className={`surface ${styles.processCard}`}>
              <span className={styles.processNumber}>04</span>
              <h3>Optimize</h3>
              <p>
                We measure, learn, and refine—ensuring continuous improvement and long-term success.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" aria-labelledby="testimonials-heading">
        <div className="container">
          <header className="section__header">
            <h2 id="testimonials-heading" className="h2 section__title">
              What Clients Say
            </h2>
          </header>
          <div className={styles.testimonialGrid}>
            <blockquote className={`surface ${styles.testimonial}`}>
              <p>
                &quot;Schematic transformed our brand from scattered to strategic. Their systematic
                approach to our rebrand delivered results we&apos;re still benefiting from two years
                later.&quot;
              </p>
              <footer>
                <cite>
                  <strong>Jennifer Martinez</strong>
                  <span>CEO, Stellar Tech</span>
                </cite>
              </footer>
            </blockquote>
            <blockquote className={`surface ${styles.testimonial}`}>
              <p>
                &quot;They don&apos;t just build websites—they architect digital experiences. Our
                conversion rate increased 180% within three months of launch.&quot;
              </p>
              <footer>
                <cite>
                  <strong>David Kim</strong>
                  <span>Founder, Artisan Market</span>
                </cite>
              </footer>
            </blockquote>
            <blockquote className={`surface ${styles.testimonial}`}>
              <p>
                &quot;The team at Schematic understands that marketing is about connection. Our
                community engagement has never been stronger.&quot;
              </p>
              <footer>
                <cite>
                  <strong>Amanda Foster</strong>
                  <span>Marketing Director, Wellness Week</span>
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section ${styles.ctaSection}`} aria-labelledby="cta-heading">
        <div className="container">
          <div className={`surface ${styles.ctaCard}`}>
            <h2 id="cta-heading" className="h2">
              Your Project Could Be Next
            </h2>
            <p>
              Ready to create something meaningful together? Let&apos;s discuss your goals and how
              we can help achieve them.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
