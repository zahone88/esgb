import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  children,
  overlay = true,
  overlayOpacity = 0.5,
  overlayColor = 'bg-black',
  minHeight = 'min-h-[60vh]'
}) => {
  return (
    <section 
      className={`relative ${minHeight} flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {overlay && (
        <div 
          className={`absolute inset-0 ${overlayColor}`}
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      <div className="relative z-10 container-custom text-center text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;