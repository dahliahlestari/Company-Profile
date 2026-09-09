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
            <span>Visi, Misi & Keunggulan</span>
          </div>
          <h2 className="section-title">
            Visi & Misi <span className="text-gold">PT. SMB</span>
          </h2>
          <p className="section-subtitle">
            Fondasi dan komitmen PT. SMB sebagai One Stop Consultant and Service Management terpercaya bagi kesuksesan bisnis Anda.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(18px, 2.5vw, 30px)',
          marginBottom: 'clamp(40px, 5vw, 60px)'
        }} className="vm-grid">
          
          {/* Visi Card (Apple Squircle Navy Card) */}
          <div style={{
            background: 'var(--navy-900)',
            color: 'var(--white)',
            borderRadius: 'var(--radius-card)',
            padding: 'clamp(26px, 3.5vw, 40px)',
            border: '1px solid rgba(229, 168, 59, 0.35)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            <div>
              {/* Tagline / Eyebrow (Pure Text, No Border) */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--gold-400)',
                fontSize: '0.74rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '14px'
              }}>
                <Target size={14} />
                <span>Visi Perusahaan</span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.15rem, 1.6vw, 1.45rem)',
                color: 'var(--white)',
                lineHeight: 1.42,
                fontWeight: 650,
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-heading)'
              }}>
                "{visionMission.vision}"
              </h3>
            </div>

            <div style={{
              marginTop: '24px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.82rem',
              color: 'var(--gold-300)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Sparkles size={14} />
              <span>One Stop Consultant and Service Management</span>
            </div>
          </div>

          {/* Misi Card (Apple Squircle Slate Card) */}
          <div style={{
            background: 'var(--slate-50)',
            borderRadius: 'var(--radius-card)',
            padding: 'clamp(26px, 3.5vw, 40px)',
            border: '1px solid var(--slate-200)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              {/* Tagline / Eyebrow (Pure Text, No Border) */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--navy-800)',
                fontSize: '0.74rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                <Compass size={14} />
                <span>Misi Utama</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {visionMission.missions.map((misi, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{
                      minWidth: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: 'var(--gold-500)',
                      color: 'var(--navy-950)',
                      fontWeight: 700,
                      fontSize: '0.74rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '2px',
                      flexShrink: 0
                    }}>
                      {i + 1}
                    </div>
                    <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--slate-700)', lineHeight: 1.54 }}>
                      {misi}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Keunggulan Kami Section (Berdasarkan Flyer PT. SMB) */}
        <div id="keunggulan-kami" style={{
          background: 'var(--navy-900)',
          borderRadius: 'var(--radius-card)',
          padding: 'clamp(28px, 4vw, 48px)',
          color: 'var(--white)',
          border: '1px solid rgba(229, 168, 59, 0.3)'
        }}>
          
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto clamp(18px, 2.5vw, 28px) auto' }}>
            <div className="section-badge dark" style={{ marginBottom: '6px' }}>
              <Award size={13} />
              <span>Keunggulan Kompetitif</span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.18rem, 1.8vw, 1.65rem)', color: 'var(--white)', marginBottom: '6px' }}>
              Keunggulan <span className="text-gold">PT. SMB</span>
            </h3>
            <p style={{ color: 'var(--slate-300)', fontSize: '0.84rem' }}>
              Empat keunggulan utama yang memastikan setiap solusi kami memberikan dampak nyata, terpercaya, dan bernilai tambah.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(14px, 2vw, 20px)'
          }} className="spirit-grid">
            {visionMission.workingSpirit.map((spirit) => (
              <div
                key={spirit.id}
                style={{
                  background: 'var(--navy-850)',
                  border: '1px solid rgba(229, 168, 59, 0.22)',
                  borderRadius: 'var(--radius-card-sm)',
                  padding: 'clamp(18px, 2.2vw, 24px)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(229, 168, 59, 0.12)',
                  border: '1px solid var(--gold-500)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px'
                }}>
                  {spiritIcons[spirit.id] || <Award size={20} color="var(--gold-400)" />}
                </div>

                <h4 style={{
                  fontSize: '0.96rem',
                  color: 'var(--gold-400)',
                  marginBottom: '3px',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {spirit.name}
                </h4>

                <div style={{
                  fontSize: '0.76rem',
                  color: 'var(--white)',
                  fontWeight: 600,
                  marginBottom: '6px',
                  lineHeight: 1.35
                }}>
                  {spirit.summary}
                </div>

                <p style={{
                  fontSize: '0.8rem',
                  color: 'var(--slate-300)',
                  lineHeight: 1.45,
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
