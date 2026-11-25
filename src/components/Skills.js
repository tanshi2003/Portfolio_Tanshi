import React from 'react';
import { motion } from 'framer-motion';
import {
 FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaNodeJs, FaServer, FaPython,
 FaBrain, FaRobot, FaGitAlt, FaCloud, FaTerminal, FaNetworkWired, FaChartLine,
 FaCode
} from 'react-icons/fa';
import {
 SiNextdotjs, SiDjango, SiCplusplus, SiScikitlearn, SiDocker, SiGithub, SiMysql,
 SiExpress, SiFastapi, SiStreamlit
} from 'react-icons/si';

const groups=[
 {title:'Frontend',icon:<FaReact/>,skills:[['React',<FaReact/>],['Next.js',<SiNextdotjs/>],['HTML5',<FaHtml5/>],['CSS3',<FaCss3Alt/>],['JavaScript',<FaJsSquare/>],['Bootstrap',<FaBootstrap/>]]},
 {title:'Backend',icon:<FaServer/>,skills:[['Node.js',<FaNodeJs/>],['Express',<SiExpress/>],['Python',<FaPython/>],['Django',<SiDjango/>],['FastAPI',<SiFastapi/>],['MySQL',<SiMysql/>],['REST APIs',<FaNetworkWired/>]]},
 {title:'Programming Languages',icon:<FaCode/>,skills:[['C',<FaCode/>],['C++',<SiCplusplus/>],['Python',<FaPython/>],['JavaScript',<FaJsSquare/>]]},
 {title:'AI, Data & Tools',icon:<FaBrain/>,skills:[['spaCy',<FaBrain/>],['NLTK',<FaBrain/>],['scikit-learn',<SiScikitlearn/>],['Gemini API',<FaRobot/>],['LLM Evaluation',<FaBrain/>],['Streamlit',<SiStreamlit/>],['Power BI',<FaChartLine/>],['Git',<FaGitAlt/>],['GitHub',<SiGithub/>],['Docker',<SiDocker/>],['AWS',<FaCloud/>],['CI/CD',<FaNetworkWired/>],['VS Code',<FaTerminal/>],['FFmpeg',<FaCode/>]]}
];

export default function Skills(){
 return <section className="skills" id="skills">
  <div className="skills-shell">
   <div className="skills-heading">
    <span className="skills-kicker">SKILLS & TECHNOLOGIES</span>
    <div className="skills-heading-row">
     <h1 className="skills-title">My tech <em>stack.</em></h1>
     <p>A toolkit shaped by building real projects, experimenting with ideas, and learning by doing.</p>
    </div>
   </div>
   <div className="skills-card-grid">
    {groups.map((group,index)=><motion.article className="skills-category-card" key={group.title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.18}} transition={{duration:.4,delay:index*.07}}>
     <div className="skills-card-heading"><span className="skills-card-icon">{group.icon}</span><h2>{group.title}</h2><span className="skills-card-count">{String(group.skills.length).padStart(2,'0')}</span></div>
     <div className="skills-chip-grid">{group.skills.map(([name,icon])=><div className="skills-chip" key={name}><span className="skills-chip-icon">{icon}</span><span>{name}</span></div>)}</div>
    </motion.article>)}
   </div>
   <div className="skills-bottom-note"><span>TOOLS I USE TO MAKE THINGS WORK</span></div>
  </div>
 </section>
}
