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
    </div>
  );
}
