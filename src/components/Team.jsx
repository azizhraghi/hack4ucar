import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: "Med Aziz Hraghi", role: "Chairman", img: "/images/aziz.jpeg", social: { linkedin: "#" } },
  { name: "Firas Bennani", role: "Vice Chairman", img: "/images/firas.jpeg", social: { linkedin: "#" } },
  { name: "Malek Sayeb", role: "Treasurer", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop", social: { linkedin: "#" } },
  { name: "May Jomni", role: "General Secretary", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop", social: { linkedin: "#" } },
  { name: "Yessmine Abbes", role: "Human Resources", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", social: { linkedin: "#" } },
  { name: "Elaa Elfahem", role: "Training Manager", img: "/images/elaa.jpeg", social: { linkedin: "#" } },
  { name: "Fares Karoui", role: "Training Manager", img: "/images/fares.jpeg", social: { linkedin: "#" } },
  { name: "Wassila Ben Slimane", role: "Event Manager Assistant", img: "/images/wassila.jpeg", social: { linkedin: "#" } },
  { name: "Yosr Garma", role: "Marketing Manager", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop", social: { linkedin: "#" } },
  { name: "Manar Dhahri", role: "Event Manager Assistant", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop", social: { linkedin: "#" } }
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, []);

  const handleDragStart = (e) => {
    setIsDragging(true);
    dragStartX.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    setIsAutoPlaying(false);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    const endX = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX.current - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const getPositionStyles = (index) => {
    let offset = index - currentIndex;
    const half = Math.floor(teamMembers.length / 2);
    if (offset > half) offset -= teamMembers.length;
    else if (offset < -half) offset += teamMembers.length;

    const absOffset = Math.abs(offset);
    const isVisible = absOffset <= 3;
    const translateX = offset * 210;
    const rotate = offset * 6;
    const scale = 1 - (absOffset * 0.08);

    return {
      position: 'absolute',
      left: '50%',
      top: '45%',
      transform: `translate(calc(-50% + ${translateX}px), -50%) rotate(${rotate}deg) scale(${scale})`,
      zIndex: 50 - absOffset,
      opacity: isVisible ? (1 - absOffset * 0.25) : 0,
      pointerEvents: absOffset === 0 ? 'auto' : 'none',
      visibility: isVisible ? 'visible' : 'hidden',
      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      filter: absOffset === 0 ? 'none' : `blur(${absOffset * 0.5}px)`,
    };
  };

  return (
    <section id="team" className="section" style={{ overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          style={{ zIndex: 10 }}
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
            👔 THE STAFF
          </div>
          <h2 className="heading-lg mb-4">The <span style={{ color: '#D32F2F' }}>Team</span></h2>
          <p style={{
            maxWidth: '600px', margin: '0 auto',
            fontFamily: "'Patrick Hand', cursive",
            fontSize: '1.1rem', color: 'var(--text-body)',
          }}>
            The people making Hack4Ucar a reality.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => isDragging && handleDragEnd({ clientX: dragStartX.current })}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          style={{
            position: 'relative',
            height: '460px',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            perspective: '1200px',
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
          }}
        >
          {teamMembers.map((member, index) => {
            const styles = getPositionStyles(index);
            const isCenter = index === currentIndex;
            return (
              <div
                key={index}
                style={{
                  ...styles,
                  width: '240px',
                  background: '#FFF8E7',
                  padding: '12px 12px 0',
                  boxShadow: isCenter
                    ? '4px 8px 24px rgba(0,0,0,0.2)'
                    : '2px 4px 12px rgba(0,0,0,0.1)',
                }}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 8000);
                }}
              >
                {/* Pushpin */}
                <div style={{
                  position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)',
                  width: '18px', height: '18px', borderRadius: '50%',
                  background: isCenter ? '#D32F2F' : '#A8884A',
                  boxShadow: 'inset -2px -2px 3px rgba(0,0,0,0.25), 1px 2px 3px rgba(0,0,0,0.15)',
                  zIndex: 3,
                }} />

                {/* Photo — Polaroid style */}
                <div style={{
                  width: '100%', height: '260px',
                  overflow: 'hidden',
                  background: '#eee',
                }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    draggable={false}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Name area — handwritten polaroid caption */}
                <div style={{
                  padding: '12px 4px 16px',
                  textAlign: 'center',
                }}>
                  <h3 style={{
                    fontFamily: "'Patrick Hand', cursive",
                    fontSize: '1.15rem',
                    color: '#2C1810',
                    marginBottom: '2px',
                  }}>
                    {member.name}
                  </h3>
                  <p style={{
                    fontFamily: "'Special Elite', cursive",
                    fontSize: '0.75rem',
                    color: '#D32F2F',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                  }}>
                    {member.role}
                  </p>

                  {isCenter && (
                    <a
                      href={member.social.linkedin}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center', justifyContent: 'center',
                        color: '#5C3D2E',
                        background: 'rgba(90,60,40,0.08)',
                        padding: '6px',
                        borderRadius: '50%',
                        marginTop: '6px',
                        transition: 'all 0.3s ease',
                        border: '1px solid rgba(90,60,40,0.15)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#D32F2F';
                        e.currentTarget.style.color = '#fff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(90,60,40,0.08)';
                        e.currentTarget.style.color = '#5C3D2E';
                      }}
                    >
                      <Linkedin size={14} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 mt-4 relative" style={{ zIndex: 10 }}>
          <button
            onClick={prevSlide}
            style={{
              width: '48px', height: '48px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: '#FFF8E7',
              border: '2px solid var(--cork-dark)',
              color: '#5C3D2E', cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '2px 2px 6px rgba(0,0,0,0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FFE066';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FFF8E7';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Dot indicators as pushpins */}
          <div className="flex items-center gap-2">
            {teamMembers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 8000);
                }}
                style={{
                  width: currentIndex === idx ? '22px' : '10px',
                  height: '10px',
                  borderRadius: currentIndex === idx ? '5px' : '50%',
                  background: currentIndex === idx ? '#D32F2F' : '#A8884A',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  boxShadow: currentIndex === idx ? '0 0 6px rgba(211,47,47,0.4)' : 'none',
                }}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            style={{
              width: '48px', height: '48px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: '#FFF8E7',
              border: '2px solid var(--cork-dark)',
              color: '#5C3D2E', cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '2px 2px 6px rgba(0,0,0,0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FFE066';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FFF8E7';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <p className="text-center mt-4" style={{
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontFamily: "'Special Elite', cursive",
        }}>
          {currentIndex + 1} / {teamMembers.length}
        </p>
      </div>
    </section>
  );
};

export default Team;
