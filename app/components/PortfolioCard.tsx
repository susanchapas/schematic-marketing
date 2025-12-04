import Image from 'next/image';
import Link from 'next/link';
import styles from './PortfolioCard.module.css';

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  tags: string[];
}

interface PortfolioCardProps {
  project: PortfolioProject;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={project.imageUrl}
          alt={`${project.title} project showcase`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={styles.image}
        />
        <div className={styles.overlay}>
          <span className={styles.category}>{project.category}</span>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map(tag => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/portfolio#${project.id}`} className={styles.link}>
          View Project
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
