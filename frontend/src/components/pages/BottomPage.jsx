import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import CodeforcesGraph from './CodeforcesGraph';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import SkillCard from '../styles/SkillCard';
// Removed: import GitHubCard from '../styles/GitHubCard';
import CodeforcesCard from '../styles/CodeforcesCard';
import CodeChefCard from '../styles/CodeChefCard';

export default function BottomPage() {
  // Removed: const [github, setGithub] = useState(null);
  const [cf, setCf] = useState(null);
  const [cc, setCc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Removed: const githubURL = 'http://localhost:8000/github/summary';
  const cfURL = 'http://localhost:8000/competitive/cf/Gaurav_KG';
  const ccURL = 'http://localhost:8000/competitive/cc/klad_753';


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
          const [cfRes, ccRes] = await Promise.allSettled([
          axios.get(cfURL),
          axios.get(ccURL),
        ]);

        
        if (cfRes.status === 'fulfilled') {
          setCf(cfRes.value.data);
        }
        if (ccRes.status === 'fulfilled') {
          setCc(ccRes.value.data);
        }
      } catch (err) {
        setError('Failed to load profile data');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Skill categories with SkillCard attributes
  const skills = [
    {
      title: 'Programming Languages',
      icon: <FaCode className="text-3xl text-blue-400" />,
      items: [
        {
          name: 'C/C++',
          logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
          hoverColors: ['#00599C', '#F34F29'],
        },
        {
          name: 'Python',
          logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
          hoverColors: ['#3776AB', '#FFD43B'],
        },
        {
          name: 'JavaScript',
          logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
          hoverColors: ['#F7DF1E', '#000000'],
        },
        {
          name: 'HTML',
          logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
          hoverColors: ['#E34F26', '#F06529'],
        },
        {
          name: 'CSS',
          logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
          hoverColors: ['#1572B6', '#33A9DC'],
        },
        {
        name: 'MATLAB',
        logo: 'https://www.ship.edu/contentassets/55c8ea868e3c4fd6a011a739900d73cc/matlab_logo.png',
        hoverColors: ['#0076A8', '#E67700'],
        },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: <FaServer className="text-3xl text-purple-400" />,
      items: [
        {
          name: 'ReactJS',
          logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
          hoverColors: ['#61DAFB', '#20232A'],
        },
        {
          name: 'Django',
          logo: 'https://logodix.com/logo/1758841.png', // This logo is generally just the 'D'
          hoverColors: ['#092E20', '#44B78B'],
        },
        {
          name: 'Flask',
          logo: 'https://www.stickerpress.in/media/products/800x800/44c9414bb72848a9918654f575228867.webp', // This logo is generally just the flask icon
          hoverColors: ['#000000', '#FFFFFF'],
        },
        {
          name: 'TensorFlow',
          logo: ' https://static-00.iconduck.com/assets.00/tensorflow-icon-478x512-tlt8tjbe.png', // Primarily the T logo
          hoverColors: ['#FF6F00', '#FFB25B'],
        },
        {
          name: 'Scikit-learn',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/256px-Scikit_learn_logo_small.svg.png', // The sci-kit learn "brain" logo
          hoverColors: ['#F7931E', '#3776AB'], // Orange and blue from their branding
        },
        {
          name: 'Bootstrap',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/256px-Bootstrap_logo_small.svg.png', // Just the "Bs" logo
          hoverColors: ['#7952B3', '#563D7C'], // Purple shades from Bootstrap
        },
      ],
    },
    {
      title: 'Databases & Tools',
      icon: <FaDatabase className="text-3xl text-green-400" />,
      items: [
        {
          name: 'MySQL',
          logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
          hoverColors: ['#00758F', '#F29111'],
        },
        {
          name: 'MongoDB',
          logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
          hoverColors: ['#47A248', '#13AA52'],
        },
        {
          name: 'PostgreSQL',
          logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
          hoverColors: ['#336791', '#FFFFFF'],
        },
        {
          name: 'Linux',
          logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
          hoverColors: ['#FCC624', '#333333'],
        },
        {
          name: 'GitHub',
          logo: 'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png',
          hoverColors: ['#FFFFFF', '#181717'],
        },
        {
          name: 'AWS',
          logo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/aws-color.png',
          hoverColors: ['#FF9900', '#232F3E'],
        },
        {
          name: 'GCP',
          logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg',
          hoverColors: ['#4285F4', '#EA4335'],
        },
        {
        name: 'Docker',
        logo: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-1024.png', // The whale logo
        hoverColors: ['#0db7ed', '#326c9f'], // Docker blue shades
        },
        {
        name: 'OpenAI',
        logo: 'https://yt3.googleusercontent.com/MopgmVAFV9BqlzOJ-UINtmutvEPcNe5IbKMmP_4vZZo3vnJXcZGtybUBsXaEVxkmxKyGqX9R=s160-c-k-c0x00ffffff-no-rj',
        hoverColors: ['#000000', '#74aa9c'], // Black (primary text/background) and a greenish-blue from their branding
        },
      ],
    },
  ];

  // Competitive platforms with card attributes
  const platforms = [
    {
      component: CodeforcesCard,
      data: cf,
      logo: 'https://codeforces.org/s/0/apple-icon-180x180.png',
      gradientColors: ['#pink-400', '#purple-600'],
      borderColor: '#pink-400',
    },
    {
      component: CodeChefCard,
      data: cc,
      logo: 'https://cdn.codechef.com/images/cc-logo.svg',
      gradientColors: ['#orange-400', '#red-600'],
      borderColor: '#orange-400',
    },
  ];

  return (
    <div className="min-h-screen w-full px-6 md:px-16 py-12 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float-delay-2"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float-delay-4"></div>
      </div>

      {/* Main Page Heading: Skills */}
      <div className="text-center mb-16">
        <h1
  style={{
    color: 'white',
    fontSize: '3rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '2rem',
    letterSpacing: '2px',
    fontFamily: "'Poppins', sans-serif",
    textShadow: '0 4px 10px rgba(0, 0, 0, 0.6)',
    background: 'linear-gradient(to right, #00c6ff, #0072ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}
>
  Skills
</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          A detailed overview of my technical abilities and competitive programming achievements.
        </p>
      </div>

      {/* --- */}

      {/* Tech Stack Section */}
      <section className="mb-24 animate-fade-in">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive skill set across multiple domains of software development and Machine learning.
          </p>
           <div className="absolute left-1/2 -translate-x-1/2 w-52 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-500 group">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-transparent mx-auto"></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.items.map((skill, i) => (
                  <SkillCard
                    key={i}
                    logo={skill.logo}
                    text={skill.name}
                    hoverColors={skill.hoverColors}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- */}

      {/* Competitive Profiles Section */}
      <section className="animate-fade-in">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">
            Competitive Programming
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expertise in DSA and Competitive Programming using C++.
          </p>
           <div className="absolute left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {platforms.map((platform, index) => {
            const PlatformComponent = platform.component;
            return (
              <PlatformComponent
                key={index}
                data={platform.data}
                loading={loading}
                logo={platform.logo}
                gradientColors={platform.gradientColors}
                borderColor={platform.borderColor}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}