import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MobileBottomCTA from '../components/MobileBottomCTA';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: {
    default: 'SEMBADA — One Stop Consultant & Service Management',
    template: '%s | SEMBADA',
  },
  description:
    'PT SMB (SEMBADA) adalah perusahaan One Stop Consultant and Service Management terkemuka di Indonesia. Menghadirkan solusi Pendampingan SPPG, IT Solutions, Pest Control, dan Risk Insurance.',
  keywords: [
    'SEMBADA',
    'PT SMB',
    'One Stop Consultant',
    'Service Management',
    'Pendampingan SPPG',
    'IT Solutions Indonesia',
    'Pest Control Industri',
    'Risk Insurance Indonesia',
  ],
  authors: [{ name: 'PT SMB' }],
  metadataBase: new URL('https://www.ptsmb.com'),
  openGraph: {
    title: 'SEMBADA — One Stop Consultant & Service Management',
    description:
      'Solusi terintegrasi Pendampingan SPPG, IT Solutions, Pest Control, dan Risk Insurance untuk keunggulan dan efisiensi bisnis Anda.',
    url: 'https://www.ptsmb.com',
    siteName: 'SEMBADA',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEMBADA — One Stop Consultant & Service Management',
    description:
      'Solusi terintegrasi Pendampingan SPPG, IT Solutions, Pest Control, dan Risk Insurance.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#0b192c',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-apple-dark antialiased overflow-x-hidden selection:bg-sembada-gold/30">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
