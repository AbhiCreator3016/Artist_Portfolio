
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
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
              Contact Us
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
              Get in touch with us for inquiries about artwork, exhibitions, or commissions
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Gallery Information</h2>
              <div className="w-20 h-1 bg-accent mb-8"></div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Location</h3>
                    <p className="text-gray-600">123 Art District</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                    <p className="text-gray-600">United States</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Gallery Hours</h3>
                    <p className="text-gray-600">Tuesday - Friday: 10:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 11:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sunday - Monday: Closed</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+12125551234" className="hover:text-accent transition-colors">+1 (212) 555-1234</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contact@artisangallery.com" className="hover:text-accent transition-colors">contact@artisangallery.com</a>
                    </p>
                    <p className="text-gray-600">
                      <a href="mailto:michael@artisangallery.com" className="hover:text-accent transition-colors">michael@artisangallery.com</a> (Artist Direct)
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-accent/10 p-3 rounded-full hover:bg-accent/20 transition-colors" aria-label="Instagram">
                      <Instagram className="text-accent" size={24} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-accent/10 p-3 rounded-full hover:bg-accent/20 transition-colors" aria-label="Facebook">
                      <Facebook className="text-accent" size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-accent/10 p-3 rounded-full hover:bg-accent/20 transition-colors" aria-label="Twitter">
                      <Twitter className="text-accent" size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
              <div className="w-20 h-1 bg-accent mb-8"></div>
              
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="aspect-[16/9] w-full rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.01371955871583%2C40.73989969776925%2C-73.98453712463379%2C40.75670031591572&amp;layer=mapnik" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Gallery Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
