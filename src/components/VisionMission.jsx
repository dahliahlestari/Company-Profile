import React from 'react';
import { Target, Compass, Sparkles, Award, Layers, Clock, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function VisionMission() {
  const { visionMission } = companyData;

  const spiritIcons = {
    integrated: <Layers size={22} color="var(--gold-400)" />,
    professional: <Award size={22} color="var(--gold-400)" />,
    efficiency: <Clock size={22} color="var(--gold-400)" />,
    result: <Target size={22} color="var(--gold-400)" />,
    excellence: <Award size={22} color="var(--gold-400)" />,
    linkage: <Layers size={22} color="var(--gold-400)" />,
    innovation: <Clock size={22} color="var(--gold-400)" />,
    integrity: <ShieldCheck size={22} color="var(--gold-400)" />
  };

  return (
    <section id="tentang-kami" className="section-pad" style={{ background: 'var(--white)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Compass size={13} />
            <span>Visi, Misi & Keunggulan</span>
          </div>
          <h2 className="section-title">
            Visi & Misi <span className="text-gold">PT. SMB</span>
          </h2>
          <p className="section-subtitle">
            Fondasi strategis PT. SMB dalam menghadirkan One Stop Consultant and Service Management terpercaya di Indonesia.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(18px, 2.5vw, 32px)',
          marginBottom: 'clamp(36px, 5vw, 56px)'
        }} className="vm-grid">
          
          {/* Visi Card (Flat Solid Navy) */}
          <div style={{
            background: 'var(--navy-900)',
            color: 'var(--white)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(22px, 3vw, 36px)',
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
                gap: '6px',
                color: 'var(--gold-400)',
                fontSize: '0.74rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}>
                <Target size={14} />
                <span>Visi Perusahaan</span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.05rem, 1.5vw, 1.35rem)',
                color: 'var(--white)',
                lineHeight: 1.45,
                fontWeight: 700,
                fontFamily: 'var(--font-heading)'
              }}>
                "{visionMission.vision}"
              </h3>
            </div>

            <div style={{
              marginTop: '20px',
              paddingTop: '14px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              fontSize: '0.8rem',
              color: 'var(--gold-300)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Sparkles size={14} />
              <span>Partner Strategis Untuk Kesuksesan Bisnis Anda</span>
            </div>
          </div>

          {/* Misi Card (Flat Light Slate) */}
          <div style={{
            background: 'var(--slate-50)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(18px, 2.8vw, 32px)',
            border: '1px solid var(--slate-200)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--navy-800)',
                fontSize: '0.74rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}>
                <Compass size={14} />
                <span>Misi Utama</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {visionMission.missions.map((misi, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <div style={{
                      minWidth: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: 'var(--gold-500)',
                      color: 'var(--navy-950)',
                      fontWeight: 800,
                      fontSize: '0.74rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '2px'
                    }}>
                      {i + 1}
                    </div>
                    <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--slate-700)', lineHeight: 1.5 }}>
                      {misi}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Working Spirit / Keunggulan Kami Section (Flat Solid Navy) */}
        <div id="nilai-kerja" style={{
          background: 'var(--navy-900)',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(24px, 3vw, 40px)',
          color: 'var(--white)',
          border: '1px solid rgba(212, 175, 55, 0.3)'
        }}>
          
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto clamp(18px, 2.5vw, 30px) auto' }}>
            <div className="section-badge dark" style={{ border: 'none', background: 'transparent', padding: 0, marginBottom: '6px' }}>
              <Award size={13} />
              <span>Keunggulan Layanan</span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.65rem)', color: 'var(--white)', marginBottom: '6px' }}>
              Keunggulan Kami <span className="text-gold">(PT. SMB)</span>
            </h3>
            <p style={{ color: 'var(--slate-300)', fontSize: '0.84rem', margin: 0 }}>
              Empat keunggulan terpadu yang menjadikan PT. SMB mitra strategis pilihan untuk efisiensi dan kesuksesan bisnis Anda.
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
