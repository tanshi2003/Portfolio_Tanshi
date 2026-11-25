import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaArrowUpRightFromSquare, FaGithub, FaLinkedinIn, FaArrowDown } from 'react-icons/fa6';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (!typedRef.current) return undefined;
    const typed = new Typed(typedRef.current, {
      strings: ['AI Product Engineering', 'Full-stack Development', 'Automation & LLM Evaluation'],
      typeSpeed: 48,
      backSpeed: 28,
      backDelay: 1500,
      startDelay: 700,
      loop: true,
      smartBackspace: true,
      showCursor: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-grid" aria-hidden="true" />
      <div className="home-orbit home-orbit-one" aria-hidden="true" />
      <div className="home-orbit home-orbit-two" aria-hidden="true" />
      <div className="home-glow home-glow-one" aria-hidden="true" />
      <div className="home-glow home-glow-two" aria-hidden="true" />

      <div className="max-width home-layout">
        <div className="home-content">
          <div className="eyebrow hero-enter hero-enter-1">
            <span className="status-dot" />
            <span>ENGINEERING · AI · PRODUCT</span>
            <span className="eyebrow-rule" />
            <span className="eyebrow-location">INDIA / IST</span>
          </div>

          <p className="text-1 hero-enter hero-enter-2">Hi, I'm Tanshi Khandelwal.</p>

          <h1 className="text-2 hero-enter hero-enter-3">
            I build software<br />
            <span>with purpose<span className="hero-period">.</span></span>
          </h1>

          <div className="text-3 hero-enter hero-enter-4">
            <span className="typing-label">My work spans</span>
            <span className="typing" ref={typedRef} />
          </div>

          <p className="home-description hero-enter hero-enter-5">
            I work across full-stack development, AI-enabled workflows, and product quality,
            turning complex ideas into reliable, useful experiences.
          </p>

          <div className="home-actions hero-enter hero-enter-6">
            <a className="button button-primary" href="#projects">
              View selected work <FaArrowUpRightFromSquare />
            </a>
            <a className="button button-quiet" href="mailto:tanshikhandelwal03@gmail.com">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="home-meta hero-enter hero-enter-7">
            <span>REACT</span><i />
            <span>PYTHON</span><i />
            <span>JAVASCRIPT</span><i />
            <span>AI SYSTEMS</span>
          </div>
        </div>

        <aside className="hero-console hero-enter hero-enter-5" aria-label="Developer profile terminal">
          <div className="console-chrome">
            <div className="console-lights" aria-hidden="true"><i /><i /><i /></div>
            <span>tanshi@portfolio <b>~</b></span>
            <span className="console-live"><i /> ONLINE</span>
          </div>

          <div className="console-body">
            <div className="console-line"><span className="console-muted">01</span><span className="console-purple">const</span> <span className="console-blue">engineer</span> = {'{'}</div>
            <div className="console-line console-indent"><span className="console-muted">02</span><span className="console-key">name:</span> <span className="console-green">'Tanshi Khandelwal'</span>,</div>
            <div className="console-line console-indent"><span className="console-muted">03</span><span className="console-key">focus:</span> <span className="console-green">'Building useful things'</span>,</div>
            <div className="console-line console-indent"><span className="console-muted">04</span><span className="console-key">stack:</span> [</div>
            <div className="console-line console-indent-2"><span className="console-muted">05</span><span className="console-green">'React'</span>, <span className="console-green">'Node.js'</span>,</div>
            <div className="console-line console-indent-2"><span className="console-muted">06</span><span className="console-green">'Python'</span>, <span className="console-green">'AI'</span></div>
            <div className="console-line console-indent"><span className="console-muted">07</span>],</div>
            <div className="console-line console-indent"><span className="console-muted">08</span><span className="console-key">mindset:</span> <span className="console-green">'Always learning'</span></div>
            <div className="console-line"><span className="console-muted">09</span>{'}'};</div>
            <div className="console-prompt"><span>10</span><b>→</b> <span className="console-command">engineer.build()</span><i /></div>
          </div>

          <div className="console-footer">
            <span><i /> OPEN TO COLLABORATION</span>
            <span>BUILD / LEARN / REPEAT</span>
          </div>
          <div className="console-float console-float-one">{'{ }'} <span>clean code</span></div>
          <div className="console-float console-float-two">✳ <span>curious by default</span></div>
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
