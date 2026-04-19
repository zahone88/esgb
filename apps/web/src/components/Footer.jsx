import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import NewsletterForm from '@/components/NewsletterForm.jsx';
const Footer = () => {
  const quickLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Education',
    path: '/education'
  }, {
    name: 'Blog',
    path: '/blog'
  }, {
    name: 'Donation',
    path: '/donation'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const socialLinks = [{
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn'
  }, {
    icon: Twitter,
    href: '#',
    label: 'Twitter'
  }, {
    icon: Facebook,
    href: '#',
    label: 'Facebook'
  }];
  return <footer className="bg-[hsl(80,30%,25%)] text-white">
      <div className="container-custom section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <img src="https://horizons-cdn.hostinger.com/b1113ac8-19d0-461b-ad8d-9442f2983f90/aff5336807c7512af36f87b979212fff.png" alt="ESGB.io" className="h-12 w-auto brightness-0 invert" />
            <p className="text-sm text-white/80 leading-relaxed">
              Leading ESG consulting for the Balkans and beyond. Building sustainable futures through expert guidance and innovative solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(social => <a key={social.label} href={social.href} aria-label={social.label} className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-smooth">
                  <social.icon size={20} />
                </a>)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <nav className="flex flex-col gap-3">
              {quickLinks.map(link => <Link key={link.path} to={link.path} className="text-sm text-white/80 hover:text-primary transition-smooth">
                  {link.name}
                </Link>)}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Contact</span>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@esgb.io" className="flex items-center gap-2 text-sm text-white/80 hover:text-primary transition-smooth">
                <Mail size={16} />
                info@esgb.io
              </a>
              <a href="tel:+38970123456" className="flex items-center gap-2 text-sm text-white/80 hover:text-primary transition-smooth">
                <Phone size={16} />
                +387
              </a>
              <div className="flex items-start gap-2 text-sm text-white/80">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Sarajevo, Bosnia and Herzegovina</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Stay Updated</span>
            <p className="text-sm text-white/80 mb-4">
              Subscribe to our newsletter for ESG insights and updates.
            </p>
            <NewsletterForm variant="footer" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2026 ESGB.io. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-white/60 hover:text-primary transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-white/60 hover:text-primary transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;