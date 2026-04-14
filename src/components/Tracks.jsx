import React from 'react';
import { DatabaseZap, LineChart, BotMessageSquare, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const tracksData = [
  {
    icon: <DatabaseZap size={28} color="#2C1810" />,
    title: "Project [REDACTED]",
    dept: "Records Dept.",
    desc: "Target objectives currently classified. Clearance level insufficient. Briefing on hackathon day.",
    bg: '#FFE066',
    pushpin: '#D32F2F',
    rotate: -3,
  },
  {
    icon: <LineChart size={28} color="#2C1810" />,
    title: "Operation Aurora",
    dept: "Accounting Dept.",
    desc: "Classified directives. Prepare for high-level predictive analysis operations.",
    bg: '#7EC8E3',
    pushpin: '#1976D2',
    rotate: 2,
  },
  {
    icon: <BotMessageSquare size={28} color="#2C1810" />,
    title: "Initiative Sigma",
    dept: "Reception Dept.",
    desc: "Communication protocols currently restricted. Awaiting commanding officer declassification.",
    bg: '#FFB3BA',
    pushpin: '#D32F2F',
    rotate: -1.5,
  },
  {
    icon: <Layers size={28} color="#2C1810" />,
    title: "Directive Omega",
    dept: "Management Dept.",
    desc: "Top Secret. Combine [REDACTED] features into one unified and scalable system.",
    bg: '#B5EAD7',
    pushpin: '#388E3C',
    rotate: 2.5,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Tracks = () => {
  return (
    <section id="tracks" className="section">
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
            🏢 CHOOSE YOUR DEPARTMENT
          </div>
          <h2 className="heading-lg mb-4">Hackathon <span style={{ color: '#D32F2F' }}>Tracks</span></h2>
          <p style={{ color: 'var(--text-body)', fontFamily: "'Patrick Hand', cursive", fontSize: '1.1rem' }}>
            Pick your department and get to work. Michael would be proud.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          style={{ maxWidth: '900px', margin: '0 auto' }}
        >
          {tracksData.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, rotate: track.rotate * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: track.rotate }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 120 }}
              whileHover={{ rotate: 0, y: -6, boxShadow: '4px 8px 20px rgba(0,0,0,0.2)' }}
              style={{
                background: track.bg,
                padding: '28px 24px',
                position: 'relative',
                transform: `rotate(${track.rotate}deg)`,
                boxShadow: '2px 4px 10px rgba(0,0,0,0.12)',
                cursor: 'default',
                overflow: 'visible',
              }}
            >
              {/* Pushpin */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: track.pushpin,
                boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.25), 1px 2px 4px rgba(0,0,0,0.2)',
                zIndex: 2,
              }} />

              {/* Department tag */}
              <div style={{
                fontFamily: "'Special Elite', cursive",
                fontSize: '0.7rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'rgba(44,24,16,0.5)',
                marginBottom: '8px',
              }}>
                {track.dept}
              </div>

              {/* Icon + Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.5)',
                  width: '48px', height: '48px',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {track.icon}
                </div>
                <h3 style={{ fontFamily: "'Special Elite', cursive", fontSize: '1.35rem', color: '#2C1810' }}>
                  {track.title}
                </h3>
              </div>

              {/* Description */}
              <p style={{
                fontFamily: "'Patrick Hand', cursive",
                fontSize: '1rem',
                color: 'rgba(44,24,16,0.8)',
                lineHeight: 1.5,
              }}>
                {track.desc}
              </p>

              {/* Folded corner effect */}
              <div style={{
                position: 'absolute',
                bottom: 0, right: 0,
                width: '20px', height: '20px',
                background: `linear-gradient(135deg, ${track.bg} 50%, rgba(0,0,0,0.08) 50%)`,
              }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tracks;
