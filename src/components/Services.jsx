import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  Globe, 
  Cpu, 
  ArrowRight, 
  Sparkles, 
  Zap 
} from 'lucide-react';

const stages = [
  {
    id: 'branding',
    stepNumber: '01',
    stepPhase: 'PHASE 01 // FOUNDATION',
    tabLabel: '01. Brand Systems',
    title: 'Brand Systems & Corporate Identity',
    tagline: 'Tangible authority engineered for print, physical spaces, and digital presence.',
    icon: Palette,
    image: '/Images/services/brand-identity-atelier.jpg',
    imageAlt: 'Luxury corporate brand identity, business cards and brand guidelines book',
    hallmark: 'Bespoke Vector Mark & Executive Stationery Suite',
    badgeText: '300 DPI // PRINT & EMBOSS READY',
    specs: [
      { label: 'Format', val: 'Vector & 300 DPI' },
      { label: 'Collateral', val: '7 Complete Sets' },
      { label: 'Guidelines', val: 'Full Brand Manual' }
    ],
    summary: 'Cohesive, premium corporate brand systems engineered to establish instant market authority and command respect across print, digital, and physical environments.',
    deliverables: [
      { num: '01', name: 'Logo Design & Identity Creation', desc: 'Custom-crafted marks reflecting personality, values, and market authority.' },
      { num: '02', name: 'Complete Stationery Suite', desc: 'Business cards, letterheads, envelopes, folders, and invoice templates.' },
      { num: '03', name: 'Staff Identity Assets', desc: 'Shirt name tags, ID badges, desk plaques, and company credential systems.' },
      { num: '04', name: 'Marketing & Sales Collateral', desc: 'Sale signs, billboard designs, posters, flyers, brochures, and POS branding.' },
      { num: '05', name: 'Digital Brand Kits', desc: 'Social media kits, profile banners, post templates, and digital assets.' },
      { num: '06', name: 'Website Branding Assets', desc: 'Custom icons, UI components, brand-aligned graphics, and design systems.' },
      { num: '07', name: 'Brand Guidelines & Brand Book', desc: 'Complete manual covering logo rules, palettes, typography, and tone of voice.' }
    ]
  },
  {
    id: 'websites',
    stepNumber: '02',
    stepPhase: 'PHASE 02 // HEADQUARTERS',
    tabLabel: '02. Corporate Web Platforms',
    title: 'Corporate Website Platforms',
    tagline: 'Sub-second responsiveness synchronized across all executive viewports.',
    icon: Globe,
    image: '/Images/services/responsive-devices-atelier.jpg',
    imageAlt: 'Responsive corporate website mockup across laptop, tablet, and smartphone',
    hallmark: '1-Year Complimentary Cloud Hosting & Managed Domain Included',
    badgeText: 'MULTI-DEVICE // SUB-SECOND LCP',
    specs: [
      { label: 'Cloud Hosting', val: 'Free for 1 Year' },
      { label: 'Domain Registration', val: 'Free for 1 Year' },
      { label: 'Performance', val: 'Sub-second LCP' }
    ],
    summary: 'High-converting corporate websites engineered for sub-second performance, credibility, and brand consistency — fully inclusive of enterprise cloud hosting and managed domains.',
    deliverables: [
      { num: '01', name: 'Brand-Aligned UI/UX Design', desc: 'Custom corporate design matching your exact palette, typography, and voice.' },
      { num: '02', name: 'High-Performance Hosting — FREE for 1 Year', desc: 'Ultra-fast, enterprise-grade cloud hosting included at zero cost for 12 months.' },
      { num: '03', name: 'Domain Registration — FREE for 1 Year', desc: 'Seamless custom domain registration fully managed and secured.' },
      { num: '04', name: 'Professional Email Setup', desc: 'Turnkey Hostinger business email and Google Workspace / Gmail integration.' },
      { num: '05', name: 'SEO-Ready Architecture', desc: 'Structured metadata, clean semantic markup, and speed optimization for search rankings.' },
      { num: '06', name: 'Multi-Device Responsiveness', desc: 'Fluid layouts that look immaculate on mobile phones, tablets, laptops, and ultra-wide displays.' }
    ]
  },
  {
    id: 'webapps',
    stepNumber: '03',
    stepPhase: 'PHASE 03 // OPERATIONS',
    tabLabel: '03. Enterprise Systems',
    title: 'Web Apps & Business Systems',
    tagline: 'Bespoke administrative command eliminating operational friction and bottlenecks.',
    icon: Cpu,
    image: '/Images/services/enterprise-systems-atelier.jpg',
    imageAlt: 'Executive enterprise software dashboard and real-time logistics interface',
    hallmark: 'Real-Time Supply Chain, Automated Pipelines & Centralized Core',
    badgeText: 'CENTRALIZED // ZERO BOTTLENECKS',
    specs: [
      { label: 'Architecture', val: 'Custom Central Backend' },
      { label: 'Workflows', val: 'Automated Pipelines' },
      { label: 'Security', val: 'Role-Based Access' }
    ],
    summary: 'Custom web applications and operational dashboards tailored to eliminate manual bottlenecks, streamline workflows, and automate core enterprise operations.',
    deliverables: [
      { num: '01', name: 'Company Backend Systems', desc: 'Robust centralized backends handling enterprise logic and secure operations.' },
      { num: '02', name: 'Production Management Platforms', desc: 'End-to-end tracking for manufacturing, scheduling, and output management.' },
      { num: '03', name: 'Supply Chain & Logistics Dashboards', desc: 'Real-time visibility into inventory, order pipelines, and shipment tracking.' },
      { num: '04', name: 'Order Processing & Tracking Systems', desc: 'Automated workflows from customer order placement to delivery fulfillment.' },
      { num: '05', name: 'Internal Workflow Automation', desc: 'Eliminate repetitive manual tasks through reliable custom automation pipelines.' },
      { num: '06', name: 'Custom Portals & Admin Panels', desc: 'Tailored administrative interfaces with role-based security and granular permissions.' }
    ]
  }
];

export default function Services({ onOpenContact }) {
  const [activeStageId, setActiveStageId] = useState('branding');

  const currentStage = stages.find(s => s.id === activeStageId) || stages[0];
  const Icon = currentStage.icon;

  return (
    <section className="services-section atelier-services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="services-header center-text"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">SYSTEM LIFECYCLE // 3-STAGE PIPELINE</span>
          <h2 className="section-title">From Brand Identity to Enterprise Systems</h2>
          <p className="atelier-header-subtitle">
            We design the tangible identity, digital headquarters, and operational intelligence that power modern enterprises.
          </p>
        </motion.div>

        {/* Phase Tab Selector */}
        <div className="atelier-tabs-container">
          <div className="atelier-tabs-track" role="tablist">
            {stages.map((stage) => {
              const isActive = activeStageId === stage.id;
              const StageIcon = stage.icon;
              return (
                <button
                  key={stage.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`atelier-tab-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveStageId(stage.id)}
                >
                  <StageIcon size={16} className="atelier-tab-icon" />
                  <span className="atelier-tab-text">{stage.tabLabel}</span>
                  {isActive && (
                    <motion.div
                      layoutId="atelierTabIndicator"
                      className="atelier-tab-indicator"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* The Atelier Showcase */}
        <div className="atelier-showcase-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.id}
              className="atelier-stage-spread"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Top Hero Row: Split 2-Column (Narrative & Specs on Left, Visual Canvas on Right) */}
              <div className="atelier-top-split">
                {/* Left Pane: Meta, Title, Narrative, Specs, Deploy Button */}
                <div className="atelier-left-pane">
                  <div className="atelier-phase-meta">
                    <span className="atelier-phase-step">{currentStage.stepPhase}</span>
                    <div className="atelier-phase-pill">
                      <Icon size={13} />
                      <span>Stage {currentStage.stepNumber}</span>
                    </div>
                  </div>

                  <h3 className="atelier-stage-title">{currentStage.title}</h3>
                  <p className="atelier-stage-tagline">{currentStage.tagline}</p>
                  <p className="atelier-stage-summary">{currentStage.summary}</p>

                  {/* Specs / Guarantees Row */}
                  <div className="atelier-specs-row">
                    {currentStage.specs.map((spec) => (
                      <div key={spec.label} className="atelier-spec-card">
                        <span className="atelier-spec-label">{spec.label}</span>
                        <span className="atelier-spec-val">{spec.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deploy Action */}
                  <div className="atelier-cta-row">
                    <a
                      href="#contact"
                      className="glass-btn atelier-deploy-btn"
                      onClick={(e) => {
                        if (onOpenContact) {
                          e.preventDefault();
                          onOpenContact();
                        }
                      }}
                    >
                      <span>Deploy Stage {currentStage.stepNumber}</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>

                {/* Right Pane: Cinematic Tactile Visual Canvas */}
                <div className="atelier-right-pane">
                  <div className="atelier-canvas-frame">
                    <motion.img
                      src={currentStage.image}
                      alt={currentStage.imageAlt}
                      className="atelier-main-img"
                      initial={{ scale: 1.04, opacity: 0.85 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      loading="eager"
                    />
                    <div className="atelier-canvas-overlay" />

                    {/* Top Floating Badge */}
                    <motion.div
                      className="atelier-floating-badge"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.18, duration: 0.35 }}
                    >
                      <Sparkles size={13} className="atelier-badge-icon" />
                      <span>{currentStage.badgeText}</span>
                    </motion.div>

                    {/* Bottom Curator's Hallmark Seal */}
                    <motion.div
                      className="atelier-hallmark-seal"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.28, duration: 0.35 }}
                    >
                      <div className="hallmark-glow-dot" />
                      <div className="hallmark-text">
                        <span className="hallmark-label">CURATED ASSURANCE</span>
                        <span className="hallmark-desc">{currentStage.hallmark}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Bottom Full-Width Deliverables Directory */}
              <div className="atelier-deliverables-fullwidth">
                <div className="atelier-directory-header">
                  <div className="atelier-directory-title-group">
                    <span className="atelier-directory-title">Curated Deliverables Scope</span>
                    <span className="atelier-directory-subtitle">Complete specifications & outputs for Stage {currentStage.stepNumber}</span>
                  </div>
                  <span className="atelier-directory-count">{currentStage.deliverables.length} Deliverables</span>
                </div>

                <div className="atelier-directory-grid-full">
                  {currentStage.deliverables.map((item, idx) => {
                    const isLastOdd = currentStage.deliverables.length % 3 === 1 && idx === currentStage.deliverables.length - 1;
                    return (
                      <div
                        key={item.num}
                        className={`atelier-directory-card ${isLastOdd ? 'span-full-row' : ''}`}
                      >
                        <div className="atelier-card-top">
                          <span className="atelier-card-num">{item.num}</span>
                          <span className="atelier-card-name">{item.name}</span>
                        </div>
                        <p className="atelier-card-desc">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Milestone Integration Banner */}
        <motion.div
          className="minimal-bottom-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="minimal-bottom-content">
            <div className="minimal-bottom-icon">
              <Zap size={22} />
            </div>
            <div className="minimal-bottom-text">
              <h4 className="minimal-bottom-title">Need an Integrated End-to-End Solution?</h4>
              <p className="minimal-bottom-desc">
                From your initial logo design to a high-converting digital headquarters and custom backend logistics systems — Omega Innovation unifies your entire technology ecosystem under one authoritative roof.
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
        </motion.div>
      </div>
    </section>
  );
}
