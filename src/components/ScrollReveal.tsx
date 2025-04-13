
import React, { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    
    if (!element) return;
    
    let yValue = 0;
    let xValue = 0;
    
    if (direction === 'up') yValue = 50;
    if (direction === 'down') yValue = -50;
    if (direction === 'left') xValue = 50;
    if (direction === 'right') xValue = -50;
    
    gsap.fromTo(element, 
      { 
        y: yValue,
        x: xValue,
        opacity: 0 
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        }
      }
    );
  }, [delay, direction]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
