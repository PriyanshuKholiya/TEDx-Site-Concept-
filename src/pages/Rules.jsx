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
        paddingTop: "2rem",
        paddingBottom: "2rem",
        paddingLeft: '0.7rem',
        paddingRight: '0.7rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        background: '#fff'
      }}
    >
      <h1 style={{
        fontWeight: 900,
        fontSize: "2rem",
        textAlign: "center",
        marginBottom: "1.2rem",
        letterSpacing: "1px",
        color: '#e62b1e',
        fontFamily: 'Montserrat, Arial, sans-serif'
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
          fontSize: '1.08rem',
          color: '#222',
          textAlign: 'left',
          lineHeight: 1.7,
          paddingLeft: '1.2rem',
          background: 'rgba(255,255,255,0.97)',
          borderRadius: '10px',
          boxShadow: '0 2px 12px #e62b1e11',
          fontFamily: 'Montserrat, Arial, sans-serif',
          padding: '1.1rem 1.2rem',
          marginBottom: '2.2rem',
          listStyle: 'none'
        }}
      >
        {[
          'All attendees must register prior to the event.',
          'Maintain decorum and respect all speakers and participants.',
          'No recording or live streaming without permission.',
          'Follow all safety protocols as applicable.',
          'Contact the organizing team for any queries.'
        ].map((rule, idx) => (
          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.7rem' }}>
            <span style={{
              display: 'inline-block',
              width: '0.85em',
              height: '0.85em',
              background: '#e62b1e',
              borderRadius: '50%',
              marginRight: '1em',
              marginTop: '0.45em',
              flexShrink: 0
            }}></span>
            <span>{rule}</span>
          </li>
        ))}
      </ul>
      <h1
        style={{
          marginTop: "3.5rem",
          fontWeight: 900,
          fontSize: "1.5rem",
          textAlign: "center",
          marginBottom: "1.2rem",
          letterSpacing: "1px",
          color: '#e62b1e',
          fontFamily: 'Montserrat, Arial, sans-serif'
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
          fontSize: '1.08rem',
          color: '#222',
          textAlign: 'left',
          lineHeight: 1.7,
          paddingLeft: "1.2rem",
          background: 'rgba(255,255,255,0.97)',
          borderRadius: '10px',
          boxShadow: '0 2px 12px #e62b1e11',
          fontFamily: 'Montserrat, Arial, sans-serif',
          padding: '1.1rem 1.2rem',
          marginBottom: '2.2rem',
          listStyle: 'none'
        }}
      >
        {[
          'As security checks are conducted, kindly assist the police and private security officers.',
          'To protect your safety, the organisers reserve the right to stop and search anyone entering the event.',
          'Consuming any illegal substances is strictly prohibited.',
          'It is completely forbidden to carry food, drink, cigarettes, firearms, inflammables, and illegal drugs.',
          'The organiser disclaims liability for any injury, loss, or theft of the ticket holder\'s personal property.',
          'If there is any type of behavioural infraction, any person may be asked to leave the venue without being responsible for a refund. This choice is final and legally binding and lies with the conference and venue management.',
          'Attendees are expected to follow all general venue and attendee guidelines.'
        ].map((rule, idx) => (
          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.7rem' }}>
            <span style={{
              display: 'inline-block',
              width: '0.85em',
              height: '0.85em',
              background: '#e62b1e',
              borderRadius: '50%',
              marginRight: '1em',
              marginTop: '0.45em',
              flexShrink: 0
            }}></span>
            <span>{rule}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
