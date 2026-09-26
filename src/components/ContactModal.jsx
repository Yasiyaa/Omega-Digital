import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, ShieldCheck, Clock, ArrowRight, AlertCircle, Mail } from 'lucide-react';
import { submitInquiry, SERVICES_OPTIONS, TIMELINES_OPTIONS } from '../services/contactService';

export default function ContactModal({ isOpen, onClose }) {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
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

  // Handle ESC key to dismiss modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
      setErrorMessage(res.error || 'Transmission could not be completed. Please contact hello@omegai.com.au.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage('');
    setSubmissionResult(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="contact-modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          {/* Backdrop blur layer */}
          <motion.div
            className="contact-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            className="contact-modal-card"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Luminous Rim Glow */}
            <div className="contact-modal-rim-glow" />

            {/* Close Button */}
            <button
              type="button"
              className="contact-modal-close-btn"
              onClick={onClose}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            {status === 'success' ? (
              <motion.div
                className="contact-modal-success"
                initial={{ opacity: 0, scale: 0.95 }}
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
                  Thank you, <strong>{submissionResult?.fullName}</strong>. Your parameters have been transmitted directly to <strong>hello@omegai.com.au</strong>.
                </p>

                {/* Automated Confirmation Note Notification */}
                <div className="success-confirmation-note">
                  <div className="confirmation-note-header">
                    <span className="confirmation-pulse-dot" />
                    <span>Confirmation Note Dispatched</span>
                  </div>
                  <p>
                    A receipt and copy of your selected service parameters have been sent to <strong>{submissionResult?.email}</strong>.
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
                    <span className="receipt-label">Inquiry Sent To</span>
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

                <div className="success-actions">
                  <button
                    type="button"
                    className="glass-btn success-close-btn"
                    onClick={onClose}
                  >
                    <span>Done</span>
                  </button>
                  <button
                    type="button"
                    className="success-resubmit-btn"
                    onClick={handleReset}
                  >
                    <span>Submit another inquiry</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ) : (
              <>
                {/* Header */}
                <div className="contact-modal-header">
                  <div className="modal-header-top">
                    <span className="section-tag">START YOUR TRANSFORMATION</span>
                    <div className="modal-confidentiality-badge">
                      <ShieldCheck size={13} />
                      <span>NDA PROTECTED</span>
                    </div>
                  </div>
                  <h2 id="contact-modal-title" className="contact-modal-title">
                    Let’s Build Something Remarkable
                  </h2>
                  <p className="contact-modal-subtext">
                    Whether you need a complete corporate brand system, high-performance web platform, or custom web applications, our architecture / implementation team is ready.
                  </p>
                </div>

                {/* Error Banner if transmission failed */}
                {status === 'error' && (
                  <div className="contact-error-banner">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <AlertCircle size={16} />
                      <span>{errorMessage}</span>
                    </div>
                    <a href="mailto:hello@omegai.com.au">Email Directly</a>
                  </div>
                )}

                {/* Inquiry Form */}
                <form className="contact-modal-form" onSubmit={handleSubmit}>
                  {/* Anti-spam honeypot */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                    onChange={handleChange}
                  />

                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="modal-fullName">Full Name</label>
                      <input
                        type="text"
                        id="modal-fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Alexander Vance"
                        required
                        autoFocus
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="modal-email">Work Email</label>
                      <input
                        type="email"
                        id="modal-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alexander@company.com"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="modal-service">Core Disciplines</label>
                      <select
                        id="modal-service"
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
                      <label htmlFor="modal-timeline">Expected Delivery Time</label>
                      <select
                        id="modal-timeline"
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
                      <label htmlFor="modal-message">Requirements & Operational Scope</label>
                      <textarea
                        id="modal-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Briefly describe your objectives, existing stack and key targets..."
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-modal-footer">
                    <div className="modal-sla-hint">
                      <Clock size={14} className="sla-icon" />
                      <span>Mon–Fri 8am–6pm &bull; Response within 24h</span>
                    </div>

                    <button
                      type="submit"
                      className="glass-btn contact-modal-submit-btn"
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="submit-spinner" />
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Inquiry</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
