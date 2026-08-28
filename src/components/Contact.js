import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, Send, Loader2 } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

const EMAIL = 'binayakchopra34@gmail.com';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = useCallback((message) => {
    setToast(message);
    setTimeout(() => setToast(null), 4000);
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      showToast('Email copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast('Could not copy email');
    }
  }, [showToast]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Direct form submission to FormSubmit
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok || result.success === 'true' || result.success === true) {
        showToast('Message sent! Check your inbox (or spam for first activation).');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback: Open email client with pre-filled details
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
        showToast('Opening your mail client as fallback...');
      }
    } catch {
      // Fallback: Open email client
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      showToast('Opening your mail client...');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      icon: <Mail size={20} />,
      label: EMAIL,
      href: `mailto:${EMAIL}`,
      action: copyEmail,
      actionIcon: copied ? <Check size={14} /> : <Copy size={14} />,
    },
    {
      icon: <LinkedInIcon size={20} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/binayak-chopra/',
    },
    {
      icon: <GitHubIcon size={20} />,
      label: 'GitHub',
      href: 'https://github.com/BinayakChopra',
    },
  ];

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={styles.header}
        >
          <h2 className="section-heading">Let's build something meaningful.</h2>
          <p className="section-subtext">
            I'm always interested in interesting projects, internships, collaborations,
            and opportunities to learn and build.
          </p>
        </motion.div>

        <div style={styles.grid}>
          {/* Left column — contact links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={styles.linksCol}
          >
            <h3 style={styles.colTitle}>Get in touch</h3>

            {contactLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-card"
                style={styles.linkCard}
              >
                <span style={styles.linkIcon}>{link.icon}</span>
                <span style={styles.linkLabel}>{link.label}</span>
                {link.action && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      link.action();
                    }}
                    style={styles.copyBtn}
                    aria-label="Copy email"
                  >
                    {link.actionIcon}
                  </button>
                )}
              </a>
            ))}
          </motion.div>

          {/* Right column — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card" style={styles.form}>
              <h3 style={styles.colTitle}>Send a message</h3>

              <div style={styles.fieldGroup}>
                <label htmlFor="contact-name" style={styles.label}>Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  style={styles.input}
                />
              </div>

              <div style={styles.fieldGroup}>
                <label htmlFor="contact-email" style={styles.label}>Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  style={styles.input}
                />
              </div>

              <div style={styles.fieldGroup}>
                <label htmlFor="contact-message" style={styles.label}>Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  style={{ ...styles.input, ...styles.textarea }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  ...styles.submitBtn,
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            style={styles.toast}
            className="glass"
          >
            <Check size={14} style={{ color: 'var(--status-green)' }} />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
  header: {
    marginBottom: '48px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '32px',
    alignItems: 'start',
  },
  linksCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  colTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: 'var(--text-primary)',
    marginBottom: '8px',
    letterSpacing: '-0.02em',
  },
  linkCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    padding: '16px 20px',
    textDecoration: 'none',
    color: 'var(--text-primary)',
    cursor: 'pointer',
  },
  linkIcon: {
    color: 'var(--accent)',
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
  },
  linkLabel: {
    fontSize: '0.938rem',
    flex: 1,
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  copyBtn: {
    background: 'var(--glass-bg)',
    border: '1px solid var(--card-border)',
    borderRadius: '8px',
    padding: '6px',
    cursor: 'pointer',
    color: 'var(--text-secondary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s ease',
    flexShrink: 0,
  },
  form: {
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    fontWeight: 500,
    color: 'var(--text-secondary)',
  },
  input: {
    padding: '12px 16px',
    background: 'var(--input-bg)',
    border: '1px solid var(--input-border)',
    borderRadius: '12px',
    fontSize: '0.938rem',
    color: 'var(--text-primary)',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    width: '100%',
  },
  textarea: {
    resize: 'vertical',
    minHeight: '100px',
  },
  submitBtn: {
    width: '100%',
    justifyContent: 'center',
    marginTop: '4px',
  },
  toast: {
    position: 'fixed',
    bottom: '32px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '10px 20px',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    zIndex: 10000,
    pointerEvents: 'none',
  },
};

/* Responsive: inject a style tag for grid collapse on mobile */
const styleTag = document.createElement('style');
styleTag.textContent = `
  @media (max-width: 768px) {
    #contact [style*="grid-template-columns"] {
      grid-template-columns: 1fr !important;
    }
  }
  #contact input:focus,
  #contact textarea:focus {
    border-color: var(--accent) !important;
    box-shadow: 0 0 0 3px rgba(79, 125, 249, 0.12) !important;
  }
`;
if (typeof document !== 'undefined' && !document.getElementById('contact-styles')) {
  styleTag.id = 'contact-styles';
  document.head.appendChild(styleTag);
}

export default Contact;
