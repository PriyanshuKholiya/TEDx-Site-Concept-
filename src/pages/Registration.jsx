import React from 'react';

export default function Nomination() {
  // Handler for closed nominations popup
  const handleClosed = (e) => {
    e.preventDefault();
    window.alert('Nominations are now closed');
  };

  return (
    <div className="page nomination" style={{ textAlign: 'center', marginTop: '4rem', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Nominations are now closed, thank you for visiting.</h1>
      <div className="animated-gradient-divider section-bar" />
      <p style={{ maxWidth: 600, margin: '1.5rem auto', fontSize: '1.15rem' }}>
        We appreciate your interest in TEDxSGNS Youth.<br />
        Please stay tuned for future opportunities and updates.
      </p>
      <button
        style={{
          display: 'inline-block',
          margin: '2rem 0',
          padding: '1rem 2rem',
          background: '#e62b1e',
          color: '#fff',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          border: 'none',
          cursor: 'pointer'
        }}
        onClick={handleClosed}
      >
        Nominations are now closed
      </button>
    </div>
  );
}
