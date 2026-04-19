import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient';

const NewsletterForm = ({ variant = 'default' }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setLoading(true);
    try {
      await pb.collection('newsletter_signups').create({ 
        email 
      }, { $autoCancel: false });
      
      toast.success('Successfully subscribed to newsletter');
      setEmail('');
    } catch (error) {
      if (error.message.includes('duplicate')) {
        toast.error('This email is already subscribed');
      } else {
        toast.error('Subscription failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (variant === 'header') {
    return (
      <Button 
        onClick={() => document.getElementById('footer-newsletter')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-primary hover:bg-primary/90 text-white"
      >
        <Mail size={16} className="mr-2" />
        Subscribe
      </Button>
    );
  }

  if (variant === 'mobile') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className="bg-white text-gray-900"
        />
        <Button 
          type="submit" 
          disabled={loading}
          className="bg-primary hover:bg-primary/90 text-white w-full"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
    );
  }

  if (variant === 'footer') {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2" id="footer-newsletter">
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
        />
        <Button 
          type="submit" 
          disabled={loading}
          className="bg-primary hover:bg-primary/90 text-white flex-shrink-0"
        >
          {loading ? '...' : 'Subscribe'}
        </Button>
      </form>
    );
  }

  // Default variant (for blog sidebar, donation page, etc.)
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
        className="bg-white text-gray-900"
      />
      <Button 
        type="submit" 
        disabled={loading}
        className="bg-primary hover:bg-primary/90 text-white w-full"
      >
        {loading ? 'Subscribing...' : 'Subscribe to Newsletter'}
      </Button>
    </form>
  );
};

export default NewsletterForm;