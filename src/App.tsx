import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import About from './components/About';
import Highlights from './components/Highlights';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 scroll-smooth">
      <Navigation />
      <Hero />
      <StatsSection />
      <Highlights />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
