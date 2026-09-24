import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring, animate } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Manifesto() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: '0px 0px -140px 0px' });

  // Parallax tracking across Manifesto section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001
  });

  // Parallax multi-plane offsets
  const frameY = useTransform(smoothProgress, [0, 1], ['-32px', '32px']);
  const badgeY = useTransform(smoothProgress, [0, 1], ['22px', '-22px']);
  const imgScale = useTransform(smoothProgress, [0, 1], [1.04, 0.98]);

  const [countPercent, setCountPercent] = useState(0);
  const [countYear, setCountYear] = useState(0);
  const [countUptime, setCountUptime] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Stat 1: 0% to 100%
    const controlsPercent = animate(0, 100, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCountPercent(Math.round(latest))
    });

    // Stat 2: 0 Year to 1 Year
    const controlsYear = animate(0, 1, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCountYear(Math.round(latest))
    });

    // Stat 3: 0/7 to 24/7 (counts from 0 to 24)
    const controlsUptime = animate(0, 24, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCountUptime(Math.round(latest))
    });

    return () => {
      controlsPercent.stop();
      controlsYear.stop();
      controlsUptime.stop();
    };
  }, [isInView]);

  const stats = [
    { number: `${countPercent}%`, label: 'Brand Cohesion' },
    { number: `${countYear} Year`, label: 'Free Hosting & Domain' },
    { number: `${countUptime}/7`, label: 'Operational Uptime' }
  ];

  return (
    <section className="manifesto-section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="manifesto-grid">
          {/* Left Column: Editorial Philosophy & Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-tag">THE OMEGA PHILOSOPHY</span>
            <h2 className="section-title">
              Your Brand.<br />
              Your Competitive Edge.
            </h2>
            <p className="manifesto-paragraph">
              Your brand shapes perception, builds trust and creates meaningful connections at every stage of the customer journey. Behind every successful business is a powerful digital foundation that enables growth, efficiency and innovation.
              <br /><br />
              At Omega Innovation, we design and develop the digital ecosystems that power modern businesses. From strategic brand identities and immersive digital experiences to custom web applications and intelligent automation, we create solutions that streamline operations, enhance performance and position organisations for sustainable growth.
            </p>

            <div className="stats-wrapper" ref={statsRef}>
              <motion.div
                className="stats-accent-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="stats-row">
                {stats.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Frame with Multi-Plane Floating Glass Badge */}
          <motion.div
            className="manifesto-visual-frame"
            style={{ y: frameY }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="manifesto-img-wrapper">
              <motion.img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Omega Innovation Strategic Studio"
                className="manifesto-main-img"
                style={{ scale: imgScale }}
                loading="lazy"
              />
              <div className="manifesto-img-overlay" />
            </div>

            <motion.div
              className="manifesto-floating-badge"
              style={{ y: badgeY }}
            >
              <div className="badge-icon">
                <Sparkles size={22} />
              </div>
              <div>
                <div className="badge-text-title">Digital Headquarters</div>
                <div className="badge-text-subtitle">Built to Impress, Convert & Scale</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
