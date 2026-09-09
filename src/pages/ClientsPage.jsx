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
        subtitle="Kepercayaan dari berbagai mitra korporasi, pelaku usaha, dan institusi terkemuka di seluruh Indonesia adalah bukti nyata komitmen PT. SMB."
        breadcrumbCurrent="Klien & Mitra"
      />

      {/* 2. Clients Grid & Testimonials */}
      <Clients />

      {/* 3. Partnership Opportunity Callout */}
      <section style={{
        background: 'var(--white)',
        borderTop: '1px solid var(--slate-200)',
        padding: 'clamp(36px, 4.5vw, 56px) 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-badge">
            <Handshake size={14} />
            <span>Peluang Kerjasama Baru</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', color: 'var(--navy-900)', marginBottom: '10px' }}>
            Bergabunglah Menjadi Bagian dari Jaringan <span className="text-gold">PT. SMB</span>
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: '22px' }}>
            Apakah perusahaan Anda membutuhkan pendampingan SPPG, solusi teknologi IT, pengendalian hama pest control, atau manajemen asuransi risiko? PT. SMB siap menjadi partner strategis Anda.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/kontak" className="btn btn-navy btn-md">
              <span>Daftar Menjadi Mitra</span>
              <ArrowRight size={14} />
            </Link>
            <a
              href={`https://wa.me/${info.whatsapp}?text=Halo%20PT.%20SMB,%20saya%20tertarik%20untuk%20bermitra.`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-gold btn-md"
            >
              <span>Konsultasi Cepat via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
