import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Who can participate?",
    answer: "Hack4Ucar is open to all university students, recent graduates, and AI enthusiasts. You must apply as a team of 3 to 5 people.",
    emoji: "👥"
  },
  {
    question: "Is there a registration fee?",
    answer: "No, Hack4Ucar is completely free for all accepted participants. Food, drinks, and workspaces will be provided during the event.",
    emoji: "💰"
  },
  {
    question: "What is the theme of this edition?",
    answer: "This edition's theme is The Office — we're bringing the Scranton branch energy to UCAR! We're focusing on AI-powered solutions for UCAR's digital transformation across 30+ institutions.",
    emoji: "📺"
  },
  {
    question: "Do I need to be an expert in AI?",
    answer: "No! While AI is a core component, teams also need UI/UX designers, backend devs, and product thinkers. Mentors will be there to help — like a Jim to your Dwight.",
    emoji: "🤖"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="section">
      <div className="container max-w-3xl">
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
            📂 FILE CABINET
          </div>
          <h2 className="heading-lg mb-4">Frequently Asked <span style={{ color: '#D32F2F' }}>Questions</span></h2>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                variants={itemVariants}
                key={idx}
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                whileHover={{ x: 4 }}
                style={{
                  background: '#FFF8E7',
                  padding: '0',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  boxShadow: isOpen ? '3px 4px 12px rgba(0,0,0,0.12)' : '1px 2px 6px rgba(0,0,0,0.06)',
                  borderLeft: isOpen ? '4px solid #D32F2F' : '4px solid transparent',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
                layout
              >
                {/* Tab — like a file folder tab */}
                {isOpen && (
                  <div style={{
                    position: 'absolute',
                    top: 0, right: 0,
                    background: '#D32F2F',
                    color: '#fff',
                    padding: '2px 10px',
                    fontFamily: "'Special Elite', cursive",
                    fontSize: '0.65rem',
                    letterSpacing: '2px',
                  }}>
                    OPEN
                  </div>
                )}

                <div className="flex justify-between items-center" style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.2rem' }}>{faq.emoji}</span>
                    <h3 style={{
                      fontFamily: "'Special Elite', cursive",
                      fontSize: '1.05rem',
                      color: '#2C1810',
                    }}>
                      {faq.question}
                    </h3>
                  </div>
                  {isOpen
                    ? <ChevronUp size={20} color="#D32F2F" />
                    : <ChevronDown size={20} color="#A8884A" />
                  }
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      style={{ overflow: 'hidden' }}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div style={{
                        padding: '0 1.5rem 1.5rem',
                        fontFamily: "'Patrick Hand', cursive",
                        fontSize: '1.05rem',
                        color: 'var(--text-body)',
                        lineHeight: 1.6,
                        borderTop: '1px dashed rgba(0,0,0,0.1)',
                        paddingTop: '1rem',
                      }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
