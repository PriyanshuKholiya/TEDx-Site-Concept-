import React from 'react';

export default function Nomination() {
  // Updated with your specific Google Form link
  const GOOGLE_FORM_LINK = "https://forms.gle/h4LPK5jVkNeeRynm8";

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans py-16 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 text-center relative overflow-hidden">
        
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-ted-red/5 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-400/5 rounded-full -ml-12 -mb-12" />

        {/* Header Section */}
        <div className="relative z-10">
          <div className="text-ted-red font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Be a Speaker
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            Nominate <span className="text-ted-red">Yourself</span>
          </h1>
          
          {/* Theme Badge */}
          <div className="inline-block px-4 py-1 rounded-md bg-gray-900 text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">
            Theme: Beyond Obvious
          </div>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Do you have an idea that pushes thinking past the familiar? We are looking for 
            changemakers, innovators, and dreamers who can illuminate what lies beneath the surface. 
            Share your "Idea Worth Spreading" with the world.
          </p>

          {/* Action Button */}
          <div className="flex flex-col items-center gap-4">
            <a 
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-ted-red rounded-2xl hover:bg-black shadow-xl shadow-ted-red/20 hover:shadow-black/20 hover:-translate-y-1 active:translate-y-0"
            >
              <span className="mr-3">Fill Nomination Form</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}