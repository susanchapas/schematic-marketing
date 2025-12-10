import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = {
  services: [
    { href: '/portfolio', label: 'Web Development' },
    { href: '/portfolio', label: 'Social Media' },
    { href: '/portfolio', label: 'Graphic Design' },
    { href: '/portfolio', label: 'SEO' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/values', label: 'Our Values' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} blueprint-bg`}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.logo} aria-label="Schematic Marketing Home">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="40" height="40" rx="8" fill="#ffffff" />
                <path d="M12 28V12h4l4 10 4-10h4v16h-3V18l-3.5 9h-3L15 18v10h-3z" fill="#1b4688" />
              </svg>
              <span>Schematic Marketing</span>
            </Link>
            <p className={styles.tagline}>The Architecture of Influence.</p>
            <p className={styles.description}>
              We engineer engagement: modular marketing services blending strategy, design, and
              accessible tech.
            </p>
            <div className={styles.social}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className={styles.socialLink}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className={styles.socialLink}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          <nav className={styles.footerNav} aria-label="Footer navigation - Services">
            <h3 className={styles.navTitle}>Services</h3>
            <ul className={styles.navList}>
              {footerLinks.services.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.footerNav} aria-label="Footer navigation - Company">
            <h3 className={styles.navTitle}>Company</h3>
            <ul className={styles.navList}>
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.footerCta}>
            <h3 className={styles.navTitle}>Ready to Build?</h3>
            <p>Let&apos;s architect your next campaign together.</p>
            <Link href="/contact" className="btn btn--primary">
              Start a Project
            </Link>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Schematic Marketing. All rights reserved.</p>
          <p className={styles.footerAccent}>Built with precision. Designed with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
