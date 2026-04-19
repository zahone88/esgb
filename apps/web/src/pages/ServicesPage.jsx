import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const ServicesPage = () => {
  const { language } = useLanguage();

  const pageContent = {
    EN: {
      metaTitle: 'ESG Consulting Services & Solutions - ESGB.io',
      metaDesc: 'Comprehensive ESG services: from reporting and carbon footprint reduction to strategy, education, and supply chain optimization.',
      heroTitle: 'Comprehensive ESG Solutions',
      heroSubtitle: 'Expert consulting services designed to help your organization achieve sustainability excellence and regulatory compliance.',
      sectionTitle: 'Our Service Offerings',
      sectionDesc: 'We provide end-to-end ESG consulting services tailored to your organization\'s unique needs, industry context, and sustainability ambitions.',
      whyTitle: 'Why Choose ESGB.io?',
      whyCards: [
        { title: 'Regional Expertise', desc: 'Deep understanding of Balkan business landscape, regulatory environment, and regional sustainability challenges.' },
        { title: 'International Standards', desc: 'Aligned with global ESG frameworks and best practices to ensure your reporting meets international expectations.' },
        { title: 'Practical Approach', desc: 'Focus on actionable insights and implementable solutions that drive real business value and sustainability impact.' },
        { title: 'Long-term Partnership', desc: 'Ongoing support and guidance as your sustainability journey evolves and regulatory requirements change.' }
      ]
    },
    BS: {
      metaTitle: 'ESG Konzultantske Usluge i Rješenja - ESGB.io',
      metaDesc: 'Sveobuhvatne ESG usluge: od izvještavanja i smanjenja ugljičnog otiska do strategije, edukacije i optimizacije lanca opskrbe.',
      heroTitle: 'Sveobuhvatna ESG Rješenja',
      heroSubtitle: 'Stručne konzultantske usluge osmišljene da pomognu vašoj organizaciji u postizanju izvrsnosti u održivosti i regulatorne usklađenosti.',
      sectionTitle: 'Naša Ponuda Usluga',
      sectionDesc: 'Pružamo cjelovite ESG konzultantske usluge prilagođene jedinstvenim potrebama vaše organizacije, industrijskom kontekstu i ambicijama održivosti.',
      whyTitle: 'Zašto odabrati ESGB.io?',
      whyCards: [
        { title: 'Regionalna Stručnost', desc: 'Duboko razumijevanje poslovnog okruženja Balkana, regulatornog okvira i regionalnih izazova održivosti.' },
        { title: 'Međunarodni Standardi', desc: 'Usklađeni s globalnim ESG okvirima i najboljim praksama kako bi vaši izvještaji ispunili međunarodna očekivanja.' },
        { title: 'Praktičan Pristup', desc: 'Fokus na primjenjive uvide i rješenja koja donose stvarnu poslovnu vrijednost i utjecaj na održivost.' },
        { title: 'Dugoročno Partnerstvo', desc: 'Kontinuirana podrška i smjernice kako se vaše putovanje prema održivosti razvija i regulatorni zahtjevi mijenjaju.' }
      ]
    }
  };

  const servicesData = {
    EN: [
      {
        title: 'ESG Compliance & Reporting',
        metaTitle: 'ESG Compliance & Reporting – Transparent ESG Reports',
        description: 'Professional reporting and compliance with ESG standards (GRI, SASB, TCFD) for investors, regulators, and stakeholders.',
        image: 'https://images.unsplash.com/photo-1699854427600-842027e87f1b?w=800&h=600&fit=crop',
        showTransparencyBadge: false
      },
      {
        title: 'Carbon Footprint & Transparency',
        metaTitle: 'Carbon Footprint Assessment & Transparency Badge',
        description: 'Detailed greenhouse gas emissions assessment, with reduction actions and an optional Transparency Badge for environmental responsibility visibility.',
        image: 'https://images.unsplash.com/photo-1643917853949-74f4eba1c89b?w=800&h=600&fit=crop',
        showTransparencyBadge: true
      },
      {
        title: 'ESG Strategy & Innovation',
        metaTitle: 'ESG Strategy Development & Innovation Consulting',
        description: 'We develop ESG strategies and innovations for long-term growth and competitive advantage in sustainable business.',
        image: 'https://images.unsplash.com/photo-1620886434979-5cc4ddc31858?w=800&h=600&fit=crop',
        showTransparencyBadge: false
      },
      {
        title: 'Policy Development & Operational Advisory',
        metaTitle: 'ESG Policy Development & Business Process Optimization',
        description: 'Creation and implementation of ESG policies and optimization of business processes for better sustainability and efficiency.',
        image: 'https://images.unsplash.com/photo-1596394723541-3555aa6b843a?w=800&h=600&fit=crop',
        showTransparencyBadge: false
      },
      {
        title: 'Supply Chain & ESG Audits',
        metaTitle: 'ESG & Supply Chain Audits – Sustainable Operations',
        description: 'Comprehensive value chain checks and ESG audits for ethical practices, environmental responsibility, and sustainable sourcing.',
        image: 'https://images.unsplash.com/photo-1674027392842-29f8354e236c?w=800&h=600&fit=crop',
        showTransparencyBadge: false
      },
      {
        title: 'Climate Risk & Resilience',
        metaTitle: 'Climate Risk Assessment & Organizational Resilience',
        description: 'Identification and management of climate risks to ensure long-term operational stability and resilience.',
        image: 'https://images.unsplash.com/photo-1643917853949-74f4eba1c89b?w=800&h=600&fit=crop',
        showTransparencyBadge: false
      },
      {
        title: 'Circular Economy & Waste Management',
        metaTitle: 'Circular Economy & Waste Management Strategies',
        description: 'Practical strategies for waste reduction, resource optimization, and transition to a circular business model.',
        image: 'https://images.unsplash.com/photo-1599584463613-f8e2f6d3367b?w=800&h=600&fit=crop',
        showTransparencyBadge: false
      },
      {
        title: 'Sustainability Training & Capacity Building',
        metaTitle: 'ESG & Sustainability Training Programs',
        description: 'Education of employees and management for the effective implementation of internal ESG initiatives.',
        image: 'https://images.unsplash.com/photo-1699271772975-a4cf35547d37?w=800&h=600&fit=crop',
        showTransparencyBadge: false
      },
      {
        title: 'CSR & Community Engagement',
        metaTitle: 'Corporate Social Responsibility & Community Engagement',
        description: 'Development and implementation of CSR initiatives to strengthen relationships with local communities and stakeholders.',
        image: 'https://images.unsplash.com/photo-1693730333248-6e0f79b705f2?w=800&h=600&fit=crop',
        showTransparencyBadge: false
      }
    ],
    BS: [
      {
        title: 'ESG Usklađenost i Izvještavanje',
        metaTitle: 'ESG Compliance & Reporting – Transparent ESG Reports',
        description: 'Profesionalno izvještavanje i usklađenost sa ESG standardima (GRI, SASB, TCFD) za investitore, regulatore i zainteresovane strane.',
        image: 'https://images.unsplash.com/photo-1699854427600-842027e87f1b?w=800&h=600&fit=crop',
        showTransparencyBadge: false
      },
      {
        title: 'Ugljični Otisak i Transparentnost',
        metaTitle: 'Carbon Footprint Assessment & Transparency Badge',
        description: 'Detaljna procjena emisija stakleničkih plinova, sa akcijama za smanjenje i opcionalnim Transparency Badge za vidljivost ekološke odgovornosti.',
        image: 'https://images.unsplash.com/photo-1643917853949-74f4eba1c89b?w=800&h=600&fit=crop',
        showTransparencyBadge: true
      },
      {
        title: 'ESG Strategija i Inovacije',
        metaTitle: 'ESG Strategy Development & Innovation Consulting',
        description: 'Razvijamo ESG strategiju i inovacije za dugoročni rast i konkurentsku prednost u održivom poslovanju.',
        image: 'https://images.unsplash.com/photo-1620886434979-5cc4ddc31858?w=800&h=600&fit=crop',
        showTransparencyBadge: false
      },
      {
        title: 'Razvoj Politika i Operativno Savjetovanje',
        metaTitle: 'ESG Policy Development & Business Process Optimization',
        description: 'Izrada i implementacija ESG politika te optimizacija poslovnih procesa za bolju održivost i efikasnost.',
        image: 'https://images.unsplash.com/photo-1596394723541-3555aa6b843a?w=800&h=600&fit=crop',
        showTransparencyBadge: false
      },
      {
        title: 'Lanac Opskrbe i ESG Auditi',
        metaTitle: 'ESG & Supply Chain Audits – Sustainable Operations',
        description: 'Sveobuhvatne provjere lanca vrijednosti i ESG auditi za etičke prakse, okolišnu odgovornost i održiv sourcing.',
        image: 'https://images.unsplash.com/photo-1674027392842-29f8354e236c?w=800&h=600&fit=crop',
        showTransparencyBadge: false
      },
      {
        title: 'Klimatski Rizici i Otpornost',
        metaTitle: 'Climate Risk Assessment & Organizational Resilience',
        description: 'Identifikacija i upravljanje klimatskim rizicima radi osiguranja dugoročne operativne stabilnosti i otpornosti.',
        image: 'https://images.unsplash.com/photo-1643917853949-74f4eba1c89b?w=800&h=600&fit=crop',
        showTransparencyBadge: false
      },
      {
        title: 'Cirkularna Ekonomija i Upravljanje Otpadom',
        metaTitle: 'Circular Economy & Waste Management Strategies',
        description: 'Praktične strategije za smanjenje otpada, optimizaciju resursa i prelazak na cirkularni model poslovanja.',
        image: 'https://images.unsplash.com/photo-1599584463613-f8e2f6d3367b?w=800&h=600&fit=crop',
        showTransparencyBadge: false
      },
      {
        title: 'Edukacija o Održivosti i Izgradnja Kapaciteta',
        metaTitle: 'ESG & Sustainability Training Programs',
        description: 'Edukacija zaposlenika i menadžmenta za učinkovitu provedbu unutarnjih ESG inicijativa.',
        image: 'https://images.unsplash.com/photo-1699271772975-a4cf35547d37?w=800&h=600&fit=crop',
        showTransparencyBadge: false
      },
      {
        title: 'CSR i Angažman Zajednice',
        metaTitle: 'Corporate Social Responsibility & Community Engagement',
        description: 'Razvoj i implementacija CSR inicijativa za jačanje odnosa s lokalnim zajednicama i stakeholderima.',
        image: 'https://images.unsplash.com/photo-1693730333248-6e0f79b705f2?w=800&h=600&fit=crop',
        showTransparencyBadge: false
      }
    ]
  };

  const currentContent = pageContent[language];
  const currentServices = servicesData[language];

  // Generate JSON-LD Schema for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": currentServices.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.metaTitle,
        "description": service.description,
        "image": service.image,
        "provider": {
          "@type": "Organization",
          "name": "ESGB.io"
        }
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{currentContent.metaTitle}</title>
        <meta name="description" content={currentContent.metaDesc} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <Header />

      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <HeroSection
            backgroundImage="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1600&h=800&fit=crop"
            title={currentContent.heroTitle}
            subtitle={currentContent.heroSubtitle}
            overlayOpacity={0.6}
            overlayColor="bg-[var(--primary-blue-dark)]"
          />

          <section className="section-spacing">
            <div className="container-custom">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary-blue-dark)]">
                  {currentContent.sectionTitle}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {currentContent.sectionDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentServices.map((service, index) => (
                  <ServiceCard
                    key={`${language}-${index}`}
                    image={service.image}
                    title={service.title}
                    description={service.description}
                    showTransparencyBadge={service.showTransparencyBadge}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="section-spacing bg-accent/30">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--primary-blue-dark)]">
                  {currentContent.whyTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
                  {currentContent.whyCards.map((card, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-xl font-semibold mb-3 text-[var(--primary-green)]">{card.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default ServicesPage;