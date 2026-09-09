import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import VisionMission from '../components/VisionMission';
import Milestones from '../components/Milestones';
import { companyData } from '../data/companyData';

export default function WhoWeAre() {
  const { info } = companyData;

  return (
    <div>
      {/* 1. Hero Section (Header Who We Are & Key Stats) */}
      <Hero />

      {/* 2. Visi, Misi & Working Spirit (Nilai-Nilai Kerja ala Prasmul-ELI) */}
      <VisionMission />

      {/* 3. Jejak Langkah Perjalanan (Company Milestones) */}
      <Milestones />

      {/* 4. Bottom CTA: Meet Leadership Team */}
      <section style={{
        background: 'var(--slate-50)',
        borderTop: '1px solid var(--slate-200)',
        padding: 'clamp(48px, 6vw, 72px) 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="section-badge">
            <span>Langkah Selanjutnya</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)', color: 'var(--navy-900)', marginBottom: '14px' }}>
            Temui Para Ahli di Balik Kesuksesan <span className="text-gold">SMB</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: '28px' }}>
            Ketahui lebih dekat dewan direksi dan konsultan senior yang memimpin tata kelola rantai pasok dan advisory bisnis di SMB Sembada.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/pengurus" className="btn btn-navy btn-lg">
              <span>Meet Our Leadership Team</span>
              <ArrowRight size={15} />
            </Link>
            <Link to="/layanan" className="btn btn-outline-navy btn-lg">
              <span>Jelajahi Layanan Kami</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
