import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';
import { motion } from 'framer-motion';

const prizesData = [
  {
    icon: <Trophy size={40} />,
    title: "THE MICHAEL SCOTT AWARD",
    subtitle: "1st Place",
    color: "#EAB308",
    bg: "#FFE066",
    rotate: -2,
    quote: "\"Would I rather be feared or loved? Both. I want people to be afraid of how much they love me.\"",
    reward: "2,000 DT"
  },
  {
    icon: <Award size={40} />,
    title: "THE DWIGHT SCHRUTE AWARD",
    subtitle: "2nd Place",
    color: "#78716C",
    bg: "#E8E0D4",
    rotate: 1.5,
    quote: "\"Whenever I'm about to do something, I think, 'Would an idiot do that?' And if they would, I do not do that thing.\"",
    reward: "1,500 DT"
  },
  {
    icon: <Medal size={40} />,
    title: "THE JIM HALPERT AWARD",
    subtitle: "3rd Place",
    color: "#B45309",
    bg: "#FFD7A8",
    rotate: -1,
    quote: "\"Right now, this is just a job. If I advance any higher in this company, then this would be my career.\"",
    reward: "1,000 DT"
  }
];

const Prizes = () => {
  return (
    <section id="prizes" className="section">
      <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <motion.div
          className="text-center mb-12"
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
            🏆 THE DUNDIES
          </div>
          <h2 className="heading-lg mb-4">
            The <span style={{ color: '#D32F2F' }}>Dundie</span> Awards
          </h2>
          <p style={{ color: 'var(--text-body)', fontFamily: "'Patrick Hand', cursive", fontSize: '1.1rem' }}>
            Stellar rewards for the best hackers at the Scranton branch.
          </p>

          {/* Prize Pool Tag */}
          <motion.div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              background: '#FFE066',
              fontFamily: "'Special Elite', cursive",
              fontSize: '1rem',
              color: '#2C1810',
              marginTop: '1rem',
              transform: 'rotate(-1deg)',
              boxShadow: '2px 3px 6px rgba(0,0,0,0.12)',
            }}
            whileHover={{ rotate: 0, scale: 1.03 }}
          >
            <Trophy size={18} />
            Total Prize Pool: <strong>4,500 DT</strong>
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-8">
          {prizesData.map((prize, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, type: "spring" }}
              whileHover={{ rotate: 0, y: -4, boxShadow: '4px 8px 24px rgba(0,0,0,0.18)' }}
              style={{
                background: prize.bg,
                padding: '2rem',
                position: 'relative',
                transform: `rotate(${prize.rotate}deg)`,
                boxShadow: '2px 4px 12px rgba(0,0,0,0.1)',
                overflow: 'hidden',
              }}
            >
              {/* Pushpin */}
              <div style={{
                position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)',
                width: '22px', height: '22px', borderRadius: '50%',
                background: prize.color,
                boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.25), 1px 2px 4px rgba(0,0,0,0.2)',
                zIndex: 2,
              }} />

              {/* Big faded number */}
              <div style={{
                position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                fontSize: '12rem', fontWeight: 900, color: prize.color,
                opacity: 0.06, lineHeight: 1, pointerEvents: 'none',
                fontFamily: "'Special Elite', cursive",
              }}>
                {idx + 1}
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Icon + Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <div style={{ color: prize.color }}>{prize.icon}</div>
                  <div>
                    <div style={{
                      fontFamily: "'Special Elite', cursive",
                      fontSize: '0.7rem',
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      color: 'rgba(44,24,16,0.5)',
                    }}>
                      {prize.subtitle}
                    </div>
                    <h3 style={{
                      fontFamily: "'Special Elite', cursive",
                      fontSize: '1.3rem',
                      color: '#2C1810',
                    }}>
                      {prize.title}
                    </h3>
                  </div>
                </div>

                {/* Quote */}
                <p style={{
                  fontFamily: "'Patrick Hand', cursive",
                  fontSize: '0.95rem',
                  color: 'rgba(44,24,16,0.6)',
                  fontStyle: 'italic',
                  marginBottom: '1rem',
                  lineHeight: 1.5,
                }}>
                  {prize.quote}
                </p>

                {/* TBA Reward */}
                <div style={{
                  background: 'rgba(255,255,255,0.5)',
                  padding: '10px 20px',
                  textAlign: 'center',
                  fontFamily: "'Special Elite', cursive",
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  letterSpacing: '3px',
                  color: '#2C1810',
                  border: '1px dashed rgba(44,24,16,0.2)',
                }}>
                  {prize.reward}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
