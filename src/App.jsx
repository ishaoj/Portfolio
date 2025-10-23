import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Extracurricular from './components/Extracurricular';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import './styles/globals.css';

function App() {
  return (
    <div className="bg-background min-h-screen relative">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Main scrollable content */}
      <main className="relative z-10">
        <Home />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Achievements />
        <Extracurricular />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

