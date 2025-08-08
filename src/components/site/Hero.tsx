import { Button } from "@/components/ui/button";
import Starfield from "@/components/site/Starfield";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] grid place-items-center overflow-clip bg-primary text-primary-foreground" aria-label="Kozeo hero">
      <Starfield />
      <div className="relative container py-24 sm:py-32 animate-fade-in">
        <div className="max-w-3xl">
          <p className="text-sm font-medium mb-3">Impact-first tech work</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
            Ignore the noise, hire with purpose.
          </h1>
          <p className="mt-4 text-lg opacity-90">
            Kozeo turns gigs into credible experience. Real projects, real pay,
            and profiles that actually move your career forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="inverted" size="lg" className="hover-scale">Explore projects</Button>
            <Button variant="inverted" size="lg" className="hover-scale">How it works</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
