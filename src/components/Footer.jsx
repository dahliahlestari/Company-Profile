import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, MessageCircle, Globe } from 'lucide-react';
import { companyData } from '../data/companyData';

const SocialIcon = ({ type, size = 15 }) => {
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
      background: 'var(--apple-dark)',
      color: 'var(--slate-apple-dark)',
      fontSize: '0.78rem',
      lineHeight: 1.5,
      paddingTop: 'clamp(44px, 5.5vw, 68px)',
      paddingBottom: '32px',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div className="container">

        {/* Apple Style Footnotes (Numbered superscripts) */}
        <div style={{
          paddingBottom: '24px',
          marginBottom: '28px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          fontSize: '0.74rem',
          color: 'var(--slate-apple-dark)',
          lineHeight: 1.55
        }}>
          <div>
            1. Seluruh layanan pendampingan audit, sertifikasi, dan standardisasi disesuaikan dengan regulasi otoritas berwenang Republik Indonesia serta kebutuhan spesifik industri mitra.
          </div>
          <div>
            2. Angka capaian 1.450+ mitra dan efisiensi hingga 40% didasarkan pada kompilasi data implementasi sistem terpadu PT. SMB dalam rentang operasional profesional korporat.
          </div>
          <div>
            3. Seluruh konsultasi dan pelaksanaan layanan teknis dikoordinasikan secara terpusat oleh entitas resmi PT. Sembada Makmur Bersama.
          </div>
        </div>

        {/* Apple Directory 5-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 'clamp(18px, 2.5vw, 32px)',
          marginBottom: '36px'
        }} className="apple-footer-directory">

          {/* Col 1: Lini Layanan */}
          <div>
            <div style={{ color: 'var(--white)', fontWeight: 650, fontSize: '0.8rem', letterSpacing: '-0.01em', marginBottom: '12px' }}>
              Lini Layanan
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0 }}>
              {mainServices.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/layanan"
                    style={{ color: 'var(--slate-apple-dark)', textDecoration: 'none', transition: 'color 0.15s ease' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--white)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--slate-apple-dark)'}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Tentang PT. SMB */}
          <div>
            <div style={{ color: 'var(--white)', fontWeight: 650, fontSize: '0.8rem', letterSpacing: '-0.01em', marginBottom: '12px' }}>
              Tentang PT. SMB
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0 }}>
              <li>
                <Link to="/who-we-are" style={{ color: 'var(--slate-apple-dark)', textDecoration: 'none' }}>
                  Profil Korporat
                </Link>
              </li>
              <li>
                <Link to="/who-we-are" style={{ color: 'var(--slate-apple-dark)', textDecoration: 'none' }}>
                  Visi & Misi
                </Link>
              </li>
              <li>
                <Link to="/pengurus" style={{ color: 'var(--slate-apple-dark)', textDecoration: 'none' }}>
                  Dewan Pengurus
                </Link>
              </li>
              <li>
                <Link to="/who-we-are" style={{ color: 'var(--slate-apple-dark)', textDecoration: 'none' }}>
                  Budaya Kerja & Nilai
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Kemitraan & Ekosistem */}
          <div>
            <div style={{ color: 'var(--white)', fontWeight: 650, fontSize: '0.8rem', letterSpacing: '-0.01em', marginBottom: '12px' }}>
              Ekosistem Kemitraan
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0 }}>
              <li>
                <Link to="/klien" style={{ color: 'var(--slate-apple-dark)', textDecoration: 'none' }}>
                  Daftar Klien & Mitra
                </Link>
              </li>
              <li>
                <Link to="/klien" style={{ color: 'var(--slate-apple-dark)', textDecoration: 'none' }}>
                  Testimoni Industri
                </Link>
              </li>
              <li>
                <Link to="/blog" style={{ color: 'var(--slate-apple-dark)', textDecoration: 'none' }}>
                  Newsroom & Wawasan
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Nilai Utama */}
          <div>
            <div style={{ color: 'var(--white)', fontWeight: 650, fontSize: '0.8rem', letterSpacing: '-0.01em', marginBottom: '12px' }}>
              Nilai & Prinsip
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0 }}>
              {visionMission.workingSpirit.map((item) => (
                <li key={item.id} style={{ color: 'var(--slate-apple-dark)' }}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Kontak & Concierge */}
          <div>
            <div style={{ color: 'var(--white)', fontWeight: 650, fontSize: '0.8rem', letterSpacing: '-0.01em', marginBottom: '12px' }}>
              Saluran Resmi
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                href={`https://wa.me/${info.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--gold-400)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}
              >
                <MessageCircle size={13} />
                <span>{info.phone}</span>
              </a>
              <a
                href={`mailto:${info.email}`}
                style={{ color: 'var(--slate-apple-dark)', textDecoration: 'none' }}
              >
                {info.email}
              </a>
              <div style={{ color: 'var(--slate-apple-subtle)', fontSize: '0.72rem', marginTop: '4px' }}>
                {info.address.city}, {info.address.country}
              </div>

              {/* Social Icons */}
              <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                <a
                  href={info.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--slate-300)', border: '1px solid rgba(255,255,255,0.1)' }}
                  aria-label="LinkedIn"
                >
                  <SocialIcon type="linkedin" size={13} />
                </a>
                <a
                  href={info.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--slate-300)', border: '1px solid rgba(255,255,255,0.1)' }}
                  aria-label="Instagram"
                >
                  <SocialIcon type="instagram" size={13} />
                </a>
                <a
                  href={info.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--slate-300)', border: '1px solid rgba(255,255,255,0.1)' }}
                  aria-label="YouTube"
                >
                  <SocialIcon type="youtube" size={13} />
                </a>
                <a
                  href={info.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--slate-300)', border: '1px solid rgba(255,255,255,0.1)' }}
                  aria-label="Facebook"
                >
                  <SocialIcon type="facebook" size={13} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Apple Copyright & Country Ribbon */}
        <div style={{
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '14px',
          fontSize: '0.74rem'
        }}>
          <div>
            Copyright © {new Date().getFullYear()} {info.legalName}. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/who-we-are" style={{ color: 'var(--slate-apple-dark)', textDecoration: 'none' }}>Tentang Kami</Link>
            <span style={{ opacity: 0.3 }}>|</span>
            <Link to="/layanan" style={{ color: 'var(--slate-apple-dark)', textDecoration: 'none' }}>Layanan</Link>
            <span style={{ opacity: 0.3 }}>|</span>
            <Link to="/klien" style={{ color: 'var(--slate-apple-dark)', textDecoration: 'none' }}>Klien</Link>
            <span style={{ opacity: 0.3 }}>|</span>
            <Link to="/blog" style={{ color: 'var(--slate-apple-dark)', textDecoration: 'none' }}>Newsroom</Link>
            <span style={{ opacity: 0.3 }}>|</span>
            <Link to="/kontak" style={{ color: 'var(--slate-apple-dark)', textDecoration: 'none' }}>Kontak</Link>
            <span style={{ opacity: 0.3 }}>|</span>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'var(--slate-300)' }}>
              <Globe size={12} color="var(--gold-400)" />
              <span>Indonesia (Bahasa Indonesia)</span>
            </div>

            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(255, 255, 255, 0.08)',
                color: 'var(--white)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                fontSize: '0.72rem',
                cursor: 'pointer',
                marginLeft: '6px'
              }}
              aria-label="Kembali ke atas"
            >
              <span>Ke Atas</span>
              <ArrowUp size={11} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .apple-footer-directory {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 540px) {
          .apple-footer-directory {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
