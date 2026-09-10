'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, 
  Lock, 
  Unlock, 
  Plus, 
  Trash2, 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  X, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SectionWrapper from '../../components/SectionWrapper';
import Card from '../../components/Card';
import ScrollFadeIn from '../../components/ScrollFadeIn';
import { 
  initialArticles, 
  getStoredArticles, 
  saveArticle, 
  deleteArticle, 
  checkAdminSession, 
  setAdminSession, 
  ADMIN_PASSCODE 
} from '../../data/blogData';

export default function BlogPage() {
  const [articles, setArticles] = useState(initialArticles);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Admin authentication state
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [passcodeInput, setPasscodeInput] = useState('');
  const [passcodeError, setPasscodeError] = useState('');
  
  // Write article modal state
  const [showWriteModal, setShowWriteModal] = useState(false);
  const [newArticle, setNewArticle] = useState({
    title: '',
    category: 'Pendampingan SPPG',
    author: 'Tim Redaksi SEMBADA',
    readTime: '4 menit baca',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80',
    excerpt: '',
    content: '',
  });
  const [notification, setNotification] = useState('');

  const categories = [
    'Semua',
    'Pendampingan SPPG',
    'IT Solutions',
    'Pest Control',
    'Risk Insurance',
  ];

  useEffect(() => {
    setArticles(getStoredArticles());
    setIsAdmin(checkAdminSession());
  }, []);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (passcodeInput.trim() === ADMIN_PASSCODE) {
      setAdminSession(true);
      setIsAdmin(true);
      setShowLoginModal(false);
      setPasscodeInput('');
      setPasscodeError('');
      showNotice('Berhasil masuk sebagai Admin Penulis.');
    } else {
      setPasscodeError('Kata sandi salah. Silakan coba lagi.');
    }
  };

  const handleAdminLogout = () => {
    setAdminSession(false);
    setIsAdmin(false);
    showNotice('Anda telah keluar dari mode Admin.');
  };

  const showNotice = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 4000);
  };

  const handleCreateArticle = (e) => {
    e.preventDefault();
    if (!newArticle.title || !newArticle.content || !newArticle.excerpt) {
      alert('Mohon lengkapi judul, ringkasan, dan isi berita.');
      return;
    }

    const slug = newArticle.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const articleToSave = {
      ...newArticle,
      id: `berita-${Date.now()}`,
      slug: `${slug}-${Math.floor(Math.random() * 1000)}`,
      date: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    };

    const success = saveArticle(articleToSave);
    if (success) {
      setArticles(getStoredArticles());
      setShowWriteModal(false);
      setNewArticle({
        title: '',
        category: 'Pendampingan SPPG',
        author: 'Tim Redaksi SEMBADA',
        readTime: '4 menit baca',
        thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80',
        excerpt: '',
        content: '',
      });
      showNotice('Artikel berita baru berhasil dipublikasikan!');
    }
  };

  const handleDelete = (id, title) => {
    if (confirm(`Apakah Anda yakin ingin menghapus artikel "${title}"?`)) {
      const success = deleteArticle(id);
      if (success) {
        setArticles(getStoredArticles());
        showNotice('Artikel berhasil dihapus.');
      }
    }
  };

  // Filtered list
  const filteredArticles = articles.filter((item) => {
    const matchesCategory =
      selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = filteredArticles[0];
  const regularArticles = filteredArticles.slice(1);

  return (
    <>
      {/* 1. Newsroom Header */}
      <HeroSection
        badge="Newsroom & Publikasi Resmi"
        title="Wawasan Terkini & Kabar Industri SEMBADA."
        subtitle="Analisis regulasi bisnis, transformasi teknologi digital, panduan higienitas industri, dan strategi mitigasi risiko langsung dari pakar."
        primaryBtnText=""
        secondaryBtnText=""
        bgImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&auto=format&fit=crop&q=80"
      >
        {/* Admin Bar Status & Search Tool */}
        <div className="max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          {/* Search Box */}
          <div className="relative w-full sm:max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-apple-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari artikel, topik, atau kata kunci..."
              className="w-full h-11 pl-11 pr-4 rounded-full bg-apple-gray border border-black/[0.06] text-xs sm:text-sm text-apple-dark placeholder:text-apple-muted focus:outline-none focus:ring-2 focus:ring-sembada-gold focus:bg-white transition-all"
            />
          </div>

          {/* Admin Toggle Button */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            {isAdmin ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowWriteModal(true)}
                  className="inline-flex items-center gap-1.5 h-10 px-4 rounded-full bg-sembada-gold hover:bg-sembada-gold-hover text-apple-dark font-bold text-xs transition-all active:scale-95 shadow-sm"
                >
                  <Plus size={15} />
                  <span>Tulis Berita Baru</span>
                </button>

                <button
                  type="button"
                  onClick={handleAdminLogout}
                  className="inline-flex items-center gap-1.5 h-10 px-3.5 rounded-full bg-apple-gray hover:bg-black/[0.06] text-apple-secondary text-xs font-medium border border-black/[0.06] transition-colors"
                  title="Keluar Mode Admin"
                >
                  <Unlock size={14} className="text-emerald-600" />
                  <span>Admin Aktif (Keluar)</span>
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowLoginModal(true)}
                className="inline-flex items-center gap-1.5 h-10 px-3.5 rounded-full bg-white hover:bg-apple-gray text-apple-secondary hover:text-apple-dark text-xs font-medium border border-black/[0.08] transition-colors shadow-apple-subtle"
              >
                <Lock size={13} />
                <span>Portal Penulis (Admin)</span>
              </button>
            )}
          </div>
        </div>

        {/* Notification Toast */}
        {notification && (
          <div className="max-w-md mx-auto mt-4 p-3 rounded-2xl bg-apple-dark text-white text-xs font-medium text-center animate-in fade-in flex items-center justify-center gap-2 shadow-lg">
            <CheckCircle2 size={15} className="text-sembada-gold" />
            <span>{notification}</span>
          </div>
        )}
      </HeroSection>

      {/* 2. Category Filter Pills */}
      <div className="border-b border-black/[0.06] bg-apple-subtle/60 sticky top-16 sm:top-20 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-apple-dark text-white shadow-sm'
                    : 'bg-white text-apple-secondary hover:text-apple-dark border border-black/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Articles Grid */}
      <SectionWrapper bg="white">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20">
            <FileText size={40} className="text-apple-muted mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-apple-dark">Tidak ada artikel yang ditemukan</h3>
            <p className="text-xs sm:text-sm text-apple-muted mt-1">
              Coba gunakan kata kunci pencarian lain atau pilih kategori Semua.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            
            {/* Featured Hero Article */}
            {featuredArticle && (
              <ScrollFadeIn delay={100}>
                <div className="rounded-3xl border border-black/[0.08] bg-apple-subtle overflow-hidden shadow-apple-subtle hover:shadow-apple-card transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    
                    <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[360px] bg-apple-gray">
                      <Image
                        src={featuredArticle.thumbnail}
                        alt={featuredArticle.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover"
                        priority
                      />
                    </div>

                    <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white border border-black/[0.06] text-sembada-gold">
                            {featuredArticle.category}
                          </span>
                          <span className="text-[11px] text-apple-muted flex items-center gap-1">
                            <Clock size={12} />
                            <span>{featuredArticle.readTime}</span>
                          </span>
                        </div>

                        <Link href={`/blog/${featuredArticle.slug}`} className="block group">
                          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-apple-dark group-hover:text-sembada-gold transition-colors leading-snug">
                            {featuredArticle.title}
                          </h2>
                        </Link>

                        <p className="text-xs sm:text-sm text-apple-secondary leading-relaxed line-clamp-3">
                          {featuredArticle.excerpt}
                        </p>
                      </div>

                      <div className="pt-6 mt-4 border-t border-black/[0.06] flex items-center justify-between">
                        <div className="text-[11px] text-apple-muted">
                          <div>{featuredArticle.author}</div>
                          <div className="mt-0.5">{featuredArticle.date}</div>
                        </div>

                        <div className="flex items-center gap-2">
                          {isAdmin && (
                            <button
                              type="button"
                              onClick={() => handleDelete(featuredArticle.id, featuredArticle.title)}
                              className="p-2 rounded-full text-red-500 hover:bg-red-50 transition-colors"
                              title="Hapus Artikel"
                            >
                              <Trash2 size={16} />
                            </button>
                          )}

                          <Link
                            href={`/blog/${featuredArticle.slug}`}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-apple-dark hover:text-sembada-gold transition-colors py-1.5 px-3 rounded-full hover:bg-black/[0.04]"
                          >
                            <span>Baca Selengkapnya</span>
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            )}

            {/* Regular Articles Grid */}
            {regularArticles.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-6">
                {regularArticles.map((article, idx) => (
                  <ScrollFadeIn key={article.id} delay={idx * 100}>
                    <Card className="h-full justify-between p-5 sm:p-6 group">
                      <div>
                        <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4 bg-apple-gray">
                          <Image
                            src={article.thumbnail}
                            alt={article.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-apple-gray text-sembada-gold">
                            {article.category}
                          </span>
                          <span className="text-[11px] text-apple-muted flex items-center gap-1">
                            <Clock size={11} />
                            <span>{article.readTime}</span>
                          </span>
                        </div>

                        <Link href={`/blog/${article.slug}`} className="block">
                          <h3 className="text-base font-bold text-apple-dark group-hover:text-sembada-gold transition-colors line-clamp-2 leading-snug mb-2">
                            {article.title}
                          </h3>
                        </Link>

                        <p className="text-xs text-apple-secondary leading-relaxed line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-black/[0.05] flex items-center justify-between text-[11px] text-apple-muted">
                        <span>{article.date}</span>

                        <div className="flex items-center gap-2">
                          {isAdmin && (
                            <button
                              type="button"
                              onClick={() => handleDelete(article.id, article.title)}
                              className="text-red-500 hover:text-red-700 p-1"
                              title="Hapus"
                            >
                              <Trash2 size={14} />
                            </button>
                          )}

                          <Link
                            href={`/blog/${article.slug}`}
                            className="font-semibold text-apple-dark group-hover:text-sembada-gold inline-flex items-center gap-1"
                          >
                            <span>Baca</span>
                            <ArrowRight size={12} />
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </ScrollFadeIn>
                ))}
              </div>
            )}

          </div>
        )}
      </SectionWrapper>

      {/* MODAL 1: Admin Passcode Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 sm:p-8 border border-black/[0.08] shadow-2xl relative">
            <button
              type="button"
              onClick={() => {
                setShowLoginModal(false);
                setPasscodeError('');
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-apple-gray flex items-center justify-center text-apple-secondary hover:text-apple-dark"
            >
              <X size={16} />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-sembada-navy text-sembada-gold flex items-center justify-center mb-4">
              <Lock size={22} />
            </div>

            <h3 className="text-lg font-bold text-apple-dark">
              Portal Penulis Resmi
            </h3>
            <p className="text-xs text-apple-secondary mt-1 mb-4 leading-relaxed">
              Hanya tim administrator dan editor PT. SMB yang berwenang menulis dan mempublikasikan artikel berita.
            </p>

            <form onSubmit={handleAdminLogin} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-apple-dark mb-1">
                  Kata Sandi Akses Penulis
                </label>
                <input
                  type="password"
                  required
                  value={passcodeInput}
                  onChange={(e) => setPasscodeInput(e.target.value)}
                  placeholder="Masukkan kata sandi..."
                  className="w-full h-11 px-4 rounded-xl bg-apple-subtle border border-black/[0.08] text-sm text-apple-dark focus:outline-none focus:ring-2 focus:ring-sembada-gold"
                />
              </div>

              {passcodeError && (
                <p className="text-xs text-red-500 font-medium">
                  {passcodeError}
                </p>
              )}

              <p className="text-[11px] text-apple-muted">
                Kata sandi default: <code className="font-mono bg-apple-gray px-1.5 py-0.5 rounded">smb2026</code>
              </p>

              <button
                type="submit"
                className="w-full h-11 rounded-full bg-apple-dark hover:bg-sembada-navy-dark text-white text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-95"
              >
                Buka Kunci Akses Menulis
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: Tulis Berita Baru (Only for Admin) */}
      {showWriteModal && isAdmin && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-black/[0.08] shadow-2xl my-8 relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setShowWriteModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-apple-gray flex items-center justify-center text-apple-secondary hover:text-apple-dark"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-sembada-gold uppercase tracking-wider mb-1">
              <Plus size={14} />
              <span>Publikasi Berita Baru</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-apple-dark mb-4">
              Tulis Artikel / Siaran Pers SEMBADA
            </h3>

            <form onSubmit={handleCreateArticle} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-apple-dark mb-1">
                  Judul Berita <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={newArticle.title}
                  onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                  placeholder="Contoh: Strategi Efisiensi Audit SPPG di Era Industri Modern"
                  className="w-full h-11 px-4 rounded-xl bg-apple-subtle border border-black/[0.08] text-sm text-apple-dark focus:outline-none focus:ring-2 focus:ring-sembada-gold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-apple-dark mb-1">
                    Kategori <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={newArticle.category}
                    onChange={(e) => setNewArticle({ ...newArticle, category: e.target.value })}
                    className="w-full h-11 px-3 rounded-xl bg-apple-subtle border border-black/[0.08] text-xs sm:text-sm text-apple-dark focus:outline-none focus:ring-2 focus:ring-sembada-gold"
                  >
                    <option value="Pendampingan SPPG">Pendampingan SPPG</option>
                    <option value="IT Solutions">IT Solutions</option>
                    <option value="Pest Control">Pest Control</option>
                    <option value="Risk Insurance">Risk Insurance</option>
                    <option value="Korporat">Wawasan Korporat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-apple-dark mb-1">
                    Penulis
                  </label>
                  <input
                    type="text"
                    value={newArticle.author}
                    onChange={(e) => setNewArticle({ ...newArticle, author: e.target.value })}
                    className="w-full h-11 px-3 rounded-xl bg-apple-subtle border border-black/[0.08] text-xs sm:text-sm text-apple-dark focus:outline-none focus:ring-2 focus:ring-sembada-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-apple-dark mb-1">
                    Waktu Baca
                  </label>
                  <input
                    type="text"
                    value={newArticle.readTime}
                    onChange={(e) => setNewArticle({ ...newArticle, readTime: e.target.value })}
                    placeholder="Contoh: 4 menit baca"
                    className="w-full h-11 px-3 rounded-xl bg-apple-subtle border border-black/[0.08] text-xs sm:text-sm text-apple-dark focus:outline-none focus:ring-2 focus:ring-sembada-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-apple-dark mb-1">
                  URL Thumbnail Gambar (Unsplash)
                </label>
                <input
                  type="url"
                  value={newArticle.thumbnail}
                  onChange={(e) => setNewArticle({ ...newArticle, thumbnail: e.target.value })}
                  placeholder="https://images.unsplash.com/photo-..."
                  className="w-full h-11 px-4 rounded-xl bg-apple-subtle border border-black/[0.08] text-xs text-apple-dark focus:outline-none focus:ring-2 focus:ring-sembada-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-apple-dark mb-1">
                  Ringkasan / Excerpt Singkat <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={2}
                  value={newArticle.excerpt}
                  onChange={(e) => setNewArticle({ ...newArticle, excerpt: e.target.value })}
                  placeholder="1-2 kalimat ringkas sebagai pengantar..."
                  className="w-full p-3 rounded-xl bg-apple-subtle border border-black/[0.08] text-xs sm:text-sm text-apple-dark focus:outline-none focus:ring-2 focus:ring-sembada-gold leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-apple-dark mb-1">
                  Konten Berita Lengkap <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  value={newArticle.content}
                  onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
                  placeholder="Tuliskan naskah berita lengkap di sini..."
                  className="w-full p-3 rounded-xl bg-apple-subtle border border-black/[0.08] text-xs sm:text-sm text-apple-dark focus:outline-none focus:ring-2 focus:ring-sembada-gold leading-relaxed font-sans"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-black/[0.06]">
                <button
                  type="button"
                  onClick={() => setShowWriteModal(false)}
                  className="h-11 px-5 rounded-full bg-apple-gray text-apple-dark text-xs sm:text-sm font-medium hover:bg-black/[0.06] transition-colors"
                >
                  Batal
                </button>

                <button
                  type="submit"
                  className="h-11 px-6 rounded-full bg-apple-dark hover:bg-sembada-navy-dark text-white text-xs sm:text-sm font-bold transition-all active:scale-95 shadow-md flex items-center gap-1.5"
                >
                  <Plus size={15} className="text-sembada-gold" />
                  <span>Publikasikan Artikel</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
