import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const containerRef = useRef(null);

  // Track scroll within the Hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Calibrated spring for organic, liquid inertia
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001
  });

  // Parallax video banner transformations (moves slower + subtle expansion)
  const videoY = useTransform(smoothProgress, [0, 1], ['0%', '16%']);
  const videoScale = useTransform(smoothProgress, [0, 1], [1, 1.08]);

  // Foreground text lifting & atmospheric fade
  const contentY = useTransform(smoothProgress, [0, 1], ['0px', '-90px']);
  const contentOpacity = useTransform(smoothProgress, [0, 0.75], [1, 0]);
  const contentScale = useTransform(smoothProgress, [0, 1], [1, 0.95]);

  return (
    <section className="hero-section" id="hero" ref={containerRef}>
      {/* Parallax Background Video Banner */}
      <motion.div
        className="video-background-wrapper"
        style={{ y: videoY, scale: videoScale }}
      >
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
      </motion.div>

      {/* Parallax Floating Hero Content */}
      <motion.div
        className="hero-content"
        style={{
          y: contentY,
          opacity: contentOpacity,
          scale: contentScale
        }}
      >
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
          Omega Innovation creates high-performance digital ecosystems; combining brand identity, corporate websites, web applications, backend infrastructure and business dashboards into systems designed to impress, convert and grow with your organisation.
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
      </motion.div>
    </section>
  );
}
