import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function Manifesto() {
  const stats = [
    { number: '100%', label: 'Brand Cohesion' },
    { number: '1 Year', label: 'Free Hosting & Domain' },
    { number: '24/7', label: 'Operational Uptime' }
  ];

  return (
    <section className="manifesto-section" id="about">
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
              Your Brand is More Than a Logo.<br />
              It’s Your Competitive Edge.
            </h2>
            <p className="manifesto-paragraph">
              Your brand carries your business into every interaction, every customer touchpoint, and every market opportunity. At the same time, modern enterprises run on systems. 
              <br /><br />
              Omega Digital builds the systems that keep your operations moving — from unified brand identities and digital headquarters to custom web applications engineered to streamline workflows, automate processes, and strengthen backend infrastructure.
            </p>

            <div className="stats-row">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Frame with Floating Glass Badge */}
          <motion.div
            className="manifesto-visual-frame"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Omega Digital Strategic Studio"
              className="manifesto-main-img"
              loading="lazy"
            />

            <div className="manifesto-floating-badge">
              <div className="badge-icon">
                <Sparkles size={22} />
              </div>
              <div>
                <div className="badge-text-title">Digital Headquarters</div>
                <div className="badge-text-subtitle">Built to Impress, Convert & Scale</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
