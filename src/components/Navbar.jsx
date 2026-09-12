import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      if (!hero) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      setScrolled(heroBottom <= 90);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll and horizontal wobbling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileOpen]);

  const logoSrc = scrolled
    ? '/Images/1 logo_Logo concept 1 copy 2.png'
    : '/Images/1 logo_Logo concept 1 copy 4.png';

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Selected Work', href: '#work' },
    { name: 'About Us', href: '#about' },
    { name: 'Process', href: '#process' }
  ];

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
        <motion.nav
          className="glass-navbar"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo */}
          <a href="#hero" className="brand-logo" aria-label="Omega Digital Home">
            <img
              src={logoSrc}
              alt="Omega Digital"
              className="nav-logo-img"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            {navLinks.map((item) => (
              <a key={item.name} href={item.href} className="nav-link">
                {item.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="nav-actions">
            <a href="#contact" className="glass-btn nav-cta-btn">
              <span>Contact Us</span>
              <ArrowUpRight size={16} />
            </a>

            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer & Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              className="mobile-drawer"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mobile-drawer-header">
                <span className="mobile-drawer-title">Navigation</span>
                <button
                  className="mobile-drawer-close"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mobile-drawer-content">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="mobile-link"
                    onClick={handleLinkClick}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={16} className="mobile-link-icon" />
                  </a>
                ))}

                <a
                  href="#contact"
                  className="glass-btn mobile-cta-btn"
                  onClick={handleLinkClick}
                >
                  <span>Start a Project</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
