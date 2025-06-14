import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { ThemeContext } from '../App';


export default function Navbar() {
    const { theme, setTheme } = useContext(ThemeContext);

      const toggleTheme = () => {
            setTheme(prev => prev === "dark" ? "light" : "dark");
                  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">TED<span className="red">x</span>UPES</div>
      <ul style={{marginRight: "3.5rem"}}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/speakers">Speakers</NavLink></li>
        <li><NavLink to="/registration">Registration</NavLink></li>
        <li><NavLink to="/rules">Rules</NavLink></li>
      </ul>
            <button className="theme-toggle-btn" onClick={toggleTheme} title="Toggle dark/light mode">
        {theme === "dark" ? (
          // Standard sun SVG icon
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFD600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        ) : (
          "🌙"
        )}
      </button>

    </nav>
  );
}
