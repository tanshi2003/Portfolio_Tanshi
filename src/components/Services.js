import React from 'react';
import { FaArrowUpRightFromSquare, FaCode, FaDiagramProject, FaWandMagicSparkles } from 'react-icons/fa6';

const services = [
  { number: '01', icon: <FaCode />, title: 'Web application development', description: 'Responsive, maintainable interfaces and application flows built around real user and business requirements.', tags: ['React', 'JavaScript', 'Node.js'] },
  { number: '02', icon: <FaDiagramProject />, title: 'Workflow & systems automation', description: 'Practical internal tools, data-connected dashboards, and automation that reduces repetitive operational work.', tags: ['Apps Script', 'APIs', 'Data workflows'] },
  { number: '03', icon: <FaWandMagicSparkles />, title: 'AI-enabled product workflows', description: 'Applying NLP and LLM-driven capabilities to make information easier to understand, validate, and act on.', tags: ['Python', 'LLM evaluation', 'NLP'] },
];

const Services = () => (
  <section className="services section-dark" id="services">
    <div className="max-width">
      <div className="section-heading reveal">
        <div><span className="section-kicker">WHAT I DO</span><h2 className="title">From idea to <span>implementation.</span></h2></div>
        <p className="section-heading-note">A practical mix of product thinking, engineering fundamentals, and a bias toward useful outcomes.</p>
      </div>
      <div className="serv-content">
        {services.map((service) => (
          <article className="service-card reveal" key={service.number}>
            <div className="service-card-top"><span className="mono">{service.number} / CAPABILITY</span><span className="service-icon">{service.icon}</span></div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <span className="service-arrow" aria-hidden="true"><FaArrowUpRightFromSquare /></span>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
