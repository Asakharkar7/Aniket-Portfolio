import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Landing({ onEnter }) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = [
    'I engineer data…',
    'I design insights…',
    'I automate pipelines…',
    'I visualize intelligence…',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      // Adjust speed for typing vs deleting
      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        // Pause at full text
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white flex flex-col items-center justify-center px-6">
      {/* Name */}
      <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-center animate-fade-in">
        Aniket Sakharkar
      </h1>

      {/* Cycling tagline */}
      <h2 className="text-2xl sm:text-4xl font-semibold text-blue-400 mb-6 text-center animate-fade-in">
        {text}
        <span className="ml-2 w-1 h-8 bg-blue-400 animate-pulse inline-block"></span>
      </h2>

      {/* Summary */}
      <p className="text-lg sm:text-xl text-slate-300 max-w-xl text-center mb-10 animate-slide-up">
        Welcome to my portfolio — explore projects in data engineering, machine learning, and analytics.
      </p>

      {/* CTA Button */}
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
