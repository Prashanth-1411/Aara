import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "919710111579";
  const message = "Hi Aara Engineering, I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="position-fixed bottom-0 end-0 m-4 z-3 d-flex align-items-center justify-content-center shadow-lg"
      style={{
        width: '60px',
        height: '60px',
        backgroundColor: '#25D366',
        color: '#fff',
        borderRadius: '50%',
        textDecoration: 'none',
        fontSize: '2rem',
        boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)'
      }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
      <span className="position-absolute w-100 h-100 rounded-circle" 
        style={{
          border: '2px solid #25D366',
          animation: 'pulse-whatsapp 2s infinite'
        }}
      ></span>
      <style>
        {`
          @keyframes pulse-whatsapp {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(1.5);
              opacity: 0;
            }
          }
        `}
      </style>
    </motion.a>
  );
};

export default WhatsAppButton;
