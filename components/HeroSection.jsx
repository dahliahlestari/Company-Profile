import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({
  badge = 'One Stop Consultant & Service Management',
  title,
  subtitle,
  primaryBtnText = 'Jelajahi Layanan',
  primaryBtnHref = '/layanan',
  secondaryBtnText = 'Hubungi Kami',
  secondaryBtnHref = '/kontak',
  align = 'center',
  bgImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&auto=format&fit=crop&q=80',
  children,
}) {
  const isCenter = align === 'center';

  return (
    <section className="relative pt-12 sm:pt-16 md:pt-24 pb-16 sm:pb-20 md:pb-28 bg-white overflow-hidden">
      {/* Subtle Background Banner */}
      {bgImage && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src={bgImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-top opacity-20 sm:opacity-25"
            priority
          />
          {/* Subtle gradient overlay to blend smoothly into crisp white */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/60 to-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30" />
        </div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}>
          
          {/* Apple Style Eyebrow Badge */}
          {badge && (
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-apple-gray border border-black/[0.05] text-[11px] sm:text-xs font-semibold text-apple-secondary mb-6 sm:mb-8 tracking-wide animate-in fade-in duration-500">
              <span>{badge}</span>
            </div>
          )}

          {/* Large Bold Apple Typography */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-apple-dark leading-[1.12] sm:leading-[1.1] max-w-4xl">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-5 sm:mt-7 text-base sm:text-lg md:text-xl text-apple-secondary font-normal max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Action CTAs: Apple Capsule Pill Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            {primaryBtnText && (
              <Link
                href={primaryBtnHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-apple-dark hover:bg-sembada-navy-dark text-white font-medium text-sm sm:text-base transition-all duration-300 active:scale-95 group"
              >
                <span>{primaryBtnText}</span>
                <ArrowRight size={16} className="text-white/80 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            )}

            {secondaryBtnText && (
              <Link
                href={secondaryBtnHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-apple-gray hover:bg-black/[0.06] text-apple-dark font-medium text-sm sm:text-base border border-black/[0.06] transition-all duration-300 active:scale-95"
              >
                <span>{secondaryBtnText}</span>
              </Link>
            )}
          </div>

          {/* Optional Interactive/Showcase Children */}
          {children && <div className="w-full mt-12 sm:mt-16">{children}</div>}

        </div>
      </div>
    </section>
  );
}
