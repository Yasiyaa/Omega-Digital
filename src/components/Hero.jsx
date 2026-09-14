import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
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
          <a href="#standards" className="glass-btn hero-primary-btn">
            <span>Explore Our Standards</span>
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="secondary-hero-btn">
            <span>Start a Project</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
