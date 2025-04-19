import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

// Define proper types
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

const Shop: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(headerRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
    });

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: "Hydrating Face Serum",
      price: "$38",
      image:
        "https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?q=80&w=1974&auto=format&fit=crop",
      description: "Deeply hydrates and revitalizes skin with hyaluronic acid",
    },
    {
      id: 2,
      name: "Radiance Eye Cream",
      price: "$45",
      image:
        "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1974&auto=format&fit=crop",
      description:
        "Reduces puffiness and dark circles with targeted botanicals",
    },
    {
      id: 3,
      name: "Gentle Cleanser",
      price: "$28",
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1974&auto=format&fit=crop",
      description: "Cleanse without stripping your skin's natural moisture",
    },
    {
      id: 4,
      name: "Vitamin C Moisturizer",
      price: "$42",
      image:
        "https://plus.unsplash.com/premium_photo-1681236321513-551613a6f2db?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Brightens and protects with antioxidant-rich formula",
    },
  ];

  // ProductCard component with loading skeleton
  const ProductCard = ({
    product,
    delay,
    isLoading,
  }: {
    product: Product;
    delay: number;
    isLoading: boolean;
  }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
      <ScrollReveal delay={delay} className="card-hover">
        <div
          className={cn(
            "bg-truekind-cream/30 p-4 rounded-sm transition-all duration-300 hover:shadow-md",
            "focus-within:ring-2 focus-within:ring-black focus-within:ring-opacity-50"
          )}
          tabIndex={0}
        >
          <div className="h-[300px] mb-4 overflow-hidden relative">
            {isLoading ? (
              <Skeleton className="w-full h-full absolute inset-0" />
            ) : (
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className={cn(
                  "w-full h-full object-cover transition-transform duration-700 hover:scale-105",
                  "transition-opacity duration-500",
                  imageLoaded ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => setImageLoaded(true)}
              />
            )}
          </div>
          {isLoading ? (
            <>
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-5 w-1/4 mb-4" />
              <Skeleton className="h-10 w-1/2" />
            </>
          ) : (
            <>
              <h3 className="font-serif text-xl mb-2">{product.name}</h3>
              <p className="font-medium">{product.price}</p>
              <p
                className="text-sm text-gray-600 mt-1 line-clamp-2"
                aria-hidden="true"
              >
                {product.description}
              </p>
              <button
                className="mt-4 border border-truekind-dark px-4 py-2 text-sm hover:bg-truekind-dark hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
                aria-label={`Add ${product.name} to cart - ${product.price}`}
              >
                Add to Cart
              </button>
            </>
          )}
        </div>
      </ScrollReveal>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="py-20 md:py-24 px-6 md:px-16">
        <div ref={headerRef} className="text-center relative mb-16">
          <div className="flex flex-col items-center relative">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide">
              SHOP
            </h1>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl italic mt-2">
              products
            </h2>
            <div
              className="absolute -right-4 md:right-0 top-1/2 transform -translate-y-1/2 hidden md:block"
              aria-hidden="true"
            >
              <ArrowRight className="h-6 w-6" />
            </div>
          </div>

          <p className="max-w-xl mx-auto text-gray-600 mt-8">
            Explore our collection of clean, effective skincare and makeup
            products.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Product listings"
        >
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              delay={index * 0.2}
              isLoading={isLoading}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
