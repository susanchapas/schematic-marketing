'use client';

import ServiceCard from './ServiceCard';
import styles from './ServicesGrid.module.css';

const services = [
  {
    title: 'Strategic Planning',
    subtitle: 'Foundation Layer',
    description:
      'Data-driven strategy that aligns your marketing with business objectives and market realities.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: 'Web Development',
    subtitle: 'Digital Architecture',
    description:
      'Performance-first websites engineered with clean code, accessibility, and conversion in mind.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Brand Identity',
    subtitle: 'Visual Systems',
    description:
      'Cohesive visual identities that communicate your values and differentiate your presence.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: 'Social Media',
    subtitle: 'Engagement Layer',
    description:
      'Strategic content creation and community management that builds authentic connections.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 2h4v4" />
        <path d="M21 2l-9 9" />
        <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
      </svg>
    ),
  },
  {
    title: 'SEO & Analytics',
    subtitle: 'Data Systems',
    description:
      'Technical optimization and measurement frameworks that drive visibility and insights.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Content Strategy',
    subtitle: 'Messaging Layer',
    description:
      'Purposeful content that informs, engages, and moves your audience through the funnel.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

interface ServicesGridProps {
  limit?: number;
}

export default function ServicesGrid({ limit }: ServicesGridProps) {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <div className={styles.grid}>
      {displayedServices.map((service, index) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          subtitle={service.subtitle}
          description={service.description}
          icon={service.icon}
          delay={index * 0.08}
        />
      ))}
    </div>
  );
}
