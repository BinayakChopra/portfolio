import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Shield, Zap } from 'lucide-react';
import Card3D from './Card3D';

const statCards = [
  {
    icon: GraduationCap,
    title: 'B.Tech CSE',
    subtitle: 'Pursuing degree',
    color: '#4f7df9',
  },
  {
    icon: Code,
    title: 'Frontend Dev',
    subtitle: 'React & Modern Web',
    color: '#7c5bf5',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    subtitle: 'Forensics & SOC',
    color: '#00d2ff',
  },
  {
    icon: Zap,
    title: 'Java & DSA',
    subtitle: 'Problem Solving',
    color: '#38ef7d',
  },
];

const About = () => {
  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '56px' }}
        >
          <h2 className="section-heading">A little about me.</h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '48px',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <p
              style={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              I am a <strong style={{ color: 'var(--text-primary)' }}>B.Tech Computer Science Engineering</strong> student
              passionate about software development, frontend engineering, cybersecurity, and problem solving.
            </p>
            <p
              style={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              I enjoy turning ideas into functional digital products while continuously improving my understanding of{' '}
              <strong style={{ color: 'var(--text-primary)' }}>programming</strong>,{' '}
              <strong style={{ color: 'var(--text-primary)' }}>data structures</strong>,{' '}
              <strong style={{ color: 'var(--text-primary)' }}>web technologies</strong>, and{' '}
              <strong style={{ color: 'var(--text-primary)' }}>cybersecurity</strong>.
            </p>
            <p
              style={{
                fontSize: '1.063rem',
                color: 'var(--text-tertiary)',
                lineHeight: 1.7,
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              Every project is an opportunity to learn, build, and push my technical boundaries.
            </p>
          </motion.div>

          {/* Right: Stat Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
            }}
          >
            {statCards.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card3D
                    intensity={8}
                    className="glass-card"
                    style={{
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      textAlign: 'center',
                      alignItems: 'center',
                      minHeight: '140px',
                    }}
                  >
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        background: `radial-gradient(circle, ${stat.color}22 0%, ${stat.color}11 100%)`,
                        border: `1px solid ${stat.color}44`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: stat.color,
                        boxShadow: `0 6px 20px ${stat.color}22`,
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3
                        style={{
                          margin: 0,
                          fontSize: '1.063rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {stat.title}
                      </h3>
                      <p
                        style={{
                          margin: '4px 0 0',
                          fontSize: '0.813rem',
                          color: 'var(--text-tertiary)',
                        }}
                      >
                        {stat.subtitle}
                      </p>
                    </div>
                  </Card3D>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
