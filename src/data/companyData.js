/**
 * ============================================================================
 * FILE DATA MOCKUP PERUSAHAAN: PT SEMBADA MAKMUR BERSAMA (SMB)
 * ============================================================================
 * Anda dapat dengan sangat mudah mengubah seluruh isi website ini (teks,
 * nama pengurus, layanan, logo klien, kontak, dll.) cukup dengan mengedit
 * nilai-nilai di bawah ini.
 */

export const companyData = {
  // 1. Informasi Umum Perusahaan
  info: {
    name: "SMB",
    brandName: "Sembada",
    legalName: "PT Sembada Makmur Bersama",
    tagline: "Mitra Strategis Solusi Distributor & Jasa Konsultasi Bisnis Terpercaya",
    subTagline: "Menghubungkan rantai pasok terpadu dengan konsultasi manajemen bisnis berstandar tinggi untuk mengakselerasi pertumbuhan bisnis Anda.",
    aboutBrief: "Berdiri dengan komitmen kokoh untuk memajukan perekonomian nasional, SMB (Sembada) hadir sebagai pionir penyedia solusi terintegrasi: pemenuhan segala kebutuhan distributor modern dan layanan konsultasi jasa manajemen bisnis profesional.",
    establishedYear: "2008",
    experienceYears: "16+",
    phone: "+62 21 5890 2888",
    whatsapp: "628118899234",
    whatsappDisplay: "+62 811-8899-234",
    email: "kontak@sembada-smb.co.id",
    address: {
      street: "Sembada Tower, Lantai 18, Jl. TB Simatupang No. 88",
      area: "Cilandak Barat, Pasar Minggu",
      city: "Jakarta Selatan, DKI Jakarta 12430",
      country: "Indonesia"
    },
    operationalHours: "Senin - Jumat: 08:30 - 17:30 WIB",
    socials: {
      linkedin: "https://linkedin.com/company/sembada-smb",
      instagram: "https://instagram.com/sembada.smb",
      youtube: "https://youtube.com/@sembada-smb",
      facebook: "https://facebook.com/sembada.smb"
    }
  },

  // 1b. Data Banner Homepage (Bisa Anda sesuaikan teks, foto, dan link tombolnya)
  banners: [
    {
      id: "banner-1",
      badge: "Pilar Utama • Distribusi Nasional",
      title: "Solusi Rantai Pasok Terpadu & Jaringan Distributor Terlengkap",
      subtitle: "Menyediakan pengadaan produk berkualitas, manajemen pergudangan WMS modern, dan armada pengiriman multimoda menjangkau 38 provinsi di Indonesia.",
      primaryBtn: "Jelajahi Solusi Distributor",
      primaryLink: "#layanan",
      secondaryBtn: "Konsultasi Pengadaan",
      secondaryLink: "#kontak",
      bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&auto=format&fit=crop&q=80"
    },
    {
      id: "banner-2",
      badge: "Pilar Utama • Advisory & Konsultasi",
      title: "Akselerasi Pertumbuhan & Efisiensi Tata Kelola Bisnis Anda",
      subtitle: "Didampingi oleh dewan konsultan senior dan praktisi manajemen industri untuk memangkas inefisiensi dan memperluas penetrasi pasar.",
      primaryBtn: "Ajukan Sesi Konsultasi",
      primaryLink: "#layanan",
      secondaryBtn: "Lihat Tim Pengurus",
      secondaryLink: "#pengurus",
      bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=80"
    },
    {
      id: "banner-3",
      badge: "Peluang Kemitraan • Keagenan",
      title: "Buka Akses Peluang Kemitraan Toko & Distributor Resmi SMB",
      subtitle: "Bergabunglah bersama lebih dari 1.450 mitra korporat, toko ritel, dan jaringan sub-distributor yang telah mempercayakan bisnisnya pada SMB Sembada.",
      primaryBtn: "Gabung Menjadi Mitra",
      primaryLink: "#kontak",
      secondaryBtn: "Lihat Klien & Mitra",
      secondaryLink: "#klien",
      bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80"
    }
  ],

  // 2. Statistik Pencapaian Utama (Quick Stats)
  stats: [
    {
      value: "16+",
      label: "Tahun Pengalaman",
      description: "Dedikasi melayani berbagai sektor industri di Indonesia"
    },
    {
      value: "1.450+",
      label: "Jaringan Mitra & Klien",
      description: "Distributor, ritel, dan korporasi yang mempercayai kami"
    },
    {
      value: "38",
      label: "Provinsi Terjangkau",
      description: "Jaringan logistik dan distribusi berskala nasional"
    },
    {
      value: "99.4%",
      label: "Tingkat Kepuasan Klien",
      description: "Komitmen pada kehandalan layanan dan hasil nyata"
    }
  ],

  // 3. Visi, Misi & Nilai-Nilai Kerja (Working Spirit)
  visionMission: {
    vision: "Menjadi rujukan utama dan mitra terpercaya di Indonesia dalam keunggulan solusi rantai pasok distributor serta layanan konsultasi manajemen bisnis yang berdaya saing global.",
    missions: [
      "Menyediakan ekosistem pemenuhan kebutuhan distributor yang andal, efisien, dan transparan bagi pelaku usaha di seluruh pelosok negeri.",
      "Memberikan layanan konsultasi manajemen bisnis berbasis data, riset praktis, dan keahlian mendalam untuk memacu akselerasi dan profitabilitas klien.",
      "Membangun jejaring kemitraan strategis yang sinergis, saling menguntungkan, dan mengedepankan etika bisnis berintegritas tinggi.",
      "Mendorong transformasi digital rantai pasok guna meminimalkan hambatan operasional dan meningkatkan daya saing ekonomi nasional."
    ],
    // Working Spirit terinspirasi dari Prasmul-ELI
    workingSpirit: [
      {
        id: "excellence",
        name: "Excellence (Keunggulan)",
        summary: "Standar mutu tanpa kompromi",
        description: "SMB dengan sepenuh hati selalu berusaha menghadirkan kesempurnaan. Keunggulan operasional (operational excellence) dan keunggulan layanan (service excellence) adalah fondasi utama kepercayaan yang kami bangun bersama Anda."
      },
      {
        id: "linkage",
        name: "Linkage (Sinergi & Kemitraan)",
        summary: "Koneksi kokoh yang saling menguatkan",
        description: "Kami menjalin hubungan yang erat dengan para prinsipal, jaringan toko, mitra agen, dan konsultan ahli. Dengan kerendahan hati dan ketulusan, kami merawat setiap kolaborasi agar tumbuh berkelanjutan."
      },
      {
        id: "innovation",
        name: "Innovation (Inovasi Terarah)",
        summary: "Solusi kreatif menghadapi tantangan zaman",
        description: "Dunia perdagangan dan distribusi terus bergerak cepat. Kami senantiasa beradaptasi mengintegrasikan sistem teknologi pergudangan terkini serta metodologi konsultasi modern untuk solusi bisnis terbaik."
      },
      {
        id: "integrity",
        name: "Integrity (Integritas & Kepercayaan)",
        summary: "Kejujuran dan transparansi mutlak",
        description: "Keterbukaan dalam tata kelola, keandalan dalam pengiriman komoditas, dan etika profesional dalam setiap advis bisnis adalah janji kami kepada seluruh pemangku kepentingan."
      }
    ]
  },

  // 4. Dua Pilar Layanan Utama SMB
  services: {
    distributor: {
      category: "Kebutuhan Distributor",
      badge: "Pilar 01 • Rantai Pasok Terpadu",
      title: "Solusi Terlengkap Segala Kebutuhan Distributor",
      description: "Kami menyediakan infrastruktur pasokan, pergudangan, armada, hingga penyaluran produk untuk memastikan alur distribusi bisnis Anda berjalan tanpa hambatan.",
      items: [
        {
          id: "dist-1",
          title: "Pengadaan & Suplai Produk Berkualitas",
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&auto=format&fit=crop&q=80",
          shortDesc: "Pasokan komoditas, barang konsumsi, dan material industri berkualitas prima dengan jaminan ketersediaan stok stabil sepanjang tahun.",
          highlights: ["Akses harga tangan pertama", "Kontrak pasokan berjangka", "Kontrol kualitas bertingkat"]
        },
        {
          id: "dist-2",
          title: "Manajemen Pergudangan & Hub Logistik (WMS)",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80",
          shortDesc: "Fasilitas warehouse modern berstandar tinggi dengan sistem inventaris digital terintegrasi untuk pelacakan barang real-time.",
          highlights: ["Pelacakan stok berbasis barcode", "Gudang multi-suhu (opsional)", "Penanganan barang tersertifikasi"]
        },
        {
          id: "dist-3",
          title: "Distribusi Multimoda Seluruh Nusantara",
          image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=80",
          shortDesc: "Armada darat, laut, dan udara yang siap mengantarkan kiriman partai besar maupun ritel ke 38 provinsi secara tepat waktu.",
          highlights: ["Armada ber-GPS real-time", "Asuransi muatan penuh", "Jaminan lead time terukur"]
        },
        {
          id: "dist-4",
          title: "Program Keagenan & Kemitraan Toko",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=80",
          shortDesc: "Dukungan ekspansi jaringan gerai retail, kemitraan sub-distributor, serta penyediaan materi promosi terpadu di titik penjualan.",
          highlights: ["Skema modal usaha fleksibel", "Pendampingan sistem kasir/POS", "Dukungan pemasaran lokal"]
        }
      ]
    },
    consulting: {
      category: "Konsultasi Jasa Bisnis",
      badge: "Pilar 02 • Advisory & Manajemen",
      title: "Konsultasi Jasa & Akselerasi Manajemen Bisnis",
      description: "Dibimbing oleh para praktisi senior dan konsultan berpengalaman, kami membantu perusahaan merancang strategi ekspansi, efisiensi rantai pasok, dan tata kelola korporat.",
      items: [
        {
          id: "cons-1",
          title: "Konsultasi Strategi Distribusi & Penetrasi Pasar",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
          shortDesc: "Pemetaan rute distribusi optimal (Route-to-Market), penentuan target regional, dan studi kelayakan pasar bagi produk baru.",
          highlights: ["Analisis data pasar mendalam", "Pemetaan pesaing & harga", "Blueprint Route-to-Market"]
        },
        {
          id: "cons-2",
          title: "Audit & Optimasi Operasional Rantai Pasok",
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80",
          shortDesc: "Evaluasi menyeluruh terhadap alur rantai pasok Anda untuk memangkas inefisiensi, mengurangi biaya logistik, dan mempercepat siklus stok.",
          highlights: ["Identifikasi bottleneck", "Penghematan biaya hingga 30%", "Standarisasi SOP pergudangan"]
        },
        {
          id: "cons-3",
          title: "Tata Kelola Manajemen & Kepatuhan Regulasi",
          image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80",
          shortDesc: "Pendampingan penyusunan struktur organisasi, sistem tata kelola korporat, perizinan distribusi nasional, dan sertifikasi SNI/BPOM/Halal.",
          highlights: ["Kepatuhan hukum perdagangan", "Sistem KPI & manajemen kerja", "Dokumentasi SOP terstruktur"]
        },
        {
          id: "cons-4",
          title: "Transformasi Digital & Integrasi Sistem ERP",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
          shortDesc: "Bimbingan pemilihan dan implementasi software Supply Chain, ERP, dan analitik dashboard untuk memantau performa penjualan secara instan.",
          highlights: ["Kustomisasi sistem bisnis", "Pelatihan tim internal", "Dashboard analitik eksekutif"]
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
