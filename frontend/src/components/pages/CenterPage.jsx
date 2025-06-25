import React, { useEffect } from 'react';
import Hero from '../styles/Hero';
import AboutMe from '../styles/AboutMe';
import Contact from '../styles/Contact';

export default function CenterPage({ onNavigate }) {
  useEffect(() => {
    // Scroll main container and window to top
    window.scrollTo({ top: 0, behavior: 'auto' });

    // Also scroll nearest scrollable parent (if using scrollRef in PageLayout)
    const scrollable = document.querySelector('.page-content-scrollable');
    if (scrollable) {
      scrollable.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  return (
    <div className="bg-navy-900 text-white">
      {/* Section: Hero */}
      <div className="bg-black/50 backdrop-blur-sm rounded-xl my-8 mx-4 md:mx-16 p-6 md:p-10 shadow-lg">
        <Hero />
      </div>

      {/* Section: About Me */}
      <div className="bg-black/40 backdrop-blur-sm rounded-xl my-8 mx-4 md:mx-16 p-6 md:p-10 shadow-lg">
        <AboutMe />
      </div>

      {/* Section: Contact */}
      <div className="bg-black/40 backdrop-blur-sm rounded-xl my-8 mx-4 md:mx-16 p-6 md:p-10 shadow-lg">
        <Contact />
      </div>
    </div>
  );
}
