
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

interface FeaturedArticleProps {
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ 
  title, 
  description, 
  image, 
  date,
  slug
}) => {
  const articleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.from(imageRef.current, { 
      opacity: 0,
      scale: 1.1,
      duration: 1.2
    })
    .from(contentRef.current?.children, { 
      y: 30, 
      opacity: 0, 
      stagger: 0.2, 
      duration: 0.8 
    }, "-=0.8");
  }, []);

  return (
    <div ref={articleRef} className="relative overflow-hidden bg-truekind-cream">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative">
          <img 
            ref={imageRef}
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6 bg-white rounded-full px-4 py-1 text-xs font-medium">
            FEATURED
          </div>
        </div>
        
        <div ref={contentRef} className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4 leading-tight">{title}</h2>
          <p className="text-gray-700 mb-6">{description}</p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-sm text-gray-500">{date}</span>
            <Link to={`/journal/${slug}`}>
              <Button variant="link" className="text-black hover:text-gray-700 p-0">
                Read more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
