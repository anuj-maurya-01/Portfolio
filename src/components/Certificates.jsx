import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all local certificate assets
import promptwarsCert from '../assets/certificates/0d7ab09b-ce81-4827-b0ab-96ae4cf8c2d6.png';
import promptwarsOnlineCert from '../assets/certificates/9b63c612-5a56-4bbe-8e69-b6da2e14573e.png';
import wscubeCert from '../assets/certificates/Anuj Kumar Maurya _WS_2025_M_33898_Certificate.png';
import enigmaCert from '../assets/certificates/Anuj.png';
import nasscomCert from '../assets/certificates/Anuj_Maurya_610016.png';
import excelCert from '../assets/certificates/CERTIFICATE_LANDING_PAGE~HRGLQ7MZUIVO.jpeg';
import googleAdsCert from '../assets/certificates/CERTIFICATE_LANDING_PAGE~NKPQ3Y4PI19P.jpeg';
import googleMusicCert from '../assets/certificates/file_000000005dfc720bbe55253a7967fc10.png';
import chatgptCert from '../assets/certificates/HCL GUVI Certification - 04q71J5pj3KT3P8x55.png';
import pythonCert from '../assets/certificates/HCL GUVI Certification - iL71H353xoR89y9173.png';
import ibmCert from '../assets/certificates/IBMCEP.png';
import mnnitCert from '../assets/certificates/Mnnit Internship Aiml.jpeg';
import hpLifeAiCert from '../assets/certificates/Screenshot_20260620_204318_Chrome.jpg';
import hpLifeSeCert from '../assets/certificates/Screenshot_20260620_204453_Chrome.jpg';
import gfgCert from '../assets/certificates/Syntax_Clash_Anuj_Kumar_Maurya.png';

const categories = ["All", "AI & Data", "Development", "Business", "Events"];

const certificatesList = [
  {
    title: "Generative AI Virtual Internship",
    issuer: "IBM Developer Skills Network",
    issueDate: "Aug 2025",
    credentialId: "cd5d9d00b1f247758b51f5d0fc3dc70f",
    category: "AI & Data",
    verifyUrl: "https://courses.ibmmooc.skillsnetwork.site/certificates/cd5d9d00b1f247758b51f5d0fc3dc70f",
    fileAsset: ibmCert,
    isImage: true,
    color: "from-blue-600/10 to-indigo-600/10 hover:from-blue-600/20 hover:to-indigo-600/20 border-blue-500/20 hover:border-blue-400/50 shadow-blue-500/5",
    glowColor: "bg-blue-500/10"
  },
  {
    title: "AIML Summer Internship",
    issuer: "IIHMF, MNNIT Allahabad",
    issueDate: "Jun 2026",
    credentialId: "Intern/2026/AIML/251",
    category: "AI & Data",
    verifyUrl: null,
    fileAsset: mnnitCert,
    isImage: true,
    color: "from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 border-purple-500/20 hover:border-purple-400/50 shadow-purple-500/5",
    glowColor: "bg-purple-500/10"
  },
  {
    title: "Python - IITM Pravartak Certified",
    issuer: "GUVI Geek Networks / HCL",
    issueDate: "Jul 2025",
    credentialId: "iL71H353xoR89y9173",
    category: "Development",
    verifyUrl: "https://www.guvi.in/certificate?id=iL71H353xoR89y9173",
    fileAsset: pythonCert,
    isImage: true,
    color: "from-cyan-600/10 to-blue-600/10 hover:from-cyan-600/20 hover:to-blue-600/20 border-cyan-500/20 hover:border-cyan-400/50 shadow-cyan-500/5",
    glowColor: "bg-cyan-500/10"
  },
  {
    title: "ChatGPT for Everyone: Generative AI",
    issuer: "GUVI Geek Networks / HCL",
    issueDate: "Sep 2025",
    credentialId: "04q71J5pj3KT3P8x55",
    category: "AI & Data",
    verifyUrl: "https://www.guvi.in/certificate?id=04q71J5pj3KT3P8x55",
    fileAsset: chatgptCert,
    isImage: true,
    color: "from-emerald-600/10 to-teal-600/10 hover:from-emerald-600/20 hover:to-teal-600/20 border-emerald-500/20 hover:border-emerald-400/50 shadow-emerald-500/5",
    glowColor: "bg-emerald-500/10"
  },
  {
    title: "Exploratory Data Analysis",
    issuer: "IT-ITeS SSC Nasscom",
    issueDate: "Jul 2026",
    credentialId: "610016",
    category: "AI & Data",
    verifyUrl: null,
    fileAsset: nasscomCert,
    isImage: true,
    color: "from-amber-600/10 to-orange-600/10 hover:from-amber-600/20 hover:to-orange-600/20 border-amber-500/20 hover:border-amber-400/50 shadow-amber-500/5",
    glowColor: "bg-amber-500/10"
  },
  {
    title: "AI for Beginners",
    issuer: "HP LIFE / HP Foundation",
    issueDate: "Jun 2025",
    credentialId: "71155ae8-46fc-4954-a713-dd09a64e6ca9",
    category: "AI & Data",
    verifyUrl: null,
    fileAsset: hpLifeAiCert,
    isImage: true,
    color: "from-blue-600/10 to-sky-600/10 hover:from-blue-600/20 hover:to-sky-600/20 border-blue-500/20 hover:border-blue-400/50 shadow-blue-500/5",
    glowColor: "bg-blue-500/10"
  },
  {
    title: "Social Entrepreneurship",
    issuer: "HP LIFE / HP Foundation",
    issueDate: "May 2025",
    credentialId: "89a4d557-f7a0-4e69-a2b2-545ef952f1ee",
    category: "Business",
    verifyUrl: null,
    fileAsset: hpLifeSeCert,
    isImage: true,
    color: "from-orange-600/10 to-red-600/10 hover:from-orange-600/20 hover:to-red-600/20 border-orange-500/20 hover:border-orange-400/50 shadow-orange-500/5",
    glowColor: "bg-orange-500/10"
  },
  {
    title: "Google Ads for Beginners",
    issuer: "Coursera / Guided Project",
    issueDate: "Aug 2025",
    credentialId: "NKPQ3Y4PI19P",
    category: "Business",
    verifyUrl: "https://coursera.org/verify/NKPQ3Y4PI19P",
    fileAsset: googleAdsCert,
    isImage: true,
    color: "from-blue-600/10 to-cyan-600/10 hover:from-blue-600/20 hover:to-cyan-600/20 border-blue-500/20 hover:border-blue-400/50 shadow-blue-500/5",
    glowColor: "bg-blue-500/10"
  },
  {
    title: "Getting Started with MS Excel",
    issuer: "Coursera / Guided Project",
    issueDate: "Aug 2025",
    credentialId: "HRGLQ7MZUIVO",
    category: "Business",
    verifyUrl: "https://coursera.org/verify/HRGLQ7MZUIVO",
    fileAsset: excelCert,
    isImage: true,
    color: "from-emerald-600/10 to-teal-600/10 hover:from-emerald-600/20 hover:to-teal-600/20 border-emerald-500/20 hover:border-emerald-400/50 shadow-emerald-500/5",
    glowColor: "bg-emerald-500/10"
  },
  {
    title: "AI-Powered Full Stack Masterclass",
    issuer: "WsCube Tech",
    issueDate: "Dec 2025",
    credentialId: "WS/2025/M/33898",
    category: "Development",
    verifyUrl: null,
    fileAsset: wscubeCert,
    isImage: true,
    color: "from-indigo-600/10 to-purple-600/10 hover:from-indigo-600/20 hover:to-purple-600/20 border-indigo-500/20 hover:border-indigo-400/50 shadow-indigo-500/5",
    glowColor: "bg-indigo-500/10"
  },
  {
    title: "Syntax Clash CP Contest",
    issuer: "GeeksforGeeks Student Chapter UIT",
    issueDate: "May 2026",
    credentialId: "GFG202605165",
    category: "Development",
    verifyUrl: null,
    fileAsset: gfgCert,
    isImage: true,
    color: "from-green-600/10 to-emerald-600/10 hover:from-green-600/20 hover:to-emerald-600/20 border-green-500/20 hover:border-green-400/50 shadow-green-500/5",
    glowColor: "bg-green-500/10"
  },
  {
    title: "Google Student Ambassador Program",
    issuer: "Google / GSAP 2026 (Music Edition)",
    issueDate: "Jun 2026",
    credentialId: "GSAP-MUSIC-2026",
    category: "Events",
    verifyUrl: null,
    fileAsset: googleMusicCert,
    isImage: true,
    color: "from-rose-600/10 to-red-600/10 hover:from-rose-600/20 hover:to-red-600/20 border-rose-500/20 hover:border-rose-400/50 shadow-rose-500/5",
    glowColor: "bg-rose-500/10"
  },
  {
    title: "Devengers Promptwars 2026",
    issuer: "Devengers",
    issueDate: "Jul 2026",
    credentialId: "DEVENGERS-PW-2026",
    category: "Events",
    verifyUrl: null,
    fileAsset: promptwarsCert,
    isImage: true,
    color: "from-violet-600/10 to-indigo-600/10 hover:from-violet-600/20 hover:to-indigo-600/20 border-violet-500/20 hover:border-violet-400/50 shadow-violet-500/5",
    glowColor: "bg-violet-500/10"
  },
  {
    title: "Devengers Promptwars (Online Round)",
    issuer: "Devengers",
    issueDate: "Jul 2026",
    credentialId: "DEVENGERS-PW-ONLINE-2026",
    category: "Events",
    verifyUrl: null,
    fileAsset: promptwarsOnlineCert,
    isImage: true,
    color: "from-fuchsia-600/10 to-purple-600/10 hover:from-fuchsia-600/20 hover:to-purple-600/20 border-fuchsia-500/20 hover:border-fuchsia-400/50 shadow-fuchsia-500/5",
    glowColor: "bg-fuchsia-500/10"
  },
  {
    title: "Enigma XII 2024 Treasure Hunt",
    issuer: "UGI Cultural Head / Enigma",
    issueDate: "Nov 2024",
    credentialId: "ENIGMA-TH-2024",
    category: "Events",
    verifyUrl: null,
    fileAsset: enigmaCert,
    isImage: true,
    color: "from-pink-600/10 to-rose-600/10 hover:from-pink-600/20 hover:to-rose-600/20 border-pink-500/20 hover:border-pink-400/50 shadow-pink-500/5",
    glowColor: "bg-pink-500/10"
  }
];

const Certificates = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCertificates = activeTab === "All" 
    ? certificatesList 
    : certificatesList.filter(cert => cert.category === activeTab);

  return (
    <section id="certificates" className="bg-white py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans scroll-mt-16">
      
      {/* Background cinematic lighting */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#ff2a2a]/[0.01] blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/[0.01] blur-[120px] pointer-events-none"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black/[0.02] font-black text-7xl sm:text-[10vw] select-none tracking-widest uppercase pointer-events-none">
            Credentials
          </div>
          
          <div data-aos="fade-up" className="relative z-10">
            <span className="text-[#ff2a2a] text-sm font-bold tracking-[0.2em] uppercase mb-3 block">Achievements</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              Certifications & Badges
            </h2>
            <div className="w-16 h-1 bg-red-500 mx-auto mt-6 rounded-full shadow-[0_0_8px_#ff2a2a]"></div>
          </div>
        </div>

        {/* Filter Navigation */}
        <div data-aos="fade-up" className="flex flex-wrap justify-center items-center gap-3 mb-16 max-w-2xl mx-auto">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                activeTab === tab
                  ? "bg-black text-white border-black shadow-lg"
                  : "bg-gray-100 text-gray-600 border-gray-200 hover:border-gray-300 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={cert.title}
                className={`group bg-gradient-to-b ${cert.color} border rounded-[2.5rem] p-6 flex flex-col justify-between transition-all duration-500 shadow-md relative overflow-hidden`}
              >
                {/* Spotlight glow inside card */}
                <div className={`absolute -right-20 -top-20 w-44 h-44 rounded-full blur-[70px] transition-opacity duration-500 opacity-30 group-hover:opacity-60 ${cert.glowColor}`}></div>
                
                <div className="relative z-10 w-full">
                  
                  {/* Visual Preview */}
                  <div className="w-full h-44 rounded-2xl mb-6 border border-gray-250/60 overflow-hidden relative bg-gray-100 group-hover:border-gray-300 transition-all duration-500 flex items-center justify-center">
                    <img 
                      src={cert.fileAsset} 
                      alt={cert.title} 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-750" 
                    />
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-black/5 border border-black/5 text-gray-600 mb-4 inline-block">
                    {cert.issuer}
                  </span>

                  <h3 className="text-xl font-black text-gray-900 mb-2 tracking-tight leading-snug group-hover:text-black transition-colors">
                    {cert.title}
                  </h3>
                  
                  <p className="text-[11px] text-gray-500 font-bold mb-8">
                    Issued: {cert.issueDate} {cert.credentialId ? `\u2022 ID: ${cert.credentialId}` : ""}
                  </p>
                </div>

                {/* Verification Actions */}
                <div className="relative z-10 mt-auto space-y-3 w-full">
                  {cert.verifyUrl && (
                    <a 
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-2xl bg-black text-white font-bold text-sm hover:bg-[#ff2a2a] hover:text-white transition-all duration-300 shadow-md"
                    >
                      <span>Verify Online</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  
                  <a 
                    href={cert.fileAsset}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-2xl font-bold text-sm transition-all duration-300 ${
                      cert.verifyUrl 
                        ? "bg-gray-150 border border-gray-250/80 text-gray-700 hover:bg-gray-200 hover:text-black"
                        : "bg-black text-white hover:bg-[#ff2a2a] hover:text-white shadow-md"
                    }`}
                  >
                    <span>View Certificate File</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>

                {/* Decorative border */}
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Certificates;
