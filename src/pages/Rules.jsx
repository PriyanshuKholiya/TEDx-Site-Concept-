import React from "react";

export default function Rules() {
  const rulesList = [
    "All attendees must register prior to the event and carry a valid photo ID (students should carry their university ID).",
    "Please arrive on time and be seated 15 minutes before sessions begin. Entry may be restricted during talks.",
    "Maintain decorum and respect all speakers, performers and participants; keep phones on silent/vibrate.",
    "Photography is allowed only in designated areas. Flash, tripods or live streaming/recording require prior written permission.",
    "Follow instructions given by volunteers and staff. Queue discipline and designated entry/exit routes must be observed.",
    "Keep the campus clean. Use dustbins; do not deface or damage university property.",
    "Prohibited items: outside food/drinks, alcohol, tobacco/e‑cigarettes, sharp objects, banners/placards, laser pointers, drones and any illegal substances."
  ];

  const safetyList = [
    "Cooperate with university security and police personnel. Random bag checks may be conducted.",
    "Carry your student/employee ID or government-issued photo ID at all times and present it on request.",
    "Access to restricted/academic areas is not permitted unless authorised by the university.",
    "Keep emergency exits and corridors clear. In an emergency, follow public announcements and instructions from volunteers.",
    "First-aid and medical assistance are available on site. Inform a volunteer immediately if you feel unwell.",
    "Lost and Found is managed at the help desk; organisers are not responsible for loss/theft of personal belongings.",
    "The organisers reserve the right to refuse admission or ask any person to leave for security or behavioural reasons. Refunds will not be issued in such cases."
  ];

  const RuleCard = ({ title, items }) => (
    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(230,43,30,0.06)] transition-shadow duration-300">
      <h2 className="text-3xl md:text-4xl font-black text-ted-red text-center mb-10 uppercase tracking-tight">
        {title}
      </h2>
      <ul className="space-y-5">
        {items.map((rule, idx) => (
          <li key={idx} className="flex items-start gap-5 group">
            {/* Custom Red Dot Bullet matching the image */}
            <span className="w-3 h-3 md:w-4 md:h-4 bg-ted-red rounded-full mt-2.5 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200"></span>
            <span className="text-gray-700 text-lg leading-relaxed font-medium">
              {rule}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="bg-[#fcfcfc] min-h-screen py-16 px-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <RuleCard title="Event Rules & Guidelines" items={rulesList} />
        <RuleCard title="Safety & Security" items={safetyList} />
      </div>
    </div>
  );
}