import { Github, Linkedin, Mail, ExternalLink, Award, ArrowDown, Phone } from "lucide-react";
import { useMemo, useEffect } from "react";
import { useTypewriter } from "../hooks/useTypewriter";
import DataGuessGame from "./DataGuessGame"; // ✅ correct relative path

export default function Hero() {
  const roles = useMemo(() => ["Data Analyst", "Data Engineer", "Data Scientist"], []);
  const displayedText = useTypewriter(roles, 100, 1500);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">

          {/* Profile Photo + Name */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
            <img
              src="/logos/profile.jpg"
              alt="Aniket Sakharkar"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-lg object-cover"
            />
            <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 animate-slide-up">
              Aniket Sakharkar
            </h1>
          </div>

          {/* Tagline */}
          <div className="h-16 mb-6">
            <p className="text-2xl sm:text-4xl font-semibold text-gradient min-h-16 flex items-center justify-center">
              {displayedText}
              <span className="ml-2 w-1 h-10 bg-blue-600 animate-pulse"></span>
            </p>
          </div>

          {/* Summary */}
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 animate-slide-up leading-relaxed">
            Passionate about transforming raw data into meaningful stories. Experienced in designing scalable data pipelines,
            building interactive dashboards, and applying machine learning to solve complex business challenges.
            Dedicated to bridging the gap between data and decision-making with clarity and impact.
          </p>

          {/* Interactive Data Game */}
          <DataVizGame />

          {/* Contact Info */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <a href="mailto:aniketsakharkar4@gmail.com" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <Mail size={20} />
              <span className="hidden sm:inline">aniketsakharkar4@gmail.com</span>
            </a>
            <span className="text-slate-400">•</span>
            <a href="tel:+18572305126" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <Phone size={20} />
              <span className="hidden sm:inline">+1 857-230-5126</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-10 flex-wrap animate-slide-up">
            <a href="https://www.linkedin.com/in/aniketsakharkar/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://github.com/Asakharkar7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Github size={20} /> GitHub
            </a>
            <a href="https://www.kaggle.com/aniketsakharkar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Award size={20} /> Kaggle
            </a>
          </div>

          {/* CTA Button */}
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 hover:shadow-xl hover:animate-glow transition-all duration-300 text-lg font-medium animate-slide-up">
            Get In Touch <ExternalLink size={20} />
          </a>

          {/* Scroll Down Arrow */}
          <div className="mt-16 animate-float">
            <a href="#about" className="inline-block text-slate-400 hover:text-blue-600 transition-colors">
              <ArrowDown size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
