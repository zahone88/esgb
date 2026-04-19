import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';

const BlogCard = ({ post, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col hover:shadow-eco-lg transition-smooth border-border bg-card group">
        {post.featured_image && (
          <div className="overflow-hidden rounded-t-xl">
            <img 
              src={post.featured_image} 
              alt={post.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {post.category}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar size={14} />
              <span>{format(new Date(post.published_date), 'MMM d, yyyy')}</span>
            </div>
          </div>
          <CardTitle className="text-xl font-semibold group-hover:text-primary transition-smooth">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-base leading-relaxed text-muted-foreground line-clamp-3">
            {post.excerpt}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Link 
            to={`/blog/${post.id}`}
            className="text-primary font-medium hover:underline transition-smooth"
          >
            Read more →
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogCard;