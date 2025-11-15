import { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {!entered ? (
        <Landing onEnter={() => setEntered(true)} />
      ) : (
        <>
          <Hero />
          <Projects />
          <Experience />
          <Education />
        </>
      )}
    </>
  );
}

export default App;
