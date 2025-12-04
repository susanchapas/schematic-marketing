'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/values', label: 'Values' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, handleKeyDown]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.logo} aria-label="Schematic Marketing Home">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="40" height="40" rx="8" fill="#1b4688" />
            <path d="M12 28V12h4l4 10 4-10h4v16h-3V18l-3.5 9h-3L15 18v10h-3z" fill="#ffffff" />
          </svg>
          <span className={styles.logoText}>Schematic</span>
        </Link>

        <nav
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
          aria-label="Primary navigation"
        >
          <ul className={styles.navList}>
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink} onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn--primary" onClick={closeMenu}>
            Get Started
          </Link>
        </nav>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}
        >
          <span className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconOpen : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </header>
  );
}
