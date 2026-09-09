import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, CheckCircle2, Award } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Hero() {
  const { info, stats } = companyData;

  return (
    <section id="beranda" style={{
      position: 'relative',
      background: 'var(--navy-950)',
      color: 'var(--white)',
      paddingTop: 'clamp(44px, 6vw, 80px)',
      paddingBottom: 'clamp(52px, 7vw, 92px)',
      borderBottom: '1px solid rgba(229, 168, 59, 0.2)'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Breadcrumb & Sub-badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px', flexWrap: 'wrap' }}>
          <Link to="/" style={{ fontSize: '0.76rem', color: 'var(--gold-400)', fontWeight: 600, letterSpacing: '0.04em' }}>
            BERANDA
          </Link>
          <span style={{ color: 'var(--slate-apple-dark)', fontSize: '0.76rem' }}>/</span>
          <span style={{ fontSize: '0.76rem', color: 'var(--slate-300)', fontWeight: 500 }}>
            TENTANG KAMI (WHO WE ARE)
          </span>
        </div>

        {/* Main Grid: Headline & Corporate Overview Card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: 'clamp(24px, 4vw, 52px)',
          alignItems: 'center',
          marginBottom: 'clamp(36px, 5vw, 64px)'
        }} className="hero-grid">
          
          <div>
            <div className="section-badge dark" style={{ marginBottom: '12px' }}>
              <Award size={13} color="var(--gold-400)" />
              <span>One Stop Consultant and Service Management</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
              color: 'var(--white)',
              lineHeight: 1.12,
              marginBottom: '16px',
              fontWeight: 650,
              letterSpacing: '-0.035em'
            }}>
              Solusi Terintegrasi & Profesional untuk <span className="text-gold">Kesuksesan Bisnis</span> Anda.
            </h1>

            <p style={{
              fontSize: 'clamp(0.92rem, 1.1vw, 1.02rem)',
              color: 'var(--slate-300)',
              lineHeight: 1.54,
              letterSpacing: '-0.01em',
              marginBottom: '26px',
              maxWidth: '640px'
            }}>
              {info.aboutBrief}
            </p>

            {/* Action Buttons: Apple Pill Shaped */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/layanan" className="btn btn-gold btn-md">
                <span>Jelajahi Layanan Utama</span>
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
            <div style={{ display: 'flex', gap: '20px', marginTop: '24px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--slate-300)', fontSize: '0.82rem' }}>
                <CheckCircle2 size={14} color="var(--gold-400)" />
                <span>Pendampingan SPPG & IT Solutions</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--slate-300)', fontSize: '0.82rem' }}>
                <CheckCircle2 size={14} color="var(--gold-400)" />
                <span>Pest Control & Risk Insurance</span>
              </div>
            </div>
          </div>

          {/* Right Card: Apple Squircle Overview Card */}
          <div>
            <div style={{
              background: 'var(--navy-900)',
              border: '1px solid rgba(229, 168, 59, 0.3)',
              borderRadius: 'var(--radius-card)',
              padding: 'clamp(22px, 3vw, 34px)',
              position: 'relative'
            }}>
              <div style={{
                color: 'var(--gold-400)',
                fontSize: '0.74rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}>
                SEKILAS PT. SMB
              </div>

              <h3 style={{ color: 'var(--white)', fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)', marginBottom: '10px', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                One Stop Consultant and Service Management
              </h3>

              <p style={{ color: 'var(--slate-300)', fontSize: '0.86rem', lineHeight: 1.54, marginBottom: '18px' }}>
                Menghadirkan efisiensi biaya & waktu, kepatuhan bersertifikasi, dan kepastian hasil nyata untuk kesuksesan mitra bisnis kami di seluruh Indonesia.
              </p>

              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: 'var(--radius-md)',
                padding: '12px 14px',
                marginBottom: '18px'
              }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--gold-400)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '3px' }}>
                  Slogan Kami
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--slate-200)', lineHeight: 1.45, fontStyle: 'italic' }}>
                  "{info.slogan}"
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--slate-400)', textTransform: 'uppercase' }}>Entitas Resmi</div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--white)', fontWeight: 600 }}>{info.legalName}</div>
                </div>
                <Link to="/pengurus" className="link-apple">
                  <span>Pengurus SMB</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Apple Squircle Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'clamp(12px, 1.8vw, 20px)'
        }} className="stats-grid">
          {stats.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--navy-900)',
                border: '1px solid rgba(229, 168, 59, 0.25)',
                borderRadius: 'var(--radius-card-sm)',
                padding: 'clamp(18px, 2.2vw, 26px)',
                position: 'relative'
              }}
            >
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)',
                fontWeight: 650,
                color: 'var(--gold-400)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                marginBottom: '6px'
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
