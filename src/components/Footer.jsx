import React from "react";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="tedx-footer">
      <div className="footer-row">
        <div className="footer-right">
          <span
            style={{
              fontWeight: 900,
              fontSize: "2rem",
              letterSpacing: "1px",
              fontFamily: "'Montserrat', Arial, sans-serif",
              color: "#fff"
            }}
          >
            TED<span style={{ color: "#e62b1e" }}>x</span>SGNS Youth
          </span>
        </div>
        <div className="footer-left">
          <span
            style={{
              fontWeight: 400,
              fontSize: "1.15rem",
              color: "#fff",
              fontFamily: "'Montserrat', Arial, sans-serif",
              letterSpacing: "0.5px"
            }}
          >
            © 2025 TEDxSGNS Youth. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

