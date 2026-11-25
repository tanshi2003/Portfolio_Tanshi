import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Home />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer className="site-footer">
          <div className="footer-inner">
            <span>© {new Date().getFullYear()} Tanshi Khandelwal</span>
            <span>Designed with intention. Built with code.</span>
            <a href="#home">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
