import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function ContactSection() {
  const { info, faqs } = companyData;
  const [openFaq, setOpenFaq] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    serviceInterest: 'Kebutuhan Distributor & Pasokan',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const waText = encodeURIComponent(
      `Halo Tim SMB Sembada,\n\nNama: ${formData.name}\nPerusahaan: ${formData.company}\nLayanan yang diminati: ${formData.serviceInterest}\nEmail: ${formData.email}\nNo Telp: ${formData.phone}\nPesan: ${formData.message}`
    );
    window.open(`https://wa.me/${info.whatsapp}?text=${waText}`, '_blank');
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="kontak" className="section-pad" style={{ background: 'var(--white)', position: 'relative' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Mulai Langkah Kemitraan</span>
          </div>
          <h2 className="section-title">
            Hubungi <span className="text-gold">SMB Sembada</span>
          </h2>
          <p className="section-subtitle">
            Konsultasikan segala macam kebutuhan distributor, rantai pasok, atau strategi efisiensi bisnis korporasi Anda bersama tim ahli kami.
          </p>
        </div>

        {/* Main Grid: Form & Contact Info */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: 'clamp(24px, 3.5vw, 40px)',
          marginBottom: 'clamp(48px, 6vw, 72px)'
        }} className="contact-grid">

          {/* Form Card (Flat White) */}
          <div className="card-white" style={{ padding: 'clamp(24px, 3.5vw, 36px)', borderTop: '3px solid var(--gold-500)' }}>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--navy-900)', marginBottom: '6px' }}>
              Kirim Permintaan Konsultasi / Penawaran
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--slate-600)', marginBottom: '24px' }}>
              Isi data di bawah ini. Tim kami akan segera menindaklanjuti via telepon, email, atau WhatsApp dalam waktu kurang dari 24 jam kerja.
            </p>

            {isSubmitted ? (
              <div style={{
                background: 'var(--navy-50)',
                border: '1px solid var(--gold-500)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--gold-500)',
                  color: 'var(--navy-950)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 14px auto'
                }}>
                  <CheckCircle2 size={28} />
                </div>
                <h4 style={{ fontSize: '1.18rem', color: 'var(--navy-900)', marginBottom: '6px' }}>
                  Permintaan Berhasil Dikirim!
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--slate-600)', marginBottom: '16px' }}>
                  Terima kasih <strong>{formData.name}</strong>. Tim spesialis SMB Sembada telah menerima pesan Anda dan membuka saluran komunikasi WhatsApp.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-outline-navy btn-sm"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '5px' }}>
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--slate-300)',
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '5px' }}>
                      Nama Perusahaan / Usaha *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: PT Maju Jaya Makmur"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--slate-300)',
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '5px' }}>
                      Email Perusahaan *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nama@perusahaan.co.id"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--slate-300)',
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '5px' }}>
                      Nomor WhatsApp / Telepon *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812-xxxx-xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--slate-300)',
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '5px' }}>
                    Kebutuhan Layanan Utama
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--slate-300)',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: 'var(--white)'
                    }}
                  >
                    <option>Kebutuhan Distributor & Pasokan Komoditas</option>
                    <option>Manajemen Pergudangan & Logistik Multimoda</option>
                    <option>Program Keagenan & Kemitraan Toko</option>
                    <option>Konsultasi Strategi Distribusi & Penetrasi Pasar</option>
                    <option>Audit & Efisiensi Rantai Pasok</option>
                    <option>Kemitraan Lainnya</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy-900)', marginBottom: '5px' }}>
                    Deskripsi Kebutuhan atau Catatan Tambahan
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Jelaskan secara singkat volume distribusi, wilayah target, atau tantangan bisnis..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--slate-300)',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-gold btn-lg"
                  style={{ width: '100%', marginTop: '6px' }}
                >
                  <Send size={16} />
                  <span>Kirim Permintaan & Terhubung via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Office & Contact Info Card (Flat Solid Navy) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div style={{
              background: 'var(--navy-900)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(24px, 3.5vw, 32px)',
              color: 'var(--white)',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}>
              <span style={{
                display: 'inline-block',
                padding: '3px 10px',
                background: 'rgba(212, 175, 55, 0.15)',
                color: 'var(--gold-300)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '16px'
              }}>
                Kantor Pusat SMB
              </span>

              <h3 style={{ fontSize: '1.35rem', color: 'var(--white)', marginBottom: '18px' }}>
                {info.legalName}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <MapPin size={20} color="var(--gold-400)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div style={{ fontSize: '0.9rem', color: 'var(--slate-200)', lineHeight: 1.5 }}>
                    <div><strong>{info.address.street}</strong></div>
                    <div>{info.address.area}</div>
                    <div>{info.address.city}</div>
                    <div>{info.address.country}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Phone size={18} color="var(--gold-400)" style={{ flexShrink: 0 }} />
                  <div style={{ fontSize: '0.9rem', color: 'var(--slate-200)' }}>
                    <span>Telepon Kantor: </span>
                    <strong style={{ color: 'var(--white)' }}>{info.phone}</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Mail size={18} color="var(--gold-400)" style={{ flexShrink: 0 }} />
                  <div style={{ fontSize: '0.9rem', color: 'var(--slate-200)' }}>
                    <span>Email Resmi: </span>
                    <strong style={{ color: 'var(--gold-300)' }}>{info.email}</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Clock size={18} color="var(--gold-400)" style={{ flexShrink: 0 }} />
                  <div style={{ fontSize: '0.9rem', color: 'var(--slate-200)' }}>
                    <span>Jam Operasional: </span>
                    <strong style={{ color: 'var(--white)' }}>{info.operationalHours}</strong>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div style={{
                marginTop: '24px',
                paddingTop: '18px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--slate-400)' }}>Respon Cepat Tim SMB:</div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--gold-300)', fontWeight: 700 }}>{info.whatsappDisplay}</div>
                </div>
                <a
                  href={`https://wa.me/${info.whatsapp}?text=Halo%20SMB%20Sembada,%20saya%20ingin%20berkonsultasi.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-gold btn-sm"
                >
                  Buka Chat WA
                </a>
              </div>
            </div>

            {/* Flat Location Card */}
            <div style={{
              background: 'var(--slate-100)',
              borderRadius: 'var(--radius-md)',
              padding: '18px',
              border: '1px solid var(--slate-200)',
              textAlign: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--navy-900)', fontWeight: 700, fontSize: '0.92rem', marginBottom: '6px' }}>
                <MapPin size={16} color="var(--gold-700)" />
                <span>Akses Lokasi & Jaringan Logistik</span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--slate-600)', margin: 0 }}>
                Terletak strategis di koridor bisnis TB Simatupang Jakarta dengan akses langsung tol JORR serta akses cepat ke Pelabuhan Tanjung Priok dan Bandara Soekarno-Hatta.
              </p>
            </div>

          </div>

        </div>

        {/* Section FAQ */}
        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div className="section-badge">
              <HelpCircle size={14} />
              <span>FAQ</span>
            </div>
            <h3 style={{ fontSize: '1.65rem', color: 'var(--navy-900)' }}>
              Pertanyaan yang Sering Diajukan
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid var(--slate-200)',
                  borderRadius: 'var(--radius-md)',
                  background: openFaq === idx ? 'var(--navy-50)' : 'var(--white)',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.96rem',
                    fontWeight: 700,
                    color: openFaq === idx ? 'var(--navy-900)' : 'var(--slate-800)',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.question}</span>
                  {openFaq === idx ? <ChevronUp size={16} color="var(--gold-700)" /> : <ChevronDown size={16} color="var(--slate-400)" />}
                </button>

                {openFaq === idx && (
                  <div style={{ padding: '0 20px 18px 20px', fontSize: '0.9rem', color: 'var(--slate-600)', lineHeight: 1.6 }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
