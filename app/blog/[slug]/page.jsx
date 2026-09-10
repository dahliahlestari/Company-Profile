'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  User, 
  Share2, 
  Check, 
  MessageCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import SectionWrapper from '../../../components/SectionWrapper';
import Card from '../../../components/Card';
import ScrollFadeIn from '../../../components/ScrollFadeIn';
import { getStoredArticles, initialArticles } from '../../../data/blogData';

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const slug = params?.slug;
    if (!slug) return;

    const all = getStoredArticles();
    const found = all.find((a) => a.slug === slug);
    if (found) {
      setArticle(found);
      setRelatedArticles(all.filter((a) => a.id !== found.id).slice(0, 3));
    } else {
      // Fallback check initialArticles
      const fallback = initialArticles.find((a) => a.slug === slug);
      if (fallback) {
        setArticle(fallback);
        setRelatedArticles(initialArticles.filter((a) => a.id !== fallback.id).slice(0, 3));
      }
    }
  }, [params]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!article) {
    return (
      <SectionWrapper bg="white" className="py-24 text-center">
        <h2 className="text-xl font-bold text-apple-dark">Memuat Artikel...</h2>
        <p className="text-xs text-apple-muted mt-2">Menyiapkan wawasan terbaik untuk Anda.</p>
      </SectionWrapper>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const waShareText = `Baca artikel menarik dari SEMBADA: "${article.title}"%0A${shareUrl}`;

  return (
    <>
      {/* Article Header & Hero */}
      <article className="relative pt-10 sm:pt-14 pb-20 bg-white overflow-hidden">
        {/* Subtle Background Banner */}
        {article.thumbnail && (
          <div className="absolute top-0 inset-x-0 h-96 z-0 pointer-events-none overflow-hidden">
            <Image
              src={article.thumbnail}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-top opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/60 to-white" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30" />
          </div>
        )}

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back to Blog link */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold text-apple-secondary hover:text-apple-dark transition-colors py-1.5 px-3 rounded-full hover:bg-apple-gray"
            >
              <ArrowLeft size={14} />
              <span>Kembali ke Newsroom</span>
            </Link>
          </div>

          {/* Category & Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
            <span className="font-bold px-3 py-1 rounded-full bg-apple-gray text-sembada-gold">
              {article.category}
            </span>
            <span className="text-apple-muted flex items-center gap-1">
              <Clock size={13} />
              <span>{article.readTime}</span>
            </span>
            <span className="text-apple-muted">&bull;</span>
            <span className="text-apple-muted flex items-center gap-1">
              <Calendar size={13} />
              <span>{article.date}</span>
            </span>
          </div>

          {/* Large Bold Apple Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-apple-dark leading-[1.18] mb-6">
            {article.title}
          </h1>

          {/* Author & Share Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-black/[0.06] text-xs">
            <div className="flex items-center gap-2 text-apple-secondary">
              <div className="w-8 h-8 rounded-full bg-apple-gray flex items-center justify-center font-bold text-apple-dark">
                <User size={14} />
              </div>
              <div>
                <div className="font-bold text-apple-dark">{article.author}</div>
                <div className="text-[11px] text-apple-muted">PT SMB</div>
              </div>
            </div>

            {/* Share Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full bg-apple-gray hover:bg-black/[0.06] text-apple-dark font-medium text-xs transition-colors"
                title="Salin Tautan"
              >
                {copied ? <Check size={14} className="text-emerald-600" /> : <Share2 size={14} />}
                <span>{copied ? 'Tersalin!' : 'Bagikan'}</span>
              </button>

              <a
                href={`https://wa.me/?text=${waShareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-medium text-xs transition-colors"
                title="Bagikan via WhatsApp"
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Hero Thumbnail Image with next/image */}
          <div className="relative w-full h-64 sm:h-96 md:h-[440px] rounded-3xl overflow-hidden mb-10 shadow-apple-card border border-black/[0.08] bg-apple-gray">
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              sizes="(max-width: 1024px) 100vw, 860px"
              className="object-cover"
              priority
            />
          </div>

          {/* Article Excerpt Callout */}
          <div className="p-6 rounded-2xl bg-apple-subtle border-l-4 border-sembada-gold mb-10 text-sm sm:text-base font-medium text-apple-dark italic leading-relaxed">
            &ldquo;{article.excerpt}&rdquo;
          </div>

          {/* Full Content Body (Formatted Paragraphs) */}
          <div className="text-apple-dark text-base sm:text-lg leading-[1.8] space-y-6">
            {article.content.split('\n\n').map((paragraph, pIdx) => {
              if (paragraph.startsWith('1.') || paragraph.startsWith('-')) {
                return (
                  <div key={pIdx} className="bg-apple-gray/50 p-5 rounded-2xl border border-black/[0.04] text-sm sm:text-base space-y-2">
                    {paragraph.split('\n').map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="font-bold text-sembada-gold flex-shrink-0">&bull;</span>
                        <span className="text-apple-secondary">{item.replace(/^[-0-9.]+\s*/, '')}</span>
                      </div>
                    ))}
                  </div>
                );
              }
              return (
                <p key={pIdx} className="text-apple-secondary">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Article Footer CTA */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-br from-[#081a36] via-[#0c244d] to-[#040d1c] border border-white/10 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Butuh Konsultasi Terkait Topik Ini?
              </h3>
              <p className="text-xs sm:text-sm text-apple-muted mt-1">
                Tim ahli PT. SMB siap memberikan solusi spesifik untuk tantangan bisnis Anda.
              </p>
            </div>

            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-sembada-gold hover:bg-sembada-gold-hover text-apple-dark font-bold text-xs sm:text-sm transition-all flex-shrink-0 shadow-md active:scale-95"
            >
              <span>Hubungi Kami</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <SectionWrapper bg="gray">
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-apple-dark">
              Artikel Terkait Lainnya
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedArticles.map((rel) => (
              <Card key={rel.id} className="h-full justify-between p-5 bg-white">
                <div>
                  <div className="relative w-full h-36 rounded-xl overflow-hidden mb-3 bg-apple-gray">
                    <Image
                      src={rel.thumbnail}
                      alt={rel.title}
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-apple-gray text-sembada-gold">
                    {rel.category}
                  </span>
                  <Link href={`/blog/${rel.slug}`}>
                    <h4 className="text-xs sm:text-sm font-bold text-apple-dark hover:text-sembada-gold transition-colors mt-2 line-clamp-2">
                      {rel.title}
                    </h4>
                  </Link>
                </div>
                <div className="pt-3 mt-3 border-t border-black/[0.05] text-[11px] text-apple-muted flex items-center justify-between">
                  <span>{rel.readTime}</span>
                  <Link href={`/blog/${rel.slug}`} className="font-semibold text-apple-dark flex items-center gap-1">
                    <span>Baca</span>
                    <ArrowRight size={11} />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </SectionWrapper>
      )}
    </>
  );
}
