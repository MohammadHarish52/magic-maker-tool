import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

interface JournalHeaderProps {
  title: string;
  subtitle: string;
}

const JournalHeader: React.FC<JournalHeaderProps> = ({ title, subtitle }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
    })
      .from(
        subtitleRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.6"
      )
      .from(
        textRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      );
  }, []);

  return (
    <div className="py-16 px-6 md:px-16 lg:py-24 text-center flex flex-col items-center bg-white text-truekind-dark overflow-hidden">
      <div className="relative mb-2">
        <h2
          ref={subtitleRef}
          className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase"
        >
          {subtitle}
        </h2>
        <h1
          ref={titleRef}
          className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-1"
        >
          {title}
        </h1>
        <button className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>
      <div className="flex justify-center mt-4 lg:hidden">
        <button className="p-2">
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>
      <p
        ref={textRef}
        className="max-w-xl mx-auto text-center text-sm md:text-base text-gray-600 mt-6"
      >
        Skincare tips, rituals, and inspirations for your self-care journey.
      </p>
    </div>
  );
};

export default JournalHeader;
