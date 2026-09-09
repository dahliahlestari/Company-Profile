import React, { useState, useEffect } from 'react';
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

  const current = banners[currentSlide];

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
      <div className="container" style={{
        position: 'relative',
        zIndex: 2,
        paddingTop: 'clamp(56px, 7vw, 96px)',
        paddingBottom: 'clamp(56px, 7vw, 96px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: 'clamp(440px, 58vh, 560px)'
      }}>
        <div style={{ maxWidth: '880px' }}>
          
          {/* Tagline Badge (Borderless Clean Text) */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--gold-400)',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.76rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            <span>{current.badge}</span>
          </div>

          {/* Title (Apple Scale: Clean, Refined, Never Screaming) */}
          <h2 style={{
            fontSize: 'clamp(1.4rem, 2.6vw, 2.2rem)',
            color: 'var(--white)',
            lineHeight: 1.22,
            fontWeight: 800,
            marginBottom: '10px'
          }}>
            {current.title}
          </h2>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(0.86rem, 1.05vw, 0.96rem)',
            color: 'var(--slate-200)',
            lineHeight: 1.55,
            marginBottom: '20px',
            maxWidth: '680px'
          }}>
            {current.subtitle}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href={current.primaryLink} className="btn btn-gold btn-lg">
              <span>{current.primaryBtn}</span>
              <ArrowRight size={16} />
            </a>
            <a href={current.secondaryLink} className="btn btn-outline-gold btn-lg">
              <span>{current.secondaryBtn}</span>
            </a>
          </div>

        </div>

        {/* Carousel Navigation Bar (Bottom Row) */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 'clamp(36px, 4vw, 56px)',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          {/* Indicators & Counter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              {banners.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  style={{
                    width: currentSlide === idx ? '28px' : '10px',
                    height: '6px',
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
            <span style={{ fontSize: '0.84rem', color: 'var(--gold-400)', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
              0{currentSlide + 1} / 0{banners.length}
            </span>
          </div>

          {/* Prev / Next Arrows */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={handlePrev}
              style={{
                width: '38px',
                height: '38px',
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
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              style={{
                width: '38px',
                height: '38px',
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
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>

      {/* Highlights Strip / Ticker at the base of the Banner */}
      <div style={{
        background: 'var(--navy-900)',
        borderTop: '1px solid rgba(212, 175, 55, 0.25)',
        padding: '12px 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.82rem',
          color: 'var(--slate-300)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Truck size={15} color="var(--gold-400)" />
            <span>Jangkauan Armada 38 Provinsi</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={15} color="var(--gold-400)" />
            <span>Pasokan Komoditas & WMS Terstandar</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Users size={15} color="var(--gold-400)" />
            <span>Advisory Bisnis Bersama Konsultan Senior</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={15} color="var(--gold-400)" />
            <span>Respon Cepat Kemitraan &lt; 24 Jam</span>
          </div>
        </div>
      </div>
    </section>
  );
}
