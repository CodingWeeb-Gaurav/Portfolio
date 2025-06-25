import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const SkillCard = ({ logo, text, hoverColors = ['#ffd43b', '#ff8c00'] }) => {
  const [imageError, setImageError] = useState(false);
  const controls = useAnimation();

  // Animation variants
  const cardVariants = {
    hidden: {
      rotateY: 0,
      opacity: 0,
      scale: 0.8
    },
    visible: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 0.7
      }
    },
    flipIn: {
      rotateY: [0, 180, 540, 720, 900, 1080, 0], // 3 full rotations (1080°)
      transition: {
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1]
      }
    },
    flipOut: {
      rotateY: [0, 180, 540, 720, 900, 1080, 0], // Reverse flip
      transition: {
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1]
      }
    },
    hover: {
      scale: 1.15,
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  // Parse hex color to RGB
  const parseColor = (hex) => {
    if (!hex) return '255, 212, 59';
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  const rgbColor = parseColor(hoverColors[0]);

  return (
    <motion.div
      className="card relative rounded-lg p-6 w-32 h-32 shadow-lg cursor-pointer"
      style={{
        '--hover-color-1': hoverColors[0],
        '--hover-color-2': hoverColors[1] || '#ffd43b',
        '--rgb-color': rgbColor,
      }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ 
        once: false,
        margin: "0px 0px -50px 0px",
        onEnter: () => controls.start("flipIn"),
        onLeave: () => controls.start("flipOut")
      }}
      animate={controls}
    >
      {/* Front of the card (original design) */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center rounded-lg backface-hidden bg-transparent backdrop-blur-md"
        style={{ 
          backfaceVisibility: 'hidden',
          background: 'rgba(18, 18, 30, 0.4)',
          border: '2px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        {imageError ? (
          <div className="fallback w-20 h-20 rounded-full flex items-center justify-center bg-blue-600 text-white font-bold text-sm">
            {text}
          </div>
        ) : (
          <img
            src={logo}
            alt={`${text} Logo`}
            className="w-20 h-20 object-contain"
            onError={() => setImageError(true)}
          />
        )}
        <h2 className="card-text text-lg font-bold text-white mt-2">{text}</h2>
      </motion.div>

      {/* Back of the card (gold-brown) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center rounded-lg backface-hidden"
        style={{ 
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          background: 'linear-gradient(135deg, #D4AF37 0%, #F5D78E 50%, #D4AF37 100%)',
          boxShadow: '0 4px 20px rgba(212, 175, 55, 0.6)'
        }}
      >
        <div className="text-center p-2">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
            {imageError ? (
              <span className="text-brown-800 font-bold">{text.charAt(0)}</span>
            ) : (
              <img
                src={logo}
                alt={`${text} Logo`}
                className="w-12 h-12 object-contain"
                onError={() => setImageError(true)}
              />
            )}
          </div>
          <h2 className="text-brown-800 font-bold text-sm">{text}</h2>
        </div>
      </motion.div>

      <style jsx>{`
        .card {
          transform-style: preserve-3d;
          perspective: 1000px;
          overflow: hidden;
          isolation: isolate;
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(var(--rgb-color), 0.3) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }

        .card:hover::before {
          opacity: 1;
        }

        .card::after {
          content: '';
          position: absolute;
          width: 200%;
          height: 200%;
          top: 50%;
          left: 50%;
          background: conic-gradient(var(--hover-color-1), var(--hover-color-2), var(--hover-color-1));
          animation: rotateShadow 3s linear infinite;
          z-index: -1;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .card:hover::after {
          opacity: 0.2;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .card-text {
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .card:hover .card-text {
          opacity: 1;
        }

        @keyframes rotateShadow {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </motion.div>
  );
};

export default SkillCard;