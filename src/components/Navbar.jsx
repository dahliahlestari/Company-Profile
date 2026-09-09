import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Menu, X, ArrowRight, Globe } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('ID');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Beranda', to: '/' },
    { label: 'Tentang Kami', to: '/who-we-are' },
    { label: 'Layanan Utama', to: '/layanan' },
    { label: 'Tim Pengurus', to: '/pengurus' },
    { label: 'Klien & Mitra', to: '/klien' },
    { label: 'Blog & Berita', to: '/blog' },
    { label: 'Kontak', to: '/kontak' }
  ];

  return (
    <>
      <header className="site-header">
        {/* Top Bar (Solid Navy) - Visible on Desktop/Tablet, Hidden on Mobile */}
        <div className="topbar" style={{
          background: 'rgba(7, 19, 34, 0.98)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          color: 'var(--slate-300)',
          fontSize: '0.82rem',
          padding: '6px 0'
        }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
              <a href={`tel:${companyData.info.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--slate-300)', textDecoration: 'none' }}>
                <Phone size={13} color="var(--gold-400)" />
                <span>{companyData.info.phone}</span>
              </a>
              <a href={`mailto:${companyData.info.email}`} className="topbar-email" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--slate-300)', textDecoration: 'none' }}>
                <Mail size={13} color="var(--gold-400)" />
                <span>{companyData.info.email}</span>
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', background: 'rgba(255, 255, 255, 0.08)', padding: '2px 8px', borderRadius: '4px' }}>
                <Globe size={13} color="var(--gold-400)" />
                <button 
                  onClick={() => setLang('ID')} 
                  style={{ color: lang === 'ID' ? 'var(--gold-400)' : 'var(--slate-400)', fontWeight: lang === 'ID' ? 700 : 400, fontSize: '0.78rem', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  ID
                </button>
                <span style={{ opacity: 0.4 }}>|</span>
                <button 
                  onClick={() => setLang('EN')} 
                  style={{ color: lang === 'EN' ? 'var(--gold-400)' : 'var(--slate-400)', fontWeight: lang === 'EN' ? 700 : 400, fontSize: '0.78rem', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  EN
                </button>
              </div>
              <a 
                href={`https://wa.me/${companyData.info.whatsapp}?text=Halo%20Sembada,%20saya%20ingin%20berkonsultasi.`} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  color: 'var(--gold-400)',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav className={`main-navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
            
            {/* Brand Logo & Name (SEMBADA Branding) */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '9px', textDecoration: 'none', minWidth: 0, flexShrink: 1 }}>
              <div style={{
                width: '36px',
                height: '36px',
                background: 'var(--navy-950)',
                border: '1.5px solid var(--gold-500)',
                borderRadius: '7px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(229, 168, 59, 0.25)'
              }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: 'var(--gold-400)',
                  letterSpacing: '0.04em'
                }}>
                  SMB
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
                  fontWeight: 800,
                  color: 'var(--white)',
                  letterSpacing: '0.04em',
                  lineHeight: 1.12,
                  whiteSpace: 'nowrap',
                  textTransform: 'uppercase'
                }}>
                  SEMBADA
                </span>
                <span className="navbar-subtitle" style={{
                  fontSize: '0.62rem',
                  color: 'var(--slate-300)',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '240px'
                }}>
                  PT. Sembada Makmur Bersama
                </span>
              </div>
            </Link>

            {/* Desktop Nav Items */}
            <div className="desktop-menu">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `desktop-navlink ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Action CTA Desktop */}
            <div className="desktop-cta">
              <Link
                to="/kontak"
                className="btn btn-gold btn-sm"
              >
                <span>Konsultasi Sekarang</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile Right Controls: WA Pill + Clear Menu Toggle */}
            <div className="mobile-controls">
              <a 
                href={`https://wa.me/${companyData.info.whatsapp}?text=Halo%20Sembada,%20saya%20ingin%20berkonsultasi.`} 
                target="_blank" 
                rel="noreferrer"
                className="mobile-wa-btn"
              >
                <MessageCircle size={14} />
                <span>WA</span>
              </a>

              <button
                className="mobile-toggle"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Buka Menu"
              >
                <Menu size={16} />
                <span>Menu</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Quick Navigation Bar (Direct 1-tap horizontal pills on mobile) */}
        <div className="mobile-quicknav">
          <div className="mobile-quicknav-container">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `mobile-quicklink ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      {/* Spacer to guarantee page content is never hidden behind fixed header */}
      <div className="header-spacer" />

      {/* Fullscreen Mobile Drawer Portal (Mounts directly to document.body for 100% reliable rendering) */}
      {mobileMenuOpen && typeof document !== 'undefined' && createPortal(
        <div className="mobile-drawer-overlay">
          {/* Header inside drawer */}
          <div className="mobile-drawer-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
              <div style={{
                width: '34px',
                height: '34px',
                background: 'var(--navy-950)',
                border: '1.5px solid var(--gold-500)',
                borderRadius: '7px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(229, 168, 59, 0.25)'
              }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--gold-400)' }}>
                  SMB
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.12rem', fontWeight: 800, color: 'var(--white)', letterSpacing: '0.04em', lineHeight: 1.1 }}>
                  SEMBADA
                </span>
                <span style={{ fontSize: '0.58rem', color: 'var(--slate-400)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  PT. Sembada Makmur Bersama
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', background: 'rgba(255, 255, 255, 0.08)', padding: '4px 10px', borderRadius: 'var(--radius-pill)' }}>
                <Globe size={12} color="var(--gold-400)" />
                <button 
                  onClick={() => setLang('ID')} 
                  style={{ color: lang === 'ID' ? 'var(--gold-400)' : 'var(--slate-400)', fontWeight: lang === 'ID' ? 700 : 400, fontSize: '0.74rem', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  ID
                </button>
                <span style={{ opacity: 0.4, color: 'var(--slate-500)' }}>|</span>
                <button 
                  onClick={() => setLang('EN')} 
                  style={{ color: lang === 'EN' ? 'var(--gold-400)' : 'var(--slate-400)', fontWeight: lang === 'EN' ? 700 : 400, fontSize: '0.74rem', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  EN
                </button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Tutup Menu"
                className="mobile-drawer-close"
              >
                <X size={22} color="var(--gold-400)" />
              </button>
            </div>
          </div>

          {/* Navigation Links: Clean Apple Typographic List */}
          <nav className="mobile-drawer-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `mobile-drawer-link ${isActive ? 'active' : ''}`}
              >
                <span>{link.label}</span>
                <ArrowRight size={16} className="drawer-link-arrow" />
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs inside drawer */}
          <div className="mobile-drawer-actions">
            <Link
              to="/kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-gold btn-md"
              style={{ width: '100%', justifyContent: 'center', minHeight: '48px', borderRadius: 'var(--radius-pill)', fontWeight: 650 }}
            >
              <span>Konsultasi Sekarang</span>
              <ArrowRight size={15} />
            </Link>
            <a
              href={`https://wa.me/${companyData.info.whatsapp}?text=Halo%20Sembada,%20saya%20ingin%20berkonsultasi.`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-gold btn-md"
              style={{ width: '100%', justifyContent: 'center', minHeight: '48px', borderRadius: 'var(--radius-pill)', fontWeight: 600 }}
            >
              <MessageCircle size={16} />
              <span>WhatsApp Direct ({companyData.info.phone})</span>
            </a>
          </div>

          {/* Bottom Info inside drawer */}
          <div className="mobile-drawer-footer">
            <div>📧 {companyData.info.email}</div>
            <div>📞 {companyData.info.phone}</div>
            <div style={{ color: 'var(--slate-500)', fontSize: '0.7rem', marginTop: '4px' }}>
              © {new Date().getFullYear()} {companyData.info.legalName}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
