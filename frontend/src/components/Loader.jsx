import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div style={{ color: 'white', fontSize: '14px', marginTop: '40px' }}>
        Loading {progress.toFixed(2)}%
      </div>
    </Html>
  );
};

export default Loader;