import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "SE-ED Digital",
    subtitle: "Education Platform",
    description: "Revolutionizing digital education content delivery through an innovative subscription model.",
    image: "https://i.imgur.com/mDN42TD.jpg",
    tags: ["UX Design", "Strategy", "Education"],
    year: "2023"
  },
  {
    title: "OKX Crypto Wallet Clone",
    subtitle: "Cryptocurrency Trading Interface",
    description: "A sleek, user-friendly interface with real-time market data and trading features. The project includes Dark Mode optimization, seamless navigation, and enhanced UI components for clarity and efficiency. Key screens showcase Home, Discover, and Trade functionalities, demonstrating advanced UX/UI design and prototyping skills in Figma.",
    image: "https://imgur.com/F0bwrk3.jpg",
    tags: ["UX/UI Design", "Figma", "Dark Mode", "Crypto"],
    year: "2024"
  },
  {
    title: "Two Breath Ease",
    subtitle: "Air Quality Monitoring App",
    description: "An innovative air quality monitoring application that provides real-time alerts, forecasts, and health insights using AI-driven data. The app features location-based tracking, pollution reports, and news updates to help users make informed decisions about their well-being. The clean, intuitive interface includes detailed analytics, health metrics, and regional air quality comparisons.",
    image: "https://imgur.com/PKcQuvT.jpg",
    tags: ["UX/UI Design", "AI Integration", "Health Tech", "Data Visualization"],
    year: "2024"
  },
  {
    title: "NoWaste",
    subtitle: "AI-Powered Solution",
    description: "Smart food waste management system utilizing artificial intelligence.",
    image: "https://i.imgur.com/sz2umNf.jpg",
    tags: ["AI", "UX/UI", "Sustainability"],
    year: "2023"
  },
  {
    title: "Link2earth",
    subtitle: "Environmental Gamification App",
    description: "An innovative mobile app that encourages outdoor exploration and environmental awareness through gamification and user engagement. Features interactive maps, eco-challenges, and progress tracking to motivate users to connect with nature while promoting sustainability.",
    image: "https://i.imgur.com/dT2JrI4.jpg",
    tags: ["UX/UI", "Gamification", "Environmental"],
    year: "2023"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16"
        >
          <h2 className="section-title font-semibold text-neutral-900">
            Selected
            <br />
            Projects
          </h2>
          <motion.a 
            href="#" 
            className="hidden md:flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            whileHover={{ x: 5 }}
          >
            View All Projects
            <ArrowUpRight size={20} />
          </motion.a>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`project-card space-y-6 ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <motion.div 
                className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-100"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="text-neutral-600">{project.subtitle}</p>
                  </div>
                  <span className="text-neutral-400">{project.year}</span>
                </div>
                
                <p className="text-neutral-600">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tagIndex} 
                      className="tag"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;