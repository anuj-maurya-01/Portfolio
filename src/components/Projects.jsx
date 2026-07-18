import React from 'react';

// Import project screenshots
import employeeImage from '../assets/projects/employee_attrition_dashboard.png';
import schedulerImage from '../assets/projects/cpu_scheduler_simulator.png';
import gitaImage from '../assets/projects/bhagavad_gita_reader.png';

const projects = [
  {
    id: 1,
    title: "Employee Attrition Prediction System",
    category: "Machine Learning / HR Analytics",
    description: "An end-to-end Machine Learning solution predicting employee attrition on the IBM HR Analytics dataset, deployed via an interactive Streamlit dashboard.",
    features: [
      "Robust preprocessing pipeline (ColumnTransformer, SMOTE, IQR outlier capping).",
      "Model benchmarking with Logistic Regression, Random Forest, and XGBoost (87.78% accuracy).",
      "Interactive Streamlit dashboard translating data into actionable HR retention insights."
    ],
    tech: ["Python", "Scikit-Learn", "XGBoost", "Streamlit"],
    imageAsset: employeeImage,
    liveUrl: "https://github.com/anujmaurya1004/Employee-Attrition-Prediction",
    githubUrl: "https://github.com/anujmaurya1004/Employee-Attrition-Prediction"
  },
  {
    id: 2,
    title: "CPU Scheduling Visualizer",
    category: "Operating Systems / Web App",
    description: "An interactive React simulator to visualize and compare CPU scheduling algorithms (FCFS, SJF, SRTF, RR, Priority) with real-time Gantt charts.",
    features: [
      "Simulates FCFS, SJF, SRTF, Priority Scheduling (Preemptive & Non-Preemptive), and Round Robin.",
      "Calculates and benchmarks waiting time (WT), turnaround time (TAT), and response time (RT).",
      "Dynamic process arrival configuration, burst time sliders, and Gantt timeline rendering."
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
    imageAsset: schedulerImage,
    liveUrl: "https://github.com/anujmaurya1004/CPU-Scheduling-Visualizer",
    githubUrl: "https://github.com/anujmaurya1004/CPU-Scheduling-Visualizer"
  },
  {
    id: 3,
    title: "Bhagavad Gita - A Digital Journey",
    category: "Web Application / Culture",
    description: "A distraction-free reading platform allowing users to seamlessly browse, search, and contemplate all chapters and verses of the Bhagavad Gita.",
    features: [
      "Immersive, distraction-free reading user interface optimized for desktop and mobile.",
      "Fast, seamless client-side routing and verse navigation.",
      "Clean translations, meanings, and word-by-word commentary."
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
    imageAsset: gitaImage,
    liveUrl: "https://github.com/anujmaurya1004/Bhagavad-Gita",
    githubUrl: "https://github.com/anujmaurya1004/Bhagavad-Gita"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans scroll-mt-16">
      
      {/* Background abstract element */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/[0.02] rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20">
          <div data-aos="fade-up">
            <span className="text-[#ff2a2a] text-sm font-bold tracking-[0.2em] uppercase mb-3 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Selected Projects
            </h2>
          </div>
          <p data-aos="fade-up" data-aos-delay="100" className="text-gray-600 text-sm md:text-base max-w-sm mt-4 md:mt-0 font-medium leading-relaxed">
            A small selection of software systems and full-stack applications built focusing on performance, data visualization, and clean UI.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="group bg-gray-50 border border-gray-200 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-gray-300 hover:bg-gray-100/50 transition-all duration-300 shadow-md"
            >
              <div>
                {/* Visual Header/Mockup - Click to Open Link */}
                <a 
                  href={project.liveUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-48 relative overflow-hidden group/link cursor-pointer border-b border-gray-200/60 bg-gray-100"
                >
                  <img 
                    src={project.imageAsset} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/[0.03] group-hover/link:bg-black/0 transition-colors duration-300"></div>
                  
                  {/* Category Tag Overlay */}
                  <span className="absolute top-4 left-4 text-[9px] uppercase tracking-wider font-bold bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-white">
                    {project.category}
                  </span>
                  
                  {/* Link Icon Overlay */}
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-slate-800 shadow-md border border-gray-200/50 group-hover/link:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>

                {/* Info Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 group-hover:text-[#ff2a2a] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-605 text-sm leading-relaxed mb-4 font-semibold">
                    {project.description}
                  </p>
                  
                  {/* Bullet Features */}
                  <ul className="text-xs text-gray-500 space-y-1.5 list-disc pl-4 font-medium mb-4">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Tech Stack tags */}
              <div className="px-6 pb-8 md:px-8 md:pb-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[11px] font-bold px-3 py-1 rounded-md bg-gray-200/50 text-gray-700 border border-gray-300/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Links */}
                <div className="flex items-center gap-4">
                  {/* Live Link */}
                  <a 
                    href={project.liveUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-black text-white font-bold text-xs hover:bg-[#ff2a2a] hover:text-white transition-all duration-300 shadow-md"
                  >
                    <span>View Project</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  
                  {/* GitHub Link */}
                  <a 
                    href={project.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gray-200 text-gray-700 font-bold text-xs border border-gray-300 hover:border-gray-450 hover:text-black transition-all duration-300"
                  >
                    <span>GitHub</span>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
