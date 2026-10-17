"use client";

import {
  Trophy,
  Palette,
  BookOpen,
  Camera,
  Heart,
  Sparkles,
  Rocket,
  Compass,
  CheckCircle2,
  Code,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function AboutSection() {
  const { about } = portfolioData;

  const getHobbyIcon = (iconName) => {
    switch (iconName) {
      case "Trophy":
        return <Trophy className="w-6 h-6 text-amber-400" />;
      case "Palette":
        return <Palette className="w-6 h-6 text-pink-400" />;
      case "BookOpen":
        return <BookOpen className="w-6 h-6 text-cyan-400" />;
      case "Camera":
        return <Camera className="w-6 h-6 text-emerald-400" />;
      default:
        return <Heart className="w-6 h-6 text-rose-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Background Subtle Highlights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Discover More</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Myself</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Get to know my story, how I fell in love with code, what fuels my creativity, and how I approach engineering solutions.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Programming Journey & Work I Enjoy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Programming Journey Card */}
            <div className="p-7 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-xl hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">My Programming Journey</h3>
                  <p className="text-xs text-slate-400">From Curiosity to Craftsmanship</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {about.journey}
              </p>
            </div>

            {/* Type of Work I Enjoy Card */}
            <div className="p-7 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-xl hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center">
                  <Code className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">The Work I Truly Enjoy</h3>
                  <p className="text-xs text-slate-400">Engineering Meets Aesthetics</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {about.workEnjoyed}
              </p>
            </div>

            {/* Personality Traits Badges */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 to-indigo-950/40 border border-slate-800">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>My Core Personality & Values</span>
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {about.personalityTraits.map((trait, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-xs sm:text-sm font-medium text-slate-200 shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hobbies & Interests Outside Programming */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-pink-600/20 border border-pink-500/30 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Hobbies & Interests</h3>
                  <p className="text-xs text-slate-400">Life Outside the Code Editor</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {about.hobbies.map((hobby, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-slate-700 flex items-start gap-3.5 transition-all duration-200 group"
                  >
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                      {getHobbyIcon(hobby.icon)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {hobby.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {hobby.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Philosophy Quote */}
              <div className="mt-6 p-4 rounded-xl bg-indigo-950/30 border border-indigo-900/50">
                <p className="text-xs italic text-indigo-200 leading-relaxed text-center">
                  &ldquo;Great code solves problems today; clean architecture empowers teams for tomorrow.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
