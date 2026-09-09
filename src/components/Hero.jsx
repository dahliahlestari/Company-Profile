import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, CheckCircle2, Award } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Hero() {
  const { info, stats } = companyData;

  return (
    <section id="beranda" style={{
      position: 'relative',
      background: 'var(--navy-900)',
      color: 'var(--white)',
      paddingTop: 'clamp(32px, 4.5vw, 64px)',
      paddingBottom: 'clamp(40px, 5.5vw, 76px)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.25)'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Breadcrumb & Sub-badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          <Link to="/" style={{ fontSize: '0.78rem', color: 'var(--gold-400)', fontWeight: 700, letterSpacing: '0.05em' }}>
            BERANDA
          </Link>
          <span style={{ color: 'var(--slate-500)', fontSize: '0.78rem' }}>/</span>
          <span style={{ fontSize: '0.78rem', color: 'var(--slate-300)', fontWeight: 500 }}>
            TENTANG KAMI (WHO WE ARE)
          </span>
        </div>

        {/* Main Grid: Headline & Corporate Overview Card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: 'clamp(20px, 3.5vw, 48px)',
          alignItems: 'center',
          marginBottom: 'clamp(32px, 4.5vw, 56px)'
        }} className="hero-grid">
          
          <div>
            <div className="section-badge dark">
              <Award size={13} color="var(--gold-400)" />
              <span>One Stop Consultant and Service Management</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(1.3rem, 2.3vw, 2.2rem)',
              color: 'var(--white)',
              lineHeight: 1.22,
              marginBottom: '14px',
              fontWeight: 700,
              letterSpacing: '-0.02em'
            }}>
              Solusi Terintegrasi & Profesional untuk <span className="text-gold">Kesuksesan Bisnis</span> Anda.
            </h1>

            <p style={{
              fontSize: 'clamp(0.84rem, 1vw, 0.94rem)',
              color: 'var(--slate-300)',
              lineHeight: 1.55,
              marginBottom: '22px',
              maxWidth: '660px'
            }}>
              {info.aboutBrief}
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link to="/layanan" className="btn btn-gold btn-md">
                <span>Jelajahi 4 Layanan Utama</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href={`https://wa.me/${info.whatsapp}?text=Halo%20PT.%20SMB,%20saya%20tertarik%20untuk%20berkonsultasi.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-gold btn-md"
              >
                <MessageCircle size={14} />
                <span>Mulai Percakapan</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--slate-300)', fontSize: '0.8rem' }}>
                <CheckCircle2 size={14} color="var(--gold-400)" />
                <span>Pendampingan SPPG & IT Solutions</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--slate-300)', fontSize: '0.8rem' }}>
                <CheckCircle2 size={14} color="var(--gold-400)" />
                <span>Pest Control & Risk Insurance</span>
              </div>
            </div>
          </div>

          {/* Right Card: Flat Corporate Overview Card */}
          <div>
            <div style={{
              background: 'var(--navy-850)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(18px, 2.5vw, 28px)',
              position: 'relative'
            }}>
              <div style={{
                color: 'var(--gold-400)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '8px'
              }}>
                SEKILAS PT. SMB
              </div>

              <h3 style={{ color: 'var(--white)', fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)', marginBottom: '8px', lineHeight: 1.3 }}>
                One Stop Consultant and Service Management
              </h3>

              <p style={{ color: 'var(--slate-300)', fontSize: '0.84rem', lineHeight: 1.55, marginBottom: '14px' }}>
                Menghadirkan efisiensi biaya & waktu, kepatuhan bersertifikasi, dan kepastian hasil nyata untuk kesuksesan mitra bisnis kami di seluruh Indonesia.
              </p>

              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: 'var(--radius-md)',
                padding: '10px 12px',
                borderLeft: '3px solid var(--gold-500)',
                marginBottom: '14px'
              }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--gold-400)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
                  Slogan Kami
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--slate-200)', lineHeight: 1.45, fontStyle: 'italic' }}>
                  "{info.slogan}"
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--slate-400)', textTransform: 'uppercase' }}>Entitas Resmi</div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--white)', fontWeight: 700 }}>{info.legalName}</div>
                </div>
                <Link to="/pengurus" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'var(--gold-400)', fontSize: '0.8rem', fontWeight: 600 }}>
                  <span>Pengurus SMB</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Flat Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'clamp(12px, 1.8vw, 20px)'
        }} className="stats-grid">
          {stats.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--navy-850)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(14px, 2vw, 22px)',
                position: 'relative'
              }}
            >
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.55rem, 2.4vw, 2.4rem)',
                fontWeight: 800,
                color: 'var(--gold-400)',
                lineHeight: 1,
                marginBottom: '5px'
              }}>
                {item.value}
              </div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '3px'
              }}>
                {item.label}
              </div>
              <div style={{
                fontSize: '0.78rem',
                color: 'var(--slate-400)',
                lineHeight: 1.35
              }}>
                {item.description}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
