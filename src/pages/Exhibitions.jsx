
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ExhibitionList from '@/components/ExhibitionList';

const Exhibitions = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  
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
              Exhibitions
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
              Current, upcoming, and past exhibitions featuring Michael Anderson's artwork
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Exhibitions Section */}
      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="upcoming" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="upcoming">Upcoming & Current</TabsTrigger>
                <TabsTrigger value="past">Past Exhibitions</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="upcoming" className="mt-0">
              <motion.div
                key="upcoming"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ExhibitionList showPast={false} />
              </motion.div>
            </TabsContent>
            
            <TabsContent value="past" className="mt-0">
              <motion.div
                key="past"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ExhibitionList showPast={true} />
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Exhibition Statement */}
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
              <h2 className="text-2xl font-bold mb-6">Exhibition Philosophy</h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  "Exhibitions are more than just displays of artwork—they are immersive experiences that create dialogue between the artist, the work, and the viewer. Each exhibition I develop is conceived as a cohesive narrative, with careful attention to the relationship between individual pieces and the overall journey through the space.
                </p>
                <p>
                  I believe in creating exhibition environments that allow viewers to engage with art on multiple levels—intellectual, emotional, and sensory. The sequencing of works, the quality of light, and even the acoustic properties of a space all contribute to how we perceive and interpret visual art.
                </p>
                <p>
                  My goal for every exhibition is to create moments of discovery and connection, where viewers might find something unexpected that resonates with their own experience or challenges their perspective in a meaningful way."
                </p>
              </div>
              
              <div className="mt-6 text-right">
                <p className="font-serif text-lg">— Michael Anderson</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exhibitions;
