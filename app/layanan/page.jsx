import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  Users, 
  Cpu, 
  ShieldCheck, 
  FileCheck2,
  Layers
} from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SectionWrapper from '../../components/SectionWrapper';
import Card from '../../components/Card';
import ScrollFadeIn from '../../components/ScrollFadeIn';
import { companyData } from '../../data/companyData';

export const metadata = {
  title: 'Layanan — One Stop Consultant & Service Management | SEMBADA',
  description:
    'Eksplorasi 4 pilar layanan utama PT SMB: Pendampingan SPPG, IT Solutions, Pest Control, dan Risk Insurance.',
};

export default function LayananPage() {
  const { info, mainServices, workflows } = companyData;

  const serviceIcons = {
    sppg: Users,
    'it-solutions': Cpu,
    'pest-control': ShieldCheck,
    'risk-insurance': FileCheck2,
  };

  return (
    <>
      {/* 1. Page Hero */}
      <HeroSection
        badge="Portofolio Layanan Terpadu"
        title="Empat Solusi Terintegrasi. Satu Standar Keunggulan."
        subtitle="Dari pemenuhan audit regulasi hingga proteksi aset finansial, kami menghadirkan layanan menyeluruh untuk memastikan bisnis Anda berjalan efisien, patuh, dan aman."
        primaryBtnText="Konsultasi Kebutuhan"
        primaryBtnHref="/kontak"
        secondaryBtnText="Alur Kerjasama"
        secondaryBtnHref="#alur"
        bgImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&auto=format&fit=crop&q=80"
      />

      {/* 2. Detailed 4 Services List */}
      <div className="space-y-16 sm:space-y-24 py-12 sm:py-16 bg-apple-gray">
        {mainServices.map((service, index) => {
          const Icon = serviceIcons[service.id] || Layers;
          const isReversed = index % 2 === 1;

          return (
            <SectionWrapper key={service.id} id={service.id} bg="white" className="!py-12 sm:!py-16">
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                isReversed ? 'lg:flex-row-reverse' : ''
              }`}>
                
                {/* Left/Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-sembada-gold tracking-widest uppercase">
                      {service.badge}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-apple-gray text-apple-secondary font-medium">
                      {service.category}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-apple-gray flex items-center justify-center flex-shrink-0 text-apple-dark">
                      <Icon size={22} className="text-sembada-gold" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-apple-dark leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-sembada-gold font-medium mt-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-apple-secondary leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2.5 pt-2">
                    {service.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-3 text-xs sm:text-sm text-apple-dark font-medium">
                        <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables Metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-black/[0.06]">
                    {service.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="p-3 rounded-2xl bg-apple-subtle border border-black/[0.04]">
                        <div className="text-[11px] text-apple-muted">{deliv.label}</div>
                        <div className="text-xs sm:text-sm font-bold text-apple-dark mt-0.5 truncate">
                          {deliv.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={`https://wa.me/${info.whatsapp}?text=Halo%20SEMBADA,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-apple-dark hover:bg-black text-white text-xs sm:text-sm font-medium transition-all active:scale-95 shadow-sm"
                    >
                      <MessageCircle size={15} className="text-emerald-400" />
                      <span>Konsultasi {service.shortTitle}</span>
                    </a>

                    <Link
                      href="/kontak"
                      className="inline-flex items-center gap-1.5 h-11 px-5 rounded-full bg-apple-gray hover:bg-black/[0.06] text-apple-dark text-xs sm:text-sm font-medium border border-black/[0.06] transition-all"
                    >
                      <span>Ajukan Penawaran</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Right/Image Column with next/image */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <ScrollFadeIn delay={100}>
                    <div className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-3xl overflow-hidden shadow-apple-card border border-black/[0.08] bg-apple-gray">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-sm text-xs text-apple-dark font-medium flex items-center justify-between">
                        <span>Standar Mutu Terverifikasi & Berizin</span>
                        <span className="font-bold text-sembada-gold">SEMBADA Resmi</span>
                      </div>
                    </div>
                  </ScrollFadeIn>
                </div>

              </div>
            </SectionWrapper>
          );
        })}
      </div>

      {/* 3. Alur Kerjasama (Workflow 4 Steps) */}
      <SectionWrapper id="alur" bg="white">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold text-sembada-gold uppercase tracking-wider">
            Metodologi Kerja
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-apple-dark mt-2">
            Empat Tahapan Menuju Hasil Maksimal
          </h2>
          <p className="mt-3 text-sm sm:text-base text-apple-secondary">
            Proses kolaborasi yang terencana, terukur, dan transparan dari awal asesmen hingga pendampingan purna-proyek.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {workflows.map((flow, idx) => (
            <ScrollFadeIn key={idx} delay={idx * 100}>
              <div className="p-6 sm:p-7 rounded-3xl bg-apple-gray border border-black/[0.05] h-full flex flex-col">
                <span className="text-3xl font-black text-sembada-gold mb-3">
                  {flow.step}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-apple-dark mb-2">
                  {flow.title}
                </h3>
                <p className="text-xs sm:text-sm text-apple-secondary leading-relaxed flex-1">
                  {flow.desc}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-14">
          <Link
            href="/kontak"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-apple-dark hover:bg-black text-white font-medium text-sm transition-all duration-300 shadow-sm active:scale-95"
          >
            <span>Mulai Konsultasi Kebutuhan Anda</span>
            <ArrowRight size={16} className="text-sembada-gold" />
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
