import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white border-t border-gray-900 font-sans relative py-10">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        
        {/* 1. Logo Image */}
        <div className="flex items-center shrink-0">
          <Link to="/">
            <img 
              src="/Logo.png" 
              alt="TEDxSGNS Youth" 
              className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" 
            />
          </Link>
        </div>

        {/* 2. Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 text-sm font-bold tracking-wide text-gray-400 uppercase">
           {['Home', 'About', 'Speakers', 'Nomination', 'Rules'].map(item => (
              <Link 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="hover:text-ted-red transition-colors duration-200"
              >
                  {item}
              </Link>
           ))}
        </nav>

        {/* 3. Contact Button & Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-6">
            <Link to="/contact" className="bg-ted-red hover:bg-red-700 text-white text-sm font-bold px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-red-900/50 hover:-translate-y-0.5 transform">
                Contact Us
            </Link>
            <div className="text-gray-600 text-xs font-medium tracking-wide">
                © 2025 TEDxSGNS Youth.
            </div>
        </div>
      </div>

      {/* Floating "Back to Top" Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 w-12 h-12 bg-ted-red hover:bg-red-700 text-white rounded-lg flex items-center justify-center shadow-xl z-50 transition-all duration-300 transform ${
          showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        title="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}