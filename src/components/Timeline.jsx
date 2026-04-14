import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const day1Events = [
  { time: "[TBA]", title: "Clearance Verification", desc: "Scan ID badges and proceed to holding area" },
  { time: "[TBA]", title: "Urgent Operation Briefing", desc: "Immediate objective declassification" },
  { time: "[TBA]", title: "Rations: Déjeuner", desc: "Mandatory midday refueling protocol" },
  { time: "[TBA]", title: "Commence Operation Alpha", desc: "Begin execution of primary directives" },
  { time: "[TBA]", title: "Caffeine Recharge", desc: "Coffee break & strategic alignment" },
  { time: "[TBA]", title: "Rations: Dinner", desc: "Evening subsistence distribution" },
  { time: "[TBA]", title: "Overnight Lockdown", desc: "Continuous operations until further notice. Mentorship protocol active." }
];

const day2Events = [
  { time: "[TBA]", title: "Rations: Breakfast", desc: "Morning subsistence and status reporting" },
  { time: "[TBA]", title: "Cease All Operations", desc: "Prepare final [CLASSIFIED] asset reports" },
  { time: "[TBA]", title: "Debriefing Protocol", desc: "Present findings to high command" },
  { time: "[TBA]", title: "Mission Conclusion", desc: "Declassification of results and extraction" }
];

const TimelineCard = ({ dayNum, dateTitle, events }) => (
  <motion.div
    style={{
      background: '#FFF8E7',
      padding: '2rem 2.5rem',
      marginBottom: '2.5rem',
      position: 'relative',
      boxShadow: '2px 4px 12px rgba(0,0,0,0.1)',
    }}
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
  >
    {/* Pushpin */}
    <div style={{
      position: 'absolute', top: '-10px', left: '40px',
      width: '22px', height: '22px', borderRadius: '50%',
      background: dayNum === 1 ? '#D32F2F' : '#1976D2',
      boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.25), 1px 2px 4px rgba(0,0,0,0.2)',
      zIndex: 2,
    }} />

    {/* Day header */}
    <div className="flex items-center gap-4 mb-8">
      <div style={{
        width: '48px', height: '48px', borderRadius: '50%',
        backgroundColor: dayNum === 1 ? 'rgba(211,47,47,0.12)' : 'rgba(25,118,210,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: `2px solid ${dayNum === 1 ? '#D32F2F' : '#1976D2'}`,
      }}>
        <Star size={22} color={dayNum === 1 ? '#D32F2F' : '#1976D2'} />
      </div>
      <div>
        <h3 style={{
          fontFamily: "'Special Elite', cursive",
          fontSize: '1.5rem',
          color: dayNum === 1 ? '#D32F2F' : '#1976D2',
        }}>Day {dayNum}</h3>
        <p style={{
          fontFamily: "'Patrick Hand', cursive",
          fontSize: '1rem',
          color: 'var(--text-muted)',
        }}>{dateTitle}</p>
      </div>
    </div>

    {/* Events with vertical track line */}
    <div style={{ position: 'relative', paddingLeft: '28px' }}>
      {/* Vertical Track Line */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10px', bottom: '10px', left: '0',
          width: '3px',
          background: dayNum === 1
            ? 'linear-gradient(180deg, #D32F2F 0%, rgba(211,47,47,0.2) 100%)'
            : 'linear-gradient(180deg, #1976D2 0%, rgba(25,118,210,0.2) 100%)',
          transformOrigin: 'top',
          borderRadius: '2px',
        }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Animated glowing dot traveling down the line */}
      <motion.div
        style={{
          position: 'absolute',
          left: '-5px',
          width: '13px', height: '13px',
          borderRadius: '50%',
          backgroundColor: dayNum === 1 ? '#D32F2F' : '#1976D2',
          boxShadow: `0 0 10px ${dayNum === 1 ? '#D32F2F' : '#1976D2'}`,
          zIndex: 3,
        }}
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      <div className="flex flex-col gap-6">
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2px' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + (idx * 0.1) }}
          >
            {/* Track Dot */}
            <motion.div
              style={{
                position: 'absolute',
                left: '-34px', top: '8px',
                width: '14px', height: '14px',
                borderRadius: '50%',
                backgroundColor: dayNum === 1 ? '#D32F2F' : '#1976D2',
                border: '3px solid #FFF8E7',
                boxShadow: `0 0 6px ${dayNum === 1 ? 'rgba(211,47,47,0.4)' : 'rgba(25,118,210,0.4)'}`,
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + (idx * 0.1), type: "spring" }}
            />

            {/* Time badge */}
            <div style={{
              fontFamily: "'Special Elite', cursive",
              fontSize: '0.85rem',
              color: dayNum === 1 ? '#D32F2F' : '#1976D2',
              fontWeight: 600,
              letterSpacing: '1px',
            }}>
              {event.time}
            </div>
            <div style={{
              fontFamily: "'Special Elite', cursive",
              fontSize: '1.1rem',
              color: '#2C1810',
            }}>
              {event.title}
            </div>
            <div style={{
              fontFamily: "'Patrick Hand', cursive",
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
            }}>
              {event.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Timeline = () => {
  return (
    <section id="timeline" className="section">
      <div className="container max-w-4xl mx-auto">
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
            📅 CLASSIFIED ITINERARY
          </div>
          <h2 className="heading-lg mb-4">Operation <span style={{ color: '#D32F2F' }}>Timeline</span></h2>
          <p style={{ color: 'var(--text-body)', fontFamily: "'Patrick Hand', cursive", fontSize: '1.1rem' }}>
            Full timeline is classified. Expected operations will proceed as follows.
          </p>
        </motion.div>

        {/* Vertical layout with global track line */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Main Global Vertical Line */}
          <motion.div
            style={{
              position: 'absolute',
              top: '0', bottom: '0', left: '0',
              width: '3px',
              background: 'linear-gradient(180deg, rgba(168,136,74,0.4) 0%, rgba(168,136,74,0.08) 100%)',
              transformOrigin: 'top',
              borderRadius: '2px',
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut" }}
          />

          <TimelineCard dayNum={1} dateTitle="April 25, 2026" events={day1Events} />
          <TimelineCard dayNum={2} dateTitle="April 26, 2026" events={day2Events} />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
