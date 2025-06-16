import { NavLink } from 'react-router-dom';
import './Navbar.css';


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TED<span className="red">x</span>SGNS Youth</div>
      <ul style={{marginRight: "3.5rem"}}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/speakers">Speakers</NavLink></li>
        <li><NavLink to="/nomination">Nomination</NavLink></li>
        <li><NavLink to="/rules">Rules</NavLink></li>
      </ul>
    </nav>
  );
}
