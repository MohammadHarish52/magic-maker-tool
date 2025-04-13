import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-12 px-8 md:px-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-serif text-xl mb-4">Elegance</h3>
            <p className="text-sm text-gray-600 mb-6 max-w-xs">
              True to oneself, kind to nature. Creating transparent skincare
              that is effective, safe and respects our planet.
            </p>
          </div>

          <div className="md:col-span-1 flex flex-col items-start">
            <h3 className="font-serif text-base mb-6">Navigate</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <Link
                to="/shop"
                className="text-sm text-gray-600 hover:text-black"
              >
                Shop
              </Link>
              <Link
                to="/journal"
                className="text-sm text-gray-600 hover:text-black"
              >
                Journal
              </Link>
              <Link
                to="/gallery"
                className="text-sm text-gray-600 hover:text-black"
              >
                Gallery
              </Link>
              <Link
                to="/account"
                className="text-sm text-gray-600 hover:text-black"
              >
                Account
              </Link>
            </div>
          </div>

          <div className="md:col-span-1 flex flex-col">
            <h3 className="font-serif text-base mb-6">Connect</h3>
            <p className="text-sm text-gray-600 mb-4">
              Follow us for updates and inspiration
            </p>
            <div className="flex space-x-6 mt-2">
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            © 2025 Elegance. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-xs text-gray-500 hover:text-black"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-gray-500 hover:text-black"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
