import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const clients = [
  {
    name: "SE-ED",
    link: "https://www.se-ed.com/",
    description: "Leading educational publisher in Thailand"
  },
  {
    name: "Medpark Hospital",
    link: "https://www.medparkhospital.com/",
    description: "Premier healthcare provider"
  },
  {
    name: "Thammasat University",
    link: "https://tu.ac.th/",
    description: "Prestigious educational institution"
  },
  {
    name: "NoWaste",
    link: "https://nowaste.co/",
    description: "Innovative waste management solution"
  }
];

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      <div className="max-w-7xl w-full space-y-16 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -left-20 text-[20rem] font-bold text-black pointer-events-none select-none"
        >
          MN
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 relative"
        >
          <h1 className="hero-title font-semibold text-neutral-900">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              Design.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="block"
            >
              Strategy.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="block"
            >
              Innovation.
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-neutral-600 max-w-2xl"
          >
            I craft user-centric digital experiences that blend creativity with strategic thinking.
            Currently shaping the future of design at Thammasat University.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-4"
        >
          <a 
            href="#projects" 
            className="group inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full hover:bg-neutral-800 transition-all"
          >
            View Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          
          <div className="flex items-center gap-8 text-neutral-600">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="text-3xl font-semibold">4+</div>
              <div className="text-sm">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="text-3xl font-semibold">50+</div>
              <div className="text-sm">Projects Completed</div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="pt-16 border-t border-neutral-200"
        >
          <div className="text-sm text-neutral-500 mb-4">Featured Clients</div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.a
                key={client.name}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group space-y-2"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg font-medium text-neutral-600 group-hover:text-neutral-900">
                    {client.name}
                  </span>
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-neutral-500">{client.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;