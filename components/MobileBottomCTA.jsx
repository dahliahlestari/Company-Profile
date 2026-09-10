'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageCircle, Mail } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function MobileBottomCTA() {
  const pathname = usePathname();

  // If already on contact page, we can still provide WhatsApp quick action
  const isContactPage = pathname === '/kontak';

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white/90 backdrop-blur-lg border-t border-black/[0.08] px-4 py-2.5 shadow-lg pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        {/* WhatsApp Direct Action */}
        <a
          href={companyData.info.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 h-11 px-4 rounded-full bg-emerald-600 active:bg-emerald-700 text-white font-medium text-xs sm:text-sm shadow-sm active:scale-[0.98] transition-all"
          aria-label="Konsultasi WhatsApp"
        >
          <MessageCircle size={17} />
          <span className="font-semibold">WhatsApp</span>
        </a>

        {/* Contact Page Link */}
        <Link
          href="/kontak"
          className={`flex-1 flex items-center justify-center gap-1.5 h-11 px-4 rounded-full font-medium text-xs sm:text-sm border transition-all active:scale-[0.98] ${
            isContactPage
              ? 'bg-apple-dark text-white border-transparent'
              : 'bg-white text-apple-dark border-black/[0.12] hover:bg-apple-gray active:bg-black/[0.05]'
          }`}
          aria-label="Halaman Kontak dan Lokasi"
        >
          <Mail size={15} className={isContactPage ? 'text-sembada-gold' : 'text-apple-secondary'} />
          <span>Hubungi Kami</span>
        </Link>
      </div>
    </div>
  );
}
