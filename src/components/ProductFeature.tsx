import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Static counter to track component instances
let instanceCounter = 0;

interface ProductFeatureProps {
  title: string;
  imageSrc1: string;
  imageSrc2: string;
  backgroundColor?: string;
  layout?: "text-left" | "text-right" | "alternate" | "auto";
  index?: number;
  productName1?: string;
  productName2?: string;
}

const ProductFeature: React.FC<ProductFeatureProps> = ({
  title,
  imageSrc1,
  imageSrc2,
  backgroundColor = "bg-pink-50",
  layout = "auto", // Changed default to "auto"
  index = 0,
  productName1 = "",
  productName2 = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);

  // Use the ref to store the component's instance number
  const instanceRef = useRef<number>(-1);

  // Set the instance number only once on component mount
  if (instanceRef.current === -1) {
    instanceRef.current = instanceCounter++;
  }

  // Determine actual layout based on the layout prop
  let actualLayout = layout;

  if (layout === "auto") {
    // Automatically alternate based on instance counter
    actualLayout = instanceRef.current % 2 === 0 ? "text-left" : "text-right";
  } else if (layout === "alternate") {
    // Use the index prop for alternation (backward compatibility)
    actualLayout = index % 2 === 0 ? "text-left" : "text-right";
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom-=100",
        end: "bottom center",
        scrub: 1,
      },
    });

    if (actualLayout === "text-left") {
      tl.from(titleRef.current, {
        x: -30,
        opacity: 0,
        duration: 0.8,
      }).from(
        [image1Ref.current, image2Ref.current],
        {
          x: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
        },
        "-=0.5"
      );
    } else {
      tl.from(titleRef.current, {
        x: 30,
        opacity: 0,
        duration: 0.8,
      }).from(
        [image1Ref.current, image2Ref.current],
        {
          x: -30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
        },
        "-=0.5"
      );
    }
  }, [actualLayout]);

  return (
    <div
      ref={containerRef}
      className={`relative py-20 px-6 md:px-10 ${backgroundColor}`}
    >
      <div className="max-w-7xl mx-auto">
        {actualLayout === "text-left" ? (
          <div className="flex flex-col md:flex-row items-center">
            <div
              ref={titleRef}
              className="w-full md:w-1/3 text-center md:text-left mb-10 md:mb-0"
            >
              <h2 className="font-serif italic text-3xl md:text-4xl mb-6">
                {title}
              </h2>
              <button className="inline-block mt-4 border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
                SHOP NOW
              </button>
            </div>

            <div className="w-full md:w-2/3 md:pl-16 flex justify-end">
              <div className="grid grid-cols-2 gap-6 max-w-md">
                <div ref={image1Ref} className="relative">
                  <img
                    src={imageSrc1}
                    alt={productName1}
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                  />
                  {productName1 && (
                    <p className="mt-2 text-xs text-gray-600">{productName1}</p>
                  )}
                </div>
                <div ref={image2Ref} className="relative">
                  <img
                    src={imageSrc2}
                    alt={productName2}
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                  />
                  {productName2 && (
                    <p className="mt-2 text-xs text-gray-600">{productName2}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 md:pr-16 order-2 md:order-1 mt-10 md:mt-0">
              <div className="grid grid-cols-2 gap-6 max-w-md">
                <div ref={image1Ref} className="relative">
                  <img
                    src={imageSrc1}
                    alt={productName1}
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                  />
                  {productName1 && (
                    <p className="mt-2 text-xs text-gray-600">{productName1}</p>
                  )}
                </div>
                <div ref={image2Ref} className="relative">
                  <img
                    src={imageSrc2}
                    alt={productName2}
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                  />
                  {productName2 && (
                    <p className="mt-2 text-xs text-gray-600">{productName2}</p>
                  )}
                </div>
              </div>
            </div>

            <div
              ref={titleRef}
              className="w-full md:w-1/3 text-center md:text-right order-1 md:order-2"
            >
              <h2 className="font-serif italic text-3xl md:text-4xl mb-6">
                {title}
              </h2>
              <button className="inline-block mt-4 border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
                SHOP NOW
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFeature;
