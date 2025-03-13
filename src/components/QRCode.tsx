import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, X, ExternalLink } from 'lucide-react';

const QRCode = () => {
  const [isVisible, setIsVisible] = useState(false);
  const websiteURL = import.meta.env.DEV 
    ? 'http://192.168.1.109:3000'
    : 'https://MossZA007dev.github.io/My-Profile'; // Updated to your actual GitHub Pages URL

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isVisible ? <X size={24} /> : <QrCode size={24} />}
      </motion.button>

      {/* QR Code Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, x: 20 }}
            className="fixed bottom-20 right-4 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100"
          >
            <div className="text-center">
              <p className="text-sm font-medium text-gray-800 mb-4">
                Scan to visit on mobile
              </p>
              <div className="p-3 bg-white rounded-xl shadow-inner">
                <QRCodeSVG
                  value={websiteURL}
                  size={150}
                  level="H"
                  includeMargin={true}
                  className="mx-auto"
                  bgColor="#FFFFFF"
                  fgColor="#000000"
                />
              </div>
              <a 
                href={websiteURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 mt-4 transition-colors"
              >
                {websiteURL.replace(/^https?:\/\//, '')}
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QRCode; 