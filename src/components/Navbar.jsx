import React, { useState, useEffect } from 'react';
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
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
    <header style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 1000, 
      width: '100%',
      background: 'rgba(7, 19, 34, 0.98)',
      backdropFilter: 'saturate(180%) blur(20px)',
      WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      paddingTop: 'env(safe-area-inset-top, 0px)'
    }}>
      {/* Top Bar (Solid Navy) - Visible on Desktop/Tablet, Hidden on Mobile */}
      <div className="topbar" style={{
        background: 'rgba(7, 19, 34, 0.96)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        color: 'var(--slate-300)',
        fontSize: '0.82rem',
        padding: '6px 0'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
            <a href={`tel:${companyData.info.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--slate-300)' }}>
              <Phone size={13} color="var(--gold-400)" />
              <span>{companyData.info.phone}</span>
            </a>
            <a href={`mailto:${companyData.info.email}`} className="topbar-email" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--slate-300)' }}>
              <Mail size={13} color="var(--gold-400)" />
              <span>{companyData.info.email}</span>
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', background: 'rgba(255,255,255,0.08)', padding: '2px 8px', borderRadius: '4px' }}>
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
              href={`https://wa.me/${companyData.info.whatsapp}?text=Halo%20PT.%20SMB,%20saya%20ingin%20berkonsultasi.`} 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                color: 'var(--gold-400)',
                fontWeight: 600
              }}
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav style={{
        background: 'rgba(7, 19, 34, 0.96)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        borderBottom: isScrolled ? '1px solid rgba(229, 168, 59, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)',
        padding: isScrolled ? '8px 0' : '11px 0',
        transition: 'padding 0.25s ease, border-color 0.25s ease'
      }}>
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

          {/* Desktop Nav Items with Multi-page NavLink (Apple Clean Typography) */}
          <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '26px' }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.86rem',
                  fontWeight: isActive ? 600 : 450,
                  color: isActive ? 'var(--gold-400)' : 'var(--slate-300)',
                  borderBottom: isActive ? '2px solid var(--gold-400)' : '2px solid transparent',
                  padding: '4px 0',
                  letterSpacing: '-0.01em',
                  transition: 'all 0.18s ease'
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Action CTA Desktop */}
          <div className="desktop-cta" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link
              to="/kontak"
              className="btn btn-gold btn-sm"
            >
              <span>Konsultasi Sekarang</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile Right Controls: Quick WA Pill + Apple Circle Toggle */}
          <div className="mobile-controls">
            <a 
              href={`https://wa.me/${companyData.info.whatsapp}?text=Halo%20Sembada,%20saya%20ingin%20berkonsultasi.`} 
              target="_blank" 
              rel="noreferrer"
              className="mobile-wa-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 12px',
                background: 'rgba(229, 168, 59, 0.15)',
                border: '1px solid rgba(229, 168, 59, 0.4)',
                borderRadius: 'var(--radius-pill)',
                color: 'var(--gold-400)',
                fontSize: '0.78rem',
                fontWeight: 650
              }}
            >
              <MessageCircle size={13} />
              <span>WA</span>
            </a>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                color: 'var(--gold-400)',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(229, 168, 59, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} color="var(--white)" /> : <Menu size={20} color="var(--gold-400)" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer (Apple iOS Fullscreen Sheet Style) */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {/* Top Bar inside Drawer: Brand & Language Toggle */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '14px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '6px'
          }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--gold-400)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              SEMBADA Navigation
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', background: 'rgba(255, 255, 255, 0.08)', padding: '3px 10px', borderRadius: 'var(--radius-pill)' }}>
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
          </div>

          {/* Navigation Links: Clean Apple Typographic List */}
          <nav style={{ display: 'flex', flexDirection: 'column' }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.18rem',
                  fontWeight: 650,
                  color: isActive ? 'var(--gold-400)' : 'var(--white)',
                  padding: '13px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  letterSpacing: '-0.025em',
                  textDecoration: 'none',
                  transition: 'color 0.18s ease'
                })}
              >
                <span>{link.label}</span>
                <ArrowRight size={15} color="var(--slate-500)" />
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs: Apple Full-Width Pills */}
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link
              to="/kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-gold btn-md"
              style={{ width: '100%', justifyContent: 'center', minHeight: '46px', borderRadius: 'var(--radius-pill)' }}
            >
              <span>Konsultasi Sekarang</span>
              <ArrowRight size={14} />
            </Link>
            <a
              href={`https://wa.me/${companyData.info.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-gold btn-md"
              style={{ width: '100%', justifyContent: 'center', minHeight: '46px', borderRadius: 'var(--radius-pill)' }}
            >
              <MessageCircle size={15} />
              <span>WhatsApp Direct ({companyData.info.phone})</span>
            </a>
          </div>

          {/* Bottom Info */}
          <div style={{
            marginTop: 'auto',
            paddingTop: '18px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '0.74rem',
            color: 'var(--slate-400)',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
            <div>📧 {companyData.info.email}</div>
            <div>📞 {companyData.info.phone}</div>
            <div style={{ color: 'var(--slate-500)', fontSize: '0.7rem', marginTop: '2px' }}>
              © {new Date().getFullYear()} {companyData.info.legalName}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .mobile-controls {
          display: none;
          align-items: center;
          gap: 8px;
        }

        .mobile-drawer {
          position: fixed;
          top: calc(env(safe-area-inset-top, 0px) + 88px);
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(7, 19, 34, 0.98);
          backdrop-filter: saturate(180%) blur(24px);
          -webkit-backdrop-filter: saturate(180%) blur(24px);
          z-index: 999;
          padding: 20px 20px 28px 20px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        @media (max-width: 1024px) {
          .desktop-menu { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-controls { display: flex !important; }
        }

        @media (max-width: 768px) {
          .navbar-subtitle { display: none !important; }
        }

        @media (max-width: 640px) {
          .topbar { display: none !important; }
          .mobile-drawer { top: calc(env(safe-area-inset-top, 0px) + 58px) !important; }
        }
      `}</style>
    </header>
  );
}
