import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const partners = [
    { name: 'MONARCH SERVICES', symbol: '◆' },
    { name: 'ACUMEN DYNAMICS', symbol: '▲' },
    { name: 'VERTEX GLOBAL', symbol: '●' },
    { name: 'MERIDIAN CAPITAL', symbol: '◼' },
    { name: 'SYNAPSE LABS', symbol: '◈' }
  ];

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
          <span className="badge-dot" />
          <span>Brand Systems &bull; Corporate Websites &bull; Web Applications</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          Businesses Run on Systems. <br className="desktop-only" />
          <span className="gradient-text">We Build the Foundation.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          From iconic brand identity and custom corporate websites to scalable backend architectures and operational dashboards — Omega Digital engineers digital assets built to impress, convert, and scale.
        </motion.p>

        <motion.div
          className="hero-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          <a href="#work" className="glass-btn hero-primary-btn">
            <span>Explore Our Solutions</span>
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="secondary-hero-btn">
            <span>Start a Project</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Frosted Glass Trust Bar */}
      <div className="hero-trust-bar">
        <div className="trust-container">
          <p className="trust-label">Proudly Trusted By Forward-Thinking Businesses</p>
          <div className="client-logos-ticker">
            {partners.map((partner) => (
              <div key={partner.name} className="client-logo-item">
                <span className="logo-symbol">{partner.symbol}</span>
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
