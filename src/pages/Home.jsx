import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Layers, Users, Monitor, ShieldCheck, ShieldAlert, BookOpen, Calendar, Clock } from 'lucide-react';
import Banner from '../components/Banner';
import { companyData } from '../data/companyData';
import { getStoredArticles } from '../data/blogData';

export default function Home() {
  const { info, stats, mainServices } = companyData;
  const [recentArticles, setRecentArticles] = useState([]);

  useEffect(() => {
    const list = getStoredArticles();
    setRecentArticles(list.slice(0, 3));
  }, []);

  const getServiceIcon = (id) => {
    switch (id) {
      case 'sppg':
        return <Users size={18} color="var(--gold-600)" />;
      case 'it-solutions':
        return <Monitor size={18} color="var(--navy-700)" />;
      case 'pest-control':
        return <ShieldCheck size={18} color="var(--gold-600)" />;
      case 'risk-insurance':
        return <ShieldAlert size={18} color="var(--navy-700)" />;
      default:
        return <Layers size={18} color="var(--gold-600)" />;
    }
  };

  return (
    <div>
      {/* 1. Fullscreen Banner Slider */}
      <Banner />

      {/* 2. Welcome & Quick Overview Section */}
      <section className="section-pad" style={{ background: 'var(--white)', position: 'relative' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: 'clamp(24px, 3.5vw, 48px)',
            alignItems: 'center',
            marginBottom: 'clamp(36px, 4.5vw, 56px)'
          }} className="home-intro-grid">
            
            <div>
              {/* Tagline / Eyebrow (Pure Text, No Border) */}
              <div className="section-badge">
                <Award size={13} />
                <span>One Stop Consultant & Service Management</span>
              </div>
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 12px 0' }}>
                Solusi Terintegrasi & Profesional untuk <span className="text-gold">Kesuksesan Bisnis</span>
              </h2>
              <p style={{ fontSize: 'clamp(0.84rem, 1vw, 0.94rem)', color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: '20px' }}>
                {info.aboutBrief}
              </p>
              
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Link to="/who-we-are" className="btn btn-navy btn-md">
                  <span>Tentang PT. SMB</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/layanan" className="btn btn-outline-navy btn-md">
                  <span>Lihat 4 Layanan Utama</span>
                </Link>
              </div>
            </div>

            {/* Right Overview Card */}
            <div style={{
              background: 'var(--navy-900)',
              color: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(18px, 2.5vw, 28px)',
              border: '1px solid rgba(229, 168, 59, 0.3)'
            }}>
              {/* Tagline without border */}
              <div style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--gold-400)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '8px'
              }}>
                PROFIL RESMI PERUSAHAAN
              </div>
              <h3 style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)', color: 'var(--white)', marginBottom: '4px' }}>
                {info.legalName}
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--gold-300)', fontWeight: 600, marginBottom: '14px' }}>
                {info.tagline}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {info.pillars.map((pillar, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--slate-200)' }}>
                    <CheckCircle2 size={14} color="var(--gold-400)" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* 4 Keunggulan / Quick Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(10px, 1.5vw, 18px)'
          }} className="stats-grid">
            {stats.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--slate-50)',
                  border: '1px solid var(--slate-200)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'clamp(14px, 1.8vw, 18px)'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.35rem, 2vw, 1.85rem)',
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
                  marginBottom: '3px'
                }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.76rem', color: 'var(--slate-600)', lineHeight: 1.35 }}>
                  {item.description}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. 4 Layanan Utama PT. SMB (From Flyer) */}
      <section className="section-pad" style={{ background: 'var(--slate-50)', borderTop: '1px solid var(--slate-200)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Layers size={13} />
              <span>Layanan Utama PT. SMB</span>
            </div>
            <h2 className="section-title">
              Empat Solusi Unggulan <span className="text-gold">PT. SMB</span>
            </h2>
            <p className="section-subtitle">
              Satu pintu layanan terpadu untuk pendampingan SPPG, IT solutions, pest control, dan risk insurance bagi akselerasi bisnis Anda.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'clamp(16px, 2vw, 22px)',
            marginBottom: '32px'
          }}>
            {mainServices.map((service, idx) => (
              <div
                key={service.id}
                className="card-white"
                style={{
                  padding: 'clamp(16px, 2vw, 22px)',
                  borderTop: idx % 2 === 0 ? '3px solid var(--gold-500)' : '3px solid var(--navy-800)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Thumbnail Image */}
                <div style={{ position: 'relative', height: '150px', overflow: 'hidden', borderRadius: 'var(--radius-md)', marginBottom: '14px', background: 'var(--navy-950)' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '8px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    background: 'var(--white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-flat-sm)'
                  }}>
                    {getServiceIcon(service.id)}
                  </div>
                </div>

                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--gold-700)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>
                  {service.badge}
                </span>

                <h3 style={{ fontSize: '1.05rem', color: 'var(--navy-900)', margin: '4px 0 8px 0', lineHeight: 1.3 }}>
                  {service.title}
                </h3>

                <p style={{ fontSize: '0.82rem', color: 'var(--slate-600)', lineHeight: 1.5, marginBottom: '14px' }}>
                  {service.shortDesc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '16px' }}>
                  {service.highlights.map((h, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--slate-700)' }}>
                      <CheckCircle2 size={13} color={idx % 2 === 0 ? 'var(--gold-600)' : 'var(--navy-600)'} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <Link to="/layanan" className="btn btn-outline-navy btn-sm" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                  <span>Pelajari Selengkapnya</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/layanan" className="btn btn-navy btn-md">
              <span>Jelajahi Rincian Semua Layanan</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Berita & Wawasan Terbaru PT. SMB */}
      {recentArticles.length > 0 && (
        <section className="section-pad" style={{ background: 'var(--white)', borderTop: '1px solid var(--slate-200)' }}>
          <div className="container">
            <div className="section-header">
              <div className="section-badge">
                <BookOpen size={13} />
                <span>Publikasi & Artikel</span>
              </div>
              <h2 className="section-title">
                Wawasan & <span className="text-gold">Berita Terbaru</span>
              </h2>
              <p className="section-subtitle">
                Ikuti perkembangan terkini, edukasi manajerial, dan analisis strategis dari tim profesional PT. SMB.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(16px, 2vw, 24px)',
              marginBottom: '32px'
            }}>
              {recentArticles.map((article) => (
                <article
                  key={article.id}
                  className="card-white"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                  }}
                >
                  <Link
                    to={`/blog/${article.id}`}
                    style={{ position: 'relative', height: '160px', overflow: 'hidden', background: 'var(--navy-950)', display: 'block' }}
                  >
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.25s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.025)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </Link>

                  <div style={{ padding: 'clamp(14px, 2vw, 18px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: 'var(--gold-700)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '4px'
                    }}>
                      {article.category}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.72rem', color: 'var(--slate-500)', marginBottom: '6px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                        <Calendar size={11} color="var(--gold-700)" />
                        <span>{article.date}</span>
                      </span>
                      <span>•</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                        <Clock size={11} />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <Link to={`/blog/${article.id}`} style={{ textDecoration: 'none' }}>
                      <h3 
                        style={{
                          fontSize: '0.98rem',
                          color: 'var(--navy-900)',
                          lineHeight: 1.35,
                          marginBottom: '6px',
                          transition: 'color 0.15s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-700)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--navy-900)'}
                      >
                        {article.title}
                      </h3>
                    </Link>

                    <p style={{ fontSize: '0.8rem', color: 'var(--slate-600)', lineHeight: 1.45, marginBottom: '14px' }}>
                      {article.excerpt}
                    </p>

                    <Link
                      to={`/blog/${article.id}`}
                      style={{
                        marginTop: 'auto',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: 'var(--navy-900)',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-700)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--navy-900)'}
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link to="/blog" className="btn btn-navy btn-md">
                <span>Lihat Semua Artikel & Berita</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 5. Quick CTA Banner */}
      <section style={{
        background: 'var(--navy-900)',
        color: 'var(--white)',
        padding: 'clamp(28px, 3.5vw, 48px) 0',
        borderTop: '2px solid var(--gold-500)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '18px'
        }}>
          <div>
            <h3 style={{ fontSize: 'clamp(1.15rem, 1.8vw, 1.6rem)', color: 'var(--white)', marginBottom: '4px' }}>
              Partner Strategis Untuk Kesuksesan Bisnis Anda
            </h3>
            <p style={{ color: 'var(--slate-300)', fontSize: '0.82rem', margin: 0 }}>
              Hubungi tim spesialis PT. SMB sekarang untuk mendiskusikan kebutuhan operasional dan konsultasi manajemen bisnis Anda.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link to="/kontak" className="btn btn-gold btn-md">
              <span>Hubungi Kami</span>
              <ArrowRight size={14} />
            </Link>
            <a
              href={`https://wa.me/${info.whatsapp}?text=Halo%20PT.%20SMB,%20saya%20tertarik%20dengan%20layanan%20Anda.`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-gold btn-md"
            >
              <span>Chat WhatsApp ({info.whatsappDisplay})</span>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .home-intro-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
