import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Registration = () => {
  return (
    <section id="register" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div
          className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{
            background: '#FFE066',
            padding: '3.5rem 2.5rem',
            position: 'relative',
            boxShadow: '4px 6px 20px rgba(0,0,0,0.15)',
            transform: 'rotate(-1deg)',
          }}
        >
          {/* Pushpin */}
          <div style={{
            position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)',
            width: '24px', height: '24px', borderRadius: '50%', background: '#D32F2F',
            boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.25), 2px 3px 5px rgba(0,0,0,0.2)',
            zIndex: 3,
          }} />

          {/* Tape strips */}
          <div style={{
            position: 'absolute', top: '-6px', left: '20px',
            width: '60px', height: '20px',
            background: 'rgba(255,255,220,0.6)',
            border: '1px solid rgba(200,180,120,0.3)',
            transform: 'rotate(-15deg)',
          }} />
          <div style={{
            position: 'absolute', top: '-4px', right: '25px',
            width: '55px', height: '20px',
            background: 'rgba(255,255,220,0.6)',
            border: '1px solid rgba(200,180,120,0.3)',
            transform: 'rotate(12deg)',
          }} />

          <h2 style={{
            fontFamily: "'Special Elite', cursive",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#2C1810',
            marginBottom: '1rem',
          }}>
            Ready to Join the Team? 📋
          </h2>

          <p style={{
            fontFamily: "'Patrick Hand', cursive",
            fontSize: '1.2rem',
            color: 'rgba(44,24,16,0.7)',
            maxWidth: '550px',
            marginBottom: '2rem',
            lineHeight: 1.6,
          }}>
            Join the crew to build smart, scalable, and user-friendly systems.
            Transform UCAR into a digitally connected ecosystem.
            Limited spots available — don't be a Toby!
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLScKkf90BmCwrQGrnHPisT8P_51OSXa3Gd8EcS1GTuk-A1w6Cw/viewform?usp=sharing&ouid=105425620181375594268"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '4px 6px 16px rgba(0,0,0,0.25)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: "'Special Elite', cursive",
                fontSize: '1.2rem',
                letterSpacing: '1px',
                padding: '14px 36px',
                background: '#D32F2F',
                color: '#fff',
                textDecoration: 'none',
                boxShadow: '3px 4px 10px rgba(0,0,0,0.2)',
              }}
            >
              Register Now <ExternalLink size={20} />
            </motion.a>

            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd9dFk-THIpGay1O48RDx3o4OjuGSdnU1f_q4fiOI1YDj54JQ/viewform?usp=sharing&ouid=105425620181375594268"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '4px 6px 16px rgba(0,0,0,0.25)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: "'Special Elite', cursive",
                fontSize: '1.2rem',
                letterSpacing: '1px',
                padding: '14px 36px',
                background: '#1976D2',
                color: '#fff',
                textDecoration: 'none',
                boxShadow: '3px 4px 10px rgba(0,0,0,0.2)',
              }}
            >
              Become an Ambassador <ExternalLink size={20} />
            </motion.a>
          </div>

          <p style={{
            fontFamily: "'Patrick Hand', cursive",
            color: 'rgba(44,24,16,0.5)',
            fontSize: '0.95rem',
            marginTop: '1.5rem',
          }}>
            Applications close on April 23, 2026.
          </p>

          {/* Folded corner */}
          <div style={{
            position: 'absolute', bottom: 0, right: 0,
            width: '30px', height: '30px',
            background: 'linear-gradient(135deg, #FFE066 50%, rgba(0,0,0,0.08) 50%)',
          }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Registration;
