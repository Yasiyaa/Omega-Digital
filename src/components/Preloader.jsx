import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        // Smooth non-linear progress acceleration
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="preloader-overlay"
      initial={{ y: 0 }}
      exit={{
        y: '-100%',
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      <div className="preloader-ambient-glow" />

      <motion.div
        className="preloader-content"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.img
          src="/Images/1 logo_Logo concept 1 copy 4.png"
          alt="Omega Digital"
          className="preloader-logo"
          animate={{
            filter: [
              'drop-shadow(0 0 15px rgba(37, 99, 235, 0.3))',
              'drop-shadow(0 0 35px rgba(217, 70, 239, 0.6))',
              'drop-shadow(0 0 20px rgba(37, 99, 235, 0.4))'
            ]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <p className="preloader-tagline">
          Digital Architecture &bull; Creative Craft
        </p>

        <div className="preloader-progress-track">
          <div
            className="preloader-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="preloader-counter">
          {progress.toString().padStart(2, '0')}%
        </span>
      </motion.div>
    </motion.div>
  );
}
