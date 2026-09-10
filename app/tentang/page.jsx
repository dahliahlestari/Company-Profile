import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Target, Compass } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SectionWrapper from '../../components/SectionWrapper';
import Card from '../../components/Card';
import ScrollFadeIn from '../../components/ScrollFadeIn';
import { companyData } from '../../data/companyData';

export const metadata = {
  title: 'Tentang Kami — Profil PT SMB',
  description:
    'Profil lengkap PT SMB (SEMBADA): visi, misi, nilai perusahaan, jejak langkah, dan dewan pimpinan profesional kami.',
};

export default function TentangPage() {
  const { info, pillarsDetail, milestones, leadership } = companyData;

  return (
    <>
      {/* 1. Page Hero */}
      <HeroSection
        badge="Profil Korporat SEMBADA"
        title="Membangun Kepercayaan Melalui Solusi Terintegrasi."
        subtitle="Didirikan dengan komitmen memberikan pendampingan berkualitas tinggi, efisiensi nyata, dan perlindungan terpadu bagi operasional bisnis di seluruh Indonesia."
        primaryBtnText="Konsultasi Kemitraan"
        primaryBtnHref="/kontak"
        secondaryBtnText="Jelajahi Layanan"
        secondaryBtnHref="/layanan"
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&auto=format&fit=crop&q=80"
      />

      {/* 2. Visi & Misi Showcase */}
      <SectionWrapper id="visi-misi" bg="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Visi */}
          <ScrollFadeIn delay={100}>
            <Card className="h-full bg-white">
              <div className="w-12 h-12 rounded-2xl bg-sembada-navy flex items-center justify-center text-white mb-5">
                <Compass size={24} />
              </div>
              <span className="text-xs font-semibold text-apple-secondary uppercase tracking-wider">
                Visi Perusahaan
              </span>
              <h3 className="text-2xl font-bold text-apple-dark mt-2 mb-4">
                Menjadi Partner Konsultan & Manajemen Layanan Terpercaya Nomor Satu di Indonesia
              </h3>
              <p className="text-sm text-apple-secondary leading-relaxed flex-1">
                Menghadirkan standar layanan kelas dunia yang menggabungkan kepatuhan hukum, inovasi teknologi mutakhir, dan keandalan operasional demi menunjang kesuksesan jangka panjang para mitra usaha.
              </p>
            </Card>
          </ScrollFadeIn>

          {/* Misi */}
          <ScrollFadeIn delay={200}>
            <Card className="h-full bg-white">
              <div className="w-12 h-12 rounded-2xl bg-sembada-navy flex items-center justify-center text-white mb-5">
                <Target size={24} />
              </div>
              <span className="text-xs font-semibold text-apple-secondary uppercase tracking-wider">
                Misi Perusahaan
              </span>
              <h3 className="text-2xl font-bold text-apple-dark mt-2 mb-4">
                Komitmen Nyata Dalam Setiap Aspek Pelayanan
              </h3>
              <ul className="space-y-3 text-sm text-apple-secondary flex-1">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Menyediakan solusi pendampingan SPPG yang akurat dan terstandardisasi.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Mengembangkan ekosistem teknologi informasi yang mempermudah otomasi bisnis.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Menjaga higienitas fasilitas industri dan komersial berstandar ramah lingkungan.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Memitigasi risiko bisnis melalui perencanaan proteksi asuransi yang kredibel.</span>
                </li>
              </ul>
            </Card>
          </ScrollFadeIn>
        </div>
      </SectionWrapper>

      {/* 3. Nilai & Standar Keunggulan (Pillars) */}
      <SectionWrapper bg="white">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold text-apple-secondary uppercase tracking-wider">
            Etos & Budaya Kerja
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-apple-dark mt-2">
            Empat Nilai Utama yang Mengarahkan Setiap Langkah Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pillarsDetail.map((pillar, idx) => (
            <ScrollFadeIn key={pillar.id} delay={idx * 100}>
              <div className="p-6 rounded-3xl bg-apple-gray border border-black/[0.05] h-full flex flex-col">
                <span className="text-2xl font-black text-apple-dark/20 mb-2">
                  {pillar.number}
                </span>
                <h3 className="text-lg font-bold text-apple-dark mb-1">
                  {pillar.name}
                </h3>
                <p className="text-xs font-semibold text-apple-muted mb-3">
                  {pillar.tagline}
                </p>
                <p className="text-xs sm:text-sm text-apple-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. Jejak Langkah Perjalanan (Company Milestones) */}
      <SectionWrapper id="milestones" bg="gray">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold text-apple-secondary uppercase tracking-wider">
            Perjalanan Kami
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-apple-dark mt-2">
            Jejak Langkah & Dedikasi Lebih Dari 1 Dekade
          </h2>
          <p className="mt-3 text-sm sm:text-base text-apple-secondary">
            Tumbuh bersama mitra bisnis dari inisiatif regional hingga menjangkau 38 provinsi di Indonesia.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          {milestones.map((item, idx) => (
            <ScrollFadeIn key={idx} delay={idx * 100}>
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-apple-subtle flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <div className="sm:w-28 flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-black text-apple-dark">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 border-t sm:border-t-0 sm:border-l border-black/[0.06] pt-3 sm:pt-0 sm:pl-8">
                  <h3 className="text-lg font-bold text-apple-dark mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-apple-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* 5. Dewan Pimpinan (Meet Leadership) */}
      <SectionWrapper id="leadership" bg="white">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold text-apple-secondary uppercase tracking-wider">
            Kepemimpinan Profesional
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-apple-dark mt-2">
            Dipimpin Oleh Praktisi & Pakar Industri Berpengalaman
          </h2>
          <p className="mt-3 text-sm sm:text-base text-apple-secondary">
            Dewan direksi dan konsultan senior yang mengawal standar integritas, kepatuhan, dan keunggulan eksekusi PT. SMB.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {leadership.map((leader, idx) => (
            <ScrollFadeIn key={leader.id} delay={idx * 150}>
              <div className="rounded-3xl border border-black/[0.08] bg-white overflow-hidden shadow-apple-subtle hover:shadow-apple-card hover:border-black/[0.12] transition-all duration-300 flex flex-col h-full group">

                {/* Prominent 1:1 Square Portrait Photo (Not Circular) */}
                <div className="relative w-full aspect-square bg-apple-gray overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3.5 left-4">
                    <span className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-apple-dark shadow-sm">
                      {leader.category}
                    </span>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-apple-dark leading-snug">
                      {leader.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-apple-secondary mt-1 mb-3">
                      {leader.position}
                    </p>
                    <p className="text-xs sm:text-sm text-apple-secondary leading-relaxed">
                      {leader.summary}
                    </p>
                  </div>
                </div>

              </div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* Bottom CTA to Kontak */}
        <div className="mt-16 text-center">
          <Link
            href="/kontak"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-apple-dark hover:bg-sembada-navy-dark text-white font-medium text-sm transition-all duration-300 shadow-sm active:scale-95"
          >
            <span>Konsultasikan Kebutuhan Perusahaan Anda</span>
            <ArrowRight size={16} className="text-white/80" />
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
