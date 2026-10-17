"use client";

import { useState } from "react";
import { GraduationCap, Briefcase, Calendar, MapPin, Award, CheckCircle } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function EducationExperience() {
  const [activeView, setActiveView] = useState("all");
  const { education, experience } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background Glow */}
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Professional Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Experience</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Detailed overview of my academic foundation and hands-on professional software engineering contributions.
          </p>

          {/* Toggle View Filter */}
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 mt-8">
            <button
              onClick={() => setActiveView("all")}
              id="edu-exp-all"
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeView === "all"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setActiveView("education")}
              id="edu-exp-education"
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeView === "education"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveView("experience")}
              id="edu-exp-experience"
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeView === "experience"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Experience
            </button>
          </div>
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education Column */}
          {(activeView === "all" || activeView === "education") && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-cyan-600/20 border border-cyan-500/30 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Educational Qualification</h3>
                  <p className="text-xs text-slate-400">Academic Background & Credentials</p>
                </div>
              </div>

              <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:to-indigo-500">
                {education.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Node Dot */}
                    <div className="absolute -left-[30px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

                    <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg hover:border-cyan-500/40 transition-all duration-300">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-950/70 border border-cyan-800/40 text-cyan-300 text-xs font-semibold">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/40">
                          {item.result}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.degree}
                      </h4>
                      <p className="text-sm font-medium text-slate-300 mt-1">
                        {item.institution}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                        {item.description}
                      </p>

                      {item.highlights && item.highlights.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5">
                          {item.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                              <Award className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience Column */}
          {(activeView === "all" || activeView === "experience") && ( <div></div>
            // <div id="experience" className="space-y-6">
            //   <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
            //     <div className="p-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
            //       <Briefcase className="w-5 h-5" />
            //     </div>
            //     <div>
            //       <h3 className="text-xl font-bold text-white">Professional Experience</h3>
            //       <p className="text-xs text-slate-400">Career & Real-World Exposure</p>
            //     </div>
            //   </div>

            //   <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:to-purple-500">
            //     {experience.map((exp, idx) => (
            //       <div key={idx} className="relative group">
            //         {/* Node Dot */}
            //         <div className="absolute -left-[30px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-400 group-hover:scale-125 transition-transform" />

            //         <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg hover:border-indigo-500/40 transition-all duration-300">
            //           <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            //             <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-950/70 border border-indigo-800/40 text-indigo-300 text-xs font-semibold">
            //               <Calendar className="w-3 h-3" />
            //               {exp.period}
            //             </span>
            //             <span className="inline-flex items-center gap-1 text-xs text-slate-400">
            //               <MapPin className="w-3 h-3" />
            //               {exp.location}
            //             </span>
            //           </div>

            //           <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
            //             {exp.role}
            //           </h4>
            //           <p className="text-sm font-semibold text-cyan-400 mt-0.5">
            //             {exp.company}
            //           </p>
            //           <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            //             {exp.description}
            //           </p>

            //           {exp.responsibilities && exp.responsibilities.length > 0 && (
            //             <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2">
            //               {exp.responsibilities.map((resp, rIdx) => (
            //                 <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
            //                   <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
            //                   <span>{resp}</span>
            //                 </div>
            //               ))}
            //             </div>
            //           )}
            //         </div>
            //       </div>
            //     ))}
            //   </div>
            // </div>
          )}
        </div>
      </div>
    </section>
  );
}
