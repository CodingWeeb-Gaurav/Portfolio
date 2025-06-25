'use client';
import useCanvasCursor from './useCanvasCursor'; // ✅ correct relative import

const CanvasCursor = () => {
  useCanvasCursor();
  return <canvas className="canvas-cursor pointer-events-none fixed inset-0 z-50" id="canvas" />;
};

export default CanvasCursor;
