
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ExcitingOffers: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom-=100",
        end: "center center",
        scrub: 1
      }
    });
    
    tl.from(titleRef.current, { 
      y: 30, 
      opacity: 0, 
      duration: 0.8 
    })
    .from(imageRef.current, { 
      y: 20, 
      scale: 0.95, 
      opacity: 0, 
      duration: 0.8 
    }, "-=0.5");
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="relative py-20 px-6 md:px-16 bg-gradient-to-br from-pink-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-xl md:text-2xl uppercase tracking-wider mb-12 text-center md:text-left font-medium"
        >
          EXCITING <span className="italic">offers</span> <span className="font-serif italic">await</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-2/5 mb-8 md:mb-0">
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?q=80&w=1974&auto=format&fit=crop" 
              alt="Product" 
              className="w-full md:max-w-xs mx-auto object-cover" 
            />
          </div>
          
          <div className="w-full md:w-3/5 p-6 bg-white shadow-sm">
            <h3 className="font-serif italic text-xl mb-4">Advanced night serum</h3>
            <p className="text-sm text-gray-600 mb-6">
              Our revolutionary formula works while you sleep to restore and rejuvenate your skin.
            </p>
            <button className="inline-block border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition-colors">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcitingOffers;
