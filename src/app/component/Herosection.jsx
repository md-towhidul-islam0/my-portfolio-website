"use client";

import Image from "next/image";
import {
  FileDown,
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
} from "./SocialIcons";
import { portfolioData } from "../data/portfolioData";

export default function Herosection() {
  const { personalInfo, socials } = portfolioData;

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case "Github":
        return <GithubIcon className="w-5 h-5" />;
      case "Linkedin":
        return <LinkedinIcon className="w-5 h-5" />;
      case "Twitter":
        return <TwitterIcon className="w-5 h-5" />;
      case "Facebook":
        return <FacebookIcon className="w-5 h-5" />;
      default:
        return <GithubIcon className="w-5 h-5" />;
    }
  };

  const handleResumeDownload = (e) => {
    if (!personalInfo.resumeUrl || personalInfo.resumeUrl === "#") {
      e.preventDefault();
      alert("Resume PDF is being updated! You can also reach out directly via the Contact section below.");
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content (Text, Designation, CTAs, Socials) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-700/50 text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Greeting & Designation */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
              Hi, I&apos;m{" "}
              <span className="text-gradient block sm:inline mt-1 sm:mt-0">
                {personalInfo.name}
              </span>
            </h1>

            <div className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-slate-300 mb-5">
              <Terminal className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-400">{personalInfo.title}</span>
            </div>

            {/* Tagline / Introduction */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8">
              {personalInfo.tagline}
            </p>

            {/* Action Buttons: Resume & Projects */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-9 w-full sm:w-auto">
              {/* Resume Download Button - Clearly Visible */}
              <a
                href={personalInfo.resumeUrl}
                download="Mohammad_Sakib_Resume.pdf"
                onClick={handleResumeDownload}
                id="hero-resume-btn"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-sm sm:text-base"
              >
                <FileDown className="w-5 h-5 animate-bounce" />
                <span>Download Resume</span>
              </a>

              {/* View Projects CTA */}
              <a
                href="#projects"
                id="hero-projects-btn"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 hover:text-white transition-all duration-200 text-sm sm:text-base group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Links Embedded */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-800/80 w-full justify-center lg:justify-start">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Connect with me:
              </span>
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    id={`hero-social-${social.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    className={`w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${social.color}`}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content: Professional Photo / Avatar Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square">
              {/* Outer Glowing Gradient Ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-600 opacity-40 blur-xl animate-pulse" />

              {/* Card Container */}
              <div className="relative w-full h-full rounded-3xl p-2 bg-gradient-to-b from-slate-700/60 to-slate-900/90 border border-slate-700/50 shadow-2xl overflow-hidden backdrop-blur-xl">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Floating Badges */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Designation</p>
                      <p className="text-sm font-semibold text-white truncate">
                        {personalInfo.title}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-emerald-400 font-medium px-2 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/40">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Pill Top-Right */}
              <div className="absolute -top-4 -right-4 px-3.5 py-1.5 rounded-full bg-slate-900/95 border border-indigo-500/40 shadow-xl flex items-center gap-2 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
                <span className="text-xs font-semibold text-slate-200">MERN Stack</span>
              </div>

              {/* Floating Tech Pill Bottom-Left */}
              <div className="absolute -bottom-3 -left-4 px-3.5 py-1.5 rounded-full bg-slate-900/95 border border-cyan-500/40 shadow-xl flex items-center gap-2 backdrop-blur-md">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span className="text-xs font-semibold text-slate-200">
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
