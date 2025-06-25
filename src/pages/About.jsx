export default function About() {
  return (
    <div className="page about" style={{minHeight: "70vh", maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative"}}>
      <div style={{position: "relative", zIndex: 1, width: "100%"}}>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 800, textAlign: 'center', marginBottom: '2rem' }}>
          About TED<span style={{color:'#e62b1e'}}>x</span>SGNS Youth
        </h1>
        <div className="animated-gradient-divider section-bar" />
        <div style={{ position: "relative", width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          {/* Watermark logo in the center, behind About SGNS content */}
          <img
            src="image3.jpg"
            alt="TEDxSGNS Youth Logo Watermark"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "340px",
              height: "340px",
              opacity: 0.20,
              pointerEvents: "none",
              zIndex: 0,
              objectFit: "contain",
              userSelect: "none"
            }}
          />
          <div style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 900,
            margin: '0 auto',
            textAlign: 'center',
            fontSize: '1.25rem',
            color: '#222',
            fontWeight: 400,
            lineHeight: 1.5
          }}>
            <p>
              <strong>About SGNS</strong><br />
              Shanti Gyan Niketan Sr. Sec. School, the proud host of TEDxSGNS Youth, has been a leading institution in nurturing holistic development for decades. Situated in the heart of Dwarka, the school combines academic excellence with a culture of social responsibility and innovation. Our institution believes that meaningful change begins with empowered young minds — and TEDxSGNS Youth is a manifestation of that belief.
            </p>
            <p>
              Shanti Gyan Niketan Sr. Sec. Public School (SGNS), established in 1989, stands as a beacon of academic excellence and holistic development in the region. Founded by the visionary Shri Raj Kumar Khurana, SGNS was born from a dream to provide value-based education that empowers students not only intellectually but also morally and socially. Over the decades, SGNS has cultivated an environment where tradition meets innovation. The school has consistently delivered stellar results in CBSE board examinations, along with notable achievements in national-level competitive exams like NEET and JEE. At the same time, the institution emphasizes character-building, leadership, sportsmanship, and creativity through a rich array of co-curricular activities. With a dedicated leadership team, dynamic faculty, and a progressive vision, SGNS continues to mold young minds into responsible citizens who are equipped to contribute meaningfully to society. The school’s motto is not just to teach, but to inspire—and this has remained its guiding force for over 35 years.
            </p>
            <p>
              In alignment with its vision of empowering young voices and creating platforms for transformative dialogue, SGNS is now proud to host the TEDxSGNS Youth event—an initiative that truly reflects the spirit of forward-thinking and global engagement. This landmark event will bring together bright young minds, thought leaders, and changemakers to share powerful stories and fresh ideas that challenge perspectives and ignite curiosity. TEDxSGNS Youth is more than just an event; it is a celebration of ideas worth spreading, curated with the passion and purpose that SGNS has always stood for. By providing students and the wider community with an opportunity to engage in meaningful conversations, the event reinforces SGNS's commitment to nurturing future-ready individuals who are not only academically equipped but also socially aware and globally connected. TEDxSGNS Youth marks a new chapter in the institution’s legacy—where learning goes beyond classrooms and ideas take center stage.
            </p>
          </div>
        </div>
        <div style={{height: "2rem"}}></div>
        <div style={{color: "#e62b1e", fontWeight: "bold", fontSize: "1.2rem"}}>
          Join us in our journey to spark change and reimagine diversity!
        </div>
        <div style={{height: "3rem"}}></div>
        <section className="theme-section">
          <h2 style={{ textAlign: 'center', fontWeight: 800, fontSize: '2.4rem', marginTop: '2.5rem', marginBottom: '2rem' }}>
            Theme: <span style={{ color: '#e62b1e' }}>Reimagine Diversity</span>
          </h2>
          <div className="upes-gradient-bar" style={{ width: '60%', height: '8px', margin: '1.2rem auto 2.2rem auto', borderRadius: '6px' }} />
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', fontSize: '1.25rem', color: '#222', fontWeight: 400, lineHeight: 1.5 }}>
            This year’s theme, "Reimagine Diversity," is not just a call to reflect — it's a challenge to reconstruct, and revolutionize how we understand inclusion and identity in a changing world. It goes far beyond checklists or superficial representation. It's about creating spaces where difference is not just accepted but celebrated as the very foundation of creativity, resilience, and growth.<br /><br />
            To "reimagine" is to move past inherited assumptions — about race, gender, ability, culture, orientation, economic background, or learning style — and to embrace the possibility that true innovation emerges from the intersections of our varied experiences. Whether it's within classrooms, workplaces, homes, or communities, the theme encourages us to see diversity as a mindset — a lens through which we approach problem-solving, leadership, empathy, and storytelling.<br /><br />
            "Reimagine Diversity" dares us to look at what has been invisible: the quiet voices, the unconventional misfits, the unheard narratives — and bring them into the spotlight. It is a theme that opens up conversations about neurodiversity, intersectionality, global cultures, gender fluidity, differing abilities, and more. By doing so, we aim to foster environments where everyone has the right not just to participate, but to thrive.<br /><br />
            The theme is especially timely in a world where the boundaries of identity are increasingly fluid and the need for empathy, understanding, and equity has never been greater. At TEDxSGNS Youth, we hope to transform where young changemakers, innovators, creators, and dreamers come together to redefine what inclusion looks like — and to spark a movement that values differences not as obstacles, but as opportunities.<br /><br />
            With talks that challenge norms, ideas that defy stereotypes, and stories that expand horizons, "Reimagine Diversity" becomes more than just a theme — it becomes a transformative experience. One that redefines how we lead, learn, create, and connect.
          </div>
        </section>
      </div>
    </div>
  );
}
