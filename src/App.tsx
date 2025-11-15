import { useState } from 'react';
import Landing from './components/Landing';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [entered, setEntered] = useState(false);

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
