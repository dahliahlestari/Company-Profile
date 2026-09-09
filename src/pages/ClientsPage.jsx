import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Handshake } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Clients from '../components/Clients';
import { companyData } from '../data/companyData';

export default function ClientsPage() {
  const { info } = companyData;

  return (
    <div>
      {/* 1. Page Header */}
      <PageHeader
        badge="Ekosistem Kemitraan Nasional"
        title="Klien, Mitra Strategis & Testimoni"
        subtitle="Kepercayaan dari lebih dari 1.450 pelaku industri, produsen manufaktur, dan jaringan toko ritel di seluruh Indonesia adalah bukti nyata komitmen SMB Sembada."
        breadcrumbCurrent="Klien & Mitra"
      />

      {/* 2. Clients Grid & Testimonials */}
      <Clients />

      {/* 3. Partnership Opportunity Callout */}
      <section style={{
        background: 'var(--white)',
        borderTop: '1px solid var(--slate-200)',
        padding: 'clamp(48px, 6vw, 72px) 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-badge">
            <Handshake size={14} />
            <span>Peluang Kerjasama Baru</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)', color: 'var(--navy-900)', marginBottom: '14px' }}>
            Bergabunglah Menjadi Bagian dari Jaringan <span className="text-gold">SMB</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: '28px' }}>
            Apakah Anda produsen yang membutuhkan jalur distribusi nasional, atau pemilik toko/agen yang mencari pasokan komoditas stabil dan bimbingan bisnis? SMB siap bermitra dengan Anda.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/kontak" className="btn btn-navy btn-lg">
              <span>Daftar Menjadi Mitra</span>
              <ArrowRight size={15} />
            </Link>
            <a
              href={`https://wa.me/${info.whatsapp}?text=Halo%20SMB%20Sembada,%20saya%20tertarik%20mendaftarkan%20perusahaan%20saya%20menjadi%20mitra%20distributor.`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-gold btn-lg"
            >
              <span>Konsultasi Cepat via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
