import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ badge, title, subtitle, breadcrumbCurrent }) {
  return (
    <div style={{
      background: 'var(--navy-900)',
      color: 'var(--white)',
      paddingTop: 'clamp(40px, 5vw, 64px)',
      paddingBottom: 'clamp(40px, 5vw, 64px)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.25)'
    }}>
      <div className="container">
        {/* Breadcrumb ala Prasmul-ELI */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '16px',
          fontSize: '0.82rem',
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
          <div className="section-badge dark" style={{ marginBottom: '14px' }}>
            <span>{badge}</span>
          </div>
        )}

        <h1 style={{
          fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
          color: 'var(--white)',
          fontWeight: 800,
          marginBottom: '14px',
          lineHeight: 1.18
        }}>
          {title}
        </h1>

        {subtitle && (
          <p style={{
            fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
            color: 'var(--slate-300)',
            maxWidth: '780px',
            lineHeight: 1.6,
            margin: 0
          }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
