import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ProductFeatureProps {
  title: string;
  imageSrc1: string;
  imageSrc2: string;
  backgroundColor?: string;
  imagePosition?: 'left' | 'right';
  productName1?: string;
  productName2?: string;
  titleAlignment?: 'left' | 'right' | 'center';
}

const ProductFeature: React.FC<ProductFeatureProps> = ({
  title,
  imageSrc1,
  imageSrc2,
  backgroundColor = "bg-pink-50",
  imagePosition = 'left',
  productName1 = "",
  productName2 = "",
  titleAlignment = 'left'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom-=100",
        end: "bottom center",
        scrub: 1
      }
    });
    
    tl.from(titleRef.current, { 
      y: 30, 
      opacity: 0, 
      duration: 0.8 
    })
    .from(image1Ref.current, { 
      x: imagePosition === 'left' ? -30 : 30, 
      opacity: 0, 
      duration: 0.8 
    }, "-=0.5")
    .from(image2Ref.current, { 
      x: imagePosition === 'left' ? -30 : 30, 
      opacity: 0, 
      duration: 0.8 
    }, "-=0.5");
  }, [imagePosition]);

  // Set text alignment classes
  const textAlignClass = {
    left: "text-left md:text-left",
    right: "text-center md:text-right",
    center: "text-center"
  }[titleAlignment];
  
  return (
    <div 
      ref={containerRef}
      className={`relative py-20 px-6 md:px-16 ${backgroundColor}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {imagePosition === 'left' && (
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <div className="grid grid-cols-2 gap-6">
                <div ref={image1Ref} className="relative">
                  <img 
                    src={imageSrc1} 
                    alt={productName1}
                    className="w-full aspect-square object-cover" 
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
                  />
                  {productName2 && (
                    <p className="mt-2 text-xs text-gray-600">{productName2}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div 
            ref={titleRef}
            className={`w-full md:w-1/2 ${textAlignClass}`}
          >
            <h2 className="font-serif italic text-3xl md:text-4xl mb-6">{title}</h2>
            <button className="inline-block mt-4 border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition-colors">
              SHOP NOW
            </button>
          </div>
          
          {imagePosition === 'right' && (
            <div className="w-full md:w-1/2 mt-12 md:mt-0">
              <div className="grid grid-cols-2 gap-6">
                <div ref={image1Ref} className="relative">
                  <img 
                    src={imageSrc1} 
                    alt={productName1}
                    className="w-full aspect-square object-cover" 
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
                  />
                  {productName2 && (
                    <p className="mt-2 text-xs text-gray-600">{productName2}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;