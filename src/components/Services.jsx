import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Monitor, ShieldCheck, ShieldAlert, CheckCircle, ArrowRight, Layers } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { mainServices } = companyData;

  const getIcon = (id) => {
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

  const filteredServices = activeFilter === 'all'
    ? mainServices
    : mainServices.filter(s => s.category.toLowerCase().includes(activeFilter.toLowerCase()) || s.id === activeFilter);

  return (
    <section id="layanan" className="section-pad" style={{ background: 'var(--slate-50)', position: 'relative' }}>
      <div className="container">

        {/* Section Header (Apple Minimalist Standard) */}
        <div className="section-header">
          {/* Tagline / Eyebrow (Borderless Pure Text) */}
          <div className="section-badge">
            <Layers size={13} />
            <span>Layanan Utama PT. SMB</span>
          </div>
          <h2 className="section-title">
            One Stop Consultant & <span className="text-gold">Service Management</span>
          </h2>
          <p className="section-subtitle">
            Solusi terintegrasi, profesional, dan bersertifikasi untuk memastikan efisiensi biaya, waktu, dan keunggulan operasional bagi perusahaan Anda.
          </p>

          {/* Clean Interactive Filter Tabs */}
          <div style={{
            display: 'inline-flex',
            background: 'var(--white)',
            padding: '3px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--slate-300)',
            marginTop: '16px',
            gap: '3px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => setActiveFilter('all')}
              style={{
                padding: '5px 14px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 600,
                background: activeFilter === 'all' ? 'var(--navy-900)' : 'transparent',
                color: activeFilter === 'all' ? 'var(--white)' : 'var(--slate-600)',
                transition: 'background 0.15s ease'
              }}
            >
              Semua Layanan (4)
            </button>
            <button
              onClick={() => setActiveFilter('sppg')}
              style={{
                padding: '5px 14px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 600,
                background: activeFilter === 'sppg' ? 'var(--gold-500)' : 'transparent',
                color: activeFilter === 'sppg' ? 'var(--navy-950)' : 'var(--slate-600)',
                transition: 'background 0.15s ease'
              }}
            >
              Pendampingan SPPG
            </button>
            <button
              onClick={() => setActiveFilter('it-solutions')}
              style={{
                padding: '5px 14px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 600,
                background: activeFilter === 'it-solutions' ? 'var(--navy-900)' : 'transparent',
                color: activeFilter === 'it-solutions' ? 'var(--white)' : 'var(--slate-600)',
                transition: 'background 0.15s ease'
              }}
            >
              IT Solutions
            </button>
            <button
              onClick={() => setActiveFilter('pest-control')}
              style={{
                padding: '5px 14px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 600,
                background: activeFilter === 'pest-control' ? 'var(--gold-500)' : 'transparent',
                color: activeFilter === 'pest-control' ? 'var(--navy-950)' : 'var(--slate-600)',
                transition: 'background 0.15s ease'
              }}
            >
              Pest Control
            </button>
            <button
              onClick={() => setActiveFilter('risk-insurance')}
              style={{
                padding: '5px 14px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 600,
                background: activeFilter === 'risk-insurance' ? 'var(--navy-900)' : 'transparent',
                color: activeFilter === 'risk-insurance' ? 'var(--white)' : 'var(--slate-600)',
                transition: 'background 0.15s ease'
              }}
            >
              Risk Insurance
            </button>
          </div>
        </div>

        {/* 4 Layanan Utama Grid (Apple Squircle Bento Card Style) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 'clamp(18px, 2.5vw, 26px)'
        }}>
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="card-white"
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                borderRadius: 'var(--radius-card)'
              }}
            >
              {/* Thumbnail Image */}
              <div style={{ position: 'relative', height: '175px', overflow: 'hidden', background: 'var(--navy-950)' }}>
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
                  bottom: '12px',
                  left: '12px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'var(--white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                }}>
                  {getIcon(service.id)}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: 'clamp(18px, 2.2vw, 24px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                
                {/* Borderless Badge / Category */}
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'var(--gold-600)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '6px'
                }}>
                  {service.badge} • {service.category}
                </span>

                <h3 style={{
                  fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)',
                  color: 'var(--navy-900)',
                  marginBottom: '8px',
                  lineHeight: 1.24,
                  fontWeight: 650,
                  letterSpacing: '-0.02em'
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '0.86rem',
                  color: 'var(--slate-apple-light)',
                  lineHeight: 1.54,
                  marginBottom: '16px'
                }}>
                  {service.shortDesc}
                </p>

                {/* Highlights List from Flyer */}
                <div style={{
                  marginTop: 'auto',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--slate-100)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}>
                  {service.highlights.map((h, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.8rem', color: 'var(--slate-700)' }}>
                      <CheckCircle size={13} color="var(--gold-600)" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/kontak"
                  className="link-apple"
                  style={{
                    marginTop: '16px',
                    color: 'var(--navy-900)',
                    fontWeight: 600,
                    fontSize: '0.84rem'
                  }}
                >
                  <span>Konsultasikan Layanan</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
