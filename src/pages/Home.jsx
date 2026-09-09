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
            gap: 'clamp(28px, 4vw, 56px)',
            alignItems: 'center',
            marginBottom: 'clamp(48px, 6vw, 72px)'
          }} className="home-intro-grid">
            
            <div>
              <div className="section-badge">
                <Award size={14} />
                <span>Selamat Datang di SMB Sembada</span>
              </div>
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 14px 0' }}>
                Mitra Strategis Kebutuhan Distributor & <span className="text-gold">Konsultasi Bisnis</span>
              </h2>
              <p style={{ fontSize: 'clamp(0.86rem, 1.2vw, 0.98rem)', color: 'var(--slate-600)', lineHeight: 1.65, marginBottom: '20px' }}>
                {info.aboutBrief}
              </p>
              
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link to="/who-we-are" className="btn btn-navy btn-md">
                  <span>Pelajari Tentang Kami</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/layanan" className="btn btn-outline-navy btn-md">
                  <span>Lihat Seluruh Solusi</span>
                </Link>
              </div>
            </div>

            {/* Right Overview Card */}
            <div style={{
              background: 'var(--navy-900)',
              color: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(20px, 3vw, 32px)',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}>
              <span style={{
                display: 'inline-block',
                padding: '2px 8px',
                background: 'rgba(212, 175, 55, 0.15)',
                color: 'var(--gold-400)',
                borderRadius: '4px',
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '10px'
              }}>
                Identitas Resmi
              </span>
              <h3 style={{ fontSize: 'clamp(1.15rem, 1.8vw, 1.35rem)', color: 'var(--white)', marginBottom: '10px' }}>
                {info.legalName}
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--slate-300)', lineHeight: 1.55, marginBottom: '16px' }}>
                Berfokus memberikan kepastian rantai pasok untuk mitra distributor dan mengawal transformasi bisnis korporasi di 38 provinsi di Indonesia.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--slate-300)' }}>
                  <CheckCircle2 size={15} color="var(--gold-400)" />
                  <span>Jaringan Pasokan & Pergudangan Modern WMS</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--slate-300)' }}>
                  <CheckCircle2 size={15} color="var(--gold-400)" />
                  <span>Dewan Konsultan Senior & Praktisi Industri</span>
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
                  padding: 'clamp(14px, 2vw, 20px)'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.55rem, 2.4vw, 2.2rem)',
                  fontWeight: 800,
                  color: 'var(--navy-900)',
                  lineHeight: 1,
                  marginBottom: '4px'
                }}>
                  {item.value}
                </div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: 'var(--gold-700)',
                  marginBottom: '3px'
                }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--slate-600)', lineHeight: 1.4 }}>
                  {item.description}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Core Pillars Preview */}
      <section className="section-pad" style={{ background: 'var(--slate-50)', borderTop: '1px solid var(--slate-200)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Briefcase size={14} />
              <span>Dua Pilar Spesialisasi</span>
            </div>
            <h2 className="section-title">
              Layanan Utama <span className="text-gold">SMB Sembada</span>
            </h2>
            <p className="section-subtitle">
              Solusi komprehensif mulai dari pemenuhan fisik rantai pasok hingga advis strategis tingkat dewan direksi.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(20px, 3vw, 32px)',
            marginBottom: '40px'
          }} className="pillars-grid">
            
            {/* Pilar 1: Distributor */}
            <div className="card-white" style={{ padding: 'clamp(18px, 2.5vw, 30px)', borderTop: '3px solid var(--gold-500)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--gold-700)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {services.distributor.badge}
              </span>
              <h3 style={{ fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)', color: 'var(--navy-900)', margin: '6px 0 10px 0' }}>
                {services.distributor.title}
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--slate-600)', lineHeight: 1.55, marginBottom: '16px' }}>
                {services.distributor.description}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                {services.distributor.items.slice(0, 3).map((item) => (
                  <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.82rem', color: 'var(--slate-700)' }}>
                    <CheckCircle2 size={14} color="var(--gold-600)" />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
              <Link to="/layanan" className="btn btn-outline-navy btn-sm" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                <span>Rincian Kebutuhan Distributor</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Pilar 2: Consulting */}
            <div className="card-white" style={{ padding: 'clamp(18px, 2.5vw, 30px)', borderTop: '3px solid var(--navy-800)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--navy-600)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {services.consulting.badge}
              </span>
              <h3 style={{ fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)', color: 'var(--navy-900)', margin: '6px 0 10px 0' }}>
                {services.consulting.title}
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--slate-600)', lineHeight: 1.55, marginBottom: '16px' }}>
                {services.consulting.description}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                {services.consulting.items.slice(0, 3).map((item) => (
                  <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.82rem', color: 'var(--slate-700)' }}>
                    <CheckCircle2 size={14} color="var(--navy-600)" />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
              <Link to="/layanan" className="btn btn-outline-navy btn-sm" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                <span>Rincian Jasa Konsultasi</span>
                <ArrowRight size={13} />
              </Link>
            </div>

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
