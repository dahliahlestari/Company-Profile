/**
 * DATA PERUSAHAAN: PT SMB (SEMBADA)
 * Brand: SEMBADA
 * Tagline: One Stop Consultant and Service Management
 */

export const companyData = {
  info: {
    name: "SEMBADA",
    brandName: "SEMBADA",
    legalName: "PT SMB",
    tagline: "One Stop Consultant and Service Management",
    subTagline: "Partner Strategis Untuk Kesuksesan Bisnis Anda",
    slogan: "Solusi Terpadu, Efisiensi Nyata, Hasil Teruji",
    aboutBrief: "SEMBADA (PT SMB) adalah perusahaan One Stop Consultant and Service Management terkemuka di Indonesia. Kami menyediakan solusi terintegrasi yang mencakup Pendampingan SPPG, IT Solutions, Pest Control, dan Risk Insurance untuk menghadirkan efisiensi operasional, kepatuhan regulasi, serta hasil bisnis optimal bagi korporasi dan mitra usaha.",
    establishedYear: "2012",
    experienceYears: "12+",
    clientCount: "1.450+",
    efficiencyRate: "30%+",
    complianceRate: "100%",
    phone: "+62 812-9972-3970",
    phoneDisplay: "+62 812-9972-3970",
    whatsapp: "6281299723970",
    whatsappDisplay: "+62 812-9972-3970",
    whatsappUrl: "https://wa.me/6281299723970?text=Halo%20SEMBADA,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20perusahaan.",
    email: "sembadaofficial.com",
    website: "www.sembadaofficial.com",
    websiteUrl: "https://www.sembadaofficial.com",
    address: {
      street: "Kawasan Bisnis Terpadu",
      area: "Layanan Seluruh Indonesia (38 Provinsi)",
      city: "Jakarta",
      country: "Indonesia",
    },
    operationalHours: "Senin - Jumat: 08:30 - 17:30 WIB",
    pillars: ["Terintegrasi", "Profesional", "Efisiensi Biaya & Waktu", "Berorientasi Hasil"],
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      facebook: "https://facebook.com",
    },
  },

  // 4 Layanan Utama PT. SMB
  mainServices: [
    {
      id: "sppg",
      title: "Pendampingan SPPG",
      shortTitle: "SPPG Consulting",
      badge: "Layanan 01",
      category: "Konsultasi & Sertifikasi",
      tagline: "Standarisasi Sistem & Jaminan Kepatuhan Regulasi",
      shortDesc: "Pendampingan menyeluruh implementasi dan standardisasi sistem SPPG untuk kepatuhan operasional, pelatihan SDM, dan tata kelola korporat berstandar tinggi.",
      fullDesc: "Program pendampingan sistem SPPG dari PT. SMB dirancang untuk membantu perusahaan memenuhi kriteria audit mutu dan standar regulasi nasional tanpa hambatan. Tim konsultan senior kami mendampingi mulai dari gap analysis, pembenahan Standard Operating Procedures (SOP), simulasi audit kelayakan, hingga penerbitan sertifikasi resmi.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&auto=format&fit=crop&q=80",
      highlights: [
        "Implementasi & audit sistem kepatuhan",
        "Penyusunan SOP tata kelola terstandar",
        "Pelatihan sertifikasi SDM internal",
        "Evaluasi berkala & monitoring pasca-audit",
      ],
      deliverables: [
        { label: "Waktu Implementasi", value: "2-4 Minggu" },
        { label: "Tingkat Kelulusan", value: "100% Terverifikasi" },
        { label: "Cakupan", value: "Seluruh Wilayah RI" },
      ],
    },
    {
      id: "it-solutions",
      title: "IT Solutions",
      shortTitle: "IT & Digital Systems",
      badge: "Layanan 02",
      category: "Teknologi & Digital",
      tagline: "Arsitektur Digital Modern & Integrasi Sistem",
      shortDesc: "Ekosistem solusi teknologi informasi terpadu meliputi pengembangan sistem manajemen digital modern, arsitektur data terintegrasi, serta dukungan maintenance berkala.",
      fullDesc: "Kami membangun dan mengintegrasikan ekosistem teknologi cerdas untuk mempercepat alur kerja perusahaan. Mulai dari sistem ERP kustom, portal manajemen rantai pasok B2B, pelaporan analitik real-time, hingga pemeliharaan infrastruktur cloud dengan tingkat keamanan dan keandalan tinggi.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&auto=format&fit=crop&q=80",
      highlights: [
        "Sistem manajemen bisnis & ERP digital",
        "Integrasi basis data korporat terpadu",
        "Aplikasi web & mobile enterprise",
        "Maintenance, hosting & support teknis 24/7",
      ],
      deliverables: [
        { label: "Otomasi Proses", value: "Hingga 40% Efisiensi" },
        { label: "Uptime Sistem", value: "99.9% SLA" },
        { label: "Dukungan Teknis", value: "Dedicated Engineer" },
      ],
    },
    {
      id: "pest-control",
      title: "Pest Control",
      shortTitle: "Hygienic Pest Control",
      badge: "Layanan 03",
      category: "Facility & Sanitasi",
      tagline: "Pengendalian Hama Bersertifikat Ramah Lingkungan",
      shortDesc: "Pengendalian hama profesional dan berstandar internasional untuk lingkungan komersial, industri, pergudangan, dan perkantoran dengan sertifikasi kebersihan resmi.",
      fullDesc: "Menggunakan metodologi Integrated Pest Management (IPM) ramah lingkungan dan aman untuk pekerja. Layanan kami mencakup inspeksi menyeluruh titik rawan, tindakan terminasi rayap, tikus, dan serangga terbang, serta penyediaan sertifikat higienitas berkala untuk audit fasilitas.",
      image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=1000&auto=format&fit=crop&q=80",
      highlights: [
        "Metode ramah lingkungan & non-toxic",
        "Inspeksi fasilitas rutin & terukur",
        "Sertifikasi kebersihan audit industri",
        "Proteksi jangka panjang fasilitas gedung",
      ],
      deliverables: [
        { label: "Metode Sanitasi", value: "IPM Internasional" },
        { label: "Sertifikasi", value: "Resmi untuk Audit" },
        { label: "Frekuensi", value: "Fleksibel (Rutin/Panggilan)" },
      ],
    },
    {
      id: "risk-insurance",
      title: "Risk Insurance",
      shortTitle: "Risk Management",
      badge: "Layanan 04",
      category: "Proteksi Finansial",
      tagline: "Manajemen Proteksi Aset & Mitigasi Risiko Bisnis",
      shortDesc: "Manajemen dan analisis mitigasi risiko bisnis komprehensif, perencanaan proteksi aset perusahaan, serta fasilitasi kerjasama asuransi terpercaya.",
      fullDesc: "Melindungi kesinambungan bisnis dari ketidakpastian finansial dan bahaya operasional. Kami membantu memetakan profil risiko korporat Anda, menyusun rekomendasi polis perlindungan aset properti, logistik, dan armada, serta mendampingi alur klaim secara transparan dan cepat.",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1000&auto=format&fit=crop&q=80",
      highlights: [
        "Analisis komprehensif profil risiko bisnis",
        "Perencanaan proteksi aset & properti",
        "Kemitraan penjaminan asuransi kredibel",
        "Pendampingan klaim transparan & cepat",
      ],
      deliverables: [
        { label: "Mitigasi Risiko", value: "Komprehensif" },
        { label: "Proses Klaim", value: "Didampingi Penuh" },
        { label: "Mitra Asuransi", value: "Terdaftar OJK" },
      ],
    },
  ],

  // 4 Pilar Nilai Keunggulan
  pillarsDetail: [
    {
      id: "terintegrasi",
      number: "01",
      name: "Terintegrasi (One Stop Service)",
      tagline: "Satu pintu layanan terpadu",
      description: "Seluruh kebutuhan operasional, konsultasi, dan proteksi bisnis dapat dipenuhi dalam satu ekosistem terpadu tanpa kerumitan koordinasi multi-vendor.",
    },
    {
      id: "profesional",
      number: "02",
      name: "Profesional & Bersertifikasi",
      tagline: "Standar mutu teruji",
      description: "Didukung tim konsultan ahli berpengalaman lebih dari satu dekade dengan sertifikasi resmi di bidang tata kelola industri, IT, dan keselamatan kerja.",
    },
    {
      id: "efisiensi",
      number: "03",
      name: "Efisiensi Biaya & Waktu",
      tagline: "Cepat, terukur, hemat anggaran",
      description: "Merampingkan rantai birokrasi dan optimasi sumber daya secara presisi, membantu mitra memangkas biaya operasional hingga 30%.",
    },
    {
      id: "hasil",
      number: "04",
      name: "Berorientasi Hasil Nyata",
      tagline: "Dampak positif berkelanjutan",
      description: "Fokus pada metrik keberhasilan yang jelas, peningkatan produktivitas riil, dan proteksi jangka panjang bagi pertumbuhan bisnis klien.",
    },
  ],

  // Alur Kemitraan 4 Tahap
  workflows: [
    {
      step: "01",
      title: "Konsultasi & Analisis Kebutuhan",
      desc: "Diskusi mendalam bersama tim spesialis SEMBADA untuk memetakan tantangan spesifik, skala operasional, dan target efisiensi bisnis Anda.",
    },
    {
      step: "02",
      title: "Perumusan Solusi & SLA",
      desc: "Penyusunan blueprint strategi pelaksanaan, Service Level Agreement (SLA) terukur, serta estimasi alokasi waktu dan biaya yang transparan.",
    },
    {
      step: "03",
      title: "Integrasi & Eksekusi Lapangan",
      desc: "Pelaksanaan pendampingan sistem, deployment software IT, treatment fasilitas pest control, atau finalisasi skema mitigasi asuransi.",
    },
    {
      step: "04",
      title: "Evaluasi & Optimalisasi Berkelanjutan",
      desc: "Laporan performa berkala, audit hasil implementasi, serta dukungan maintenance berkelanjutan untuk menjamin kepuasan kemitraan.",
    },
  ],

  // Data Klien & Mitra Strategis
  clients: [
    { name: "PT Nusantara Prima Agro", sector: "Agro & Komoditas", badge: "Klien Utama", logoText: "NPA" },
    { name: "Sinar Surya Logistik", sector: "Jasa Logistik Nasional", badge: "Mitra Distribusi", logoText: "SSL" },
    { name: "Mega Retail Abadi", sector: "Ritel Modern FMCG", badge: "Jaringan Toko", logoText: "MRA" },
    { name: "Indo Cipta Manufaktur", sector: "Industri Manufaktur", badge: "Klien Konsultasi", logoText: "ICM" },
    { name: "Mitra Mandiri Pangan", sector: "Food & Beverage", badge: "Distribusi Bahan Baku", logoText: "MMP" },
    { name: "Samudra Distribusi Sejahtera", sector: "Penyalur Regional Jawa-Bali", badge: "Sub-Distributor", logoText: "SDS" },
    { name: "Sentosa Graha Mineral", sector: "Material & Perlengkapan", badge: "Klien Konsultasi", logoText: "SGM" },
    { name: "Harmoni Karya Farmasi", sector: "Kesehatan & Farmasi", badge: "Rantai Pasok Khusus", logoText: "HKF" },
  ],

  // Testimoni Klien
  testimonials: [
    {
      id: "testi-1",
      quote: "Bekerja sama dengan SEMBADA adalah keputusan strategis terbaik bagi kelancaran operasional kami. Pendampingan sistem yang diberikan sangat presisi, responsif, dan berhasil memangkas biaya operasional kami hingga 28%.",
      author: "Ir. Bambang Trihatmojo",
      role: "Vice President of Supply Chain",
      company: "PT Mega Retail Abadi",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
    },
    {
      id: "testi-2",
      quote: "Tim SEMBADA tidak hanya memberikan teori, namun langsung mendampingi tim kami di lapangan hingga lulus sertifikasi 100%. Eksekusi cepat, profesional, dan sangat dapat diandalkan.",
      author: "Dewi Lestari, S.E.",
      role: "Managing Director",
      company: "Indo Cipta Manufaktur",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
    },
    {
      id: "testi-3",
      quote: "Integritas dan transparansi SEMBADA luar biasa. Komunikasi sangat lancar via WhatsApp maupun koordinasi langsung. Solusi IT dan manajemen risiko yang disiapkan memberikan rasa tenang.",
      author: "Kurniawan Widjaja",
      role: "Founder & CEO",
      company: "Samudra Distribusi Sejahtera",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=80",
    },
  ],

  // Jejak Langkah Perusahaan
  milestones: [
    {
      year: "2012",
      title: "Awal Pendirian SEMBADA",
      description: "Didirikan dengan visi menghadirkan jasa konsultasi manajemen terpadu bagi pelaku usaha di wilayah Jabodetabek dan sekitarnya.",
    },
    {
      year: "2015",
      title: "Ekspansi Pilar Layanan",
      description: "Mengembangkan divisi pendampingan regulasi SPPG dan unit manajemen fasilitas pest control komersial berstandar industri.",
    },
    {
      year: "2019",
      title: "Integrasi Divisi IT & Digital",
      description: "Meluncurkan unit IT Solutions guna menjawab kebutuhan transformasi digital, otomatisasi sistem manajemen, dan arsitektur data korporasi.",
    },
    {
      year: "2022",
      title: "Penguatan Manajemen Risiko",
      description: "Menghadirkan layanan Risk Insurance dan memperkuat identitas hukum korporat PT SMB dengan jangkauan nasional.",
    },
    {
      year: "Kini",
      title: "Jangkauan Menyeluruh 38 Provinsi",
      description: "Melayani lebih dari 100 mitra korporasi dengan komitmen pelayanan cepat, terintegrasi, dan berorientasi hasil nyata.",
    },
  ],

  // Dewan Pimpinan
  leadership: [
    {
      id: "tindra-matutino",
      name: "Tindra Matutino",
      position: "Chief Executive Officer (Direktur Utama)",
      category: "Dewan Direksi",
      summary: "Lebih dari 5 tahun memimpin ekspansi dan transformasi tata kelola korporasi lintas industri terkemuka di Indonesia.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "herdian-farid-nugroho",
      name: "Herdian Farid Nugroho",
      position: "Chief Operating Officer",
      category: "Dewan Direksi",
      summary: "Pakar operasional multimoda dan standarisasi manajemen layanan fasilitas berskala nasional.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "dahliah-fajar-lestari",
      name: "Dahliah Fajar Lestari",
      position: "Chief Digital Marketing Officer",
      category: "Staff",
      summary: "Spesialis perencanaan strategi pemasaran digital, pengembangan branding, dan inovasi layanan digital berbasis teknologi.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
    },
  ],

  // Pertanyaan yang Sering Diajukan (FAQ)
  faqs: [
    {
      question: "Apa saja layanan utama yang disediakan oleh PT SMB?",
      answer: "SEMBADA beroperasi sebagai One Stop Consultant and Service Management dengan 4 pilar utama: Pendampingan SPPG (audit, regulasi & SOP), IT Solutions (digitalisasi sistem & ERP), Pest Control (pengendalian hama fasilitas komersial), dan Risk Insurance (manajemen mitigasi risiko aset bisnis).",
    },
    {
      question: "Apakah layanan SEMBADA dapat disesuaikan dengan skala bisnis UKM maupun korporasi besar?",
      answer: "Tentu. Setiap solusi dirancang modular dan fleksibel, mulai dari pendampingan spesifik kepatuhan untuk bisnis yang sedang berkembang (scale-up) hingga transformasi digital dan audit fasilitas menyeluruh untuk korporasi multinasional.",
    },
    {
      question: "Bagaimana alur memulai konsultasi atau kerjasama dengan SEMBADA?",
      answer: "Anda dapat langsung menghubungi tim kami melalui tombol WhatsApp resmi atau mengisi formulir kontak pada website ini. Tim representatif kami akan segera mengatur sesi diskusi awal untuk memahami kebutuhan perusahaan Anda.",
    },
    {
      question: "Berapa lama estimasi waktu pelaksanaan program pendampingan?",
      answer: "Durasi program disesuaikan dengan lingkup proyek. Untuk pendampingan standar SPPG rata-rata berlangsung 2-4 minggu, sementara implementasi IT Solutions maupun kontrak sanitasi berkala dijadwalkan berdasarkan SLA yang disepakati bersama.",
    },
    {
      question: "Apakah SEMBADA melayani klien di luar wilayah Jabodetabek?",
      answer: "Ya, jaringan konsultasi dan tim operasional SEMBADA saat ini telah menjangkau mitra korporasi di 38 provinsi di seluruh Indonesia.",
    },
  ],
};
