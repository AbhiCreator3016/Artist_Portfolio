
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ArtistImg from '../data/Images/ArtistImage.png'

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row  bg-black relative h-screen items-center justify-center max-md:justify-start overflow-hidden">
      
      <div className="hidden md:block container-custom relative z-20 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="block">Michael Anderson</span>
            <span className="text-accent">Fine Art</span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200">
            Exploring the boundaries between reality and imagination through vibrant oil paintings and mixed media artwork.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="text-base">
              <Link to="/gallery">View Gallery</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/about">About the Artist</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="container-custom-2 relative z-20">
        <img  className=" w-full md:h-auto max-lg:pt-[12rem] z-20" 
          alt="Artist painting in a sunlit studio with canvas and brushes"
         src={ArtistImg} />
        <h1 className='text-red-400 absolute inset-0 z-21 text-4xl font-bold mb-4'>
          
        </h1>
      </div>
      <motion.div 
        className="absolute max-md:top-[10rem] md:top-[50rem] left-30 z-20 hidden max-lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h1 className=" text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-gray-100">Michael Anderson</span>
          </h1>
      </motion.div>
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll to explore</span>
          <motion.div 
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
