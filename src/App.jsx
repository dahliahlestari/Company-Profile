import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import ServicesPage from './pages/ServicesPage';
import LeadershipPage from './pages/LeadershipPage';
import ClientsPage from './pages/ClientsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {/* Persistent Header & Navigation */}
        <Navbar />

        {/* Dynamic Page Routing */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/tentang-kami" element={<WhoWeAre />} />
            <Route path="/layanan" element={<ServicesPage />} />
            <Route path="/pengurus" element={<LeadershipPage />} />
            <Route path="/klien" element={<ClientsPage />} />
            <Route path="/kontak" element={<ContactPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Persistent Corporate Footer */}
        <Footer />

        {/* Floating WhatsApp Action Widget */}
        <WhatsAppWidget />
      </div>
    </Router>
  );
}
