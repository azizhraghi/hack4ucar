import React from 'react';
import { ArrowRight, Calendar, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ransomLetters = [
  { letter: 'H', bg: '#D32F2F', color: '#fff', rotate: -3, font: "'Special Elite', cursive" },
  { letter: 'A', bg: '#FFF8E7', color: '#2C1810', rotate: 2, font: "'Patrick Hand', cursive" },
  { letter: 'C', bg: '#1976D2', color: '#fff', rotate: -1, font: "'Special Elite', cursive" },
  { letter: 'K', bg: '#FFE066', color: '#2C1810', rotate: 3, font: "'Patrick Hand', cursive" },
  { letter: '4', bg: '#D32F2F', color: '#fff', rotate: -2, font: "'Special Elite', cursive", size: '1.2em' },
  { letter: 'U', bg: '#388E3C', color: '#fff', rotate: 1, font: "'Patrick Hand', cursive" },
  { letter: 'C', bg: '#FFF8E7', color: '#2C1810', rotate: -3, font: "'Special Elite', cursive" },
  { letter: 'A', bg: '#1976D2', color: '#fff', rotate: 2, font: "'Patrick Hand', cursive" },
  { letter: 'R', bg: '#FFE066', color: '#2C1810', rotate: -1, font: "'Special Elite', cursive" },
];

const Hero = () => {
  return (
    <section className="relative" style={{ minHeight: '100vh', overflow: 'hidden' }}>
      {/* Full-bleed background image — like MenaCraft */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'url(/images/office-hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        zIndex: 0,
      }} />

      {/* Dark overlay gradient for text readability */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(180deg, rgba(44,24,16,0.3) 0%, rgba(44,24,16,0.55) 40%, rgba(44,24,16,0.85) 75%, rgba(44,24,16,0.95) 100%)',
        zIndex: 1,
      }} />

      {/* Content */}
      <div className="container flex flex-col items-center justify-center text-center" style={{ position: 'relative', zIndex: 10, minHeight: '100vh', paddingTop: '100px', paddingBottom: '60px' }}>

        {/* Top Label — Sticky note */}
        <motion.div
          initial={{ opacity: 0, y: -20, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 20px',
            background: '#FFE066',
            color: '#2C1810',
            fontFamily: "'Special Elite', cursive",
            fontSize: '0.95rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            boxShadow: '2px 3px 6px rgba(0,0,0,0.3)',
            transform: 'rotate(-2deg)',
            marginBottom: '1.5rem',
          }}
        >
          📺 The Office Edition
        </motion.div>

        {/* Main Title — Ransom Note Letters */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '6px',
            padding: '0.5rem 0',
            marginBottom: '1rem',
          }}
        >
          {ransomLetters.map((item, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: -30, rotate: item.rotate * 3 }}
              animate={{ opacity: 1, y: 0, rotate: item.rotate }}
              transition={{ duration: 0.4, delay: 0.2 + idx * 0.06, type: "spring", stiffness: 200 }}
              style={{
                display: 'inline-block',
                padding: '8px 14px',
                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                fontFamily: item.font,
                fontWeight: 700,
                lineHeight: 1,
                background: item.bg,
                color: item.color,
                transform: `rotate(${item.rotate}deg)`,
                boxShadow: '3px 4px 10px rgba(0,0,0,0.35)',
                border: '1px solid rgba(0,0,0,0.1)',
              }}
            >
              {item.letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Subtitle — Torn paper strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: 'rgba(255,248,231,0.92)',
            padding: '12px 32px',
            fontFamily: "'Special Elite', cursive",
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            color: '#2C1810',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            boxShadow: '2px 3px 10px rgba(0,0,0,0.2)',
            transform: 'rotate(0.5deg)',
            borderTop: '2px dashed rgba(0,0,0,0.08)',
            borderBottom: '2px dashed rgba(0,0,0,0.08)',
            marginBottom: '1.5rem',
          }}
        >
          Reimagining Institutions Through AI
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            maxWidth: '700px',
            margin: '0 auto 1.5rem',
            fontSize: '1.15rem',
            color: 'rgba(255,248,231,0.85)',
            fontFamily: "'Patrick Hand', cursive",
            lineHeight: 1.7,
            textShadow: '0 1px 4px rgba(0,0,0,0.4)',
          }}
        >
          A 24-hour AI-focused hackathon bringing together Tunisia's brightest minds.
          Join us at UCAR on April 25–26, 2026 for an unforgettable experience of innovation,
          collaboration, and — dare we say — that's what she said moments.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <a href="#register" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontFamily: "'Special Elite', cursive",
            fontSize: '1.1rem',
            letterSpacing: '1px',
            padding: '14px 32px',
            background: '#D32F2F',
            color: '#fff',
            textDecoration: 'none',
            boxShadow: '3px 4px 12px rgba(0,0,0,0.4)',
            transform: 'rotate(-1deg)',
            transition: 'all 0.3s ease',
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) translateY(-3px)';
              e.currentTarget.style.boxShadow = '4px 6px 18px rgba(0,0,0,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(-1deg)';
              e.currentTarget.style.boxShadow = '3px 4px 12px rgba(0,0,0,0.4)';
            }}
          >
            Register Now <ArrowRight size={20} />
          </a>
          <a href="#about" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontFamily: "'Special Elite', cursive",
            fontSize: '1.1rem',
            letterSpacing: '1px',
            padding: '14px 32px',
            background: 'rgba(255,248,231,0.9)',
            color: '#2C1810',
            textDecoration: 'none',
            border: '2px solid rgba(168,136,74,0.6)',
            boxShadow: '2px 3px 8px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FFE066';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,248,231,0.9)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Learn More
          </a>
        </motion.div>

        {/* Stats Row — Sticky notes */}
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[
            { icon: <Calendar size={24} />, label: "Date", value: "April 25-26", bg: '#FFE066', rotate: -3 },
            { icon: <Users size={24} />, label: "Teams", value: "3-5 Members", bg: '#7EC8E3', rotate: 2 },
            { icon: <Clock size={24} />, label: "Duration", value: "24 Hours", bg: '#FFB3BA', rotate: -1 }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 30, rotate: stat.rotate * 2 }}
              animate={{ opacity: 1, y: 0, rotate: stat.rotate }}
              transition={{ duration: 0.5, delay: 0.9 + (idx * 0.15), type: "spring" }}
              style={{
                background: stat.bg,
                padding: '20px 28px',
                minWidth: '140px',
                transform: `rotate(${stat.rotate}deg)`,
                boxShadow: '2px 3px 10px rgba(0,0,0,0.25)',
                position: 'relative',
                color: '#2C1810',
              }}
            >
              {/* Pushpin */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: idx === 0 ? '#D32F2F' : idx === 1 ? '#1976D2' : '#388E3C',
                boxShadow: 'inset -2px -2px 3px rgba(0,0,0,0.25), 1px 2px 3px rgba(0,0,0,0.3)',
                zIndex: 2,
              }} />
              {stat.icon}
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontFamily: "'Special Elite', cursive" }}>{stat.label}</span>
              <strong style={{ fontSize: '1.1rem', fontFamily: "'Special Elite', cursive" }}>{stat.value}</strong>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
