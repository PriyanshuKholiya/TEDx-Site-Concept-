import React, { useState } from "react";

export default function Speakers() {
  const [activeYear, setActiveYear] = useState(2026);

  const speakers2025 = [
    { name: "Aanchal Jain", title: "Founder - Magical Parenting Want ", img: "/Speakers/AanchalJain.jpg", desc: "" },
    { name: "Akanksha Madan", title: "Clinical Director - Thrive Beyond Trauma Counseling", img: "/Speakers/AkankshaMadan.jpg", desc: "" },
    { name: "Avika Jain", title: "Polymath Maverick", img: "/Speakers/AvikaJain.jpg", desc: "" },
    { name: "Avirat Jain", title: "Youngest Maverick", img: "/Speakers/AviratJain.jpg", desc: "" },
    { name: "Dr. Atul Mehta", title: "CEO - Pay10 Services Pvt. Ltd.", img: "/Speakers/Dr.AtulMehta.jpg", desc: "" },
    { name: "Dr. Kiran Swami", title: "Member - Tathagat Foundation", img: "/Speakers/Dr.KiranSwami.jpg", desc: "" },
    { name: "Dr. Mala Dasgupta Sengupta", title: "Founder & CEO - Anubhav English Classes", img: "/Speakers/Dr.MalaDasguptaSengupta.jpg", desc: "" },
    { name: "Dr. Samiksha Borele", title: "President - Borele World, Dubai", img: "/Speakers/Dr.SamikshaBorele.jpg", desc: "" },
    { name: "Dr. Varsha Jain", title: "Founder & CEO - Meavika Jewelz ", img: "/Speakers/Dr.VarshaJain.jpg", desc: "" },
    { name: "Mahira Juneja", title: "Student - Modern School, Vasant Vihar, New Delhi", img: "/Speakers/MahiraJuneja.jpg", desc: "" },
    { name: "Maithreye Murali", title: "Founder & CEO - Miracle Me", img: "/Speakers/MaithreyeMurali.jpg", desc: "" },
    { name: "Mamta Chander Chandani", title: "Anchor & Author", img: "/Speakers/MamtaChanderChandani.jpg", desc: "" },
    { name: "Mamta Singh", title: "Founder & CEO - Nityanchal Academy", img: "/Speakers/MamtaSingh.jpg", desc: "" },
    { name: "Meenakshi Saroha", title: "CEO - Atman (Rediscover Newself)", img: "/Speakers/MeenakshiSaroha.jpg", desc: "" },
    { name: "Minshu Garg", title: "Founder - Conscious Living With Minshuu", img: "/Speakers/MinshuGarg.jpg", desc: "" },
    { name: "Praveen K Shukla", title: "Business Advisor & Mentor", img: "/Speakers/PraveenKShukla.jpg", desc: "" },
    { name: "Prof. Dr. Parin Somani", title: "CEO & Director - LOSD - London Organsition of Skills Development", img: "/Speakers/Prof.Dr.ParinSomani.jpg", desc: "" },
    { name: "Sahil Makkar", title: "Chairman - Bharat Angels Network", img: "/Speakers/SahilMakkar.jpg", desc: "" },
    { name: "Sarita Tripathy", title: "Founder - Mighty Manifestations", img: "/Speakers/SaritaTripathy.jpg", desc: "" },
    { name: "Sayesha Khurana", title: "Springdales School, New Delhi", img: "/Speakers/SayeshaKhurana.jpg", desc: "" },
    { name: "Sonal Agarwal Rawat", title: "Founder & CEO - MothersVibe Pvt. Ltd.", img: "/Speakers/SonalAgarwalRawat.jpg", desc: "" },
    { name: "Soumya Dhani", title: "Founding Psychologist - SuperHumans Academy", img: "/Speakers/SoumyaDhani.jpg", desc: "" },
    { name: "Sushmita Tripathi", title: "Manager - American Express", img: "/Speakers/SushmitaTripathi.jpg", desc: "" },
    { name: "Tiyana Borele", title: "Student - Vibgyor World Academy, Nagpur", img: "/Speakers/TiyanaBorele.jpg", desc: "" },
    { name: "Vanshika Arora", title: "Psychologist - Mindmosaic", img: "/Speakers/VanshikaArora.jpg", desc: "" },
    { name: "Vikash Gupta", title: "Founder & CEO - Ranvik Exports Ltd.", img: "/Speakers/VikashGupta.jpg", desc: "" }
  ];

  const speakers2026 = [
    { name: "Anaya Kapur", title: "Student - American School of Dubai, UAE", img: "/speakers2026/1.png", desc: "Speaker" },
    { name: "Anupama Luthra", title: "Co Founder - Bol Mann Se", img: "/speakers2026/2.png", desc: "Speaker" },
    { name: "Dr. Akansha Jain", title: "Founder - Education Future One Stop, EFOS.in", img: "/speakers2026/3.png", desc: "Speaker" },
    { name: "Dr. Arvind Kumar", title: "Director & Consultant Medical Oncologist - Buddha Cancer Centre, Patna", img: "/speakers2026/4.png", desc: "Speaker" },
    { name: "Dr. Harmeet Singh Arora", title: "Director and Founder - Aliste Hotels and Resorts, Exxperientia Business Advisory Services", img: "/speakers2026/5.png", desc: "Speaker" },
    { name: "Dr. Purvi Jayaaraaj", title: "Doctor of Alternative Medicine - Samrruddhi Healing Center", img: "/speakers2026/6.png", desc: "Speaker" },
    { name: "Dr. Poonam", title: "Founder - Awakening With Dr. Poonam", img: "/speakers2026/7.png", desc: "Speaker" },
    { name: "Dr. Shankar Goenka", title: "Managing Director - WOW Go Green", img: "/speakers2026/8.png", desc: "Speaker" },
    { name: "Dr. Sonu Prasad", title: "Founder - Supercoachtalkz", img: "/speakers2026/9.png", desc: "Speaker" },
    { name: "Gurmeet Singh Arora", title: "Education Leader & Montessori Education Advocate - Bhupindra International Public School & ABC Montessori", img: "/speakers2026/22.png", desc: "Speaker" },
    { name: "Janki Nirmal Pandya", title: "Lead Monitoring and Evaluation - Aditya Birla Education Trust", img: "/speakers2026/10.png", desc: "Speaker" },
    { name: "Jyoti Sachdeva", title: "Self-love Coach, Crystal & Sound Therapist - Svasutra", img: "/speakers2026/21.png", desc: "Speaker" },
    { name: "King Kaling Porwal", title: "Managing Director - Downtown Lifespaces", img: "/speakers2026/11.png", desc: "Speaker" },
    { name: "Megha Narula", title: "Brand Communication Manager - Bagla Group", img: "/speakers2026/12.png", desc: "Speaker" },
    { name: "Mehtej Singh Sahni", title: "Student - St. George's College, Mussoorie", img: "/speakers2026/13.png", desc: "Speaker" },
    { name: "Monica Sodhi", title: "Neuro-Parenting and Emotional Resilience Coach, NLP - NFNLP (US)", img: "/speakers2026/14.png", desc: "Speaker" },
    { name: "Nishant Sharma", title: "Founder & Wellness Tech Entrepreneur - AuraEy™ Solutions Limited", img: "/speakers2026/15.png", desc: "Speaker" },
    { name: "Parul Khandelwal", title: "Entrepreneur - Asimit Creations", img: "/speakers2026/16.png", desc: "Speaker" },
    { name: "Prof. (Dr.) Manju Chhugani", title: "Professor & Founder Dean - SNSAH, Jamia Hamdard", img: "/speakers2026/17.png", desc: "Speaker" },
    { name: "Seema Gill", title: "Founder & CEO - BIGSTORY Network, Screenage Media Pvt. Ltd.", img: "/speakers2026/18.png", desc: "Speaker" },
    { name: "Sony Goyal", title: "Founder - Punjab100, Prayaas Educational & Charitable Society", img: "/speakers2026/19.png", desc: "Speaker" },
    { name: "Sukanya Kumar Nambiar", title: "Co-Founder & Director - The Preschool Olympiad, Bharat Shishu Vidya Initiatives Pvt. Ltd.", img: "/speakers2026/20.png", desc: "Speaker" }
];

  const currentSpeakers = activeYear === 2025 ? speakers2025 : speakers2026;

  return (
    <div className="bg-[#fcfcfc] min-h-screen py-16 px-4 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-ted-red font-bold tracking-widest uppercase mb-2 text-sm md:text-base">
            Meet the Change Makers
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            Our Eminent Speakers
          </h1>
          <div className="h-1.5 w-24 mx-auto rounded-full bg-gradient-to-r from-orange-400 via-ted-red to-pink-500 shadow-lg" />
        </div>

        {/* Sub Menu */}
        <div className="flex justify-center gap-4 mb-16">
          {[2025, 2026].map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-8 py-2 rounded-full font-bold transition-all duration-300 border-2 ${
                activeYear === year 
                ? "bg-ted-red border-ted-red text-white shadow-lg" 
                : "border-gray-200 text-gray-500 hover:border-ted-red hover:text-ted-red"
              }`}
            >
              {year} Speakers
            </button>
          ))}
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {currentSpeakers.map((sp, i) => {
            // Determines if this is the 2nd to last item in the current array
            const isSecondToLast = i === currentSpeakers.length - 2;

            return (
              <div 
                key={`${activeYear}-${i}`} 
                className={`group relative w-full max-w-[320px] bg-[#111] text-white rounded-2xl overflow-hidden shadow-xl border border-gray-800 hover:shadow-2xl hover:shadow-ted-red/20 transition-all duration-500 hover:-translate-y-3 
                ${isSecondToLast ? "xl:col-start-2" : ""}
                `}
              >
                {/* Image Container */}
                <div className="w-full h-80 bg-[#222] overflow-hidden relative">
                  <div className="absolute inset-0 bg-ted-red/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  <img 
                    src={sp.img} 
                    alt={sp.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-[20%]" 
                    loading="lazy"
                  />
                </div>

                {/* Info Container */}
                <div className="p-6 min-h-[160px] flex flex-col justify-start bg-gradient-to-b from-[#1a1a1a] to-[#000] border-t border-gray-800 relative z-20">
                  <div className="absolute top-0 left-6 -translate-y-1/2 w-10 h-1 bg-ted-red rounded-full shadow-md group-hover:w-20 transition-all duration-300"></div>

                  <div className="mt-2">
                      {sp.desc && (
                      <div className="text-[10px] font-bold text-ted-red uppercase tracking-widest mb-1 opacity-90">
                          {sp.desc}
                      </div>
                      )}
                      <h3 className="text-xl font-black text-white mb-2 leading-tight group-hover:text-ted-red transition-colors duration-300">
                      {sp.name}
                      </h3>
                      <p className="text-gray-400 text-sm font-medium leading-relaxed">
                      {sp.title}
                      </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}