import { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [entered, setEntered] = useState(false);

  // Initialize AOS once when the app mounts
  useEffect(() => {
    AOS.init({ duration: 1000 }); // animations last 1 second
  }, []);

  return (
    <>
      {!entered ? (
        <Landing onEnter={() => setEntered(true)} />
      ) : (
        <>
          <Hero />
          <Projects />
        </>
      )}
    </>
  );
}

export default App;
