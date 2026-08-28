import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download, Sparkles, Terminal, Shield, Code } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import Card3D from './Card3D';
import CyberScrambleText from './CyberScrambleText';
import { sounds } from '../utils/soundEffects';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const socialLinks = [
    { icon: GitHubIcon, href: 'https://github.com/BinayakChopra', label: 'GitHub' },
    { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/binayak-chopra/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:binayakchopra34@gmail.com', label: 'Email' },
  ];

  const floatingBadges = [
    { icon: <Terminal size={14} />, text: 'Java & DSA', delay: 0 },
    { icon: <Code size={14} />, text: 'React.js', delay: 1 },
    { icon: <Shield size={14} />, text: 'Forensics & SOC', delay: 2 },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        padding: '120px 0 60px',
        overflow: 'hidden',
      }}
    >
      <div className="section-container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            {/* Status Pill */}
            <motion.div variants={itemVariants}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '6px 16px',
                  borderRadius: '100px',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--card-border)',
                  backdropFilter: 'blur(16px)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  boxShadow: '0 4px 20px var(--glass-shadow)',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--status-green)',
                    boxShadow: '0 0 10px var(--status-green)',
                    animation: 'pulseGlow 2s infinite',
                  }}
                />
                Available for internships & projects
              </div>
            </motion.div>

            {/* Name Heading with Gradient Text */}
            <motion.div variants={itemVariants}>
              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Hello, I am
              </p>
              <h1
                style={{
                  fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.05,
                  margin: 0,
                }}
              >
                <span
                  style={{
                    background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 70%, var(--accent-secondary) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  <CyberScrambleText text="BINAYAK" trigger="mount" speed={50} />
                </span>
                <br />
                <span style={{ color: 'var(--text-primary)' }}>
                  <CyberScrambleText text="CHOPRA" trigger="mount" speed={50} />
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.35rem)',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                letterSpacing: '-0.01em',
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              B.Tech CSE Student · Frontend Developer · Aspiring Cybersecurity Analyst
            </motion.p>

            {/* Bio paragraph */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: '1.063rem',
                color: 'var(--text-tertiary)',
                lineHeight: 1.6,
                maxWidth: '540px',
                margin: 0,
              }}
            >
              I build modern, high-performance web experiences and explore cybersecurity through
              hands-on problem solving, data structures, and continuous experimentation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                alignItems: 'center',
                paddingTop: '8px',
              }}
            >
              <a
                href="#projects"
                className="btn-primary"
                onClick={() => sounds.playSelect()}
                onMouseEnter={() => sounds.playHover()}
              >
                View My Work
                <ArrowRight size={18} />
              </a>
              <a
                href="#resume"
                className="btn-secondary"
                onClick={() => sounds.playSelect()}
                onMouseEnter={() => sounds.playHover()}
              >
                <Download size={18} />
                Download CV
              </a>
            </motion.div>

            {/* Social Icons & Badges */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                paddingTop: '8px',
              }}
            >
              <div style={{ display: 'flex', gap: '12px' }}>
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={social.label}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--card-border)',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        boxShadow: '0 4px 15px var(--glass-shadow)',
                        transition: 'color 0.2s, border-color 0.2s',
                      }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Floating Glass Profile Card */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Ambient Back Glow */}
            <div
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'var(--accent-gradient)',
                filter: 'blur(80px)',
                opacity: 0.35,
                zIndex: 0,
                animation: 'pulseGlow 5s ease-in-out infinite',
              }}
            />

            {/* 3D Glass Profile Card */}
            <Card3D
              intensity={20}
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '420px',
                padding: '36px 32px',
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              {/* Header with Avatar Initials */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div
                  style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '24px',
                    background: 'var(--accent-gradient-3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    boxShadow: '0 8px 30px rgba(79, 125, 249, 0.4)',
                  }}
                >
                  BC
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      Binayak Chopra
                    </h3>
                    <Sparkles size={16} style={{ color: 'var(--accent)' }} />
                  </div>
                  <p
                    style={{
                      margin: '4px 0 0',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      fontWeight: 500,
                    }}
                  >
                    @Lovely Professional University
                  </p>
                </div>
              </div>

              {/* Tag Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['B.Tech CSE', 'Frontend Dev', 'Cybersecurity Enthusiast', 'Problem Solver'].map(
                  (tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.813rem',
                        fontWeight: 500,
                        padding: '6px 12px',
                        borderRadius: '10px',
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--card-border)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--card-border)' }} />

              {/* Highlights row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--accent)',
                    }}
                  >
                    4+
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Projects</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--accent-secondary)',
                    }}
                  >
                    10+
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Skills</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--status-green)',
                    }}
                  >
                    2028
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Graduate</div>
                </div>
              </div>
            </Card3D>

            {/* Floating Mini Badges around Card */}
            {floatingBadges.map((badge, idx) => (
              <motion.div
                key={badge.text}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: badge.delay,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'absolute',
                  ...(idx === 0
                    ? { top: '-20px', right: '10px' }
                    : idx === 1
                    ? { bottom: '-15px', left: '10px' }
                    : { bottom: '40px', right: '-20px' }),
                  padding: '8px 14px',
                  borderRadius: '12px',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--card-border)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 8px 24px var(--glass-shadow)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.813rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  zIndex: 2,
                }}
                className="floating-mini-badge"
              >
                <span style={{ color: 'var(--accent)' }}>{badge.icon}</span>
                {badge.text}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .floating-mini-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
