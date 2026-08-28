import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, CheckCircle2, RefreshCw } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import Card3D from './Card3D';

const CyberTerminal = () => {
  const [activeTab, setActiveTab] = useState('terminal');
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '⚡ CYBER MATRIX SECURITY PROTOCOL v4.8 ONLINE' },
    { type: 'system', text: 'Type "help" or click suggestions to execute commands.' },
  ]);

  // Security Scanner State
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanLogs] = useState([
    { status: 'ok', msg: 'Core Kernel Integrity: Verified [SHA-256]' },
    { status: 'ok', msg: 'Zero-Day Detection System: Armed & Active' },
    { status: 'ok', msg: 'Firewall State: 0 Breaches Recorded' },
    { status: 'ok', msg: 'SOC Incident Response Node: Synchronized' },
  ]);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdText) => {
    const cmd = cmdText.trim().toLowerCase();
    sounds.playKeypress();

    let newHistory = [...history, { type: 'user', text: `$ ${cmdText}` }];

    if (cmd === 'help') {
      newHistory.push({
        type: 'output',
        text: 'Available Commands:\n  • whoami      - Candidate profile dossier\n  • skills      - Core technical capability matrix\n  • projects    - Executed software systems\n  • scan        - Run automated cybersecurity diagnostics\n  • crypto      - Compute live cryptographic hash\n  • contact     - Display communication endpoints\n  • clear       - Flush terminal buffer',
      });
    } else if (cmd === 'whoami') {
      newHistory.push({
        type: 'output',
        text: 'BINAYAK CHOPRA\nRole: B.Tech Computer Science Student · Frontend Developer · Aspiring Cybersecurity Analyst\nInstitution: Lovely Professional University\nGraduation: 2028\nMission: Building elegant, resilient web architectures & exploring cybersecurity.',
      });
    } else if (cmd === 'skills') {
      newHistory.push({
        type: 'output',
        text: '[LANGUAGES]   Java, C++, C, JavaScript (ES6+)\n[FRONTEND]    React.js, Tailwind CSS, HTML5, CSS3, Framer Motion\n[SECURITY]    Computer Forensics, Digital Evidence Analysis, SOC Concepts\n[DEV TOOLS]   Git, GitHub, Docker, MySQL, VS Code, XAMPP',
      });
    } else if (cmd === 'projects') {
      newHistory.push({
        type: 'output',
        text: '1. Resume Builder UI    [PHP · MySQL · JavaScript · Docker] -> https://resume-builder-ui.onrender.com\n2. Calyx                 [HTML · CSS · JavaScript]\n3. Digital Phone Dir    [C++ Console Architecture]\n4. Promo Drive          [Digital Growth Platform Concept]',
      });
    } else if (cmd === 'scan') {
      newHistory.push({
        type: 'output',
        text: 'Initiating real-time SOC forensic security analysis...',
      });
      runSecurityScan();
    } else if (cmd === 'crypto') {
      const randomHash = Array.from({ length: 64 }, () =>
        Math.floor(Math.random() * 16).toString(16)
      ).join('');
      newHistory.push({
        type: 'output',
        text: `SHA-256 Digest: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855\nLive Cryptographic Signature: ${randomHash}`,
      });
    } else if (cmd === 'contact') {
      newHistory.push({
        type: 'output',
        text: 'Email:    binayakchopra34@gmail.com\nGitHub:   https://github.com/BinayakChopra\nLinkedIn: https://www.linkedin.com/in/binayak-chopra/',
      });
    } else if (cmd === 'clear') {
      newHistory = [{ type: 'system', text: '⚡ Buffer cleared. Matrix terminal ready.' }];
    } else if (cmd === '') {
      // Empty enter
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not recognized: "${cmd}". Type "help" for a list of commands.`,
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  const runSecurityScan = () => {
    if (isScanning) return;
    setIsScanning(true);
    setScanProgress(0);
    sounds.playCyberScan();

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          sounds.playSelect();
          return 100;
        }
        return prev + 10;
      });
    }, 120);
  };

  return (
    <section id="cyber-hud" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '40px', textAlign: 'center' }}
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
            <Cpu size={16} />
            Interactive Cyber Command Center
          </div>
          <h2 className="section-heading">Live Interactive Diagnostics</h2>
          <p className="section-subtext" style={{ margin: '0 auto' }}>
            Test live commands, run forensic simulations, and inspect system security metrics in real time.
          </p>
        </motion.div>

        {/* Cyber Terminal Card */}
        <Card3D intensity={6}>
          <div
            className="glass-card"
            style={{
              borderRadius: '24px',
              border: '1px solid var(--card-border)',
              overflow: 'hidden',
              boxShadow: '0 20px 60px var(--glass-shadow)',
            }}
          >
            {/* Terminal Window Header Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 24px',
                background: 'rgba(0, 0, 0, 0.25)',
                borderBottom: '1px solid var(--card-border)',
              }}
            >
              {/* Traffic Light Dots */}
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
                <span
                  style={{
                    marginLeft: '12px',
                    fontSize: '0.813rem',
                    color: 'var(--text-tertiary)',
                    fontFamily: 'monospace',
                  }}
                >
                  binayak@security-node:~
                </span>
              </div>

              {/* Tabs */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => {
                    setActiveTab('terminal');
                    sounds.playSelect();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.813rem',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    background: activeTab === 'terminal' ? 'var(--accent)' : 'transparent',
                    color: activeTab === 'terminal' ? '#fff' : 'var(--text-secondary)',
                    transition: 'all 0.2s',
                  }}
                >
                  <Terminal size={14} />
                  CLI Terminal
                </button>
                <button
                  onClick={() => {
                    setActiveTab('scanner');
                    sounds.playSelect();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.813rem',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    background: activeTab === 'scanner' ? 'var(--accent)' : 'transparent',
                    color: activeTab === 'scanner' ? '#fff' : 'var(--text-secondary)',
                    transition: 'all 0.2s',
                  }}
                >
                  <Shield size={14} />
                  SOC Threat Scanner
                </button>
              </div>
            </div>

            {/* Tab 1: Terminal Content */}
            {activeTab === 'terminal' && (
              <div
                style={{
                  padding: '24px',
                  minHeight: '340px',
                  display: 'flex',
                  flexDirection: 'column',
                  fontFamily: 'monospace',
                  fontSize: '0.938rem',
                  background: 'rgba(0, 0, 0, 0.4)',
                }}
              >
                {/* History Output */}
                <div style={{ flex: 1, overflowY: 'auto', maxHeight: '280px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {history.map((line, idx) => (
                    <div
                      key={idx}
                      style={{
                        color:
                          line.type === 'system'
                            ? 'var(--accent)'
                            : line.type === 'user'
                            ? 'var(--text-primary)'
                            : line.type === 'error'
                            ? '#ff5f56'
                            : 'var(--text-secondary)',
                        whiteSpace: 'pre-wrap',
                        lineHeight: 1.5,
                      }}
                    >
                      {line.text}
                    </div>
                  ))}
                  <div ref={terminalEndRef} />
                </div>

                {/* Quick Suggestion Pills */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '16px 0 12px' }}>
                  {['whoami', 'skills', 'projects', 'scan', 'crypto', 'contact', 'clear'].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => executeCommand(cmd)}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--card-border)',
                        color: 'var(--accent)',
                        fontSize: '0.75rem',
                        fontFamily: 'monospace',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent)';
                        sounds.playHover();
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--card-border)';
                      }}
                    >
                      $ {cmd}
                    </button>
                  ))}
                </div>

                {/* Input Prompt */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <span style={{ color: 'var(--status-green)', fontWeight: 700 }}>$</span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="type command (try: whoami, scan, skills)..."
                    style={{
                      flex: 1,
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: 'var(--text-primary)',
                      fontFamily: 'monospace',
                      fontSize: '0.938rem',
                    }}
                  />
                  <button
                    onClick={() => executeCommand(inputVal)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '6px',
                      background: 'var(--accent-gradient)',
                      border: 'none',
                      color: '#fff',
                      fontSize: '0.75rem',
                      fontFamily: 'sans-serif',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Execute
                  </button>
                </div>
              </div>
            )}

            {/* Tab 2: Security & SOC Threat Scanner */}
            {activeTab === 'scanner' && (
              <div
                style={{
                  padding: '32px',
                  minHeight: '340px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  background: 'rgba(0, 0, 0, 0.35)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Automated Forensic & Security Health
                    </h3>
                    <p style={{ margin: '4px 0 0', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      Continuous vulnerability & digital forensics audit
                    </p>
                  </div>
                  <button
                    onClick={runSecurityScan}
                    disabled={isScanning}
                    className="btn-primary"
                    style={{ padding: '10px 20px', fontSize: '0.875rem' }}
                  >
                    <RefreshCw size={16} className={isScanning ? 'animate-spin' : ''} />
                    {isScanning ? 'Scanning Network...' : 'Run Security Scan'}
                  </button>
                </div>

                {/* Progress Bar */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.813rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Diagnostic Progress</span>
                    <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{scanProgress}%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div
                      style={{
                        height: '100%',
                        background: 'var(--accent-gradient-3)',
                        width: `${scanProgress}%`,
                      }}
                      transition={{ ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* Status Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  {scanLogs.map((log, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '16px',
                        borderRadius: '12px',
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--card-border)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                    >
                      <CheckCircle2 size={18} style={{ color: 'var(--status-green)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.813rem', color: 'var(--text-primary)', fontFamily: 'monospace' }}>
                        {log.msg}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card3D>
      </div>
    </section>
  );
};

export default CyberTerminal;
