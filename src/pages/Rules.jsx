export default function Rules() {
  return (
    <div className="page rules" style={{minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h1>Event Rules & Guidelines</h1>
      <div className="animated-gradient-divider section-bar" />
      <ul style={{maxWidth:'600px',margin:'2rem auto',fontSize:'1.1rem',color:'inherit', textAlign:'left', lineHeight: 1.7}}>
        <li>All attendees must register prior to the event.</li>
        <li>Maintain decorum and respect all speakers and participants.</li>
        <li>No recording or live streaming without permission.</li>
        <li>Follow all safety protocols as applicable.</li>
        <li>Contact the organizing team for any queries.</li>
      </ul>
      <div style={{margin: "2.5rem 0 1.5rem 0", width: "100%", maxWidth: 700}}>
        <h2 style={{fontSize: "1.25rem", marginBottom: "1rem", color: "#e62b1e"}}>Find Us</h2>
        <div style={{borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 16px #0002"}}>
          <iframe
            title="SGNS School Location"
            src="https://www.google.com/maps?q=Shanti+Gyan+Niketan+Sr.+Sec.+Public+School,+Goyla+Dairy+Road,+Near+Punjab+National+Bank,+Goyla+Khurd,+Delhi+110071&output=embed"
            width="100%"
            height="340"
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div style={{marginTop: "0.7rem", fontSize: "1rem", color: "#444"}}>
          <strong>Address:</strong> Shanti Gyan Niketan Sr. Sec. Public School, Goyla Dairy Road, Near Punjab National Bank, Goyla Khurd, Delhi 110071
        </div>
      </div>
    </div>
  );
}
