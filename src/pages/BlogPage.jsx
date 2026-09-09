import React, { useState, useEffect } from 'react';
import { 
  Lock, Unlock, PlusCircle, Search, Calendar, Clock, User, 
  Trash2, X, CheckCircle, AlertCircle, ArrowRight, BookOpen, Share2 
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { getStoredArticles, saveArticle, deleteArticle, verifyPasscode, BLOG_PASSCODE } from '../data/blogData';

export default function BlogPage() {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // State Pembaca (Modal Baca Artikel)
  const [readingArticle, setReadingArticle] = useState(null);

  // State Autentikasi Penulis
  const [isAuthor, setIsAuthor] = useState(() => {
    return sessionStorage.getItem('ptsmp_is_author') === 'true';
  });
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [inputPasscode, setInputPasscode] = useState('');
  const [passError, setPassError] = useState('');

  // State Editor Artikel
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Pendampingan SPPG',
    author: 'Tim Konsultan PT. SMB',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80',
    excerpt: '',
    content: ''
  });
  const [formNotice, setFormNotice] = useState('');

  const categories = [
    'Semua',
    'Pendampingan SPPG',
    'IT Solutions',
    'Pest Control',
    'Risk Insurance'
  ];

  const presetImages = [
    { label: 'SPPG / Bisnis', url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80' },
    { label: 'IT Solutions', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80' },
    { label: 'Pest Control', url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&auto=format&fit=crop&q=80' },
    { label: 'Risk Insurance', url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=80' }
  ];

  // Load articles
  const loadArticles = () => {
    const list = getStoredArticles();
    setArticles(list);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  // Handle Login Penulis
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (verifyPasscode(inputPasscode)) {
      setIsAuthor(true);
      sessionStorage.setItem('ptsmp_is_author', 'true');
      setShowPasswordModal(false);
      setInputPasscode('');
      setPassError('');
      setShowCreateModal(true); // Langsung buka form penulisan artikel
    } else {
      setPassError('Kata sandi salah! Pastikan Anda memasukkan sandi penulis yang benar.');
    }
  };

  // Handle Logout Penulis
  const handleLogout = () => {
    setIsAuthor(false);
    sessionStorage.removeItem('ptsmp_is_author');
  };

  // Handle Publish Artikel Baru
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) {
      setFormNotice('Judul dan isi artikel wajib diisi.');
      return;
    }

    const saved = saveArticle(formData);
    if (saved) {
      loadArticles();
      setShowCreateModal(false);
      setFormData({
        title: '',
        category: 'Pendampingan SPPG',
        author: 'Tim Konsultan PT. SMB',
        thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80',
        excerpt: '',
        content: ''
      });
      setFormNotice('');
      alert('Artikel berhasil dipublikasikan!');
    }
  };

  // Handle Hapus Artikel
  const handleDelete = (id, title) => {
    if (window.confirm(`Yakin ingin menghapus artikel "${title}"?`)) {
      deleteArticle(id);
      loadArticles();
      if (readingArticle?.id === id) {
        setReadingArticle(null);
      }
    }
  };

  // Filter & Search Logic
  const filteredArticles = articles.filter(item => {
    const matchCat = selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      {/* 1. Header Page */}
      <PageHeader
        badge="Wawasan & Publikasi Resmi"
        title="Berita & Artikel PT. SMB"
        subtitle="Dapatkan informasi terkini, panduan manajerial, dan analisis strategis seputar Pendampingan SPPG, IT Solutions, Pest Control, dan Risk Insurance."
        breadcrumbCurrent="Blog & Berita"
      />

      {/* 2. Main Content */}
      <section className="section-pad" style={{ background: 'var(--slate-50)', position: 'relative' }}>
        <div className="container">

          {/* Top Bar: Controls & Author Authentication Trigger */}
          <div style={{
            background: 'var(--white)',
            border: '1px solid var(--slate-200)',
            borderRadius: 'var(--radius-lg)',
            padding: '16px 20px',
            marginBottom: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px'
          }}>
            {/* Search Input */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--slate-100)',
              padding: '8px 14px',
              borderRadius: 'var(--radius-md)',
              width: '100%',
              maxWidth: '340px'
            }}>
              <Search size={15} color="var(--slate-500)" />
              <input
                type="text"
                placeholder="Cari topik atau artikel berita..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: 'none',
                  background: 'transparent',
                  outline: 'none',
                  fontSize: '0.84rem',
                  fontFamily: 'inherit',
                  width: '100%'
                }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} style={{ color: 'var(--slate-400)', padding: 0 }}>
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Author Auth Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {isAuthor ? (
                <>
                  <span style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    color: '#15803d',
                    background: '#dcfce7',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Unlock size={12} />
                    <span>Mode Penulis Aktif</span>
                  </span>
                  
                  <button
                    onClick={() => setShowCreateModal(true)}
                    className="btn btn-gold btn-sm"
                  >
                    <PlusCircle size={14} />
                    <span>Tulis Berita Baru</span>
                  </button>

                  <button
                    onClick={handleLogout}
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--slate-500)',
                      padding: '4px 8px',
                      textDecoration: 'underline'
                    }}
                  >
                    Keluar Penulis
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowPasswordModal(true)}
                  className="btn btn-outline-navy btn-sm"
                  style={{ gap: '6px' }}
                >
                  <Lock size={13} color="var(--gold-600)" />
                  <span>Tulis Berita (Akses Sandi)</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '28px'
          }}>
            {categories.map((cat) => {
              const catKey = cat === 'Semua' ? 'all' : cat;
              const isActive = selectedCategory.toLowerCase() === catKey.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(catKey)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-heading)',
                    background: isActive ? 'var(--navy-900)' : 'var(--white)',
                    color: isActive ? 'var(--white)' : 'var(--slate-600)',
                    border: isActive ? '1px solid var(--navy-900)' : '1px solid var(--slate-200)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div style={{
              background: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--slate-200)',
              padding: '48px 20px',
              textAlign: 'center'
            }}>
              <BookOpen size={36} color="var(--slate-400)" style={{ margin: '0 auto 12px auto' }} />
              <h3 style={{ fontSize: '1.1rem', color: 'var(--navy-900)', marginBottom: '6px' }}>
                Tidak ada artikel yang sesuai
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--slate-500)', maxWidth: '400px', margin: '0 auto 16px auto' }}>
                Coba ubah kata kunci pencarian atau pilih kategori layanan yang berbeda.
              </p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="btn btn-navy btn-sm"
              >
                Tampilkan Semua Berita
              </button>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 'clamp(18px, 2.5vw, 26px)'
            }}>
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="card-white"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  {/* Thumbnail Image */}
                  <div 
                    style={{ position: 'relative', height: '180px', overflow: 'hidden', background: 'var(--navy-950)', cursor: 'pointer' }}
                    onClick={() => setReadingArticle(article)}
                  >
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: 'var(--navy-950)',
                      color: 'var(--gold-400)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      padding: '3px 8px',
                      borderRadius: '4px'
                    }}>
                      {article.category}
                    </div>

                    {isAuthor && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(article.id, article.title);
                        }}
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          background: 'rgba(239, 68, 68, 0.9)',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '5px 7px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.7rem',
                          fontWeight: 700
                        }}
                        title="Hapus artikel ini"
                      >
                        <Trash2 size={12} />
                        <span>Hapus</span>
                      </button>
                    )}
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: 'clamp(14px, 2vw, 20px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    {/* Meta info */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.74rem', color: 'var(--slate-500)', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={12} color="var(--gold-700)" />
                        <span>{article.date}</span>
                      </span>
                      <span>•</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} color="var(--slate-400)" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h3 
                      onClick={() => setReadingArticle(article)}
                      style={{
                        fontSize: '1.02rem',
                        color: 'var(--navy-900)',
                        marginBottom: '8px',
                        lineHeight: 1.35,
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-700)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--navy-900)'}
                    >
                      {article.title}
                    </h3>

                    <p style={{
                      fontSize: '0.82rem',
                      color: 'var(--slate-600)',
                      lineHeight: 1.5,
                      marginBottom: '16px'
                    }}>
                      {article.excerpt}
                    </p>

                    {/* Author & Action */}
                    <div style={{
                      marginTop: 'auto',
                      paddingTop: '12px',
                      borderTop: '1px solid var(--slate-100)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: 'var(--slate-700)', fontWeight: 600 }}>
                        <User size={13} color="var(--gold-600)" />
                        <span style={{ maxWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {article.author}
                        </span>
                      </div>

                      <button
                        onClick={() => setReadingArticle(article)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: 'var(--navy-900)',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-700)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--navy-900)'}
                      >
                        <span>Baca</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>

                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 3. Modal Autentikasi Sandi Penulis */}
      {showPasswordModal && (
        <div className="modal-backdrop" onClick={() => setShowPasswordModal(false)}>
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '440px', padding: '24px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--navy-50)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--navy-900)'
                }}>
                  <Lock size={16} />
                </div>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--navy-900)', margin: 0 }}>
                  Akses Penulis Artikel
                </h3>
              </div>
              <button onClick={() => setShowPasswordModal(false)} style={{ color: 'var(--slate-400)', padding: 0 }}>
                <X size={18} />
              </button>
            </div>

            <p style={{ fontSize: '0.82rem', color: 'var(--slate-600)', marginBottom: '16px', lineHeight: 1.5 }}>
              Hanya staf redaksi / pengurus PT. SMB yang memiliki kata sandi yang dapat mempublikasikan artikel berita.
            </p>

            <form onSubmit={handlePasswordSubmit}>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '4px' }}>
                  Kata Sandi Penulis
                </label>
                <input
                  type="password"
                  placeholder="Masukkan sandi..."
                  autoFocus
                  required
                  value={inputPasscode}
                  onChange={(e) => {
                    setInputPasscode(e.target.value);
                    setPassError('');
                  }}
                  style={{
                    width: '100%',
                    padding: '9px 12px',
                    borderRadius: 'var(--radius-md)',
                    border: passError ? '1.5px solid #ef4444' : '1px solid var(--slate-300)',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
                {passError && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ef4444', fontSize: '0.74rem', marginTop: '5px' }}>
                    <AlertCircle size={12} />
                    <span>{passError}</span>
                  </div>
                )}
              </div>

              {/* Petunjuk Sandi Default untuk Pemilik Website */}
              <div style={{
                background: 'var(--navy-50)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                borderRadius: '6px',
                padding: '8px 10px',
                fontSize: '0.74rem',
                color: 'var(--navy-900)',
                marginBottom: '16px'
              }}>
                ℹ️ <strong>Sandi Bawaan:</strong> <code>{BLOG_PASSCODE}</code>
              </div>

              <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="btn btn-outline-navy btn-sm"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="btn btn-gold btn-sm"
                >
                  <span>Buka Akses Editor</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 4. Modal Form Editor Artikel Baru */}
      {showCreateModal && (
        <div className="modal-backdrop" onClick={() => setShowCreateModal(false)}>
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '640px', padding: '24px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid var(--slate-200)', paddingBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <PlusCircle size={18} color="var(--gold-600)" />
                <h3 style={{ fontSize: '1.15rem', color: 'var(--navy-900)', margin: 0 }}>
                  Tulis Berita / Artikel Baru
                </h3>
              </div>
              <button onClick={() => setShowCreateModal(false)} style={{ color: 'var(--slate-400)', padding: 0 }}>
                <X size={18} />
              </button>
            </div>

            {formNotice && (
              <div style={{ background: '#fee2e2', color: '#991b1b', padding: '8px 12px', borderRadius: '6px', fontSize: '0.8rem', marginBottom: '12px' }}>
                {formNotice}
              </div>
            )}

            <form onSubmit={handleCreateSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '4px' }}>
                  Judul Artikel *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Optimalisasi Sistem Pelayanan Terpadu PT. SMB"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--slate-300)',
                    fontSize: '0.86rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '4px' }}>
                    Kategori Layanan *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--slate-300)',
                      fontSize: '0.86rem',
                      outline: 'none',
                      backgroundColor: 'var(--white)'
                    }}
                  >
                    <option>Pendampingan SPPG</option>
                    <option>IT Solutions</option>
                    <option>Pest Control</option>
                    <option>Risk Insurance</option>
                    <option>Wawasan Bisnis</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '4px' }}>
                    Nama Penulis / Divisi
                  </label>
                  <input
                    type="text"
                    placeholder="Tim Redaksi PT. SMB"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--slate-300)',
                      fontSize: '0.86rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '4px' }}>
                  Pilih Preset Foto Thumbnail (atau Tempel URL Gambar)
                </label>
                <div style={{ display: 'flex', gap: '6px', marginBottom: '6px', flexWrap: 'wrap' }}>
                  {presetImages.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => setFormData({ ...formData, thumbnail: preset.url })}
                      style={{
                        padding: '3px 8px',
                        fontSize: '0.72rem',
                        borderRadius: '4px',
                        border: formData.thumbnail === preset.url ? '1px solid var(--gold-500)' : '1px solid var(--slate-300)',
                        background: formData.thumbnail === preset.url ? 'var(--gold-100)' : 'var(--slate-100)',
                        color: 'var(--navy-900)',
                        cursor: 'pointer'
                      }}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={formData.thumbnail}
                  onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--slate-300)',
                    fontSize: '0.82rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '4px' }}>
                  Ringkasan Singkat (Excerpt)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ringkasan 1-2 kalimat pengantar artikel..."
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--slate-300)',
                    fontSize: '0.84rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '4px' }}>
                  Isi Lengkap Artikel *
                </label>
                <textarea
                  rows={6}
                  required
                  placeholder="Tuliskan isi berita, analisis, atau panduan secara lengkap di sini..."
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--slate-300)',
                    fontSize: '0.84rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '6px' }}>
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="btn btn-outline-navy btn-sm"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="btn btn-gold btn-sm"
                >
                  <CheckCircle size={14} />
                  <span>Publikasikan Sekarang</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 5. Modal Baca Artikel Lengkap (Reader View) */}
      {readingArticle && (
        <div className="modal-backdrop" onClick={() => setReadingArticle(null)}>
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '780px', padding: 0, overflow: 'hidden' }}
          >
            {/* Header Image */}
            <div style={{ position: 'relative', height: '260px', overflow: 'hidden', background: 'var(--navy-950)' }}>
              <img
                src={readingArticle.thumbnail}
                alt={readingArticle.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setReadingArticle(null)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(7, 19, 34, 0.75)',
                  color: 'var(--white)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                aria-label="Tutup artikel"
              >
                <X size={18} />
              </button>
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '16px',
                background: 'var(--navy-900)',
                color: 'var(--gold-400)',
                padding: '4px 10px',
                borderRadius: '4px',
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}>
                {readingArticle.category}
              </div>
            </div>

            {/* Article Content */}
            <div style={{ padding: 'clamp(20px, 3vw, 32px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.78rem', color: 'var(--slate-500)', marginBottom: '10px', flexWrap: 'wrap' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={13} color="var(--gold-700)" />
                  <span>{readingArticle.date}</span>
                </span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <User size={13} color="var(--gold-700)" />
                  <span>{readingArticle.author}</span>
                </span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={13} color="var(--slate-400)" />
                  <span>{readingArticle.readTime}</span>
                </span>
              </div>

              <h2 style={{
                fontSize: 'clamp(1.25rem, 2.2vw, 1.7rem)',
                color: 'var(--navy-900)',
                lineHeight: 1.3,
                marginBottom: '16px'
              }}>
                {readingArticle.title}
              </h2>

              {readingArticle.excerpt && (
                <div style={{
                  padding: '12px 16px',
                  background: 'var(--navy-50)',
                  borderLeft: '3px solid var(--gold-500)',
                  borderRadius: '0 6px 6px 0',
                  fontSize: '0.88rem',
                  color: 'var(--slate-700)',
                  lineHeight: 1.55,
                  marginBottom: '20px',
                  fontStyle: 'italic'
                }}>
                  {readingArticle.excerpt}
                </div>
              )}

              <div style={{
                fontSize: '0.9rem',
                color: 'var(--slate-700)',
                lineHeight: 1.7,
                whiteSpace: 'pre-line',
                marginBottom: '24px'
              }}>
                {readingArticle.content}
              </div>

              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid var(--slate-200)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)' }}>
                  Publikasi resmi oleh <strong>PT. SMB</strong>
                </div>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Tautan halaman artikel berhasil disalin!');
                  }}
                  className="btn btn-outline-navy btn-sm"
                  style={{ gap: '5px' }}
                >
                  <Share2 size={13} />
                  <span>Salin Tautan</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
