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
              <span>Mitra Terpercaya Solusi Distributor & Jasa Konsultasi</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(1.35rem, 3.4vw, 3.2rem)',
              color: 'var(--white)',
              lineHeight: 1.2,
              marginBottom: '16px',
              fontWeight: 800
            }}>
              Membangun Solusi Rantai Pasok & <span className="text-gold">Akselerasi Bisnis</span> Anda.
            </h1>

            <p style={{
              fontSize: 'clamp(0.86rem, 1.15vw, 1.05rem)',
              color: 'var(--slate-300)',
              lineHeight: 1.6,
              marginBottom: '26px',
              maxWidth: '680px'
            }}>
              {info.aboutBrief}
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/layanan" className="btn btn-gold btn-lg">
                <span>Jelajahi Layanan Kami</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href={`https://wa.me/${info.whatsapp}?text=Halo%20SMB%20Sembada,%20saya%20tertarik%20untuk%20mengetahui%20layanan%20distributor%20dan%20konsultasi%20bisnis.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-gold btn-lg"
              >
                <MessageCircle size={15} />
                <span>Mulai Percakapan</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div style={{ display: 'flex', gap: '18px', marginTop: '24px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--slate-300)', fontSize: '0.82rem' }}>
                <CheckCircle2 size={15} color="var(--gold-400)" />
                <span>Pasokan Bahan & Komoditas Terjamin</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--slate-300)', fontSize: '0.82rem' }}>
                <CheckCircle2 size={15} color="var(--gold-400)" />
                <span>Konsultan Senior Berpengalaman</span>
              </div>
            </div>
          </div>

          {/* Right Card: Flat Corporate Overview Card */}
          <div>
            <div style={{
              background: 'var(--navy-850)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(20px, 3vw, 32px)',
              position: 'relative'
            }}>
              <div style={{
                display: 'inline-block',
                padding: '3px 8px',
                background: 'rgba(212, 175, 55, 0.12)',
                color: 'var(--gold-300)',
                borderRadius: '4px',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                marginBottom: '12px'
              }}>
                SEKILAS SEMBADA (SMB)
              </div>

              <h3 style={{ color: 'var(--white)', fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)', marginBottom: '10px', lineHeight: 1.3 }}>
                Keunggulan Distribusi & Kebijakan Strategis yang Terintegrasi
              </h3>

              <p style={{ color: 'var(--slate-300)', fontSize: '0.86rem', lineHeight: 1.55, marginBottom: '16px' }}>
                Sebagai mitra yang mengedepankan efisiensi operasional dan pertumbuhan jangka panjang, SMB menghadirkan layanan menyeluruh dari pengadaan komoditas hingga pendampingan tata kelola perusahaan.
              </p>

              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: 'var(--radius-md)',
                padding: '12px 14px',
                borderLeft: '3px solid var(--gold-500)',
                marginBottom: '16px'
              }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--gold-400)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
                  Fokus Kami
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--slate-200)', lineHeight: 1.45 }}>
                  "Memberikan inspirasi & solusi praktis manajemen bisnis serta rantai pasok tangguh untuk menggapai target korporasi."
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
