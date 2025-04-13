import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

interface ArticleCardProps {
  title: string;
  image: string;
  date: string;
  slug: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  image,
  date,
  slug,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.set(imageRef.current, { scale: 1.2 });

    const hoverEnter = () => {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      });
    };

    const hoverLeave = () => {
      gsap.to(imageRef.current, {
        scale: 1.2,
        duration: 1.2,
        ease: "power3.out",
      });
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mouseenter", hoverEnter);
      card.addEventListener("mouseleave", hoverLeave);

      return () => {
        card.removeEventListener("mouseenter", hoverEnter);
        card.removeEventListener("mouseleave", hoverLeave);
      };
    }
  }, []);

  return (
    <div ref={cardRef} className="flex flex-col card-hover">
      <div className="h-[250px] sm:h-[300px] mb-4 overflow-hidden">
        <img
          ref={imageRef}
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform ease-in-out duration-700"
        />
      </div>
      <h3 className="font-serif text-lg sm:text-xl mb-3 text-white">{title}</h3>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-sm text-gray-300">{date}</span>
        <Link to={`/journal/${slug}`}>
          <Button variant="link" className="text-white hover:text-gray-300 p-0">
            Read more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
