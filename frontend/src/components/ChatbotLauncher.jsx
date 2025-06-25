import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatbotLauncher({ onOpen }) {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true); // Show message after 3.8 seconds
    }, 3800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-[-10px] z-50">
      <motion.div
        className="relative cursor-pointer"
        onClick={onOpen}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, delay: 0.5 }}
      >
        <img
          src="/GIFs/peeking1.gif"
          alt="Chatbot"
          className="w-24 h-24 object-contain"
          style={{
            animation: 'none',
          }}
        />

        <AnimatePresence>
          {showMessage && (
            <motion.div
              className="absolute bottom-20 right-2 px-4 py-2 text-sm rounded-2xl shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #FFC1CC, #A7C7E7)', // Pink-blue gradient
                color: '#1E293B', // Dark slate for contrast
                border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle white border for night glow
                backdropFilter: 'blur(8px)', // Glassmorphism effect
                WebkitBackdropFilter: 'blur(8px)', // Safari support
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Soft shadow for depth
              }}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              Need some help?
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}