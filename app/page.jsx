import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Users, 
  FileCheck2, 
  Building2, 
  TrendingUp, 
  Layers,
  ChevronRight
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import ScrollFadeIn from '../components/ScrollFadeIn';
import { companyData } from '../data/companyData';

export const metadata = {
  title: 'SEMBADA — Solusi Terintegrasi & Manajemen Layanan Bisnis',
  description:
    'PT SMB (SEMBADA) menghadirkan pendampingan SPPG, IT solutions, pest control, dan risk insurance untuk korporasi di seluruh Indonesia.',
};

export default function HomePage() {
  const { info, mainServices, testimonials, clients } = companyData;

  const serviceIcons = {
    sppg: Users,
    'it-solutions': Cpu,
    'pest-control': ShieldCheck,
    'risk-insurance': FileCheck2,
  };

  return (
    <>
      {/* 1. Apple Hero Spotlight */}
      <HeroSection
        badge="One Stop Consultant & Service Management"
        title="Solusi Terpadu. Efisiensi Nyata. Hasil Teruji."
        subtitle="SEMBADA mendampingi tata kelola, transformasi digital, higienitas fasilitas, dan proteksi risiko bisnis Anda dalam satu pintu layanan terintegrasi."
        primaryBtnText="Jelajahi 4 Layanan"
        primaryBtnHref="/layanan"
        secondaryBtnText="Hubungi Konsultan"
        secondaryBtnHref="/kontak"
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&auto=format&fit=crop&q=80"
      >
        {/* Showcase Spotlight Hero Card (Apple Studio Display / Bento aesthetic) */}
        <ScrollFadeIn delay={150}>
          <div className="relative mx-auto max-w-5xl rounded-3xl sm:rounded-[36px] overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-[#081a36] via-[#0c244d] to-[#040d1c] text-white p-6 sm:p-10 md:p-14">
            
            {/* Ambient Lighting Gradient */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-sembada-gold/15 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-sembada-gold text-xs font-semibold tracking-wide">
                  <span>PT SMB</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                  Mitra Strategis Pertumbuhan & Manajemen Risiko Bisnis Anda
                </h2>

                <p className="text-sm sm:text-base text-apple-muted leading-relaxed">
                  Tidak perlu lagi kerumitan mengelola banyak vendor berbeda. Kami mengintegrasikan kepatuhan regulasi, modernisasi teknologi informasi, perlindungan higienitas fasilitas, dan proteksi asuransi secara berkesinambungan.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-apple-muted">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-sembada-gold" />
                    <span>Layanan Seluruh Indonesia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-sembada-gold" />
                    <span>Standar Sertifikasi ISO+</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-black text-sembada-gold">100%</div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-1">Terintegrasi</div>
                  <div className="text-[11px] text-apple-muted mt-0.5">Satu pintu layanan</div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-black text-sembada-gold">30%+</div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-1">Efisiensi Biaya</div>
                  <div className="text-[11px] text-apple-muted mt-0.5">Optimasi sumber daya</div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-black text-sembada-gold">1.450+</div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-1">Mitra Klien</div>
                  <div className="text-[11px] text-apple-muted mt-0.5">Jaringan nasional</div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-black text-sembada-gold">38</div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-1">Provinsi</div>
                  <div className="text-[11px] text-apple-muted mt-0.5">Cakupan jangkauan</div>
                </div>
              </div>

            </div>
          </div>
        </ScrollFadeIn>
      </HeroSection>

      {/* 2. Explore The Lineup (4 Layanan Utama ala Apple Product Lineup) */}
      <SectionWrapper id="layanan" bg="gray">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-black/[0.06] text-xs font-semibold text-apple-secondary mb-3">
            <span>Portfolio Layanan Terpadu</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-apple-dark">
            Dirancang untuk Performa Tertinggi.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-apple-secondary leading-relaxed">
            Empat pilar solusi yang bekerja secara harmonis untuk mendorong efisiensi, kepatuhan, dan skalabilitas bisnis perusahaan Anda.
          </p>
        </div>

        {/* 4 Services Grid (1 col on mobile, 2 col on tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {mainServices.map((service, idx) => {
            const IconComponent = serviceIcons[service.id] || Layers;
            return (
              <ScrollFadeIn key={service.id} delay={idx * 100}>
                <Card className="h-full group hover:shadow-apple-card transition-all duration-300">
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold text-sembada-gold tracking-wider uppercase">
                      {service.badge}
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-apple-gray text-apple-secondary font-medium">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-apple-gray flex items-center justify-center flex-shrink-0 group-hover:bg-sembada-gold/10 transition-colors">
                      <IconComponent size={20} className="text-apple-dark group-hover:text-sembada-gold transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-apple-dark">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-sembada-gold font-medium mt-0.5">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-apple-secondary leading-relaxed mb-6 flex-1">
                    {service.shortDesc}
                  </p>

                  {/* Image with next/image */}
                  <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 bg-apple-gray">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6 border-t border-black/[0.05] pt-4">
                    {service.highlights.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-apple-secondary">
                        <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-2 border-t border-black/[0.05]">
                    <Link
                      href={`/layanan#${service.id}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-apple-dark group-hover:text-sembada-gold transition-colors"
                    >
                      <span>Pelajari detail layanan</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              </ScrollFadeIn>
            );
          })}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Link
            href="/layanan"
            className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-apple-dark hover:bg-sembada-navy-dark text-white font-medium text-sm transition-all duration-300 shadow-sm active:scale-95"
          >
            <span>Lihat Semua Spesifikasi Layanan</span>
            <ChevronRight size={16} className="text-sembada-gold" />
          </Link>
        </div>
      </SectionWrapper>

      {/* 3. Keunggulan Nilai (4 Pilar Nilai Kerja) */}
      <SectionWrapper bg="white">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold text-sembada-gold tracking-wider uppercase">
            Standar Kerja SEMBADA
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-apple-dark mt-2">
            Mengapa Perusahaan Memilih Kami.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-apple-secondary leading-relaxed">
            Fondasi kerja yang konsisten menjamin setiap solusi dieksekusi tepat waktu, transparan, dan berdampak nyata.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.pillarsDetail.map((pillar, idx) => (
            <ScrollFadeIn key={pillar.id} delay={idx * 100}>
              <div className="rounded-3xl p-6 sm:p-7 bg-apple-subtle border border-black/[0.06] hover:border-black/[0.12] transition-all duration-300 h-full flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-sembada-gold mb-3">
                  {pillar.number}
                </span>
                <h3 className="text-lg font-bold text-apple-dark mb-1">
                  {pillar.name}
                </h3>
                <p className="text-xs font-semibold text-apple-muted mb-3">
                  {pillar.tagline}
                </p>
                <p className="text-xs sm:text-sm text-apple-secondary leading-relaxed flex-1">
                  {pillar.description}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. Trusted Clients & Partners Teaser */}
      <SectionWrapper bg="gray">
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-xs font-semibold text-sembada-gold tracking-wider uppercase">
            Kemitraan Nasional
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-apple-dark mt-2">
            Dipercaya Oleh Pelaku Industri Terkemuka.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-apple-secondary">
            Mulai dari perusahaan agro, rantai pasok modern, hingga manufaktur berskala nasional.
          </p>
        </div>

        {/* Client Logos Grid - 2 cols on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-black/[0.05] flex flex-col items-center justify-center text-center hover:shadow-apple-subtle hover:border-black/[0.1] transition-all duration-200 min-h-[110px]"
            >
              <div className="w-9 h-9 rounded-xl bg-apple-gray flex items-center justify-center font-bold text-xs text-apple-dark mb-2">
                {client.logoText}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-apple-dark truncate w-full">
                {client.name}
              </span>
              <span className="text-[11px] text-apple-muted mt-0.5 truncate w-full">
                {client.sector}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/klien"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-apple-dark hover:text-sembada-gold transition-colors"
          >
            <span>Lihat testimoni lengkap dari mitra kami</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </SectionWrapper>

      {/* 5. Spotlight Apple Quote Testimonial */}
      {testimonials[0] && (
        <SectionWrapper bg="white">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-apple-subtle border border-black/[0.06] text-center relative overflow-hidden">
              <span className="text-4xl sm:text-5xl font-serif text-sembada-gold select-none leading-none">
                &ldquo;
              </span>
              <blockquote className="mt-2 text-lg sm:text-2xl md:text-3xl font-medium tracking-tight text-apple-dark leading-relaxed">
                {testimonials[0].quote}
              </blockquote>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-black/10">
                  <Image
                    src={testimonials[0].avatar}
                    alt={testimonials[0].author}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-sm sm:text-base font-bold text-apple-dark">
                    {testimonials[0].author}
                  </div>
                  <div className="text-xs text-apple-muted">
                    {testimonials[0].role} &mdash; {testimonials[0].company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* 6. Apple Minimalist Final CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#081a36] via-[#0c244d] to-[#040d1c] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-semibold text-sembada-gold tracking-widest uppercase">
            Langkah Selanjutnya
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mt-3 leading-tight">
            Siap Mengakselerasi Kinerja Bisnis Anda?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-apple-muted max-w-2xl mx-auto leading-relaxed">
            Diskusikan kebutuhan pendampingan SPPG, sistem IT, pest control, maupun proteksi asuransi bersama konsultan senior kami.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <Link
              href="/kontak"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-sembada-gold hover:bg-sembada-gold-hover text-apple-dark font-bold text-sm sm:text-base transition-all active:scale-95 shadow-lg"
            >
              <span>Hubungi Kami Sekarang</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href={info.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm sm:text-base border border-white/15 transition-all active:scale-95"
            >
              <span>Konsultasi WhatsApp</span>
            </a>
          </div>

          <p className="text-xs text-apple-muted mt-6">
            Layanan respon cepat &bull; {info.operationalHours}
          </p>
        </div>
      </section>
    </>
  );
}
