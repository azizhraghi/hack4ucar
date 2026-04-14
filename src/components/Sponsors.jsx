import React from 'react';
import { motion } from 'framer-motion';

const pushpinColors = ['#D32F2F', '#1976D2', '#388E3C', '#FBC02D'];

const Sponsors = () => {
  return (
    <section id="sponsors" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <div style={{
            display: 'inline-block',
            background: '#FFF8E7',
            padding: '6px 20px',
            fontFamily: "'Special Elite', cursive",
            fontSize: '0.75rem',
            letterSpacing: '4px',
            color: '#7A6652',
            textTransform: 'uppercase',
            boxShadow: '1px 2px 4px rgba(0,0,0,0.08)',
            marginBottom: '1rem',
          }}>
            🤝 THE ARCHITECTS
          </div>
          <h2 className="heading-lg mb-4">Board of <span style={{ color: '#D32F2F' }}>Directors</span></h2>
          <p style={{ color: 'var(--text-body)', fontFamily: "'Patrick Hand', cursive", fontSize: '1.1rem' }}>
            The masterminds making this classified operation a reality.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
          {/* UCAR */}
          <motion.div
            style={{
              width: '220px', height: '140px',
              background: '#FFF8E7',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '1rem',
              position: 'relative',
              boxShadow: '2px 3px 8px rgba(0,0,0,0.1)',
              transform: 'rotate(-2deg)',
              cursor: 'pointer',
            }}
            whileHover={{ rotate: 0, y: -6, boxShadow: '4px 8px 20px rgba(0,0,0,0.15)' }}
            transition={{ duration: 0.3 }}
          >
            <div style={{
              position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)',
              width: '18px', height: '18px', borderRadius: '50%', background: pushpinColors[0],
              boxShadow: 'inset -2px -2px 3px rgba(0,0,0,0.25), 1px 2px 3px rgba(0,0,0,0.15)',
              zIndex: 2,
            }} />
            <img
              src="/images/ucar-logo.png"
              alt="Université de Carthage (UCAR)"
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </motion.div>

          {/* ACM ENSTAB */}
          <motion.div
            style={{
              width: '220px', height: '140px',
              background: '#FFF8E7',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '1rem',
              position: 'relative',
              boxShadow: '2px 3px 8px rgba(0,0,0,0.1)',
              transform: 'rotate(1.5deg)',
              cursor: 'pointer',
            }}
            whileHover={{ rotate: 0, y: -6, boxShadow: '4px 8px 20px rgba(0,0,0,0.15)' }}
            transition={{ duration: 0.3 }}
          >
            <div style={{
              position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)',
              width: '18px', height: '18px', borderRadius: '50%', background: pushpinColors[1],
              boxShadow: 'inset -2px -2px 3px rgba(0,0,0,0.25), 1px 2px 3px rgba(0,0,0,0.15)',
              zIndex: 2,
            }} />
            <img
              src="/images/acm-enstab-logo.png"
              alt="ACM ENSTAB"
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </motion.div>

          {/* No more sponsors */}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
