import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const Shop: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(headerRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
    });
  }, []);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Hydrating Face Serum",
      price: "$38",
      image:
        "https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Radiance Eye Cream",
      price: "$45",
      image:
        "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Gentle Cleanser",
      price: "$28",
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Vitamin C Moisturizer",
      price: "$42",
      image:
        "https://plus.unsplash.com/premium_photo-1681236321513-551613a6f2db?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="py-20 md:py-24 px-6 md:px-16">
        <div ref={headerRef} className="text-center relative mb-16">
          <div className="flex flex-col items-center relative">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide">
              SHOP
            </h1>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl italic mt-2">
              products
            </h2>
            <div className="absolute -right-4 md:right-0 top-1/2 transform -translate-y-1/2 hidden md:block">
              <ArrowRight className="h-6 w-6" />
            </div>
          </div>

          <p className="max-w-xl mx-auto text-gray-600 mt-8">
            Explore our collection of clean, effective skincare and makeup
            products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ScrollReveal
              key={product.id}
              delay={index * 0.2}
              className="card-hover"
            >
              <div className="bg-truekind-cream/30 p-4 rounded-sm">
                <div className="h-[300px] mb-4 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl mb-2">{product.name}</h3>
                <p className="font-medium">{product.price}</p>
                <button className="mt-4 border border-truekind-dark px-4 py-2 text-sm hover:bg-truekind-dark hover:text-white transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
