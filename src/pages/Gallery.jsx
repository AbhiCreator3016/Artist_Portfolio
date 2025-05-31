
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ArtworkGrid from '@/components/ArtworkGrid';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Works" },
    { id: "landscape", name: "Landscapes" },
    { id: "abstract", name: "Abstract" },
    { id: "portrait", name: "Portraits" },
    { id: "architectural", name: "Architectural" },
    { id: "floral", name: "Floral" },
    { id: "figurative", name: "Figurative" },
  ];
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Artwork Gallery
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-accent mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Browse Michael Anderson's collection of original paintings available for purchase
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-accent text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Artwork Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ArtworkGrid 
              category={activeCategory === "all" ? null : activeCategory} 
            />
          </motion.div>
        </div>
      </section>
      
      {/* Purchase Information */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Purchasing Information
              </motion.h2>
              <motion.div 
                className="w-24 h-1 bg-accent mx-auto mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-4">How to Purchase</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Contact the gallery directly via phone or email to inquire about availability.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>All major credit cards, wire transfers, and payment plans are accepted.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>International shipping is available with proper insurance and customs documentation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Each artwork comes with a certificate of authenticity signed by the artist.</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4">Commissions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Michael Anderson accepts a limited number of commissions each year.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Commission process begins with a consultation to discuss vision, size, and placement.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>A 50% deposit is required to secure your commission, with balance due upon completion.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Commission timeline is typically 2-4 months depending on size and complexity.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
