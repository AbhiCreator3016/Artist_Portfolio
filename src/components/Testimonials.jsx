
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Michael's work captures emotion in a way that few contemporary artists can achieve. His use of color and texture creates an immersive experience.",
    author: "Sarah Johnson",
    title: "Art Collector",
  },
  {
    id: 2,
    quote: "The depth and complexity in Anderson's paintings reveal new details with each viewing. His work has been a centerpiece in our collection for years.",
    author: "Robert Chen",
    title: "Gallery Director, Modern Art Museum",
  },
  {
    id: 3,
    quote: "I've followed Michael's career for over a decade, and his artistic evolution continues to impress. His latest series shows remarkable maturity and vision.",
    author: "Emily Williams",
    title: "Art Critic, The New York Times",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Collector Testimonials
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-accent mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Quote className="text-accent mb-4" size={32} />
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
