import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SPEAKERS', path: '/speakers' },
    { name: 'NOMINATION', path: '/nomination' },
    { name: 'RULES', path: '/rules' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-black text-white py-6 shadow-xl font-sans transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Image */}
        <Link to="/" className="flex items-center z-50 relative">
          <img 
            src="/Logo.png" 
            alt="TEDxSGNS Youth" 
            className="h-12 w-auto object-contain hover:opacity-90 transition-opacity" 
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={`text-sm font-bold tracking-widest transition-colors duration-300 hover:text-ted-red
                  ${isActive(link.path) ? 'text-ted-red' : 'text-white'}
                `}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button 
          className="md:hidden z-50 flex flex-col justify-center gap-1.5 w-8 h-8"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex flex-col justify-center items-center transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <ul className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-black tracking-widest transition-colors hover:text-ted-red ${isActive(link.path) ? 'text-ted-red' : 'text-white'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="text-xl font-bold text-white border-2 border-ted-red px-8 py-3 rounded-full mt-6 inline-block hover:bg-ted-red hover:text-white transition-all">
                    CONTACT US
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}