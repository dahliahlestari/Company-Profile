import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, Clock, MessageCircle, Menu, X, ChevronDown, ArrowRight, Globe } from 'lucide-react';
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
    { label: 'Layanan & Distribusi', to: '/layanan' },
    { label: 'Tim Pengurus', to: '/pengurus' },
    { label: 'Klien & Mitra', to: '/klien' },
    { label: 'Kontak', to: '/kontak' }
  ];

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%' }}>
      {/* Top Bar (Solid Navy) */}
      <div style={{
        background: 'var(--navy-950)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
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
            <div className="topbar-hours" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={13} color="var(--gold-400)" />
              <span>{companyData.info.operationalHours}</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', background: 'rgba(255,255,255,0.08)', padding: '2px 8px', borderRadius: '4px' }}>
              <Globe size={13} color="var(--gold-400)" />
              <button 
                onClick={() => setLang('ID')} 
                style={{ color: lang === 'ID' ? 'var(--gold-400)' : 'var(--slate-400)', fontWeight: lang === 'ID' ? 700 : 400, fontSize: '0.78rem' }}
              >
                ID
              </button>
              <span style={{ opacity: 0.4 }}>|</span>
              <button 
                onClick={() => setLang('EN')} 
                style={{ color: lang === 'EN' ? 'var(--gold-400)' : 'var(--slate-400)', fontWeight: lang === 'EN' ? 700 : 400, fontSize: '0.78rem' }}
              >
                EN
              </button>
            </div>
            <a 
              href={`https://wa.me/${companyData.info.whatsapp}?text=Halo%20SMB%20Sembada,%20saya%20ingin%20berkonsultasi.`} 
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
        background: 'var(--navy-900)',
        borderBottom: isScrolled ? '1px solid var(--gold-500)' : '1px solid rgba(255, 255, 255, 0.1)',
        padding: isScrolled ? '12px 0' : '16px 0',
        transition: 'padding 0.2s ease'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Brand Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{
              width: '42px',
              height: '42px',
              background: 'var(--navy-950)',
              border: '2px solid var(--gold-500)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontWeight: 800,
                color: 'var(--gold-400)',
                letterSpacing: '0.04em'
              }}>
                SMB
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--white)',
                  letterSpacing: '0.02em',
                  lineHeight: 1.1
                }}>
                  SEMBADA
                </span>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--gold-400)',
                  border: '1px solid var(--gold-600)',
                  padding: '1px 5px',
                  borderRadius: '3px',
                  letterSpacing: '0.06em'
                }}>
                  SMB
                </span>
              </div>
              <span style={{
                fontSize: '0.7rem',
                color: 'var(--slate-300)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontWeight: 500
              }}>
                Distributor & Business Advisory
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items with Multi-page NavLink */}
          <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: isActive ? 'var(--gold-400)' : 'var(--slate-200)',
                  borderBottom: isActive ? '2px solid var(--gold-500)' : '2px solid transparent',
                  padding: '4px 0',
                  transition: 'color 0.15s ease, border-color 0.15s ease'
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Action CTA */}
          <div className="desktop-cta" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link
              to="/kontak"
              className="btn btn-gold btn-sm"
            >
              <span>Konsultasi Sekarang</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              padding: '7px 10px',
              color: 'var(--gold-400)',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: '6px',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '96px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--navy-950)',
          zIndex: 999,
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          borderTop: '1px solid rgba(212, 175, 55, 0.3)',
          overflowY: 'auto'
        }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-heading)',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: isActive ? 'var(--gold-400)' : 'var(--white)',
                padding: '12px 14px',
                borderRadius: '6px',
                background: isActive ? 'var(--navy-800)' : 'var(--navy-900)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: isActive ? '1px solid var(--gold-500)' : '1px solid rgba(255,255,255,0.06)'
              })}
            >
              <span>{link.label}</span>
              <ChevronDown size={15} color="var(--gold-400)" style={{ transform: 'rotate(-90deg)' }} />
            </NavLink>
          ))}

          <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link
              to="/kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-gold"
              style={{ width: '100%' }}
            >
              <span>Hubungi Kami / Konsultasi</span>
              <ArrowRight size={15} />
            </Link>
            <a
              href={`https://wa.me/${companyData.info.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-gold"
              style={{ width: '100%' }}
            >
              <MessageCircle size={15} />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-menu { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (max-width: 640px) {
          .topbar-hours { display: none !important; }
          .topbar-email { display: none !important; }
        }
      `}</style>
    </header>
  );
}
