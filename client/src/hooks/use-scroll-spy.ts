import { useState, useEffect } from 'react';

interface ScrollSpyOptions {
  offset?: number;
}

export function useScrollSpy(
  sectionIds: string[],
  options: ScrollSpyOptions = {}
) {
  const { offset = 0 } = options;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Find all section elements
      const sections = sectionIds.map(id => {
        const element = document.getElementById(id);
        if (!element) return null;

        const rect = element.getBoundingClientRect();
        return {
          id,
          top: rect.top,
          bottom: rect.bottom,
          height: rect.height
        };
      }).filter(Boolean);

      // Find the current active section
      for (const section of sections) {
        if (!section) continue;
        
        // Check if the section is in view with offset
        if (section.top <= offset && section.bottom > offset) {
          setActiveSection(section.id);
          return;
        }
      }

      // If no section is active, check for the closest section
      if (sections.length > 0) {
        const scrollPosition = window.scrollY + offset;
        const closest = sections.reduce((prev, curr) => {
          if (!curr) return prev;
          
          const prevElement = document.getElementById(prev?.id || '');
          const currElement = document.getElementById(curr.id);
          
          if (!prevElement || !currElement) return curr;
          
          const prevOffset = Math.abs(prevElement.offsetTop - scrollPosition);
          const currOffset = Math.abs(currElement.offsetTop - scrollPosition);
          
          return currOffset < prevOffset ? curr : prev;
        });
        
        if (closest) {
          setActiveSection(closest.id);
        }
      }
    };

    // Set active section on initial load
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}
