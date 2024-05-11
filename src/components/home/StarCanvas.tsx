import React, { useEffect, useRef } from 'react';
import clsx from 'classnames';
import useWindowDimensions from '@/utils/useWindowDimensions';
const drawStar = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number
): void => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.fill();
};

const drawStars = (
  ctx: CanvasRenderingContext2D,
  numStars: number,
  minSize: number,
  maxSize: number
): void => {
  for (let i = 0; i < numStars; i++) {
    const x = Math.random() * ctx.canvas.width;
    const y = Math.random() * ctx.canvas.height;
    const size = minSize + Math.random() * (maxSize - minSize);
    drawStar(ctx, x, y, size);
  }
};

interface StarCanvasProps {
  numStars: number;
  minSize: number;
  maxSize: number;
  className: string;
}

const StarCanvas: React.FC<StarCanvasProps> = ({
  numStars,
  minSize,
  maxSize,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvas.parentElement?.clientWidth || 0;
      canvas.height = canvas.parentElement?.clientHeight || 0;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        drawStars(ctx, numStars, minSize, maxSize);
      }
    }
  }, [numStars, minSize, maxSize, width]);

  return <canvas className={clsx(className)} ref={canvasRef} />;
};

export default StarCanvas;
