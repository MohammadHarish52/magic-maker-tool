
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Transparency: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLHeadingElement>(null);
  const swatch1Ref = useRef<HTMLDivElement>(null);
  const swatch2Ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom-=100",
        end: "center center",
        scrub: 1
      }
    });
    
    tl.from(headingRef.current, { 
      y: 30, 
      opacity: 0, 
      duration: 0.8 
    })
    .from(subheadingRef.current, { 
      y: 20, 
      opacity: 0, 
      duration: 0.8 
    }, "-=0.5")
    .from([swatch1Ref.current, swatch2Ref.current], { 
      scale: 0.8, 
      opacity: 0, 
      stagger: 0.2, 
      duration: 0.8 
    }, "-=0.5");
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="relative min-h-[70vh] bg-gray-100 py-20 px-6 md:px-16 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            ref={headingRef}
            className="text-2xl md:text-4xl lg:text-5xl uppercase font-medium mb-6"
          >
            RADICAL<br/>TRANSPARENCY.
          </h2>
          <h3 
            ref={subheadingRef}
            className="font-serif italic text-2xl md:text-3xl lg:text-4xl"
          >
            HIDE NOTHING.
          </h3>
        </div>
        
        <div className="flex justify-center space-x-8 md:space-x-16">
          <div 
            ref={swatch1Ref}
            className="w-16 h-16 md:w-24 md:h-24 rounded-full"
            style={{ background: "linear-gradient(135deg, #f8a170 0%, #d0545e 100%)" }}
          ></div>
          <div 
            ref={swatch2Ref}
            className="w-16 h-16 md:w-24 md:h-24 rounded-full"
            style={{ background: "linear-gradient(135deg, #f5dcbc 0%, #e6bb95 100%)" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Transparency;
