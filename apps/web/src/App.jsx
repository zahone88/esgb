import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import EducationPage from './pages/EducationPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import DonationPage from './pages/DonationPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { LanguageProvider } from './contexts/LanguageContext.jsx';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Toaster position="top-right" richColors />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/donation" element={<DonationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;