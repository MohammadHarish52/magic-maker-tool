import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import ProductFeature from "@/components/ProductFeature";
import Transparency from "@/components/Transparency";
import ExcitingOffers from "@/components/ExcitingOffers";
import InstagramSection from "@/components/InstagramSection";
import Newsletter from "@/components/Newsletter";
import JournalHeader from "@/components/JournalHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />

        <Manifesto />

        <ScrollReveal>
          <div className="py-16 px-6 md:px-16 lg:py-24 text-center flex flex-col items-center relative">
            <div className="relative mb-2">
              <h2 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide">
                EXPLORE
              </h2>
              <div className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-1">
                pure potency
              </div>
              <div className="absolute right-0 lg:-right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <ArrowRight className="h-6 w-6" />
              </div>
            </div>
            <div className="flex justify-center mt-4 lg:hidden">
              <button className="p-2">
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ProductFeature
          title="Pure Brilliance"
          imageSrc1="https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?q=80&w=1974&auto=format&fit=crop"
          imageSrc2="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1974&auto=format&fit=crop"
          backgroundColor="bg-pink-50"
          imagePosition="left"
          imageSide="right"
        />

        <ProductFeature
          title="Vitamin Boost"
          imageSrc1="https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1974&auto=format&fit=crop"
          imageSrc2="https://images.unsplash.com/photo-1725328493423-3771b60d02c2?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          backgroundColor="bg-stone-100"
          imagePosition="right"
          imageSide="left"
        />

        <Transparency />

        <ExcitingOffers />

        <ScrollReveal>
          <JournalHeader title="clean" subtitle="JOURNAL" />
        </ScrollReveal>

        <InstagramSection />

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
