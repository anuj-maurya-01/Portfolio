import React from 'react';
import { motion } from 'framer-motion';

// Import logos from logo repo
import aktuLogo from '../assets/logo/aktu.png';
import smppsLogo from '../assets/logo/smpps.png';

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science & Engineering",
    institution: "Dr. A.P.J. Abdul Kalam Technical University",
    duration: "Sep 2024 - Sep 2028",
    grade: "Skills: Python, Markup Languages",
    details: "Enrolled in Bachelor of Technology (B.Tech) majoring in Computer Science. Actively learning programming paradigms, web standards, and software engineering foundations.",
    courses: ["Python", "Markup Languages", "Computer Science"],
    color: "from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20",
    borderColor: "border-blue-500/20 hover:border-purple-400/50 shadow-blue-500/5",
    glowColor: "bg-blue-500/10",
    logo: aktuLogo
  },
  {
    degree: "Intermediate (Class XII)",
    major: "Mathematics & Computer Science",
    institution: "Shri MahaPrabhu Public School Shivkuti Teliarganj Prayagraj",
    duration: "Apr 2023 - Apr 2024",
    grade: "Grade: A",
    details: "Completed Senior Secondary / Intermediate Education focusing on Mathematics, Physics, Chemistry, and Computer Science.",
    courses: ["Mathematics", "Computer Science", "Physics", "Chemistry"],
    color: "from-cyan-600/10 to-teal-600/10 hover:from-cyan-600/20 hover:to-teal-600/20",
    borderColor: "border-cyan-500/20 hover:border-teal-400/50 shadow-cyan-500/5",
    glowColor: "bg-cyan-500/10",
    logo: smppsLogo
  },
  {
    degree: "High School (Class X)",
    major: "Mathematics & Computer Science",
    institution: "Shri MahaPrabhu Public School Shivkuti Teliarganj Prayagraj",
    duration: "Apr 2021 - Apr 2022",
    grade: "Grade: A",
    details: "Completed High School education with a strong focus on Mathematics and Computer Science fundamentals.",
    courses: ["Mathematics", "Computer Science", "Science", "Social Science"],
    color: "from-cyan-600/10 to-teal-600/10 hover:from-cyan-600/20 hover:to-teal-600/20",
    borderColor: "border-cyan-500/20 hover:border-teal-400/50 shadow-cyan-500/5",
    glowColor: "bg-cyan-500/10",
    logo: smppsLogo
  }
];

const Education = () => {
  return (
    <section id="education" className="bg-white py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans scroll-mt-16">
      
      {/* Background graphic lighting */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] rounded-full bg-blue-500/[0.01] blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-purple-500/[0.01] blur-[130px] pointer-events-none"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000004_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black/[0.02] font-black text-7xl sm:text-[10vw] select-none tracking-widest uppercase pointer-events-none">
            Academics
          </div>
          
          <div data-aos="fade-up" className="relative z-10">
            <span className="text-[#ff2a2a] text-sm font-bold tracking-[0.2em] uppercase mb-3 block">Education</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              Academic Foundation
            </h2>
            <div className="w-16 h-1 bg-red-500 mx-auto mt-6 rounded-full shadow-[0_0_8px_#ff2a2a]"></div>
          </div>
        </div>

        {/* Education modern split-grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Graphic Vector / Illustration (Large screen only) */}
          <div data-aos="fade-right" className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center relative p-8">
            <div className="w-72 h-72 rounded-full border border-gray-200 bg-gradient-to-tr from-blue-50/20 to-purple-50/20 flex items-center justify-center relative animate-float shadow-md">
              {/* Spinning orbiting ring */}
              <div className="absolute inset-2 rounded-full border border-dashed border-gray-300 animate-[spin_40s_linear_infinite]"></div>
              
              {/* Graphic Icon */}
              <div className="w-44 h-44 rounded-3xl bg-gray-50 border border-gray-200 flex items-center justify-center p-8 backdrop-blur-md shadow-inner relative">
                <svg className="w-full h-full text-black/80 filter drop-shadow-[0_10px_20px_rgba(59,130,246,0.1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Cards */}
          <div className="lg:col-span-7 space-y-8">
            {educationData.map((edu, idx) => (
              <div 
                key={idx}
                data-aos="fade-left"
                data-aos-delay={idx * 150}
                className={`group bg-gradient-to-b ${edu.color} border ${edu.borderColor} rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 shadow-md relative overflow-hidden`}
              >
                {/* Spot light glow */}
                <div className={`absolute -right-20 -top-20 w-44 h-44 rounded-full blur-[70px] transition-opacity duration-500 opacity-30 group-hover:opacity-60 ${edu.glowColor}`}></div>
                
                <div className="relative z-10">
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      {/* Logo Container */}
                      <div className="w-16 h-16 p-1.5 rounded-2xl bg-white border border-gray-200/80 flex items-center justify-center overflow-hidden shadow-inner group-hover:scale-102 transition-transform duration-300">
                        <img 
                          src={edu.logo} 
                          alt={edu.institution} 
                          className="w-full h-full object-contain" 
                        />
                      </div>
                      <div>
                        <span className="text-[#ff2a2a] text-xs font-bold tracking-widest uppercase">
                          {edu.duration}
                        </span>
                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mt-1 group-hover:text-black transition-colors">
                          {edu.degree}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm font-bold text-gray-700 mb-2">
                    {edu.major} &bull; <span className="text-gray-500">{edu.institution}</span>
                  </p>
                  
                  <span className="inline-block text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-xl mb-4">
                    {edu.grade}
                  </span>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                    {edu.details}
                  </p>

                  {/* Course Tags */}
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span 
                        key={course}
                        className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-lg bg-gray-200/50 text-gray-700 border border-gray-300/40"
                      >
                        {course}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Decorative border line */}
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
