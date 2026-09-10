'use client';

import { useState } from 'react';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'sppg',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission / create direct WhatsApp link alternative
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const getWhatsAppDirectUrl = () => {
    const text = `Halo SEMBADA,%0A%0ASaya ingin berkonsultasi mengenai layanan.%0ANama: ${encodeURIComponent(
      formData.name || '-'
    )}%0APerusahaan: ${encodeURIComponent(
      formData.company || '-'
    )}%0ALayanan: ${encodeURIComponent(
      formData.service || '-'
    )}%0APesan: ${encodeURIComponent(formData.message || '-')}`;
    return `https://wa.me/${companyData.info.whatsapp}?text=${text}`;
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/[0.08]">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-apple-dark">
          Kirim Pesan Konsultasi
        </h3>
        <p className="text-xs sm:text-sm text-apple-secondary mt-1">
          Konsultan kami akan merespons dalam waktu 1x24 jam kerja.
        </p>
      </div>

      {isSubmitted ? (
        <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 size={32} />
          </div>
          <h4 className="text-xl font-bold text-apple-dark">
            Terima Kasih, {formData.name || 'Bapak/Ibu'}!
          </h4>
          <p className="text-sm text-apple-secondary max-w-md mx-auto leading-relaxed">
            Permintaan konsultasi Anda telah kami terima. Tim representatif PT. SMB akan segera menghubungi Anda melalui nomor telepon atau email yang tertera.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppDirectUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-all"
            >
              <MessageCircle size={16} />
              <span>Lanjutkan Langsung di WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  company: '',
                  phone: '',
                  email: '',
                  service: 'sppg',
                  message: '',
                });
              }}
              className="inline-flex items-center h-11 px-5 rounded-full bg-apple-gray text-apple-dark text-xs sm:text-sm font-medium hover:bg-black/[0.06] transition-colors"
            >
              <span>Kirim Pesan Lain</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-apple-dark mb-1.5">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Contoh: Hendra Wijaya"
                className="w-full h-12 px-4 rounded-2xl bg-apple-subtle border border-black/[0.08] text-sm text-apple-dark placeholder:text-apple-muted focus:outline-none focus:ring-2 focus:ring-sembada-navy/30 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-xs font-semibold text-apple-dark mb-1.5">
                Nama Perusahaan / Organisasi <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Contoh: PT Sumber Makmur"
                className="w-full h-12 px-4 rounded-2xl bg-apple-subtle border border-black/[0.08] text-sm text-apple-dark placeholder:text-apple-muted focus:outline-none focus:ring-2 focus:ring-sembada-navy/30 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-apple-dark mb-1.5">
                Nomor WhatsApp / Telepon <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Contoh: 081234567890"
                className="w-full h-12 px-4 rounded-2xl bg-apple-subtle border border-black/[0.08] text-sm text-apple-dark placeholder:text-apple-muted focus:outline-none focus:ring-2 focus:ring-sembada-navy/30 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-apple-dark mb-1.5">
                Alamat Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Contoh: info@perusahaan.com"
                className="w-full h-12 px-4 rounded-2xl bg-apple-subtle border border-black/[0.08] text-sm text-apple-dark placeholder:text-apple-muted focus:outline-none focus:ring-2 focus:ring-sembada-navy/30 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-xs font-semibold text-apple-dark mb-1.5">
              Layanan yang Diminati <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full h-12 px-4 rounded-2xl bg-apple-subtle border border-black/[0.08] text-sm text-apple-dark focus:outline-none focus:ring-2 focus:ring-sembada-navy/30 focus:bg-white transition-all"
            >
              <option value="sppg">Pendampingan SPPG (Audit & Standardisasi)</option>
              <option value="it-solutions">IT Solutions (Digital System & ERP)</option>
              <option value="pest-control">Pest Control (Sanitasi Industri)</option>
              <option value="risk-insurance">Risk Insurance (Proteksi Aset Bisnis)</option>
              <option value="multi-services">Kombinasi Terpadu Lebih Dari Satu Layanan</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-apple-dark mb-1.5">
              Pesan / Gambaran Singkat Kebutuhan <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Jelaskan secara ringkas tantangan operasional atau target yang ingin dicapai perusahaan Anda..."
              className="w-full p-4 rounded-2xl bg-apple-subtle border border-black/[0.08] text-sm text-apple-dark placeholder:text-apple-muted focus:outline-none focus:ring-2 focus:ring-sembada-navy/30 focus:bg-white transition-all leading-relaxed"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 rounded-full bg-apple-dark hover:bg-black text-white font-semibold text-sm transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span>Mengirim Pesan...</span>
            ) : (
              <>
                <span>Kirim Permintaan Konsultasi</span>
                <Send size={15} className="text-white/80" />
              </>
            )}
          </button>

          <p className="text-[11px] text-center text-apple-muted pt-1">
            Data Anda terlindungi dan hanya digunakan untuk keperluan korespondensi resmi SEMBADA.
          </p>
        </form>
      )}
    </div>
  );
}
