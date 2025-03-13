import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.h3 
              className="text-2xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Let's create something amazing together
            </motion.h3>
            <motion.p 
              className="text-neutral-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Open to new opportunities and collaborations.
            </motion.p>
          </div>
          <div className="flex flex-col md:items-end space-y-4">
            <motion.a 
              href="mailto:mossnulanoa@gmail.com"
              className="text-lg hover:text-neutral-300 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: -5 }}
            >
              mossnulanoa@gmail.com
            </motion.a>
            <motion.a 
              href="tel:+66644517441"
              className="text-lg hover:text-neutral-300 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ x: -5 }}
            >
              +66 6-4451-7441
            </motion.a>
          </div>
        </div>
        <motion.div 
          className="mt-16 pt-8 border-t border-neutral-800 text-neutral-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          © {new Date().getFullYear()} Maythee Nualnao. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 