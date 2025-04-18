import { useState, useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  onlyOnce?: boolean;
  ref?: RefObject<HTMLElement>;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    onlyOnce = false,
    ref,
  } = options;
  
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [wasIntersectedOnce, setWasIntersectedOnce] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // If we've already intersected once and onlyOnce is true, don't observe anymore
    if (onlyOnce && wasIntersectedOnce) return;
    
    observer.current = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);
        
        if (isElementIntersecting && onlyOnce) {
          setWasIntersectedOnce(true);
        }
      },
      { threshold, root, rootMargin }
    );

    // Use external ref if provided, otherwise use internal ref
    const targetElement = ref?.current || targetRef.current;
    
    if (targetElement) {
      observer.current.observe(targetElement);
    }

    return () => {
      if (targetElement && observer.current) {
        observer.current.unobserve(targetElement);
      }
    };
  }, [threshold, root, rootMargin, onlyOnce, wasIntersectedOnce, ref]);

  return { targetRef, isIntersecting };
}
