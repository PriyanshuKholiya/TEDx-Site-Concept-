import { useState } from "react";

export default function Registration() {
  const [registered, setRegistered] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setRegistered(true);
  }

  return (
    <div className="page registration">
      <h1>Register for TED<span style={{color:'#e62b1e'}}>x</span>UPES</h1>
      <div className="upes-gradient-bar section-bar" />
      {registered ? (
        <div style={{
          background: "#222",
          color: "#e62b1e",
          padding: "1.2rem 2rem",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "1.2rem",
          margin: "2rem auto",
          maxWidth: "400px",
          boxShadow: "0 2px 8px #0003",
          textAlign: "center"
        }}>
          🎉 Successfully registered for TEDxUPES!<br />Check your email for confirmation.
        </div>
      ) : (
        <form
          style={{
            maxWidth: "400px",
            margin: "2rem auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}
          onSubmit={handleSubmit}
        >
          <input type="text" placeholder="Full Name" required style={{padding:'0.7rem',borderRadius:'4px',border:'none'}} />
          <input type="email" placeholder="Email" required style={{padding:'0.7rem',borderRadius:'4px',border:'none'}} />
          <input type="text" placeholder="University/College" required style={{padding:'0.7rem',borderRadius:'4px',border:'none'}} />
          <button type="submit" style={{background:'#e62b1e',color:'#fff',padding:'0.7rem',border:'none',borderRadius:'4px',fontWeight:'bold'}}>Register</button>
        </form>
      )}
    </div>
  );
}
