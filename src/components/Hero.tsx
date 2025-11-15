import { Github, Linkedin, Mail, Phone, ExternalLink, Award, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Data Analyst', 'Data Engineer', 'Data Scientist'];
  const { displayedText } = useTypewriter(roles[roleIndex], 100);

  useEffect(() => {
    if (displayedText === roles[roleIndex]) {
      const timer = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [displayedText, roleIndex]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <div className="mb-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6">
              <p className="text-blue-700 text-sm font-semibold">Welcome to my portfolio</p>
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 mb-6 animate-slide-up">
            Aniket Sakharkar
          </h1>

          <div className="h-16 mb-6">
            <p className="text-2xl sm:text-4xl font-semibold text-gradient min-h-16 flex items-center justify-center">
              {displayedText}
              {displayedText !== roles[roleIndex] && (
                <span className="ml-2 inline-block w-1 h-10 bg-blue-600 animate-pulse"></span>
              )}
            </p>
          </div>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 animate-slide-up leading-relaxed">
            Turning complex data into strategic insights. Specializing in building scalable pipelines,
            crafting interactive dashboards, and deploying ML solutions that drive real business impact.
          </p>

          <div className="flex justify-center items-center gap-6 mb-8"> 
            <a href="mailto:aniketsakharkar4@gmail.com" 
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors" 
              > 
              <Mail size={20} /> 
              <span className="hidden sm:inline">aniketsakharkar4@gmail.com</span> 
            </a> 
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">+1 857-230-5126</span> 
          </div> 
          
          <div className="flex justify-center gap-4 mb-10 flex-wrap animate-slide-up"> 
            <a 
              href="https://www.linkedin.com/in/aniketsakharkar/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" 
              >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Asakharkar7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.kaggle.com/aniketsakharkar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Award size={20} />
              Kaggle
            </a>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 hover:shadow-xl hover:animate-glow transition-all duration-300 text-lg font-medium animate-slide-up"
          >
            Get In Touch
            <ExternalLink size={20} />
          </a>

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
