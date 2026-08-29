import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Shield, Database, Globe } from 'lucide-react';
import Card3D from './Card3D';

const Education = () => {
  const studyAreas = [
    { icon: Code, label: 'Programming & OOP', color: '#4f7df9' },
    { icon: Database, label: 'Data Structures & Algorithms', color: '#7c5bf5' },
    { icon: Globe, label: 'Web Technologies & Frameworks', color: '#00d2ff' },
    { icon: Shield, label: 'Cybersecurity Fundamentals', color: '#38ef7d' },
  ];

  return (
    <section id="education" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '56px' }}
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
            <Award size={16} />
            Academic Foundation
          </div>
          <h2 className="section-heading">Education & Credentials</h2>
          <p className="section-subtext">
            Formal academic training and specialized domain expertise in computer science and engineering.
          </p>
        </motion.div>

        {/* Premium Education Card */}
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <Card3D intensity={14}>
              <div
                className="glass-card education-card-inner"
                style={{
                  padding: '40px',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '24px',
                  boxShadow: '0 20px 60px var(--glass-shadow)',
                  borderTop: '3px solid var(--accent-gradient)',
                }}
              >
                {/* Degree Icon Header */}
                <div
                  className="education-header"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '24px',
                    marginBottom: '28px',
                    flexWrap: 'wrap',
                  }}
                >
                  <div
                    className="education-avatar"
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '20px',
                      background: 'var(--accent-gradient-3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      boxShadow: '0 8px 30px rgba(79, 125, 249, 0.4)',
                      flexShrink: 0,
                    }}
                  >
                    <GraduationCap size={36} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: '1.75rem',
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                        margin: '0 0 8px',
                        letterSpacing: '-0.03em',
                      }}
                    >
                      Bachelor of Technology
                    </h3>
                    <div
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: 600,
                        color: 'var(--accent)',
                        marginBottom: '6px',
                      }}
                    >
                      Computer Science Engineering
                    </div>
                    <div style={{ fontSize: '0.938rem', color: 'var(--text-secondary)' }}>
                      Lovely Professional University · Punjab, India
                    </div>
                  </div>

                  {/* Live Status Badge */}
                  <div
                    style={{
                      padding: '8px 16px',
                      borderRadius: '12px',
                      background: 'rgba(56, 239, 125, 0.12)',
                      border: '1px solid rgba(56, 239, 125, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      alignSelf: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'var(--status-green)',
                        boxShadow: '0 0 10px var(--status-green)',
                        animation: 'pulseGlow 2s infinite',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.813rem',
                        fontWeight: 700,
                        color: 'var(--status-green)',
                      }}
                    >
                      In Progress · Graduating 2028
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, var(--card-border), transparent)',
                    margin: '28px 0',
                  }}
                />

                {/* Key Study Areas */}
                <div>
                  <h4
                    style={{
                      fontSize: '0.938rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '20px',
                    }}
                  >
                    Core Areas of Study & Expertise
                  </h4>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '16px',
                    }}
                  >
                    {studyAreas.map((area, idx) => {
                      const Icon = area.icon;
                      return (
                        <motion.div
                          key={area.label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          whileHover={{ scale: 1.03 }}
                          style={{
                            padding: '16px',
                            borderRadius: '14px',
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--card-border)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            cursor: 'default',
                            transition: 'border-color 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = area.color;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--card-border)';
                          }}
                        >
                          <div
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '10px',
                              background: `radial-gradient(circle, ${area.color}22 0%, ${area.color}11 100%)`,
                              border: `1px solid ${area.color}44`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: area.color,
                              flexShrink: 0,
                            }}
                          >
                            <Icon size={20} />
                          </div>
                          <div
                            style={{
                              fontSize: '0.875rem',
                              fontWeight: 600,
                              color: 'var(--text-primary)',
                              lineHeight: 1.3,
                            }}
                          >
                            {area.label}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .education-card-inner {
            padding: 24px 18px !important;
          }
          .education-header {
            gap: 16px !important;
          }
          .education-avatar {
            width: 52px !important;
            height: 52px !important;
            border-radius: 14px !important;
          }
          .education-avatar svg {
            width: 26px !important;
            height: 26px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
