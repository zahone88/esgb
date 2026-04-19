import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import BlogCard from '@/components/BlogCard.jsx';
import NewsletterForm from '@/components/NewsletterForm.jsx';
import { Button } from '@/components/ui/button';
import { blogPosts, categories } from '@/data/blogData.js';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Blog - ESGB.io</title>
        <meta name="description" content="Latest insights, trends, and best practices in ESG, sustainability, and environmental governance." />
      </Helmet>

      <Header />

      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&h=800&fit=crop"
        title="ESG Insights & Resources"
        subtitle="Stay informed with the latest trends, best practices, and expert perspectives on sustainability and environmental governance."
      />

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Category Filter */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <div className="flex flex-col gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? 'default' : 'ghost'}
                        onClick={() => setSelectedCategory(category)}
                        className={`justify-start transition-smooth ${
                          selectedCategory === category
                            ? 'bg-primary text-white hover:bg-primary/90'
                            : 'hover:bg-accent'
                        }`}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-accent rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest ESG insights delivered to your inbox.
                  </p>
                  <NewsletterForm />
                </div>
              </div>
            </aside>

            {/* Blog Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl font-bold">
                  {selectedCategory === 'All' ? 'All Posts' : selectedCategory}
                </h2>
                <p className="text-muted-foreground mt-1">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No articles found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPage;