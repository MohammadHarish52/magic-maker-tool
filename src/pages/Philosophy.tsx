
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Philosophy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="py-20 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl mb-6 text-center">Our Philosophy</h1>
          <p className="text-gray-600 mb-8">
            Drawing from our rich ayurvedic legacy of over 30 years and embracing dermal science, 
            we aim to create transparent skincare that is incredibly effective, safe and without 
            harming the environment or the planet.
          </p>
          
          <h2 className="font-serif text-2xl mb-4 mt-10">Clean Beauty</h2>
          <p className="text-gray-600 mb-6">
            We believe in transparent formulations that are free from harmful chemicals, 
            focusing on ingredients that work with your skin, not against it.
          </p>
          
          <h2 className="font-serif text-2xl mb-4 mt-10">Sustainability</h2>
          <p className="text-gray-600 mb-6">
            Our commitment to the planet extends to our sourcing, manufacturing, and 
            packaging choices. We're constantly working to reduce our environmental footprint.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Philosophy;
