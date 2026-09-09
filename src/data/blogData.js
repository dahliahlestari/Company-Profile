/**
 * DATA & MANAJEMEN ARTIKEL BLOG / BERITA PT. SMB
 * Fitur: Penyimpanan lokal (localStorage), autentikasi sandi penulis, kategori layanan
 */

export const BLOG_PASSCODE = "smb2026"; // Kata sandi default untuk menulis berita
const STORAGE_KEY = "ptsmp_blog_articles";

export const initialArticles = [
  {
    id: "berita-1",
    title: "Standarisasi Pendampingan SPPG untuk Menjamin Efisiensi Sistem Korporat",
    slug: "standarisasi-pendampingan-sppg-efisiensi-sistem-korporat",
    category: "Pendampingan SPPG",
    author: "Tim Konsultan PT. SMB",
    date: "8 September 2026",
    readTime: "4 menit baca",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80",
    excerpt: "Pendampingan SPPG yang terstruktur memastikan alur implementasi sistem, audit, dan evaluasi berkala berjalan sesuai Service Level Agreement (SLA) tertinggi.",
    content: `Dalam menghadapi dinamika persaingan industri modern, penerapan sistem operasional yang terstandar menjadi kunci utama dalam menjaga efisiensi serta akurasi kerja organisasi. Pendampingan SPPG hadir sebagai instrumen strategis untuk memastikan setiap lini bisnis mampu menjalankan implementasi sistem secara mulus tanpa mengganggu aktivitas operasional harian.

PT. SMB sebagai One Stop Consultant and Service Management menghadirkan pendekatan terpadu yang mencakup:
1. Audit dan Pemetaan Kebutuhan Sistem Awal
2. Penyusunan Standard Operating Procedure (SOP) yang Konkret
3. Pelatihan SDM dan Transfer Pengetahuan Intensif
4. Monitoring Real-Time dan Evaluasi Berkala

Melalui metodologi yang telah teruji, mitra korporasi kami dapat mengidentifikasi potensi bottleneck operasional lebih awal, meningkatkan kepatuhan tata kelola, dan memaksimalkan pengembalian investasi teknologi secara terukur.`
  },
  {
    id: "berita-2",
    title: "Akselerasi Transformasi Digital dengan Ekosistem IT Solutions Terintegrasi",
    slug: "akselerasi-transformasi-digital-it-solutions-terintegrasi",
    category: "IT Solutions",
    author: "Divisi Teknologi Informasi PT. SMB",
    date: "4 September 2026",
    readTime: "5 menit baca",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
    excerpt: "Sistem manajemen digital dan integrasi data multikanal menjadi pilar penting dalam mempercepat pengambilan keputusan bisnis strategis.",
    content: `Data merupakan aset paling berharga bagi perusahaan di era informasi saat ini. Namun, tanpa integrasi sistem yang andal, data operasional seringkali terfragmentasi dalam berbagai platform yang terisolasi (*data silos*). 

Solusi IT dari PT. SMB dirancang untuk menyatukan seluruh aliran data perusahaan ke dalam satu dasbor terpadu. Fitur utama yang diimplementasikan meliputi:
- Sistem Manajemen Digital Terpusat
- Integrasi API & Basis Data Multikanal
- Perlindungan Keamanan Siber & Enkripsi Data Korporat
- Dukungan Teknis 24/7 dan Pemeliharaan Berkelanjutan

Dengan sistem TI yang terintegrasi, perusahaan dapat meningkatkan kecepatan respons pasar hingga 40% dan mengeliminasi redudansi entri data manual yang rawan kesalahan (*human error*).`
  },
  {
    id: "berita-3",
    title: "Pentingnya Standarisasi Pest Control Profesional untuk Sertifikasi Industri",
    slug: "pentingnya-standarisasi-pest-control-sertifikasi-industri",
    category: "Pest Control",
    author: "Spesialis Sanitasi & Higiene PT. SMB",
    date: "28 Agustus 2026",
    readTime: "3 menit baca",
    thumbnail: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&auto=format&fit=crop&q=80",
    excerpt: "Pengendalian hama terstandar tidak hanya menjaga kebersihan fasilitas, tetapi juga merupakan syarat mutlak pemenuhan sertifikasi HACCP, ISO, dan BPOM.",
    content: `Bagi industri manufaktur, pergudangan, logistik pangan, maupun fasilitas komersial, keberadaan hama adalah ancaman serius terhadap integritas produk dan reputasi merek. Pengendalian hama yang tidak tepat sasaran dapat berakibat pada kegagalan audit regulasi serta kerugian finansial yang signifikan.

Layanan Pest Control dari PT. SMB mengadopsi pendekatan Integrated Pest Management (IPM) ramah lingkungan:
- Inspeksi mendalam pada titik rawan invasi
- Penggunaan formula kimia aman dan bersertifikat resmi
- Pemasangan perangkap pemantauan preventif
- Penerbitan Sertifikat Kebersihan dan laporan kepatuhan regulasi resmi

Layanan kami memastikan lingkungan kerja Anda selalu memenuhi standar higiene industri tertinggi secara konsisten.`
  },
  {
    id: "berita-4",
    title: "Mitigasi Ketidakpastian Usaha Melalui Perencanaan Risk Insurance Terpadu",
    slug: "mitigasi-ketidakpastian-usaha-risk-insurance-terpadu",
    category: "Risk Insurance",
    author: "Tim Penasihat Risiko Bisnis PT. SMB",
    date: "20 Agustus 2026",
    readTime: "4 menit baca",
    thumbnail: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=80",
    excerpt: "Mengidentifikasi risiko sejak dini dan memilih skema proteksi asuransi yang tepat memberikan perlindungan maksimal bagi aset dan kontinuitas bisnis.",
    content: `Ketidakpastian ekonomi, gangguan rantai pasok global, bencana tak terduga, hingga tanggung jawab hukum pihak ketiga adalah risiko riil yang dihadapi setiap pelaku usaha. Tanpa perencanaan proteksi yang matang, satu insiden besar dapat melumpuhkan stabilitas finansial perusahaan.

Melalui layanan Risk Insurance, PT. SMB mendampingi klien dalam:
1. Penilaian Kritis Profil Risiko (*Risk Profiling*)
2. Negosiasi Premi & Kerjasama Asuransi Terpercaya
3. Polis Komprehensif (Aset Fisik, Tanggung Gugat, & Kontinuitas Bisnis)
4. Pendampingan Klaim Cepat dan Transparan

Fokus kami adalah memberikan ketenangan bagi manajemen puncak agar dapat terus berinovasi dan berekspansi dengan jaring pengaman finansial yang kokoh.`
  }
];

/**
 * Mengambil daftar artikel (dari localStorage jika ada, fallback ke initialArticles)
 */
export function getStoredArticles() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Gagal membaca artikel dari localStorage:", e);
  }
  return initialArticles;
}

/**
 * Menyimpan artikel baru ke localStorage (ditaruh di urutan teratas)
 */
export function saveArticle(newArticle) {
  try {
    const current = getStoredArticles();
    const articleWithId = {
      ...newArticle,
      id: `artikel-${Date.now()}`,
      date: newArticle.date || new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
      readTime: newArticle.readTime || `${Math.max(2, Math.ceil((newArticle.content || "").split(" ").length / 150))} menit baca`
    };
    const updated = [articleWithId, ...current];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return articleWithId;
  } catch (e) {
    console.error("Gagal menyimpan artikel:", e);
    return null;
  }
}

/**
 * Menghapus artikel berdasarkan ID
 */
export function deleteArticle(id) {
  try {
    const current = getStoredArticles();
    const updated = current.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch (e) {
    console.error("Gagal menghapus artikel:", e);
    return false;
  }
}

/**
 * Memverifikasi kata sandi penulis
 */
export function verifyPasscode(inputCode) {
  return inputCode && inputCode.trim() === BLOG_PASSCODE;
}
