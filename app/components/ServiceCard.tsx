import styles from './ServiceCard.module.css';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor?: 'blue' | 'rose';
}

export default function ServiceCard({
  title,
  description,
  icon,
  accentColor = 'blue',
}: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={`${styles.iconWrapper} ${styles[`iconWrapper--${accentColor}`]}`}>
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
