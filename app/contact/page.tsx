'use client';

import { motion, useReducedMotion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import AnimatedSection from '../components/AnimatedSection';
import MorphCard from '../components/MorphCard';
import FloatingAccent from '../components/FloatingAccent';
import styles from './contact.module.css';

const contactInfo = [
  {
    label: 'Email',
    value: 'info@schematicmarketing.com',
    href: 'mailto:info@schematicmarketing.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Jersey City, NJ',
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: 'What is your typical project timeline?',
    answer:
      'Project timelines vary based on scope. A branding project typically takes 4-6 weeks, while a full website build can range from 8-12 weeks. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you work with clients remotely?',
    answer:
      'Absolutely. While we are based in Jersey City, we work with clients worldwide. Our collaborative tools and communication processes ensure seamless remote partnerships.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'We work across industries including technology, healthcare, nonprofit, e-commerce, and professional services. Our systematic approach adapts to any sector.',
  },
  {
    question: 'How do you measure success?',
    answer:
      'We establish clear KPIs at the start of every project—whether that is increased traffic, higher conversion rates, improved brand awareness, or engagement metrics. We track and report on these throughout our engagement.',
  },
];

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main id="main" role="main">
      {/* Hero Section */}
      <section className={`section ${styles.hero}`}>
        <FloatingAccent size="lg" position="top-right" color="peach" delay={0.2} />
        <div className="container">
          <div className={styles.heroContent}>
            <AnimatedSection>
              <h1 className="h1">Let&apos;s Build Something Together</h1>
              <div className={styles.accentBar} aria-hidden="true" />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lead">
                Have a project in mind? We&apos;d love to hear about it. Fill out the form below or
                reach out directly—we typically respond within one business day.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" aria-labelledby="contact-heading">
        <div className="container">
          <h2 id="contact-heading" className="sr-only">
            Contact Form and Information
          </h2>
          <div className={styles.contactGrid}>
            <AnimatedSection className={styles.formWrapper}>
              <ContactForm />
            </AnimatedSection>

            <aside className={styles.sidebar}>
              <MorphCard className={styles.contactInfo} delay={0.1}>
                <h3>Get in Touch</h3>
                <ul className={styles.infoList}>
                  {contactInfo.map(item => (
                    <li key={item.label} className={styles.infoItem}>
                      <span className={styles.infoIcon} aria-hidden="true">
                        {item.icon}
                      </span>
                      <div>
                        <strong>{item.label}</strong>
                        {item.href ? (
                          <a href={item.href}>{item.value}</a>
                        ) : (
                          <span>{item.value}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </MorphCard>

              <MorphCard className={styles.availability} delay={0.2}>
                <h3>Availability</h3>
                <p>
                  We&apos;re currently accepting new projects for <strong>Q1 2025</strong>. Reach
                  out early to secure your spot.
                </p>
                <p className={styles.responseTime}>
                  <span aria-hidden="true">⏱</span> Average response time: 24 hours
                </p>
              </MorphCard>

              <MorphCard className={styles.social} delay={0.3}>
                <h3>Follow Along</h3>
                <div className={styles.socialLinks}>
                  <a
                    href="https://www.linkedin.com/company/schematic-marketing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on LinkedIn"
                    className={styles.socialLink}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/schematicmarketing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    className={styles.socialLink}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z" />
                    </svg>
                    Instagram
                  </a>
                </div>
              </MorphCard>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`section ${styles.faqSection}`} aria-labelledby="faq-heading">
        <div className="container">
          <AnimatedSection>
            <header className="section__header">
              <h2 id="faq-heading" className="h2 section__title">
                Frequently Asked Questions
              </h2>
            </header>
          </AnimatedSection>
          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <MorphCard key={faq.question} className={styles.faqCard} delay={index * 0.08}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </MorphCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
