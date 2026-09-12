import React from 'react';
import { motion } from 'framer-motion';
import { Compass, PenTool, Code, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      icon: Compass,
      text: 'We deconstruct your market position, operational goals, and core audience to forge an unassailable strategic roadmap.'
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      icon: PenTool,
      text: 'Iterative visual explorations, tangible physical mockups, and interactive digital interfaces refined to perfection.'
    },
    {
      number: '03',
      title: 'Engineering & Build',
      icon: Code,
      text: 'Writing immaculate, maintainable code with modern web standards, ironclad security, and peak performance.'
    },
    {
      number: '04',
      title: 'Deployment & Scale',
      icon: Rocket,
      text: 'Seamless rollout, automated CI/CD pipelines, and dedicated post-launch optimization for enduring success.'
    }
  ];

  return (
    <section className="process-section" id="process">
      <div className="container">
        <div className="section-header center-text">
          <span className="section-tag">HOW WE WORK</span>
          <h2 className="section-title">A Structured Path to Distinction</h2>
          <p className="section-subtitle">
            Every engagement follows our battle-tested methodology designed to deliver on time, within scope, and above expectation.
          </p>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                className="step-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="step-card-header">
                  <span className="step-number">{step.number}</span>
                  <Icon className="step-icon" size={24} />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-text">{step.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
