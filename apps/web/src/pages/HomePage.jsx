import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, TrendingUp, FileText, BarChart3, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import CTAButton from '@/components/CTAButton.jsx';

const HomePage = () => {
  const services = [
    {
      icon: Leaf,
      title: 'Carbon Footprint Assessment',
      description: 'Comprehensive carbon footprint measurement and reporting with optional transparency badge for demonstrating your commitment to environmental accountability.'
    },
    {
      icon: TrendingUp,
      title: 'Business Process Optimization',
      description: 'Strategic adaptation of business processes to align with sustainability goals while maintaining operational efficiency and profitability.'
    },
    {
      icon: FileText,
      title: 'Policy Development',
      description: 'Expert guidance in developing and implementing robust ESG policies tailored to your organization and industry requirements.'
    },
    {
      icon: BarChart3,
      title: 'ESG-Compliant Reporting',
      description: 'Professional ESG reporting services aligned with international standards including GRI, SASB, and TCFD frameworks.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>ESGB.io - ESG Consulting for the Balkans and Beyond</title>
        <meta name="description" content="Leading ESG consulting services in the Balkans. Expert guidance in carbon footprint assessment, business optimization, policy development, and ESG reporting." />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <HeroSection
        backgroundImage="https://horizons-cdn.hostinger.com/b1113ac8-19d0-461b-ad8d-9442f2983f90/8e7896cc17d3f4406126e96b616d1a47.png"
        title="Building Sustainable Futures Across the Balkans"
        subtitle="Expert ESG consulting services that transform businesses through environmental responsibility, social impact, and governance excellence."
        minHeight="min-h-screen"
        overlayOpacity={0.6}
        overlayColor="bg-black"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link to="/contact">
            <CTAButton size="lg" className="bg-[var(--primary-green)] hover:bg-[var(--primary-green-dark)] text-[var(--text-white)] border-none">
              Request a Consultation
              <ArrowRight size={20} className="ml-2" />
            </CTAButton>
          </Link>
          <Link to="/services">
            <CTAButton size="lg" className="bg-[var(--primary-blue)] hover:bg-[var(--primary-blue-dark)] text-[var(--text-white)] border-none">
              Explore Services
            </CTAButton>
          </Link>
        </div>
      </HeroSection>

      {/* Mission Statement */}
      <section className="section-spacing bg-accent">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We empower organizations across the Balkans and beyond to achieve meaningful sustainability impact. Through expert ESG consulting, we help businesses navigate the complex landscape of environmental responsibility, social governance, and regulatory compliance while driving long-term value creation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive ESG solutions tailored to your organization's unique needs and sustainability goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                showTransparencyBadge={index === 0}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <CTAButton size="lg" className="bg-[var(--primary-blue)] hover:bg-[var(--primary-blue-dark)] text-[var(--text-white)] border-none">
                View All Services
                <ArrowRight size={20} className="ml-2" />
              </CTAButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-spacing bg-gradient-to-br from-[hsl(80,30%,25%)] to-[hsl(220,65%,40%)] text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Discover how we've helped organizations achieve their sustainability goals and create lasting environmental impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {item === 1 ? '47%' : item === 2 ? '2.8k' : '94%'}
                </div>
                <div className="text-lg font-semibold mb-2">
                  {item === 1 ? 'Carbon Reduction' : item === 2 ? 'Tons CO₂ Offset' : 'Client Satisfaction'}
                </div>
                <p className="text-sm text-white/80">
                  {item === 1 
                    ? 'Average carbon footprint reduction achieved by our clients in the first year'
                    : item === 2 
                    ? 'Total carbon emissions offset through our consulting programs'
                    : 'Client satisfaction rate based on post-engagement surveys'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-accent rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our ESG experts and discover how we can help you achieve your sustainability goals.
            </p>
            <Link to="/contact">
              <CTAButton size="lg" className="bg-[var(--primary-green)] hover:bg-[var(--primary-green-dark)] text-[var(--text-white)] border-none">
                Request a Consultation
                <ArrowRight size={20} className="ml-2" />
              </CTAButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;