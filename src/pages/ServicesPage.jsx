import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Services from '../components/Services';
import { companyData } from '../data/companyData';

export default function ServicesPage() {
  const { info } = companyData;

  const workflows = [
    {
      step: '01',
      title: 'Konsultasi Kebutuhan Awal',
      desc: 'Diskusi mendalam bersama tim spesialis SMB untuk memetakan volume distribusi, spesifikasi barang, atau tantangan bisnis Anda.'
    },
    {
      step: '02',
      title: 'Perumusan Strategi & SLA',
      desc: 'Penyusunan blueprint rute distribusi, sistem pergudangan, penetapan Service Level Agreement (SLA), atau modul pendampingan konsultasi.'
    },
    {
      step: '03',
      title: 'Integrasi & Eksekusi Lapangan',
      desc: 'Pengiriman pasokan komoditas, sinkronisasi sistem pencatatan WMS/ERP, serta pendampingan langsung dari konsultan ahli kami.'
    },
    {
      step: '04',
      title: 'Evaluasi & Optimalisasi Berkelanjutan',
      desc: 'Laporan performa berkala, peninjauan efisiensi biaya logistik, dan pengembangan kapasitas bisnis mitra jangka panjang.'
    }
  ];

  return (
    <div>
      {/* 1. Header Page */}
      <PageHeader
        badge="Portofolio Lengkap Solusi SMB"
        title="Layanan Kebutuhan Distributor & Konsultasi Bisnis"
        subtitle="Solusi terintegrasi untuk menjamin kestabilan pasokan rantai pasok dan mengakselerasi performa manajemen korporasi Anda."
        breadcrumbCurrent="Layanan & Distribusi"
      />

      {/* 2. Full Services Catalog with Interactive Tabs */}
      <Services />

      {/* 3. Workflow Steps */}
      <section className="section-pad" style={{ background: 'var(--white)', borderTop: '1px solid var(--slate-200)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span>Alur Kerjasama</span>
            </div>
            <h2 className="section-title">
              Tahapan Kemitraan <span className="text-gold">SMB Sembada</span>
            </h2>
            <p className="section-subtitle">
              Proses kerja yang terstruktur, transparan, dan terstandar demi kepastian hasil terbaik bagi bisnis Anda.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }} className="workflow-grid">
            {workflows.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--slate-50)',
                  border: '1px solid var(--slate-200)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'clamp(16px, 2vw, 24px)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: 'var(--gold-600)',
                  marginBottom: '6px'
                }}>
                  {item.step}
                </div>
                <h4 style={{ fontSize: '1.02rem', color: 'var(--navy-900)', marginBottom: '6px' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--slate-600)', lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link to="/kontak" className="btn btn-gold btn-md">
              <span>Mulai Konsultasi Kebutuhan Anda</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .workflow-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .workflow-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
