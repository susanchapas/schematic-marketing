import PortfolioCard, { PortfolioProject } from './PortfolioCard';
import styles from './PortfolioGrid.module.css';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'stellar-rebrand',
    title: 'Stellar Tech Rebrand',
    description:
      'Complete brand identity refresh including logo, color system, and comprehensive guidelines for a growing tech startup.',
    category: 'Branding',
    imageUrl: '/portfolio/stellar-tech.jpg',
    tags: ['Brand Strategy', 'Logo Design', 'Guidelines'],
  },
  {
    id: 'artisan-ecommerce',
    title: 'Artisan Market E-commerce',
    description:
      'Custom e-commerce platform built for local artisans, featuring accessible design and seamless checkout experience.',
    category: 'Web Development',
    imageUrl: '/portfolio/artisan-market.jpg',
    tags: ['Next.js', 'E-commerce', 'Accessibility'],
  },
  {
    id: 'wellness-campaign',
    title: 'Wellness Week Campaign',
    description:
      'Multi-channel social media campaign that increased engagement by 340% and drove significant event attendance.',
    category: 'Social Media',
    imageUrl: '/portfolio/wellness-week.jpg',
    tags: ['Content Strategy', 'Analytics', 'Community'],
  },
  {
    id: 'summit-event',
    title: 'Innovation Summit 2024',
    description:
      'End-to-end planning and execution of a 500+ attendee tech conference with virtual streaming capabilities.',
    category: 'Event Planning',
    imageUrl: '/portfolio/innovation-summit.jpg',
    tags: ['Logistics', 'Hybrid Events', 'Branding'],
  },
  {
    id: 'organic-seo',
    title: 'Organic Growth Strategy',
    description:
      'SEO overhaul that achieved first-page rankings for 50+ competitive keywords within 6 months.',
    category: 'SEO',
    imageUrl: '/portfolio/organic-growth.jpg',
    tags: ['Technical SEO', 'Content', 'Analytics'],
  },
  {
    id: 'foundation-identity',
    title: 'Foundation Identity System',
    description:
      'Cohesive visual identity for a nonprofit including print collateral, digital assets, and brand guidelines.',
    category: 'Graphic Design',
    imageUrl: '/portfolio/foundation-identity.jpg',
    tags: ['Print Design', 'Digital', 'Nonprofit'],
  },
];

interface PortfolioGridProps {
  limit?: number;
  showAll?: boolean;
}

export default function PortfolioGrid({ limit, showAll = false }: PortfolioGridProps) {
  const projects = limit ? portfolioProjects.slice(0, limit) : portfolioProjects;

  return (
    <div className={styles.grid}>
      {projects.map(project => (
        <PortfolioCard key={project.id} project={project} />
      ))}
    </div>
  );
}
