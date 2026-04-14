import React from 'react';
import { Database, MonitorPlay, FileText, Globe, AlertTriangle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* "THE MEMO" heading as an office memo */}
          <div style={{
            display: 'inline-block',
            background: '#FFF8E7',
            padding: '8px 28px',
            fontFamily: "'Special Elite', cursive",
            fontSize: '0.8rem',
            letterSpacing: '4px',
            color: '#7A6652',
            textTransform: 'uppercase',
            boxShadow: '2px 2px 6px rgba(0,0,0,0.08)',
            marginBottom: '1rem',
          }}>
            📋 INTERNAL MEMO
          </div>
          <h2 className="heading-lg mb-4">The <span style={{ color: '#D32F2F' }}>Mission</span></h2>
          <p style={{
            maxWidth: '800px', margin: '0 auto', fontSize: '1.125rem',
            color: 'var(--text-body)', fontFamily: "'Patrick Hand', cursive",
          }}>
            The University of Carthage (UCAR) oversees more than 30 affiliated institutions. 
            Recently, upper management has identified critical operational bottlenecks. 
            Your directive is to eliminate them. 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start mt-12">
          {/* The Problem — Red "URGENT" memo */}
          <motion.div
            className="memo-card"
            style={{
              borderTop: '4px solid #D32F2F',
              position: 'relative',
              transform: 'rotate(-0.5deg)',
            }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* URGENT stamp */}
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '20px',
              fontFamily: "'Special Elite', cursive",
              fontSize: '1.1rem',
              color: '#D32F2F',
              border: '3px solid #D32F2F',
              padding: '2px 12px',
              transform: 'rotate(-8deg)',
              opacity: 0.7,
              letterSpacing: '3px',
            }}>
              URGENT
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
              <AlertTriangle size={22} color="#D32F2F" />
              <h3 style={{ fontFamily: "'Special Elite', cursive", fontSize: '1.5rem', color: '#D32F2F' }}>The Problem</h3>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: "'Patrick Hand', cursive", fontSize: '1.05rem', color: 'var(--text-body)' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <FileText size={20} color="#D32F2F" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span><strong style={{ backgroundColor: '#2C1810', color: 'transparent', borderRadius: '2px', padding: '0 8px', userSelect: 'none' }}>[REDACTED] incidents</strong> have been reported across <strong style={{ backgroundColor: '#2C1810', color: 'transparent', borderRadius: '2px', padding: '0 8px', userSelect: 'none' }}>multiple sectors</strong>.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Database size={20} color="#D32F2F" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span><strong style={{ backgroundColor: '#2C1810', color: 'transparent', borderRadius: '2px', padding: '0 8px', userSelect: 'none' }}>Critical system failure</strong> detected in <strong style={{ backgroundColor: '#2C1810', color: 'transparent', borderRadius: '2px', padding: '0 8px', userSelect: 'none' }}>[CLASSIFIED]</strong> operations.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MonitorPlay size={20} color="#D32F2F" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span><strong style={{ backgroundColor: '#2C1810', color: 'transparent', borderRadius: '2px', padding: '0 8px', userSelect: 'none' }}>All current workflows</strong> are failing to meet <strong style={{ backgroundColor: '#2C1810', color: 'transparent', borderRadius: '2px', padding: '0 8px', userSelect: 'none' }}>UCAR Directive 4</strong>.</span>
              </li>
            </ul>

            {/* Coffee stain decoration */}
            <div style={{
              position: 'absolute', bottom: '-20px', right: '-15px',
              width: '70px', height: '70px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(139,90,43,0.08) 30%, transparent 70%)',
              pointerEvents: 'none',
            }} />
          </motion.div>

          {/* The Goal — Blue "APPROVED" memo */}
          <motion.div
            className="memo-card"
            style={{
              borderTop: '4px solid #1976D2',
              position: 'relative',
              transform: 'rotate(0.5deg)',
            }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* APPROVED stamp */}
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '20px',
              fontFamily: "'Special Elite', cursive",
              fontSize: '1.1rem',
              color: '#388E3C',
              border: '3px solid #388E3C',
              padding: '2px 12px',
              transform: 'rotate(5deg)',
              opacity: 0.7,
              letterSpacing: '3px',
            }}>
              APPROVED
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
              <CheckCircle size={22} color="#1976D2" />
              <h3 style={{ fontFamily: "'Special Elite', cursive", fontSize: '1.5rem', color: '#1976D2' }}>The Goal</h3>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: "'Patrick Hand', cursive", fontSize: '1.05rem', color: 'var(--text-body)' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Globe size={20} color="#1976D2" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>Engineer a high-impact solution targeting <strong style={{ backgroundColor: '#2C1810', color: 'transparent', borderRadius: '2px', padding: '0 8px', userSelect: 'none' }}>[REDACTED]</strong>.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Database size={20} color="#1976D2" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>Overhaul and optimize <strong style={{ backgroundColor: '#2C1810', color: 'transparent', borderRadius: '2px', padding: '0 8px', userSelect: 'none' }}>existing [CLASSIFIED] infrastructure</strong>.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MonitorPlay size={20} color="#1976D2" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontStyle: 'italic', color: '#D32F2F' }}>Full mission briefing will occur on hackathon day. Clearance required.</span>
              </li>
            </ul>

            {/* Paper clip decoration */}
            <div style={{
              position: 'absolute', top: '-12px', left: '30px',
              width: '24px', height: '50px',
              border: '2.5px solid rgba(180,180,180,0.5)',
              borderRadius: '12px 12px 0 0',
              pointerEvents: 'none',
              transform: 'rotate(-5deg)',
            }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
