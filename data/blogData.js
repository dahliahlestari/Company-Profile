/**
 * DATA & MANAJEMEN BLOG & NEWS: PT SMB (SEMBADA)
 * Dilengkapi sistem otentikasi sandi khusus admin untuk menulis dan mengelola artikel.
 */

export const ADMIN_PASSCODE = 'smb2026'; // Kata sandi default admin penulis
export const STORAGE_KEY = 'sembada_blog_articles_v2';
export const ADMIN_AUTH_KEY = 'sembada_blog_admin_session';

export const initialArticles = [
  {
    id: 'berita-1',
    title: 'Standarisasi Pendampingan SPPG untuk Menjamin Efisiensi Sistem Korporat',
    slug: 'standarisasi-pendampingan-sppg-efisiensi-sistem-korporat',
    category: 'Pendampingan SPPG',
    author: 'Tim Konsultan SEMBADA',
    date: '8 September 2026',
    readTime: '4 menit baca',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80',
    excerpt: 'Pendampingan SPPG yang terstruktur memastikan alur implementasi sistem, audit kepatuhan, dan evaluasi berkala berjalan sesuai SLA tertinggi.',
    content: `Dalam menghadapi dinamika persaingan industri modern, penerapan sistem operasional yang terstandar menjadi kunci utama dalam menjaga efisiensi serta akurasi kerja organisasi. Pendampingan SPPG hadir sebagai instrumen strategis untuk memastikan setiap lini bisnis mampu menjalankan implementasi sistem secara mulus tanpa mengganggu aktivitas operasional harian.

PT. SMB sebagai One Stop Consultant and Service Management menghadirkan pendekatan terpadu yang mencakup:
1. Audit dan Pemetaan Kebutuhan Sistem Awal
2. Penyusunan Standard Operating Procedure (SOP) yang Konkret
3. Pelatihan SDM dan Transfer Pengetahuan Intensif
4. Monitoring Real-Time dan Evaluasi Berkala

Melalui metodologi yang telah teruji, mitra korporasi kami dapat mengidentifikasi potensi bottleneck operasional lebih awal, meningkatkan kepatuhan tata kelola, dan memaksimalkan pengembalian investasi teknologi secara terukur.`
  },
  {
    id: 'berita-2',
    title: 'Akselerasi Transformasi Digital dengan Ekosistem IT Solutions Terintegrasi',
    slug: 'akselerasi-transformasi-digital-it-solutions-terintegrasi',
    category: 'IT Solutions',
    author: 'Divisi TI SEMBADA',
    date: '4 September 2026',
    readTime: '5 menit baca',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
    excerpt: 'Sistem manajemen digital modern dan arsitektur integrasi data multikanal mempercepat pengambilan keputusan bisnis strategis.',
    content: `Data merupakan aset paling berharga bagi perusahaan di era informasi saat ini. Namun, tanpa integrasi sistem yang andal, data operasional seringkali terfragmentasi dalam berbagai platform yang terisolasi (data silos). 

Solusi IT dari SEMBADA dirancang untuk menyatukan seluruh aliran data perusahaan ke dalam satu dasbor terpadu. Fitur utama yang diimplementasikan meliputi:
- Sistem Manajemen Bisnis & ERP Digital Terpusat
- Integrasi API & Basis Data Multikanal
- Perlindungan Keamanan Siber & Enkripsi Data Korporat
- Dukungan Teknis 24/7 dan Pemeliharaan Berkelanjutan

Dengan sistem TI yang terintegrasi, perusahaan dapat meningkatkan efisiensi proses hingga 40% dan mengeliminasi redudansi entri data manual yang rawan kesalahan.`
  },
  {
    id: 'berita-3',
    title: 'Pentingnya Standarisasi Pest Control Profesional untuk Sertifikasi Fasilitas',
    slug: 'pentingnya-standarisasi-pest-control-sertifikasi-fasilitas',
    category: 'Pest Control',
    author: 'Spesialis Higiene SEMBADA',
    date: '28 Agustus 2026',
    readTime: '3 menit baca',
    thumbnail: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=1200&auto=format&fit=crop&q=80',
    excerpt: 'Pengendalian hama terstandar tidak hanya menjaga kebersihan fasilitas komersial, tetapi merupakan syarat mutlak pemenuhan audit regulasi industri.',
    content: `Bagi industri manufaktur, pergudangan, logistik pangan, maupun fasilitas perkantoran komersial, keberadaan hama adalah ancaman serius terhadap integritas produk dan reputasi korporat. Pengendalian hama yang tidak tepat sasaran dapat berakibat pada kegagalan audit regulasi serta kerugian finansial yang signifikan.

Layanan Pest Control dari PT. SMB mengadopsi pendekatan Integrated Pest Management (IPM) ramah lingkungan:
- Inspeksi mendalam pada titik rawan invasi fasilitas
- Penggunaan metode aman, non-toxic, dan bersertifikat resmi
- Pemasangan perangkap pemantauan preventif berkala
- Penerbitan Sertifikat Kelayakan Sanitasi untuk audit resmi

Layanan kami memastikan lingkungan kerja Anda selalu memenuhi standar higiene industri tertinggi secara konsisten.`
  },
  {
    id: 'berita-4',
    title: 'Mitigasi Ketidakpastian Usaha Melalui Perencanaan Risk Insurance Terpadu',
    slug: 'mitigasi-ketidakpastian-usaha-risk-insurance-terpadu',
    category: 'Risk Insurance',
    author: 'Tim Penasihat Risiko SEMBADA',
    date: '20 Agustus 2026',
    readTime: '4 menit baca',
    thumbnail: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=80',
    excerpt: 'Mengidentifikasi risiko sejak dini dan memilih skema proteksi asuransi yang tepat memberikan ketenangan bagi kontinuitas bisnis.',
    content: `Ketidakpastian operasional, bencana tak terduga, hingga tanggung jawab hukum pihak ketiga adalah risiko riil yang dihadapi setiap pelaku usaha. Tanpa perencanaan proteksi yang matang, satu insiden besar dapat melumpuhkan stabilitas finansial perusahaan.

Layanan Risk Insurance dari SEMBADA membantu korporasi memetakan profil kerentanan secara objektif:
- Penilaian risiko properti, mesin industri, dan armada logistik
- Pemilihan polis asuransi terpercaya yang diawasi OJK
- Fasilitasi klausul polis yang menguntungkan tertanggung
- Pendampingan klaim yang cepat, terbuka, dan profesional

Dengan perlindungan yang tepat, manajemen dapat lebih fokus pada ekspansi bisnis tanpa cemas akan potensi kerugian mendadak.`
  }
];

export function getStoredArticles() {
  if (typeof window === 'undefined') {
    return initialArticles;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialArticles));
      return initialArticles;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : initialArticles;
  } catch (err) {
    console.error('Failed to load articles from storage:', err);
    return initialArticles;
  }
}

export function saveArticle(article) {
  if (typeof window === 'undefined') return false;
  try {
    const current = getStoredArticles();
    const existingIndex = current.findIndex(a => a.id === article.id);
    let updated;
    if (existingIndex >= 0) {
      updated = [...current];
      updated[existingIndex] = { ...updated[existingIndex], ...article };
    } else {
      updated = [article, ...current];
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch (err) {
    console.error('Failed to save article:', err);
    return false;
  }
}

export function deleteArticle(articleId) {
  if (typeof window === 'undefined') return false;
  try {
    const current = getStoredArticles();
    const updated = current.filter(a => a.id !== articleId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch (err) {
    console.error('Failed to delete article:', err);
    return false;
  }
}

export function checkAdminSession() {
  if (typeof window === 'undefined') return false;
  return sessionStorage.getItem(ADMIN_AUTH_KEY) === 'true';
}

export function setAdminSession(status) {
  if (typeof window === 'undefined') return;
  if (status) {
    sessionStorage.setItem(ADMIN_AUTH_KEY, 'true');
  } else {
    sessionStorage.removeItem(ADMIN_AUTH_KEY);
  }
}
