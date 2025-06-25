import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">TED<span className="red">x</span>SGNS Youth</div>
      {/* Hamburger button for mobile */}
      <button
        className={`navbar-hamburger${mobileMenuOpen ? ' open' : ''}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Open menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {/* Desktop menu */}
      <ul className="navbar-links-desktop" style={{marginRight: "3.5rem"}}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/speakers">Speakers</NavLink></li>
        <li><NavLink to="/nomination">Nomination</NavLink></li>
        <li><NavLink to="/rules">Rules</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-overlay">
          <div className="navbar-mobile-header">
            <div className="navbar-logo">TED<span className="red">x</span>SGNS Youth</div>
            <button
              className="navbar-mobile-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          <ul className="navbar-links-mobile">
            <li><NavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/speakers" onClick={() => setMobileMenuOpen(false)}>Speakers</NavLink></li>
            <li><NavLink to="/nomination" onClick={() => setMobileMenuOpen(false)}>Nomination</NavLink></li>
            <li><NavLink to="/rules" onClick={() => setMobileMenuOpen(false)}>Rules</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
