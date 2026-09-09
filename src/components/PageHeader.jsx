import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader({ badge, title, subtitle, breadcrumbCurrent }) {
  return (
    <div style={{
      background: 'var(--navy-900)',
      color: 'var(--white)',
      paddingTop: 'clamp(28px, 4vw, 56px)',
      paddingBottom: 'clamp(28px, 4vw, 56px)',
      borderBottom: '1px solid rgba(229, 168, 59, 0.25)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '12px',
          fontSize: '0.78rem',
          flexWrap: 'wrap'
        }}>
          <Link to="/" style={{ color: 'var(--gold-400)', fontWeight: 700 }}>
            BERANDA
          </Link>
          <span style={{ color: 'var(--slate-500)' }}>/</span>
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
          fontSize: 'clamp(1.25rem, 2.1vw, 1.85rem)',
          color: 'var(--white)',
          fontWeight: 700,
          letterSpacing: '-0.018em',
          marginBottom: '8px',
          lineHeight: 1.25
        }}>
          {title}
        </h1>

        {subtitle && (
          <p style={{
            fontSize: 'clamp(0.82rem, 0.95vw, 0.92rem)',
            color: 'var(--slate-300)',
            maxWidth: '720px',
            lineHeight: 1.55,
            margin: 0
          }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
