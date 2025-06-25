import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Download } from 'lucide-react'

const Hero = () => {
  const leftImageTransform = 'scale(1.11) translate(35px, -20px)';
  const rightImageTransform = 'scale(1.05) translate(-100px, -5px)';

  return (
    <section id="home" className="relative w-full h-screen flex flex-col overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0 z-0 w-screen h-screen overflow-hidden">
        {/* Left Map */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full overflow-hidden"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 78% 100%, 0% 100%)',
            transform: leftImageTransform,
            zIndex: 0,
          }}
        >
          <img
            src="/images/Worldmap_Blue_white.jpg"
            alt="World Map Light"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Right Map */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full overflow-hidden"
          style={{
            clipPath: 'polygon(22% 0, 100% 0, 100% 100%, 0% 100%)',
            transform: rightImageTransform,
            zIndex: 1,
          }}
        >
          <img
            src="/images/Worldmap_Blue_black.jpg"
            alt="World Map Dark"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Divider */}
        <div
          className="absolute top-0 left-1/2 w-[0%] h-full bg-gradient-to-r from-transparent via-gray-900 to-transparent z-10 pointer-events-none"
          style={{
            transform: 'rotate(-17deg) translateX(-50%)',
            transformOrigin: 'center',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex-1 flex items-center justify-center px-6 sm:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"></div>
                <span className="text-purple-400 font-medium">Welcome to my portfolio</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text font-extrabold block mt-2">
                  Gaurav Kumar Gupta
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                Full Stack Developer | ML Enthusiast | Competitive Programmer
              </p>

              <div className="flex flex-col gap-6 pt-6">
  {/* Social Icons */}
  <div className="flex gap-4">
    <a
      href="https://github.com/CodingWeeb-Gaurav"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-800/30"
    >
      <FaGithub className="text-white" size={24} />
    </a>
    <a
      href="https://www.linkedin.com/in/gauravkg1109"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-800/30"
    >
      <FaLinkedin className="text-white" size={24} />
    </a>
  </div>

  {/* Download Buttons */}
  <div className="flex gap-4 flex-wrap">
    <a
      href="https://drive.google.com/file/d/1ZrudOWoQ-ZXadCZa3-BywhWbd1xpyYnc/view?usp=sharing"
      download
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold shadow-md shadow-purple-900/40 hover:shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
    >
      <Download size={18} />
      Data Science Resume
    </a>
    <a
      href="https://drive.google.com/file/d/16znLzI5HcFL0KlIrVbbVfW2bsf7UoXEq/view?usp=sharing"
      download
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold shadow-md shadow-pink-900/40 hover:shadow-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
    >
      <Download size={18} />
      Web Dev Resume
    </a>
  </div>
</div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-float"></div>
                <img
                  src="/images/GKG.jpg"
                  alt="Gaurav Kumar Gupta"
                  className="absolute inset-0 w-80 h-80 rounded-full object-cover border-4 border-purple-500/30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <a href="#about" className="block">
          <div className="w-8 h-14 rounded-full border-2 border-pink-500 flex justify-center items-start p-2 hover:border-purple-400 transition-colors">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-2 h-2 rounded-full bg-pink-500"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
