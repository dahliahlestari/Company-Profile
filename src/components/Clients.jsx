import React from 'react';
import { Handshake, Star, Quote, Building } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Clients() {
  const { clients, testimonials } = companyData;

  return (
    <section id="klien" className="section-pad" style={{ background: 'var(--slate-50)', position: 'relative' }}>
      <div className="container">

        {/* Section Header: Partners */}
        <div className="section-header" style={{ marginBottom: '36px' }}>
          <div className="section-badge">
            <Handshake size={14} />
            <span>Kemitraan & Ekosistem Bisnis</span>
          </div>
          <h2 className="section-title">
            Klien & <span className="text-gold">Mitra Strategis</span>
          </h2>
          <p className="section-subtitle">
            Lebih dari 1.450 perusahaan, produsen, dan institusi di seluruh Indonesia mempercayakan tata kelola layanan operasional dan konsultasi bisnisnya kepada PT. SMB.
          </p>
        </div>

        {/* Clients Grid (Apple Squircle Clean Layout) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
          marginBottom: 'clamp(52px, 6vw, 76px)'
        }}>
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="card-white"
              style={{
                padding: '18px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                background: 'var(--white)',
                border: '1px solid var(--slate-200)',
                borderRadius: 'var(--radius-card-sm)'
              }}
            >
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'var(--navy-50)',
                border: '1px solid var(--navy-100)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--navy-800)',
                flexShrink: 0
              }}>
                <Building size={18} color="var(--gold-700)" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.88rem',
                  fontWeight: 650,
                  color: 'var(--navy-900)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  letterSpacing: '-0.01em'
                }}>
                  {client.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.74rem', color: 'var(--slate-apple-light)' }}>
                    {client.sector}
                  </span>
                  <span style={{
                    fontSize: '0.74rem',
                    color: 'var(--gold-700)',
                    fontWeight: 600
                  }}>
                    • {client.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section: Testimonials (Apple Squircle Solid Navy Card) */}
        <div style={{
          background: 'var(--navy-900)',
          borderRadius: 'var(--radius-card)',
          padding: 'clamp(32px, 4vw, 56px)',
          color: 'var(--white)',
          border: '1px solid rgba(229, 168, 59, 0.3)'
        }}>
          
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto clamp(24px, 3.5vw, 40px) auto' }}>
            <div className="section-badge dark" style={{ marginBottom: '10px' }}>
              <Quote size={13} />
              <span>Testimoni Klien</span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.95rem)', color: 'var(--white)', marginBottom: '10px', letterSpacing: '-0.025em', fontWeight: 650 }}>
              Apa Kata <span className="text-gold">Mereka?</span>
            </h3>
            <p style={{ color: 'var(--slate-apple-dark)', fontSize: '0.88rem', lineHeight: 1.54 }}>
              Pengalaman langsung dari para pimpinan industri yang telah merasakan dampak positif dari kemitraan bersama PT. SMB.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {testimonials.map((item) => (
              <div
                key={item.id}
                style={{
                  background: 'var(--navy-850)',
                  border: '1px solid rgba(229, 168, 59, 0.22)',
                  borderRadius: 'var(--radius-card-sm)',
                  padding: 'clamp(20px, 2.5vw, 28px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {/* Star Rating */}
                  <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="var(--gold-400)" color="var(--gold-400)" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p style={{
                    fontSize: '0.84rem',
                    color: 'var(--slate-200)',
                    lineHeight: 1.55,
                    fontStyle: 'italic',
                    marginBottom: '16px'
                  }}>
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <img
                    src={item.avatar}
                    alt={item.author}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid var(--gold-400)'
                    }}
                  />
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      color: 'var(--white)',
                      fontSize: '0.88rem'
                    }}>
                      {item.author}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--gold-300)' }}>
                      {item.role} • <span style={{ color: 'var(--slate-300)' }}>{item.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
