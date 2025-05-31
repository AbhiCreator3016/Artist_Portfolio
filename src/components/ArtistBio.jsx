
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ArtistBio = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img  
                className="w-full h-full object-cover" 
                alt="Portrait of artist Michael Anderson in his studio"
               src="https://images.unsplash.com/photo-1697383039465-027d79690ede" />
            </div>
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="font-serif text-lg">20+ Years of Artistic Excellence</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Michael Anderson</h2>
            <div className="w-20 h-1 bg-accent mb-6"></div>
            
            <p className="text-gray-700 mb-4">
              Michael Anderson is a contemporary painter whose work explores the intersection of abstract expressionism and figurative art. With over two decades of experience, his paintings have been exhibited in galleries across Europe and North America.
            </p>
            
            <p className="text-gray-700 mb-6">
              Born in Boston and educated at the Rhode Island School of Design, Michael's distinctive style combines bold brushwork with subtle color harmonies, creating pieces that evoke both emotional depth and visual intrigue.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border-l-2 border-accent pl-4">
                <p className="font-medium">Education</p>
                <p className="text-gray-600 text-sm">MFA, Rhode Island School of Design</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="font-medium">Based in</p>
                <p className="text-gray-600 text-sm">New York City, USA</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="font-medium">Exhibitions</p>
                <p className="text-gray-600 text-sm">30+ Solo & Group Shows</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="font-medium">Medium</p>
                <p className="text-gray-600 text-sm">Oil, Acrylic, Mixed Media</p>
              </div>
            </div>
            
            <Button asChild>
              <Link to="/about">Full Biography</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArtistBio;
