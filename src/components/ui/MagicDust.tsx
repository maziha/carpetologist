import { useEffect, useRef } from 'react';
import type { MotionValue } from 'framer-motion';

interface MagicDustProps {
  /** The element the sparkles are shed from. */
  followRef: React.RefObject<HTMLElement>;
  /** Sparkles are shed while this is below 0.5; flip it up to let them fade out. */
  off: MotionValue<number>;
}

interface Spark {
  x: number; y: number; vx: number; vy: number;
  life: number; max: number; size: number; spin: number;
}

/** Golden stardust shed by the carpet while it flies in. Stops itself once the dust has settled. */
export const MagicDust = ({ followRef, off }: MagicDustProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    let w = 0, h = 0, raf = 0, last = performance.now();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const sparks: Spark[] = [];
    let px = 0, py = 0, primed = false;

    const star = (s: Spark, alpha: number) => {
      const r = s.size;
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.spin);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = '#d4a548';
      ctx.beginPath();
      ctx.moveTo(0, -r * 2.2);
      ctx.quadraticCurveTo(r * 0.25, -r * 0.25, r * 2.2, 0);
      ctx.quadraticCurveTo(r * 0.25, r * 0.25, 0, r * 2.2);
      ctx.quadraticCurveTo(-r * 0.25, r * 0.25, -r * 2.2, 0);
      ctx.quadraticCurveTo(-r * 0.25, -r * 0.25, 0, -r * 2.2);
      ctx.fill();
      ctx.globalAlpha = alpha * 0.28;
      ctx.fillStyle = '#e9c77a';
      ctx.beginPath();
      ctx.arc(0, 0, r * 3.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      ctx.clearRect(0, 0, w, h);

      const el = followRef.current;
      const shedding = el && off.get() < 0.5;
      if (shedding) {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = primed ? cx - px : 0;
        const dy = primed ? cy - py : 0;
        const speed = Math.hypot(dx, dy) / Math.max(dt, 0.001);
        px = cx; py = cy; primed = true;

        const count = Math.min(7, 0.6 + speed / 240);
        let n = Math.floor(count) + (Math.random() < count % 1 ? 1 : 0);
        while (n-- > 0 && sparks.length < 260) {
          sparks.push({
            x: r.left + Math.random() * r.width - Math.sign(dx) * r.width * 0.15 * Math.random(),
            y: r.top + Math.random() * r.height - Math.sign(dy) * r.height * 0.1 * Math.random(),
            vx: (Math.random() - 0.5) * 24 - dx * 1.2,
            vy: 14 + Math.random() * 38 - dy * 1.2,
            life: 0, max: 1.1 + Math.random() * 1.6,
            size: 0.9 + Math.random() * 2.1, spin: Math.random() * Math.PI,
          });
        }
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life += dt;
        if (s.life >= s.max) { sparks.splice(i, 1); continue; }
        s.x += s.vx * dt; s.y += s.vy * dt;
        s.vy += 10 * dt; s.spin += dt * 2;
        const t = s.life / s.max;
        const twinkle = 0.65 + 0.35 * Math.sin(s.life * 14 + s.spin * 3);
        star(s, Math.sin(Math.PI * Math.min(1, t * 1.15)) * twinkle);
      }

      if (shedding || sparks.length) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, [followRef, off]);

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 w-full h-full pointer-events-none z-[5]" />;
};
