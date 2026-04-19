import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CTAButton from '@/components/CTAButton.jsx';

const ServiceCard = ({ 
  icon: Icon, 
  image,
  title, 
  description, 
  showTransparencyBadge = false,
  index = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover:shadow-eco-lg transition-smooth border-border bg-card group overflow-hidden">
        {image && (
          <div className="overflow-hidden h-48 w-full relative">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-smooth z-10" />
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <CardHeader className={image ? "pt-6" : ""}>
          <div className="flex items-start justify-between mb-4">
            {Icon && (
              <div className="p-3 bg-primary/10 rounded-xl">
                <Icon className="w-8 h-8 text-primary" />
              </div>
            )}
            {showTransparencyBadge && (
              <Badge variant="secondary" className="bg-[hsl(220,65%,40%)] text-white ml-auto">
                Transparency Badge
              </Badge>
            )}
          </div>
          <CardTitle className="text-xl font-semibold group-hover:text-[var(--primary-blue)] transition-smooth">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-base leading-relaxed text-muted-foreground">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="mt-auto pb-6">
          <CTAButton 
            fullWidth 
            className="bg-[var(--primary-blue)] hover:bg-[var(--primary-blue-dark)] text-[var(--text-white)] border-none"
          >
            Learn More
          </CTAButton>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;