import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaCode, FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaServer,
  FaBrain, FaDatabase, FaRobot, FaGitAlt, FaCloud, FaTerminal, FaNetworkWired,
  FaChartLine, FaGlobe, FaCodeBranch
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiNextdotjs,
  SiDjango,
  SiScikitlearn,
  SiGithub,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiRailway,
  SiXampp,
  SiDbeaver,
} from 'react-icons/si';

const groups = [
  { id:'01', name:'Languages', caption:'I think in logic.', items:[
    ['C',<FaCode/>],['C++',<SiCplusplus/>],['Python',<FaPython/>],['JavaScript',<FaJsSquare/>]
  ]},
  { id:'02', name:'Frontend', caption:'I build the interface.', items:[
    ['HTML',<FaHtml5/>],['CSS',<FaCss3Alt/>],['React',<FaReact/>],['Next.js',<SiNextdotjs/>],['Bootstrap',<FaCode/>]
  ]},
  { id:'03', name:'Backend', caption:'I make things work.', items:[
    ['Node.js',<FaNodeJs/>],['Express',<FaServer/>],['FastAPI',<FaNetworkWired/>],['Django',<SiDjango/>],['REST APIs',<FaNetworkWired/>],['MySQL',<FaDatabase/>]
  ]},
  { id:'04', name:'AI & Data', caption:'I explore what data can do.', items:[
    ['spaCy',<FaBrain/>],['NLTK',<FaBrain/>],['scikit-learn',<SiScikitlearn/>],['Gemini API',<FaRobot/>],['LLM Evaluation',<FaBrain/>],['Streamlit',<FaCode/>],
    ['Power BI',<FaChartLine/>],['NLP-based Analysis',<FaBrain/>],['Data Validation',<FaDatabase/>],['Basic ML Applications',<SiScikitlearn/>]
  ]},
  { id:'05', name:'Tools', caption:'From local to live.', items:[
    ['Git',<FaGitAlt/>],['GitHub',<SiGithub/>],['Docker',<SiDocker/>],['AWS',<FaCloud/>],['CI / CD',<FaNetworkWired/>],['VS Code',<FaTerminal/>],['FFmpeg',<FaCode/>],
    ['Google Apps Script',<FaRobot/>],['Google Sites',<FaGlobe/>],['PyCharm',<FaPython/>],['SQLite',<FaDatabase/>],
    ['DSA',<FaCode/>],['OOP',<FaCodeBranch/>],['DBMS',<FaDatabase/>],['OS',<FaServer/>],['Computer Networks',<FaNetworkWired/>]
  ]},
  { id:'06', name:'Deployment', caption:'I take projects from build to live.', items:[
    ['Vercel',<SiVercel/>],['Netlify',<SiNetlify/>],['Render',<FaCloud/>],['Railway',<SiRailway/>],['XAMPP',<SiXampp/>],['DBeaver',<SiDbeaver/>]
  ]}
];

export default function Skills(){
  const [selected,setSelected]=useState(0);
  const group=groups[selected];
  return (
    <section className="skills" id="skills">
      <div className="skills-shell">
        <div className="skills-heading">
          <span className="skills-kicker">TECHNICAL SKILLS</span>
          <div className="skills-heading-row">
            <h1 className="skills-title">My tools.<br/><em>My playground.</em></h1>
            <p>Technologies I use to turn ideas into working products, from interface to infrastructure.</p>
          </div>
        </div>
        <div className="skills-panel">
          <div className="skills-panel-head">
            <span>TECH STACK</span>
            <span>{group.id} / 06</span>
          </div>
          <div className="skills-tabs" role="tablist" aria-label="Skill categories">
            {groups.map((g,i)=><button type="button" role="tab" aria-selected={selected===i} className={selected===i?'active':''} key={g.id} onClick={()=>setSelected(i)}>
              <span>{g.id}</span>{g.name}
            </button>)}
          </div>
          <div className="skills-display">
            <AnimatePresence mode="wait">
              <motion.div className="skills-category-view" key={group.id} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.22}}>
                <div className="skills-category-intro">
                  <span className="skills-category-number">{group.id}</span>
                  <div><h2>{group.name}</h2><p>{group.caption}</p></div>
                </div>
                <div className="skills-items">
                  {group.items.map(([name,icon],i)=><motion.div className="skills-item" key={name} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:i*.035}}>
                    <span className="skills-item-icon">{icon}</span><span>{name}</span>
                  </motion.div>)}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="skills-panel-foot"><span>SELECT A CATEGORY TO EXPLORE</span><span>6 AREAS · {groups.reduce((total,g)=>total+g.items.length,0)} SKILLS</span></div>
        </div>
      </div>
    </section>
  );
}
