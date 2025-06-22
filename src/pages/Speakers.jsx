const speakers = [
  {
    name: "Dr. Asha Sharma",
    title: "AI Researcher",
    img: "https://images.pexels.com/photos/1181696/pexels-photo-1181696.jpeg?auto=compress&w=256&h=256&fit=facearea&facepad=2",
    desc: "Exploring the future of artificial intelligence in education."
  },
  {
    name: "Rahul Verma",
    title: "Entrepreneur",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=256&h=256&fit=facearea&facepad=2",
    desc: "Building sustainable startups in India."
  },
  {
    name: "Priya Singh",
    title: "Climate Activist",
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&w=256&h=256&fit=facearea&facepad=2",
    desc: "Youth leadership in climate action."
  },
  {
    name: "Amitabh Joshi",
    title: "Tech Visionary",
    img: "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=256&h=256&fit=facearea&facepad=2",
    desc: "Innovating for a digital India."
  },
  {
    name: "Sunita Patel",
    title: "Social Worker",
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=256&h=256&fit=facearea&facepad=2",
    desc: "Empowering rural communities."
  },
  {
    name: "Dr. Kavita Rao",
    title: "Educationist",
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&w=256&h=256&fit=facearea&facepad=2",
    desc: "Transforming higher education in India."
  },
  {
    name: "Manoj Nair",
    title: "Business Leader",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&w=256&h=256&fit=facearea&facepad=2",
    desc: "Driving innovation in Indian enterprises."
  },
  {
    name: "Meena Kumari",
    title: "Healthcare Advocate",
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=256&h=256&fit=facearea&facepad=2",
    desc: "Championing public health initiatives."
  },
  {
    name: "Suresh Iyer",
    title: "Tech Educator",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=256&h=256&fit=facearea&facepad=2",
    desc: "Bridging the digital divide."
  }
];

export default function Speakers() {
  return (
    <div className="page speakers">
      <h1>Meet Our Speakers</h1>
      <div className="animated-gradient-divider section-bar" />
      <div
        className="speakers-list"
        style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          background: '#181818',
          borderRadius: '18px',
          padding: '2.5rem 1.5rem',
          marginBottom: '2rem'
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
              padding: '1.2rem 1.2rem 1.2rem 1.2rem',
              width: '320px',
              minHeight: '420px',
              textAlign: 'left',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'stretch'
            }}
          >
            <div style={{
              width: '100%',
              height: '180px',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '1.2rem',
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
                  filter: 'grayscale(0) contrast(1.1)',
                }}
              />
            </div>
            <div style={{ fontSize: '2.5rem', color: '#e62b1e', fontWeight: 900, marginBottom: '1.2rem', lineHeight: 1 }}>&ldquo;</div>
            <div style={{ fontSize: '1.25rem', color: '#e62b1e', fontWeight: 700, marginBottom: '2.2rem', lineHeight: 1.3 }}>
              {sp.desc}
            </div>
            <div style={{ marginTop: 'auto' }}>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>{sp.name}</div>
              <div style={{ color: '#e62b1e', fontWeight: 500, fontSize: '1rem' }}>{sp.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
