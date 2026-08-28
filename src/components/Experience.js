import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Shield, Rocket, Trophy, Sparkles } from 'lucide-react';
import Card3D from './Card3D';

const timelineData = [
  {
    year: '2024 – 2028',
    title: 'B.Tech Computer Science Engineering',
    subtitle: 'Lovely Professional University',
    description:
      'Pursuing Bachelor of Technology with focus on Computer Science, Algorithms, Web Architecture, and Cybersecurity fundamentals.',
    icon: GraduationCap,
    color: '#4f7df9',
    badge: 'Current Degree',
  },
  {
    year: '2024 – Present',
    title: 'Frontend & Modern Web Engineering',
    subtitle: 'Deepening Framework Architecture',
    description:
      'Mastered responsive layouts, React ecosystem, state management, modern CSS animations, and production deployment using Docker.',
    icon: Code2,
    color: '#7c5bf5',
    badge: 'Core Focus',
  },
  {
    year: '2024 – Present',
    title: 'Cybersecurity & Digital Forensics',
    subtitle: 'Security Research & SOC Concepts',
    description:
      'Exploring computer forensics, memory analysis, digital evidence handling, network protocols, and security operations center workflows.',
    icon: Shield,
    color: '#00d2ff',
    badge: 'Specialization',
  },
  {
    year: '2024 – Present',
    title: 'Hands-on Software Building',
    subtitle: 'Resume Builder UI, Calyx, C++ Systems',
    description:
      'Architected live deployed web applications and console software systems with clean, maintainable code and containerization.',
    icon: Rocket,
    color: '#38ef7d',
    badge: 'Projects',
  },
];

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '64px' }}
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
            <Sparkles size={16} />
            Evolution & Roadmap
          </div>
          <h2 className="section-heading">My Journey & Milestones</h2>
          <p className="section-subtext">
            A chronological timeline of my academic milestones, technical evolutions, and engineering focus areas.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div style={{ position: 'relative', maxWidth: '840px', margin: '0 auto' }}>
          {/* Glowing Center / Left Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '24px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent) 0%, var(--accent-secondary) 50%, var(--status-green) 100%)',
              boxShadow: '0 0 12px var(--glow-color)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {timelineData.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  style={{ display: 'flex', gap: '28px', alignItems: 'flex-start' }}
                >
                  {/* Glowing Node on Timeline */}
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'var(--bg-primary)',
                      border: `2px solid ${item.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.color,
                      boxShadow: `0 0 20px ${item.color}44`,
                      flexShrink: 0,
                      zIndex: 2,
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  {/* Card Content */}
                  <div style={{ flex: 1 }}>
                    <Card3D intensity={8}>
                      <div
                        className="glass-card"
                        style={{
                          padding: '28px',
                          borderLeft: `4px solid ${item.color}`,
                          boxShadow: '0 8px 30px var(--glass-shadow)',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '8px',
                            marginBottom: '10px',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '0.813rem',
                              fontWeight: 700,
                              color: item.color,
                              fontFamily: 'monospace',
                              letterSpacing: '0.04em',
                            }}
                          >
                            {item.year}
                          </span>
                          <span
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              padding: '4px 10px',
                              borderRadius: '6px',
                              background: 'var(--glass-bg)',
                              border: '1px solid var(--card-border)',
                              color: 'var(--text-secondary)',
                            }}
                          >
                            {item.badge}
                          </span>
                        </div>

                        <h3
                          style={{
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            margin: '0 0 4px',
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {item.title}
                        </h3>
                        <div
                          style={{
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            color: 'var(--text-tertiary)',
                            marginBottom: '12px',
                          }}
                        >
                          {item.subtitle}
                        </div>
                        <p
                          style={{
                            fontSize: '0.938rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                            margin: 0,
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </Card3D>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
