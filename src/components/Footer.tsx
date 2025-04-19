import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, ArrowUpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.from(footerRef.current.querySelectorAll(".animate-item"), {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="bg-white pt-16 pb-12 px-8 md:px-16 border-t border-gray-100 relative"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1 animate-item">
            <h3 className="font-serif text-xl mb-4 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-px after:bg-black/40 after:-bottom-1 after:left-0">
              Elegance
            </h3>
            <p className="text-sm text-gray-600 mb-6 max-w-xs">
              True to oneself, kind to nature. Creating transparent skincare
              that is effective, safe and respects our planet.
            </p>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-30 rounded px-2 py-1"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUpCircle
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </button>
          </div>

          <div className="md:col-span-1 flex flex-col items-start animate-item">
            <h3 className="font-serif text-base mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-px after:bg-black/40 after:-bottom-1 after:left-0">
              Navigate
            </h3>
            <nav aria-label="Footer navigation">
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                <FooterLink to="/shop">Shop</FooterLink>
                <FooterLink to="/journal">Journal</FooterLink>
                <FooterLink to="/gallery">Gallery</FooterLink>
                <FooterLink to="/account">Account</FooterLink>
              </div>
            </nav>
          </div>

          <div className="md:col-span-1 flex flex-col animate-item">
            <h3 className="font-serif text-base mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-px after:bg-black/40 after:-bottom-1 after:left-0">
              Connect
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Follow us for updates and inspiration
            </p>
            <div className="flex space-x-6 mt-2">
              <SocialLink
                href="https://instagram.com"
                icon={<Instagram size={20} />}
                label="Instagram"
              />
              <SocialLink
                href="https://facebook.com"
                icon={<Facebook size={20} />}
                label="Facebook"
              />
              <SocialLink
                href="https://twitter.com"
                icon={<Twitter size={20} />}
                label="Twitter"
              />
            </div>

            <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
              <label
                htmlFor="email-subscribe"
                className="text-sm text-gray-600 block mb-2"
              >
                Subscribe to our newsletter
              </label>
              <div className="flex">
                <input
                  type="email"
                  id="email-subscribe"
                  placeholder="Your email"
                  className="border border-gray-200 focus:border-gray-400 px-3 py-2 text-sm flex-grow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-30"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white text-sm hover:bg-black/90 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center animate-item">
          <p className="text-xs text-gray-500">
            © 2025 Elegance. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <FooterLink to="/privacy" small>
              Privacy
            </FooterLink>
            <FooterLink to="/terms" small>
              Terms
            </FooterLink>
            <FooterLink to="/accessibility" small>
              Accessibility
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
  small?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children, small }) => {
  return (
    <Link
      to={to}
      className={cn(
        "text-gray-600 hover:text-black transition-colors relative group",
        small ? "text-xs" : "text-sm",
        "focus:outline-none focus:text-black"
      )}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
      </span>
    </Link>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-black transition-colors p-1.5 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-30"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default Footer;
