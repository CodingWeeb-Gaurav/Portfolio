// src/components/ProjectCard.jsx
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, image, technologies, github, demo }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      className="bg-gray-800/50 rounded-xl overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity duration-300" 
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full text-sm ${
                i % 2 === 0
                  ? 'bg-purple-600/20 text-purple-300'
                  : 'bg-pink-600/20 text-pink-300'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <a
            href={github}
            onClick={scrollToTop}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={demo}
            onClick={scrollToTop}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-300 transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
