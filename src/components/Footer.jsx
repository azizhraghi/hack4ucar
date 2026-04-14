import React from 'react';
import { Facebook, Instagram, Linkedin, Music, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #5C3D2E 0%, #3A2010 100%)',
      padding: '2.5rem 0 2rem',
      marginTop: '2rem',
      position: 'relative',
      borderTop: '4px solid #3A2010',
    }}>
      {/* Wood grain texture */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 8px)',
        pointerEvents: 'none',
      }} />

      <div className="container flex flex-col items-center gap-6" style={{ position: 'relative', zIndex: 1 }}>
        {/* Logos */}
        <div className="flex items-center gap-4">
          <img src="/images/acm-enstab-logo.png" alt="ACM ENSTAB" style={{ height: '44px', objectFit: 'contain' }} />
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '1.3rem', fontWeight: 200 }}>×</span>
          <img src="/images/ucar-logo.png" alt="UCAR" style={{ height: '44px', objectFit: 'contain' }} />
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {[
            { icon: <Facebook size={18} />, href: "https://www.facebook.com/acmenstab" },
            { icon: <Instagram size={18} />, href: "https://www.instagram.com/acm_enstab/" },
            { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/acm-ensta-borjcedria" },
            { icon: <Music size={18} />, href: "https://www.tiktok.com/@acm.enstab" },
            { icon: <Mail size={18} />, href: "mailto:acm@enstab.ucar.tn" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', padding: '8px', borderRadius: '50%',
                color: 'rgba(245,230,200,0.5)',
                border: '1px solid rgba(245,230,200,0.15)',
                transition: 'all 0.3s',
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.03)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFE066';
                e.currentTarget.style.borderColor = '#FFE066';
                e.currentTarget.style.background = 'rgba(255,224,102,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(245,230,200,0.5)';
                e.currentTarget.style.borderColor = 'rgba(245,230,200,0.15)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center" style={{
          fontFamily: "'Special Elite', cursive",
          fontSize: '0.8rem',
          color: 'rgba(245,230,200,0.4)',
          letterSpacing: '1px',
          lineHeight: 1.8,
        }}>
          <p>© 2026 Hack4Ucar — Organized by ACM ENSTAB × UCAR</p>
          <p style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '0.85rem', color: 'rgba(245,230,200,0.3)' }}>
            "That's what she said." — Michael Scott
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
