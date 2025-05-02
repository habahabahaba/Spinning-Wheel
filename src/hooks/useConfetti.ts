// React:
import { useRef, useCallback, useMemo } from 'react';

// Types, interfaces and enumns:
export type ConfettiShape = 'square' | 'circle' | 'triangle';
export type ConfettiDirection =
  | 'N'
  | 'NE'
  | 'E'
  | 'SE'
  | 'S'
  | 'SW'
  | 'W'
  | 'NW'
  | 'CENTER';

export interface ConfettiOptions {
  colors?: string[];
  gravity?: number;
  wind?: number;
  scalar?: number;
  particleCount?: number;
  spread?: number;
  ticks?: number;
  shape?: ConfettiShape;
  direction?: ConfettiDirection;
}

type Particle = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  life: number;
  color: string;
  size: number;
  shape: ConfettiShape;
};

const directionAngles: Record<ConfettiDirection, number> = {
  N: Math.PI / 2,
  NE: Math.PI / 4,
  E: 0,
  SE: -Math.PI / 4,
  S: -Math.PI / 2,
  SW: (-3 * Math.PI) / 4,
  W: Math.PI,
  NW: (3 * Math.PI) / 4,
  CENTER: 0, // will randomize
};

export default function useConfetti(defaultOptions?: ConfettiOptions) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const options = useMemo(
    () => ({
      colors: ['#f94144', '#f3722c', '#f8961e', '#90be6d', '#577590'],
      gravity: 0.4,
      wind: 0,
      scalar: 1,
      particleCount: 80,
      spread: 45,
      ticks: 90,
      shape: 'square' as ConfettiShape,
      direction: 'CENTER' as ConfettiDirection,
      ...defaultOptions,
    }),
    [defaultOptions]
  );

  const setCanvasRef = useCallback((node: HTMLCanvasElement | null) => {
    if (!node) return;
    canvasRef.current = node;
    ctxRef.current = node.getContext('2d');

    const resize = () => {
      node.width = window.innerWidth;
      node.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
  }, []);

  const clear = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    particlesRef.current = [];
    ctxRef.current?.clearRect(
      0,
      0,
      canvasRef.current!.width,
      canvasRef.current!.height
    );
  }, []);

  const launch = useCallback(
    (count?: number) => {
      const canvas = canvasRef.current;
      const ctx = ctxRef.current;
      if (!canvas || !ctx) return;

      const total = count ?? options.particleCount;
      const spreadRad = (options.spread! * Math.PI) / 180;
      const baseAngle = directionAngles[options.direction ?? 'CENTER'];

      const origin = { x: canvas.width / 2, y: canvas.height / 2 };

      const particles: Particle[] = [];

      for (let i = 0; i < total; i++) {
        const angle =
          options.direction === 'CENTER'
            ? Math.random() * 2 * Math.PI
            : baseAngle + (Math.random() - 0.5) * spreadRad;

        const velocity = Math.random() * 6 + 3;
        const dx = Math.cos(angle) * velocity + options.wind!;
        const dy = -Math.sin(angle) * velocity;
        const size = Math.random() * 6 + 2;
        const color =
          options.colors![Math.floor(Math.random() * options.colors!.length)];

        particles.push({
          x: origin.x,
          y: origin.y,
          dx,
          dy,
          life: options.ticks!,
          color,
          size: size * options.scalar!,
          shape: options.shape!,
        });
      }

      particlesRef.current = particles;

      const animate = () => {
        if (!ctx || !canvas) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particlesRef.current = particlesRef.current
          .map((p) => {
            p.x += p.dx;
            p.y += p.dy;
            p.dy += options.gravity!;
            p.life -= 1;
            return p;
          })
          .filter((p) => p.life > 0);

        particlesRef.current.forEach((p) => {
          ctx.fillStyle = p.color;
          ctx.beginPath();

          switch (p.shape) {
            case 'circle':
              ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
              ctx.fill();
              break;
            case 'triangle':
              ctx.moveTo(p.x, p.y - p.size / 2);
              ctx.lineTo(p.x - p.size / 2, p.y + p.size / 2);
              ctx.lineTo(p.x + p.size / 2, p.y + p.size / 2);
              ctx.closePath();
              ctx.fill();
              break;
            case 'square':
            default:
              ctx.fillRect(p.x, p.y, p.size, p.size);
              break;
          }
        });

        if (particlesRef.current.length > 0) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          animationRef.current = null;
        }
      };

      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      }
    },
    [options]
  );

  return { setCanvasRef, launch, clear };
}
