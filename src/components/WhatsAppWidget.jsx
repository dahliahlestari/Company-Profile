import React, { useState } from 'react';
import { MessageCircle, X, Send, ExternalLink } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('');
  const { info } = companyData;

  const handleSend = (e) => {
    e.preventDefault();
    const text = quickMsg.trim() 
      ? encodeURIComponent(quickMsg)
      : encodeURIComponent("Halo Tim PT. SMB, saya ingin bertanya seputar layanan One Stop Consultant and Service Management.");
    window.open(`https://wa.me/${info.whatsapp}?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 900 }}>
      {/* Pop-up Chat Card (Flat White with Solid Navy Header) */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '68px',
          right: 0,
          width: '310px',
          background: 'var(--white)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--gold-400)',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            background: 'var(--navy-900)',
            color: 'var(--white)',
            padding: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid var(--gold-500)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'var(--gold-500)',
                color: 'var(--navy-950)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '0.8rem'
              }}>
                SMB
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--white)' }}>
                  Customer Support PT. SMB
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--gold-400)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                  <span>Online • Respon Cepat</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ color: 'var(--slate-400)', cursor: 'pointer', background: 'none', border: 'none', padding: '2px' }}
              aria-label="Tutup chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body Message */}
          <div style={{ padding: '14px', background: 'var(--slate-50)' }}>
            <div style={{
              background: 'var(--white)',
              padding: '10px 12px',
              borderRadius: '8px',
              fontSize: '0.84rem',
              color: 'var(--slate-700)',
              lineHeight: 1.45,
              border: '1px solid var(--slate-200)',
              marginBottom: '12px'
            }}>
              Halo! Selamat datang di <strong>PT. SMB</strong>.
              <br /><br />
              Ada yang dapat kami bantu terkait <strong>Pendampingan SPPG</strong>, <strong>IT Solutions</strong>, <strong>Pest Control</strong>, atau <strong>Risk Insurance</strong>?
            </div>

            <form onSubmit={handleSend} style={{ display: 'flex', gap: '6px' }}>
              <input
                type="text"
                placeholder="Ketik pesan Anda..."
                value={quickMsg}
                onChange={(e) => setQuickMsg(e.target.value)}
                style={{
                  flex: 1,
                  padding: '8px 10px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--slate-300)',
                  fontSize: '0.84rem',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'var(--gold-500)',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  padding: '0 12px',
                  color: 'var(--navy-950)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Send size={14} />
              </button>
            </form>
          </div>

          {/* Direct WA Button */}
          <div style={{ padding: '8px 14px', background: 'var(--white)', borderTop: '1px solid var(--slate-200)', textAlign: 'center' }}>
            <a
              href={`https://wa.me/${info.whatsapp}?text=Halo%20PT.%20SMB,%20saya%20tertarik%20dengan%20layanan%20Anda.`}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: '0.8rem',
                color: 'var(--navy-800)',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <span>Buka langsung di WhatsApp</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      )}

      {/* Floating Toggle Button (Flat Solid Navy & Gold Border) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'var(--navy-900)',
          border: '2px solid var(--gold-500)',
          color: 'var(--gold-400)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'transform 0.15s ease'
        }}
        aria-label="Buka Chat WhatsApp"
      >
        {isOpen ? <X size={22} color="var(--gold-300)" /> : <MessageCircle size={24} color="var(--gold-400)" />}
      </button>
    </div>
  );
}
