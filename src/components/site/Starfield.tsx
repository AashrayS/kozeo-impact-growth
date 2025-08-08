import { useEffect, useRef } from "react";

function useCssHsl(varName: string, fallback = "0 0% 100%") {
  // Returns an hsl() string from a CSS variable (H S L without function)
  const value = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  return `hsl(${value || fallback})`;
}

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Colors from design tokens
    const starColor = () => useCssHsl('--primary-foreground'); // white
    const lineColor = () => useCssHsl('--primary-foreground'); // white

    type Star = { x: number; y: number; r: number; base: number; speed: number; phase: number };
    type Beam = { x1: number; y1: number; x2: number; y2: number; t: number; speed: number; life: number };

    let stars: Star[] = [];
    let beams: Beam[] = [];

    const initStars = () => {
      const count = Math.round((canvas.width / dpr) * (canvas.height / dpr) / 5000); // density
      stars = new Array(count).fill(0).map(() => ({
        x: Math.random() * canvas.width / dpr,
        y: Math.random() * canvas.height / dpr,
        r: Math.random() * 1.2 + 0.4,
        base: Math.random() * 0.6 + 0.3,
        speed: prefersReduced ? 0 : (Math.random() * 0.8 + 0.2),
        phase: Math.random() * Math.PI * 2,
      }));
    };
    initStars();

    const spawnBeam = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const x1 = Math.random() * w;
      const y1 = Math.random() * h * 0.9;
      const x2 = Math.random() * w;
      const y2 = Math.random() * h * 0.9;
      beams.push({ x1, y1, x2, y2, t: 0, speed: prefersReduced ? 0.004 : 0.01 + Math.random() * 0.02, life: 1 });
      if (beams.length > 6) beams.shift();
    };

    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(33, now - last);
      last = now;

      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      // Fill black background
      ctx.fillStyle = 'hsl(0 0% 0%)';
      ctx.fillRect(0, 0, w, h);

      // Stars
      ctx.fillStyle = starColor();
      for (const s of stars) {
        const a = prefersReduced ? s.base : s.base + Math.sin(now * 0.002 * s.speed + s.phase) * 0.25;
        ctx.globalAlpha = Math.max(0, Math.min(1, a));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Beams (white lines moving across)
      ctx.strokeStyle = lineColor();
      ctx.lineWidth = 1.2;
      ctx.lineCap = 'round';
      for (const b of beams) {
        b.t += b.speed * dt * 0.06;
        if (b.t > 1) b.t = 1;
        const cx = b.x1 + (b.x2 - b.x1) * b.t;
        const cy = b.y1 + (b.y2 - b.y1) * b.t;
        ctx.globalAlpha = Math.max(0, b.life * 0.9);
        ctx.beginPath();
        ctx.moveTo(b.x1, b.y1);
        ctx.lineTo(cx, cy);
        ctx.stroke();
        // trailing fade
        b.life -= 0.005 * dt * (prefersReduced ? 0.5 : 1);
      }
      beams = beams.filter(b => b.life > 0);

      // Occasionally add a new beam
      if (!prefersReduced && Math.random() < 0.015) spawnBeam();

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const onResize = () => { resize(); initStars(); };
    window.addEventListener('resize', onResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 -z-10 block"
    />
  );
};

export default Starfield;