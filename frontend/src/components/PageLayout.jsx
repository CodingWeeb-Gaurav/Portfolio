import React, { useState, useEffect, useCallback } from 'react';
import './PageLayout.css';

import CenterPage from './pages/CenterPage';
import TopPage from './pages/TopPage';
import BottomPage from './pages/BottomPage';
import LeftPage from './pages/LeftPage';
import RightPage from './pages/RightPage';

const pageTransitions = {
  center: { up: 'top', down: 'bottom', left: 'left', right: 'right' },
  left: { up: 'top', down: 'bottom', left: 'right', right: 'center' },
  right: { up: 'top', down: 'bottom', left: 'center', right: 'left' },
  top: { up: 'bottom', down: 'center', left: 'left', right: 'right' },
  bottom: { up: 'center', down: 'top', left: 'left', right: 'right' }
};

const getBackgroundPosition = (page) => {
  switch (page) {
    case 'center': return '40% 40%';
    case 'left': return '0% 40%';
    case 'right': return '80% 40%';
    case 'top': return '40% 20%';
    case 'bottom': return '40% 80%';
    default: return '40% 40%';
  }
};

const PageLayout = () => {
  const [activePage, setActivePage] = useState('center');
  const [transitionPage, setTransitionPage] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = useCallback((direction) => {
    if (isTransitioning) return;

    const targetPage = pageTransitions[activePage][direction];
    if (!targetPage || targetPage === activePage) return;

    if (
      (activePage === 'left' && targetPage === 'right') ||
      (activePage === 'right' && targetPage === 'left') ||
      (activePage === 'top' && targetPage === 'bottom') ||
      (activePage === 'bottom' && targetPage === 'top')
    ) {
      setIsTransitioning(true);
      setTransitionPage(targetPage);
      setActivePage('center');
    } else {
      setActivePage(targetPage);
    }
  }, [activePage, isTransitioning]);

  useEffect(() => {
    if (transitionPage && activePage === 'center') {
      const timer = setTimeout(() => {
        setActivePage(transitionPage);
        setTransitionPage(null);
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activePage, transitionPage]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp': navigate('up'); break;
        case 'ArrowDown': navigate('down'); break;
        case 'ArrowLeft': navigate('left'); break;
        case 'ArrowRight': navigate('right'); break;
        default: break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  const renderActivePage = () => {
    switch (activePage) {
      case 'center': return <CenterPage />;
      case 'top': return <TopPage />;
      case 'bottom': return <BottomPage />;
      case 'left': return <LeftPage />;
      case 'right': return <RightPage />;
      default: return <CenterPage />;
    }
  };

return (
  <div className="page-wrapper">
    <div
      className="page"
      style={{
        backgroundImage: "url('/images/bg8.jpg')",
        backgroundPosition: getBackgroundPosition(activePage),
        backgroundSize: '166.66% 166.66%',
        transition: 'background-position 0.6s ease-in-out',
      }}
    >
      <div className="page-content">
        <div className="page-content-scrollable">
          {/* Dynamically load the active page */}
          {activePage === 'center' && <CenterPage />}
          {activePage === 'left' && <LeftPage />}
          {activePage === 'right' && <RightPage />}
          {activePage === 'top' && <TopPage />}
          {activePage === 'bottom' && <BottomPage />}
        </div>
      </div>
    </div>

    {/* Fixed Footer below all content */}
    <footer className="footer">
      <div className="navigation">
        <div><button onClick={() => navigate('up')}>↑</button></div>
        <div>
          <button onClick={() => navigate('left')}>←</button>
          <button onClick={() => navigate('down')}>↓</button>
          <button onClick={() => navigate('right')}>→</button>
        </div>
      </div>
    </footer>
  </div>
);

};

export default PageLayout;
