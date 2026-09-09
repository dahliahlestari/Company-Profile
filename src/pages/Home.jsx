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
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 16px 0' }}>
                Mitra Strategis Kebutuhan Distributor & <span className="text-gold">Konsultasi Bisnis</span>
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--slate-600)', lineHeight: 1.7, marginBottom: '24px' }}>
                {info.aboutBrief}
              </p>
              
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/who-we-are" className="btn btn-navy">
                  <span>Pelajari Tentang Kami</span>
                  <ArrowRight size={15} />
                </Link>
                <Link to="/layanan" className="btn btn-outline-navy">
                  <span>Lihat Seluruh Solusi</span>
                </Link>
              </div>
            </div>

            {/* Right Overview Card */}
            <div style={{
              background: 'var(--navy-900)',
              color: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(24px, 3.5vw, 36px)',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}>
              <span style={{
                display: 'inline-block',
                padding: '3px 10px',
                background: 'rgba(212, 175, 55, 0.15)',
                color: 'var(--gold-400)',
                borderRadius: '4px',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '14px'
              }}>
                Identitas Resmi
              </span>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--white)', marginBottom: '12px' }}>
                {info.legalName}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--slate-300)', lineHeight: 1.6, marginBottom: '20px' }}>
                Berfokus memberikan kepastian rantai pasok untuk mitra distributor dan mengawal transformasi bisnis korporasi di 38 provinsi di Indonesia.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--slate-300)' }}>
                  <CheckCircle2 size={16} color="var(--gold-400)" />
                  <span>Jaringan Pasokan & Pergudangan Modern WMS</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--slate-300)' }}>
                  <CheckCircle2 size={16} color="var(--gold-400)" />
                  <span>Dewan Konsultan Senior & Praktisi Industri</span>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(14px, 2vw, 24px)'
          }} className="stats-grid">
            {stats.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--slate-50)',
                  border: '1px solid var(--slate-200)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'clamp(18px, 2.5vw, 24px)'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 3vw, 2.6rem)',
                  fontWeight: 800,
                  color: 'var(--navy-900)',
                  lineHeight: 1,
                  marginBottom: '6px'
                }}>
                  {item.value}
                </div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.96rem',
                  fontWeight: 700,
                  color: 'var(--gold-700)',
                  marginBottom: '4px'
                }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--slate-600)', lineHeight: 1.4 }}>
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
            <div className="card-white" style={{ padding: 'clamp(24px, 3.5vw, 36px)', borderTop: '3px solid var(--gold-500)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--gold-700)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {services.distributor.badge}
              </span>
              <h3 style={{ fontSize: '1.45rem', color: 'var(--navy-900)', margin: '8px 0 12px 0' }}>
                {services.distributor.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: '20px' }}>
                {services.distributor.description}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {services.distributor.items.slice(0, 3).map((item) => (
                  <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--slate-700)' }}>
                    <CheckCircle2 size={15} color="var(--gold-600)" />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
              <Link to="/layanan" className="btn btn-outline-navy btn-sm" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                <span>Rincian Kebutuhan Distributor</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Pilar 2: Consulting */}
            <div className="card-white" style={{ padding: 'clamp(24px, 3.5vw, 36px)', borderTop: '3px solid var(--navy-800)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--navy-600)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {services.consulting.badge}
              </span>
              <h3 style={{ fontSize: '1.45rem', color: 'var(--navy-900)', margin: '8px 0 12px 0' }}>
                {services.consulting.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: '20px' }}>
                {services.consulting.description}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {services.consulting.items.slice(0, 3).map((item) => (
                  <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--slate-700)' }}>
                    <CheckCircle2 size={15} color="var(--navy-600)" />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
              <Link to="/layanan" className="btn btn-outline-navy btn-sm" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                <span>Rincian Jasa Konsultasi</span>
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Quick CTA Banner */}
      <section style={{
        background: 'var(--navy-900)',
        color: 'var(--white)',
        padding: 'clamp(40px, 5vw, 64px) 0',
        borderTop: '2px solid var(--gold-500)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--white)', marginBottom: '8px' }}>
              Siap Memulai Kemitraan atau Membutuhkan Konsultasi?
            </h3>
            <p style={{ color: 'var(--slate-300)', fontSize: '0.98rem', margin: 0 }}>
              Hubungi spesialis kami sekarang untuk mendiskusikan kebutuhan rantai pasok dan pengembangan bisnis Anda.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/kontak" className="btn btn-gold btn-lg">
              <span>Hubungi Kami</span>
              <ArrowRight size={15} />
            </Link>
            <a
              href={`https://wa.me/${info.whatsapp}?text=Halo%20SMB%20Sembada,%20saya%20tertarik%20dengan%20layanan%20Anda.`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-gold btn-lg"
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
