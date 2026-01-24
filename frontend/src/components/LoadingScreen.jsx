import React, { useEffect, useState } from 'react';
import './stars.css';
import './loadingButton.css';

const greetings = {
  IN: 'नमस्ते',
  FR: 'Bonjour',
  JP: 'こんにちは',
  DE: 'Hallo',
  ES: 'Hola',
  CN: '你好',
  RU: 'Здравствуйте',
  IT: 'Ciao',
  KR: '안녕하세요',
  SA: 'مرحبا',
  BR: 'Olá',
  US: 'Hello',
  GB: 'Hello',
  default: 'Hello'
};

const LoadingScreen = ({ onContinue }) => {
  const [greeting, setGreeting] = useState(greetings.default);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/api/my-ip')
      .then(res => res.json())
      .then(data => {
        const code = data.country_code;
        setGreeting(greetings[code] || greetings.default);
      })
      .catch(() => {
        setGreeting(greetings.default);
      });

    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title">
        <span>WELCOME</span><br />
        <span>{greeting}</span><br />

        <div className="button-container mt-6">
          <button
            className={`animated-button ${loadingComplete ? 'ready' : ''}`}
            onClick={onContinue}
            disabled={!loadingComplete}
          >
            {loadingComplete ? 'Continue' : 'Loading...'}
            <span className="progress-border"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
