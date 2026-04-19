import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { BookOpen, Video, Download, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import CTAButton from '@/components/CTAButton.jsx';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const EducationPage = () => {
  const learningResources = [
    {
      icon: BookOpen,
      title: 'ESG Fundamentals Course',
      description: 'Comprehensive introduction to environmental, social, and governance principles for business leaders and sustainability professionals.',
      duration: '6 weeks',
      level: 'Beginner'
    },
    {
      icon: Video,
      title: 'Carbon Accounting Masterclass',
      description: 'In-depth training on greenhouse gas measurement, reporting protocols, and carbon reduction strategies.',
      duration: '4 weeks',
      level: 'Intermediate'
    },
    {
      icon: Users,
      title: 'ESG Reporting Workshop',
      description: 'Hands-on workshop covering GRI, SASB, and TCFD frameworks with practical reporting exercises.',
      duration: '2 weeks',
      level: 'Advanced'
    },
    {
      icon: Download,
      title: 'Sustainability Toolkit',
      description: 'Downloadable templates, checklists, and guides for implementing ESG initiatives in your organization.',
      duration: 'Self-paced',
      level: 'All levels'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Education & Training - ESGB.io</title>
        <meta name="description" content="ESG education and training programs. Learn sustainability best practices through courses, workshops, and resources." />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&h=800&fit=crop"
        title="ESG Education & Training"
        subtitle="Build your sustainability expertise through our comprehensive learning programs and resources."
      />

      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learning Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access expert-led courses, interactive workshops, and practical tools to advance your ESG knowledge and capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-eco-lg transition-smooth">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <resource.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-muted-foreground">{resource.duration}</div>
                        <div className="text-xs text-muted-foreground">{resource.level}</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {resource.description}
                    </CardDescription>
                    <CTAButton variant="outline" fullWidth className="opacity-50 cursor-not-allowed pointer-events-none">
                      Coming Soon
                    </CTAButton>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gradient-to-br from-[hsl(80,30%,25%)] to-[hsl(220,65%,40%)] text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interactive Learning Platform
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Our upcoming interactive platform will feature video lectures, downloadable resources, progress tracking, and certification upon completion. Stay tuned for the launch of our comprehensive ESG education ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Register Interest
                <ArrowRight size={20} className="ml-2" />
              </CTAButton>
              <Link to="/contact">
                <CTAButton size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </CTAButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Invest in ESG Education?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">For Organizations</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Build internal ESG expertise and reduce reliance on external consultants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Improve sustainability performance through informed decision-making</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Meet regulatory requirements and stakeholder expectations</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">For Professionals</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Advance your career in the growing sustainability sector</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Gain recognized credentials and practical skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Join a network of sustainability professionals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default EducationPage;