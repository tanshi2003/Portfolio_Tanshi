import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaArrowDown, FaArrowUpRightFromSquare, FaGithub, FaLinkedinIn } from 'react-icons/fa6';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (!typedRef.current) return undefined;
    const typed = new Typed(typedRef.current, {
      strings: ['Software Engineer', 'AI & Automation Builder', 'Full-stack Developer'],
      typeSpeed: 54,
      backSpeed: 32,
      backDelay: 1700,
      loop: true,
      smartBackspace: true,
      showCursor: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-grid" aria-hidden="true" />
      <div className="home-glow home-glow-one" aria-hidden="true" />
      <div className="home-glow home-glow-two" aria-hidden="true" />
      <div className="max-width home-layout">
        <div className="home-content">
          <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR MEANINGFUL ENGINEERING WORK</div>
          <p className="text-1">Hello, I’m Tanshi Khandelwal.</p>
          <h1 className="text-2">I build digital<br /><span>things that work.</span></h1>
          <div className="text-3"><span className="typing-label">I work across</span> <span className="typing" ref={typedRef} /></div>
          <p className="home-description">
            Engineering thoughtful web experiences, AI-enabled workflows, and practical tools that turn complex problems into clear outcomes.
          </p>
          <div className="home-actions">
            <a className="button button-primary" href="#projects">Explore my work <FaArrowUpRightFromSquare /></a>
            <a className="button button-quiet" href="mailto:tanshikhandelwal03@gmail.com">Let’s talk <span>↗</span></a>
          </div>
          <div className="home-meta">
            <span>BASED IN INDIA</span>
            <span className="meta-divider" />
            <span>SOFTWARE · AI · PRODUCT</span>
          </div>
        </div>

        <aside className="hero-aside reveal" aria-label="Professional snapshot">
          <div className="hero-aside-top"><span>ENGINEERING SNAPSHOT</span><span className="mono">01 / 04</span></div>
          <div className="hero-monogram">TK<span>.</span></div>
          <div className="hero-aside-copy">
            <span className="mono">CURRENT FOCUS</span>
            <strong>AI systems &amp;<br />product engineering</strong>
            <p>Building at the intersection of software, data, and user experience.</p>
          </div>
          <div className="hero-aside-bottom">
            <span><i /> Google project experience</span>
            <span>React · Python · JavaScript</span>
          </div>
        </aside>

        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><FaArrowDown /></a>
        <div className="hero-socials">
          <a href="https://github.com/tanshi2003" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/tanshi-khandelwal-30a1b8209" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
      </div>
    </section>
  );
};

export default Home;
