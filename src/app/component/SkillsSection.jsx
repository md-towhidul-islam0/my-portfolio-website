"use client";

import { useState } from "react";
import { Cpu, Layout, Server, Wrench, Layers } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const { skills } = portfolioData;

  const categories = [
    { id: "all", name: "All Skills", icon: Layers },
    { id: "frontend", name: "Frontend", icon: Layout },
    { id: "backend", name: "Backend", icon: Server },
    { id: "tools", name: "Tools & DevOps", icon: Wrench },
  ];

  const getFilteredSkills = () => {
    if (activeTab === "frontend") return [{ catName: "Frontend Development", items: skills.frontend, color: "from-cyan-500 to-blue-500" }];
    if (activeTab === "backend") return [{ catName: "Backend & Database", items: skills.backend, color: "from-indigo-500 to-purple-500" }];
    if (activeTab === "tools") return [{ catName: "Tools & Technologies", items: skills.tools, color: "from-emerald-500 to-teal-500" }];

    return [
      { catName: "Frontend Development", items: skills.frontend, color: "from-cyan-500 to-blue-500" },
      { catName: "Backend & Database", items: skills.backend, color: "from-indigo-500 to-purple-500" },
      { catName: "Tools & Technologies", items: skills.tools, color: "from-emerald-500 to-teal-500" },
    ];
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-800/40 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A comprehensive look at my core competencies, programming languages, modern frameworks, and engineering tools.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  id={`skill-filter-${cat.id}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 scale-105"
                      : "bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredSkills().map((group, gIdx) => (
            <div
              key={gIdx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-between pb-3 border-b border-slate-800">
                  <span>{group.catName}</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-cyan-400 font-mono">
                    {group.items.length} Skills
                  </span>
                </h3>

                <div className="space-y-5">
                  {group.items.map((skill, sIdx) => (
                    <div key={sIdx} className="group">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-medium">
                            {skill.badge}
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-300">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Visual Graphical Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-800/90 overflow-hidden p-[1px]">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${group.color} transition-all duration-1000 ease-out group-hover:brightness-110`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
