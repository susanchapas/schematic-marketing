'use client';

import PortfolioCard from './PortfolioCard';
import styles from './PortfolioGrid.module.css';

const projects = [
  {
    title: 'Enterprise Rebrand',
    category: 'Brand Strategy',
    description: 'Complete identity overhaul for a Fortune 500 technology company.',
    metrics: '+180% brand recognition',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'High-performance platform built for scale and conversion.',
    metrics: '+340% conversion rate',
  },
  {
    title: 'Nonprofit Awareness',
    category: 'Campaign',
    description: 'Multi-channel campaign that reached millions and drove record donations.',
    metrics: '2M+ reach',
  },
  {
    title: 'SaaS Launch',
    category: 'Go-to-Market',
    description: 'Full-funnel strategy from positioning to paid acquisition.',
    metrics: '$2M ARR in 6 months',
  },
  {
    title: 'Healthcare Portal',
    category: 'Digital Experience',
    description: 'Patient-centered platform with accessibility at its core.',
    metrics: '98% satisfaction score',
  },
  {
    title: 'Financial Services',
    category: 'Content Strategy',
    description: 'Thought leadership program that established market authority.',
    metrics: '+450% organic traffic',
  },
];

interface PortfolioGridProps {
  limit?: number;
}

export default function PortfolioGrid({ limit }: PortfolioGridProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className={styles.grid}>
      {displayedProjects.map(project => (
        <PortfolioCard
          key={project.title}
          title={project.title}
          category={project.category}
          description={project.description}
          metrics={project.metrics}
        />
      ))}
    </div>
  );
}
