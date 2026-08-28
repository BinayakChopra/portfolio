import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Shield, Wrench, Sparkles } from 'lucide-react';
import Card3D from './Card3D';

const skillGroups = [
  {
    title: 'Programming',
    icon: Code2,
    color: '#4f7df9',
    description: 'Core logic, object-oriented concepts & data structures',
    skills: ['Java', 'C++', 'C', 'JavaScript', 'DSA Basics', 'OOP Concepts'],
  },
  {
    title: 'Frontend Development',
    icon: Layout,
    color: '#7c5bf5',
    description: 'Modern, performant & fluid user interfaces',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Responsive UI', 'Framer Motion'],
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    color: '#00d2ff',
    description: 'Defensive fundamentals & digital investigation',
    skills: ['Computer Forensics', 'Digital Evidence Analysis', 'Cybersecurity Fundamentals', 'SOC Concepts', 'Network Basics'],
  },
  {
    title: 'Tools & Ecosystem',
    icon: Wrench,
    color: '#38ef7d',
    description: 'Developer workflows, containers & environments',
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'MySQL', 'XAMPP', 'Postman'],
  },
];

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '100px 0', position: 'relative' }}>
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
            <Sparkles size={16} />
            Capabilities & Stack
          </div>
          <h2 className="section-heading">Skills & Technologies</h2>
          <p className="section-subtext">
            A comprehensive overview of programming languages, frameworks, cybersecurity concepts,
            and developer tools in my toolkit.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <Card3D
                  intensity={10}
                  className="glass-card"
                  style={{
                    height: '100%',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                  }}
                >
                  {/* Top Bar with Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        background: `radial-gradient(circle, ${group.color}22 0%, ${group.color}11 100%)`,
                        border: `1px solid ${group.color}44`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: group.color,
                        boxShadow: `0 4px 15px ${group.color}22`,
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3
                        style={{
                          margin: 0,
                          fontSize: '1.15rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {group.title}
                      </h3>
                      <p
                        style={{
                          margin: '2px 0 0',
                          fontSize: '0.75rem',
                          color: 'var(--text-tertiary)',
                        }}
                      >
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                    {group.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.06, y: -2 }}
                        style={{
                          fontSize: '0.813rem',
                          fontWeight: 500,
                          padding: '6px 14px',
                          borderRadius: '10px',
                          background: 'var(--glass-bg)',
                          border: '1px solid var(--card-border)',
                          color: 'var(--text-primary)',
                          cursor: 'default',
                          transition: 'border-color 0.2s, background 0.2s',
                          boxShadow: '0 2px 8px var(--glass-shadow)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = group.color;
                          e.currentTarget.style.color = group.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'var(--card-border)';
                          e.currentTarget.style.color = 'var(--text-primary)';
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
