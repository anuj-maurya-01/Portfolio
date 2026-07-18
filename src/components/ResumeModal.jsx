import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 no-print">
        
        {/* Custom CSS for perfect printing */}
        <style dangerouslySetInnerHTML={{__html: `
          @media print {
            body * {
              visibility: hidden;
            }
            .print-area, .print-area * {
              visibility: visible;
            }
            .print-area {
              position: absolute;
              left: 0;
              top: 0;
              width: 100% !important;
              max-width: 100% !important;
              box-shadow: none !important;
              border: none !important;
              padding: 0 !important;
              margin: 0 !important;
              background: white !important;
              color: black !important;
            }
            .no-print {
              display: none !important;
            }
          }
        `}} />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh]"
        >
          {/* Top Control Bar (Hidden when printing) */}
          <div className="bg-slate-900 px-6 py-4 flex justify-between items-center text-white border-b border-slate-800 no-print">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-extrabold text-sm uppercase tracking-wider">Digital Resume</span>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handlePrint}
                className="px-4 py-2 rounded-xl bg-red-500 text-white font-bold text-xs hover:bg-red-600 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                <span>Print / Save PDF</span>
              </button>
              <button 
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-750 transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Printable Resume Sheet Area */}
          <div className="overflow-y-auto p-8 sm:p-12 bg-white text-slate-800 print-area font-sans">
            {/* Header section */}
            <div className="border-b-2 border-slate-900 pb-6 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none mb-1">Anuj Maurya</h1>
                  <p className="text-sm font-bold text-red-600 uppercase tracking-widest">Full Stack Developer &amp; AI-ML Engineer</p>
                </div>
                <div className="text-xs space-y-1 text-slate-500 font-medium">
                  <p className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>anujmaurya1004@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Prayagraj, Uttar Pradesh, India</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    <span>github.com/anujmaurya1004</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Left Column: Work Experience and Projects */}
              <div className="md:col-span-8 space-y-8">
                
                {/* Work Experience */}
                <div>
                  <h2 className="text-lg font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2 mb-4">Work Experience</h2>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-sm font-black text-slate-800">Campus Mantri &bull; <span className="text-xs font-semibold text-slate-500">GeeksforGeeks (Part-time)</span></h3>
                        <span className="text-[10px] font-bold text-slate-500 whitespace-nowrap">Jun 2026 - Present</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                        Fostering developer communities, organizing workshops, and promoting programming logic on campus.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-sm font-black text-slate-800">Summer Intern &bull; <span className="text-xs font-semibold text-slate-500">IBM (Cloud)</span></h3>
                        <span className="text-[10px] font-bold text-slate-500 whitespace-nowrap">Jun 2026 - Present</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                        Designing container environments, studying Kubernetes clustering, and DevOps pipelines.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-sm font-black text-slate-800">Summer Intern &bull; <span className="text-xs font-semibold text-slate-500">MNNIT Foundation IIHMF</span></h3>
                        <span className="text-[10px] font-bold text-slate-500 whitespace-nowrap">May 2026 - Jun 2026</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                        Focused on AI/ML applications, regression analysis, and structured machine learning pipelines.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-sm font-black text-slate-800">Summer Intern (GenAI) &bull; <span className="text-xs font-semibold text-slate-500">IBM</span></h3>
                        <span className="text-[10px] font-bold text-slate-500 whitespace-nowrap">Sep 2025 - Nov 2025</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                        Engineered Natural Language Processing (NLP) models and integrated LLM chat logic into web frameworks.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Selected Projects */}
                <div>
                  <h2 className="text-lg font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2 mb-4">Key Projects</h2>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-sm font-black text-slate-800">Employee Attrition Prediction System</h3>
                        <span className="text-[10px] font-bold text-slate-500 whitespace-nowrap">May 2026</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-medium mb-1.5">
                        End-to-end ML application classifying HR attrition with XGBoost (87.78% accuracy). Engineered preprocessors using SMOTE and ColumnTransformer.
                      </p>
                      <span className="text-[9px] font-black uppercase text-red-600 tracking-wider">Tech: Python, Scikit-Learn, XGBoost, Streamlit</span>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-sm font-black text-slate-800">CPU Scheduling Visualizer</h3>
                        <span className="text-[10px] font-bold text-slate-500 whitespace-nowrap">Mar 2026</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-medium mb-1.5">
                        Interactive web-based simulator rendering dynamic Gantt charts for CPU scheduling algorithms (FCFS, SJF, SRTF, RR, Priority) along with calculation dashboards.
                      </p>
                      <span className="text-[9px] font-black uppercase text-red-600 tracking-wider">Tech: React.js, JavaScript, HTML5, CSS3, Vercel</span>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-sm font-black text-slate-800">Bhagavad Gita Wisdom Reader</h3>
                        <span className="text-[10px] font-bold text-slate-500 whitespace-nowrap">Oct 2025</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-medium mb-1.5">
                        A clean, distraction-free modern client-side digital reading app facilitating verse search, definitions, and word meanings.
                      </p>
                      <span className="text-[9px] font-black uppercase text-red-600 tracking-wider">Tech: React.js, JavaScript, HTML5, CSS3</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Skills & Education */}
              <div className="md:col-span-4 space-y-8">
                
                {/* Technical Skills */}
                <div>
                  <h2 className="text-lg font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2 mb-4">Skills</h2>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Languages</h4>
                      <div className="flex flex-wrap gap-1">
                        {["Python", "JavaScript", "SQL", "HTML / CSS"].map(s => (
                          <span key={s} className="text-[10px] font-semibold bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-slate-700">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Frameworks / Libs</h4>
                      <div className="flex flex-wrap gap-1">
                        {["React.js", "Node.js", "Express.js", "Streamlit", "Scikit-Learn"].map(s => (
                          <span key={s} className="text-[10px] font-semibold bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-slate-700">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Tools &amp; Tech</h4>
                      <div className="flex flex-wrap gap-1">
                        {["Kubernetes", "Docker", "Red Hat OpenShift", "Git", "VS Code"].map(s => (
                          <span key={s} className="text-[10px] font-semibold bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-slate-700">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-lg font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2 mb-4">Education</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xs font-black text-slate-800">B.Tech in CSE</h3>
                      <p className="text-[10px] text-slate-500 font-bold leading-tight">Dr. A.P.J. Abdul Kalam Technical University</p>
                      <p className="text-[9px] text-slate-400 font-semibold">2024 - 2028</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-black text-slate-800">Class XII (Intermediate)</h3>
                      <p className="text-[10px] text-slate-500 font-bold leading-tight">Shri MahaPrabhu Public School</p>
                      <p className="text-[9px] text-slate-400 font-semibold">2023 - 2024 &bull; Grade: A</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-black text-slate-800">Class X (High School)</h3>
                      <p className="text-[10px] text-slate-500 font-bold leading-tight">Shri MahaPrabhu Public School</p>
                      <p className="text-[9px] text-slate-400 font-semibold">2021 - 2022 &bull; Grade: A</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
