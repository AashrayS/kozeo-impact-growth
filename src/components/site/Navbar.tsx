import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${
      scrolled ? "bg-background/80 backdrop-blur text-foreground shadow-sm" : "text-primary-foreground"
    }`}>
      <nav className="container flex items-center justify-between h-16" aria-label="Global">
        <a href="/" className="font-display text-xl tracking-tight">
          Kozeo
        </a>
        <div className="flex items-center gap-3">
          <Button variant={scrolled ? "outline" : "inverted"} size="sm" aria-label="Sign in" className="hover-scale">
            Sign in
          </Button>
          <Button variant={scrolled ? "default" : "inverted"} size="sm" aria-label="Join Kozeo" className="hover-scale">
            Join Kozeo
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
