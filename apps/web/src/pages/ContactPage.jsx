import React from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import CTAButton from '@/components/CTAButton.jsx';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@esgb.io',
      href: 'mailto:info@esgb.io'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+389 70 123 456',
      href: 'tel:+38970123456'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Skopje, North Macedonia',
      href: null
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon-Fri: 9:00 AM - 6:00 PM',
      href: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - ESGB.io</title>
        <meta name="description" content="Get in touch with ESGB.io for ESG consulting services. Schedule a consultation or send us a message." />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage="https://horizons-cdn.hostinger.com/b1113ac8-19d0-461b-ad8d-9442f2983f90/8e7896cc17d3f4406126e96b616d1a47.png"
        title="Get in Touch"
        subtitle="Ready to start your sustainability journey? We're here to help you achieve your ESG goals."
      />

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Have questions about our services or want to discuss your sustainability goals? Reach out to our team of ESG experts.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-accent rounded-xl">
                <h3 className="text-xl font-semibold mb-3">
                  Schedule a Consultation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Book a free 30-minute consultation to discuss your ESG needs and how we can help.
                </p>
                <CTAButton className="bg-primary hover:bg-primary/90 text-white opacity-50 cursor-not-allowed pointer-events-none" fullWidth>
                  Coming Soon
                </CTAButton>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card border border-border rounded-2xl p-8 shadow-eco-lg">
                <h2 className="text-2xl font-bold mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-spacing bg-accent">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Our Location
            </h2>
            <p className="text-lg text-muted-foreground">
              Based in Skopje, serving organizations across the Balkans and beyond.
            </p>
          </div>
          <div className="bg-muted rounded-2xl overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-lg font-semibold mb-2">Interactive Map</p>
              <p className="text-muted-foreground">
                Map integration coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;