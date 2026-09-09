import React from 'react';
import { Target, Compass, Sparkles, Award, Link2, Lightbulb, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function VisionMission() {
  const { visionMission } = companyData;

  const spiritIcons = {
    excellence: <Award size={24} color="var(--gold-400)" />,
    linkage: <Link2 size={24} color="var(--gold-400)" />,
    innovation: <Lightbulb size={24} color="var(--gold-400)" />,
    integrity: <ShieldCheck size={24} color="var(--gold-400)" />
  };

  return (
    <section id="tentang-kami" className="section-pad" style={{ background: 'var(--white)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Compass size={14} />
            <span>Fondasi & Arah Strategis</span>
          </div>
          <h2 className="section-title">
            Visi & Misi <span className="text-gold">SMB Sembada</span>
          </h2>
          <p className="section-subtitle">
            Kami mendedikasikan seluruh daya upaya untuk menjadi mitra paling dipercaya bagi pelaku industri distribusi dan pengambil keputusan bisnis di Indonesia.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(20px, 3vw, 36px)',
          marginBottom: 'clamp(48px, 6vw, 72px)'
        }} className="vm-grid">
          
          {/* Visi Card (Flat Solid Navy) */}
          <div style={{
            background: 'var(--navy-900)',
            color: 'var(--white)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(28px, 4vw, 44px)',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 12px',
                background: 'rgba(212, 175, 55, 0.15)',
                color: 'var(--gold-300)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '20px'
              }}>
                <Target size={15} />
                <span>Visi Perusahaan</span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.15rem, 1.8vw, 1.5rem)',
                color: 'var(--white)',
                lineHeight: 1.4,
                fontWeight: 700,
                fontFamily: 'var(--font-heading)'
              }}>
                "{visionMission.vision}"
              </h3>
            </div>

            <div style={{
              marginTop: '24px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              fontSize: '0.82rem',
              color: 'var(--gold-300)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Sparkles size={15} />
              <span>Untuk Indonesia, dari Indonesia, dan Menjangkau Skala Nasional</span>
            </div>
          </div>

          {/* Misi Card (Flat Light Slate) */}
          <div style={{
            background: 'var(--slate-50)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(20px, 3.5vw, 36px)',
            border: '1px solid var(--slate-200)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 10px',
                background: 'var(--navy-100)',
                color: 'var(--navy-800)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                <Compass size={14} />
                <span>Misi Utama</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {visionMission.missions.map((misi, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{
                      minWidth: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'var(--gold-500)',
                      color: 'var(--navy-950)',
                      fontWeight: 800,
                      fontSize: '0.78rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {i + 1}
                    </div>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--slate-700)', lineHeight: 1.5 }}>
                      {misi}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Working Spirit Section (Flat Solid Navy) */}
        <div id="nilai-kerja" style={{
          background: 'var(--navy-900)',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(28px, 3.5vw, 48px)',
          color: 'var(--white)',
          border: '1px solid rgba(212, 175, 55, 0.3)'
        }}>
          
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto clamp(20px, 3vw, 36px) auto' }}>
            <div className="section-badge dark" style={{ marginBottom: '8px' }}>
              <Award size={13} />
              <span>Budaya & Nilai Inti</span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 2rem)', color: 'var(--white)', marginBottom: '8px' }}>
              Working Spirit <span className="text-gold">SMB</span>
            </h3>
            <p style={{ color: 'var(--slate-300)', fontSize: '0.88rem' }}>
              Empat pilar nilai kerja yang menjiwai setiap keputusan operasional, etika kemitraan, dan layanan profesional kami.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(12px, 1.8vw, 18px)'
          }} className="spirit-grid">
            {visionMission.workingSpirit.map((spirit) => (
              <div
                key={spirit.id}
                style={{
                  background: 'var(--navy-850)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'clamp(16px, 2vw, 22px)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.2s ease'
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'rgba(212, 175, 55, 0.12)',
                  border: '1px solid var(--gold-500)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px'
                }}>
                  {spiritIcons[spirit.id]}
                </div>

                <h4 style={{
                  fontSize: '1.05rem',
                  color: 'var(--gold-400)',
                  marginBottom: '4px',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {spirit.name}
                </h4>

                <div style={{
                  fontSize: '0.8rem',
                  color: 'var(--white)',
                  fontWeight: 600,
                  marginBottom: '8px',
                  lineHeight: 1.35
                }}>
                  {spirit.summary}
                </div>

                <p style={{
                  fontSize: '0.82rem',
                  color: 'var(--slate-300)',
                  lineHeight: 1.5,
                  marginTop: 'auto'
                }}>
                  {spirit.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .vm-grid {
            grid-template-columns: 1fr !important;
          }
          .spirit-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .spirit-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
