import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard } from 'lucide-react';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient';

const PaymentButton = ({ provider, amount, donorName, donorEmail, message }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!amount || amount <= 0) {
      toast.error('Please enter a valid donation amount');
      return;
    }

    setLoading(true);
    try {
      // Record donation in database
      await pb.collection('donations').create({
        donor_name: donorName || 'Anonymous',
        donor_email: donorEmail || '',
        amount: parseFloat(amount),
        payment_method: provider,
        message: message || ''
      }, { $autoCancel: false });

      // In production, this would redirect to actual payment gateway
      toast.success(`Redirecting to ${provider === 'paypal' ? 'PayPal' : 'Stripe'} payment...`);
      
      // Simulate payment redirect
      setTimeout(() => {
        toast.success('Thank you for your donation');
      }, 2000);
    } catch (error) {
      toast.error('Payment processing failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const buttonStyles = provider === 'paypal' 
    ? 'bg-[#0070ba] hover:bg-[#005ea6] text-white'
    : 'bg-[#635bff] hover:bg-[#5248e4] text-white';

  return (
    <Button
      onClick={handlePayment}
      disabled={loading}
      className={`${buttonStyles} transition-smooth active:scale-[0.98] min-w-[200px]`}
    >
      <CreditCard size={20} className="mr-2" />
      {loading ? 'Processing...' : `Donate with ${provider === 'paypal' ? 'PayPal' : 'Stripe'}`}
    </Button>
  );
};

export default PaymentButton;