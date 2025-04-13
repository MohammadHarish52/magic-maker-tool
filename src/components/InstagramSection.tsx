import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

const InstagramSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom-=100",
        end: "center center",
        scrub: 1,
      },
    });

    tl.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
    }).from(
      imagesRef.current?.children || [],
      {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
      },
      "-=0.5"
    );
  }, []);

  return (
    <div ref={containerRef} className="relative py-20 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={imagesRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop"
              alt="Instagram post"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Instagram post"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1974&auto=format&fit=crop"
              alt="Instagram post"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1974&auto=format&fit=crop"
              alt="Instagram post"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;
