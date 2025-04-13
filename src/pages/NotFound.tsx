import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-6">
          <h1 className="font-serif text-6xl md:text-8xl mb-2">404</h1>
          <h2 className="font-serif italic text-3xl md:text-4xl mb-6">
            page not found
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            We couldn't find the page you're looking for. The page may have been
            moved or doesn't exist.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            RETURN HOME
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
