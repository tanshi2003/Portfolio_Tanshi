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
      </div>
    </section>
  );
};
export default Home;
