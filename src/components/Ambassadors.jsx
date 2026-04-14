import React from 'react';
import { motion } from 'framer-motion';

const ambassadors = [
  { id: 1, name: "Ambassador 1", status: "Coming Soon", bg: "#FFE066", rotate: -3 },
  { id: 2, name: "Ambassador 2", status: "Coming Soon", bg: "#7EC8E3", rotate: 2 },
  { id: 3, name: "Ambassador 3", status: "Coming Soon", bg: "#FFB3BA", rotate: -2 },
  { id: 4, name: "Ambassador 4", status: "Coming Soon", bg: "#B5EAD7", rotate: 1.5 },
];

const pushpins = ['#D32F2F', '#1976D2', '#388E3C', '#FBC02D'];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Ambassadors = () => {
  return (
    <section id="ambassadors" className="section">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
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
            🪪 EMPLOYEE OF THE MONTH
          </div>
          <h2 className="heading-lg mb-4">Our <span style={{ color: '#D32F2F' }}>Ambassadors</span></h2>
          <p style={{
            color: 'var(--text-body)', fontFamily: "'Patrick Hand', cursive",
            fontSize: '1.1rem', marginBottom: '1.5rem',
          }}>
            Our ambassadors will be announced soon. Stay tuned!
          </p>

          <motion.a
            href="#register"
            whileHover={{ rotate: 0, scale: 1.05, boxShadow: '4px 6px 14px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-block',
              background: '#D32F2F',
              color: '#fff',
              padding: '12px 28px',
              fontFamily: "'Special Elite', cursive",
              fontSize: '1rem',
              letterSpacing: '1px',
              textDecoration: 'none',
              transform: 'rotate(-1deg)',
              boxShadow: '2px 4px 8px rgba(0,0,0,0.2)',
            }}
          >
            📋 Become an ambassador
          </motion.a>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-12 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {ambassadors.map((person, idx) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 40, rotate: person.rotate * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: person.rotate }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: "spring" }}
              whileHover={{ rotate: 0, y: -8, boxShadow: '4px 8px 20px rgba(0,0,0,0.18)' }}
              style={{
                width: '220px',
                background: '#FFF8E7',
                transform: `rotate(${person.rotate}deg)`,
                boxShadow: '2px 4px 10px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                cursor: 'default',
                position: 'relative',
              }}
            >
              {/* Pushpin */}
              <div style={{
                position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)',
                width: '20px', height: '20px', borderRadius: '50%',
                background: pushpins[idx],
                boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.25), 1px 2px 4px rgba(0,0,0,0.2)',
                zIndex: 3,
              }} />

              {/* Employee photo area — polaroid style */}
              <div style={{
                padding: '16px 16px 8px',
              }}>
                <div style={{
                  width: '100%',
                  height: '180px',
                  background: person.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Silhouette placeholder */}
                  <div style={{
                    width: '80px', height: '80px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2.5rem',
                  }}>
                    👤
                  </div>
                </div>
              </div>

              {/* Text area */}
              <div style={{ padding: '4px 16px 20px', textAlign: 'center' }}>
                <h3 style={{
                  fontFamily: "'Special Elite', cursive",
                  fontSize: '1.1rem',
                  color: '#2C1810',
                  marginBottom: '4px',
                }}>
                  {person.name}
                </h3>

                {/* "Coming Soon" as a tiny sticky note */}
                <div style={{
                  display: 'inline-block',
                  background: '#FFE066',
                  padding: '3px 10px',
                  fontFamily: "'Patrick Hand', cursive",
                  fontSize: '0.85rem',
                  color: '#2C1810',
                  transform: 'rotate(2deg)',
                  boxShadow: '1px 1px 3px rgba(0,0,0,0.1)',
                }}>
                  {person.status}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Ambassadors;
