import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Leadership from '../components/Leadership';
import { companyData } from '../data/companyData';

export default function LeadershipPage() {
  const { info } = companyData;

  return (
    <div>
      {/* 1. Header Page ala Prasmul-ELI */}
      <PageHeader
        badge="Struktur Kepemimpinan SMB Sembada"
        title="Dewan Pengurus & Konsultan Senior"
        subtitle="Temui para eksekutif dan pakar industri yang memimpin arah strategis, integritas rantai pasok, dan layanan konsultasi bisnis di SMB Sembada."
        breadcrumbCurrent="Tim Pengurus"
      />

      {/* 2. Leadership Grid & Modals */}
      <Leadership />

      {/* 3. Bottom CTA Section */}
      <section style={{
        background: 'var(--navy-900)',
        color: 'var(--white)',
        padding: 'clamp(48px, 6vw, 72px) 0',
        borderTop: '2px solid var(--gold-500)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 style={{ fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)', color: 'var(--white)', marginBottom: '14px' }}>
            Ingin Berdiskusi Langsung dengan Tim Ahli <span className="text-gold">SMB?</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--slate-300)', lineHeight: 1.6, marginBottom: '28px' }}>
            Jadwalkan sesi audiensi atau konsultasi strategis bersama dewan pengurus dan konsultan senior kami untuk membahas peluang kemitraan korporasi Anda.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/kontak" className="btn btn-gold btn-lg">
              <span>Jadwalkan Sesi Diskusi</span>
              <ArrowRight size={15} />
            </Link>
            <a
              href={`https://wa.me/${info.whatsapp}?text=Halo%20SMB%20Sembada,%20saya%20ingin%20berkonsultasi%20dengan%20tim%20pengurus.`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-gold btn-lg"
            >
              <span>Hubungi via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
