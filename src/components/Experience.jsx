import React from 'react';
import { motion } from 'framer-motion';

// Import certificate images from assets to use as attached media
import mnnitCert from '../assets/certificates/Mnnit Internship Aiml.jpeg';
import ibmCert from '../assets/certificates/IBMCEP.png';

const experiences = [
  {
    role: "Campus Mantri",
    company: "GeeksforGeeks",
    type: "Part-time",
    duration: "Jun 2026 - Present",
    location: "Prayagraj, Uttar Pradesh, India · On-site",
    desc: "Acting as Campus Mantri for GeeksforGeeks. Fostering a developer community on campus, conducting tech workshops, promoting competitive programming, and bridging the gap between student developers and industry standards.",
    tech: ["Leadership", "Community Building", "Public Speaking", "Event Management"],
    mediaName: "Offer Letter",
    mediaAsset: "https://media.geeksforgeeks.org/auth-certificates/1782325800/71dfebd0d176ddec31d8a9ad23bdd3b2.png"
  },
  {
    role: "Summer Intern",
    company: "IBM",
    type: "Internship",
    duration: "Jun 2026 - Present",
    location: "Prayagraj, Uttar Pradesh, India · Remote",
    desc: "Cloud Computing Intern at IBM. Designing and deploying containerized services, managing Kubernetes clusters, setting up CI/CD pipelines, and learning corporate hybrid cloud methodologies.",
    tech: ["Cloud Computing", "Red Hat OpenShift", "Kubernetes", "Docker", "DevOps"],
    mediaName: null,
    mediaAsset: null
  },
  {
    role: "Summer Intern",
    company: "Innovation and Incubation Hub MNNIT Foundation",
    type: "Internship",
    duration: "May 2026 - Jun 2026",
    location: "Prayagraj, Uttar Pradesh, India · On-site",
    desc: "Summer Intern in Artificial Intelligence & Machine Learning (AI/ML) at IIHMF, MNNIT Allahabad. Worked on machine learning models, regression testing, and data analysis pipelines.",
    tech: ["Machine Learning", "Regression Testing", "Python", "Data Analysis"],
    mediaName: "MNNIT AIML Certificate",
    mediaAsset: mnnitCert
  },
  {
    role: "Summer Intern",
    company: "IBM",
    type: "Internship",
    duration: "Sep 2025 - Nov 2025",
    location: "Prayagraj, Uttar Pradesh, India · Remote",
    desc: "Summer Intern focusing on Generative AI. Designed NLP models, developed full-stack AI chat interfaces, and integrated Large Language Models into web platforms.",
    tech: ["Generative AI", "Python", "Natural Language Processing (NLP)", "Full-Stack Dev"],
    mediaName: "Generative AI Certificate",
    mediaAsset: ibmCert
  }
];

const getCompanyLogo = (company) => {
  const c = company.toLowerCase();
  if (c.includes("geeksforgeeks")) {
    return (
      <div className="w-14 h-14 bg-[#e7f5e9] border border-[#a3cfbb] rounded-2xl flex items-center justify-center font-sans shadow-inner flex-shrink-0">
        <span className="text-[#2f8d46] font-black text-lg">GFG</span>
      </div>
    );
  }
  if (c.includes("ibm")) {
    return (
      <div className="w-14 h-14 bg-[#edf5ff] border border-[#a6c9ff] rounded-2xl flex items-center justify-center font-sans shadow-inner flex-shrink-0">
        <span className="text-[#0f62fe] font-black text-base tracking-tighter">IBM</span>
      </div>
    );
  }
  if (c.includes("mnnit")) {
    return (
      <div className="w-14 h-14 bg-[#f3f0fc] border border-[#d3c6f9] rounded-2xl flex items-center justify-center font-sans shadow-inner flex-shrink-0">
        <span className="text-[#6f42c1] font-black text-[10px] uppercase text-center leading-none tracking-tight">IIHMF<br/><span className="text-[7px] text-[#8c68cd]">MNNIT</span></span>
      </div>
    );
  }
  return (
    <div className="w-14 h-14 bg-white border border-gray-200 rounded-2xl flex items-center justify-center shadow-inner flex-shrink-0">
      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="bg-white py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans scroll-mt-16">
      
      {/* Ambient glowing highlights */}
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] rounded-full bg-red-500/[0.02] blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full bg-indigo-500/[0.02] blur-[120px] pointer-events-none"></div>

      {/* Dotted grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000004_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black/[0.02] font-black text-7xl sm:text-[10vw] select-none tracking-widest uppercase pointer-events-none">
            Journey
          </div>
          
          <div data-aos="fade-up" className="relative z-10">
            <span className="text-[#ff2a2a] text-sm font-bold tracking-[0.2em] uppercase mb-3 block">Timeline</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              Work Experience
            </h2>
            <div className="w-16 h-1 bg-red-500 mx-auto mt-6 rounded-full shadow-[0_0_8px_#ff2a2a]"></div>
          </div>
        </div>

        {/* Timeline Flow */}
        <div className="relative border-l border-gray-200 ml-4 md:ml-32 pl-8 md:pl-12 space-y-16">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              
              {/* Pulsing timeline bullet */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center group-hover:border-[#ff2a2a] transition-colors duration-500">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300 group-hover:bg-[#ff2a2a] transition-colors duration-500 animate-pulse"></div>
              </div>

              {/* Sidebar year label (desktop only) */}
              <div className="hidden md:block absolute -left-[240px] top-1.5 w-40 text-right font-black text-sm text-gray-400 group-hover:text-black transition-colors duration-500">
                {exp.duration}
              </div>

              {/* Experience Card */}
              <div className="bg-gray-50 border border-gray-200/80 rounded-[2rem] p-6 md:p-8 hover:border-gray-300 hover:bg-gray-100/50 transition-all duration-500 shadow-md relative overflow-hidden flex flex-col justify-between">
                
                <div>
                  {/* Year tag for mobile */}
                  <div className="md:hidden text-xs font-bold text-[#ff2a2a] tracking-wider mb-2">
                    {exp.duration}
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    {/* Brand Logo */}
                    {getCompanyLogo(exp.company)}
                    
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-gray-900 group-hover:text-[#ff2a2a] transition-colors duration-500 leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-bold text-gray-500 mt-1">
                        {exp.company} &bull; <span className="text-xs font-medium text-gray-400">{exp.type}</span>
                      </p>
                      <p className="text-[11px] text-gray-400 font-medium md:hidden mt-0.5">
                        {exp.location}
                      </p>
                      <p className="hidden md:block text-[11px] text-gray-400 font-medium mt-0.5">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                    {exp.desc}
                  </p>
                </div>

                <div>
                  {/* Attached Media (LinkedIn style) */}
                  {exp.mediaAsset && (
                    <div className="mb-6 p-2 bg-white border border-gray-200 rounded-2xl flex items-center gap-3 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 self-start shadow-sm max-w-sm">
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-gray-100 flex-shrink-0 flex items-center justify-center bg-gray-50">
                        <img 
                          src={exp.mediaAsset} 
                          alt={exp.mediaName} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[9px] font-black text-gray-400 block uppercase tracking-widest leading-none mb-1">Attached Media</span>
                        <a 
                          href={exp.mediaAsset} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-xs font-black text-gray-700 hover:text-[#ff2a2a] transition-colors block truncate pr-2"
                        >
                          {exp.mediaName}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Sub-skills tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-lg bg-gray-200/50 text-gray-700 border border-gray-300/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
