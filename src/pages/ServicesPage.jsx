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
      title: 'Konsultasi & Analisis Kebutuhan',
      desc: 'Audiensi mendalam bersama tim konsultan ahli SMB untuk memetakan kebutuhan pendampingan sistem SPPG, solusi IT, proteksi hama, atau mitigasi risiko bisnis.'
    },
    {
      step: '02',
      title: 'Perumusan Solusi Terintegrasi',
      desc: 'Penyusunan rencana kerja sistematis, integrasi data & infrastruktur digital, serta kesepakatan Service Level Agreement (SLA) terukur.'
    },
    {
      step: '03',
      title: 'Eksekusi & Pendampingan Lapangan',
      desc: 'Penerapan langsung oleh tim ahli bersertifikat dengan standar kerja profesional, pelatihan SDM, instalasi sistem, dan inspeksi rutin.'
    },
    {
      step: '04',
      title: 'Evaluasi & Optimalisasi Berkelanjutan',
      desc: 'Laporan performa berkala, sertifikasi, serta evaluasi menyeluruh untuk memastikan efisiensi biaya & waktu dan hasil berdampak nyata.'
    }
  ];

  return (
    <div>
      {/* 1. Header Page */}
      <PageHeader
        badge="Portofolio Solusi PT. SMB"
        title="One Stop Consultant and Service Management"
        subtitle="Solusi terintegrasi mencakup Pendampingan SPPG, IT Solutions, Pest Control, hingga Risk Insurance untuk efisiensi bisnis Anda."
        breadcrumbCurrent="Layanan Utama"
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
              Tahapan Kemitraan <span className="text-gold">PT. SMB</span>
            </h2>
            <p className="section-subtitle">
              Proses kerja yang profesional, transparan, terstandar, dan berorientasi hasil demi kepastian solusi terbaik bagi bisnis Anda.
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
