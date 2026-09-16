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
import ContactModal from './components/ContactModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="app-root">
      {/* Luxury Intro Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Floating Glass Navigation */}
      <Navbar onOpenContact={openContactModal} />

      <main>
        {/* Fullscreen Video Hero Banner */}
        <Hero onOpenContact={openContactModal} />

        {/* Studio Manifesto / About Section */}
        <Manifesto />

        {/* Capabilities & Services Grid */}
        <Services onOpenContact={openContactModal} />

        {/* The Omega Architectural Standards */}
        <Standards />

        {/* 4-Step Methodology */}
        <Process />

        {/* Consultation Inquiry Form */}
        <Contact onOpenModal={openContactModal} />
      </main>

      {/* Obsidian Slate Footer */}
      <Footer onOpenContact={openContactModal} />

      {/* Direct Architecture Consultation Popup */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
      />
    </div>
  );
}
