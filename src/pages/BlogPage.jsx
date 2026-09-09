import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Lock, Unlock, PlusCircle, Search, Calendar, Clock, User,
  Trash2, X, CheckCircle, AlertCircle, ArrowRight, BookOpen
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { getStoredArticles, saveArticle, deleteArticle, verifyPasscode, BLOG_PASSCODE } from '../data/blogData';

export default function BlogPage() {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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
      setShowCreateModal(true);
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
  const handleDelete = (e, id, title) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm(`Yakin ingin menghapus artikel "${title}"?`)) {
      deleteArticle(id);
      loadArticles();
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
    <div style={{ background: 'var(--white)', position: 'relative' }}>

      {/* 1. Header Page */}
      <PageHeader
        badge="Wawasan & Publikasi Resmi"
        title="Berita & Artikel PT. SMB"
        subtitle="Dapatkan informasi terkini, panduan manajerial, dan analisis strategis seputar Pendampingan SPPG, IT Solutions, Pest Control, dan Risk Insurance."
        breadcrumbCurrent="Blog & Berita"
      />

      {/* 2. Main Content (Apple Style: Disciplined Margins & Balanced Spacing) */}
      <section style={{
        padding: 'clamp(36px, 4.5vw, 60px) 0',
        background: 'var(--slate-50)'
      }}>
        <div className="container">

          {/* Search & Author Controls Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '20px'
          }}>
            {/* Search Input (Apple Capsule Style) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--white)',
              border: '1px solid var(--slate-300)',
              borderRadius: 'var(--radius-pill)',
              padding: '7px 16px',
              maxWidth: '320px',
              width: '100%'
            }}>
              <Search size={14} color="var(--slate-400)" />
              <input
                type="text"
                placeholder="Cari topik atau artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  fontSize: '0.84rem',
                  width: '100%',
                  fontFamily: 'inherit'
                }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} style={{ color: 'var(--slate-400)', padding: 0 }}>
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Author Auth Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {isAuthor ? (
                <>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: '#15803d',
                    background: '#dcfce7',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-pill)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Unlock size={11} />
                    <span>Mode Penulis Aktif</span>
                  </span>

                  <button
                    onClick={() => setShowCreateModal(true)}
                    className="btn btn-gold btn-sm"
                  >
                    <PlusCircle size={13} />
                    <span>Tulis Berita Baru</span>
                  </button>

                  <button
                    onClick={handleLogout}
                    style={{
                      fontSize: '0.76rem',
                      color: 'var(--slate-500)',
                      padding: '3px 6px',
                      textDecoration: 'underline'
                    }}
                  >
                    Keluar
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowPasswordModal(true)}
                  className="btn btn-outline-navy btn-sm"
                  style={{ gap: '5px' }}
                >
                  <Lock size={12} color="var(--gold-600)" />
                  <span>Tulis Berita</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Tabs (Apple Minimalist Pills) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
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
                    padding: '6px 16px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    fontFamily: 'var(--font-heading)',
                    background: isActive ? 'var(--navy-900)' : 'var(--white)',
                    color: isActive ? 'var(--white)' : 'var(--slate-600)',
                    border: isActive ? '1px solid var(--navy-900)' : '1px solid var(--slate-200)',
                    transition: 'all 0.18s ease'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Articles Grid (Apple Squircle Grid Style) */}
          {filteredArticles.length === 0 ? (
            <div style={{
              background: 'var(--white)',
              borderRadius: 'var(--radius-card)',
              border: '1px solid var(--slate-200)',
              padding: '48px 24px',
              textAlign: 'center'
            }}>
              <BookOpen size={34} color="var(--slate-400)" style={{ margin: '0 auto 10px auto' }} />
              <h3 style={{ fontSize: '1.05rem', color: 'var(--navy-900)', marginBottom: '5px', fontWeight: 650 }}>
                Tidak ada artikel yang sesuai
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--slate-500)', maxWidth: '380px', margin: '0 auto 16px auto' }}>
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
              gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
              gap: 'clamp(18px, 2.2vw, 26px)'
            }}>
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="card-white"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    borderRadius: 'var(--radius-card)',
                    position: 'relative'
                  }}
                >
                  {/* Thumbnail Image as Link to Dedicated Article Page */}
                  <Link
                    to={`/blog/${article.id}`}
                    style={{ position: 'relative', height: '180px', overflow: 'hidden', background: 'var(--navy-950)', display: 'block' }}
                  >
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.25s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.025)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    {isAuthor && (
                      <button
                        onClick={(e) => handleDelete(e, article.id, article.title)}
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          background: 'rgba(239, 68, 68, 0.92)',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: 'var(--radius-pill)',
                          padding: '4px 10px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.7rem',
                          fontWeight: 600
                        }}
                        title="Hapus artikel ini"
                      >
                        <Trash2 size={11} />
                        <span>Hapus</span>
                      </button>
                    )}
                  </Link>

                  {/* Card Body */}
                  <div style={{ padding: 'clamp(16px, 2vw, 22px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: 'var(--gold-700)',
                      textTransform: 'uppercase',
                      marginBottom: '4px'
                    }}>
                      {article.category}
                    </div>

                    {/* Meta info */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.72rem', color: 'var(--slate-500)', marginBottom: '6px', flexWrap: 'wrap' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                        <Calendar size={11} color="var(--gold-700)" />
                        <span>{article.date}</span>
                      </span>
                      <span>•</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                        <Clock size={11} color="var(--slate-400)" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    {/* Headline Link */}
                    <Link
                      to={`/blog/${article.id}`}
                      style={{
                        textDecoration: 'none',
                        display: 'block',
                        marginBottom: '8px'
                      }}
                    >
                      <h3
                        style={{
                          fontSize: '1.04rem',
                          color: 'var(--navy-900)',
                          lineHeight: 1.3,
                          fontWeight: 650,
                          letterSpacing: '-0.015em',
                          margin: 0,
                          transition: 'color 0.15s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-700)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--navy-900)'}
                      >
                        {article.title}
                      </h3>
                    </Link>

                    <p style={{
                      fontSize: '0.84rem',
                      color: 'var(--slate-apple-light)',
                      lineHeight: 1.54,
                      marginBottom: '16px'
                    }}>
                      {article.excerpt}
                    </p>

                    {/* Footer Author & Link to dedicated page */}
                    <div style={{
                      marginTop: 'auto',
                      paddingTop: '12px',
                      borderTop: '1px solid var(--slate-100)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.74rem', color: 'var(--slate-apple-light)', fontWeight: 500 }}>
                        <User size={12} color="var(--gold-600)" />
                        <span style={{ maxWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {article.author}
                        </span>
                      </div>

                      <Link
                        to={`/blog/${article.id}`}
                        className="link-apple"
                        style={{
                          color: 'var(--navy-900)',
                          fontWeight: 600,
                          fontSize: '0.8rem'
                        }}
                      >
                        <span>Baca</span>
                        <ArrowRight size={12} />
                      </Link>
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
            style={{ maxWidth: '420px', padding: '22px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: 'var(--navy-50)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--navy-900)'
                }}>
                  <Lock size={15} />
                </div>
                <h3 style={{ fontSize: '1rem', color: 'var(--navy-900)', margin: 0 }}>
                  Akses Penulis Artikel
                </h3>
              </div>
              <button onClick={() => setShowPasswordModal(false)} style={{ color: 'var(--slate-400)', padding: 0 }}>
                <X size={16} />
              </button>
            </div>

            <p style={{ fontSize: '0.8rem', color: 'var(--slate-600)', marginBottom: '14px', lineHeight: 1.5 }}>
              Hanya staf redaksi / pengurus PT. SMB yang dapat mempublikasikan artikel berita.
            </p>

            <form onSubmit={handlePasswordSubmit}>
              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '4px' }}>
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
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    border: passError ? '1.5px solid #ef4444' : '1px solid var(--slate-300)',
                    fontSize: '0.86rem',
                    outline: 'none'
                  }}
                />
                {passError && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ef4444', fontSize: '0.72rem', marginTop: '4px' }}>
                    <AlertCircle size={11} />
                    <span>{passError}</span>
                  </div>
                )}
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
            style={{ maxWidth: '620px', padding: '22px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid var(--slate-200)', paddingBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <PlusCircle size={16} color="var(--gold-600)" />
                <h3 style={{ fontSize: '1.1rem', color: 'var(--navy-900)', margin: 0 }}>
                  Tulis Berita / Artikel Baru
                </h3>
              </div>
              <button onClick={() => setShowCreateModal(false)} style={{ color: 'var(--slate-400)', padding: 0 }}>
                <X size={16} />
              </button>
            </div>

            {formNotice && (
              <div style={{ background: '#fee2e2', color: '#991b1b', padding: '7px 10px', borderRadius: '6px', fontSize: '0.78rem', marginBottom: '10px' }}>
                {formNotice}
              </div>
            )}

            <form onSubmit={handleCreateSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '3px' }}>
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
                    padding: '8px 11px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--slate-300)',
                    fontSize: '0.84rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '3px' }}>
                    Kategori Layanan *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '8px 11px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--slate-300)',
                      fontSize: '0.84rem',
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
                  <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '3px' }}>
                    Nama Penulis / Divisi
                  </label>
                  <input
                    type="text"
                    placeholder="Tim Redaksi PT. SMB"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '8px 11px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--slate-300)',
                      fontSize: '0.84rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '3px' }}>
                  Pilih Preset Foto Thumbnail (atau Tempel URL Gambar)
                </label>
                <div style={{ display: 'flex', gap: '5px', marginBottom: '5px', flexWrap: 'wrap' }}>
                  {presetImages.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => setFormData({ ...formData, thumbnail: preset.url })}
                      style={{
                        padding: '3px 7px',
                        fontSize: '0.7rem',
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
                    padding: '7px 11px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--slate-300)',
                    fontSize: '0.8rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '3px' }}>
                  Ringkasan Singkat (Excerpt)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ringkasan 1-2 kalimat pengantar artikel..."
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '7px 11px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--slate-300)',
                    fontSize: '0.82rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '3px' }}>
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
                    padding: '7px 11px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--slate-300)',
                    fontSize: '0.82rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '4px' }}>
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
                  <CheckCircle size={13} />
                  <span>Publikasikan Sekarang</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
