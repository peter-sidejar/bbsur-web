import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
    aspectRatio: width / height,
  };
}

export default function useWindowDimensions(): {
  width: number;
  height: number;
  aspectRatio: number;
} {
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number;
    height: number;
    aspectRatio: number;
  }>({ width: 0, height: 0, aspectRatio: 0 });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    setWindowDimensions(getWindowDimensions());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
