import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedArticle from "@/components/FeaturedArticle";
import ArticleCard from "@/components/ArticleCard";
import { ArrowRight } from "lucide-react";

const Journal: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="py-20 md:py-24 px-6 md:px-16">
        <div className="text-center relative mb-16">
          <div className="flex flex-col items-center relative">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide">
              JOURNAL
            </h1>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl italic mt-2">
              clean
            </h2>
            <div className="absolute -right-4 md:right-0 top-1/2 transform -translate-y-1/2 hidden md:block">
              <ArrowRight className="h-6 w-6" />
            </div>
          </div>

          <p className="max-w-xl mx-auto text-gray-600 mt-8">
            Skincare tips, rituals, and inspirations for your self-care journey.
          </p>
        </div>
      </div>

      <div className="bg-truekind-dark text-white py-8 px-6 md:px-16 text-center">
        <p className="max-w-2xl mx-auto text-gray-300 font-light">
          Healthy tips on skincare, regimen and overall a better lifestyle.
        </p>
      </div>

      <div className="py-16 px-6 md:px-16 bg-truekind-dark">
        <div className="mb-16">
          <FeaturedArticle
            title="Beauty Secrets from Around the World: Rituals and Ingredients You Need to Try"
            description="Drawing from our rich ayurvedic legacy of over 30 years and embracing dermal science, we aim to create transparent skincare that is incredibly effective, safe and without harming the environment or the planet."
            image="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2070&auto=format&fit=crop"
            date="8 Feb 2025"
            slug="beauty-secrets"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ArticleCard
            title="Your Skincare and Makeup Routine Impacts Your Well-Being"
            image="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop"
            date="20 Dec 2024"
            slug="skincare-impacts-wellbeing"
          />
          <ArticleCard
            title="How to Make Your Routine More Eco-Friendly"
            image="https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=1170&auto=format&fit=crop"
            date="25 Jan 2025"
            slug="eco-friendly-routine"
          />
          <ArticleCard
            title="Natural Ingredients for Sensitive Skin"
            image="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1974&auto=format&fit=crop"
            date="15 Jan 2025"
            slug="natural-ingredients"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Journal;
