'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
  }, [pathname]);

  // Lock body scroll when mobile menu is open
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
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/tentang' },
    { label: 'Layanan', href: '/layanan' },
    { label: 'Klien', href: '/klien' },
    { label: 'Blog & News', href: '/blog' },
    { label: 'Kontak', href: '/kontak' },
  ];

  return (
    <>
      {/* Main Sticky Header */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${isScrolled
            ? 'apple-glass border-b border-black/[0.06] shadow-apple-subtle py-3 sm:py-3.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-transparent py-4 sm:py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* Brand Logo & Corporate Identity */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sembada-navy/30 rounded-xl p-1 -m-1"
              aria-label="SEMBADA Beranda"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sembada-navy flex items-center justify-center border border-sembada-gold/40 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                <span className="font-sans font-black text-xs sm:text-sm text-sembada-gold tracking-wider">
                  SMB
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-base sm:text-lg font-bold tracking-tight text-apple-dark leading-none">
                  SEMBADA
                </span>
                <span className="text-[10px] sm:text-[11px] text-apple-muted tracking-wide font-normal truncate mt-0.5 max-w-[200px] sm:max-w-none">
                  PT SMB
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${isActive
                        ? 'text-apple-dark font-semibold bg-black/[0.04]'
                        : 'text-apple-secondary hover:text-apple-dark hover:bg-black/[0.02]'
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Desktop CTA + Mobile Hamburger */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* WhatsApp Quick Link (Desktop) */}
              <a
                href={companyData.info.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-apple-secondary hover:text-apple-dark px-3 py-2 rounded-full hover:bg-black/[0.03] transition-colors"
                title="Hubungi via WhatsApp"
              >
                <MessageCircle size={15} className="text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              {/* Desktop CTA Button */}
              <Link
                href="/kontak"
                className="hidden sm:inline-flex items-center gap-2 bg-apple-dark hover:bg-sembada-navy-dark text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 active:scale-95"
              >
                <span>Konsultasi</span>
                <ArrowRight size={14} className="text-white/80" />
              </Link>

              {/* Mobile Hamburger Toggle Button (min 44x44px touch target) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden flex items-center justify-center w-11 h-11 rounded-full text-apple-dark bg-black/[0.03] hover:bg-black/[0.06] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-sembada-navy/30"
                aria-label="Buka Menu Navigasi"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer so page content is never obscured by fixed navbar */}
      <div className="h-16 sm:h-20" />

      {/* Mobile Full-Screen Overlay Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-white/95 backdrop-blur-xl flex flex-col justify-between animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
        >
          {/* Drawer Header */}
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-4 flex items-center justify-between border-b border-black/[0.06]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-sembada-navy flex items-center justify-center border border-sembada-gold/40">
                <span className="font-sans font-black text-xs text-sembada-gold tracking-wider">
                  SMB
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-apple-dark leading-none">
                  SEMBADA
                </span>
                <span className="text-[10px] text-apple-muted">
                  PT SMB
                </span>
              </div>
            </Link>

            {/* Clear Close Button (min 44x44px touch target) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-11 h-11 rounded-full text-apple-dark bg-black/[0.04] hover:bg-black/[0.08] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-sembada-gold"
              aria-label="Tutup Menu Navigasi"
            >
              <X size={22} />
            </button>
          </div>

          {/* Drawer Menu Links - Generous touch targets >= 44px */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-center">
            <nav className="flex flex-col space-y-2 max-w-sm mx-auto w-full">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3.5 px-4 rounded-2xl text-lg sm:text-xl font-medium tracking-tight transition-all duration-200 min-h-[50px] ${isActive
                        ? 'text-apple-dark font-semibold bg-black/[0.05]'
                        : 'text-apple-secondary hover:text-apple-dark hover:bg-black/[0.02]'
                      }`}
                  >
                    <span>{link.label}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-sembada-navy" />
                    ) : (
                      <ArrowRight size={18} className="text-apple-muted" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Drawer Footer Actions */}
          <div className="p-6 border-t border-black/[0.06] bg-apple-subtle/80 flex flex-col gap-3 max-w-sm mx-auto w-full">
            <a
              href={companyData.info.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full min-h-[48px] rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-all active:scale-95"
            >
              <MessageCircle size={18} />
              <span>Konsultasi WhatsApp</span>
            </a>

            <Link
              href="/kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full min-h-[48px] rounded-full bg-apple-dark hover:bg-sembada-navy-dark text-white text-sm font-semibold transition-all active:scale-95"
            >
              <span>Hubungi Kami Langsung</span>
              <ArrowRight size={16} className="text-white/80" />
            </Link>

            <p className="text-center text-[11px] text-apple-muted mt-1">
              {companyData.info.operationalHours}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
