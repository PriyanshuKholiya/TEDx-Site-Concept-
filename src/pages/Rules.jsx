export default function Rules() {
  return (
    <div className="page rules" style={{minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h1>Event Rules & Guidelines</h1>
      <div className="animated-gradient-divider section-bar" style={{ marginTop: "0.2rem", marginBottom: "1.1rem" }} />
      <ul style={{
        maxWidth: '900px',
        margin: '2rem auto',
        fontSize: '1.1rem',
        color: 'inherit',
        textAlign: 'left',
        lineHeight: 1.7
      }}>
        <li>All attendees must register prior to the event.</li>
        <li>Maintain decorum and respect all speakers and participants.</li>
        <li>No recording or live streaming without permission.</li>
        <li>Follow all safety protocols as applicable.</li>
        <li>Contact the organizing team for any queries.</li>
      </ul>
      <h1 style={{marginTop: "4rem"}}>Safety & Security</h1>
      <div className="animated-gradient-divider section-bar" style={{ marginTop: "0.2rem", marginBottom: "1.1rem" }} />
      <ul style={{
        maxWidth: '900px',
        margin: '2rem auto',
        fontSize: '1.1rem',
        color: 'inherit',
        textAlign: 'left',
        lineHeight: 1.7
      }}>
        <li>As security checks are conducted, kindly assist the police and private security officers.</li>
        <li>To protect your safety, the organisers reserve the right to stop and search anyone entering the event.</li>
        <li>Consuming any illegal substances is strictly prohibited.</li>
        <li>It is completely forbidden to carry food, drink, cigarettes, firearms, inflammables, and illegal drugs.</li>
        <li>The organiser disclaims liability for any injury, loss, or theft of the ticket holder's personal property.</li>
        <li>If there is any type of behavioural infraction, any person may be asked to leave the venue without being responsible for a refund. This choice is final and legally binding and lies with the conference and venue management.</li>
        <li>Attendees are expected to follow all general venue and attendee guidelines.</li>
      </ul>
    </div>
  );
}
