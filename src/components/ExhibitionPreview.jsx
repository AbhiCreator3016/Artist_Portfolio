
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { exhibitionsData } from '@/data/exhibitions';

const ExhibitionPreview = () => {
  // Get only upcoming or current exhibitions
  const upcomingExhibitions = exhibitionsData
    .filter(exhibition => new Date(exhibition.endDate) >= new Date())
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
    .slice(0, 1);
  
  if (upcomingExhibitions.length === 0) return null;
  
  const exhibition = upcomingExhibitions[0];
  
  // Format dates
  const startDate = new Date(exhibition.startDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  
  const endDate = new Date(exhibition.endDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img  
          className="w-full h-full object-cover" 
          alt="Art gallery exhibition space with paintings on walls"
         src="https://images.unsplash.com/photo-1599140427277-7cbcb58180a0" />
        <div className="absolute inset-0 bg-black/70 z-10"></div>
      </div>
      
      <div className="container-custom relative z-20 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-medium mb-2 block">Current Exhibition</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{exhibition.title}</h2>
            <div className="w-20 h-1 bg-accent mb-6"></div>
            
            <p className="text-gray-300 mb-6">{exhibition.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="border-l-2 border-accent pl-4">
                <p className="font-medium">Dates</p>
                <p className="text-gray-300 text-sm">{startDate} - {endDate}</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="font-medium">Location</p>
                <p className="text-gray-300 text-sm">{exhibition.location}</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="font-medium">Opening Hours</p>
                <p className="text-gray-300 text-sm">{exhibition.hours}</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="font-medium">Admission</p>
                <p className="text-gray-300 text-sm">{exhibition.admission}</p>
              </div>
            </div>
            
            <Button asChild>
              <Link to="/exhibitions">View All Exhibitions</Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square overflow-hidden rounded-lg border-8 border-white/10">
              <img  
                className="w-full h-full object-cover" 
                alt={`Featured artwork from ${exhibition.title} exhibition`}
               src="https://images.unsplash.com/photo-1697805658695-aa94b52cf596" />
            </div>
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-accent text-white p-4 rounded shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="font-serif text-lg">Featured Exhibition</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExhibitionPreview;
