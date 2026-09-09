/**
 * ============================================================================
 * FILE DATA MOCKUP PERUSAHAAN: PT SEMBADA MAKMUR BERSAMA (SMB)
 * ============================================================================
 * Anda dapat dengan sangat mudah mengubah seluruh isi website ini (teks,
 * nama pengurus, layanan, logo klien, kontak, dll.) cukup dengan mengedit
 * nilai-nilai di bawah ini.
 */

export const companyData = {
  // 1. Informasi Umum Perusahaan (Berdasarkan Flyer Resmi PT. SMB)
  info: {
    name: "PT. SMB",
    brandName: "PT. SMB",
    legalName: "PT. SMB",
    tagline: "One Stop Consultant and Service Management",
    subTagline: "Partner Strategis Untuk Kesuksesan Bisnis Anda",
    slogan: "Partner Strategis Untuk Kesuksesan Bisnis Anda",
    aboutBrief: "PT. SMB adalah perusahaan One Stop Consultant and Service Management terpercaya di Indonesia. Kami menghadirkan solusi profesional dan terintegrasi meliputi Pendampingan SPPG, IT Solutions, Pest Control, dan Risk Insurance untuk menjamin efisiensi biaya, waktu, dan hasil optimal bagi bisnis Anda.",
    establishedYear: "2012",
    experienceYears: "12+",
    phone: "+62 812-9972-3970",
    whatsapp: "6281299723970",
    whatsappDisplay: "+62 812-9972-3970",
    email: "smb@sembadaofficial.com",
    website: "www.ptsmb.com",
    websiteUrl: "https://www.ptsmb.com",
    address: {
      street: "Kantor Pusat Indonesia",
      area: "Layanan Seluruh Indonesia",
      city: "Indonesia",
      country: "Indonesia"
    },
    operationalHours: "Senin - Jumat: 08:30 - 17:30 WIB",
    pillars: ["Terintegrasi", "Profesional", "Tepercaya", "Berorientasi Hasil"],
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      facebook: "https://facebook.com"
    }
  },

  // 1b. Data Banner Homepage
  banners: [
    {
      id: "banner-1",
      badge: "One Stop Consultant & Service Management",
      title: "Solusi Terintegrasi & Profesional untuk Kesuksesan Bisnis Anda",
      subtitle: "PT. SMB mendampingi operasional dan manajemen korporasi Anda dengan layanan terpercaya, efisien, dan berorientasi pada hasil nyata.",
      primaryBtn: "Lihat Layanan Utama",
      primaryLink: "/layanan",
      secondaryBtn: "Konsultasi Cepat",
      secondaryLink: "/kontak",
      bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80"
    },
    {
      id: "banner-2",
      badge: "Layanan Unggulan PT. SMB",
      title: "Pendampingan SPPG, IT Solutions, Pest Control & Risk Insurance",
      subtitle: "Semua kebutuhan operasional dan mitigasi risiko bisnis Anda tersedia dalam satu pintu layanan terpadu dan bersertifikasi.",
      primaryBtn: "Jelajahi 4 Layanan",
      primaryLink: "/layanan",
      secondaryBtn: "Hubungi Kami",
      secondaryLink: "/kontak",
      bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=80"
    },
    {
      id: "banner-3",
      badge: "Efisiensi Biaya & Waktu",
      title: "Partner Strategis Untuk Kesuksesan Bisnis Anda di Indonesia",
      subtitle: "Didukung tim ahli profesional bersertifikat untuk mengoptimalkan sumber daya dan memberikan nilai tambah berkelanjutan bagi klien.",
      primaryBtn: "Konsultasikan Kebutuhan",
      primaryLink: "/kontak",
      secondaryBtn: "Tentang PT. SMB",
      secondaryLink: "/who-we-are",
      bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80"
    }
  ],

  // 2. Statistik & Pilar Keunggulan Utama
  stats: [
    {
      value: "100%",
      label: "Terintegrasi",
      description: "One Stop Service satu pintu layanan terpadu"
    },
    {
      value: "ISO+",
      label: "Profesional & Bersertifikasi",
      description: "Standar kerja terverifikasi dan tenaga ahli kompeten"
    },
    {
      value: "30%+",
      label: "Efisiensi Biaya & Waktu",
      description: "Optimasi alokasi sumber daya secara cepat dan tepat"
    },
    {
      value: "99.8%",
      label: "Berorientasi Hasil",
      description: "Kepuasan klien dan dampak nyata bagi bisnis"
    }
  ],

  // 3. Visi, Misi & Keunggulan Kami (Sesuai Flyer Resmi PT. SMB)
  visionMission: {
    tagline: "One Stop Consultant and Service Management",
    vision: "Menjadi perusahaan konsultan dan manajemen layanan terintegrasi terpercaya di Indonesia.",
    missions: [
      "Memberikan solusi profesional dan terintegrasi",
      "Menjamin kualitas layanan dan kepuasan klien",
      "Mengedepankan inovasi dan teknologi",
      "Menjadi mitra strategis bagi bisnis klien"
    ],
    // 4 Keunggulan Kami dari Flyer PT. SMB
    keunggulanKami: [
      {
        id: "terintegrasi",
        name: "Terintegrasi (One Stop Service)",
        summary: "Satu pintu layanan terpadu",
        description: "Semua kebutuhan bisnis tersedia dalam satu pintu layanan terpadu tanpa perlu koordinasi rumit ke banyak vendor."
      },
      {
        id: "profesional",
        name: "Profesional & Bersertifikasi",
        summary: "Standar kerja teruji",
        description: "Tim ahli bersertifikat dengan standar kerja profesional, berpengalaman, dan terpercaya di berbagai sektor industri."
      },
      {
        id: "efisiensi",
        name: "Efisiensi Biaya & Waktu",
        summary: "Cepat, tepat, hemat biaya",
        description: "Mengoptimalkan sumber daya untuk memberikan hasil cepat, tepat, dan hemat biaya bagi operasional perusahaan Anda."
      },
      {
        id: "hasil",
        name: "Berorientasi Hasil",
        summary: "Dampak nyata & nilai tambah",
        description: "Fokus pada hasil nyata, terukur, berdampak positif, dan memberikan nilai tambah berkelanjutan bagi klien."
      }
    ],
    // Tetap sediakan workingSpirit sebagai alias kompatibilitas komponen
    workingSpirit: [
      {
        id: "terintegrasi",
        name: "Terintegrasi (One Stop Service)",
        summary: "Satu pintu layanan terpadu",
        description: "Semua kebutuhan bisnis tersedia dalam satu pintu layanan terpadu tanpa perlu koordinasi rumit ke banyak vendor."
      },
      {
        id: "profesional",
        name: "Profesional & Bersertifikasi",
        summary: "Standar kerja teruji",
        description: "Tim ahli bersertifikat dengan standar kerja profesional, berpengalaman, dan terpercaya di berbagai sektor industri."
      },
      {
        id: "efisiensi",
        name: "Efisiensi Biaya & Waktu",
        summary: "Cepat, tepat, hemat biaya",
        description: "Mengoptimalkan sumber daya untuk memberikan hasil cepat, tepat, dan hemat biaya bagi operasional perusahaan Anda."
      },
      {
        id: "hasil",
        name: "Berorientasi Hasil",
        summary: "Dampak nyata & nilai tambah",
        description: "Fokus pada hasil nyata, terukur, berdampak positif, dan memberikan nilai tambah berkelanjutan bagi klien."
      }
    ]
  },

  // 4. 4 Layanan Utama PT. SMB (Berdasarkan Flyer Resmi)
  mainServices: [
    {
      id: "sppg",
      title: "Pendampingan SPPG",
      badge: "Layanan 01",
      category: "Konsultasi & Sertifikasi",
      shortDesc: "Pendampingan menyeluruh implementasi dan standarisasi sistem SPPG untuk kepatuhan operasional, pelatihan SDM, dan tata kelola berstandar tinggi.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
      highlights: [
        "Implementasi sistem",
        "Audit dan monitoring",
        "Pelatihan SDM",
        "Evaluasi berkala"
      ]
    },
    {
      id: "it-solutions",
      title: "IT Solutions",
      badge: "Layanan 02",
      category: "Teknologi & Digital",
      shortDesc: "Ekosistem solusi teknologi informasi terpadu meliputi pengembangan sistem manajemen digital modern, integrasi arsitektur data, dan dukungan maintenance berkala.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80",
      highlights: [
        "Sistem manajemen digital",
        "Integrasi data",
        "Maintenance & support"
      ]
    },
    {
      id: "pest-control",
      title: "Pest Control",
      badge: "Layanan 03",
      category: "Facility & Higiene",
      shortDesc: "Pengendalian hama profesional dan berstandar internasional untuk lingkungan komersial, pergudangan, dan perkantoran dengan sertifikasi kebersihan resmi.",
      image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=600&auto=format&fit=crop&q=80",
      highlights: [
        "Pengendalian hama terstandar",
        "Inspeksi rutin",
        "Sertifikasi kebersihan"
      ]
    },
    {
      id: "risk-insurance",
      title: "Risk Insurance",
      badge: "Layanan 04",
      category: "Manajemen Risiko",
      shortDesc: "Manajemen dan analisis mitigasi risiko bisnis komprehensif, perencanaan proteksi aset perusahaan, serta fasilitasi kerjasama asuransi terpercaya.",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80",
      highlights: [
        "Analisis risiko bisnis",
        "Perencanaan proteksi",
        "Kerjasama asuransi"
      ]
    }
  ],

  // Kompatibilitas untuk struktur pilar lama (agar komponen lain tetap aman)
  services: {
    distributor: {
      category: "Service Management",
      badge: "Layanan Operasional",
      title: "Layanan Manajemen Fasilitas & Operasional Bisnis",
      description: "Dukungan operasional dan proteksi lingkungan kerja terstandar meliputi Pest Control berizin dan Risk Insurance terpercaya.",
      items: [
        {
          id: "pest-control",
          title: "Pest Control",
          image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=600&auto=format&fit=crop&q=80",
          shortDesc: "Pengendalian hama terstandar internasional untuk fasilitas komersial, industri, dan pergudangan dengan inspeksi berkala.",
          highlights: ["Pengendalian hama terstandar", "Inspeksi rutin", "Sertifikasi kebersihan"]
        },
        {
          id: "risk-insurance",
          title: "Risk Insurance",
          image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80",
          shortDesc: "Analisis mitigasi risiko bisnis komprehensif, perencanaan proteksi aset, dan kerjasama program asuransi terpercaya.",
          highlights: ["Analisis risiko bisnis", "Perencanaan proteksi", "Kerjasama asuransi"]
        }
      ]
    },
    consulting: {
      category: "One Stop Consultant",
      badge: "Layanan Konsultasi & TI",
      title: "Konsultasi Tata Kelola & Solusi Teknologi Informasi",
      description: "Pendampingan implementasi SPPG terstandar dan pengembangan arsitektur IT Solutions untuk akselerasi manajemen digital.",
      items: [
        {
          id: "sppg",
          title: "Pendampingan SPPG",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
          shortDesc: "Pendampingan menyeluruh implementasi sistem SPPG, audit monitoring, pelatihan SDM, dan evaluasi berkala.",
          highlights: ["Implementasi sistem", "Audit dan monitoring", "Pelatihan SDM", "Evaluasi berkala"]
        },
        {
          id: "it-solutions",
          title: "IT Solutions",
          image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80",
          shortDesc: "Sistem manajemen digital terintegrasi, arsitektur data korporat, serta pemeliharaan dan support teknis berkelanjutan.",
          highlights: ["Sistem manajemen digital", "Integrasi data", "Maintenance & support"]
        }
      ]
    }
  },

  // 5. Dewan Pengurus & Tim Ahli (Meet Our Leadership Team)
  // Terinspirasi dari struktur prasmul-eli.co/id/who-we-are
  leadershipTeam: [
    {
      id: "hendra-sembada",
      name: "Hendra Sembada, S.E., M.M.",
      position: "Chief Executive Officer (Direktur Utama)",
      category: "Dewan Direksi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
      summary: "Lebih dari 20 tahun memimpin ekspansi rantai pasok dan transformasi korporat lintas industri terkemuka di Indonesia.",
      bio: "Hendra Sembada mendirikan dan memimpin SMB (Sembada) dengan visi menghadirkan tata kelola distribusi yang adil, efisien, dan modern di tanah air. Berpengalaman di jajaran eksekutif korporasi multinasional, beliau fokus pada strategi makro, kemitraan strategis dengan prinsipal utama, serta pengembangan kapabilitas bisnis jangka panjang.",
      expertise: ["Strategic Leadership", "Supply Chain Architecture", "Corporate Expansion", "Stakeholder Relations"],
      education: "Magister Manajemen Bisnis - Universitas Indonesia",
      linkedin: "https://linkedin.com"
    },
    {
      id: "dr-rian-kusuma",
      name: "Dr. Ir. Rian Kusuma, MBA",
      position: "Chief Operating Officer & Head of Distribution",
      category: "Dewan Direksi",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
      summary: "Pakar operasional logistik multimoda dan arsitektur pergudangan cerdas berskala nasional.",
      bio: "Menyelesaikan gelar doktoral di bidang Manajemen Operasi, Dr. Rian bertanggung jawab penuh atas seluruh kelancaran operasional gudang, armada logistik, serta integritas jaringan distribusi SMB di 38 provinsi di Indonesia.",
      expertise: ["Logistics Automation", "Warehouse Management Systems (WMS)", "Fleet Operations", "Lean Supply Chain"],
      education: "Doctor of Engineering & MBA - Institut Teknologi Bandung",
      linkedin: "https://linkedin.com"
    },
    {
      id: "maya-safitri",
      name: "Maya Safitri, S.E., Ak., M.Sc., CA",
      position: "Chief Financial Officer (Direktur Keuangan)",
      category: "Dewan Direksi",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
      summary: "Spesialis perencanaan finansial strategis, manajemen risiko investasi, dan tata kelola modal kerja distribusi.",
      bio: "Maya Safitri memiliki rekam jejak lebih dari 15 tahun dalam memimpin struktur keuangan perusahaan perdagangan dan logistik. Mengawal permodalan, pembiayaan kemitraan mitra agen, serta audit akuntabilitas keuangan SMB.",
      expertise: ["Corporate Finance", "Working Capital Optimization", "Risk Management", "Tax & Audit Compliance"],
      education: "Master of Science in Financial Economics - Universitas Gadjah Mada",
      linkedin: "https://linkedin.com"
    },
    {
      id: "budi-hartono",
      name: "Budi Hartono, S.T., M.Sc.",
      position: "Senior Business & Supply Chain Consultant",
      category: "Konsultan Senior",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80",
      summary: "Konsultan senior yang telah mendampingi lebih dari 120 perusahaan dalam restrukturisasi distribusi komersial.",
      bio: "Budi memimpin divisi Advisory di SMB, memberikan pendampingan langsung bagi korporasi yang ingin membuka kanal distribusi baru, mengoptimalkan biaya rute kirim, dan mengimplementasikan sistem digitalisasi pengadaan.",
      expertise: ["Route-to-Market Strategy", "Procurement Optimization", "Business Advisory", "Commercial Restructuring"],
      education: "M.Sc. in Industrial Engineering - National University of Singapore (NUS)",
      linkedin: "https://linkedin.com"
    },
    {
      id: "ratna-dewanti",
      name: "Ratna Dewanti, S.Psi., M.M.",
      position: "Head of Client Advisory & Human Capital",
      category: "Konsultan Senior",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80",
      summary: "Ahli pengembangan talenta, sertifikasi kompetensi tenaga distribusi, dan budaya kerja berkinerja tinggi.",
      bio: "Ratna memfasilitasi program-program peningkatan kapasitas SDM baik di internal SMB maupun pelatihan khusus bagi tim penjualan dan operasional mitra distributor klien.",
      expertise: ["Organizational Development", "Leadership Coaching", "Talent Assessment", "Change Management"],
      education: "Magister Manajemen SDM - Universitas Padjadjaran",
      linkedin: "https://linkedin.com"
    },
    {
      id: "ir-arief-wicaksono",
      name: "Ir. Arief Wicaksono, M.T.",
      position: "Head of Digital Distribution Systems",
      category: "Konsultan Senior",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=80",
      summary: "Arsitek sistem teknologi informasi rantai pasok dan integrasi data perdagangan terdistribusi.",
      bio: "Arief mengepalai riset penerapan teknologi smart tracking, otomatisasi order pembelian distributor (B2B portal), serta integrasi ERP guna memastikan kecepatan pelaporan dan eksekusi.",
      expertise: ["Enterprise Architecture", "B2B Supply Chain Portals", "Data Analytics", "Cloud Logistics"],
      education: "Magister Teknik Informatika - Institut Teknologi Sepuluh Nopember",
      linkedin: "https://linkedin.com"
    }
  ],

  // 6. Jejak Langkah Perjalanan SMB (Company Milestones)
  milestones: [
    {
      year: "2008",
      title: "Langkah Awal Pendirian",
      description: "Didirikan dengan fokus utama penyediaan pasokan barang komoditas dan pemenuhan kebutuhan grosir untuk wilayah Jabodetabek."
    },
    {
      year: "2013",
      title: "Ekspansi Pergudangan Terpadu",
      description: "Meresmikan pusat distribusi modern seluas 12.000 m² dan meluncurkan armada logistik multimoda antarpulau pertama."
    },
    {
      year: "2018",
      title: "Peluncuran Divisi Jasa Konsultasi",
      description: "Membentuk divisi advisory bisnis untuk membantu para prinsipal dan pelaku industri menyusun strategi distribusi dan efisiensi rantai pasok."
    },
    {
      year: "2021",
      title: "Transformasi Korporasi & Identitas Sembada",
      description: "Mempertegas identitas hukum menjadi PT Sembada Makmur Bersama (SMB) dengan adopsi sistem digitalisasi manajemen WMS dan ERP terkini."
    },
    {
      year: "2024 - Kini",
      title: "Jangkauan Menyeluruh di 38 Provinsi",
      description: "Melayani lebih dari 1.450 mitra aktif nasional dengan kepuasan pelanggan mencapai rekor 99.4%."
    }
  ],

  // 7. Mitra Strategis & Klien (Our Strategic Partners & Clients)
  clients: [
    { name: "PT Nusantara Prima Agro", sector: "Agro & Komoditas", badge: "Klien Utama" },
    { name: "Sinar Surya Logistik", sector: "Jasa Logistik Nasional", badge: "Mitra Distribusi" },
    { name: "Mega Retail Abadi", sector: "Ritel Modern FMCG", badge: "Jaringan Toko" },
    { name: "Indo Cipta Manufaktur", sector: "Industri Manufaktur", badge: "Klien Konsultasi" },
    { name: "Mitra Mandiri Pangan", sector: "Food & Beverage", badge: "Distribusi Bahan Baku" },
    { name: "Samudra Distribusi Sejahtera", sector: "Penyalur Regional Jawa-Bali", badge: "Sub-Distributor" },
    { name: "Sentosa Graha Mineral", sector: "Material & Perlengkapan", badge: "Klien Konsultasi" },
    { name: "Harmoni Karya Farmasi", sector: "Kesehatan & Farmasi", badge: "Rantai Pasok Khusus" }
  ],

  // 8. Testimonial Klien ("Apa Kata Mereka" ala Prasmul-ELI)
  testimonials: [
    {
      id: "testi-1",
      quote: "Bekerja sama dengan SMB (Sembada) adalah keputusan terbaik untuk rantai pasok kami. Pasokan barang selalu aman, ketepatan waktu pengiriman luar biasa, dan layanan konsultasinya membantu kami memangkas biaya logistik hingga 28%.",
      author: "Ir. Bambang Trihatmojo",
      role: "Vice President of Supply Chain",
      company: "PT Mega Retail Abadi",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "testi-2",
      quote: "Tim konsultan SMB Sembada tidak hanya memberikan teori, tetapi langsung turun tangan membenahi alur pergudangan dan melatih tim kami. Kami berhasil berekspansi ke 6 provinsi baru dalam waktu kurang dari 9 bulan.",
      author: "Dewi Lestari, S.E.",
      role: "Managing Director",
      company: "Indo Cipta Manufaktur",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "testi-3",
      quote: "Integritas dan transparansi SMB patut diacungi jempol. Komunikasi lancar, respon sangat cepat via WhatsApp maupun meeting rutin, dan dewan pengurusnya sangat suportif memberikan masukan strategis.",
      author: "Kurniawan Widjaja",
      role: "Founder & Owner",
      company: "Samudra Distribusi Sejahtera",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80"
    }
  ],

  // 9. Pertanyaan yang Sering Diajukan (FAQ)
  faqs: [
    {
      question: "Bagaimana cara bermitra dengan SMB sebagai distributor atau agen resmi?",
      answer: "Anda dapat menghubungi tim kemitraan kami melalui tombol WhatsApp yang tersedia atau mengisi formulir konsultasi di website ini. Tim SMB akan menjadwalkan sesi diskusi awal untuk memahami kebutuhan wilayah, kategori produk, dan skema kemitraan yang paling cocok."
    },
    {
      question: "Apakah layanan konsultasi bisnis SMB cocok untuk bisnis yang sedang berkembang (UMKM/Scale-up)?",
      answer: "Sangat cocok. Layanan konsultasi kami dirancang fleksibel, mulai dari pembenahan dasar sistem pencatatan stok dan rute distribusi untuk bisnis skala menengah, hingga asesmen korporat berskala besar."
    },
    {
      question: "Area mana saja yang dijangkau oleh jaringan distribusi SMB?",
      answer: "Jaringan logistik dan armada distribusi SMB saat ini telah mencakup 38 provinsi di Indonesia dengan hub pergudangan utama di Jakarta, Surabaya, Medan, Makassar, dan Balikpapan."
    },
    {
      question: "Apakah materi di website ini dapat saya ubah sesuai data riil perusahaan?",
      answer: "Ya, tentu saja! Seluruh teks, nama pengurus, logo klien, layanan, dan nomor kontak terpusat di file src/data/companyData.js. Anda cukup mengedit file tersebut untuk langsung memperbarui seluruh tampilan website."
    }
  ]
};
