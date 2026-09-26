import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, Clock, ArrowRight, AlertCircle } from 'lucide-react';
import { submitInquiry, SERVICES_OPTIONS, TIMELINES_OPTIONS } from '../services/contactService';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [submissionResult, setSubmissionResult] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: '',
    timeline: 'standard',
    message: '',
    botcheck: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const res = await submitInquiry(formData);

    if (res.success) {
      setSubmissionResult(res);
      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        service: '',
        timeline: 'standard',
        message: '',
        botcheck: ''
      });
    } else {
      setStatus('error');
      setErrorMessage(res.error || 'Transmission failed. Please reach out to hello@omegai.com.au directly.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage('');
    setSubmissionResult(null);
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

          {status === 'success' ? (
            <motion.div
              className="inline-contact-success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="success-icon-badge">
                <CheckCircle2 size={36} className="success-check-icon" />
                <div className="success-pulse-glow" />
              </div>

              <span className="section-tag">TRANSMISSION CONFIRMED // DELIVERED</span>
              <h3 className="success-title">Inquiry Received</h3>
              <p className="success-description">
                Thank you, <strong>{submissionResult?.fullName}</strong>. Your project scope has been transmitted directly to <strong>hello@omegai.com.au</strong>.
              </p>

              {/* Automated Confirmation Note Notification */}
              <div className="success-confirmation-note">
                <div className="confirmation-note-header">
                  <span className="confirmation-pulse-dot" />
                  <span>Confirmation Note Dispatched</span>
                </div>
                <p>
                  A confirmation receipt and scope summary have been sent to your email: <strong>{submissionResult?.email}</strong>.
                </p>
              </div>

              {/* Parameter Details Receipt */}
              <div className="success-receipt-card">
                <div className="receipt-row">
                  <span className="receipt-label">Required Service</span>
                  <span className="receipt-value highlight">{submissionResult?.serviceTitle}</span>
                </div>
                <div className="receipt-row">
                  <span className="receipt-label">Target Timeline</span>
                  <span className="receipt-value">{submissionResult?.timelineTitle}</span>
                </div>
                <div className="receipt-row">
                  <span className="receipt-label">Dispatched To</span>
                  <span className="receipt-value">hello@omegai.com.au &bull; omegai.com.au@gmail.com</span>
                </div>
              </div>

              <div className="success-meta-strip">
                <div className="success-meta-item">
                  <Clock size={16} />
                  <span>Response within 24h</span>
                </div>
                <div className="success-meta-divider" />
                <div className="success-meta-item">
                  <ShieldCheck size={16} />
                  <span>NDA Protected</span>
                </div>
              </div>

              <div className="success-actions" style={{ marginTop: '1.5rem' }}>
                <button
                  type="button"
                  className="glass-btn"
                  onClick={handleReset}
                  style={{ cursor: 'pointer' }}
                >
                  <span>Submit Another Inquiry</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Anti-spam honeypot */}
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
                onChange={handleChange}
              />

              {status === 'error' && (
                <div className="contact-error-banner">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                  <a href="mailto:hello@omegai.com.au">Email Directly</a>
                </div>
              )}

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
                  <label htmlFor="service">Core Disciplines</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select your primary objective</option>
                    {SERVICES_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
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
                    {TIMELINES_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
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
                    placeholder="Briefly describe your company, current systems or branding bottlenecks and desired deliverables..."
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
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

