import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: '',
    timeline: 'standard',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        service: '',
        timeline: 'standard',
        message: ''
      });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div
          className="contact-glass-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact-header">
            <span className="section-tag">START YOUR TRANSFORMATION</span>
            <h2 className="section-title">Let’s Build Something Remarkable</h2>
            <p className="contact-subtext">
              Whether you need complete corporate branding, a high-converting digital headquarters, or a custom operational web application, our architecture / implementation team is ready.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Alexander Vance"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Work Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alexander@company.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Core Disciplines Required</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select your primary objective</option>
                  <option value="branding">Business Cards & Full Company Branding Suite</option>
                  <option value="corporate-web">Full Corporate Website (with 1-Yr Free Hosting & Domain)</option>
                  <option value="web-apps">Web App Solutions for Business (Backends, Portals, Dashboards)</option>
                  <option value="end-to-end">End-to-End Digital Transformation (Branding + Web + Apps)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="timeline">Expected Delivery Time</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="urgent">Urgent (Within 3 – 4 Weeks)</option>
                  <option value="standard">Standard (1 – 2 Months)</option>
                  <option value="strategic">Strategic / Ongoing Partnership</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Requirements & Operational Scope</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your company, current systems or branding bottlenecks, and desired deliverables..."
                />
              </div>
            </div>

            <div className="form-actions">
              <button
                type="submit"
                className="submit-btn"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <span>Transmitting Inquiry...</span>
                ) : status === 'success' ? (
                  <>
                    <span>Inquiry Received</span>
                    <CheckCircle size={18} />
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send size={18} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <span className="form-status success">
                  Thank you. An Omega Innovation partner will review your requirements and reach out within 24 hours.
                </span>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
