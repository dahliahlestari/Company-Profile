import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, Award, Layers, Users, Monitor, ShieldCheck, 
  ShieldAlert, BookOpen, Calendar, Clock, Sparkles, MessageCircle, 
  ChevronRight, Building2, TrendingUp, Check
} from 'lucide-react';
import Banner from '../components/Banner';
import { companyData } from '../data/companyData';
import { getStoredArticles } from '../data/blogData';

export default function Home() {
  const { info, stats, mainServices, clients, testimonials } = companyData;
  const [recentArticles, setRecentArticles] = useState([]);
  const [activeTab, setActiveTab] = useState('sppg');

  useEffect(() => {
    const list = getStoredArticles();
    setRecentArticles(list.slice(0, 3));
  }, []);

  const getServiceIcon = (id) => {
    switch (id) {
      case 'sppg':
        return <Users size={20} color="var(--gold-400)" />;
      case 'it-solutions':
        return <Monitor size={20} color="var(--gold-400)" />;
      case 'pest-control':
        return <ShieldCheck size={20} color="var(--gold-400)" />;
      case 'risk-insurance':
        return <ShieldAlert size={20} color="var(--gold-400)" />;
      default:
        return <Layers size={20} color="var(--gold-400)" />;
    }
  };

  const featurePillars = [
    {
      id: 'sppg',
      title: 'Pendampingan SPPG',
      tagline: 'Sistem Pengendalian Mutu & Audit Kepatuhan',
      badge: 'Audit & Compliance',
      description: 'Pendampingan menyeluruh dari perencanaan, audit internal, standardisasi dokumen, hingga perolehan sertifikasi kepatuhan regulasi resmi.',
      metrics: '100% Lulus Audit Sertifikasi',
      features: [
        'Audit Kesiapan Regulasi Nasional & Standar Industri',
        'Penyusunan Standard Operating Procedures (SOP) Terverifikasi',
        'Pelatihan Tim Internal & Pendampingan Uji Kelayakan',
        'Mitigasi Risiko Pelanggaran & Jaminan Kelancaran Legalitas'
      ]
    },
    {
      id: 'it-solutions',
      title: 'IT Solutions',
      tagline: 'Infrastruktur Digital & Otomasi Korporat',
      badge: 'Digital Transformation',
      description: 'Pengembangan software kustom, integrasi sistem enterprise, proteksi siber, dan digitalisasi alur kerja untuk melipatgandakan produktivitas.',
      metrics: 'Otomasi Efisiensi hingga 40%',
      features: [
        'Custom Web & Mobile Enterprise Application',
        'Database Architecture & System Integration',
        'Cybersecurity, Cloud Hosting & Server Maintenance',
        'Dashboard Analisis Bisnis & Pelaporan Real-Time'
      ]
    },
    {
      id: 'pest-control',
      title: 'Pest Control',
      tagline: 'Sanitasi Industri & Proteksi Hama Terpadu',
      badge: 'Sanitation & Hygiene',
      description: 'Metode pengendalian hama ramah lingkungan bersertifikasi untuk menjaga standar higienis fasilitas gudang, pabrik, perhotelan, dan perkantoran.',
      metrics: 'Metode Ramah Lingkungan & Bersertifikat',
      features: [
        'Integrated Pest Management (IPM) Ramah Lingkungan',
        'Termite, Rodent & Flying Insect Eradication',
        'Sertifikasi Kelayakan Sanitasi untuk Audit Industri',
        'Jadwal Monitoring & Treatment Berkala Terjadwal'
      ]
    },
    {
      id: 'risk-insurance',
      title: 'Risk Insurance',
      tagline: 'Proteksi Aset & Manajemen Risiko Finansial',
      badge: 'Asset Protection',
      description: 'Konsultasi komprehensif perlindungan aset strategis, asuransi kerugian bisnis, dan strategi proteksi risiko tak terduga dengan klaim transparan.',
      metrics: 'Keamanan Finansial Terjamin',
      features: [
        'Analisis Kerentanan Risiko Operasional & Finansial',
        'Pemilihan Polis Asuransi Properti, Mesin & Logistik Terbaik',
        'Pendampingan Klaim Cepat, Terbuka & Profesional',
        'Proteksi Kesinambungan Bisnis dari Bencana & Kerugian'
      ]
    }
  ];

  const currentPillar = featurePillars.find(p => p.id === activeTab) || featurePillars[0];

  return (
    <div style={{ background: 'var(--white)', color: 'var(--apple-text-dark)' }}>
      
      {/* 1. Apple Hero Spotlight ("Get the highlights") */}
      <Banner />

      {/* 2. Explore the line-up (Apple Device Comparison Style) */}
      <section id="lineup" className="section-pad" style={{ background: 'var(--apple-gray-bg)', position: 'relative' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="section-badge">
              <Sparkles size={13} />
              <span>Explore the line-up.</span>
            </div>
            <h2 className="section-title">
              Layanan yang Dirancang untuk <span className="text-gold">Performa Tertinggi</span>
            </h2>
            <p className="section-subtitle">
              Pilih pilar solusi manajemen yang paling tepat untuk mengoptimalkan efisiensi, kepatuhan, dan keamanan operasional bisnis Anda.
            </p>
          </div>

          {/* Apple Comparison Card Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(265px, 1fr))',
            gap: 'clamp(18px, 2.2vw, 26px)',
            marginBottom: '40px'
          }}>
            {mainServices.map((service) => (
              <div
                key={service.id}
                className="card-white"
                style={{
                  padding: 'clamp(22px, 2.5vw, 30px)',
                  borderRadius: 'var(--radius-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'var(--white)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  position: 'relative',
                  transition: 'all var(--transition-normal)'
                }}
              >
                {/* Visual Thumbnail */}
                <div style={{
                  position: 'relative',
                  height: '160px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  background: 'var(--apple-dark)'
                }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(7, 19, 34, 0.85)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(229, 168, 59, 0.4)'
                  }}>
                    {getServiceIcon(service.id)}
                  </div>
                </div>

                {/* Eyebrow badge */}
                <div style={{
                  fontSize: '0.72rem',
                  fontWeight: 650,
                  color: 'var(--gold-700)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '6px'
                }}>
                  {service.badge}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 650,
                  color: 'var(--navy-900)',
                  lineHeight: 1.2,
                  marginBottom: '8px',
                  letterSpacing: '-0.025em'
                }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '0.86rem',
                  color: 'var(--slate-apple-light)',
                  lineHeight: 1.5,
                  marginBottom: '20px'
                }}>
                  {service.shortDesc}
                </p>

                {/* Apple Action CTAs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '22px' }}>
                  <Link
                    to="/kontak"
                    className="btn btn-gold"
                    style={{
                      width: '100%',
                      padding: '9px 18px',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      borderRadius: 'var(--radius-pill)',
                      justifyContent: 'center'
                    }}
                  >
                    <span>Konsultasi Layanan</span>
                  </Link>
                  <Link
                    to="/layanan"
                    className="link-apple"
                    style={{ justifyContent: 'center', fontSize: '0.86rem', fontWeight: 500, color: 'var(--navy-900)' }}
                  >
                    <span>Pelajari Lebih Lanjut</span>
                    <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>›</span>
                  </Link>
                </div>

                {/* Specs / Capability List */}
                <div style={{
                  marginTop: 'auto',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  {service.highlights.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8rem', color: 'var(--slate-700)' }}>
                      <Check size={14} color="var(--gold-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ lineHeight: 1.35 }}>{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              to="/layanan"
              className="btn btn-navy btn-md"
              style={{ borderRadius: 'var(--radius-pill)', padding: '12px 28px', fontWeight: 600 }}
            >
              <span>Bandingkan Semua Spesifikasi Layanan</span>
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. Take a closer look (Interactive Selector Showcase) */}
      <section className="section-pad" style={{ background: 'var(--apple-black)', color: 'var(--apple-text-light)', position: 'relative' }}>
        <div className="container">
          
          <div className="section-header" style={{ marginBottom: '36px' }}>
            <div className="section-badge dark">
              <Sparkles size={13} />
              <span>Take a closer look.</span>
            </div>
            <h2 className="section-title light">
              Eksplorasi Mendalam <span className="text-gold">Setiap Solusi</span>
            </h2>
            <p className="section-subtitle light">
              Pelajari arsitektur dan kapabilitas terintegrasi dari setiap divisi operasional PT. SMB.
            </p>
          </div>

          {/* Interactive Segmented Pill Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '36px'
          }}>
            {featurePillars.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                style={{
                  padding: '9px 20px',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.86rem',
                  fontWeight: activeTab === pillar.id ? 650 : 500,
                  color: activeTab === pillar.id ? 'var(--apple-black)' : 'var(--slate-300)',
                  background: activeTab === pillar.id ? 'var(--gold-400)' : 'rgba(255, 255, 255, 0.08)',
                  border: activeTab === pillar.id ? '1px solid var(--gold-400)' : '1px solid rgba(255, 255, 255, 0.12)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {pillar.title}
              </button>
            ))}
          </div>

          {/* Active Detail Showcase Card (Apple Titanium Bento Layout) */}
          <div style={{
            background: 'var(--apple-dark)',
            borderRadius: 'var(--radius-card-lg)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: 'clamp(28px, 4vw, 52px)',
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 'clamp(24px, 4vw, 48px)',
            alignItems: 'center'
          }} className="closer-look-grid">
            
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(229, 168, 59, 0.15)',
                color: 'var(--gold-400)',
                fontSize: '0.74rem',
                fontWeight: 600,
                marginBottom: '14px',
                border: '1px solid rgba(229, 168, 59, 0.3)'
              }}>
                {currentPillar.badge}
              </div>

              <h3 style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                color: 'var(--white)',
                lineHeight: 1.15,
                fontWeight: 700,
                letterSpacing: '-0.03em',
                marginBottom: '8px'
              }}>
                {currentPillar.title}
              </h3>

              <p style={{ fontSize: '1rem', color: 'var(--gold-300)', fontWeight: 600, marginBottom: '16px' }}>
                {currentPillar.tagline}
              </p>

              <p style={{ fontSize: '0.92rem', color: 'var(--slate-apple-dark)', lineHeight: 1.6, marginBottom: '24px' }}>
                {currentPillar.description}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 18px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '26px'
              }}>
                <TrendingUp size={18} color="var(--gold-400)" />
                <span style={{ fontSize: '0.86rem', color: 'var(--white)', fontWeight: 600 }}>
                  Tolok Ukur: <span style={{ color: 'var(--gold-400)' }}>{currentPillar.metrics}</span>
                </span>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Link
                  to="/kontak"
                  className="btn btn-gold"
                  style={{ borderRadius: 'var(--radius-pill)', padding: '11px 24px', fontWeight: 600 }}
                >
                  <span>Konsultasi Divisi Ini</span>
                  <ArrowRight size={14} />
                </Link>
                <a
                  href={`https://wa.me/${info.whatsapp}?text=Halo%20PT.%20SMB,%20saya%20tertarik%20dengan%20${encodeURIComponent(currentPillar.title)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="link-apple"
                  style={{ fontSize: '0.94rem' }}
                >
                  <MessageCircle size={15} />
                  <span>Diskusi Cepat WhatsApp</span>
                  <span>›</span>
                </a>
              </div>
            </div>

            {/* Right Checklist Box */}
            <div style={{
              background: 'var(--apple-card-dark)',
              border: '1px solid rgba(229, 168, 59, 0.25)',
              borderRadius: 'var(--radius-card)',
              padding: 'clamp(22px, 3vw, 34px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}>
              <div style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                color: 'var(--gold-400)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '4px'
              }}>
                Ruang Lingkup & Jaminan
              </div>

              {currentPillar.features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'rgba(229, 168, 59, 0.15)',
                    color: 'var(--gold-400)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <Check size={13} />
                  </div>
                  <span style={{ fontSize: '0.86rem', color: 'var(--slate-200)', lineHeight: 1.45 }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 4. Why PT. SMB (Apple Bento Grid) */}
      <section id="why-smb" className="section-pad" style={{ background: 'var(--white)', position: 'relative' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="section-badge">
              <Award size={13} />
              <span>Why PT. SMB.</span>
            </div>
            <h2 className="section-title">
              Keunggulan yang <span className="text-gold">Membedakan Kami</span>
            </h2>
            <p className="section-subtitle">
              Sinergi keahlian, legalitas terjamin, dan efisiensi nyata yang menjamin pertumbuhan stabil bagi bisnis Anda.
            </p>
          </div>

          {/* Bento Grid Architecture */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '20px',
            marginBottom: '40px'
          }} className="bento-container">
            
            {/* Bento Card 1: One Stop Service (Span 7) */}
            <div
              className="bento-card-dark"
              style={{
                gridColumn: 'span 7',
                borderRadius: 'var(--radius-card)',
                padding: 'clamp(28px, 4vw, 44px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ color: 'var(--gold-400)', fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                  Model Layanan Terpadu
                </div>
                <h3 style={{ fontSize: 'clamp(1.35rem, 2vw, 1.85rem)', color: 'var(--white)', fontWeight: 650, letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '12px' }}>
                  One Stop Consultant and Service Management.
                </h3>
                <p style={{ color: 'var(--slate-apple-dark)', fontSize: '0.9rem', lineHeight: 1.55, maxWidth: '520px' }}>
                  Tidak perlu lagi mengelola puluhan vendor terpisah. PT. SMB menyatukan audit kepatuhan, sistem TI, sanitasi fasilitas, dan proteksi asuransi di bawah satu kontrak kerja sama yang akuntabel.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '24px', flexWrap: 'wrap' }}>
                <span className="spec-pill">Nol Kerumitan Koordinasi</span>
                <span className="spec-pill">Kontrak Kerja Sama Tunggal</span>
                <span className="spec-pill">Pelaporan Terpadu</span>
              </div>
            </div>

            {/* Bento Card 2: 1.450+ Mitra (Span 5) */}
            <div
              className="bento-card-light"
              style={{
                gridColumn: 'span 5',
                borderRadius: 'var(--radius-card)',
                padding: 'clamp(28px, 4vw, 44px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ color: 'var(--gold-700)', fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                  Rekam Jejak Terbukti
                </div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                  fontWeight: 700,
                  color: 'var(--navy-900)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  marginBottom: '8px'
                }}>
                  1.450+
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 650, color: 'var(--navy-900)', marginBottom: '6px' }}>
                  Mitra Bisnis & Korporasi
                </div>
                <p style={{ color: 'var(--slate-apple-light)', fontSize: '0.86rem', lineHeight: 1.5 }}>
                  Dipercaya oleh berbagai sektor industri manufaktur, perbankan, logistik, dan F&B di seluruh Indonesia.
                </p>
              </div>

              <Link to="/klien" className="link-apple" style={{ color: 'var(--navy-900)', fontWeight: 600, marginTop: '18px' }}>
                <span>Lihat Portofolio Mitra</span>
                <span>›</span>
              </Link>
            </div>

            {/* Bento Card 3: 100% Kepatuhan (Span 5) */}
            <div
              className="bento-card-light"
              style={{
                gridColumn: 'span 5',
                borderRadius: 'var(--radius-card)',
                padding: 'clamp(28px, 4vw, 44px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ color: 'var(--gold-700)', fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                  Kepastian Regulasi
                </div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                  fontWeight: 700,
                  color: 'var(--navy-900)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  marginBottom: '8px'
                }}>
                  100%
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 650, color: 'var(--navy-900)', marginBottom: '6px' }}>
                  Kepatuhan Standar Industri
                </div>
                <p style={{ color: 'var(--slate-apple-light)', fontSize: '0.86rem', lineHeight: 1.5 }}>
                  Setiap prosedur diaudit secara ketat untuk memastikan kepatuhan hukum, keamanan data, dan sertifikasi higienis.
                </p>
              </div>

              <Link to="/who-we-are" className="link-apple" style={{ color: 'var(--navy-900)', fontWeight: 600, marginTop: '18px' }}>
                <span>Visi & Tata Kelola Kami</span>
                <span>›</span>
              </Link>
            </div>

            {/* Bento Card 4: Efisiensi Biaya & Waktu (Span 7) */}
            <div
              className="bento-card-dark"
              style={{
                gridColumn: 'span 7',
                borderRadius: 'var(--radius-card)',
                padding: 'clamp(28px, 4vw, 44px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ color: 'var(--gold-400)', fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                  Dampak Nyata
                </div>
                <h3 style={{ fontSize: 'clamp(1.35rem, 2vw, 1.85rem)', color: 'var(--white)', fontWeight: 650, letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '12px' }}>
                  Penghematan Waktu & Biaya Operasional.
                </h3>
                <p style={{ color: 'var(--slate-apple-dark)', fontSize: '0.9rem', lineHeight: 1.55, maxWidth: '520px' }}>
                  Standardisasi terstruktur dan otomasi sistem memangkas inefisiensi pengadaan, mengeliminasi risiko downtime, dan memastikan setiap rupiah investasi menghasilkan nilai terukur.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '14px', marginTop: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                <Link
                  to="/kontak"
                  className="btn btn-gold"
                  style={{ borderRadius: 'var(--radius-pill)', padding: '10px 22px', fontWeight: 600 }}
                >
                  <span>Mulai Konsultasi Efisiensi</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Significant Others (Clients & Testimonials) */}
      <section id="mitra" className="section-pad" style={{ background: 'var(--apple-gray-bg)', borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="section-badge">
              <Building2 size={13} />
              <span>Significant partners.</span>
            </div>
            <h2 className="section-title">
              Dipercaya oleh <span className="text-gold">Pemimpin Industri</span>
            </h2>
            <p className="section-subtitle">
              Testimoni nyata dari institusi dan perusahaan yang telah membuktikan keunggulan kemitraan bersama PT. SMB.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '20px',
            marginBottom: '44px'
          }}>
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="card-white"
                style={{
                  padding: 'clamp(24px, 3vw, 32px)',
                  borderRadius: 'var(--radius-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'var(--white)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '3px', marginBottom: '14px' }}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: 'var(--gold-500)', fontSize: '0.9rem' }}>★</span>
                    ))}
                  </div>
                  <p style={{
                    fontSize: '0.88rem',
                    color: 'var(--slate-700)',
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                    marginBottom: '20px'
                  }}>
                    "{item.quote}"
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}>
                  <img
                    src={item.avatar}
                    alt={item.name}
                    style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.88rem', fontWeight: 650, color: 'var(--navy-900)' }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--slate-apple-light)' }}>
                      {item.role}, {item.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/klien" className="link-apple" style={{ fontSize: '0.96rem', fontWeight: 600, color: 'var(--navy-900)' }}>
              <span>Jelajahi Ekosistem Kemitraan Selengkapnya</span>
              <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>›</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 6. Newsroom (Latest Insights) */}
      {recentArticles.length > 0 && (
        <section id="wawasan" className="section-pad" style={{ background: 'var(--white)', borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}>
          <div className="container">
            
            <div className="section-header">
              <div className="section-badge">
                <BookOpen size={13} />
                <span>Newsroom.</span>
              </div>
              <h2 className="section-title">
                Wawasan & <span className="text-gold">Berita Terkini</span>
              </h2>
              <p className="section-subtitle">
                Analisis mendalam, rilis regulasi terbaru, dan wawasan kepemimpinan dari para ahli PT. SMB.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(18px, 2.2vw, 26px)',
              marginBottom: '36px'
            }}>
              {recentArticles.map((article) => (
                <article
                  key={article.id}
                  className="card-white"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    borderRadius: 'var(--radius-card)',
                    background: 'var(--white)'
                  }}
                >
                  <Link
                    to={`/blog/${article.id}`}
                    style={{ position: 'relative', height: '180px', overflow: 'hidden', background: 'var(--apple-dark)', display: 'block' }}
                  >
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </Link>

                  <div style={{ padding: 'clamp(20px, 2.5vw, 26px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{
                      fontSize: '0.72rem',
                      fontWeight: 650,
                      color: 'var(--gold-700)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '6px'
                    }}>
                      {article.category}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.74rem', color: 'var(--slate-apple-light)', marginBottom: '10px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={12} color="var(--gold-700)" />
                        <span>{article.date}</span>
                      </span>
                      <span>•</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h3 style={{
                      fontSize: '1.08rem',
                      fontWeight: 650,
                      color: 'var(--navy-900)',
                      lineHeight: 1.3,
                      marginBottom: '10px',
                      letterSpacing: '-0.015em'
                    }}>
                      <Link to={`/blog/${article.id}`} style={{ color: 'inherit' }}>
                        {article.title}
                      </Link>
                    </h3>

                    <p style={{
                      fontSize: '0.84rem',
                      color: 'var(--slate-apple-light)',
                      lineHeight: 1.5,
                      marginBottom: '16px'
                    }}>
                      {article.excerpt}
                    </p>

                    <Link
                      to={`/blog/${article.id}`}
                      className="link-apple"
                      style={{ marginTop: 'auto', alignSelf: 'flex-start', color: 'var(--navy-900)', fontWeight: 600 }}
                    >
                      <span>Baca Artikel</span>
                      <span>›</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link
                to="/blog"
                className="btn btn-navy btn-md"
                style={{ borderRadius: 'var(--radius-pill)', padding: '11px 26px', fontWeight: 600 }}
              >
                <span>Buka Semua Publikasi Newsroom</span>
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </section>
      )}

      {/* 7. Specialist Concierge / Call to Action Banner (Apple Specialist Style) */}
      <section style={{
        background: 'var(--navy-950)',
        padding: 'clamp(56px, 7vw, 92px) 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{ color: 'var(--gold-400)', fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
              PT. SMB Specialist Concierge
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--white)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '10px' }}>
              Ada Pertanyaan? Diskusikan dengan Spesialis Kami.
            </h2>
            <p style={{ color: 'var(--slate-apple-dark)', fontSize: '0.94rem', lineHeight: 1.5, margin: 0 }}>
              Tim konsultan kami siap memberikan rekomendasi tata kelola operasional dan audit penjaminan mutu yang disesuaikan dengan skala industri Anda.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link
              to="/kontak"
              className="btn btn-gold btn-md"
              style={{ borderRadius: 'var(--radius-pill)', padding: '12px 26px', fontWeight: 600 }}
            >
              <span>Hubungi Spesialis SMB</span>
              <ArrowRight size={15} />
            </Link>
            <a
              href={`https://wa.me/${info.whatsapp}?text=Halo%20PT.%20SMB,%20saya%20tertarik%20dengan%20layanan%20Anda.`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-gold btn-md"
              style={{ borderRadius: 'var(--radius-pill)', padding: '12px 24px', fontWeight: 600 }}
            >
              <MessageCircle size={15} />
              <span>WhatsApp Langsung</span>
            </a>
          </div>
        </div>
      </section>

      {/* Responsive Styles for Apple Layout */}
      <style>{`
        @media (max-width: 1024px) {
          .closer-look-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .bento-card-dark, .bento-card-light {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
}
