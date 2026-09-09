import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { companyData } from '../data/companyData';

const SocialIcon = ({ type, size = 16 }) => {
  if (type === 'linkedin') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    );
  }
  if (type === 'instagram') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    );
  }
  if (type === 'youtube') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
};

export default function Footer() {
  const { info, mainServices, visionMission } = companyData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'var(--navy-950)',
      color: 'var(--slate-300)',
      borderTop: '2px solid var(--gold-500)',
      paddingTop: 'clamp(40px, 5vw, 64px)',
      paddingBottom: '28px',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Main Footer Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr 1.1fr 1.2fr',
          gap: 'clamp(20px, 3vw, 36px)',
          marginBottom: 'clamp(32px, 4vw, 48px)'
        }} className="footer-grid">

          {/* Col 1: Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                background: 'var(--navy-900)',
                border: '2px solid var(--gold-500)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 800, color: 'var(--gold-400)' }}>
                  SMB
                </span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--white)' }}>
                  PT. SMB
                </span>
                <div style={{ fontSize: '0.66rem', color: 'var(--gold-400)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  {info.tagline}
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.84rem', color: 'var(--slate-400)', lineHeight: 1.55, marginBottom: '16px' }}>
              One Stop Consultant and Service Management terpercaya di Indonesia dengan layanan terintegrasi, profesional, dan berorientasi hasil.
            </p>

            <div style={{ display: 'flex', gap: '8px' }}>
              <a
                href={info.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-400)',
                  border: '1px solid rgba(212, 175, 55, 0.2)'
                }}
                aria-label="LinkedIn SMB"
              >
                <SocialIcon type="linkedin" size={14} />
              </a>
              <a
                href={info.socials.instagram}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-400)',
                  border: '1px solid rgba(212, 175, 55, 0.2)'
                }}
                aria-label="Instagram SMB"
              >
                <SocialIcon type="instagram" size={14} />
              </a>
              <a
                href={info.socials.youtube}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-400)',
                  border: '1px solid rgba(212, 175, 55, 0.2)'
                }}
                aria-label="YouTube SMB"
              >
                <SocialIcon type="youtube" size={14} />
              </a>
              <a
                href={info.socials.facebook}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-400)',
                  border: '1px solid rgba(212, 175, 55, 0.2)'
                }}
                aria-label="Facebook SMB"
              >
                <SocialIcon type="facebook" size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Layanan Utama (Flyer) */}
          <div>
            <h4 style={{ fontSize: '0.88rem', color: 'var(--white)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Layanan Utama
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0 }}>
              {mainServices.map((item) => (
                <li key={item.id}>
                  <Link
                    to="/layanan"
                    style={{ fontSize: '0.82rem', color: 'var(--slate-400)', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--gold-400)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--slate-400)'}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Keunggulan Kami (Flyer) */}
          <div>
            <h4 style={{ fontSize: '0.88rem', color: 'var(--white)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Keunggulan Kami
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0 }}>
              {visionMission.keunggulanKami.map((item, idx) => (
                <li key={idx} style={{ fontSize: '0.82rem', color: 'var(--slate-400)', display: 'flex', alignItems: 'baseline', gap: '5px' }}>
                  <span style={{ color: 'var(--gold-400)', fontWeight: 700 }}>•</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Kontak (Flyer) */}
          <div>
            <h4 style={{ fontSize: '0.88rem', color: 'var(--white)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Kantor & Kontak
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.82rem', color: 'var(--slate-400)' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <MapPin size={14} color="var(--gold-400)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{info.address.city}, {info.address.country}</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Phone size={14} color="var(--gold-400)" style={{ flexShrink: 0 }} />
                <span>{info.phone}</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Mail size={14} color="var(--gold-400)" style={{ flexShrink: 0 }} />
                <span style={{ color: 'var(--gold-300)' }}>{info.email}</span>
              </div>
              <div style={{ marginTop: '4px', fontSize: '0.78rem', color: 'var(--gold-400)', fontStyle: 'italic' }}>
                "{info.slogan}"
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '18px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.8rem',
          color: 'var(--slate-500)'
        }}>
          <div>
            Copyright © 2026. <strong>{info.legalName}</strong>. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link to="/who-we-are" style={{ color: 'var(--slate-400)' }}>Tentang Kami</Link>
            <Link to="/layanan" style={{ color: 'var(--slate-400)' }}>Layanan</Link>
            <Link to="/pengurus" style={{ color: 'var(--slate-400)' }}>Pengurus</Link>
            <Link to="/klien" style={{ color: 'var(--slate-400)' }}>Klien</Link>
            <Link to="/blog" style={{ color: 'var(--slate-400)' }}>Blog & Berita</Link>
            <Link to="/kontak" style={{ color: 'var(--slate-400)' }}>Kontak</Link>
            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                background: 'rgba(212, 175, 55, 0.15)',
                color: 'var(--gold-400)',
                padding: '4px 10px',
                borderRadius: '4px',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              <span>Ke Atas</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
