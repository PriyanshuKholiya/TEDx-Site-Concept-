import React from "react";

const speakers = [
  { name: "Aanchal Jain", title: "title", img: "/Speakers/AanchalJain.jpg", desc: "" },
  { name: "Akanksha Madan", title: "title", img: "/Speakers/AkankshaMadan.jpg", desc: "" },
  { name: "Avika Jain", title: "title", img: "/Speakers/AvikaJain.jpg", desc: "" },
  { name: "Avirat Jain", title: "title", img: "/Speakers/AviratJain.jpg", desc: "" },
  { name: "Dr. Atul Mehta", title: "title", img: "/Speakers/Dr.AtulMehta.jpg", desc: "" },
  { name: "Dr. Kiran Swami", title: "title", img: "/Speakers/Dr.KiranSwami.jpg", desc: "" },
  { name: "Dr. Mala Dasgupta Sengupta", title: "title", img: "/Speakers/Dr.MalaDasguptaSengupta.jpg", desc: "" },
  { name: "Dr. Samiksha Borele", title: "title", img: "/Speakers/Dr.SamikshaBorele.jpg", desc: "" },
  { name: "Dr. Shankar Goenka", title: "title", img: "/Speakers/Dr.ShankarGoenka.jpg", desc: "" },
  { name: "Dr. Varsha Jain", title: "title", img: "/Speakers/Dr.VarshaJain.jpg", desc: "" },
  { name: "Mahira Juneja", title: "title", img: "/Speakers/MahiraJuneja.jpg", desc: "" },
  { name: "Maithreye Murali", title: "title", img: "/Speakers/MaithreyeMurali.jpg", desc: "" },
  { name: "Mamta Chander Chandani", title: "title", img: "/Speakers/MamtaChanderChandani.jpg", desc: "" },
  { name: "Mamta Singh", title: "title", img: "/Speakers/MamtaSingh.jpg", desc: "" },
  { name: "Meenakshi Saroha", title: "title", img: "/Speakers/MeenakshiSaroha.jpg", desc: "" },
  { name: "Minshu Garg", title: "title", img: "/Speakers/MinshuGarg.jpg", desc: "" },
  { name: "Praveen K Shukla", title: "title", img: "/Speakers/PraveenKShukla.jpg", desc: "" },
  { name: "Prof. Dr. Parin Somani", title: "title", img: "/Speakers/Prof.Dr.ParinSomani.jpg", desc: "" },
  { name: "Sahil Makkar", title: "title", img: "/Speakers/SahilMakkar.jpg", desc: "" },
  { name: "Sarita Tripathy", title: "title", img: "/Speakers/SaritaTripathy.jpg", desc: "" },
  { name: "Sayesha Khurana", title: "title", img: "/Speakers/SayeshaKhurana.jpg", desc: "" },
  { name: "Sonal Agarwal Rawat", title: "title", img: "/Speakers/SonalAgarwalRawat.jpg", desc: "" },
  { name: "Soumya Dhani", title: "title", img: "/Speakers/SoumyaDhani.jpg", desc: "" },
  { name: "Sushmita Tripathi", title: "title", img: "/Speakers/SushmitaTripathi.jpg", desc: "" },
  { name: "Tiyana Borele", title: "title", img: "/Speakers/TiyanaBorele.jpg", desc: "" },
  { name: "Vanshika Arora", title: "title", img: "/Speakers/VanshikaArora.jpg", desc: "" },
  { name: "Vikash Gupta", title: "title", img: "/Speakers/VikashGupta.jpg", desc: "" }
];

export default function Speakers() {
  return (
    <div className="page speakers">
      <h1 style={{ color: "#e62b1e", marginTop: '2.2rem', fontSize: '2rem', fontWeight: 900, letterSpacing: '1px', textAlign: 'center' }}>Our Eminent Speakers</h1>
      <div className="animated-gradient-divider section-bar" />
      <section style={{ margin: "2.5rem 0 0 0", width: "100%" }}>
        <div
          className="speakers-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            padding: "2rem 0 2rem 0",
            margin: "0 auto",
            maxWidth: "1200px",
            width: "100%",
            justifyItems: "center"
          }}
        >
          {speakers.map((sp, i) => (
            <div
              key={i}
              className="speaker-card"
              style={{
                background: '#111',
                color: '#fff',
                borderRadius: '18px',
                boxShadow: '0 8px 32px #000b',
                border: '1.5px solid #232323',
                padding: 0,
                width: '100%',
                minWidth: '0',
                maxWidth: '100%',
                height: 'auto',
                textAlign: 'left',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch'
              }}
            >
              <div style={{
                width: '100%',
                height: '380px',
                borderRadius: '18px 18px 0 0',
                overflow: 'hidden',
                background: '#222',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <img
                  src={sp.img}
                  alt={sp.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '18px 18px 0 0',
                    background: '#222',
                    display: 'block',
                    maxHeight: '380px',
                    aspectRatio: '1/1',
                    minHeight: '100%',
                    minWidth: '100%',
                  }}
                />
              </div>
              <div style={{
                width: '100%',
                background: 'rgba(24,24,24,0.92)',
                padding: '1.2rem 1.2rem 1.2rem 1.2rem',
                boxSizing: 'border-box',
                borderRadius: '0 0 18px 18px',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <div style={{ fontSize: '1.25rem', color: '#e62b1e', fontWeight: 700, marginBottom: '0.3rem', lineHeight: 1.3 }}>
                  {sp.desc}
                </div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>{sp.name}</div>
                <div style={{ color: '#e62b1e', fontWeight: 500, fontSize: '1rem' }}>{sp.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

