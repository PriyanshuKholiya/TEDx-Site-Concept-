import React, { useRef } from "react";

export default function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const phone = form.elements["phone"].value;
    const message = form.elements["message"].value;
    const mailto = `mailto:team@tedxsgnsyouth.com?subject=Contact...`; // (Keep your logic)
    window.location.href = mailto;
  };

  const InputStyle = "w-full p-4 rounded-xl border-2 border-ted-red focus:outline-none focus:ring-4 focus:ring-ted-red/20 text-lg bg-white text-gray-800";

  return (
    <div className="min-h-[80vh] py-10 px-4 flex flex-col items-center bg-white font-sans">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
        
        <button disabled className="bg-transparent border-2 border-ted-red text-ted-red rounded-full px-6 py-2 font-bold text-lg mb-6 tracking-wide cursor-default">
          Contact Us
        </button>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Contact Us For Any Queries!</h1>
        <p className="text-gray-500 text-lg mb-10">For any query, feedback or registration of speakers, feel free to contact us at:</p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5 min-w-[320px]">
            <input type="text" name="name" placeholder="Your Full Name" required className={InputStyle} />
            <input type="email" name="email" placeholder="Enter Your Email ID" required className={InputStyle} />
            <input type="tel" name="phone" placeholder="Enter Your Phone Number" required className={InputStyle} />
            <textarea name="message" rows={4} placeholder="Your Message" required className={`${InputStyle} resize-y`} />
            
            <button type="submit" className="mt-4 bg-ted-red text-white py-4 rounded-full font-bold text-xl shadow-lg hover:bg-red-700 hover:shadow-xl transition-all">
              Submit Now
            </button>
          </form>

          {/* Info Cards */}
          <div className="flex-1 flex flex-col gap-5 min-w-[280px]">
             {/* Card Component */}
             {[
               { icon: "🌐", color: "text-blue-400", title: "Address", text: "Shanti Gyan Niketan Sr. Sec. School, New Delhi" },
               { icon: "✉️", color: "text-yellow-600", title: "Mail Us", text: "team@tedxsgnsyouth.com" },
               { icon: "👤", color: "text-purple-700", title: "Always there to help you!", text: "Feel free to reach out" }
             ].map((item, idx) => (
               <div key={idx} className="bg-white border-2 border-ted-red rounded-xl p-6">
                 <div className="flex items-center gap-3 mb-1">
                   <span className={`text-3xl ${item.color}`}>{item.icon}</span>
                   <span className="font-bold text-xl text-gray-900">{item.title}</span>
                 </div>
                 <div className="text-gray-500 text-lg ml-1">{item.text}</div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}