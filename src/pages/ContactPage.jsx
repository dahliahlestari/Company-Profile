import React from 'react';
import PageHeader from '../components/PageHeader';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  return (
    <div>
      {/* 1. Page Header */}
      <PageHeader
        badge="Saluran Komunikasi Resmi"
        title="Hubungi PT. SMB"
        subtitle="Tim kami siap membantu menjawab pertanyaan Anda seputar Pendampingan SPPG, IT Solutions, Pest Control, Risk Insurance, serta kemitraan bisnis."
        breadcrumbCurrent="Kontak"
      />

      {/* 2. Contact Section (Form, Office Card, FAQ) */}
      <ContactSection />
    </div>
  );
}
