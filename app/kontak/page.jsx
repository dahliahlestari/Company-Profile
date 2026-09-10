import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  ShieldCheck
} from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SectionWrapper from '../../components/SectionWrapper';
import Card from '../../components/Card';
import ContactForm from '../../components/ContactForm';
import FaqAccordion from '../../components/FaqAccordion';
import { companyData } from '../../data/companyData';

export const metadata = {
  title: 'Kontak Resmi — PT SMB | SEMBADA',
  description:
    'Hubungi PT SMB (SEMBADA) untuk konsultasi pendampingan SPPG, solusi IT, pest control, dan proteksi asuransi bisnis Anda.',
};

export default function KontakPage() {
  const { info, faqs } = companyData;

  const contactChannels = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Konsultasi',
      desc: 'Respon cepat untuk diskusi awal & pengajuan jadwal',
      value: info.whatsappDisplay,
      href: info.whatsappUrl,
      action: 'Kirim Pesan WhatsApp',
      isPrimary: true,
    },
    {
      icon: Phone,
      title: 'Saluran Telepon',
      desc: 'Layanan panggilan langsung kantor operasional',
      value: info.phoneDisplay,
      href: `tel:${info.phone}`,
      action: 'Panggil Sekarang',
      isPrimary: false,
    },
    {
      icon: Mail,
      title: 'Email Resmi',
      desc: 'Untuk korespondensi formal, proposal, dan tender',
      value: info.email,
      href: `mailto:${info.email}`,
      action: 'Kirim Email',
      isPrimary: false,
    },
  ];

  return (
    <>
      {/* 1. Page Hero */}
      <HeroSection
        badge="Saluran Komunikasi Resmi"
        title="Mari Berdiskusi Mengenai Solusi Bisnis Anda."
        subtitle="Tim konsultan ahli SEMBADA siap mendampingi kebutuhan kepatuhan regulasi, modernisasi teknologi, dan tata kelola operasional perusahaan Anda."
        primaryBtnText="Konsultasi WhatsApp"
        primaryBtnHref={info.whatsappUrl}
        secondaryBtnText="Isi Formulir"
        secondaryBtnHref="#form"
        bgImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&auto=format&fit=crop&q=80"
      />

      {/* 2. Contact Channels & Interactive Form */}
      <SectionWrapper id="form" bg="gray">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Channels & Office Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold text-sembada-gold uppercase tracking-wider">
                Respon Cepat
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-apple-dark mt-1">
                Akses Langsung ke Tim Representatif
              </h2>
              <p className="text-sm text-apple-secondary mt-2 leading-relaxed">
                Pilih saluran komunikasi yang paling nyaman bagi Anda untuk berkonsultasi mengenai layanan kami.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3.5">
              {contactChannels.map((channel, idx) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={idx}
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`block p-5 rounded-3xl border transition-all duration-200 active:scale-[0.99] ${
                      channel.isPrimary
                        ? 'bg-emerald-50/70 border-emerald-200 hover:border-emerald-300 hover:shadow-sm'
                        : 'bg-white border-black/[0.06] hover:border-black/[0.12] hover:shadow-apple-subtle'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                          channel.isPrimary ? 'bg-emerald-600 text-white' : 'bg-apple-gray text-apple-dark'
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-apple-muted">
                          {channel.title}
                        </div>
                        <div className="text-sm sm:text-base font-bold text-apple-dark truncate mt-0.5">
                          {channel.value}
                        </div>
                        <div className="text-xs text-apple-secondary mt-1">
                          {channel.desc}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Office & Operational Hours Card */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-apple-subtle space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-sembada-gold mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-apple-dark">Kantor & Jangkauan Operasional</div>
                  <div className="text-sm font-medium text-apple-secondary mt-0.5">
                    {info.address.street}
                  </div>
                  <div className="text-xs text-apple-muted mt-0.5">
                    {info.address.area}
                  </div>
                </div>
              </div>

              <div className="border-t border-black/[0.05] pt-3 flex items-start gap-3">
                <Clock size={18} className="text-sembada-gold mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-apple-dark">Jam Operasional Layanan</div>
                  <div className="text-xs sm:text-sm text-apple-secondary mt-0.5">
                    {info.operationalHours}
                  </div>
                </div>
              </div>

              <div className="border-t border-black/[0.05] pt-3 flex items-center gap-2 text-xs text-apple-secondary">
                <ShieldCheck size={16} className="text-emerald-600 flex-shrink-0" />
                <span>Konsultasi awal & asesmen kebutuhan bebas biaya</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </SectionWrapper>

      {/* 3. FAQ Section */}
      <SectionWrapper id="faq" bg="white">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-xs font-semibold text-sembada-gold uppercase tracking-wider">
            Bantuan & Pertanyaan
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-apple-dark mt-2">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-2 text-sm sm:text-base text-apple-secondary">
            Jawaban informatif seputar proses kemitraan, durasi pengerjaan, dan cakupan layanan SEMBADA.
          </p>
        </div>

        <FaqAccordion faqs={faqs} />
      </SectionWrapper>
    </>
  );
}
