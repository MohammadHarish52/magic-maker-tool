import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom-=100",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
    }).from(
      imageRef.current,
      {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.4"
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full bg-white py-24 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between"
    >
      <div ref={textRef} className="w-full md:w-1/2 mb-12 md:mb-0 text-left">
        <h2 className="uppercase text-xl md:text-2xl tracking-widest mb-3 font-medium">
          CLEAN, CONSCIOUS,
          <br />
          PERFORMANCE
        </h2>
        <h3 className="font-serif italic text-3xl md:text-5xl">skincare.</h3>
      </div>

      <div className="w-full md:w-1/2 relative">
        <div className="relative w-5/6 mx-auto aspect-square rounded-full overflow-hidden bg-truekind-cream">
          <img
            ref={imageRef}
            src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=1170&auto=format&fit=crop"
            alt="Woman with glowing skin"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -top-4 left-0 w-12 h-12 rounded-full border border-gray-200"></div>
      </div>
    </div>
  );
};

export default Manifesto;
