import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Briefcase, CheckCircle, ArrowRight, Package, Warehouse, Store, LineChart, ShieldAlert, Cpu, Sparkles } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');
  const { services } = companyData;

  const getIcon = (id) => {
    switch (id) {
      case 'dist-1': return <Package size={20} color="var(--gold-600)" />;
      case 'dist-2': return <Warehouse size={20} color="var(--gold-600)" />;
      case 'dist-3': return <Truck size={20} color="var(--gold-600)" />;
      case 'dist-4': return <Store size={20} color="var(--gold-600)" />;
      case 'cons-1': return <LineChart size={20} color="var(--navy-700)" />;
      case 'cons-2': return <Briefcase size={20} color="var(--navy-700)" />;
      case 'cons-3': return <ShieldAlert size={20} color="var(--navy-700)" />;
      case 'cons-4': return <Cpu size={20} color="var(--navy-700)" />;
      default: return <Sparkles size={20} color="var(--gold-600)" />;
    }
  };

  return (
    <section id="layanan" className="section-pad" style={{ background: 'var(--slate-50)', position: 'relative' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Portofolio Solusi SMB</span>
          </div>
          <h2 className="section-title">
            Layanan Terpadu & <span className="text-gold">Kebutuhan Bisnis</span>
          </h2>
          <p className="section-subtitle">
            Dua pilar spesialisasi SMB: menjamin ketersediaan rantai pasok distributor dan memberikan bimbingan konsultasi manajemen yang terbukti efektif.
          </p>

          {/* Flat Interactive Filter Tabs */}
          <div style={{
            display: 'inline-flex',
            background: 'var(--white)',
            padding: '4px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--slate-300)',
            marginTop: '24px',
            gap: '4px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => setActiveTab('all')}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.88rem',
                fontWeight: 600,
                background: activeTab === 'all' ? 'var(--navy-900)' : 'transparent',
                color: activeTab === 'all' ? 'var(--white)' : 'var(--slate-600)',
                transition: 'background 0.15s ease'
              }}
            >
              Semua Solusi
            </button>
            <button
              onClick={() => setActiveTab('distributor')}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.88rem',
                fontWeight: 600,
                background: activeTab === 'distributor' ? 'var(--gold-500)' : 'transparent',
                color: activeTab === 'distributor' ? 'var(--navy-950)' : 'var(--slate-600)',
                transition: 'background 0.15s ease'
              }}
            >
              Kebutuhan Distributor
            </button>
            <button
              onClick={() => setActiveTab('consulting')}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.88rem',
                fontWeight: 600,
                background: activeTab === 'consulting' ? 'var(--navy-900)' : 'transparent',
                color: activeTab === 'consulting' ? 'var(--white)' : 'var(--slate-600)',
                transition: 'background 0.15s ease'
              }}
            >
              Konsultasi Jasa Bisnis
            </button>
          </div>
        </div>

        {/* 1. Pilar Distributor */}
        {(activeTab === 'all' || activeTab === 'distributor') && (
          <div style={{ marginBottom: '56px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px',
              paddingBottom: '14px',
              borderBottom: '1px solid var(--slate-300)',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div>
                <span style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--gold-700)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em'
                }}>
                  {services.distributor.badge}
                </span>
                <h3 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.75rem)', color: 'var(--navy-900)', marginTop: '2px' }}>
                  {services.distributor.title}
                </h3>
              </div>
              <p style={{ maxWidth: '560px', fontSize: '0.92rem', color: 'var(--slate-600)', margin: 0 }}>
                {services.distributor.description}
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '24px'
            }}>
              {services.distributor.items.map((item) => (
                <div
                  key={item.id}
                  className="card-white"
                  style={{
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    borderTop: '3px solid var(--gold-500)'
                  }}
                >
                  {/* Thumbnail Image */}
                  <div style={{ position: 'relative', height: '175px', overflow: 'hidden', background: 'var(--navy-950)' }}>
                    <img
                      src={item.image}
                      alt={item.title}
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
                      width: '38px',
                      height: '38px',
                      borderRadius: '6px',
                      background: 'var(--white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-flat-sm)'
                    }}>
                      {getIcon(item.id)}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div style={{ padding: 'clamp(18px, 2.5vw, 24px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h4 style={{
                      fontSize: '1.15rem',
                      color: 'var(--navy-900)',
                      marginBottom: '10px',
                      lineHeight: 1.35
                    }}>
                      {item.title}
                    </h4>

                    <p style={{
                      fontSize: '0.88rem',
                      color: 'var(--slate-600)',
                      lineHeight: 1.55,
                      marginBottom: '18px'
                    }}>
                      {item.shortDesc}
                    </p>

                    <div style={{
                      marginTop: 'auto',
                      paddingTop: '14px',
                      borderTop: '1px solid var(--slate-100)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px'
                    }}>
                      {item.highlights.map((h, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--slate-700)' }}>
                          <CheckCircle size={14} color="var(--gold-600)" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/kontak"
                      style={{
                        marginTop: '16px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--navy-800)',
                        fontWeight: 700,
                        fontSize: '0.86rem'
                      }}
                    >
                      <span>Konsultasikan Pengadaan</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Pilar Konsultasi */}
        {(activeTab === 'all' || activeTab === 'consulting') && (
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px',
              paddingBottom: '14px',
              borderBottom: '1px solid var(--slate-300)',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div>
                <span style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--navy-600)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em'
                }}>
                  {services.consulting.badge}
                </span>
                <h3 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.75rem)', color: 'var(--navy-900)', marginTop: '2px' }}>
                  {services.consulting.title}
                </h3>
              </div>
              <p style={{ maxWidth: '560px', fontSize: '0.92rem', color: 'var(--slate-600)', margin: 0 }}>
                {services.consulting.description}
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '24px'
            }}>
              {services.consulting.items.map((item) => (
                <div
                  key={item.id}
                  className="card-white"
                  style={{
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    borderTop: '3px solid var(--navy-800)'
                  }}
                >
                  {/* Thumbnail Image */}
                  <div style={{ position: 'relative', height: '175px', overflow: 'hidden', background: 'var(--navy-950)' }}>
                    <img
                      src={item.image}
                      alt={item.title}
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
                      width: '38px',
                      height: '38px',
                      borderRadius: '6px',
                      background: 'var(--white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-flat-sm)'
                    }}>
                      {getIcon(item.id)}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div style={{ padding: 'clamp(18px, 2.5vw, 24px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h4 style={{
                      fontSize: '1.15rem',
                      color: 'var(--navy-900)',
                      marginBottom: '10px',
                      lineHeight: 1.35
                    }}>
                      {item.title}
                    </h4>

                    <p style={{
                      fontSize: '0.88rem',
                      color: 'var(--slate-600)',
                      lineHeight: 1.55,
                      marginBottom: '18px'
                    }}>
                      {item.shortDesc}
                    </p>

                    <div style={{
                      marginTop: 'auto',
                      paddingTop: '14px',
                      borderTop: '1px solid var(--slate-100)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px'
                    }}>
                      {item.highlights.map((h, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--slate-700)' }}>
                          <CheckCircle size={14} color="var(--navy-600)" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/kontak"
                      style={{
                        marginTop: '16px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--gold-700)',
                        fontWeight: 700,
                        fontSize: '0.86rem'
                      }}
                    >
                      <span>Ajukan Sesi Konsultasi</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
