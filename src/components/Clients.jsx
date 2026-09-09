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

        {/* Clients Grid (Fluid Expansive Layout) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px',
          marginBottom: 'clamp(48px, 6vw, 72px)'
        }}>
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="card-white"
              style={{
                padding: '18px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                background: 'var(--white)',
                border: '1px solid var(--slate-200)',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'var(--navy-50)',
                border: '1px solid var(--navy-100)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--navy-800)',
                fontWeight: 800,
                fontSize: '1rem'
              }}>
                <Building size={18} color="var(--gold-700)" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: 'var(--navy-900)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {client.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--slate-500)' }}>
                    {client.sector}
                  </span>
                  <span style={{
                    fontSize: '0.72rem',
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

        {/* Section: Testimonials (Flat Solid Navy) */}
        <div style={{
          background: 'var(--navy-900)',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(24px, 3.5vw, 48px)',
          color: 'var(--white)',
          border: '1px solid rgba(212, 175, 55, 0.3)'
        }}>
          
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto clamp(20px, 3vw, 36px) auto' }}>
            <div className="section-badge dark" style={{ marginBottom: '8px' }}>
              <Quote size={13} />
              <span>Testimoni Klien</span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', color: 'var(--white)', marginBottom: '8px' }}>
              Apa Kata <span className="text-gold">Mereka?</span>
            </h3>
            <p style={{ color: 'var(--slate-300)', fontSize: '0.84rem' }}>
              Pengalaman langsung dari para pimpinan industri yang telah merasakan dampak positif dari kemitraan bersama PT. SMB.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '18px'
          }}>
            {testimonials.map((item) => (
              <div
                key={item.id}
                style={{
                  background: 'var(--navy-850)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'clamp(18px, 2vw, 24px)',
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
