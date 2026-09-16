import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  Globe, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown,
  Zap
} from 'lucide-react';

const highlightListVariants = {
  hidden: { opacity: 1 },
  visible: (customIdx = 0) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: customIdx * 0.15 + 0.15
    }
  })
};

const highlightItemVariants = {
  hidden: {
    opacity: 0,
    y: 16
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const checkIconVariants = {
  hidden: { scale: 0.4, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 450,
      damping: 22
    }
  }
};

export default function Services({ onOpenContact }) {
  const [expandedStages, setExpandedStages] = useState({});

  const toggleStageExpand = (stageId) => {
    setExpandedStages(prev => ({
      ...prev,
      [stageId]: !prev[stageId]
    }));
  };

  const stages = [
    {
      id: 'branding',
      stepNumber: '01',
      stepPhase: 'FOUNDATION',
      title: 'Brand Systems & Corporate Identity',
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=800&q=80',
      summary: 'Cohesive, premium corporate brand systems engineered to establish instant market authority and command respect across print, digital, and physical environments.',
      highlights: [
        'Custom Logo & Vector Mark Architecture',
        'Complete Executive Stationery Suite',
        'Staff Identity & Credential Systems',
        'Authoritative Brand Guidelines Book'
      ],
      deliverables: [
        { name: 'Logo Design & Identity Creation', desc: 'Custom-crafted marks reflecting personality, values, and market authority.' },
        { name: 'Complete Stationery Suite', desc: 'Business cards, letterheads, envelopes, folders, and invoice templates.' },
        { name: 'Staff Identity Assets', desc: 'Shirt name tags, ID badges, desk plaques, and company credential systems.' },
        { name: 'Marketing & Sales Collateral', desc: 'Sale signs, billboard designs, posters, flyers, brochures, and POS branding.' },
        { name: 'Digital Brand Kits', desc: 'Social media kits, profile banners, post templates, and digital assets.' },
        { name: 'Website Branding Assets', desc: 'Custom icons, UI components, brand-aligned graphics, and design systems.' },
        { name: 'Brand Guidelines & Brand Book', desc: 'Complete manual covering logo rules, palettes, typography, and tone of voice.' }
      ]
    },
    {
      id: 'websites',
      stepNumber: '02',
      stepPhase: 'HEADQUARTERS',
      title: 'Corporate Website Platforms',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      summary: 'High-converting corporate websites engineered for sub-second performance, credibility, and brand consistency — fully inclusive of enterprise cloud hosting and managed domains.',
      highlights: [
        'High-Performance Hosting — FREE for 1 Year',
        'Custom Domain Registration — FREE for 1 Year',
        'Turnkey Professional Business Email',
        'Technical SEO Architecture & Sub-second LCP'
      ],
      deliverables: [
        { name: 'Brand-Aligned UI/UX Design', desc: 'Custom corporate design matching your exact palette, typography, and voice.' },
        { name: 'High-Performance Hosting — FREE for 1 Year', desc: 'Ultra-fast, enterprise-grade cloud hosting included at zero cost for 12 months.' },
        { name: 'Domain Registration — FREE for 1 Year', desc: 'Seamless custom domain registration fully managed and secured.' },
        { name: 'Professional Email Setup', desc: 'Turnkey Hostinger business email and Google Workspace / Gmail integration.' },
        { name: 'SEO-Ready Architecture', desc: 'Structured metadata, clean semantic markup, and speed optimization for search rankings.' },
        { name: 'Multi-Device Responsiveness', desc: 'Fluid layouts that look immaculate on mobile phones, tablets, laptops, and ultra-wide displays.' }
      ]
    },
    {
      id: 'webapps',
      stepNumber: '03',
      stepPhase: 'OPERATIONS',
      title: 'Web Apps & Business Systems',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      summary: 'Custom web applications and operational dashboards tailored to eliminate manual bottlenecks, streamline workflows, and automate core enterprise operations.',
      highlights: [
        'Centralized Company Backend Systems',
        'Real-time Inventory & Logistics Dashboards',
        'Automated Order Processing Engines',
        'Granular Role-Based Security & Permissions'
      ],
      deliverables: [
        { name: 'Company Backend Systems', desc: 'Robust centralized backends handling enterprise logic and secure operations.' },
        { name: 'Production Management Platforms', desc: 'End-to-end tracking for manufacturing, scheduling, and output management.' },
        { name: 'Supply Chain & Logistics Dashboards', desc: 'Real-time visibility into inventory, order pipelines, and shipment tracking.' },
        { name: 'Order Processing & Tracking Systems', desc: 'Automated workflows from customer order placement to delivery fulfillment.' },
        { name: 'Internal Workflow Automation', desc: 'Eliminate repetitive manual tasks through reliable custom automation pipelines.' },
        { name: 'Custom Portals & Admin Panels', desc: 'Tailored administrative interfaces with role-based security and granular permissions.' }
      ]
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="services-header center-text">
          <span className="section-tag">SYSTEM LIFECYCLE // 3-STAGE PIPELINE</span>
          <h2 className="section-title">From Brand Identity to Enterprise Systems</h2>
        </div>

        {/* Minimal 3-Column Glass Bento Grid */}
        <div className="minimal-services-grid">
          {stages.map((stage, stageIdx) => {
            const isExpanded = !!expandedStages[stage.id];
            const Icon = stage.icon;

            return (
              <div key={stage.id} className="minimal-service-card">
                {/* Top Subtle Luminous Rim */}
                <div className="minimal-card-rim-glow" />

                {/* Card Top Media Banner */}
                <div className="minimal-card-media-banner">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="minimal-card-img"
                    loading="lazy"
                  />
                  <div className="minimal-card-media-overlay" />
                  
                  {/* Floating Meta Badges */}
                  <div className="minimal-card-media-top">
                    <span className="minimal-step-index">
                      <span className="step-dot" />
                      // {stage.stepNumber}
                    </span>
                    <span className="minimal-phase-tag">{stage.stepPhase}</span>
                  </div>

                  <div className="minimal-card-icon-wrap">
                    <Icon size={18} className="minimal-card-icon" />
                  </div>
                </div>

                {/* Title & Summary */}
                <div className="minimal-card-body">
                  <h3 className="minimal-card-title">{stage.title}</h3>
                  <p className="minimal-card-summary">{stage.summary}</p>
                </div>

                {/* Hairline Divider */}
                <div className="minimal-card-divider" />

                {/* Key Deliverables Highlights */}
                <div className="minimal-highlights-section">
                  <span className="minimal-highlights-label">Core Deliverables</span>
                  <motion.ul
                    className="minimal-highlights-list"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5, margin: "0px 0px -120px 0px" }}
                    custom={stageIdx}
                    variants={highlightListVariants}
                  >
                    {stage.highlights.map((point) => (
                      <motion.li
                        key={point}
                        className="minimal-highlight-item"
                        variants={highlightItemVariants}
                      >
                        <motion.span
                          className="minimal-check-wrap"
                          variants={checkIconVariants}
                        >
                          <CheckCircle2 size={15} className="minimal-check-icon" />
                        </motion.span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Expandable Specifications Inclusions */}
                <div className="minimal-inclusions-wrapper">
                  <button
                    type="button"
                    onClick={() => toggleStageExpand(stage.id)}
                    className="minimal-expand-btn"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Hide Specifications' : `View Full Scope (${stage.deliverables.length} Items)`}</span>
                    <ChevronDown
                      size={15}
                      style={{
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        className="minimal-deliverables-drawer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="minimal-drawer-inner">
                          {stage.deliverables.map((item) => (
                            <div key={item.name} className="minimal-deliverable-box">
                              <span className="deliverable-box-name">{item.name}</span>
                              <p className="deliverable-box-desc">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Footer Actions */}
                <div className="minimal-card-footer">
                  <a
                    href="#contact"
                    className="minimal-card-cta"
                    onClick={(e) => {
                      if (onOpenContact) {
                        e.preventDefault();
                        onOpenContact();
                      }
                    }}
                  >
                    <span>Deploy Stage {stage.stepNumber}</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Milestone Integration Banner */}
        <div className="minimal-bottom-banner">
          <div className="minimal-bottom-content">
            <div className="minimal-bottom-icon">
              <Zap size={22} />
            </div>
            <div className="minimal-bottom-text">
              <h4 className="minimal-bottom-title">Need an Integrated End-to-End Solution?</h4>
              <p className="minimal-bottom-desc">
                From your initial logo design to a high-converting digital headquarters and custom backend logistics systems — Omega Digital unifies your entire technology ecosystem under one authoritative roof.
              </p>
            </div>
            <a
              href="#contact"
              className="glass-btn minimal-bottom-btn"
              onClick={(e) => {
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                }
              }}
            >
              <span>Initiate Consultation</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
