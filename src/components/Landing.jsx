import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Landing({ onEnter }) {
  const [showText, setShowText] = useState('');
  const introText = 'Hi, I’m Aniket — a Data Analyst who turns data into decisions.';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setShowText(introText.slice(0, index));
      index++;
      if (index > introText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-center animate-fade-in">
        {showText}
      </h1>
      <p className="text-lg sm:text-xl text-slate-300 max-w-xl text-center mb-10 animate-slide-up">
        Welcome to my portfolio — explore projects in data engineering, machine learning, and analytics.
      </p>
      <button
        onClick={onEnter}
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-medium transition-all duration-300 animate-glow"
      >
        Enter Portfolio
        <ArrowRight size={20} />
      </button>
    </div>
  );
}
