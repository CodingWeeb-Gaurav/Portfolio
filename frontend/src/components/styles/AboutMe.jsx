import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { 
    x: 100,
    opacity: 0 
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const statsVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-gray-800/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: About Me Text and Stats */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in modern web technologies and machine learning.
              With a strong background in competitive programming, I bring problem-solving skills and algorithmic
              thinking to every project I work on.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
              My journey in technology started with a curiosity about how things work, which led me to explore
              various domains from web development to artificial intelligence. I enjoy creating solutions that
              make a real impact and constantly learning new technologies.
            </motion.p>

            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              <motion.div 
                variants={statsVariants}
                className="text-center p-4 bg-gray-900/50 rounded-lg"
              >
                <div className="text-3xl font-bold text-purple-400">7</div>
                <div className="text-gray-300">Projects Completed</div>
              </motion.div>
              <motion.div 
                variants={statsVariants}
                className="text-center p-4 bg-gray-900/50 rounded-lg"
              >
                <div className="text-3xl font-bold text-pink-400">8 Months</div>
                <div className="text-gray-300">Internship Experience</div>
              </motion.div>
              <motion.div 
                variants={statsVariants}
                className="text-center p-4 bg-gray-900/50 rounded-lg"
              >
                <div className="text-3xl font-bold text-pink-400">1</div>
                <div className="text-gray-300">Research Paper Published<p></p> RITEEC International Conference </div>
              </motion.div>
              <motion.div 
                variants={statsVariants}
                className="text-center p-4 bg-gray-900/50 rounded-lg"
              >
                <div className="text-3xl font-bold text-pink-400">4 years</div>
                <div className="text-gray-300">Bachelor of Technology,<p></p> Electrical & Electronics Engineering</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: What I Do */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6 text-white">
              What I Do
            </motion.h3>

            <motion.div variants={containerVariants} className="space-y-4">
              {/* Full Stack Development */}
              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4 p-4 bg-gray-900/30 rounded-lg"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  &lt;/&gt;
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Full Stack Development</h4>
                  <p className="text-gray-300">Building scalable web applications using modern frameworks and technologies</p>
                </div>
              </motion.div>

              {/* Machine Learning */}
              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4 p-4 bg-gray-900/30 rounded-lg"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  🧠
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Machine Learning</h4>
                  <p className="text-gray-300">Developing intelligent solutions using ML algorithms and data science</p>
                </div>
              </motion.div>

              {/* Competitive Programming */}
              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4 p-4 bg-gray-900/30 rounded-lg"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  🏆
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Competitive Programming</h4>
                  <p className="text-gray-300">Solving complex algorithmic problems and optimizing code performance</p>
                </div>
              </motion.div>

              {/* Soft Skills */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-800 bg-opacity-50 shadow-lg border border-gray-700"
              >
                <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-md hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 mb-4">
                  <span className="text-white font-semibold text-lg">Soft Skills</span>
                </div>
                <div className="text-gray-200 text-center text-md md:text-lg leading-relaxed max-w-md">
                  <span className="bg-gray-700 bg-opacity-70 px-3 py-1 rounded-full mx-1 my-1 inline-block border border-gray-600 transition-all duration-200 hover:bg-gray-600 hover:scale-105">Adaptability</span>
                  <span className="bg-gray-700 bg-opacity-70 px-3 py-1 rounded-full mx-1 my-1 inline-block border border-gray-600 transition-all duration-200 hover:bg-gray-600 hover:scale-105">Leadership</span>
                  <span className="bg-gray-700 bg-opacity-70 px-3 py-1 rounded-full mx-1 my-1 inline-block border border-gray-600 transition-all duration-200 hover:bg-gray-600 hover:scale-105">Risk-taking ability</span>
                  <span className="bg-gray-700 bg-opacity-70 px-3 py-1 rounded-full mx-1 my-1 inline-block border border-gray-600 transition-all duration-200 hover:bg-gray-600 hover:scale-105">Time Management</span>
                  <span className="bg-gray-700 bg-opacity-70 px-3 py-1 rounded-full mx-1 my-1 inline-block border border-gray-600 transition-all duration-200 hover:bg-gray-600 hover:scale-105">Liasing</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}