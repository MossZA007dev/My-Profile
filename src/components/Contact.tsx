import React from 'react';
import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <a href="mailto:mossnulanoa@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-black transition">
                <Mail size={24} />
                mossnulanoa@gmail.com
              </a>
              <a href="tel:+66644517441" className="flex items-center gap-3 text-gray-700 hover:text-black transition">
                <Phone size={24} />
                +66 6-4451-7441
              </a>
              <a href="#linkedin" className="flex items-center gap-3 text-gray-700 hover:text-black transition">
                <Linkedin size={24} />
                LinkedIn Profile
              </a>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Downloads & Links</h4>
              <div className="space-y-2">
                <a 
                  href="/resume.pdf" 
                  className="flex items-center gap-2 text-gray-700 hover:text-black transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  Resume (PDF)
                </a>
                <a 
                  href="#portfolio" 
                  className="flex items-center gap-2 text-gray-700 hover:text-black transition"
                >
                  <ExternalLink size={16} />
                  Portfolio
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;