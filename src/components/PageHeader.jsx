import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader({ badge, title, subtitle, breadcrumbCurrent }) {
  return (
    <div style={{
      background: 'var(--navy-950)',
      color: 'var(--white)',
      paddingTop: 'clamp(36px, 5vw, 64px)',
      paddingBottom: 'clamp(36px, 5vw, 64px)',
      borderBottom: '1px solid rgba(229, 168, 59, 0.22)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '14px',
          fontSize: '0.76rem',
          flexWrap: 'wrap'
        }}>
          <Link to="/" style={{ color: 'var(--gold-400)', fontWeight: 600, letterSpacing: '0.04em' }}>
            BERANDA
          </Link>
          <span style={{ color: 'var(--slate-apple-dark)' }}>/</span>
          <span style={{ color: 'var(--slate-300)', fontWeight: 500 }}>
            {breadcrumbCurrent ? breadcrumbCurrent.toUpperCase() : title.toUpperCase()}
          </span>
        </div>

        {badge && (
          <div className="section-badge dark" style={{ marginBottom: '10px' }}>
            <span>{badge}</span>
          </div>
        )}

        <h1 style={{
          fontSize: 'clamp(1.6rem, 2.6vw, 2.35rem)',
          color: 'var(--white)',
          fontWeight: 650,
          letterSpacing: '-0.028em',
          marginBottom: '10px',
          lineHeight: 1.16
        }}>
          {title}
        </h1>

        {subtitle && (
          <p style={{
            fontSize: 'clamp(0.9rem, 1.05vw, 1.02rem)',
            color: 'var(--slate-300)',
            maxWidth: '720px',
            lineHeight: 1.54,
            margin: 0
          }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
