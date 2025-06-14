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
      <div className="upes-gradient-bar section-bar" />
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
              background: '#232323',
              color: '#fff',
              borderRadius: '12px',
              boxShadow: '0 2px 16px #0005',
              border: '1px solid #232323',
              padding: '2rem 1.5rem 1.5rem 1.5rem',
              width: '240px',
              textAlign: 'center',
              transition: 'box-shadow 0.2s, transform 0.2s'
            }}
          >
            <img
              src={sp.img}
              alt={sp.name}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '1.2rem',
                border: '3px solid #222'
              }}
            />
            <h3 style={{ color: '#e62b1e', marginBottom: '0.5rem', fontWeight: 700 }}>{sp.name}</h3>
            <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#bbb' }}>{sp.title}</div>
            <div style={{ fontSize: '0.98rem', color: '#eee' }}>{sp.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
