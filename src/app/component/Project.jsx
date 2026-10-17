"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  FolderGit2,
  Sparkles,
  X,
  Layers,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";

export default function Project() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-800/40 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A showcase of full-stack web applications, featuring clean architecture, responsive interfaces, and practical problem-solving.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="group rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-xl hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Overlay */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <Image
                  src={proj.image}
                  alt={proj.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                {/* Quick Action Badges on Image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-700/80 text-cyan-300 backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                    {proj.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 line-clamp-3 leading-relaxed">
                    {proj.shortDescription}
                  </p>
                </div>

                {/* Buttons: View More / Details + Quick Links */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  {/* View More / Details Button */}
                  <button
                    onClick={() => openProjectDetails(proj)}
                    id={`view-details-${proj.id}`}
                    className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-md shadow-indigo-600/20 transition-all duration-200 cursor-pointer"
                  >
                    <span>View More / Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  {/* Direct Live Link */}
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo of ${proj.name}`}
                    className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  {/* Direct GitHub Client Link */}
                  <a
                    href={proj.githubClientUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub Client repo for ${proj.name}`}
                    className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
          onClick={closeProjectDetails}
        >
          <div
            className="relative w-full max-w-3xl my-8 rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeProjectDetails}
              id="close-modal-btn"
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/40">
                Detailed Case Study
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {selectedProject.name}
              </h3>
            </div>

            {/* Project Image Banner */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-slate-800 bg-slate-950">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>

            {/* Main Tech Stack */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Main Technology Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-indigo-950/60 border border-indigo-700/50 text-indigo-300 text-xs sm:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Brief Description / Overview */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Project Overview & Description
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {selectedProject.overview || selectedProject.shortDescription}
              </p>
            </div>

            {/* Challenges Faced */}
            <div className="mb-6 p-5 rounded-2xl bg-amber-950/20 border border-amber-900/40">
              <h4 className="text-sm font-bold text-amber-300 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Challenges Faced During Development</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedProject.challenges}
              </p>
            </div>

            {/* Potential Improvements & Future Plans */}
            <div className="mb-8 p-5 rounded-2xl bg-indigo-950/20 border border-indigo-900/40">
              <h4 className="text-sm font-bold text-indigo-300 mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-indigo-400" />
                <span>Potential Improvements & Future Plans</span>
              </h4>
              <div className="space-y-2">
                {selectedProject.improvements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons: Live Link & GitHub Repo (Only Client) */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="modal-live-link"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-md shadow-indigo-600/25 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Project Demo</span>
              </a>

              <a
                href={selectedProject.githubClientUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="modal-github-client-link"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:text-white transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Client Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
