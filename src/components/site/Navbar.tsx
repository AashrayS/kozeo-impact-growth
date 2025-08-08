import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <nav
        className="container flex items-center justify-between h-16"
        aria-label="Global"
      >
        <a href="/" className="font-display text-xl tracking-tight">
          Kozeo
        </a>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" aria-label="Sign in">
            Sign in
          </Button>
          <Button variant="hero" size="sm" aria-label="Join Kozeo">
            Join Kozeo
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
