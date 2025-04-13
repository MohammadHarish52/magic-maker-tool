import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import gsap from "gsap";
import { ArrowRight, Minus, Plus, X, ShoppingBag } from "lucide-react";

const Cart: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(headerRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
    });
  }, []);

  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: "Hydrating Face Serum",
      price: 38,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Radiance Eye Cream",
      price: 45,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="py-20 md:py-24 px-6 md:px-16">
        <div ref={headerRef} className="text-center relative mb-16">
          <div className="flex flex-col items-center relative">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide">
              CART
            </h1>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl italic mt-2">
              shopping
            </h2>
            <div className="absolute -right-4 md:right-0 top-1/2 transform -translate-y-1/2 hidden md:block">
              <ArrowRight className="h-6 w-6" />
            </div>
          </div>

          <p className="max-w-xl mx-auto text-gray-600 mt-8">
            Review your items and proceed to checkout
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="flex justify-center mb-6">
              <ShoppingBag className="h-16 w-16 text-gray-300" />
            </div>
            <h3 className="font-serif text-2xl mb-4">Your cart is empty</h3>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <a
              href="/shop"
              className="inline-block px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors"
            >
              CONTINUE SHOPPING
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {cartItems.map((item) => (
                <ScrollReveal key={item.id} className="mb-8">
                  <div className="flex flex-col sm:flex-row gap-6 p-6 border-b">
                    <div className="w-full sm:w-28 h-28 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-serif text-xl">{item.name}</h3>
                        <button className="text-gray-400 hover:text-black">
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                      <p className="text-gray-600 mb-4">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center">
                        <button className="border p-1">
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button className="border p-1">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="lg:col-span-1">
              <ScrollReveal>
                <div className="bg-truekind-cream/30 p-6">
                  <h3 className="font-serif text-xl mb-6 border-b pb-4">
                    Order Summary
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between font-medium text-lg border-t pt-4 mb-6">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <button className="w-full py-3 bg-truekind-dark text-white hover:opacity-90 transition-opacity mb-4">
                    CHECKOUT
                  </button>

                  <a
                    href="/shop"
                    className="block text-center text-sm underline"
                  >
                    Continue Shopping
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
