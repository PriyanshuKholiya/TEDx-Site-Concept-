import React from 'react';

export default function Nomination() {
  return (
    <div className="page nomination" style={{ textAlign: 'center', marginTop: '4rem', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Nominate Now for TEDxSGNS Youth</h1>
      <div className="upes-gradient-bar section-bar" />
      <p style={{ maxWidth: 600, margin: '1.5rem auto', fontSize: '1.15rem' }}>
      <br />
        If you wish to nominate someone for TEDxSGNS Youth, please use the link below:
      </p>
      <a
        href="https://forms.gle/BwBRU2YL4W51ocfQ7"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          margin: '2rem 0',
          padding: '1rem 2rem',
          background: '#e62b1e',
          color: '#fff',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.2rem'
        }}
      >
        Go to Nomination Form
      </a>
      <p>
        <small>
          If the link does not open, copy and paste this URL into your browser:<br />
          https://forms.gle/BwBRU2YL4W51ocfQ7
        </small>
      </p>
    </div>
  );
}
