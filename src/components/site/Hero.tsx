import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-kozeo.jpg";

const Hero = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const spotlight = useMemo(
    () => ({
      background: `radial-gradient(500px 300px at ${pos.x}% ${pos.y}%, hsl(var(--primary) / 0.18), transparent 60%)`,
    }),
    [pos]
  );

  return (
    <section className="relative min-h-[92vh] grid place-items-center overflow-clip" aria-label="Kozeo hero">
      <img
        src={heroImg}
        alt="Diverse tech team collaborating outdoors, warm tones"
        className="absolute inset-0 size-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-background/70" />
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={spotlight}
      />

      <div
        className="relative container py-24 sm:py-32"
        onMouseMove={(e) => {
          const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          setPos({ x, y });
        }}
      >
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary mb-3">Impact-first tech work</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
            Ignore the noise, hire with purpose.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Kozeo turns gigs into credible experience. Real projects, real pay,
            and profiles that actually move your career forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="lg">Explore projects</Button>
            <Button variant="inverted" size="lg">How it works</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
