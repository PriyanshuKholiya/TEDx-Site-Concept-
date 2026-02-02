import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";

// --- Internal Component: Hero Counter ---
const HeroCounter = ({ targetDate }) => {
  const calculateTime = () => {
    const diff = targetDate - new Date();
    return {
      days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTime()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="flex flex-col items-center mt-12 mb-20 w-full animate-fade-in">
      <div className="text-2xl font-black text-gray-900 mb-8 tracking-widest text-center uppercase relative">
        The Stage Awaits In
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-ted-red rounded-full"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="group bg-white border border-gray-100 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 p-6 flex flex-col items-center min-w-[100px] md:min-w-[140px]">
            <div className="text-4xl md:text-6xl font-black text-ted-red mb-2 tabular-nums">
              {String(value).padStart(2, '0')}
            </div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Internal Component: Modern Section with Light Boxes ---
const ModernSection = ({ title, highlight, children, reverse = false }) => (
  <div className="py-10 md:py-14 px-4">
    <div className={`max-w-6xl mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}>
      <div className={`w-full md:w-2/5 ${reverse ? 'md:text-right' : 'md:text-left'} space-y-2`}>
        <div className={`w-12 h-1 bg-ted-red mb-4 ${reverse ? 'md:ml-auto' : ''}`}></div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight text-gray-900">
          {title} <br/>
          <span className="text-ted-red">{highlight}</span>
        </h2>
      </div>
      <div className="w-full md:w-3/5 group">
        <div className="bg-white text-gray-600 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 p-8 md:p-12 rounded-[2.5rem] transition-all duration-500 relative z-10 text-lg md:text-xl leading-relaxed font-medium">
          {children}
        </div>
      </div>
    </div>
  </div>
);

// --- Internal Component: Full Width Info Section (Restored for Theme) ---
const InfoSectionFull = ({ title, highlight, children }) => (
  <div className="bg-black text-white rounded-[3rem] p-8 md:p-16 shadow-2xl hover:shadow-black/30 transition-all duration-500 w-full max-w-6xl mx-auto mb-20 relative overflow-hidden group border border-white/5">
    <div className="absolute top-0 left-0 w-2 h-full bg-ted-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
    <h2 className="text-4xl md:text-5xl font-black mb-8">
      {title} <span className="text-ted-red">{highlight}</span>
    </h2>
    <div className="text-gray-300 leading-loose text-lg md:text-xl font-medium space-y-6 text-justify md:text-left relative z-10">
      {children}
    </div>
  </div>
);

export default function Home() {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  const speakers2026 = [
    { name: "Anaya Kapur", img: "/speakers2026/1.png" },
    { name: "Anupama Luthra", img: "/speakers2026/2.png" },
    { name: "Dr. Akansha Jain", img: "/speakers2026/3.png" },
    { name: "Dr. Arvind Kumar", img: "/speakers2026/4.png" },
    { name: "Dr. Harmeet Singh Arora", img: "/speakers2026/5.png" },
    { name: "Dr. Purvi Jayaaraaj", img: "/speakers2026/6.png" },
    { name: "Dr. Poonam", img: "/speakers2026/7.png" },
    { name: "Dr. Shankar Goenka", img: "/speakers2026/8.png" },
    { name: "Dr. Sonu Prasad", img: "/speakers2026/9.png" },
    { name: "Janki Nirmal Pandya", img: "/speakers2026/10.png" },
    { name: "King Kaling Porwal", img: "/speakers2026/11.png" },
    { name: "Megha Narula", img: "/speakers2026/12.png" },
    { name: "Mehtej Singh Sahni", img: "/speakers2026/13.png" },
    { name: "Monica Sodhi", img: "/speakers2026/14.png" },
    { name: "Nishant Sharma", img: "/speakers2026/15.png" },
    { name: "Parul Khandelwal", img: "/speakers2026/16.png" },
    { name: "Prof. (Dr.) Manju Chhugani", img: "/speakers2026/17.png" },
    { name: "Seema Gill", img: "/speakers2026/18.png" },
    { name: "Sony Goyal", img: "/speakers2026/19.png" },
    { name: "Sukanya Kumar Nambiar", img: "/speakers2026/20.png" }
  ];

  return (
    <div className="bg-[#fcfcfc] text-gray-900 font-sans overflow-x-hidden selection:bg-ted-red selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <div ref={heroRef} className="relative w-full h-screen min-h-[600px] bg-black overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/X.png" alt="Hero BG" className="w-full h-full object-cover opacity-20 hidden md:block animate-pulse" style={{ animationDuration: '4s' }} />
          <img src="/TEDX.webp" alt="Hero BG Mobile" className="w-full h-full object-cover opacity-25 md:hidden object-[center_20%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 mt-16 lg:mt-0">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-2xl leading-[0.9]">
              Beyond <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ted-red to-orange-500">Obvious</span>
            </h1>
            <div className="text-xl md:text-2xl font-bold text-gray-300 tracking-wide max-w-2xl mx-auto lg:mx-0 border-l-4 border-ted-red pl-6 text-left">
              Move beyond first impressions toward deeper insight and meaningful possibility.
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={() => navigate("/about")}
                className="bg-ted-red text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-ted-red/40 hover:bg-white hover:text-ted-red hover:-translate-y-1 transition-all duration-300"
              >
                About Us
              </button>
            </div>
          </div>

          <div className="relative group w-full max-w-md">
            <div className="absolute inset-0 bg-ted-red rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 text-center transform group-hover:scale-[1.02] transition-transform duration-300">
              <div className="text-xl font-bold text-ted-red mb-2 tracking-widest uppercase">TED<span className="text-black">x</span>SGNS Youth</div>
              <div className="text-3xl font-black text-gray-900 mb-4">Beyond Obvious</div>
              
              <div className="space-y-2 mb-8 text-left bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-500 text-sm uppercase">Date</span>
                    <span className="font-bold text-gray-900 text-lg">08 February 2026</span>
                </div>
                <div className="h-px bg-gray-200 w-full"></div>
                <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-500 text-sm uppercase">Location</span>
                    <span className="font-bold text-gray-900 text-lg">New Delhi, India</span>
                </div>
              </div>
              
              <button 
                onClick={() => navigate("/nomination")}
                className="w-full bg-black text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-ted-red transition-colors duration-300 shadow-lg flex items-center justify-center gap-2 group-hover:gap-4"
              >
                Nominate Yourself <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <HeroCounter targetDate={new Date('2026-02-08T09:00:00')} />

      {/* --- CONTENT SECTIONS --- */}
      <section className="px-4 pb-10">
        <ModernSection title="What is" highlight="TED?">
          <p>TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks. TED began in 1984 as a conference where Technology, Entertainment, and Design converged, and today covers almost all topics — from science to business to global issues.</p>
        </ModernSection>
        
        <ModernSection title="What is" highlight="TEDx?" reverse={true}>
          <p>TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection in a small group.</p>
        </ModernSection>
        
        <ModernSection title="What is" highlight="TEDxSGNS Youth?">
          <p>TEDxSGNS Youth is an independently organized TED event hosted by SGNS, Dwarka. The event brings together bright young minds and changemakers to share powerful stories that challenge perspectives and ignite local action.</p>
        </ModernSection>
      </section>

      {/* --- RESTORED FULL WIDTH BLACK THEME SECTION --- */}
      <section className="px-4">
        <InfoSectionFull title="Theme:" highlight="Beyond Obvious">
          <p>Beyond Obvious is an open and inclusive theme focused on youth, inviting speakers and audiences to move beyond first impressions, accepted narratives, and surface-level thinking toward deeper insight, fresh perspective, and meaningful possibility.</p>
          <p>It reflects the spirit of Ideas Worth Spreading, creating space for ideas from science, art, technology, and social change—so long as they push thinking past the familiar. This theme calls on speakers to explore the why beneath the what.</p>
        </InfoSectionFull>
      </section>

      {/* --- SPEAKER BAR --- */}
      <section className="w-full max-w-[95vw] mx-auto py-12 mb-20">
        <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-[0_10px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden relative">
          <div className="flex justify-start mb-8 px-4">
            <div className="bg-ted-red text-white text-sm md:text-lg font-bold px-8 py-2 rounded-full shadow-lg shadow-ted-red/20">
              Our Speakers
            </div>
          </div>

          <div className="relative w-full overflow-hidden">
            <div 
              className="flex gap-6 animate-scroll-left hover:[animation-play-state:paused] w-max py-4"
              style={{ animationDuration: '70s' }}
            >
              {[...speakers2026, ...speakers2026].map((sp, i) => (
                <div 
                  key={i} 
                  onClick={() => navigate("/speakers")}
                  className="relative w-[280px] h-[380px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 cursor-pointer group hover:-translate-y-2 transition-all duration-500"
                  style={{ background: 'linear-gradient(180deg, #8B0000 0%, #000000 100%)' }}
                >
                  <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                  <div className="absolute top-5 left-5 z-10">
                    <div className="text-white font-bold text-base leading-none mb-1 opacity-90">TED<sup>x</sup></div>
                    <div className="text-white font-black text-2xl tracking-tighter">SPEAKER</div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[75%] z-0">
                    <img 
                      src={sp.img} 
                      alt={sp.name} 
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}} />
    </div>
  );
}