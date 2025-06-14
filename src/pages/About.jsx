export default function About() {
  return (
    <div className="page about" style={{minHeight: "70vh", maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h1>About TED<span style={{color:'#e62b1e'}}>x</span>UPES</h1>
      <div className="upes-gradient-bar section-bar" />
      <p>
        TEDxUPES is an independently organized TED event at the University of Petroleum and Energy Studies, Dehradun. Our mission is to share ideas worth spreading and foster a culture of innovation and inspiration.
      </p>
      <p>
        We bring together thinkers, doers, and visionaries from diverse backgrounds to ignite conversations and inspire action. Our platform celebrates creativity, curiosity, and the power of storytelling.
      </p>
      <p>
        At TEDxUPES, you will experience a day filled with thought-provoking talks, interactive sessions, and opportunities to connect with like-minded individuals. Whether you are a student, professional, or lifelong learner, TEDxUPES is your gateway to new perspectives and transformative ideas.
      </p>
      <div style={{height: "2rem"}}></div>
      <div style={{color: "#e62b1e", fontWeight: "bold", fontSize: "1.2rem"}}>
        Join us in our journey to spark change and bridge realities!
      </div>
      <div style={{height: "3rem"}}></div>
    </div>
  );
}
