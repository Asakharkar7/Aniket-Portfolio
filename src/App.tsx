import { useState } from 'react';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import Highlights from './components/Highlights';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [entered, setEntered] = useState(false);

  return (
        <Landing onEnter={() => setEntered(true)} />
      ) : (
        <>
          <Navigation />
          <Hero />
          <StatsSection />
          <Highlights />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
