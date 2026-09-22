import React, { useState } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DAYS_SCHEDULE = [
  { key: 'MON', label: 'Monday', hours: '8:00 AM – 6:30 PM', isOpen: true },
  { key: 'TUE', label: 'Tuesday', hours: '8:00 AM – 6:30 PM', isOpen: true },
  { key: 'WED', label: 'Wednesday', hours: '8:00 AM – 6:30 PM', isOpen: true },
  { key: 'THU', label: 'Thursday', hours: '8:00 AM – 6:30 PM', isOpen: true },
  { key: 'FRI', label: 'Friday', hours: '8:00 AM – 6:30 PM', isOpen: true },
  { key: 'SAT', label: 'Saturday', hours: '8:00 AM – 2:30 PM', isOpen: true },
  { key: 'SUN', label: 'Sunday & Holidays', hours: 'CLOSED', isOpen: false },
];

export default function Footer({ onOpenContact }) {
  const [selectedDay, setSelectedDay] = useState(() => {
    const dayMap = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return dayMap[new Date().getDay()] || 'MON';
  });

  const currentDayInfo = DAYS_SCHEDULE.find((d) => d.key === selectedDay) || DAYS_SCHEDULE[0];
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <a href="#hero" className="footer-logo">
              <img
                src="/Images/inovation logo/1 logo_Logo concept 1 copy 2.png"
                alt="Omega Innovation"
                className="footer-logo-img"
              />
            </a>
            <p className="footer-tagline">
              Modern businesses demand precision — At Omega Innovation we deliver systems, digital HQs and cohesive brand identities that keep operations efficient, scalable, and future-ready.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter / X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>

            {/* Regulatory Registration */}
            <div className="footer-registration">
              <span className="footer-reg-label">Registered On</span>
              <a
                href="https://asic.gov.au"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-asic-link"
                aria-label="Registered on ASIC - Australian Securities & Investments Commission"
              >
                <img
                  src="/Images/asic-logo-white.png"
                  alt="ASIC - Australian Securities & Investments Commission"
                  className="footer-asic-logo"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          {/* Solutions & Services */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Core Disciplines</h4>
            <ul className="footer-links">
              <li><a href="#services">Complete Company Branding</a></li>
              <li><a href="#services">Stationery & Business Cards</a></li>
              <li><a href="#services">Corporate Websites (1-Yr Free Hosting)</a></li>
              <li><a href="#services">Web App Solutions for Business</a></li>
              <li><a href="#services">Supply Chain & Internal Dashboards</a></li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">Philosophy</a></li>
              <li><a href="#services">Solutions</a></li>
              <li><a href="#standards">The Standard</a></li>
              <li><a href="#process">Methodology</a></li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    if (onOpenContact) {
                      e.preventDefault();
                      onOpenContact();
                    }
                  }}
                >
                  Inquire
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Direct Inquiries</h4>
            <div className="footer-contact-info">
              <p><Mail size={18} /> <span>hello@omegainnovation.com</span></p>
              <p><MapPin size={18} /> <span>Melbourne & Colombo Hubs</span></p>

              {/* Interactive Horizontal Open Hours */}
              <div className="footer-hours-block">
                <div className="footer-hours-header-row">
                  <div className="footer-hours-title-wrap">
                    <Clock size={15} className="footer-hours-clock-icon" />
                    <span className="footer-hours-label">OPEN HOURS</span>
                  </div>
                  <span className="footer-hours-tz">MELBOURNE (AEST)</span>
                </div>

                <div className="footer-hours-info-row">
                  <span className="footer-hours-day-name">{currentDayInfo.label}</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={selectedDay}
                      initial={{ opacity: 0, y: -3 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 3 }}
                      transition={{ duration: 0.15 }}
                      className={`footer-hours-display ${!currentDayInfo.isOpen ? 'is-closed' : ''}`}
                    >
                      {currentDayInfo.hours}
                    </motion.span>
                  </AnimatePresence>
                </div>

                <div className="footer-hours-days-track">
                  {DAYS_SCHEDULE.map((day) => {
                    const isActive = selectedDay === day.key;
                    return (
                      <button
                        key={day.key}
                        type="button"
                        onClick={() => setSelectedDay(day.key)}
                        className={`footer-day-tab ${isActive ? 'active' : ''}`}
                        aria-label={`${day.label}: ${day.hours}`}
                        aria-pressed={isActive}
                      >
                        <span className="footer-day-text">{day.key}</span>
                        {isActive && (
                          <motion.div
                            layoutId="footerDayUnderline"
                            className="footer-day-underline"
                            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright-wrap">
            <p>&copy; {new Date().getFullYear()} Omega Innovation. All rights reserved.</p>
            <span className="footer-bottom-sep">&bull;</span>
            <span className="footer-abn">ABN: 41 701 214 002</span>
          </div>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security Protocols</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
