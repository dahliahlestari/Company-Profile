import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Calendar, Clock, User, Share2, MessageCircle, 
  ArrowRight, BookOpen, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { getStoredArticles } from '../data/blogData';
import { companyData } from '../data/companyData';

export default function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const articles = getStoredArticles();
  const { info } = companyData;

  // Find article by id or slug
  const article = articles.find(
    (a) => String(a.id) === String(id) || a.slug === id
  );

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!article) {
    return (
      <div style={{ background: 'var(--slate-50)', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <div style={{
          background: 'var(--white)',
          padding: '40px 32px',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--slate-200)',
          maxWidth: '520px',
          textAlign: 'center'
        }}>
          <BookOpen size={40} color="var(--slate-400)" style={{ margin: '0 auto 14px auto' }} />
          <h2 style={{ fontSize: '1.25rem', color: 'var(--navy-900)', marginBottom: '8px' }}>
            Artikel Tidak Ditemukan
          </h2>
          <p style={{ fontSize: '0.86rem', color: 'var(--slate-600)', marginBottom: '20px' }}>
            Artikel yang Anda cari mungkin telah dipindahkan atau dihapus. Silakan jelajahi wawasan lainnya di katalog berita kami.
          </p>
          <Link to="/blog" className="btn btn-navy btn-md">
            <ArrowLeft size={14} />
            <span>Kembali ke Semua Berita</span>
          </Link>
        </div>
      </div>
    );
  }

  // Related articles (other 2 articles)
  const relatedArticles = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Tautan artikel berhasil disalin ke papan klip!');
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(`Baca artikel menarik ini dari PT. SMB: "${article.title}"\n\n${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div style={{ background: 'var(--white)', position: 'relative' }}>
      
      {/* 1. Breadcrumb & Navigation Bar (Apple Style: Clean, Subtle, Minimal) */}
      <div style={{
        borderBottom: '1px solid var(--slate-200)',
        background: 'var(--slate-50)',
        padding: '12px 0'
      }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
            fontSize: '0.78rem',
            color: 'var(--slate-500)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              <Link to="/" style={{ color: 'var(--slate-600)' }}>Beranda</Link>
              <ChevronRight size={12} color="var(--slate-400)" />
              <Link to="/blog" style={{ color: 'var(--slate-600)' }}>Blog & Berita</Link>
              <ChevronRight size={12} color="var(--slate-400)" />
              <span style={{ color: 'var(--gold-700)', fontWeight: 600 }}>{article.category}</span>
            </div>

            <Link
              to="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                color: 'var(--navy-900)',
                fontWeight: 600,
                fontSize: '0.78rem'
              }}
            >
              <ArrowLeft size={13} />
              <span>Semua Berita</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Article Content Container (Apple Editorial Layout: 760px Centered) */}
      <article style={{
        maxWidth: '780px',
        margin: '0 auto',
        padding: 'clamp(32px, 4.5vw, 56px) clamp(18px, 3vw, 24px)'
      }}>

        {/* Category Tagline (Pure Text, No Border) */}
        <div style={{
          color: 'var(--gold-700)',
          fontFamily: 'var(--font-heading)',
          fontSize: '0.76rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '10px'
        }}>
          {article.category}
        </div>

        {/* Article Headline (Apple Editorial Typography Scale) */}
        <h1 style={{
          fontSize: 'clamp(1.75rem, 3.2vw, 2.6rem)',
          color: 'var(--navy-900)',
          lineHeight: 1.14,
          fontWeight: 650,
          letterSpacing: '-0.032em',
          marginBottom: '18px'
        }}>
          {article.title}
        </h1>

        {/* Metadata Bar (Author, Date, Read Time, Share) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          paddingBottom: '20px',
          borderBottom: '1px solid var(--slate-200)',
          marginBottom: '28px',
          fontSize: '0.82rem',
          color: 'var(--slate-apple-light)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'var(--navy-900)', fontWeight: 600 }}>
              <User size={14} color="var(--gold-600)" />
              <span>{article.author}</span>
            </span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Calendar size={13} color="var(--gold-700)" />
              <span>{article.date}</span>
            </span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
              <Clock size={13} />
              <span>{article.readTime}</span>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handleWhatsAppShare}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                background: '#dcfce7',
                color: '#15803d',
                fontSize: '0.76rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer'
              }}
              title="Bagikan ke WhatsApp"
            >
              <MessageCircle size={13} />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={handleShare}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                background: 'var(--slate-100)',
                color: 'var(--slate-700)',
                fontSize: '0.76rem',
                fontWeight: 600,
                border: '1px solid var(--slate-200)',
                cursor: 'pointer'
              }}
              title="Salin tautan artikel"
            >
              <Share2 size={13} />
              <span>Salin</span>
            </button>
          </div>
        </div>

        {/* Featured Banner Image */}
        <div style={{
          borderRadius: 'var(--radius-card)',
          overflow: 'hidden',
          marginBottom: '28px',
          border: '1px solid var(--slate-200)',
          background: 'var(--navy-950)'
        }}>
          <img
            src={article.thumbnail}
            alt={article.title}
            style={{
              width: '100%',
              maxHeight: '440px',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>

        {/* Key Takeaway / Excerpt Box (Apple Callout Style) */}
        {article.excerpt && (
          <div style={{
            background: 'var(--slate-50)',
            borderLeft: '3px solid var(--gold-500)',
            borderRadius: '0 var(--radius-card-sm) var(--radius-card-sm) 0',
            padding: '18px 24px',
            marginBottom: '28px',
            fontSize: '0.94rem',
            color: 'var(--slate-700)',
            lineHeight: 1.56,
            fontStyle: 'italic'
          }}>
            "{article.excerpt}"
          </div>
        )}

        {/* Article Body Paragraphs (Apple Editorial Spacing) */}
        <div style={{
          fontSize: '0.92rem',
          color: 'var(--slate-700)',
          lineHeight: 1.72,
          whiteSpace: 'pre-line',
          marginBottom: '44px'
        }}>
          {article.content}
        </div>

        {/* Author Signature & Official Publisher Stamp */}
        <div style={{
          background: 'var(--slate-50)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--slate-200)',
          padding: '18px 22px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '48px'
        }}>
          <div>
            <div style={{ fontSize: '0.74rem', color: 'var(--slate-500)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Dipublikasikan Resmi Oleh:
            </div>
            <div style={{ fontSize: '0.94rem', fontWeight: 800, color: 'var(--navy-900)' }}>
              {article.author} • {info.legalName}
            </div>
            <div style={{ fontSize: '0.76rem', color: 'var(--gold-700)', marginTop: '2px' }}>
              {info.tagline}
            </div>
          </div>

          <Link to="/kontak" className="btn btn-navy btn-sm">
            <span>Konsultasi Layanan</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* 3. Related Articles Section (Apple Clean 2-Card Layout) */}
        {relatedArticles.length > 0 && (
          <div style={{
            borderTop: '1px solid var(--slate-200)',
            paddingTop: '36px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '20px',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--gold-700)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Wawasan Lainnya
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--navy-900)', margin: 0 }}>
                  Artikel Terkait PT. SMB
                </h3>
              </div>
              <Link to="/blog" style={{ fontSize: '0.8rem', color: 'var(--navy-900)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <span>Lihat Semua</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '18px'
            }}>
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/blog/${rel.id}`}
                  className="card-white"
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    borderRadius: 'var(--radius-card-sm)'
                  }}
                >
                  <div style={{ height: '140px', overflow: 'hidden', background: 'var(--navy-950)' }}>
                    <img
                      src={rel.thumbnail}
                      alt={rel.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--gold-700)', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {rel.category}
                    </div>
                    <h4 style={{ fontSize: '0.88rem', color: 'var(--navy-900)', lineHeight: 1.35, marginBottom: '6px' }}>
                      {rel.title}
                    </h4>
                    <div style={{ marginTop: 'auto', paddingTop: '8px', fontSize: '0.74rem', color: 'var(--slate-500)' }}>
                      {rel.date} • {rel.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </article>

    </div>
  );
}
