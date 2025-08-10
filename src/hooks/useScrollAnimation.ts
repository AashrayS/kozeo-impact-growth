import { useEffect, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      {
        threshold,
        rootMargin: '50px 0px -100px 0px', // Start animation slightly before element comes into view
      }
    );

    // Observe all elements with scroll-animation class
    const elements = document.querySelectorAll('[data-scroll-animation]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold]);

  const isVisible = (elementId: string) => visibleElements.has(elementId);

  return { isVisible };
};
