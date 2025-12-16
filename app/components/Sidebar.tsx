'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Sidebar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Our Work' },
  { href: '/contact', label: 'Contact' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, handleKeyDown]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className={styles.mobileHeader}>
        <Link href="/" className={styles.mobileLogo} aria-label="Schematic Marketing Home">
          <svg
            width="36"
            height="36"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="40" height="40" rx="4" fill="#1b4688" />
            <path d="M12 28V12h4l4 10 4-10h4v16h-3V18l-3.5 9h-3L15 18v10h-3z" fill="#ffffff" />
          </svg>
          <span>Schematic</span>
        </Link>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMobileMenu}
        >
          <span className={`${styles.menuIcon} ${isMobileMenuOpen ? styles.menuIconOpen : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </header>

      {/* Desktop Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarInner}>
          <Link href="/" className={styles.logo} aria-label="Schematic Marketing Home">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect width="40" height="40" rx="4" fill="#ffffff" />
              <path d="M12 28V12h4l4 10 4-10h4v16h-3V18l-3.5 9h-3L15 18v10h-3z" fill="#1b4688" />
            </svg>
            <span className={styles.logoText}>Schematic</span>
          </Link>

          <nav className={styles.nav} aria-label="Primary navigation">
            <ul className={styles.navList}>
              {navLinks.map(link => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} className={styles.navItem}>
                    <Link
                      href={link.href}
                      className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeIndicator"
                          className={styles.activeIndicator}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.sidebarFooter}>
            <Link href="/contact" className={styles.ctaButton}>
              Start the Schematic
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-nav"
              className={styles.mobileNav}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              aria-label="Mobile navigation"
            >
              <ul className={styles.mobileNavList}>
                {navLinks.map(link => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`${styles.mobileNavLink} ${isActive ? styles.active : ''}`}
                        onClick={closeMenu}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link href="/contact" className={styles.mobileCtaButton} onClick={closeMenu}>
                Start the Schematic
              </Link>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
