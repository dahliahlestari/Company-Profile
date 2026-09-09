import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Monitor, ShieldCheck, Umbrella, CheckCircle2, ArrowRight, Briefcase } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { services } = companyData;
  const mainServices = services.mainServices || [];

  const getServiceHeader = (id) => {
    switch (id) {
      case 'sppg':
        return {
          icon: <Users size={18} color="var(--white)" />,
          color: 'var(--navy-900)',
          tag: 'PENDAMPINGAN SPPG'
        };
      case 'it-solutions':
        return {
          icon: <Monitor size={18} color="var(--white)" />,
          color: 'var(--navy-800)',
          tag: 'IT SOLUTIONS'
        };
      case 'pest-control':
        return {
          icon: <ShieldCheck size={18} color="var(--white)" />,
          color: '#1A4D2E', // Forest Green accent from poster
          tag: 'PEST CONTROL'
        };
      case 'risk-insurance':
        return {
          icon: <Umbrella size={18} color="var(--white)" />,
          color: '#A35709', // Amber / warm gold accent from poster
          tag: 'RISK INSURANCE'
        };
      default:
        return {
          icon: <Briefcase size={18} color="var(--white)" />,
          color: 'var(--navy-900)',
          tag: 'LAYANAN SMB'
        };
    }
  };

  const filteredServices = activeCategory === 'all'
    ? mainServices
    : mainServices.filter(s => s.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="layanan" className="section-pad" style={{ background: 'var(--slate-50)', position: 'relative' }}>
      <div className="container">

        {/* Section Header (Apple Scale & Borderless Tagline) */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={13} />
            <span>Portofolio Layanan Terpadu</span>
          </div>
          <h2 className="section-title">
            Layanan Utama <span className="text-gold">PT. SMB</span>
          </h2>
          <p className="section-subtitle">
            One Stop Consultant and Service Management menghadirkan solusi terintegrasi untuk menjamin kepatuhan, keandalan sistem, kebersihan, dan proteksi bisnis Anda.
          </p>

          {/* Interactive Filter Pills */}
          <div style={{
            display: 'inline-flex',
            background: 'var(--white)',
            padding: '3px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--slate-200)',
            marginTop: '16px',
            gap: '3px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => setActiveCategory('all')}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 600,
                background: activeCategory === 'all' ? 'var(--navy-900)' : 'transparent',
                color: activeCategory === 'all' ? 'var(--white)' : 'var(--slate-600)',
                transition: 'background 0.15s ease'
              }}
            >
              Semua Layanan (4)
            </button>
            <button
              onClick={() => setActiveCategory('konsultasi')}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 600,
                background: activeCategory === 'konsultasi' ? 'var(--gold-500)' : 'transparent',
                color: activeCategory === 'konsultasi' ? 'var(--navy-950)' : 'var(--slate-600)',
                transition: 'background 0.15s ease'
              }}
            >
              SPPG & Proteksi
            </button>
            <button
              onClick={() => setActiveCategory('teknologi')}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 600,
                background: activeCategory === 'teknologi' ? 'var(--navy-900)' : 'transparent',
                color: activeCategory === 'teknologi' ? 'var(--white)' : 'var(--slate-600)',
                transition: 'background 0.15s ease'
              }}
            >
              IT & Pest Control
            </button>
          </div>
        </div>

        {/* 4 Core Services Grid (Matching Flyer Layout & Apple Scale) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginBottom: '32px'
        }}>
          {filteredServices.map((service) => {
            const config = getServiceHeader(service.id);
            return (
              <div
                key={service.id}
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
                {/* Flyer-Style Card Header (Solid Colored Badge with Icon & Tag) */}
                <div style={{
                  background: config.color,
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'var(--white)'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {config.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '0.92rem',
                      fontWeight: 800,
                      color: 'var(--white)',
                      margin: 0,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase'
                    }}>
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Thumbnail Image */}
                <div style={{ position: 'relative', height: '160px', overflow: 'hidden', background: 'var(--navy-950)' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                {/* Card Content Body */}
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <p style={{
                    fontSize: '0.82rem',
                    color: 'var(--slate-600)',
                    lineHeight: 1.5,
                    marginBottom: '14px'
                  }}>
                    {service.shortDesc}
                  </p>

                  {/* Bullet Highlights from Poster */}
                  <div style={{
                    marginTop: 'auto',
                    paddingTop: '12px',
                    borderTop: '1px solid var(--slate-100)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}>
                    {service.highlights.map((h, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--slate-700)' }}>
                        <CheckCircle2 size={13} color="var(--gold-600)" />
                        <span style={{ fontWeight: 500 }}>{h}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/kontak"
                    style={{
                      marginTop: '14px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      color: 'var(--navy-900)',
                      fontWeight: 700,
                      fontSize: '0.8rem'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-700)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--navy-900)'}
                  >
                    <span>Konsultasikan Kebutuhan</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
