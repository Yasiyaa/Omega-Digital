import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Calibrated progressive counter: steady, deliberate, and prestigious
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 650);
          return 100;
        }
        // Smooth non-linear curve: deliberate start, steady progression, micro-lock at finish
        const step = prev < 20 ? 2 : prev < 55 ? 3 : prev < 85 ? 2 : prev < 96 ? 2 : 1;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="preloader-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 1, transition: { duration: 1.1 } }}
    >
      {/* Top Cinema Shutter */}
      <motion.div
        className="preloader-shutter preloader-shutter-top"
        initial={{ y: 0 }}
        exit={{
          y: '-100%',
          transition: { duration: 0.95, ease: [0.77, 0, 0.175, 1], delay: 0.1 }
        }}
      />

      {/* Bottom Cinema Shutter */}
      <motion.div
        className="preloader-shutter preloader-shutter-bottom"
        initial={{ y: 0 }}
        exit={{
          y: '100%',
          transition: { duration: 0.95, ease: [0.77, 0, 0.175, 1], delay: 0.1 }
        }}
      />

      {/* Ambient Chromatic Core Aura */}
      <div className="preloader-ambient-glow" />

      {/* Centerpiece Architecture */}
      <motion.div
        className="preloader-content"
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{
          opacity: 0,
          scale: 1.08,
          filter: 'blur(10px)',
          transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Sub-system Status Pill */}
        <motion.div 
          className="preloader-status-pill"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <span className={`status-dot ${isReady ? 'ready' : ''}`} />
          <span className="status-text">
            {isReady ? 'SYSTEMS OPERATIONAL' : 'INITIALIZING ARCHITECTURE'}
          </span>
        </motion.div>

        {/* Illuminated Emblem */}
        <div className="preloader-logo-wrapper">
          <motion.img
            src="/Images/1 logo_Logo concept 1 copy 4.png"
            alt="Omega Innovation"
            className="preloader-logo"
            animate={{
              filter: [
                'drop-shadow(0 0 20px rgba(56, 189, 248, 0.35)) drop-shadow(0 0 45px rgba(244, 114, 182, 0.2))',
                'drop-shadow(0 0 38px rgba(56, 189, 248, 0.65)) drop-shadow(0 0 65px rgba(244, 114, 182, 0.45))',
                'drop-shadow(0 0 20px rgba(56, 189, 248, 0.35)) drop-shadow(0 0 45px rgba(244, 114, 182, 0.2))'
              ],
              scale: [1, 1.025, 1]
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Brand Title & Tagline */}
        <h3 className="preloader-brand-title">OMEGA INNOVATION</h3>
        <p className="preloader-tagline">
          Digital Architecture &bull; Creative Craft
        </p>

        {/* Precision Progress Track */}
        <div className="preloader-progress-track">
          <motion.div
            className="preloader-progress-bar"
            style={{ width: `${progress}%` }}
          >
            <span className="progress-light-lead" />
          </motion.div>
        </div>

        {/* Telemetry Counter */}
        <div className="preloader-telemetry">
          <span className="telemetry-bracket">[</span>
          <span className="preloader-counter">
            {progress.toString().padStart(2, '0')}%
          </span>
          <span className="telemetry-bracket">]</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
