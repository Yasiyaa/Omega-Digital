import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { 
  Zap, 
  ShieldCheck, 
  GitBranch, 
  Layers, 
  CheckCircle2, 
  Activity
} from 'lucide-react';

const pillars = [
  {
    code: '01 // VELOCITY',
    title: 'Sub-Second Edge Velocity',
    metric: '100/100',
    metricLabel: 'Lighthouse Target',
    icon: Zap,
    description: 'Zero render-blocking scripts, native modern image optimization, and global edge cache delivery for instantaneous page loads.',
    specs: ['< 200ms Global TTFB', 'React / Next.js Edge SSR', 'Automated AVIF/WebP', 'Zero Bloated Plugins'],
    gaugeType: 'circle',
    telemetryText: 'CORE_WEB_VITALS: OPTIMAL'
  },
  {
    code: '02 // INTEGRITY',
    title: 'Enterprise Security & Isolation',
    metric: '256-BIT',
    metricLabel: 'End-to-End TLS',
    icon: ShieldCheck,
    description: 'Sanitized input pipelines, encrypted PostgreSQL databases, strict Content Security Policies, and automated vulnerability audits.',
    specs: ['Zero-Trust Architecture', 'Sanitized Input Validation', 'Role-Based Access (RBAC)', 'Strict CSP Security Headers'],
    gaugeType: 'shield',
    telemetryText: 'SECURITY_SHIELD: ARMED'
  },
  {
    code: '03 // INDEPENDENCE',
    title: '100% Client IP Ownership',
    metric: '100%',
    metricLabel: 'Direct Transfer',
    icon: GitBranch,
    description: 'You own every line of source code, Figma design system token, and DNS deployment from day one. Zero proprietary vendor lock-in.',
    specs: ['Direct GitHub Repo Handoff', 'Documented Figma Tokens', 'Automated CI/CD Pipelines', '0% Proprietary Lock-In'],
    gaugeType: 'terminal',
    telemetryText: 'REPO_ACCESS: GRANTED'
  },
  {
    code: '04 // RESILIENCE',
    title: 'Elastic Full-Stack Architecture',
    metric: '99.99%',
    metricLabel: 'Cloud Target SLA',
    icon: Layers,
    description: 'Serverless microservices and strongly-typed TypeScript APIs engineered to scale effortlessly from 10 users to 1,000,000 without friction.',
    specs: ['Modular TypeScript APIs', 'Serverless Edge Execution', 'Zero-Latency Databases', 'Auto-Scales on Demand'],
    gaugeType: 'radar',
    telemetryText: 'EDGE_INFRA: ACTIVE'
  }
];

function PillarCard({ pillar, isDormant }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (isDormant) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlightBg = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(56, 189, 248, 0.16), transparent 80%)`;
  const Icon = pillar.icon;

  return (
    <div
      className={`standard-card ${isDormant ? 'dormant-card' : 'active-card'}`}
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Cursor Spotlight (Active only) */}
      {!isDormant && (
        <motion.div
          className="card-spotlight"
          style={{ background: spotlightBg }}
        />
      )}

      {/* Blueprint Grid Watermark Layer */}
      <div className="card-blueprint-grid" />

      {/* Card Header with Telemetry Status */}
      <div className="standard-card-header">
        <div className="standard-meta">
          <span className="standard-code">{pillar.code}</span>
          <div className="standard-telemetry-badge">
            <span className={`telemetry-pulse-dot ${isDormant ? 'dormant-dot' : ''}`} />
            <span>{isDormant ? 'AWAITING_DIAGNOSTIC_SCAN' : pillar.telemetryText}</span>
          </div>
        </div>
        <div className="standard-icon-badge">
          <Icon size={20} />
        </div>
      </div>

      {/* Title & Core Benchmark Display */}
      <h3 className="standard-title">{pillar.title}</h3>
      <p className="standard-description">{pillar.description}</p>

      {/* Bottom Instrument Deck: Gauge + Specs side-by-side */}
      <div className="standard-card-bottom">
        {/* Custom Diagnostic Gauge */}
        <div className="standard-gauge-wrapper">
          {pillar.gaugeType === 'circle' && (
            <div className="gauge-metric-box">
              <div className="circular-gauge-container">
                <svg className="gauge-svg" viewBox="0 0 100 100">
                  <circle className="gauge-bg-circle" cx="50" cy="50" r="42" />
                  <circle
                    className={`gauge-progress-circle ${isDormant ? 'dormant-stroke' : ''}`}
                    cx="50"
                    cy="50"
                    r="42"
                    strokeDasharray="264"
                    strokeDashoffset={isDormant ? 264 : 4}
                  />
                </svg>
                <div className="gauge-inner-label">
                  <span className="gauge-number">{isDormant ? '--' : '100'}</span>
                  <span className="gauge-unit">/100</span>
                </div>
              </div>
              <div className="gauge-details">
                <span className="gauge-highlight-text">CORE WEB VITALS</span>
                <span className="gauge-subtext">Google PageSpeed Target</span>
              </div>
            </div>
          )}

          {pillar.gaugeType === 'shield' && (
            <div className="gauge-metric-box">
              <div className="shield-gauge-container">
                <div className={`shield-pulse-ring ${isDormant ? 'dormant-ring' : ''}`} />
                <div className="shield-core">
                  <ShieldCheck size={24} className="shield-icon" />
                </div>
              </div>
              <div className="gauge-details">
                <span className="gauge-highlight-text">ZERO-TRUST PROTOCOL</span>
                <span className="gauge-subtext">AES-256 + TLS 1.3 Transport</span>
              </div>
            </div>
          )}

          {pillar.gaugeType === 'terminal' && (
            <div className="terminal-gauge-box">
              <div className="terminal-header">
                <span className="term-dot red" />
                <span className="term-dot yellow" />
                <span className="term-dot green" />
                <span className="term-title">git // transfer</span>
              </div>
              <div className="terminal-body">
                <div className="term-line">
                  <span className="term-prompt">$</span> {isDormant ? 'git transfer --status=pending' : 'git transfer --ownership=client'}
                </div>
                <div className={`term-line ${isDormant ? 'pending' : 'success'}`}>
                  <CheckCircle2 size={11} /> {isDormant ? '[TRANSFER: AWAITING_AUTH]' : '[100% REPO: VERIFIED]'}
                </div>
              </div>
            </div>
          )}

          {pillar.gaugeType === 'radar' && (
            <div className="gauge-metric-box">
              <div className="radar-gauge-container">
                <div className={`radar-ping ${isDormant ? 'dormant-ping' : ''}`} />
                <Activity size={20} className="radar-center-icon" />
              </div>
              <div className="gauge-details">
                <span className="gauge-highlight-text">99.99% CLOUD SLA</span>
                <span className="gauge-subtext">Multi-Region Edge Auto-Scaling</span>
              </div>
            </div>
          )}
        </div>

        {/* Specifications Bullet List */}
        <div className="standard-specs-list">
          {pillar.specs.map((spec, sIndex) => (
            <div key={sIndex} className="standard-spec-item">
              <CheckCircle2 size={12} className="spec-check-icon" />
              <span>{spec}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Standards() {
  const containerRef = useRef(null);
  const consoleRef = useRef(null);
  const matrixRef = useRef(null);
  const [excessHeight, setExcessHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Measure excess height on mount, resize, and element size changes
  useEffect(() => {
    const updateExcess = () => {
      const mobile = window.innerWidth <= 991;
      setIsMobile(mobile);
      if (!consoleRef.current || mobile) {
        setExcessHeight(0);
        return;
      }
      const consoleH = consoleRef.current.offsetHeight;
      const winH = window.innerHeight;
      // In sticky viewport, top padding is ~110px, bottom target padding is ~60px
      const availableH = winH - 170;
      const diff = Math.max(0, consoleH - availableH);
      setExcessHeight(diff);
    };

    updateExcess();
    window.addEventListener('resize', updateExcess);
    let ro;
    if (window.ResizeObserver && consoleRef.current) {
      ro = new ResizeObserver(updateExcess);
      ro.observe(consoleRef.current);
    }
    return () => {
      window.removeEventListener('resize', updateExcess);
      if (ro) ro.disconnect();
    };
  }, []);

  // Desktop scroll tracking through pinned track (320vh)
  const { scrollYProgress: desktopProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const smoothDesktopProgress = useSpring(desktopProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  const desktopScanPercent = useTransform(smoothDesktopProgress, [0.08, 0.78], [0, 100], { clamp: true });
  const desktopBeamTop = useTransform(desktopScanPercent, (v) => `${v}%`);
  const desktopClipPath = useTransform(desktopScanPercent, (v) => `inset(0 0 ${Math.max(0, 100 - v)}% 0)`);
  const desktopBeamOpacity = useTransform(smoothDesktopProgress, [0.03, 0.08, 0.78, 0.83], [0, 1, 1, 0]);
  const desktopConsoleY = useTransform(smoothDesktopProgress, [0.18, 0.78], [0, -excessHeight]);

  // Mobile scroll tracking: Snappy, quick scan sweep as section scrolls into view
  const { scrollYProgress: mobileProgress } = useScroll({
    target: matrixRef,
    offset: ['start 85%', 'start 30%']
  });

  const smoothMobileProgress = useSpring(mobileProgress, {
    stiffness: 240,
    damping: 28,
    restDelta: 0.001
  });

  const mobileScanPercent = useTransform(smoothMobileProgress, [0, 1], [0, 100], { clamp: true });
  const mobileBeamTop = useTransform(mobileScanPercent, (v) => `${v}%`);
  const mobileClipPath = useTransform(mobileScanPercent, (v) => `inset(0 0 ${Math.max(0, 100 - v)}% 0)`);
  const mobileBeamOpacity = useTransform(smoothMobileProgress, [0, 0.05, 0.92, 1], [0, 1, 1, 0]);

  // Viewport-adaptive transforms
  const scanBeamTop = isMobile ? mobileBeamTop : desktopBeamTop;
  const activeClipPath = isMobile ? mobileClipPath : desktopClipPath;
  const scanBeamOpacity = isMobile ? mobileBeamOpacity : desktopBeamOpacity;
  const consoleY = isMobile ? 0 : desktopConsoleY;

  return (
    <section className="standards-pinned-container" id="standards" ref={containerRef}>
      <div className="standards-sticky-viewport">
        <motion.div
          className="container standards-console-container"
          ref={consoleRef}
          style={{ y: consoleY }}
        >
          {/* Section Header */}
          <div className="section-header center-text standards-console-header">
            <span className="section-tag">THE OMEGA STANDARD</span>
            <h2 className="section-title">Engineered for Speed. Architected for Scale.</h2>
            <p className="section-subtitle">
              We do not build disposable websites. Every platform is engineered as an enduring digital asset adhering to uncompromising technical benchmarks.
            </p>
          </div>

          {/* The Matrix Container with Dual-Layer Scan Reveal */}
          <div className="standards-matrix-wrapper" ref={matrixRef}>
            {/* LAYER 1: The Blurred / Dormant Grid (Always underneath, visible where scanner hasn't reached) */}
            <div className="standards-grid dormant-grid" aria-hidden="true">
              {pillars.map((pillar) => (
                <PillarCard key={pillar.code} pillar={pillar} isDormant={true} />
              ))}
            </div>

            {/* LAYER 2: The Sharp / Active Grid (Clipped by the Laser Scanner Line) */}
            <motion.div
              className="standards-grid active-grid"
              style={{
                clipPath: activeClipPath
              }}
            >
              {pillars.map((pillar) => (
                <PillarCard key={pillar.code} pillar={pillar} isDormant={false} />
              ))}
            </motion.div>

            {/* THE LASER DIAGNOSTIC SCANNER LINE (Exactly on the clip seam) */}
            <motion.div
              className="standards-scan-beam"
              style={{
                top: scanBeamTop,
                opacity: scanBeamOpacity
              }}
            >
              <div className="scan-beam-core" />
              <div className="scan-beam-glow" />
              <div className="scan-beam-tag">DIAGNOSTIC_SCAN // IN_PROGRESS</div>
            </motion.div>
          </div>


        </motion.div>
      </div>
    </section>
  );
}
