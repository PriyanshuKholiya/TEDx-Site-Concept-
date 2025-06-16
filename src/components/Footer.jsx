import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="tedx-footer">
      <div className="footer-top footer-top-no-newsletter">
        <div className="footer-logo">
          TED<span className="red">x</span>SGNS Youth
          <div className="footer-tagline">x = independently organized TED event</div>
        </div>
        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link className="footer-link" to="/">Home</Link></li>
              <li><Link className="footer-link" to="/about">About</Link></li>
              <li><Link className="footer-link" to="/speakers">Speakers</Link></li>
              <li><Link className="footer-link" to="/nomination">Nomination</Link></li>
              <li><Link className="footer-link" to="/rules">Rules</Link></li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li>
                <a className="footer-link" href="#" target="_blank" rel="noopener noreferrer">
                  Youtube
                </a>
              </li>
              <li>
                <a className="footer-link" href="#" target="_blank" rel="noopener noreferrer">
                  Linkedin
                </a>
              </li>
              <li>
                <a className="footer-link" href="#" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a className="footer-link" href="mailto:tedxsgns@sgns.ac.in">Email: tedxsgns@sgns.ac.in</a>
              </li>
              <li>
                <a className="footer-link" href="tel:9568896144">Phone: 9568896144</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom footer-bottom-no-apps">
        <div>Follow TEDxSGNS Youth</div>
        <div className="footer-socials">
          <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="footer-social-img" /> LinkedIn
          </a>
          <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="Twitter" className="footer-social-img" /> Twitter
          </a>
          <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="footer-social-img" /> Instagram
          </a>
          <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="Youtube" className="footer-social-img" /> Youtube
          </a>
        </div>
      </div>
      <div className="footer-copy">
        © 2025 TEDxSGNS Youth. Inspired by TEDx and TED. All rights reserved.
      </div>
    </footer>
  );
}
