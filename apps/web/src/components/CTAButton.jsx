import React from 'react';
import { Button } from '@/components/ui/button';

const CTAButton = ({ 
  children, 
  variant = 'default', 
  size = 'default',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false,
  className = ''
}) => {
  const baseClasses = fullWidth ? 'w-full' : '';
  
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`transition-smooth active:scale-[0.98] ${baseClasses} ${className}`}
    >
      {children}
    </Button>
  );
};

export default CTAButton;