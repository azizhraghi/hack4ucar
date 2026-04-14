import React, { useState } from 'react';
import { Coffee, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'ABOUT' },
  { href: '#tracks', label: 'TRACKS' },
  { href: '#timeline', label: 'TIMELINE' },
  { href: '#ambassadors', label: 'AMBASSADORS' },
  { href: '#team', label: 'TEAM' },
  { href: '#sponsors', label: 'SPONSORS' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'linear-gradient(180deg, #5C3D2E 0%, #4A2E1E 100%)',
      borderBottom: '3px solid #3A2010',
      boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
    }}>
      {/* Wood grain texture overlay */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 8px)',
        pointerEvents: 'none',
      }} />

      <div className="container flex justify-between items-center" style={{ height: '70px', position: 'relative', zIndex: 1 }}>
        {/* Logo — Ransom-note style */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Coffee size={22} color="#FFE066" />
          <span style={{
            fontFamily: "'Special Elite', cursive",
            fontSize: '1.4rem',
            color: '#FFF8E7',
            letterSpacing: '2px',
          }}>
            <span style={{ background: '#D32F2F', color: '#fff', padding: '2px 6px', transform: 'rotate(-2deg)', display: 'inline-block' }}>HACK</span>
            <span style={{ background: '#FFE066', color: '#2C1810', padding: '2px 6px', transform: 'rotate(1deg)', display: 'inline-block' }}>4</span>
            <span style={{ background: '#FFF8E7', color: '#2C1810', padding: '2px 6px', transform: 'rotate(-1deg)', display: 'inline-block' }}>UCAR</span>
          </span>
        </a>

        {/* Desktop Links — Manila folder tabs */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Special Elite', cursive",
                fontSize: '0.85rem',
                letterSpacing: '1px',
                padding: '6px 14px',
                color: '#F5E6C8',
                textDecoration: 'none',
                borderBottom: '2px solid transparent',
                transition: 'all 0.3s ease',
                borderRadius: '4px 4px 0 0',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,224,102,0.15)';
                e.currentTarget.style.borderBottomColor = '#FFE066';
                e.currentTarget.style.color = '#FFE066';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderBottomColor = 'transparent';
                e.currentTarget.style.color = '#F5E6C8';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Register button — Sticky note style */}
        <div className="flex items-center gap-4">
          <a href="#register" style={{
            fontFamily: "'Special Elite', cursive",
            fontSize: '0.85rem',
            letterSpacing: '1px',
            padding: '8px 18px',
            background: '#FFE066',
            color: '#2C1810',
            textDecoration: 'none',
            transform: 'rotate(-1deg)',
            boxShadow: '2px 2px 6px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            display: 'inline-block',
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) translateY(-2px)';
              e.currentTarget.style.boxShadow = '3px 4px 10px rgba(0,0,0,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(-1deg)';
              e.currentTarget.style.boxShadow = '2px 2px 6px rgba(0,0,0,0.2)';
            }}
          >
            📋 REGISTER
          </a>

          {/* Mobile menu button */}
          <button
            className="md:flex"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#F5E6C8',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: '#5C3D2E',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '1rem',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                fontFamily: "'Special Elite', cursive",
                fontSize: '1rem',
                padding: '10px 16px',
                color: '#F5E6C8',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
