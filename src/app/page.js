import Navbar from "./component/Navbar";
import Herosection from "./component/Herosection";
import AboutSection from "./component/AboutSection";
import SkillsSection from "./component/SkillsSection";
import EducationExperience from "./component/EducationExperience";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#070b14] text-slate-100 overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Portfolio Content */}
      <main className="flex-1 flex flex-col">
        <Herosection />
        <AboutSection />
        <SkillsSection />
        <EducationExperience />
        <Project />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
