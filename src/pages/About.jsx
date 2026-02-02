import React from 'react';

// Reusable Component for consistent look
const SectionCard = ({ title, children }) => (
  <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 text-center hover:shadow-[0_8px_30px_rgb(230,43,30,0.1)] transition-shadow duration-300">
    <h2 className="text-2xl md:text-3xl font-bold text-ted-red mb-8 uppercase tracking-wide">
      {title}
    </h2>
    <div className="text-gray-700 text-lg leading-loose space-y-6 text-justify">
      {children}
    </div>
  </div>
);

export default function About() {
  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans py-16 px-4">
      
      {/* Page Header */}
      <div className="text-center mb-16">
        <div className="text-ted-red font-bold tracking-widest uppercase mb-2 text-sm md:text-base">
          About
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight">
          About TED<span className="text-ted-red">x</span>SGNS Youth
        </h1>
        {/* Gradient Divider */}
        <div className="h-1.5 w-24 mx-auto rounded-full bg-gradient-to-r from-orange-400 via-ted-red to-pink-500" />
      </div>

      <div className="max-w-5xl mx-auto space-y-16 relative">
        
        {/* Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] opacity-[0.03] pointer-events-none z-0">
           <img src="/image3.jpg" alt="Watermark" className="w-full h-full object-contain" />
        </div>

        {/* Section 1: About SGNS */}
        <div className="relative z-10">
          <SectionCard title="About SGNS">
            <p>
              Shanti Gyan Niketan Sr. Sec. School, the proud host of TEDxSGNS Youth, has been a leading institution in nurturing holistic development for decades. Situated in the heart of Dwarka, the school combines academic excellence with a culture of social responsibility and innovation. Our institution believes that meaningful change begins with empowered young minds — and TEDxSGNS Youth is a manifestation of that belief.
            </p>
            <p>
              Shanti Gyan Niketan Sr. Sec. Public School (SGNS), established in 1989, stands as a beacon of academic excellence and holistic development in the region. Founded by the visionary Shri Raj Kumar Khurana, SGNS was born from a dream to provide value-based education that empowers students not only intellectually but also morally and socially. Over the decades, SGNS has cultivated an environment where tradition meets innovation.
            </p>
            <p>
              In alignment with its vision of empowering young voices and creating platforms for transformative dialogue, SGNS is now proud to host the TEDxSGNS Youth event—an initiative that truly reflects the spirit of forward-thinking and global engagement. This landmark event will bring together bright young minds, thought leaders, and changemakers to share powerful stories and fresh ideas that challenge perspectives and ignite curiosity.
            </p>
          </SectionCard>
        </div>

        {/* Transitional Text */}
        <div className="text-center relative z-10">
             <div className="inline-block px-6 py-2 rounded-full bg-red-50 text-ted-red font-bold text-lg md:text-xl shadow-sm border border-red-100">
               Join us as we push thinking past the familiar and go Beyond Obvious.
             </div>
        </div>

        {/* Section 2: Theme */}
        <div className="relative z-10">
          <SectionCard title="Theme: Beyond Obvious">
            <p>
              Beyond Obvious is an open and inclusive theme focused on youth, inviting speakers and audiences to move beyond first impressions, accepted narratives, and surface-level thinking toward deeper insight, fresh perspective, and meaningful possibility. It strongly reflects the spirit of Ideas Worth Spreading, creating space for ideas that challenge assumptions and reframe how we see ourselves and the world around us.
            </p>
            <p>
              Intentionally expansive, Beyond Obvious welcomes ideas from all walks of life—across science and art, technology and tradition, education, entrepreneurship, social change, and lived experience—so long as they push thinking past the familiar. This theme calls on speakers to explore the "why" beneath the "what" and the possibility beneath the problem.
            </p>
            <p>
              To go "Beyond Obvious" is to challenge the world as it appears and illuminate what lies beneath. It is an invitation to the unconventional misfits and the unheard narratives to take the spotlight. By doing so, we aim to foster environments where everyone has the right to move past surface-level interactions and engage with the true essence of ideas.
            </p>
            <p className="font-semibold text-gray-900">
              With talks that challenge norms and stories that expand horizons, "Beyond Obvious" becomes more than just a theme—it becomes a transformative experience that redefines how we lead, learn, create, and connect.
            </p>
          </SectionCard>
        </div>

      </div>
    </div>
  );
}