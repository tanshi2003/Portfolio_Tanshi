import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    if (!typedRef.current) return undefined;
    const typed = new Typed(typedRef.current, {
      strings: ['AI Product Engineering', 'Full-stack Development', 'Automation & LLM Evaluation'],
      typeSpeed: 48, backSpeed: 28, backDelay: 1500, startDelay: 700,
      loop: true, smartBackspace: true, showCursor: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="home" id="home">
      <div className="max-width home-layout">
        <div className="home-content">
          <p className="text-1">Hi, I'm Tanshi Khandelwal.</p>
          <h1 className="text-2">I build software<br /><span>with purpose.</span></h1>
          <div className="text-3"><span className="typing-label">I work in</span><span className="typing" ref={typedRef} /></div>
          <p className="home-description">I work across full-stack development, AI-enabled workflows, and product quality, turning complex ideas into reliable, useful experiences.</p>
          <div className="home-actions">
            <a className="button button-primary" href="#projects">View my work <FaArrowUpRightFromSquare /></a>
            <a className="button button-quiet" href="https://mail.google.com/mail/?view=cm&fs=1&to=tanshikhandelwal03@gmail.com" target="_blank" rel="noreferrer">Get in touch</a>
          </div>
        </div>
        <aside className="hero-console" aria-label="Code preview showing a software project interface">
          <div className="console-chrome">
            <div className="console-lights"><i /><i /><i /></div>
            <span>project.config.js</span>
            <span className="console-live"><i /> LIVE PREVIEW</span>
          </div>
          <div className="console-body">
            <div className="console-line"><span className="console-muted">01</span><span className="console-purple">const</span> <span className="console-blue">portfolio</span> = {'{'}</div>
            <div className="console-line console-indent"><span className="console-muted">02</span><span className="console-key">focus</span>: <span className="console-green">'building useful things'</span>,</div>
            <div className="console-line console-indent"><span className="console-muted">03</span><span className="console-key">stack</span>: [</div>
            <div className="console-line console-indent-2"><span className="console-muted">04</span><span className="console-green">'React'</span>, <span className="console-green">'Node.js'</span>, <span className="console-green">'Python'</span>,</div>
            <div className="console-line console-indent-2"><span className="console-muted">05</span><span className="console-green">'AI / Automation'</span></div>
            <div className="console-line console-indent"><span className="console-muted">06</span>],</div>
            <div className="console-line console-indent"><span className="console-muted">07</span><span className="console-key">approach</span>: <span className="console-green">'curious → build → improve'</span></div>
            <div className="console-line"><span className="console-muted">08</span>{'}'};</div>
            <div className="console-prompt"><span className="console-muted">09</span><b>›</b><span className="console-command">npm run build</span><i /></div>
          </div>
          <div className="console-footer"><span><i /> BUILD READY</span><span>REACT · NODE · PYTHON</span></div>
        </aside>
      </div>
    </section>
  );
};
export default Home;
