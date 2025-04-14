import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(containerRef.current, {
      opacity: 0,
      duration: 1.5,
    }).from(
      textRef.current,
      {
        y: 30,
        opacity: 0,
        duration: 1,
      },
      "-=0.8"
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-truekind-cream"
    >
      {/* Desktop background */}
      <div className="absolute inset-0 bg-zinc-950 hidden md:block"></div>

      {/* Mobile background */}
      <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      <div
        className="absolute inset-0 bg-center bg-cover md:hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588125896798-a622c05eee0a?q=80&w=1974&auto=format&fit=crop')",
          backgroundPosition: "center 30%",
        }}
      ></div>

      {/* Desktop content */}
      <div
        ref={textRef}
        className="absolute inset-0 z-10 hidden md:flex md:flex-col md:items-center md:justify-center md:text-center md:px-6"
      >
        <h1 className="font-serif italic text-7xl lg:text-8xl mb-0 text-white leading-tight">
          True <span className="text-6xl lg:text-7xl">to</span> Oneself
        </h1>
        <h2 className="font-serif italic text-6xl lg:text-7xl text-white leading-tight">
          kind <span className="text-5xl lg:text-6xl">to</span>{" "}
          <span className="italic">Nature</span>
        </h2>
        <p className="mt-4 text-white text-base lg:text-lg max-w-2xl">
          "Unreservedly honest products that truly work, be kind to skin and the
          planet - no exceptions!"
        </p>
        <button className="mt-8 px-10 py-3 bg-white text-black rounded-full flex items-center gap-2">
          EXPLORE ALL PRODUCTS
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-10 md:hidden">
        <div className="text-left max-w-lg">
          <h1 className="font-serif italic text-5xl sm:text-6xl text-white leading-tight">
            True <span className="text-4xl sm:text-5xl">to</span> Oneself
          </h1>
          <h2 className="font-serif italic text-4xl sm:text-5xl text-white leading-tight mt-2">
            kind <span className="text-3xl sm:text-4xl">to</span>{" "}
            <span className="italic">Nature</span>
          </h2>
          <p className="mt-4 text-white text-sm max-w-md">
            Unreservedly honest products that truly work, be kind to skin and
            the planet - no exceptions!
          </p>

          <button className="mt-8 px-8 py-3 bg-white text-black rounded-full flex items-center gap-2">
            EXPLORE ALL PRODUCTS
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
