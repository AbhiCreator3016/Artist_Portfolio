
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { artworksData } from '@/data/artworks';

const ArtworkGrid = ({ limit, category }) => {
  // Filter artworks by category if provided
  let filteredArtworks = category 
    ? artworksData.filter(artwork => artwork.category === category)
    : artworksData;
  
  // Limit the number of artworks if specified
  if (limit) {
    filteredArtworks = filteredArtworks.slice(0, limit);
  }
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {filteredArtworks.map((artwork) => (
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
               src="https://images.unsplash.com/photo-1579241685990-ef3dc47cdee5" />
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
  );
};

export default ArtworkGrid;
