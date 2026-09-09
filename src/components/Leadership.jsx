import React, { useState } from 'react';
import { Users, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';
import TeamModal from './TeamModal';

const LinkedinIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export default function Leadership() {
  const { leadershipTeam } = companyData;
  const [selectedMember, setSelectedMember] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredTeam = filterCategory === 'all'
    ? leadershipTeam
    : leadershipTeam.filter(m => m.category === filterCategory);

  return (
    <section id="pengurus" className="section-pad" style={{ background: 'var(--white)', position: 'relative' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Users size={14} />
            <span>Meet Our Leadership Team</span>
          </div>
          <h2 className="section-title">
            Dewan Pengurus & <span className="text-gold">Konsultan Senior</span>
          </h2>
          <p className="section-subtitle">
            Para eksekutif dan konsultan ahli yang berdedikasi memimpin PT. SMB untuk terus memberikan solusi profesional, terintegrasi, dan tepercaya bagi bisnis Anda.
          </p>

          {/* Flat Category Filter */}
          <div style={{
            display: 'inline-flex',
            background: 'var(--slate-100)',
            padding: '3px',
            borderRadius: 'var(--radius-full)',
            marginTop: '16px',
            gap: '4px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => setFilterCategory('all')}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 600,
                fontFamily: 'var(--font-heading)',
                background: filterCategory === 'all' ? 'var(--navy-900)' : 'transparent',
                color: filterCategory === 'all' ? 'var(--white)' : 'var(--slate-600)',
                transition: 'background 0.15s ease'
              }}
            >
              Semua Pengurus
            </button>
            <button
              onClick={() => setFilterCategory('Dewan Direksi')}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 600,
                fontFamily: 'var(--font-heading)',
                background: filterCategory === 'Dewan Direksi' ? 'var(--gold-500)' : 'transparent',
                color: filterCategory === 'Dewan Direksi' ? 'var(--navy-950)' : 'var(--slate-600)',
                transition: 'background 0.15s ease'
              }}
            >
              Dewan Direksi (BOD)
            </button>
            <button
              onClick={() => setFilterCategory('Konsultan Senior')}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 600,
                fontFamily: 'var(--font-heading)',
                background: filterCategory === 'Konsultan Senior' ? 'var(--navy-900)' : 'transparent',
                color: filterCategory === 'Konsultan Senior' ? 'var(--white)' : 'var(--slate-600)',
                transition: 'background 0.15s ease'
              }}
            >
              Konsultan Senior
            </button>
          </div>
        </div>

        {/* Team Grid (Fluid Expansive Layout) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              className="card-white"
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                borderTop: member.category === 'Dewan Direksi' ? '3px solid var(--gold-500)' : '3px solid var(--navy-800)'
              }}
            >
              {/* Profile Image */}
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden', background: 'var(--navy-950)' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: member.category === 'Dewan Direksi' ? 'var(--gold-500)' : 'var(--navy-900)',
                  color: member.category === 'Dewan Direksi' ? 'var(--navy-950)' : 'var(--white)',
                  padding: '3px 9px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}>
                  {member.category}
                </div>
              </div>

              {/* Info Body */}
              <div style={{ padding: 'clamp(14px, 2vw, 20px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{
                  fontSize: '1.05rem',
                  color: 'var(--navy-900)',
                  marginBottom: '3px',
                  lineHeight: 1.3
                }}>
                  {member.name}
                </h3>
                
                <div style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--gold-700)',
                  marginBottom: '10px',
                  minHeight: '26px'
                }}>
                  {member.position}
                </div>

                <p style={{
                  fontSize: '0.82rem',
                  color: 'var(--slate-600)',
                  lineHeight: 1.5,
                  marginBottom: '14px'
                }}>
                  {member.summary}
                </p>

                {/* Card Action */}
                <div style={{
                  marginTop: 'auto',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--slate-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <button
                    onClick={() => setSelectedMember(member)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      color: 'var(--navy-900)',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-700)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--navy-900)'}
                  >
                    <span>Lihat Profil Lengkap</span>
                    <ArrowRight size={13} />
                  </button>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'var(--slate-100)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--navy-800)'
                    }}
                    aria-label={`LinkedIn ${member.name}`}
                  >
                    <LinkedinIcon size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        <TeamModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />

      </div>
    </section>
  );
}
