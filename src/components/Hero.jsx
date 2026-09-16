import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  return (
    <section className="hero-section" id="hero">
      {/* Background Video Banner */}
      <div className="video-background-wrapper">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          id="hero-video"
        >
          <source src="/Images/Hero banner.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="video-overlay" />
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="badge-dot dot-1" />
          <span>Brand Systems</span>
          <span className="badge-separator-dot dot-2" />
          <span>Corporate Websites</span>
          <span className="badge-separator-dot dot-3" />
          <span>Web Applications</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          The Infrastructure Behind Modern Business. <br className="desktop-only" />
          <span className="gradient-text">Businesses Run on Systems. We Build the Foundation.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Omega Digital creates high-performance digital ecosystems; combining brand identity, corporate websites, web applications, backend infrastructure, and business dashboards into systems designed to impress, convert, and grow with your organisation.
        </motion.p>

        <motion.div
          className="hero-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          <a href="#standards" className="glass-btn hero-primary-btn">
            <span>Explore Our Standards</span>
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="secondary-hero-btn"
            onClick={(e) => {
              if (onOpenContact) {
                e.preventDefault();
                onOpenContact();
              }
            }}
          >
            <span>Start a Project</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
