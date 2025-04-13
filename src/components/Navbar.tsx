import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import gsap from "gsap";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const isHomePage = location.pathname === "/";

  // Text color logic:
  // - On homepage: start with white, change to black when scrolled
  // - On other pages: always black
  const textColor = isHomePage
    ? scrolled
      ? "text-black"
      : "text-white"
    : "text-black";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (mobileMenuOpen) {
        // Animate mobile menu in
        gsap.to(mobileMenuRef.current, {
          x: 0,
          duration: 0.3,
          ease: "power3.out",
        });
      } else {
        // Animate mobile menu out
        gsap.to(mobileMenuRef.current, {
          x: "100%",
          duration: 0.3,
          ease: "power3.out",
        });
      }
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`py-4 px-6 md:px-16 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <div className={`flex items-center justify-between ${textColor}`}>
          <div className="text-xl md:text-2xl font-serif font-medium">
            <Link to="/" className={textColor}>
              Elegance
            </Link>
          </div>

          <div className="hidden md:flex space-x-10">
            <NavLink to="/shop" scrolled={scrolled} textColor={textColor}>
              SHOP
            </NavLink>
            <NavLink to="/gallery" scrolled={scrolled} textColor={textColor}>
              GALLERY
            </NavLink>
            <NavLink to="/journal" scrolled={scrolled} textColor={textColor}>
              JOURNAL
            </NavLink>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              to="/cart"
              className={`p-2 rounded-full ${textColor}`}
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="h-5 w-5" />
            </Link>
            <div
              className={`h-6 border-l ${
                scrolled || !isHomePage ? "border-gray-300" : "border-white/30"
              } mx-1`}
            ></div>
            <Link
              to="/account"
              className={`p-2 rounded-full ${textColor}`}
              aria-label="Account"
            >
              <User className="h-5 w-5" />
            </Link>

            <button
              onClick={toggleMobileMenu}
              className={`ml-2 p-2 md:hidden ${textColor}`}
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className="mobile-menu fixed top-0 right-0 bottom-0 w-4/5 bg-white z-50 transform translate-x-full"
      >
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={closeMobileMenu}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            <MobileNavLink to="/" onClick={closeMobileMenu}>
              HOME
            </MobileNavLink>
            <MobileNavLink to="/shop" onClick={closeMobileMenu}>
              SHOP
            </MobileNavLink>
            <MobileNavLink to="/gallery" onClick={closeMobileMenu}>
              GALLERY
            </MobileNavLink>
            <MobileNavLink to="/journal" onClick={closeMobileMenu}>
              JOURNAL
            </MobileNavLink>

            <div className="border-t pt-6 mt-2">
              <div className="flex space-x-6">
                <MobileNavLink to="/cart" onClick={closeMobileMenu}>
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5" />
                    CART
                  </div>
                </MobileNavLink>
                <MobileNavLink to="/account" onClick={closeMobileMenu}>
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    ACCOUNT
                  </div>
                </MobileNavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  scrolled: boolean;
  textColor: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, textColor }) => {
  return (
    <Link
      to={to}
      className={`text-sm font-medium tracking-wider hover:opacity-70 transition-opacity ${textColor}`}
    >
      {children}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  to,
  children,
  onClick,
}) => {
  return (
    <Link
      to={to}
      className="text-lg font-medium tracking-wider"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
