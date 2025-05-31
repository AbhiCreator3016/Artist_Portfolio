
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { artworksData } from '@/data/artworks';

const FeaturedArtworks = () => {
  // Get only featured artworks
  const featuredArtworks = artworksData.filter(artwork => artwork.featured).slice(0, 3);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Artworks
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-accent mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Discover the latest masterpieces from Michael Anderson's collection. Each piece tells a unique story through color, texture, and emotion.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredArtworks.map((artwork) => (
            <motion.div 
              key={artwork.id} 
              className="artwork-card group"
              variants={itemVariants}
            >
              <Link to={`/artwork/${artwork.id}`}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img  
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={artwork.title}
                   src="https://images.unsplash.com/photo-1517976939922-c98beec9597f" />
                </div>
                <div className="artwork-overlay">
                  <h3 className="text-xl font-bold text-white">{artwork.title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{artwork.medium}</p>
                  <p className="text-accent font-medium mt-2">${artwork.price.toLocaleString()}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/gallery">View All Artworks</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtworks;
