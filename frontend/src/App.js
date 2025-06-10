import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CanvasCursor from './hooks/CanvasCursor';
import PageLayout from './components/PageLayout'; // ← import this
import './cursor.css';

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      <CanvasCursor />
      {showMain ? <PageLayout /> : <LoadingScreen onContinue={() => setShowMain(true)} />}
    </>
  );
}

export default App;
