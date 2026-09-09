import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Briefcase, Users, Handshake, MessageSquare } from 'lucide-react';
import Banner from '../components/Banner';
import { companyData } from '../data/companyData';

export default function Home() {
  const { info, stats, services, clients } = companyData;

  return (
    <div>
      {/* 1. Fullscreen Banner Slider */}
      <Banner />

      {/* 2. Welcome & Quick Stats Section */}
      <section className="section-pad" style={{ background: 'var(--white)', position: 'relative' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: 'clamp(24px, 3.5vw, 48px)',
            alignItems: 'center',
            marginBottom: 'clamp(36px, 5vw, 56px)'
          }} className="home-intro-grid">
            
            <div>
              <div className="section-badge">
                <Award size={13} />
                <span>One Stop Consultant and Service Management</span>
              </div>
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 12px 0' }}>
                Partner Strategis untuk <span className="text-gold">Kesuksesan Bisnis</span> Anda
              </h2>
              <p style={{ fontSize: 'clamp(0.86rem, 1.1vw, 0.96rem)', color: 'var(--slate-600)', lineHeight: 1.65, marginBottom: '20px' }}>
                {info.aboutBrief}
              </p>
              
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Link to="/layanan" className="btn btn-navy btn-md">
                  <span>Lihat Layanan Utama</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/who-we-are" className="btn btn-outline-navy btn-md">
                  <span>Tentang PT. SMB</span>
                </Link>
              </div>
            </div>

            {/* Right Overview Card */}
            <div style={{
              background: 'var(--navy-900)',
              color: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(18px, 2.5vw, 28px)',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}>
              <div style={{
                color: 'var(--gold-400)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '8px'
              }}>
                Identitas Resmi
              </div>
              <h3 style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.25rem)', color: 'var(--white)', marginBottom: '4px' }}>
                {info.legalName}
              </h3>
              <div style={{ fontSize: '0.78rem', color: 'var(--gold-300)', fontWeight: 600, marginBottom: '12px' }}>
                {info.tagline}
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--slate-300)', lineHeight: 1.55, marginBottom: '14px' }}>
                Menyediakan ekosistem terpadu satu pintu mulai dari pendampingan sistem, IT solutions, pest control, hingga risk insurance.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.78rem', color: 'var(--slate-300)' }}>
                  <CheckCircle2 size={14} color="var(--gold-400)" />
                  <span>Terintegrasi (One Stop Service)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.78rem', color: 'var(--slate-300)' }}>
                  <CheckCircle2 size={14} color="var(--gold-400)" />
                  <span>Profesional & Bersertifikasi</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.78rem', color: 'var(--slate-300)' }}>
                  <CheckCircle2 size={14} color="var(--gold-400)" />
                  <span>Efisiensi Biaya & Waktu</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.78rem', color: 'var(--gold-400)' }}>
                  <CheckCircle2 size={14} color="var(--gold-400)" />
                  <span>Berorientasi Hasil Nyata</span>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(12px, 1.8vw, 20px)'
          }} className="stats-grid">
            {stats.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--slate-50)',
                  border: '1px solid var(--slate-200)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'clamp(14px, 2vw, 18px)'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.4rem, 2vw, 1.85rem)',
                  fontWeight: 800,
                  color: 'var(--navy-900)',
                  lineHeight: 1,
                  marginBottom: '4px'
                }}>
                  {item.value}
                </div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  color: 'var(--gold-700)',
                  marginBottom: '2px'
                }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.76rem', color: 'var(--slate-600)', lineHeight: 1.4 }}>
                  {item.description}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Layanan Utama PT. SMB (4 Layanan dari Brosur Resmi) */}
      <section className="section-pad" style={{ background: 'var(--slate-50)', borderTop: '1px solid var(--slate-200)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Briefcase size={13} />
              <span>Layanan Terpadu</span>
            </div>
            <h2 className="section-title">
              Layanan Utama <span className="text-gold">PT. SMB</span>
            </h2>
            <p className="section-subtitle">
              Solusi satu pintu yang dirancang untuk mendukung kepatuhan, keandalan sistem digital, kebersihan higienis, dan mitigasi risiko bisnis.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '18px',
            marginBottom: '32px'
          }}>
            {services.mainServices.map((item) => (
              <div
                key={item.id}
                className="card-white"
                style={{
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid var(--slate-200)',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--white)'
                }}
              >
                <div style={{
                  background: item.id === 'pest-control' ? '#1A4D2E' : item.id === 'risk-insurance' ? '#A35709' : 'var(--navy-900)',
                  padding: '10px 14px',
                  color: 'var(--white)'
                }}>
                  <span style={{ fontSize: '0.84rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    {item.title}
                  </span>
                </div>
                <div style={{ height: '140px', overflow: 'hidden', background: 'var(--navy-950)' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--slate-600)', lineHeight: 1.5, marginBottom: '12px' }}>
                    {item.shortDesc}
                  </p>
                  <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid var(--slate-100)', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {item.highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: 'var(--slate-700)' }}>
                        <CheckCircle2 size={12} color="var(--gold-600)" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/layanan"
                    style={{
                      marginTop: '12px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      color: 'var(--navy-900)',
                      fontWeight: 700,
                      fontSize: '0.78rem'
                    }}
                  >
                    <span>Detail Layanan</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/layanan" className="btn btn-navy btn-md">
              <span>Lihat Seluruh Solusi Terintegrasi</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Quick CTA Banner */}
      <section style={{
        background: 'var(--navy-900)',
        color: 'var(--white)',
        padding: 'clamp(32px, 4vw, 56px) 0',
        borderTop: '2px solid var(--gold-500)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.75rem)', color: 'var(--white)', marginBottom: '6px' }}>
              Siap Memulai Kemitraan atau Membutuhkan Konsultasi?
            </h3>
            <p style={{ color: 'var(--slate-300)', fontSize: '0.84rem', margin: 0 }}>
              Hubungi spesialis kami sekarang untuk mendiskusikan kebutuhan rantai pasok dan pengembangan bisnis Anda.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link to="/kontak" className="btn btn-gold btn-md">
              <span>Hubungi Kami</span>
              <ArrowRight size={14} />
            </Link>
            <a
              href={`https://wa.me/${info.whatsapp}?text=Halo%20SMB%20Sembada,%20saya%20tertarik%20dengan%20layanan%20Anda.`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-gold btn-md"
            >
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .home-intro-grid { grid-template-columns: 1fr !important; }
          .pillars-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
