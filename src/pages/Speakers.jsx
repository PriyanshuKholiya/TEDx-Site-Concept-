import React from "react";

const speakers = [
  { name: "Aanchal Jain", title: "title", img: "/Speakers/AanchalJain.jpg", desc: "description for speaker 1" },
  { name: "Akanksha Madan", title: "title", img: "/Speakers/AkankshaMadan.jpg", desc: "description for speaker 2" },
  { name: "Avika Jain", title: "title", img: "/Speakers/AvikaJain.jpg", desc: "description for speaker 3" },
  { name: "Avirat Jain", title: "title", img: "/Speakers/AviratJain.jpg", desc: "description for speaker 4" },
  { name: "Dr. Atul Mehta", title: "title", img: "/Speakers/Dr.AtulMehta.jpg", desc: "description for speaker 5" },
  { name: "Dr. Kiran Swami", title: "title", img: "/Speakers/Dr.KiranSwami.jpg", desc: "description for speaker 6" },
  { name: "Dr. Mala Dasgupta Sengupta", title: "title", img: "/Speakers/Dr.MalaDasguptaSengupta.jpg", desc: "description for speaker 7" },
  { name: "Dr. Samiksha Borele", title: "title", img: "/Speakers/Dr.SamikshaBorele.jpg", desc: "description for speaker 8" },
  { name: "Dr. Shankar Goenka", title: "title", img: "/Speakers/Dr.ShankarGoenka.jpg", desc: "description for speaker 27" },
  { name: "Dr. Varsha Jain", title: "title", img: "/Speakers/Dr.VarshaJain.jpg", desc: "description for speaker 9" },
  { name: "Mahira Juneja", title: "title", img: "/Speakers/MahiraJuneja.jpg", desc: "description for speaker 10" },
  { name: "Maithreye Murali", title: "title", img: "/Speakers/MaithreyeMurali.jpg", desc: "description for speaker 11" },
  { name: "Mamta Chander Chandani", title: "title", img: "/Speakers/MamtaChanderChandani.jpg", desc: "description for speaker 12" },
  { name: "Mamta Singh", title: "title", img: "/Speakers/MamtaSingh.jpg", desc: "description for speaker 13" },
  { name: "Meenakshi Saroha", title: "title", img: "/Speakers/MeenakshiSaroha.jpg", desc: "description for speaker 14" },
  { name: "Minshu Garg", title: "title", img: "/Speakers/MinshuGarg.jpg", desc: "description for speaker 15" },
  { name: "Praveen K Shukla", title: "title", img: "/Speakers/PraveenKShukla.jpg", desc: "description for speaker 16" },
  { name: "Prof. Dr. Parin Somani", title: "title", img: "/Speakers/Prof.Dr.ParinSomani.jpg", desc: "description for speaker 17" },
  { name: "Sahil Makkar", title: "title", img: "/Speakers/SahilMakkar.jpg", desc: "description for speaker 18" },
  { name: "Sarita Tripathy", title: "title", img: "/Speakers/SaritaTripathy.jpg", desc: "description for speaker 19" },
  { name: "Sayesha Khurana", title: "title", img: "/Speakers/SayeshaKhurana.jpg", desc: "description for speaker 20" },
  { name: "Sonal Agarwal Rawat", title: "title", img: "/Speakers/SonalAgarwalRawat.jpg", desc: "description for speaker 21" },
  { name: "Soumya Dhani", title: "title", img: "/Speakers/SoumyaDhani.jpg", desc: "description for speaker 22" },
  { name: "Sushmita Tripathi", title: "title", img: "/Speakers/SushmitaTripathi.jpg", desc: "description for speaker 23" },
  { name: "Tiyana Borele", title: "title", img: "/Speakers/TiyanaBorele.jpg", desc: "description for speaker 24" },
  { name: "Vanshika Arora", title: "title", img: "/Speakers/VanshikaArora.jpg", desc: "description for speaker 25" },
  { name: "Vikash Gupta", title: "title", img: "/Speakers/VikashGupta.jpg", desc: "description for speaker 26" }
  
];

export default function Speakers() {
  return (
    <div className="page speakers">
      <h1 style={{ color: "#e62b1e" }}>Our Eminent Speakers</h1>
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
            width: "100%"
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
                height: '320px',
                aspectRatio: '1 / 1',
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
                    background: '#222'
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

