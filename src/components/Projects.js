import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Layers } from 'lucide-react';
import { GitHubIcon } from './Icons';
import Card3D from './Card3D';

const projectsData = [
  {
    title: 'Resume Builder UI',
    description:
      'A modern resume builder interface designed to simplify resume creation and provide a clean, intuitive user experience with live preview and formatting.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Docker'],
    github: 'https://github.com/BinayakChopra/Resume-Builder-UI.git',
    live: 'https://resume-builder-ui.onrender.com',
    category: 'Full Stack',
    featured: true,
    accentColor: '#4f7df9',
  },
  {
    title: 'Calyx',
    description:
      'A smart virtual assistant project built using web technologies with natural interaction patterns and responsive interface design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: null,
    live: null,
    category: 'Web App',
    featured: false,
    accentColor: '#7c5bf5',
  },
  {
    title: 'Digital Phone Directory',
    description:
      'An offline C++ console application for managing phone directory records efficiently using optimized file operations and data structures.',
    tech: ['C++', 'Data Structures', 'File I/O'],
    github: null,
    live: null,
    category: 'Console App',
    featured: false,
    accentColor: '#00d2ff',
  },
  {
    title: 'Promo Drive',
    description:
      'A startup concept and modern digital platform focused on innovative promotion workflows and streamlined creator engagement.',
    tech: ['Concept', 'UI/UX Design', 'Modern Web'],
    github: null,
    live: null,
    category: 'Concept & Platform',
    featured: false,
    accentColor: '#38ef7d',
  },
];

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '100px 0', position: 'relative' }}>
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
            <Layers size={16} />
            Featured Work
          </div>
          <h2 className="section-heading">Things I've built.</h2>
          <p className="section-subtext">
            A selection of projects exploring web development, backend engineering, data structures,
            and digital user experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '32px',
          }}
          className="projects-grid"
        >
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <Card3D
                intensity={12}
                className="glass-card"
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '32px',
                  position: 'relative',
                  borderTop: `2px solid ${project.accentColor}`,
                }}
              >
                {/* Header: Category & Featured badge */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      padding: '4px 12px',
                      borderRadius: '8px',
                      background: 'var(--glass-bg)',
                      border: '1px solid var(--card-border)',
                      color: project.accentColor,
                    }}
                  >
                    {project.category}
                  </span>
                  {project.featured && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--status-green)',
                      }}
                    >
                      <Sparkles size={13} />
                      Live Demo
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'var(--text-primary)',
                    margin: '0 0 12px',
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.938rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    margin: '0 0 24px',
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Pills */}
                {project.tech.length > 0 && (
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '24px',
                    }}
                  >
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: 'var(--input-bg)',
                          border: '1px solid var(--card-border)',
                          color: 'var(--text-tertiary)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '12px', marginTop: 'auto', paddingTop: '8px' }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ padding: '10px 18px', fontSize: '0.875rem' }}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GitHubIcon size={16} />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ padding: '10px 18px', fontSize: '0.875rem' }}
                      aria-label={`Open live demo of ${project.title}`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
