import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Card3D from './Card3D';
import { sounds } from '../utils/soundEffects';

const Resume = () => {
  const [isScanning, setIsScanning] = useState(false);

  const handleScanTrigger = () => {
    setIsScanning(true);
    sounds.playCyberScan();
    setTimeout(() => setIsScanning(false), 2400);
  };

  return (
    <section id="resume" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--accent)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '8px',
            }}
          >
            <ShieldCheck size={16} />
            Verified Dossier
          </div>
          <h2 className="section-heading">My Resume & Credentials</h2>
          <p className="section-subtext" style={{ margin: '0 auto' }}>
            Comprehensive overview of academic background, technical proficiencies, project milestones, and certifications.
          </p>
        </motion.div>

        {/* 3D Hologram Resume Document Card */}
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Card3D intensity={12}>
            <div
              className="glass-card resume-card-inner"
              onMouseEnter={handleScanTrigger}
              style={{
                padding: '40px',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '24px',
                boxShadow: '0 20px 60px var(--glass-shadow)',
                border: '1px solid var(--glass-border)',
              }}
            >
              {/* Laser Scan Line Effect */}
              {isScanning && (
                <motion.div
                  initial={{ top: '-10%' }}
                  animate={{ top: '110%' }}
                  transition={{ duration: 2.2, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, transparent, var(--accent-tertiary), #fff, var(--accent-tertiary), transparent)',
                    boxShadow: '0 0 20px 4px var(--accent-tertiary)',
                    zIndex: 10,
                    pointerEvents: 'none',
                  }}
                />
              )}

              {/* Top Bar with Holographic Stamp */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '28px',
                  flexWrap: 'wrap',
                  gap: '16px',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.03em',
                      margin: 0,
                    }}
                  >
                    Binayak Chopra
                  </h3>
                  <p
                    style={{
                      margin: '6px 0 0',
                      fontSize: '0.938rem',
                      color: 'var(--accent)',
                      fontWeight: 600,
                    }}
                  >
                    B.Tech Computer Science Engineering · Graduating 2028
                  </p>
                  <p style={{ margin: '4px 0 0', fontSize: '0.813rem', color: 'var(--text-tertiary)' }}>
                    Lovely Professional University · Punjab, India
                  </p>
                </div>

                {/* Verified Hologram Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 14px',
                    borderRadius: '12px',
                    background: 'rgba(56, 239, 125, 0.1)',
                    border: '1px solid rgba(56, 239, 125, 0.3)',
                    color: 'var(--status-green)',
                    fontSize: '0.813rem',
                    fontWeight: 700,
                  }}
                >
                  <CheckCircle2 size={16} />
                  ACADEMICALLY VERIFIED
                </div>
              </div>

              {/* Simulated Document Sections */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                {/* Core Competencies preview */}
                <div style={{ padding: '16px', borderRadius: '12px', background: 'var(--input-bg)' }}>
                  <div style={{ fontSize: '0.813rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase' }}>
                    Core Strengths & Specializations
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['Java & OOP', 'Data Structures & Algorithms', 'React.js & Frontend Architecture', 'Computer Forensics', 'SOC Concepts', 'Docker & MySQL'].map((item) => (
                      <span
                        key={item}
                        style={{
                          fontSize: '0.75rem',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: 'var(--glass-bg)',
                          border: '1px solid var(--card-border)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Projects summary */}
                <div style={{ padding: '16px', borderRadius: '12px', background: 'var(--input-bg)' }}>
                  <div style={{ fontSize: '0.813rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase' }}>
                    Notable Engineering Projects
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <li><strong>Resume Builder UI:</strong> Full stack platform with PHP, Docker, MySQL, and dynamic rendering.</li>
                    <li><strong>Calyx:</strong> Responsive virtual assistant built using modern web technologies.</li>
                    <li><strong>Digital Phone Directory:</strong> Optimized C++ console database with binary file indexing.</li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  paddingTop: '8px',
                }}
              >
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  onClick={() => sounds.playSelect()}
                >
                  <ExternalLink size={18} />
                  View Full CV Document
                </a>
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  onClick={() => sounds.playSelect()}
                >
                  <Download size={18} />
                  Print / Save as PDF
                </a>
              </div>
            </div>
          </Card3D>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .resume-card-inner {
            padding: 24px 18px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Resume;
