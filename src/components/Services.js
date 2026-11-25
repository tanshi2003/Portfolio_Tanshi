import React from 'react';
import { FaArrowUpRightFromSquare, FaCode, FaDiagramProject, FaWandMagicSparkles } from 'react-icons/fa6';

const services = [
 { icon:<FaCode/>, slug:'web', title:'Web application development', description:'Responsive, maintainable interfaces and application flows built around real user and business requirements.', tags:['React','JavaScript','Node.js'] },
 { icon:<FaDiagramProject/>, slug:'flow', title:'Workflow & systems automation', description:'Practical internal tools, data-connected dashboards, and automation that reduces repetitive operational work.', tags:['Apps Script','APIs','Data workflows'] },
 { icon:<FaWandMagicSparkles/>, slug:'ai', title:'AI-enabled product workflows', description:'Applying NLP and LLM-driven capabilities to make information easier to understand, validate, and act on.', tags:['Python','LLM evaluation','NLP'] },
];

const Visual = ({type}) => {
 if(type==='web') return <div className="service-visual web-visual" aria-hidden="true">
   <div className="web-browser"><div className="browser-top"><i/><i/><i/><span/></div><div className="browser-body"><div className="browser-sidebar"/><div className="browser-content"><b/><b/><b/><div className="browser-blocks"><span/><span/><span/></div></div></div></div>
   <div className="web-device"><div className="device-screen"><span/><span/><div/><b/></div></div>
 </div>;
 if(type==='flow') return <div className="service-visual flow-visual" aria-hidden="true">
   <div className="flow-lines"><i/><i/><i/><i/></div><div className="flow-node node-a"><span>IN</span><b/></div><div className="flow-node node-b"><span>PROCESS</span><b/></div><div className="flow-node node-c"><span>SYNC</span><b/></div><div className="flow-node node-d"><span>DONE</span><b/></div><div className="flow-pulse"/>
 </div>;
 return <div className="service-visual ai-visual" aria-hidden="true">
   <div className="ai-window"><div className="ai-window-top"><span/><span/><span/></div><div className="ai-document"><b/><b/><b/><b/><b/></div><div className="ai-scan"/></div><div className="ai-orbit orbit-one"/><div className="ai-orbit orbit-two"/><div className="ai-core"><span>AI</span></div><div className="ai-result"><span>INSIGHT</span><b/><b/><b/></div>
 </div>;
};

const Services = () => (
 <section className="services section-dark" id="services">
  <div className="max-width">
   <div className="section-heading reveal">
    <div><span className="section-kicker">WHAT I DO</span><h2 className="title">From idea to <span>implementation.</span></h2></div>
    <p className="section-heading-note">A practical mix of product thinking, engineering fundamentals, and a bias toward useful outcomes.</p>
   </div>
   <div className="serv-content">
    {services.map((service,index)=>(
     <article className={`service-card service-card-${service.slug} reveal`} key={service.slug} style={{'--service-delay':`${index*120}ms`}}>
      <Visual type={service.slug}/>
      <div className="service-card-copy">
       <div className="service-card-top"><span className="service-icon">{service.icon}</span></div>
       <h3>{service.title}</h3><p>{service.description}</p>
       <div className="service-tags">{service.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
       <span className="service-arrow" aria-hidden="true"><FaArrowUpRightFromSquare/></span>
      </div>
     </article>
    ))}
   </div>
  </div>
 </section>
);
export default Services;
