import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Leaf, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import PaymentButton from '@/components/PaymentButton.jsx';
import NewsletterForm from '@/components/NewsletterForm.jsx';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const DonationPage = () => {
  const [donationData, setDonationData] = useState({
    amount: '',
    name: '',
    email: '',
    message: ''
  });

  const impactMetrics = [
    {
      icon: Leaf,
      value: '2.8k tons',
      label: 'CO₂ Offset',
      description: 'Carbon emissions reduced through our programs'
    },
    {
      icon: Users,
      value: '147',
      label: 'Organizations',
      description: 'Businesses supported in their sustainability journey'
    },
    {
      icon: TrendingUp,
      value: '47%',
      label: 'Avg. Reduction',
      description: 'Average carbon footprint decrease achieved'
    }
  ];

  const handleChange = (e) => {
    setDonationData({
      ...donationData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Support Our Mission - ESGB.io</title>
        <meta name="description" content="Support environmental and social change in the Balkans. Your donation helps organizations achieve sustainability goals." />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&h=800&fit=crop"
        title="Support Sustainable Change"
        subtitle="Your contribution helps organizations across the Balkans achieve their environmental and social impact goals."
      />

      {/* Impact Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every donation directly supports our mission to drive environmental and social change across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-accent rounded-2xl p-8 text-center"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-xl mb-4">
                  <metric.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold mb-2">
                  {metric.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-spacing bg-accent">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Make a Donation
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose your preferred payment method and amount to support our sustainability initiatives.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-eco-lg">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-sm font-medium">
                    Donation Amount (EUR) *
                  </Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    min="1"
                    step="0.01"
                    placeholder="50.00"
                    value={donationData.amount}
                    onChange={handleChange}
                    className="text-gray-900"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Name (Optional)
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={donationData.name}
                    onChange={handleChange}
                    className="text-gray-900"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email (Optional)
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={donationData.email}
                    onChange={handleChange}
                    className="text-gray-900"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Share why you're supporting our mission..."
                    value={donationData.message}
                    onChange={handleChange}
                    rows={4}
                    className="text-gray-900 resize-none"
                  />
                </div>

                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    Choose your payment method:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <PaymentButton
                      provider="paypal"
                      amount={donationData.amount}
                      donorName={donationData.name}
                      donorEmail={donationData.email}
                      message={donationData.message}
                    />
                    <PaymentButton
                      provider="stripe"
                      amount={donationData.amount}
                      donorName={donationData.name}
                      donorEmail={donationData.email}
                      message={donationData.message}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-[hsl(80,30%,25%)] to-[hsl(220,65%,40%)] rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-white/90 mb-6">
              Subscribe to our newsletter for updates on how your donations are making an impact.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm variant="footer" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DonationPage;