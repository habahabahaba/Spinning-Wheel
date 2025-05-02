// React:
import { useRef, useCallback } from 'react';

// Types, interfaces and enumns:
import type { HexColor } from '../utils/color';
export interface ConfettiParticle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
}

export function useConfetti(colors: HexColor[]) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number>(0);
  const particles = useRef<ConfettiParticle[]>([]);

  const render = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current = particles.current.filter((p) => p.alpha > 0.1);

    for (const p of particles.current) {
      p.x += p.dx;
      p.y += p.dy;
      p.rotation += p.rotationSpeed;
      p.alpha -= p.decay;

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    }

    animationRef.current = requestAnimationFrame(render);
  };

  const launch = useCallback(
    (count = 100) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const width = canvas.width;
      const height = canvas.height;

      for (let i = 0; i < count; i++) {
        particles.current.push({
          x: width / 2,
          y: height / 2,
          dx: (Math.random() - 0.5) * 8,
          dy: (Math.random() - 0.7) * 8,
          rotation: Math.random() * 2 * Math.PI,
          rotationSpeed: (Math.random() - 0.5) * 0.2,
          size: 6 + Math.random() * 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          decay: 0.01 + Math.random() * 0.01,
        });
      }

      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(render);
      }
    },
    [colors]
  );

  const setCanvasRef = useCallback((node: HTMLCanvasElement | null) => {
    if (node) {
      node.width = window.innerWidth;
      node.height = window.innerHeight;
      canvasRef.current = node;
    }
  }, []);

  return { launch, setCanvasRef };
}
