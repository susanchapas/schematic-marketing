import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Schematic Marketing — a systems-first creative studio that deconstructs complex market problems and rebuilds them into functional, artistic engines of growth.',
};

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'Founder & Creative Director',
    bio: 'With 15 years in brand strategy, Sarah brings architectural thinking to every creative challenge.',
  },
  {
    name: 'Marcus Williams',
    role: 'Head of Digital',
    bio: 'Full-stack developer turned strategist, Marcus bridges the gap between technical excellence and user experience.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Design Lead',
    bio: "From Fortune 500 brands to startups, Elena's design philosophy centers on clarity and emotional resonance.",
  },
  {
    name: 'James Okonkwo',
    role: 'Marketing Strategist',
    bio: 'Data-driven with a creative edge, James turns market insights into actionable growth strategies.',
  },
];

export default function AboutPage() {
  return (
    <main id="main" role="main">
      {/* Hero Section */}
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className="h1">We Build the Blueprint for Your Brand&apos;s Growth</h1>
            <p className="text-lead">
              Schematic Marketing is a systems-first creative studio. We deconstruct complex market
              problems and rebuild them into functional, artistic engines of growth.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section" aria-labelledby="story-heading">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <h2 id="story-heading" className="h2">
                Our Story
              </h2>
              <p>
                Founded in 2018, Schematic Marketing emerged from a simple observation: too many
                agencies prioritize flash over function, creativity over strategy, or vice versa.
              </p>
              <p>
                We believed there was a better way—an approach that treats marketing like
                architecture. Every element has purpose. Every component interlocks. Every campaign
                is built on a foundation of research, strategy, and intentional design.
              </p>
              <p>
                Today, we serve clients across industries, from ambitious startups to established
                enterprises. But our mission remains the same: to engineer engagement that lasts.
              </p>
            </div>
            <div className={`surface ${styles.storyVisual}`}>
              <p className={`text-accent ${styles.quote}`}>
                &quot;What happens when precision and softness share a single surface? Interaction
                becomes legible and pleasant.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={`section ${styles.missionSection}`} aria-labelledby="mission-heading">
        <div className="container">
          <div className={styles.missionContent}>
            <h2 id="mission-heading" className="h2">
              Our Mission
            </h2>
            <p className={styles.missionStatement}>
              To deconstruct complex market problems and rebuild them into functional, artistic
              engines of growth.
            </p>
            <div className={styles.pillars}>
              <article className={`surface ${styles.pillar}`}>
                <h3>Structural Integrity</h3>
                <p>
                  Plan before you act. Every element has purpose, every decision is intentional.
                </p>
              </article>
              <article className={`surface ${styles.pillar}`}>
                <h3>Modular Flexibility</h3>
                <p>
                  Components that compose and recompose without friction—built to scale with you.
                </p>
              </article>
              <article className={`surface ${styles.pillar}`}>
                <h3>Human Fluidity</h3>
                <p>Data and empathy coexist. We blend analytics with authentic human connection.</p>
              </article>
              <article className={`surface ${styles.pillar}`}>
                <h3>Accessible Innovation</h3>
                <p>High-tech execution that stays readable, usable, and inclusive for everyone.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section" aria-labelledby="team-heading">
        <div className="container">
          <header className="section__header">
            <h2 id="team-heading" className="h2 section__title">
              Meet the Team
            </h2>
            <p className="section__subtitle">
              Architects, artists, and analysts united by a passion for purposeful work.
            </p>
          </header>
          <div className={styles.teamGrid}>
            {teamMembers.map(member => (
              <article key={member.name} className={`surface ${styles.teamCard}`}>
                <div className={styles.teamAvatar} aria-hidden="true">
                  {member.name
                    .split(' ')
                    .map(n => n[0])
                    .join('')}
                </div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
                <p className={styles.teamBio}>{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section ${styles.ctaSection}`} aria-labelledby="cta-heading">
        <div className="container">
          <div className={`surface ${styles.ctaCard}`}>
            <h2 id="cta-heading" className="h2">
              Ready to Work Together?
            </h2>
            <p>Let&apos;s discuss how we can architect your brand&apos;s next chapter.</p>
            <Link href="/contact" className="btn btn--primary">
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
