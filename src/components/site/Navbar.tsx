import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOnDarkBackground, setIsOnDarkBackground] = useState(true); // Start with true since hero is black

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Check if we're in the hero section (black background) or CTA section (also black)
      const testimonialSection = document.querySelector('[data-section="testimonial"]');
      
      if (testimonialSection) {
        const heroEnd = viewportHeight;
        const testimonialRect = testimonialSection.getBoundingClientRect();
        const isInTestimonial = testimonialRect.top <= 100 && testimonialRect.bottom >= 0;
        const isInHero = scrollY < heroEnd - 100;
        
        // Dark background when in hero or testimonial sections
        setIsOnDarkBackground(isInHero || isInTestimonial);
      } else {
        // Fallback: dark when in hero section
        const isInHero = scrollY < viewportHeight - 100;
        setIsOnDarkBackground(isInHero);
      }
    };

    handleScroll(); // Check initial state
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out ${
      isOnDarkBackground 
        ? "bg-black" 
        : "bg-white border-b border-gray-200"
    }`}>
      <nav className="flex items-center justify-between sm:justify-center px-4 sm:px-8 py-4 relative" aria-label="Global">
        {/* Center logo on desktop, left on mobile */}
        <div className="flex items-center justify-start sm:justify-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
          <a href="/" className={`flex items-center gap-2 sm:gap-3 font-bold text-xl sm:text-3xl tracking-tight transition-colors duration-300 ${
            isOnDarkBackground ? "text-white" : "text-black"
          }`}>
            <img 
              src="/favicon.png" 
              alt="Kozeo Logo" 
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            Kozeo
          </a>
        </div>

        {/* Right navigation - Login/Signup only */}
        <div className="flex items-center gap-2 sm:gap-4 sm:absolute sm:right-8">
          <Button 
            variant="outline" 
            size="sm" 
            className={`rounded-full px-2 py-1 sm:px-8 sm:py-4 text-xs sm:text-lg transition-all duration-300 hover:scale-105 ${
              isOnDarkBackground 
                ? "border-white text-white bg-transparent hover:bg-white hover:text-black hover:shadow-lg" 
                : "border-black text-black bg-transparent hover:bg-black hover:text-white hover:shadow-lg"
            }`}
          >
            Login
          </Button>
          <Button 
            size="sm" 
            className={`rounded-full px-2 py-1 sm:px-8 sm:py-4 text-xs sm:text-lg transition-all duration-300 hover:scale-105 ${
              isOnDarkBackground 
                ? "bg-white text-black hover:bg-gray-100 hover:shadow-lg" 
                : "bg-black text-white hover:bg-gray-800 hover:shadow-lg"
            }`}
          >
            Sign Up
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
