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
            padding: '3px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--slate-300)',
            marginTop: '18px',
            gap: '3px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => setActiveTab('all')}
              style={{
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.82rem',
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
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.82rem',
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
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.82rem',
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
          <div style={{ marginBottom: '48px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: '1px solid var(--slate-300)',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <div>
                <span style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: 'var(--gold-700)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em'
                }}>
                  {services.distributor.badge}
                </span>
                <h3 style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)', color: 'var(--navy-900)', marginTop: '2px' }}>
                  {services.distributor.title}
                </h3>
              </div>
              <p style={{ maxWidth: '560px', fontSize: '0.86rem', color: 'var(--slate-600)', margin: 0 }}>
                {services.distributor.description}
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
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
                  <div style={{ position: 'relative', height: '160px', overflow: 'hidden', background: 'var(--navy-950)' }}>
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
                      bottom: '10px',
                      left: '10px',
                      width: '34px',
                      height: '34px',
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
                  <div style={{ padding: 'clamp(16px, 2vw, 22px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h4 style={{
                      fontSize: '1.05rem',
                      color: 'var(--navy-900)',
                      marginBottom: '8px',
                      lineHeight: 1.3
                    }}>
                      {item.title}
                    </h4>

                    <p style={{
                      fontSize: '0.84rem',
                      color: 'var(--slate-600)',
                      lineHeight: 1.5,
                      marginBottom: '14px'
                    }}>
                      {item.shortDesc}
                    </p>

                    <div style={{
                      marginTop: 'auto',
                      paddingTop: '12px',
                      borderTop: '1px solid var(--slate-100)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '5px'
                    }}>
                      {item.highlights.map((h, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.78rem', color: 'var(--slate-700)' }}>
                          <CheckCircle size={13} color="var(--gold-600)" />
                          <span>{h}</span>
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
                        color: 'var(--navy-800)',
                        fontWeight: 700,
                        fontSize: '0.82rem'
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
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: 'var(--navy-600)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em'
                }}>
                  {services.consulting.badge}
                </span>
                <h3 style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)', color: 'var(--navy-900)', marginTop: '2px' }}>
                  {services.consulting.title}
                </h3>
              </div>
              <p style={{ maxWidth: '560px', fontSize: '0.86rem', color: 'var(--slate-600)', margin: 0 }}>
                {services.consulting.description}
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
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
                  <div style={{ position: 'relative', height: '160px', overflow: 'hidden', background: 'var(--navy-950)' }}>
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
                      bottom: '10px',
                      left: '10px',
                      width: '34px',
                      height: '34px',
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
                  <div style={{ padding: 'clamp(14px, 2vw, 20px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h4 style={{
                      fontSize: '1.05rem',
                      color: 'var(--navy-900)',
                      marginBottom: '8px',
                      lineHeight: 1.35
                    }}>
                      {item.title}
                    </h4>

                    <p style={{
                      fontSize: '0.84rem',
                      color: 'var(--slate-600)',
                      lineHeight: 1.55,
                      marginBottom: '14px'
                    }}>
                      {item.shortDesc}
                    </p>

                    <div style={{
                      marginTop: 'auto',
                      paddingTop: '12px',
                      borderTop: '1px solid var(--slate-100)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '5px'
                    }}>
                      {item.highlights.map((h, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.78rem', color: 'var(--slate-700)' }}>
                          <CheckCircle size={13} color="var(--navy-600)" />
                          <span>{h}</span>
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
                        color: 'var(--gold-700)',
                        fontWeight: 700,
                        fontSize: '0.82rem'
                      }}
                    >
                      <span>Konsultasikan Kebutuhan</span>
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
