import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          background: '#071322',
          color: '#ffffff',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, sans-serif',
          textAlign: 'center'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            background: 'rgba(229, 168, 59, 0.15)',
            border: '1px solid rgba(229, 168, 59, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            color: '#e5a83b',
            fontSize: '28px',
            fontWeight: 700
          }}>
            SMB
          </div>
          <h1 style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            marginBottom: '12px'
          }}>
            Memuat Sistem PT. SMB
          </h1>
          <p style={{
            maxWidth: '480px',
            color: '#86868b',
            fontSize: '0.92rem',
            lineHeight: 1.6,
            marginBottom: '28px'
          }}>
            Halaman sedang diperbarui. Silakan klik tombol di bawah untuk memuat ulang halaman dengan konfigurasi terbaru.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: '#e5a83b',
              color: '#071322',
              border: 'none',
              borderRadius: '9999px',
              padding: '12px 28px',
              fontWeight: 650,
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(229, 168, 59, 0.35)'
            }}
          >
            Muat Ulang Halaman
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
