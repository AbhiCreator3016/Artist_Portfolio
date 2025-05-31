
import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '@/data/education';

const About = () => {
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
              About the Artist
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
              The journey, inspiration, and philosophy behind Michael Anderson's artistic vision
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Biography Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square overflow-hidden rounded-lg">
                <img  
                  className="w-full h-full object-cover" 
                  alt="Michael Anderson working in his studio on a large canvas"
                 src="https://images.unsplash.com/photo-1697383039465-027d79690ede" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Biography</h2>
              <div className="w-20 h-1 bg-accent mb-6"></div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Michael Anderson (b. 1976, Boston, MA) is a contemporary painter whose work explores the intersection of abstract expressionism and figurative art. His distinctive style combines bold brushwork with subtle color harmonies, creating pieces that evoke both emotional depth and visual intrigue.
                </p>
                <p>
                  After completing his MFA at the Rhode Island School of Design in 2003, Anderson established his studio in New York City, where he continues to work today. His early career was marked by a series of successful solo exhibitions that quickly established him as a notable emerging talent in the contemporary art scene.
                </p>
                <p>
                  Anderson's work has evolved through several distinct phases over his twenty-year career. His early paintings were characterized by tightly controlled compositions and a muted palette, reflecting his classical training. By the mid-2000s, his style had shifted toward more expressive brushwork and vibrant color, incorporating elements of abstract expressionism while maintaining figurative references.
                </p>
                <p>
                  Recent years have seen Anderson experimenting with mixed media and larger scale works, pushing the boundaries between painting and sculpture. His current work explores themes of memory, perception, and the dialogue between natural and constructed environments.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Artist Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-accent"
            >
              <h2 className="text-2xl font-bold mb-6">Artist Statement</h2>
              
              <div className="space-y-4 text-gray-700 italic">
                <p>
                  "My work explores the tension between order and chaos, structure and spontaneity. I am fascinated by the ways in which our perception of reality is shaped by memory, emotion, and cultural context.
                </p>
                <p>
                  Each painting begins with a response to something observed—a landscape, an architectural element, a quality of light—but quickly evolves into a dialogue between intention and intuition. I work in layers, building up and scraping back, allowing each piece to develop its own internal logic.
                </p>
                <p>
                  Color is central to my practice. I am drawn to unexpected combinations that create visual vibration and emotional resonance. The interplay between complementary hues and subtle value shifts allows me to create spaces that feel both familiar and otherworldly.
                </p>
                <p>
                  Ultimately, my aim is to create work that rewards sustained attention—paintings that reveal themselves slowly and differently to each viewer, inviting a contemplative engagement with the visual world."
                </p>
              </div>
              
              <div className="mt-6 text-right">
                <p className="font-serif text-lg">— Michael Anderson</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Education & Training
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-accent mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-gray-200 pl-8 ml-4">
              {educationData.map((item, index) => (
                <motion.div 
                  key={item.id}
                  className="mb-12 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="absolute -left-12 top-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{educationData.length - index}</span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold">{item.degree}</h3>
                    <p className="text-accent font-medium">{item.institution}</p>
                    <p className="text-gray-600 mb-2">{item.location} | {item.years}</p>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Awards & Recognition
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-accent mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-medium mb-2">2023</p>
              <h3 className="text-xl font-bold mb-2">National Arts Foundation Grant</h3>
              <p className="text-gray-300">Awarded for outstanding contribution to contemporary painting and commitment to arts education.</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-accent font-medium mb-2">2020</p>
              <h3 className="text-xl font-bold mb-2">International Contemporary Art Prize</h3>
              <p className="text-gray-300">Finalist in the painting category, with work exhibited at the Venice Biennale satellite program.</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-accent font-medium mb-2">2018</p>
              <h3 className="text-xl font-bold mb-2">Pollock-Krasner Foundation Grant</h3>
              <p className="text-gray-300">Received significant funding to support a year-long project exploring large-scale mixed media works.</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-accent font-medium mb-2">2015</p>
              <h3 className="text-xl font-bold mb-2">Museum of Modern Art Acquisition</h3>
              <p className="text-gray-300">Two works acquired for the permanent collection, with feature in the "New Directions in Painting" exhibition.</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-accent font-medium mb-2">2012</p>
              <h3 className="text-xl font-bold mb-2">American Academy in Rome Fellowship</h3>
              <p className="text-gray-300">Year-long residency resulting in a major series of works inspired by classical and Renaissance influences.</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <p className="text-accent font-medium mb-2">2008</p>
              <h3 className="text-xl font-bold mb-2">National Portrait Gallery Award</h3>
              <p className="text-gray-300">First prize in the emerging artist category for innovative approach to contemporary portraiture.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
