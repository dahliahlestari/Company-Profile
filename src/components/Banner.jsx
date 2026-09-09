import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Truck, Users, Sparkles, Play, Pause } from 'lucide-react';
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
      id="highlights"
      className="banner-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        position: 'relative',
        width: '100%',
        background: 'var(--apple-black)',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      {/* Background Image with Cinematic Dark Gradient Tint */}
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
      {/* Apple Midnight Gradient Overlay (Deep Contrast) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(7, 19, 34, 0.92) 0%, rgba(11, 25, 44, 0.96) 100%)'
      }} />

      {/* Spotlight Content Container (Expansive Apple Viewport) */}
      <div className="container banner-inner-container" style={{
        position: 'relative',
        zIndex: 2,
        paddingTop: 'clamp(56px, 7vw, 98px)',
        paddingBottom: 'clamp(56px, 7vw, 98px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: 'clamp(480px, 64vh, 600px)'
      }}>
        <div style={{ maxWidth: '860px' }}>
          
          {/* Apple Eyebrow: Pure Text, Titanium/Gold Tint */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--gold-400)',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.8rem',
            fontWeight: 650,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '14px'
          }}>
            <Sparkles size={13} />
            <span>Get the highlights.</span>
            <span style={{ opacity: 0.4 }}>•</span>
            <span style={{ color: 'var(--slate-apple-dark)', fontWeight: 500 }}>{current.badge}</span>
          </div>

          {/* Title: Apple Display Titanium & Gold Gradient */}
          <h1 style={{
            fontSize: 'clamp(2rem, 4.2vw, 3.6rem)',
            color: 'var(--white)',
            lineHeight: 1.06,
            fontWeight: 700,
            letterSpacing: '-0.038em',
            marginBottom: '16px'
          }}>
            <span className="text-gradient-titanium">{current.title}</span>
          </h1>

          {/* Subtitle: Apple Titanium Slate Text */}
          <p style={{
            fontSize: 'clamp(0.96rem, 1.2vw, 1.12rem)',
            color: 'var(--slate-apple-dark)',
            lineHeight: 1.5,
            letterSpacing: '-0.015em',
            marginBottom: '30px',
            maxWidth: '680px'
          }}>
            {current.subtitle}
          </p>

          {/* Action CTAs: Apple Pill Button + Chevron Action Link */}
          <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link
              to={current.primaryLink}
              className="btn btn-gold btn-md"
              style={{ borderRadius: 'var(--radius-pill)', padding: '12px 26px', fontWeight: 600 }}
            >
              <span>{current.primaryBtn}</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              to={current.secondaryLink}
              className="link-apple"
              style={{ fontSize: '1rem', fontWeight: 500 }}
            >
              <span>{current.secondaryBtn}</span>
              <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>›</span>
            </Link>
          </div>

        </div>

        {/* Carousel Navigation Bar (Apple Progress Capsule Bar) */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 'clamp(40px, 4.5vw, 60px)',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          flexWrap: 'wrap',
          gap: '14px'
        }}>
          {/* Apple Pill Progress Bar & Counter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.06)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              {banners.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  style={{
                    width: currentSlide === idx ? '32px' : '8px',
                    height: '5px',
                    borderRadius: 'var(--radius-pill)',
                    background: currentSlide === idx ? 'var(--gold-500)' : 'rgba(255, 255, 255, 0.25)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                    padding: 0
                  }}
                  aria-label={`Buka slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Play/Pause Scrubber Button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: 'var(--white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              aria-label={isPaused ? "Putar tayangan otomatis" : "Jeda tayangan otomatis"}
            >
              {isPaused ? <Play size={13} fill="currentColor" /> : <Pause size={13} fill="currentColor" />}
            </button>

            <span style={{ fontSize: '0.8rem', color: 'var(--slate-apple-dark)', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
              0{currentSlide + 1} / 0{banners.length}
            </span>
          </div>

          {/* Prev / Next Arrows: Circular Apple Controls */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={handlePrev}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'var(--white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              aria-label="Slide sebelumnya"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              onClick={handleNext}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'var(--white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              aria-label="Slide berikutnya"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

      </div>

      {/* Highlights Strip (4 Keunggulan PT. SMB) */}
      <div style={{
        background: 'rgba(11, 25, 44, 0.96)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '13px 0'
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
