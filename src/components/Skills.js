import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaCode, FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaServer,
  FaBrain, FaDatabase, FaRobot, FaChartLine, FaGitAlt, FaCloudUploadAlt, FaGlobe,
  FaCodeBranch, FaNetworkWired
} from 'react-icons/fa';
import {
  SiCplusplus, SiNextdotjs, SiDjango, SiScikitlearn, SiGithub, SiVscodium, SiVercel,
  SiNetlify, SiRailway, SiXampp, SiDbeaver
} from 'react-icons/si';

const chapters = [
  { title: 'The Language', subtitle: 'Syntax, logic & problem solving', mark: '01', note: 'The building blocks.', techs: [
    ['C', <FaCode />], ['C++', <SiCplusplus />], ['Python', <FaPython />], ['JavaScript', <FaJsSquare />]
  ]},
  { title: 'The Interface', subtitle: 'Front-end & experience engineering', mark: '02', note: 'Where ideas meet people.', techs: [
    ['HTML', <FaHtml5 />], ['CSS', <FaCss3Alt />], ['React.js', <FaReact />], ['Next.js', <SiNextdotjs />], ['Bootstrap', <FaCode />]
  ]},
  { title: 'The Engine', subtitle: 'Back-end & application systems', mark: '03', note: 'Behind every interaction.', techs: [
    ['Node.js', <FaNodeJs />], ['Express.js', <FaServer />], ['FastAPI', <FaNetworkWired />], ['Django', <SiDjango />], ['REST APIs', <FaNetworkWired />]
  ]},
  { title: 'Intelligence', subtitle: 'AI, language & data exploration', mark: '04', note: 'Patterns, predictions, meaning.', techs: [
    ['spaCy', <FaBrain />], ['NLTK', <FaBrain />], ['scikit-learn', <SiScikitlearn />], ['Gemini API', <FaRobot />], ['LLM Evaluation', <FaBrain />], ['Gemini API', <FaRobot />], ['Streamlit', <FaChartLine />]
  ]},
  { title: 'Data & Systems', subtitle: 'Storage, architecture & fundamentals', mark: '05', note: 'The quiet infrastructure.', techs: [
    ['MySQL', <FaDatabase />], ['SQLite', <FaDatabase />], ['DBMS', <FaDatabase />], ['DSA / OOP', <FaCode />], ['Operating Systems', <FaServer />], ['Networks', <FaNetworkWired />]
  ]},
  { title: 'The Workbench', subtitle: 'Tools, deployment & delivery', mark: '06', note: 'From local to live.', techs: [
    ['Git', <FaGitAlt />], ['GitHub', <SiGithub />], ['VS Code', <SiVscodium />], ['PyCharm', <FaPython />], ['Docker', <FaServer />], ['GitHub Actions', <FaCodeBranch />], ['AWS · EC2 / S3', <FaCloudUploadAlt />], ['CI / CD', <FaNetworkWired />], ['FFmpeg', <FaCode />], ['Google Apps Script', <FaRobot />], ['Docker', <FaServer />], ['Netlify / Vercel', <FaGlobe />], ['Render', <FaCloudUploadAlt />]
  ]},
];

const Skills = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const current = chapters[active];
  const change = (next) => {
    if (next < 0 || next >= chapters.length || next === active) return;
    setDirection(next > active ? 1 : -1);
    setActive(next);
  };
  useEffect(() => {
    const onKey = (event) => {
      if (!document.querySelector('#skills:hover')) return;
      if (event.key === 'ArrowRight') change(active + 1);
      if (event.key === 'ArrowLeft') change(active - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <section className="skills" id="skills">
      <div className="skills-shell">
        <div className="skills-heading">
          <span className="skills-kicker">FIELD NOTES / 001 · TECHNICAL ARCHIVE</span>
          <div className="skills-heading-row">
            <h1 className="skills-title">Things I know.<br/><em>Things I build.</em></h1>
            <p>A catalog of tools, systems and ideas I've worked with.<br/>Collected through projects, experiments and shipping things.</p>
          </div>
        </div>

        <div className="skills-book">
          <div className="skills-book-top"><span>THE STACK / ARCHIVE OF SYSTEMS</span><span>VOL. 01 — 06</span></div>
          <div className="skills-spread">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div className="skills-left-page" key={current.mark+'-left'} custom={direction}
                initial={{opacity:0, rotateY: direction > 0 ? 10 : -10, x: direction > 0 ? 18 : -18}}
                animate={{opacity:1,rotateY:0,x:0}} exit={{opacity:0, x: direction > 0 ? -18 : 18, rotateY:direction > 0 ? -8 : 8}}
                transition={{duration:.42,ease:[.22,.61,.36,1]}}>
                <div className="skills-page-label">CHAPTER {current.mark}</div>
                <div className="skills-chapter-number">{current.mark}</div>
                <div className="skills-chapter-title">{current.title}</div>
                <div className="skills-chapter-sub">{current.subtitle}</div>
                <div className="skills-page-rule"/>
                <p className="skills-chapter-note">{current.note}</p>
                <div className="skills-page-footer"><span>NOTES FROM THE WORKBENCH</span><span>{current.mark} / 06</span></div>
              </motion.div>
            </AnimatePresence>
            <div className="skills-right-page">
              <div className="skills-page-label">INDEX OF TOOLS / {current.techs.length.toString().padStart(2,'0')} ITEMS</div>
              <AnimatePresence mode="wait">
                <motion.div className="skills-tech-list" key={current.mark+'-tech'} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.25}}>
                  {current.techs.map(([name,icon],i)=>(
                    <motion.div className="skills-tech-entry" key={name} initial={{opacity:0,x:12}} animate={{opacity:1,x:0}} transition={{delay:i*.035}}>
                      <span className="skills-tech-icon">{icon}</span><span className="skills-tech-name">{name}</span><span className="skills-tech-num">{String(i+1).padStart(2,'0')}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
              <div className="skills-page-footer"><span>TECHNICAL INDEX</span><span>SCAN / EXPLORE</span></div>
            </div>
          </div>
          <div className="skills-book-bottom">
            <div className="skills-chapter-nav" role="tablist" aria-label="Skill chapters">
              {chapters.map((chapter,i)=><button key={chapter.mark} type="button" role="tab" aria-selected={active===i} className={active===i?'active':''} onClick={()=>change(i)}><span>{chapter.mark}</span>{chapter.title}</button>)}
            </div>
            <div className="skills-page-controls"><button type="button" onClick={()=>change(active-1)} disabled={active===0} aria-label="Previous chapter">←</button><span>{current.mark} / 06</span><button type="button" onClick={()=>change(active+1)} disabled={active===chapters.length-1} aria-label="Next chapter">→</button></div>
          </div>
        </div>
        <div className="skills-footnote"><span>AN OPEN INDEX, NOT A FINISHED LIST.</span><span>USE THE ARROWS OR SELECT A CHAPTER TO TURN THE PAGE.</span></div>
      </div>
    </section>
  );
};
export default Skills;
