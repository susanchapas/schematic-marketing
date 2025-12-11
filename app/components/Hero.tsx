import Link from 'next/link';
import styles from './Hero.module.css';

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: 'home' | 'page';
}

export default function Hero({
  title = 'The Marketing Agency for the Architecture of Influence',
  subtitle = 'We engineer engagement: modular marketing services blending strategy, design, and accessible tech.',
  primaryCta = { label: 'View Our Work', href: '/portfolio' },
  secondaryCta = { label: 'Get in Touch', href: '/contact' },
  variant = 'home',
}: HeroProps) {
  return (
    <section
      className={`${styles.hero} ${variant === 'home' ? styles.heroHome : styles.heroPage} blueprint-bg`}
    >
      <div className={styles.heroBackground} aria-hidden="true">
        <div className={styles.gridOverlay}></div>
        <div className={styles.watercolorAccent}></div>
      </div>
      <div className={`container ${styles.heroContent}`}>
        <h1 className={`h1 ${styles.heroTitle}`}>{title}</h1>
        <p className={`text-lead ${styles.heroSubtitle}`}>{subtitle}</p>
        <div className={styles.heroCtas}>
          <Link href={primaryCta.href} className="btn btn--primary">
            {primaryCta.label}
          </Link>
          <Link href={secondaryCta.href} className="btn btn--secondary">
            {secondaryCta.label}
          </Link>
        </div>
        {variant === 'home' && (
          <p className={styles.heroAccent}>
            <span className="text-accent">Blueprint precision meets creative fluidity.</span>
          </p>
        )}
      </div>
    </section>
  );
}
