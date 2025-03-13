import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative" style={{ width: '450px', height: '450px' }}>
            <img
              src="/images/profile.jpg"
              alt="Profile photo in a European setting"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Design, Business & Technology Management
            </h3>
            <p className="text-gray-600 mb-6">
              Currently pursuing my degree at Thammasat University, I combine my passion 
              for design with a strong foundation in business strategy. My academic journey 
              has equipped me with a unique perspective on creating solutions that are not 
              only aesthetically pleasing but also commercially viable.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="h-2 w-2 bg-black rounded-full mt-2 mr-3"></div>
                <p>Specialized in UX/UI design with a focus on user-centric solutions</p>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 bg-black rounded-full mt-2 mr-3"></div>
                <p>Experience in market research and business strategy development</p>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 bg-black rounded-full mt-2 mr-3"></div>
                <p>Strong background in digital innovation and emerging technologies</p>
              </div>
            </div>

            <a 
              href="https://drive.google.com/file/d/1DJtFsJ_RsXX2mEtoI9O1ocU-PwXaY7aa/view?usp=drive_link" 
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;