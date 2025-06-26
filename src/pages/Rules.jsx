import React from "react";

export default function Rules() {
  return (
    <div
      className="page rules"
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "3rem",
        paddingBottom: "3rem"
      }}
    >
      <h1 style={{
        fontWeight: 800,
        fontSize: "2.5rem",
        textAlign: "center",
        marginBottom: "0.7rem",
        letterSpacing: "1px"
      }}>
        Event Rules & Guidelines
      </h1>
      <div
        className="animated-gradient-divider section-bar"
        style={{
          marginTop: "0.2rem",
          marginBottom: "1.1rem",
          width: "220px",
          maxWidth: "90vw"
        }}
      />
      <ul
        style={{
          maxWidth: '700px',
          margin: '2rem auto 0 auto',
          fontSize: '1.18rem',
          color: 'inherit',
          textAlign: 'left',
          lineHeight: 1.7,
          paddingLeft: "2.2rem"
        }}
      >
        <li>All attendees must register prior to the event.</li>
        <li>Maintain decorum and respect all speakers and participants.</li>
        <li>No recording or live streaming without permission.</li>
        <li>Follow all safety protocols as applicable.</li>
        <li>Contact the organizing team for any queries.</li>
      </ul>
      <h1
        style={{
          marginTop: "4.5rem",
          fontWeight: 800,
          fontSize: "2.2rem",
          textAlign: "center",
          marginBottom: "0.7rem",
          letterSpacing: "1px"
        }}
      >
        Safety & Security
      </h1>
      <div
        className="animated-gradient-divider section-bar"
        style={{
          marginTop: "0.2rem",
          marginBottom: "1.1rem",
          width: "220px",
          maxWidth: "90vw"
        }}
      />
      <ul
        style={{
          maxWidth: '700px',
          margin: '2rem auto 0 auto',
          fontSize: '1.18rem',
          color: 'inherit',
          textAlign: 'left',
          lineHeight: 1.7,
          paddingLeft: "2.2rem"
        }}
      >
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
