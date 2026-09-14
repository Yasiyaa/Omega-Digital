import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Services from './components/Services';
import Standards from './components/Standards';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="app-root">
      {/* Luxury Intro Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Floating Glass Navigation */}
      <Navbar />

      <main>
        {/* Fullscreen Video Hero Banner */}
        <Hero />

        {/* Studio Manifesto / About Section */}
        <Manifesto />

        {/* Capabilities & Services Grid */}
        <Services />

        {/* The Omega Architectural Standards */}
        <Standards />

        {/* 4-Step Methodology */}
        <Process />

        {/* Consultation Inquiry Form */}
        <Contact />
      </main>

      {/* Obsidian Slate Footer */}
      <Footer />
    </div>
  );
}
