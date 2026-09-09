import React from 'react';
import { History, Calendar } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Milestones() {
  const { milestones } = companyData;

  return (
    <section className="section-pad" style={{ background: 'var(--white)', borderTop: '1px solid var(--slate-200)', position: 'relative' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <History size={14} />
            <span>Perjalanan & Rekam Jejak</span>
          </div>
          <h2 className="section-title">
            Jejak Langkah <span className="text-gold">SMB Sembada</span>
          </h2>
          <p className="section-subtitle">
            Evolusi kami dari penyedia distribusi komoditas lokal hingga menjadi korporasi penyedia solusi rantai pasok dan konsultasi bisnis nasional.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{
          position: 'relative',
          maxWidth: '960px',
          margin: '0 auto',
          padding: '10px 0'
        }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '24px',
            width: '2px',
            background: 'var(--slate-300)'
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {milestones.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  position: 'relative'
                }}
              >
                {/* Year Marker Circle (Flat Solid) */}
                <div style={{
                  minWidth: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--navy-900)',
                  border: '2px solid var(--gold-500)',
                  color: 'var(--gold-400)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  zIndex: 2
                }}>
                  {item.year.includes(' - ') ? 'KINI' : item.year}
                </div>

                {/* Content Box (Flat) */}
                <div style={{
                  flex: 1,
                  background: 'var(--slate-50)',
                  border: '1px solid var(--slate-200)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'clamp(14px, 2vw, 20px)',
                  transition: 'border-color 0.15s ease'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <Calendar size={13} color="var(--gold-700)" />
                    <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--gold-700)' }}>
                      Tahun {item.year}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.02rem', color: 'var(--navy-900)', marginBottom: '5px' }}>
                    {item.title}
                  </h4>

                  <p style={{ fontSize: '0.84rem', color: 'var(--slate-600)', lineHeight: 1.55, margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
