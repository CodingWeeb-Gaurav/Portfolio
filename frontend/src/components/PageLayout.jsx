// import React, { useState, useEffect, useCallback } from 'react';
import Navigation from './Navigation'; // adjust path
import CenterPage from './pages/CenterPage';
import TopPage from './pages/TopPage';
import BottomPage from './pages/BottomPage';
import LeftPage from './pages/LeftPage';
import RightPage from './pages/RightPage';
import './PageLayout.css';
import Footer from './styles/Footer';
import ChatbotLauncher from "./ChatbotLauncher";
import Chatbox from './Chatbox'; 
import React, { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';



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
  const scrollRef = useRef(null);
  const shouldScrollToTop = useRef(false);
  const [showChatbox, setShowChatbox] = useState(false);

  const navigate = useCallback((direction) => {
  if (isTransitioning) return;

  const targetPage = direction;
  if (!targetPage || targetPage === activePage) return;

  shouldScrollToTop.current = true; // <== Tell next render to scroll

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


// After center-to-X transition
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

// Scroll to top after any page render
useEffect(() => {
  if (!transitionPage) {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300); // Wait for page transition to complete

    return () => clearTimeout(timer);
  }
}, [activePage, transitionPage]);




  const renderActivePage = () => {
  const PageWithFooter = ({ children }) => (
    <>
      {children}
      <div className="bg-black/50 backdrop-blur-sm rounded-xl my-8 mx-4 md:mx-16 p-6 md:p-10 shadow-lg">
        <Footer onNavigate={navigate} />
      </div>
    </>
  );

  switch (activePage) {
    case 'center':
      return (
        <PageWithFooter>
          <CenterPage onNavigate={navigate} />
        </PageWithFooter>
      );
    case 'top':
      return (
        <PageWithFooter>
          <TopPage />
        </PageWithFooter>
      );
    case 'bottom':
      return (
        <PageWithFooter>
          <BottomPage />
        </PageWithFooter>
      );
    case 'left':
      return (
        <PageWithFooter>
          <LeftPage />
        </PageWithFooter>
      );
    case 'right':
      return (
        <PageWithFooter>
          <RightPage />
        </PageWithFooter>
      );
    default:
      return (
        <PageWithFooter>
          <CenterPage onNavigate={navigate} />
        </PageWithFooter>
      );
  }
};




  return (
    <div className="page-wrapper">
      <Navigation onNavigate={navigate} />
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
          <div className="page-content-scrollable"  ref={scrollRef} >{renderActivePage()}</div>
        </div>
        {showChatbox ? (
          <Chatbox onClose={() => setShowChatbox(false)} />
        ) : (
          <ChatbotLauncher onOpen={() => setShowChatbox(true)} />
        )}
      </div>
    </div>
  );
};

export default PageLayout;
