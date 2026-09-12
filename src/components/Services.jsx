import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  Globe, 
  Cpu, 
  Check, 
  ArrowUpRight, 
  CreditCard, 
  Layers, 
  Sparkles, 
  Server, 
  ShieldCheck, 
  Mail, 
  Database 
} from 'lucide-react';

export default function Services() {
  const [activePillar, setActivePillar] = useState('websites'); // 'branding' | 'websites' | 'webapps'

  const pillars = [
    {
      id: 'branding',
      tabLabel: 'Company Branding & Identity',
      badge: 'Full Identity Suite',
      title: 'Business Cards & Full Company Branding',
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1200&q=80',
      lead: 'Your brand is more than a logo — it’s the identity that carries your business into every interaction, every customer touchpoint, and every market opportunity.',
      summary: 'Omega Digital delivers end-to-end corporate branding solutions designed to elevate your business into a premium, unified, and unforgettable brand experience.',
      closing: 'Omega Digital ensures your brand is cohesive, premium, and instantly recognizable across print, digital, and physical environments.',
      suite: [
        {
          name: 'Logo Design & Identity Creation',
          desc: 'Custom-crafted logos reflecting personality, values, and market authority.'
        },
        {
          name: 'Complete Stationery Suite',
          desc: 'Business cards, letterheads, envelopes, folders, and invoice templates.'
        },
        {
          name: 'Staff Identity Assets',
          desc: 'Shirt name tags, ID badges, desk plaques, and company credential systems.'
        },
        {
          name: 'Marketing & Sales Collateral',
          desc: 'Sale signs, billboard designs, posters, flyers, brochures, and POS branding.'
        },
        {
          name: 'Digital Brand Kits',
          desc: 'Social media kits, profile banners, post templates, and digital assets.'
        },
        {
          name: 'Website Branding Assets',
          desc: 'Custom icons, UI components, brand-aligned graphics, and design systems.'
        },
        {
          name: 'Brand Guidelines & Brand Book',
          desc: 'Complete manual covering logo rules, palettes, typography, and tone of voice.'
        }
      ]
    },
    {
      id: 'websites',
      tabLabel: 'Corporate Websites',
      badge: 'Signature Service',
      title: 'Full Corporate Website with Brand Alignment',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      lead: 'Your website is your digital headquarters — the place where customers form their first impression and decide whether your business is the one they trust.',
      summary: 'Omega Digital builds premium corporate websites engineered for performance, credibility, and brand consistency.',
      closing: 'Your website becomes a powerful digital asset — built to impress, convert, and grow with your business.',
      suite: [
        {
          name: 'Brand-Aligned UI/UX Design',
          desc: 'Custom corporate design matching your exact palette, typography, and voice.'
        },
        {
          name: 'High-Performance Hosting — FREE for 1 Year',
          desc: 'Ultra-fast, enterprise-grade cloud hosting included at zero cost for 12 months.'
        },
        {
          name: 'Domain Registration — FREE for 1 Year',
          desc: 'Seamless custom domain registration fully managed and secured.'
        },
        {
          name: 'Professional Email Setup',
          desc: 'Turnkey Hostinger business email and Google Workspace / Gmail integration.'
        },
        {
          name: 'SEO-Ready Architecture',
          desc: 'Structured metadata, clean semantic markup, and speed optimization for search rankings.'
        },
        {
          name: 'Multi-Device Responsiveness',
          desc: 'Fluid layouts that look immaculate on mobile phones, tablets, laptops, and ultra-wide displays.'
        }
      ]
    },
    {
      id: 'webapps',
      tabLabel: 'Web App Solutions & Systems',
      badge: 'Operational Powerhouse',
      title: 'Web App Solutions for Business',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      lead: 'Modern businesses run on systems — and Omega Digital builds the systems that keep your operations moving.',
      summary: 'Our custom web applications are engineered to streamline workflows, automate processes, and strengthen your backend infrastructure.',
      closing: 'We design web apps that are secure, scalable, and tailored to your exact operational needs — helping your business run smoother, faster, and more efficiently.',
      suite: [
        {
          name: 'Company Backend Systems',
          desc: 'Robust centralized backends handling enterprise logic and secure operations.'
        },
        {
          name: 'Production Management Platforms',
          desc: 'End-to-end tracking for manufacturing, scheduling, and output management.'
        },
        {
          name: 'Supply Chain & Logistics Dashboards',
          desc: 'Real-time inventory levels, distribution metrics, and multi-hub tracking.'
        },
        {
          name: 'Order Processing & Tracking Systems',
          desc: 'Automated fulfillment pipelines from invoice generation to customer delivery.'
        },
        {
          name: 'Internal Workflow Automation Tools',
          desc: 'Eliminating repetitive manual bottlenecks with autonomous scripts and triggers.'
        },
        {
          name: 'Custom Business Portals & Admin Panels',
          desc: 'Secure role-based access control (RBAC) portals for staff, management, and clients.'
        }
      ]
    }
  ];

  const current = pillars.find((p) => p.id === activePillar) || pillars[0];
  const IconComponent = current.icon;

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header center-text">
          <span className="section-tag">CORE DISCIPLINES</span>
          <h2 className="section-title">Built for Performance, Credibility & Scale</h2>
          <p className="section-subtitle">
            Explore our three flagship service pillars engineered to transform your market perception and streamline internal operations.
          </p>
        </div>

        {/* Pillar Switcher Navigation */}
        <div className="pillar-nav-wrapper">
          <div className="pillar-tabs">
            {pillars.map((pillar) => {
              const TabIcon = pillar.icon;
              const isActive = activePillar === pillar.id;
              return (
                <button
                  key={pillar.id}
                  className={`pillar-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActivePillar(pillar.id)}
                >
                  <TabIcon size={18} />
                  <span>{pillar.tabLabel}</span>
                  {pillar.badge === 'Signature Service' && (
                    <span className="tab-pill">Popular</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Pillar Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="pillar-display-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Banner Grid */}
            <div className="pillar-banner-grid">
              <div className="pillar-info-pane">
                <span className="pillar-badge">{current.badge}</span>
                <h3 className="pillar-title">{current.title}</h3>
                <p className="pillar-lead">{current.lead}</p>
                <p className="pillar-summary">{current.summary}</p>
                
                <div className="pillar-cta-row">
                  <a href="#contact" className="glass-btn pillar-cta-btn">
                    <span>Consult with an Architect</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              <div className="pillar-media-pane">
                <img
                  src={current.image}
                  alt={current.title}
                  className="pillar-showcase-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Included Capabilities Grid */}
            <div className="pillar-suite-section">
              <h4 className="suite-heading">What We Deliver in this Discipline:</h4>
              <div className="suite-grid">
                {current.suite.map((item) => (
                  <div key={item.name} className="suite-item">
                    <div className="suite-icon-bullet">
                      <Check size={16} />
                    </div>
                    <div>
                      <h5 className="suite-item-name">{item.name}</h5>
                      <p className="suite-item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pillar-closing-quote">
                <p>&ldquo;{current.closing}&rdquo;</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Value Callout Banner: What You Receive Free */}
        <div className="value-perks-banner">
          <div className="perks-header">
            <Sparkles size={24} className="perks-sparkle" />
            <div>
              <h4 className="perks-title">The Omega Digital Corporate Guarantee</h4>
              <p className="perks-desc">Every full corporate website engagement includes enterprise-grade infrastructure to start without friction.</p>
            </div>
          </div>

          <div className="perks-grid">
            <div className="perk-box">
              <Server size={20} />
              <div>
                <strong>High-Performance Cloud Hosting</strong>
                <span>FREE for 1 Year with 99.9% uptime</span>
              </div>
            </div>
            <div className="perk-box">
              <Globe size={20} />
              <div>
                <strong>Custom Domain Registration</strong>
                <span>FREE for 1 Year, fully configured & secured</span>
              </div>
            </div>
            <div className="perk-box">
              <Mail size={20} />
              <div>
                <strong>Business Email Integration</strong>
                <span>Hostinger & Google Workspace / Gmail setup</span>
              </div>
            </div>
            <div className="perk-box">
              <ShieldCheck size={20} />
              <div>
                <strong>SEO & Security Hardening</strong>
                <span>Search-optimized, SSL encrypted, zero-trust</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
