import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Monarch Services — One Team. Complete Property Care',
      category: 'Full Corporate Website & Brand Deployment',
      client: 'Monarch Services (Melbourne, VIC)',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
      liveUrl: 'https://monarch-vert-six.vercel.app/',
      description:
        'Engineered an authoritative digital headquarters for Melbourne’s leading property care enterprise. Features brand-aligned UI/UX, service scheduling, instant customer quote requests, and optimized local SEO.'
    },
    {
      title: 'Apex Global — Supply Chain & Production Management Platform',
      category: 'Web App Solutions for Business',
      client: 'Apex Industrial Systems',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
      description:
        'Centralized company backend platform with real-time inventory and logistics dashboards, automated order processing, and production scheduling that reduced fulfillment lag by 65%.'
    },
    {
      title: 'Aura Atelier — Luxury Stationery & Full Brand Suite',
      category: 'Business Cards & Full Company Branding',
      client: 'Aura Architecture Group',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      description:
        'Complete corporate identity overhaul: custom logo system, blind-debossed business cards, executive stationery, staff name tags, digital brand kit, and an authoritative 60-page Brand Book.'
    },
    {
      title: 'Meridian Capital — Internal Workflow Automation & Admin Portal',
      category: 'Custom Business Portals & Admin Panels',
      client: 'Meridian Capital Group',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      description:
        'Tailored administrative engine with granular role-based security, automated client document verification, and real-time transaction telemetry with zero downtime architecture.'
    }
  ];

  return (
    <section className="work-section" id="work">
      <div className="container">
        <div className="section-header-split">
          <div>
            <span className="section-tag">PROVEN IMPACT</span>
            <h2 className="section-title">Selected Deployments</h2>
          </div>
          <p className="header-side-text">
            Explore live digital headquarters, custom corporate branding suites, and operational web application systems engineered for our partners.
          </p>
        </div>

        <div className="work-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="work-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="work-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="work-img"
                />
                <div className="work-overlay">
                  <span className="work-category">{project.category}</span>
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-preview-pill"
                    aria-label={`View live website for ${project.client}`}
                  >
                    <span>Live Deployment</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              <div className="work-details">
                <div className="work-meta">
                  <span className="work-client">{project.client}</span>
                  <span className="work-year">{project.year}</span>
                </div>
                
                <h3 className="work-title">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="title-link">
                      {project.title}
                      <ArrowUpRight size={18} />
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                
                <p className="work-desc">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
