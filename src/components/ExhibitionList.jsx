
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { exhibitionsData } from '@/data/exhibitions';

const ExhibitionList = ({ limit, showPast = false }) => {
  const currentDate = new Date();
  
  // Filter exhibitions based on date and showPast parameter
  let filteredExhibitions = showPast
    ? exhibitionsData.filter(exhibition => new Date(exhibition.endDate) < currentDate)
    : exhibitionsData.filter(exhibition => new Date(exhibition.endDate) >= currentDate);
  
  // Sort exhibitions by date (upcoming first for current, most recent first for past)
  filteredExhibitions = showPast
    ? filteredExhibitions.sort((a, b) => new Date(b.endDate) - new Date(a.endDate))
    : filteredExhibitions.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  
  // Limit the number of exhibitions if specified
  if (limit) {
    filteredExhibitions = filteredExhibitions.slice(0, limit);
  }
  
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
  
  // Format dates
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {filteredExhibitions.length > 0 ? (
        filteredExhibitions.map((exhibition) => (
          <motion.div 
            key={exhibition.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="aspect-[4/3] md:aspect-auto">
                <img  
                  className="w-full h-full object-cover" 
                  alt={`Exhibition: ${exhibition.title}`}
                 src="https://images.unsplash.com/photo-1659797148729-f68ece33c282" />
              </div>
              <div className="p-6 md:col-span-2">
                <h3 className="text-2xl font-bold mb-2">{exhibition.title}</h3>
                <p className="text-gray-600 mb-4">{exhibition.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <Calendar className="text-accent mr-2" size={18} />
                    <div>
                      <p className="text-sm font-medium">Dates</p>
                      <p className="text-gray-600 text-sm">
                        {formatDate(exhibition.startDate)} - {formatDate(exhibition.endDate)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-accent mr-2" size={18} />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-gray-600 text-sm">{exhibition.location}</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Opening Hours</p>
                    <p className="text-gray-600 text-sm">{exhibition.hours}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Admission</p>
                    <p className="text-gray-600 text-sm">{exhibition.admission}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))
      ) : (
        <p className="text-center text-gray-500 py-8">No exhibitions to display.</p>
      )}
    </motion.div>
  );
};

export default ExhibitionList;
