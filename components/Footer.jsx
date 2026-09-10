'use client';

import Link from 'next/link';
import { ArrowUp, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Footer() {
  const { info, mainServices } = companyData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-apple-gray text-apple-secondary border-t border-black/[0.06] text-xs sm:text-sm pt-14 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Apple Style Footnotes */}
        <div className="pb-8 mb-10 border-b border-black/[0.06] text-[11px] sm:text-xs text-apple-muted space-y-2 leading-relaxed">
          <p>
            1. Seluruh layanan pendampingan audit, sertifikasi, dan standardisasi sistem SPPG diselaraskan dengan peraturan kementerian dan otoritas berwenang Republik Indonesia.
          </p>
          <p>
            2. Klaim efisiensi hingga 30%+ dan 1.450+ kemitraan didasarkan pada kompilasi data implementasi manajemen dan otomasi terpadu PT SMB.
          </p>
          <p>
            3. Seluruh hak cipta, merek dagang, dan materi profil dilindungi oleh hukum yang berlaku di wilayah Republik Indonesia.
          </p>
        </div>

        {/* Apple 4-Column Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">

          {/* Col 1: Layanan Utama */}
          <div className="space-y-3">
            <h4 className="text-apple-dark font-semibold text-xs tracking-wider uppercase">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {mainServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/layanan#${service.id}`}
                    className="hover:text-apple-dark transition-colors inline-block py-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Perusahaan */}
          <div className="space-y-3">
            <h4 className="text-apple-dark font-semibold text-xs tracking-wider uppercase">
              Perusahaan
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/tentang" className="hover:text-apple-dark transition-colors inline-block py-1">
                  Tentang SEMBADA
                </Link>
              </li>
              <li>
                <Link href="/tentang#visi-misi" className="hover:text-apple-dark transition-colors inline-block py-1">
                  Visi, Misi & Nilai
                </Link>
              </li>
              <li>
                <Link href="/tentang#milestones" className="hover:text-apple-dark transition-colors inline-block py-1">
                  Jejak Langkah
                </Link>
              </li>
              <li>
                <Link href="/tentang#leadership" className="hover:text-apple-dark transition-colors inline-block py-1">
                  Dewan Pimpinan
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Klien & Mitra */}
          <div className="space-y-3">
            <h4 className="text-apple-dark font-semibold text-xs tracking-wider uppercase">
              Ekosistem
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/klien" className="hover:text-apple-dark transition-colors inline-block py-1">
                  Daftar Klien Nasional
                </Link>
              </li>
              <li>
                <Link href="/klien#testimoni" className="hover:text-apple-dark transition-colors inline-block py-1">
                  Testimoni Mitra
                </Link>
              </li>
              <li>
                <Link href="/layanan#alur" className="hover:text-apple-dark transition-colors inline-block py-1">
                  Alur Kerjasama
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-apple-dark transition-colors inline-block py-1">
                  Newsroom & Wawasan
                </Link>
              </li>
              <li>
                <Link href="/kontak#faq" className="hover:text-apple-dark transition-colors inline-block py-1">
                  Pertanyaan Umum (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Saluran Resmi */}
          <div className="space-y-3">
            <h4 className="text-apple-dark font-semibold text-xs tracking-wider uppercase">
              Kontak Resmi
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href={`tel:${info.phone}`}
                  className="hover:text-apple-dark transition-colors flex items-center gap-2 py-1"
                >
                  <Phone size={13} className="text-apple-muted flex-shrink-0" />
                  <span>{info.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${info.email}`}
                  className="hover:text-apple-dark transition-colors flex items-center gap-2 py-1"
                >
                  <Mail size={13} className="text-apple-muted flex-shrink-0" />
                  <span>{info.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={info.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-apple-dark transition-colors flex items-center gap-2 py-1"
                >
                  <MessageCircle size={13} className="text-emerald-600 flex-shrink-0" />
                  <span>WhatsApp Konsultasi</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-apple-muted py-1">
                <MapPin size={13} className="mt-1 flex-shrink-0" />
                <span>{info.address.area}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Apple Sub-Footer: Copyright, Corporate Info, Back To Top */}
        <div className="pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-apple-muted">
          <div>
            <p>
              &copy; {new Date().getFullYear()} {info.legalName}. Hak cipta dilindungi.
            </p>
            <p className="text-[11px] mt-0.5">
              {info.tagline} &mdash; Indonesia
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-apple-secondary hover:text-apple-dark transition-colors py-2 px-3 rounded-full hover:bg-black/[0.03]"
              aria-label="Kembali ke atas"
            >
              <span>Ke atas</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
