import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Compass, PenTool, Code, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    phase: 'PHASE 01 // ARCHITECTURE',
    title: 'Discovery & Strategy',
    icon: Compass,
    text: 'We deconstruct your market position, operational goals, and core audience to forge an unassailable strategic roadmap.',
    deliverables: [
      'Market & Competitor Diagnosis',
      'Technical Architecture Scoping',
      'Target User Persona Models'
    ]
  },
  {
    number: '02',
    phase: 'PHASE 02 // INTERFACE',
    title: 'Design & Prototyping',
    icon: PenTool,
    text: 'Iterative visual explorations, tangible physical mockups, and interactive digital interfaces refined to perfection.',
    deliverables: [
      'High-Fidelity Wireframes',
      'Custom Design System Tokens',
      'Interactive Motion Prototypes'
    ]
  },
  {
    number: '03',
    phase: 'PHASE 03 // CORE ENGINE',
    title: 'Engineering & Build',
    icon: Code,
    text: 'Writing immaculate, maintainable code with modern web standards, ironclad security, and peak performance.',
    deliverables: [
      'Modular React Architecture',
      'Zero-Latency Edge Deployments',
      'Ironclad Security Compliance'
    ]
  },
  {
    number: '04',
    phase: 'PHASE 04 // EXPANSION',
    title: 'Deployment & Scale',
    icon: Rocket,
    text: 'Seamless rollout, automated CI/CD pipelines, and dedicated post-launch optimizations for enduring success.',
    deliverables: [
      'Automated CI/CD Pipelines',
      'Global CDN Orchestration',
      '24/7 Telemetry & Health Audits'
    ]
  }
];

function TimelineStepItem({ step, index }) {
  const stepRef = useRef(null);
  const isLeft = index % 2 === 0;

  // Track scroll position of this individual step relative to the viewport
  // As the step enters the lower viewport (85%) and scrolls to mid-screen (50%), progress moves 0 -> 1
  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ['start 85%', 'center 50%']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001
  });

  // Reversible scroll-linked motion transforms
  const opacity = useTransform(smoothProgress, [0, 1], [0.2, 1]);
  const scale = useTransform(smoothProgress, [0, 1], [0.94, 1]);
  const y = useTransform(smoothProgress, [0, 1], [36, 0]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.6, 1], [0, 0.4, 0.95]);
  const glowScale = useTransform(smoothProgress, [0, 1], [0.85, 1.06]);
  const connectorScaleX = useTransform(smoothProgress, [0, 0.7, 1], [0, 0.6, 1]);
  const nodeScale = useTransform(smoothProgress, [0, 0.8, 1], [0.88, 1.25, 1]);
  const nodePulseOpacity = useTransform(smoothProgress, [0, 0.7, 1], [0, 0.85, 1]);

  const Icon = step.icon;

  return (
    <div
      ref={stepRef}
      className={`timeline-step-row ${isLeft ? 'step-left' : 'step-right'}`}
    >
      {/* Central Node Anchor */}
      <div className="timeline-node-anchor">
        <motion.div
          className="timeline-node"
          style={{ scale: nodeScale }}
        >
          {/* Neon Pulse Rings */}
          <motion.div
            className="timeline-node-pulse"
            style={{ opacity: nodePulseOpacity }}
          />
          <motion.div
            className="timeline-node-core"
            style={{
              boxShadow: useTransform(
                smoothProgress,
                [0, 1],
                [
                  '0 0 0px rgba(0,0,0,0)',
                  '0 0 24px rgba(56, 189, 248, 0.85), inset 0 0 10px rgba(56, 189, 248, 0.5)'
                ]
              ),
              borderColor: useTransform(
                smoothProgress,
                [0, 1],
                ['rgba(255, 255, 255, 0.16)', 'rgba(56, 189, 248, 0.9)']
              ),
              color: useTransform(
                smoothProgress,
                [0, 1],
                ['rgba(255, 255, 255, 0.4)', '#FFFFFF']
              )
            }}
          >
            <span className="node-number">{step.number}</span>
          </motion.div>
        </motion.div>

        {/* Animated Connector Arm from Node to Card */}
        <div className="timeline-connector">
          <motion.div
            className="timeline-connector-beam"
            style={{
              scaleX: connectorScaleX
            }}
          />
        </div>
      </div>

      {/* The Step Card Container with Neon Backlight Glow */}
      <div className="timeline-card-col">
        <div className="timeline-card-wrapper">
          {/* Deep Ambient Neon Glow Layer behind card */}
          <motion.div
            className="timeline-neon-glow"
            style={{
              opacity: glowOpacity,
              scale: glowScale
            }}
          />

          {/* Elevated Glass Card Surface */}
          <motion.div
            className="timeline-card"
            style={{
              opacity,
              scale,
              y,
              borderColor: useTransform(
                smoothProgress,
                [0, 1],
                ['rgba(255, 255, 255, 0.1)', 'rgba(56, 189, 248, 0.48)']
              ),
              boxShadow: useTransform(
                smoothProgress,
                [0, 1],
                [
                  '0 20px 45px -10px rgba(0, 0, 0, 0.65)',
                  '0 25px 60px -10px rgba(0, 0, 0, 0.85), 0 0 35px rgba(56, 189, 248, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.22)'
                ]
              )
            }}
          >
            {/* Card Header */}
            <div className="timeline-card-header">
              <div className="card-tag-wrapper">
                <span className="timeline-phase-pill">{step.phase}</span>
              </div>
              <div className="card-icon-badge">
                <Icon size={20} />
              </div>
            </div>

            {/* Card Title & Lead */}
            <h3 className="timeline-card-title">{step.title}</h3>
            <p className="timeline-card-text">{step.text}</p>

            {/* Deliverables / Milestones Chips */}
            <div className="timeline-deliverables">
              {step.deliverables.map((item, dIndex) => (
                <span key={dIndex} className="timeline-chip">
                  <CheckCircle2 size={13} className="chip-icon" />
                  {item}
                </span>
              ))}
            </div>

            {/* Corner Tech Watermark */}
            <div className="timeline-watermark">{step.number}</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Process() {
  const containerRef = useRef(null);

  // Track the continuous vertical beam progression through the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 65%', 'end 70%']
  });

  const smoothSpine = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001
  });

  const beamHeight = useTransform(smoothSpine, [0, 1], ['0%', '100%']);

  return (
    <section className="process-section" id="process">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center-text">
          <span className="section-tag">HOW WE WORK</span>
          <h2 className="section-title">A Structured Path to Distinction</h2>
          <p className="section-subtitle">
            Every engagement follows our methodology designed to deliver on time, within scope and above expectation.
          </p>
        </div>

        {/* Timeline Architecture */}
        <div ref={containerRef} className="timeline-wrapper">
          {/* Continuous Vertical Conduit Line */}
          <div className="timeline-spine-track">
            {/* Dynamic Illuminated Laser Beam */}
            <motion.div
              className="timeline-spine-beam"
              style={{ height: beamHeight }}
            />
          </div>

          {/* Sequential Steps */}
          <div className="timeline-steps-list">
            {steps.map((step, index) => (
              <TimelineStepItem
                key={step.number}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
