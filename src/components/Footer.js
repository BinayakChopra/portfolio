import React from 'react';
import { GitHubIcon, LinkedInIcon } from './Icons';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--card-border)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '3rem 1.5rem',
        marginTop: '6rem',
        transition: 'background-color 0.4s ease, border-color 0.4s ease',
      }}
    >
      <div
        className="section-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'center',
        }}
      >
        {/* Social Links */}
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          <a
            href="https://github.com/BinayakChopra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              color: 'var(--text-secondary)',
              transition: 'color 0.2s ease, transform 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'var(--glass-bg)',
              border: '1px solid var(--card-border)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/binayak-chopra/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              color: 'var(--text-secondary)',
              transition: 'color 0.2s ease, transform 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'var(--glass-bg)',
              border: '1px solid var(--card-border)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <LinkedInIcon size={18} />
          </a>
        </div>

        {/* Text */}
        <div style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} Binayak Chopra. All rights reserved.
        </div>
        <div
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.813rem',
            fontStyle: 'italic',
          }}
        >
          Built with curiosity, code & caffeine.
        </div>
      </div>
    </footer>
  );
}
