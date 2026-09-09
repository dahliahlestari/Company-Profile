import React from 'react';
import { X, GraduationCap, ExternalLink } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function TeamModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(255, 255, 255, 0.15)',
            border: 'none',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
          aria-label="Tutup modal"
        >
          <X size={18} color="var(--white)" />
        </button>

        {/* Header with Solid Navy */}
        <div style={{
          background: 'var(--navy-900)',
          color: 'var(--white)',
          padding: 'clamp(24px, 3.5vw, 32px)',
          borderTopLeftRadius: 'var(--radius-lg)',
          borderTopRightRadius: 'var(--radius-lg)',
          borderBottom: '2px solid var(--gold-500)',
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <img
            src={member.image}
            alt={member.name}
            style={{
              width: '88px',
              height: '88px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid var(--gold-400)'
            }}
          />
          <div style={{ flex: 1, minWidth: '220px' }}>
            <span style={{
              display: 'inline-block',
              padding: '2px 7px',
              background: 'rgba(212, 175, 55, 0.2)',
              color: 'var(--gold-300)',
              borderRadius: '3px',
              fontSize: '0.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '4px'
            }}>
              {member.category}
            </span>
            <h3 style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', color: 'var(--white)', marginBottom: '3px' }}>
              {member.name}
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--gold-300)', margin: 0 }}>
              {member.position}
            </p>
          </div>
        </div>

        {/* Body Content */}
        <div style={{ padding: 'clamp(16px, 2.5vw, 24px)' }}>
          
          {/* Biografi */}
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ fontSize: '0.82rem', color: 'var(--navy-900)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Profil & Rekam Jejak
            </h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--slate-700)', lineHeight: 1.6 }}>
              {member.bio}
            </p>
          </div>

          {/* Pendidikan */}
          {member.education && (
            <div style={{
              background: 'var(--slate-50)',
              borderRadius: 'var(--radius-md)',
              padding: '12px 14px',
              border: '1px solid var(--slate-200)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px'
            }}>
              <GraduationCap size={18} color="var(--gold-700)" />
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--slate-500)', textTransform: 'uppercase', fontWeight: 600 }}>
                  Latar Belakang Akademis
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--navy-900)', fontWeight: 600 }}>
                  {member.education}
                </div>
              </div>
            </div>
          )}

          {/* Area Keahlian */}
          {member.expertise && (
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '0.8rem', color: 'var(--navy-900)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Area Keahlian Utama
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {member.expertise.map((exp, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'var(--navy-50)',
                      color: 'var(--navy-800)',
                      border: '1px solid var(--navy-100)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.75rem',
                      fontWeight: 600
                    }}
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', paddingTop: '14px', borderTop: '1px solid var(--slate-200)' }}>
            <button
              onClick={onClose}
              className="btn btn-outline-navy btn-sm"
            >
              Tutup
            </button>
            <a
              href={`https://wa.me/${companyData.info.whatsapp}?text=Halo%20SMB,%20saya%20ingin%20berkonsultasi%20dengan%20tim%20${encodeURIComponent(member.name)}.`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-gold btn-sm"
            >
              <span>Hubungi Tim SMB</span>
              <ExternalLink size={13} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
