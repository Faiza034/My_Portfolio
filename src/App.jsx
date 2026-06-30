import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import './App.css'
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
}

export default App
