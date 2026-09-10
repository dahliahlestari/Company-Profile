import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Quote, CheckCircle2, MessageCircle } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SectionWrapper from '../../components/SectionWrapper';
import Card from '../../components/Card';
import ScrollFadeIn from '../../components/ScrollFadeIn';
import { companyData } from '../../data/companyData';

export const metadata = {
  title: 'Klien & Testimoni — PT SMB | SEMBADA',
  description:
    'Daftar mitra dan klien korporat PT SMB serta testimoni kepuasan kerja sama lintas industri.',
};

export default function KlienPage() {
  const { info, clients, testimonials } = companyData;

  return (
    <>
      {/* 1. Page Hero */}
      <HeroSection
        badge="Ekosistem Kemitraan Nasional"
        title="Kepercayaan Nyata Dari Berbagai Pelaku Usaha."
        subtitle="Dari korporasi agro hingga ritel modern, PT. SMB bangga menjadi mitra strategis di balik efisiensi operasional dan kepatuhan sistem para klien kami."
        primaryBtnText="Daftar Menjadi Mitra"
        primaryBtnHref="/kontak"
        secondaryBtnText="Lihat Testimoni"
        secondaryBtnHref="#testimoni"
        bgImage="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1920&auto=format&fit=crop&q=80"
      />

      {/* 2. Client Grid Cards (Adaptive: 2 cols on mobile, 4 cols on desktop) */}
      <SectionWrapper id="daftar-klien" bg="gray">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-xs font-semibold text-sembada-gold uppercase tracking-wider">
            Portofolio Kemitraan
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-apple-dark mt-2">
            Mitra Strategis & Klien Korporat
          </h2>
          <p className="mt-2 text-sm sm:text-base text-apple-secondary">
            Melayani beragam sektor industri dengan standar layanan profesional dan teruji.
          </p>
        </div>

        {/* Adaptive Grid: 2 columns on mobile (touch-friendly), 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6 max-w-6xl mx-auto">
          {clients.map((client, idx) => (
            <ScrollFadeIn key={idx} delay={idx * 50}>
              <div className="p-5 sm:p-7 rounded-3xl bg-white border border-black/[0.06] shadow-apple-subtle hover:shadow-apple-card hover:border-black/[0.12] transition-all duration-300 flex flex-col items-center text-center h-full min-h-[140px] sm:min-h-[160px] justify-between">
                
                {/* Logo Initials Avatar */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-apple-gray flex items-center justify-center font-bold text-xs sm:text-sm text-apple-dark mb-3 border border-black/[0.04]">
                  {client.logoText}
                </div>

                <div className="w-full">
                  <h3 className="text-xs sm:text-sm font-bold text-apple-dark leading-snug line-clamp-2">
                    {client.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-apple-muted mt-1 truncate">
                    {client.sector}
                  </p>
                </div>

                <span className="mt-3 inline-block text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-apple-subtle text-apple-secondary border border-black/[0.05]">
                  {client.badge}
                </span>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* 3. Testimoni Klien ("Apa Kata Mereka") */}
      <SectionWrapper id="testimoni" bg="white">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold text-sembada-gold uppercase tracking-wider">
            Apa Kata Mereka
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-apple-dark mt-2">
            Pengalaman Nyata Para Pemimpin Bisnis
          </h2>
          <p className="mt-2 text-sm sm:text-base text-apple-secondary">
            Kisah keberhasilan dan dampak positif implementasi layanan SEMBADA bagi operasional mitra kami.
          </p>
        </div>

        {/* Testimonials 3 Columns Grid (1 col on mobile, 3 col on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, idx) => (
            <ScrollFadeIn key={item.id} delay={idx * 150}>
              <Card className="h-full bg-apple-subtle justify-between">
                <div>
                  <Quote size={24} className="text-sembada-gold mb-4 opacity-80" />
                  <p className="text-xs sm:text-sm text-apple-dark leading-relaxed italic mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-black/[0.06]">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-black/10 flex-shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs sm:text-sm font-bold text-apple-dark truncate">
                      {item.author}
                    </div>
                    <div className="text-[11px] text-apple-muted truncate">
                      {item.role}
                    </div>
                    <div className="text-[10px] text-sembada-gold font-semibold truncate">
                      {item.company}
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollFadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. Partnership Opportunity Callout */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#081a36] via-[#0c244d] to-[#040d1c] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/10 text-sembada-gold text-xs font-semibold tracking-wide mb-4">
            <span>Peluang Kerjasama Baru</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Bergabunglah Menjadi Bagian Dari Jaringan Mitra SEMBADA
          </h2>

          <p className="text-sm sm:text-base text-apple-muted leading-relaxed mb-8 max-w-xl mx-auto">
            Apakah perusahaan Anda memerlukan pendampingan audit SPPG, peremajaan sistem IT, pemeliharaan sanitasi fasilitas, atau mitigasi risiko asuransi? Tim ahli kami siap berdiskusi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/kontak"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-sembada-gold hover:bg-sembada-gold-hover text-apple-dark font-bold text-sm transition-all active:scale-95 shadow-md"
            >
              <span>Daftar Menjadi Klien Baru</span>
              <ArrowRight size={15} />
            </Link>

            <a
              href={info.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/15 transition-all active:scale-95"
            >
              <MessageCircle size={15} className="text-emerald-400" />
              <span>Diskusi Cepat via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
