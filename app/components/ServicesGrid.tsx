import ServiceCard from './ServiceCard';
import styles from './ServicesGrid.module.css';

const services = [
  {
    title: 'Social Media Management',
    description:
      'Strategic content creation and community engagement that builds authentic connections and drives meaningful interactions.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="5" cy="5" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M6.7 6.7l3.5 3.5M13.8 13.8l3.5 3.5M6.7 17.3l3.5-3.5M13.8 10.2l3.5-3.5" />
      </svg>
    ),
    accentColor: 'blue' as const,
  },
  {
    title: 'Web Development',
    description:
      'Fast, accessible, and beautifully crafted websites that convert visitors into customers with seamless user experiences.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    accentColor: 'blue' as const,
  },
  {
    title: 'Graphic Design',
    description:
      'Visual storytelling that captures your brand essence through logos, marketing materials, and cohesive design systems.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    accentColor: 'rose' as const,
  },
  {
    title: 'Event Planning',
    description:
      'End-to-end event coordination that creates memorable experiences, from intimate gatherings to large-scale productions.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    accentColor: 'rose' as const,
  },
  {
    title: 'SEO Optimization',
    description:
      'Data-driven strategies to improve your visibility, increase organic traffic, and achieve sustainable search rankings.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <circle cx="11" cy="11" r="3" />
        <circle cx="11" cy="11" r="1" />
      </svg>
    ),
    accentColor: 'blue' as const,
  },
  {
    title: 'Brand Strategy',
    description:
      'Comprehensive brand development that defines your unique position in the market and guides all creative decisions.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    accentColor: 'rose' as const,
  },
];

export default function ServicesGrid() {
  return (
    <div className={styles.grid}>
      {services.map(service => (
        <ServiceCard
          key={service.title}
          title={service.title}
          description={service.description}
          icon={service.icon}
          accentColor={service.accentColor}
        />
      ))}
    </div>
  );
}
