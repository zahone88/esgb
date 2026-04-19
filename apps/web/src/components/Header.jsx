import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import NewsletterForm from '@/components/NewsletterForm.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();

  const navLinks = {
    EN: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Education', path: '/education' },
      { name: 'Blog', path: '/blog' },
      { name: 'Donation', path: '/donation' },
      { name: 'Contact', path: '/contact' },
    ],
    BS: [
      { name: 'Početna', path: '/' },
      { name: 'Usluge', path: '/services' },
      { name: 'Edukacija', path: '/education' },
      { name: 'Blog', path: '/blog' },
      { name: 'Donacije', path: '/donation' },
      { name: 'Kontakt', path: '/contact' },
    ]
  };

  const currentLinks = navLinks[language] || navLinks.EN;
  const isActive = (path) => location.pathname === path;

  const LanguageSwitcher = () => (
    <div className="flex items-center bg-accent/50 rounded-full p-1 border border-border/50">
      <button
        onClick={() => toggleLanguage('BS')}
        className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
          language === 'BS' 
            ? 'bg-white shadow-sm text-[var(--primary-blue)]' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Switch to Bosnian"
      >
        BS
      </button>
      <button
        onClick={() => toggleLanguage('EN')}
        className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
          language === 'EN' 
            ? 'bg-white shadow-sm text-[var(--primary-blue)]' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm transition-colors duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 transition-smooth hover:opacity-80">
            <img 
              src="https://horizons-cdn.hostinger.com/b1113ac8-19d0-461b-ad8d-9442f2983f90/1d661d03a123c6a3d9b7d62882d1bac0.jpg" 
              alt="ESGB.io Logo" 
              className="h-10 md:h-12 w-auto object-contain rounded-sm"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {currentLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-smooth relative py-2 ${
                  isActive(link.path)
                    ? 'text-[var(--primary-green)]'
                    : 'text-foreground hover:text-[var(--primary-blue)]'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary-green)] rounded-t-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <LanguageSwitcher />
            <NewsletterForm variant="header" />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground hover:text-[var(--primary-blue)] transition-smooth bg-accent/50 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border animate-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col gap-2">
              {currentLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-smooth px-4 py-3 rounded-xl ${
                    isActive(link.path)
                      ? 'text-[var(--primary-blue)] bg-blue-50/50'
                      : 'text-foreground hover:text-[var(--primary-blue)] hover:bg-accent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-6 px-4">
              <NewsletterForm variant="mobile" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;