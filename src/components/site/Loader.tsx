import { useState, useEffect } from "react";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState("entering"); // entering -> visible -> exiting

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimationPhase("visible");
    }, 800);

    const timer2 = setTimeout(() => {
      setAnimationPhase("exiting");
    }, 2800);

    const timer3 = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-transform duration-1000 ease-in-out ${
        animationPhase === "exiting" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="text-center relative">
        <div className="flex items-center justify-center gap-6 mb-8">
          <img 
            src="/favicon.png" 
            alt="Kozeo Logo" 
            className={`w-16 h-16 md:w-20 md:h-20 transition-all duration-1200 ease-out ${
              animationPhase === "entering"
                ? "opacity-0 translate-x-8 scale-90"
                : animationPhase === "visible"
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-100 translate-x-0 scale-100"
            }`}
          />
          <h1
            className={`text-6xl md:text-8xl font-bold text-white tracking-tight transition-all duration-1200 ease-out ${
              animationPhase === "entering"
                ? "opacity-0 translate-x-8 scale-90"
                : animationPhase === "visible"
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-100 translate-x-0 scale-100"
            }`}
          >
            Kozeo
          </h1>
        </div>
        
        {/* Subtle glow effect */}
        <div className={`absolute inset-0 flex items-center justify-center gap-6 mb-8 transition-all duration-1200 ease-out blur-sm ${
          animationPhase === "entering"
            ? "opacity-0 translate-x-8 scale-90"
            : animationPhase === "visible"
            ? "opacity-20 translate-x-0 scale-100"
            : "opacity-20 translate-x-0 scale-100"
        }`}>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg"></div>
          <div className="text-6xl md:text-8xl font-bold text-white tracking-tight">
            Kozeo
          </div>
        </div>
        
        {/* Loading indicator */}
        <div className={`mt-12 transition-opacity duration-500 ${
          animationPhase === "visible" ? "opacity-100" : "opacity-0"
        }`}>
          <div className="w-16 h-0.5 bg-white mx-auto">
            <div className="h-full bg-gray-400 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
