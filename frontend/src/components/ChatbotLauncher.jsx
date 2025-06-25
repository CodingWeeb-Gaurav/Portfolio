import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatbotLauncher({ onOpen, isChatboxOpen }) {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3800);
    return () => clearTimeout(timer);
  }, []);

return (
  <div className={`fixed z-50 ${isChatboxOpen ? 'top-60 right-80' : 'bottom-6 right-[-10px]'}`}>
    <motion.div
      className="relative cursor-pointer"
      onClick={onOpen}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, delay: 0.5 }}
    >
      <img
        src='/GIFs/peeking1.gif'
        alt="Chatbot"
        className={`w-24 h-24 object-contain transition-all duration-500`}
        style={{ animation: 'none' }}
      />

      <AnimatePresence>
        {!isChatboxOpen && showMessage && (
          <motion.div
            className="absolute bottom-20 right-2 px-4 py-2 text-sm rounded-2xl shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #FFC1CC, #A7C7E7)',
              color: '#1E293B',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
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
