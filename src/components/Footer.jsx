import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
  // Floating up button
  React.useEffect(() => {
    // Ensure only one up button is added
    if (document.getElementById('footer-up-btn')) return;
    const btn = document.createElement('button');
    btn.id = 'footer-up-btn';
    btn.title = 'Back to top';
    btn.style.position = 'fixed';
    btn.style.right = '2.2rem';
    btn.style.bottom = '2.2rem';
    btn.style.background = '#e0b36a';
    btn.style.border = 'none';
    btn.style.borderRadius = '50%';
    btn.style.width = '48px';
    btn.style.height = '48px';
    btn.style.cursor = 'pointer';
    btn.style.display = 'flex';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';
    btn.style.boxShadow = '0 2px 8px #0002';
    btn.style.zIndex = 1000;
    btn.style.transition = 'background 0.18s';
    btn.innerHTML = '<span style="font-size:2rem;color:#181818;font-weight:700;line-height:1;">↑</span>';
    btn.onmouseover = () => btn.style.background = "#e62b1e";
    btn.onmouseout = () => btn.style.background = "#e0b36a";
    btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.appendChild(btn);
    return () => { if (btn) btn.remove(); };
  }, []);

  return (
    <footer className="footer" style={{
      background: "#111",
      color: "#fff",
      padding: "2.5rem 0 1.5rem 0",
      borderTop: "6px solid #181818"
    }}>
      <div className="footer-inner" style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        gap: "0",
        flexWrap: "wrap"
      }}>
        {/* Left: Logo, X, Reimagine Diversity */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.2rem",
          minWidth: 160,
          margin: 0,
          width: "100%"
        }}>
          <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.2rem"
          }}>
            <div style={{ fontWeight: 700, fontSize: "1.35rem", color: "#fff", letterSpacing: "1px", textAlign: "center" }}>
              TED<span style={{ color: "#e62b1e" }}>x</span>SGNS Youth
            </div>
            <img
              src="/X.png"
              alt="X"
              style={{
                height: "2.2rem",
                width: "auto",
                display: "block",
                margin: "0.3rem auto"
              }}
            />
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "0.5rem", marginTop: "0.1rem", marginLeft: 0, justifyContent: "center" }}>
              <span style={{ color: "#e62b1e", fontWeight: 700, fontSize: "1.15rem", letterSpacing: "1px" }}>Reimagine</span>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.15rem", letterSpacing: "1px" }}>Diversity</span>
            </div>
          </div>
        </div>
        {/* Center: Navigation links, push left for more gap with copyright */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: "0.7rem",
          minWidth: 220,
          marginRight: "3.5rem" // Push list items left
        }}>
          <nav>
            <ul style={{
              display: "flex",
              flexDirection: "row",
              gap: "1.1rem",
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontWeight: 400,
              fontSize: "1.08rem",
              alignItems: "center",
              justifyContent: "flex-end"
            }}>
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/speakers" className="footer-link">Speakers</a></li>
              <li><a href="/nomination" className="footer-link">Nomination</a></li>
              <li><a href="/rules" className="footer-link">Rules</a></li>
              <li>
                <Link to="/contact" className="footer-link footer-contact-btn" style={{
                  background: '#e62b1e',
                  color: '#fff',
                  borderRadius: '2rem',
                  padding: '0.45rem 1.3rem',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  boxShadow: '0 2px 8px #e62b1e22',
                  marginLeft: '0.7rem',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'background 0.18s, color 0.18s'
                }}>Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Right: Copyright */}
        <div style={{
          color: "#fff",
          fontWeight: 400,
          fontSize: "1.05rem",
          textAlign: "right",
          minWidth: 180,
          justifySelf: "end"
        }}>
          © 2025 TEDxSGNS Youth. All rights reserved.
        </div>
      </div>
      <style>{`
        .footer-link {
          color: #fff;
          text-decoration: none;
          transition: color 0.18s;
          padding: 0.2rem 0.5rem;
          border-radius: 1rem;
        }
        .footer-link:hover {
          color: #e62b1e;
        }
        @media (max-width: 900px) {
          .footer-inner {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 1.2rem !important;
          }
          .footer-link {
            font-size: 1rem !important;
          }
        }
        @media (max-width: 600px) {
          .footer-inner {
            flex-direction: column !important;
            align-items: center !important;
            gap: 1.2rem !important;
            padding: 0 1rem !important;
          }
          .footer-link {
            font-size: 0.95rem !important;
            padding: 0.15rem 0.3rem !important;
          }
          .footer nav ul {
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 0.7rem !important;
          }
          .footer nav ul li {
            margin-bottom: 0.3rem !important;
          }
          .footer > div > div {
            width: 100% !important;
            text-align: center !important;
            margin: 0 !important;
            min-width: 0 !important;
          }
        }
      `}</style>
    </footer>
  );
}


