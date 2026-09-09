import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Truck, Users, Clock } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Banner() {
  const { banners } = companyData;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play timer
  useEffect(() => {
    if (isPaused || !banners || banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, banners]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  if (!banners || banners.length === 0) return null;

  const current = banners[currentSlide] || banners[0];
  if (!current) return null;

  return (
    <section
      className="banner-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        position: 'relative',
        width: '100%',
        background: 'var(--navy-950)',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(212, 175, 55, 0.3)'
      }}
    >
      {/* Background Image with Solid Dark Navy Overlay */}
      <div
        key={current.id}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${current.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.5s ease-in-out'
        }}
      />
      {/* Solid Navy Tint Overlay (No heavy multi-gradients) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(7, 19, 34, 0.88)'
      }} />

      {/* Banner Content Container (Expansive Fullscreen Width) */}
      <div className="container banner-inner-container" style={{
        position: 'relative',
        zIndex: 2,
        paddingTop: 'clamp(48px, 6vw, 96px)',
        paddingBottom: 'clamp(48px, 6vw, 96px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: 'clamp(460px, 60vh, 580px)'
      }}>
        <div style={{ maxWidth: '820px' }}>
          
          {/* Tagline / Eyebrow (Pure Text, No Border, Apple Style) */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--gold-400)',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            <span>{current.badge}</span>
          </div>

          {/* Title (Apple Standard Scale) */}
          <h2 style={{
            fontSize: 'clamp(1.3rem, 2.4vw, 2.25rem)',
            color: 'var(--white)',
            lineHeight: 1.22,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '12px'
          }}>
            {current.title}
          </h2>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(0.84rem, 1vw, 0.94rem)',
            color: 'var(--slate-200)',
            lineHeight: 1.55,
            marginBottom: '22px',
            maxWidth: '680px'
          }}>
            {current.subtitle}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to={current.primaryLink} className="btn btn-gold btn-md">
              <span>{current.primaryBtn}</span>
              <ArrowRight size={14} />
            </Link>
            <Link to={current.secondaryLink} className="btn btn-outline-gold btn-md">
              <span>{current.secondaryBtn}</span>
            </Link>
          </div>

        </div>

        {/* Carousel Navigation Bar (Bottom Row) */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 'clamp(32px, 3.5vw, 48px)',
          paddingTop: '16px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          flexWrap: 'wrap',
          gap: '14px'
        }}>
          {/* Indicators & Counter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              {banners.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  style={{
                    width: currentSlide === idx ? '24px' : '8px',
                    height: '5px',
                    borderRadius: '3px',
                    background: currentSlide === idx ? 'var(--gold-500)' : 'rgba(255, 255, 255, 0.25)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    padding: 0
                  }}
                  aria-label={`Buka slide ${idx + 1}`}
                />
              ))}
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--gold-400)', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
              0{currentSlide + 1} / 0{banners.length}
            </span>
          </div>

          {/* Prev / Next Arrows */}
          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              onClick={handlePrev}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'var(--white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Slide sebelumnya"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'var(--white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Slide berikutnya"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>

      {/* Highlights Strip (4 Keunggulan PT. SMB) */}
      <div style={{
        background: 'var(--navy-900)',
        borderTop: '1px solid rgba(212, 175, 55, 0.25)',
        padding: '11px 0'
      }}>
        <div className="container highlights-strip-grid" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '14px',
          fontSize: '0.8rem',
          color: 'var(--slate-300)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <Truck size={14} color="var(--gold-400)" />
            <span>Terintegrasi (One Stop Service)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <ShieldCheck size={14} color="var(--gold-400)" />
            <span>Profesional & Bersertifikasi</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <Clock size={14} color="var(--gold-400)" />
            <span>Efisiensi Biaya & Waktu</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <Users size={14} color="var(--gold-400)" />
            <span>Berorientasi Hasil Nyata</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .banner-section {
            min-height: calc(100svh - 52px) !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .banner-inner-container {
            flex: 1 !important;
            min-height: calc(100svh - 110px) !important;
            justify-content: space-between !important;
            padding-top: 24px !important;
            padding-bottom: 20px !important;
          }
          .highlights-strip-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
            font-size: 0.74rem !important;
          }
        }
      `}</style>
    </section>
  );
}
