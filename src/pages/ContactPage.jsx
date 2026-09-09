import React from 'react';
import PageHeader from '../components/PageHeader';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  return (
    <div>
      {/* 1. Page Header */}
      <PageHeader
        badge="Saluran Komunikasi Resmi"
        title="Hubungi SMB Sembada"
        subtitle="Tim kami siap membantu menjawab pertanyaan Anda seputar pengadaan komoditas, pergudangan, logistik distributor, serta konsultasi manajemen bisnis."
        breadcrumbCurrent="Kontak"
      />

      {/* 2. Contact Section (Form, Office Card, FAQ) */}
      <ContactSection />
    </div>
  );
}
