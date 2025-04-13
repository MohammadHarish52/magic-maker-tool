import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const Newsletter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom-=100",
        end: "center center",
        scrub: 1,
      },
    });

    tl.from(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative py-24 px-6 md:px-16 bg-zinc-900 text-white"
    >
      <div ref={contentRef} className="max-w-2xl mx-auto text-center">
        <div className="text-center relative mb-12">
          <div className="flex flex-col items-center relative">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide text-white">
              NEWSLETTER
            </h2>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl italic mt-2 text-white">
              updates
            </h3>
            <div className="absolute -right-4 md:right-0 top-1/2 transform -translate-y-1/2 hidden md:block">
              <ArrowRight className="h-6 w-6 text-white" />
            </div>
          </div>

          <p className="max-w-xl mx-auto text-gray-400 mt-8">
            Get the latest news about skincare tips and new products
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <input
            ref={inputRef}
            type="email"
            placeholder="ENTER YOUR EMAIL"
            className="w-full max-w-md px-8 py-4 rounded-full bg-transparent border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors text-center"
          />

          <div className="flex flex-col items-center">
            <button className="w-16 h-16 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center mb-2 transition-colors focus:outline-none">
              <ArrowUpRight className="h-6 w-6" />
            </button>
            <span className="text-sm text-gray-400 uppercase">Subscribe</span>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-xs text-gray-500 max-w-md mx-auto">
          No Spam, only quality articles to help you be more radiant. You can
          opt out anytime.
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
