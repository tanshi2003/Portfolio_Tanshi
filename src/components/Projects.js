import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const filters = ['All', 'Full Stack', 'AI', 'Backend'];
const projects = [
  { number: '01', category: 'Full Stack', title: 'TeleCRM', short: 'A role-based CRM for lead operations, campaigns, and team workflows.', overview: 'TeleCRM is a full-stack lead management platform with role-based access for Admins, Managers, Callers, and Field Employees. It brings lead tracking, campaign management, and team workflows into one system.', contribution: 'Built the application across React, Node.js, Express, and MySQL, with JWT authentication and real-time lead updates using Socket.io.', image: '/images/work-9.png', stack: ['React', 'Node.js', 'Express', 'MySQL', 'Socket.io'], github: 'https://github.com/tanshi2003/telecrm_db', demo: 'https://telecrmio.netlify.app/' },
  { number: '02', category: 'AI', title: 'FrameCheck', short: 'A video QA tool that finds text issues with frame-level timestamps.', overview: 'FrameCheck helps designers review motion and video content by extracting frames and surfacing visible text for spelling and grammar checks, without manually scrubbing through the entire timeline.', contribution: 'Developed the FastAPI backend workflow and integrated FFmpeg frame extraction to support timestamped video review.', image: '/images/work-10.png', stack: ['Python', 'FastAPI', 'FFmpeg', 'Frame Analysis'], github: '', demo: '' },
  { number: '03', category: 'AI', title: 'AI Resume Analyzer', short: 'Resume analysis with ATS scoring, keyword signals, and job-fit insights.', overview: 'A resume analysis tool that combines NLP and AI to surface useful feedback on resume content, ATS compatibility, and alignment with a target role.', contribution: 'Built the Streamlit experience and analysis pipeline using Python NLP tooling and the Gemini API.', image: '/images/work-12.png', stack: ['Python', 'Streamlit', 'spaCy', 'NLTK', 'Gemini API'], github: 'https://github.com/tanshi2003/AI-Resume-Analyzer.git', demo: '' },
  { number: '04', category: 'AI', title: 'Email AI Agent', short: 'An intelligent inbox workflow for understanding and automating email tasks.', overview: 'A Python-based email agent designed to analyze inbox content, identify intent, and support automated email workflows.', contribution: 'Implemented the email workflow using IMAP/SMTP with Python-based content analysis and response automation.', image: '/images/work-11.png', stack: ['Python', 'NLP', 'IMAP', 'SMTP', 'Automation'], github: 'https://github.com/tanshi2003/Email-AI-Agent.git', demo: '' },
  { number: '05', category: 'Full Stack', title: 'Lost & Found Portal', short: 'A campus platform for reporting, searching, and recovering lost items.', overview: 'A campus-focused portal that makes it easier to report lost belongings and discover items that have been found.', contribution: 'Developed the Django application flow for reporting, searching, and managing item records.', image: '/images/work-4.png', stack: ['Django', 'Python', 'SQLite', 'Web App'], github: 'https://github.com/tanshi2003/Lost-and-Found-Portal', demo: 'https://lost-and-found-portal-b7gw.onrender.com/' },
  { number: '06', category: 'Full Stack', title: 'Hotel Management System', short: 'A management app for coordinating rooms, bookings, and hotel operations.', overview: 'A hotel management application focused on booking coordination, room data, and daily operational workflows.', contribution: 'Created core Django workflows for booking and room management, connecting data handling with the user-facing application.', image: '/images/work-7.png', stack: ['Django', 'Python', 'Database', 'Bookings'], github: 'https://github.com/tanshi2003/Hotel-Management-System', demo: 'https://hotel-management-system-k8f0.onrender.com' },
  { number: '07', category: 'Backend', title: 'Password Manager', short: 'A credential utility with password generation and organized storage.', overview: 'A utility application for generating passwords and managing stored credentials with a straightforward workflow.', contribution: 'Built the core password generation and storage features with a practical, utility-first interface.', image: '/images/work-8.png', stack: ['Python', 'Security', 'Storage', 'Utility'], github: 'https://github.com/tanshi2003/Password_Manager', demo: 'https://password-manager-pptl.onrender.com/' }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  const filteredProjects = useMemo(() => activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter), [activeFilter]);

  useEffect(() => {
    const handleKeyDown = (event) => { if (event.key === 'Escape') setSelectedProject(null); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <header className="projects-header">
          <div className="projects-heading-copy">
            <span className="section-kicker">SELECTED WORK / 2024—2026</span>
            <h2 className="title">Projects<span className="projects-title-dot">.</span></h2>
            <p className="projects-lead">A selection of products, experiments, and systems I've built.</p>
          </div>
          <div className="project-filters" aria-label="Project filters">
            {filters.map((filter) => <button key={filter} type="button" className={`filter-btn ${activeFilter === filter ? 'active' : ''}`} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
          </div>
        </header>

        {activeFilter === 'All' && <motion.article className="project-featured" initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
          <button className="project-featured-image" type="button" onClick={() => setSelectedProject(projects[0])} aria-label="Open TeleCRM details">
            <img src={projects[0].image} alt="TeleCRM application preview" />
            <span className="featured-image-label">FEATURED PROJECT</span><span className="featured-image-arrow">↗</span>
          </button>
          <div className="project-featured-details">
            <div className="featured-meta"><span>01 / 07</span><span>FULL STACK · PRODUCT</span></div>
            <h3>TeleCRM</h3><p>{projects[0].short}</p>
            <div className="project-stack-line">{projects[0].stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
            <div className="featured-links"><button type="button" className="project-details-link" onClick={() => setSelectedProject(projects[0])}>Explore project <span>↗</span></button><a href={projects[0].demo} target="_blank" rel="noreferrer noopener">Live product ↗</a></div>
          </div>
        </motion.article>}

        <div className="projects-list-heading"><span>{activeFilter === 'All' ? 'MORE PROJECTS' : activeFilter.toUpperCase() + ' PROJECTS'}</span><span>{(activeFilter === 'All' ? filteredProjects.length - 1 : filteredProjects.length).toString().padStart(2, '0')} ITEMS</span></div>
        <div className="projects-list">
          <AnimatePresence mode="popLayout">
            {filteredProjects.filter((p) => activeFilter !== 'All' || p.title !== 'TeleCRM').map((project) => <motion.article key={project.title} layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .32 }} className="project-row">
              <button type="button" className="project-row-image" onClick={() => setSelectedProject(project)} aria-label={`Open ${project.title} details`}><img src={project.image} alt={`${project.title} preview`} loading="lazy" /><span>↗</span></button>
              <div className="project-row-content"><div className="project-row-meta"><span>{project.number}</span><span>{project.category}</span></div><h3>{project.title}</h3><p>{project.short}</p><div className="project-stack-line">{project.stack.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div></div>
              <button className="project-row-open" type="button" onClick={() => setSelectedProject(project)} aria-label={`View ${project.title}`}>↗</button>
            </motion.article>)}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && <motion.div className="project-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}>
          <motion.div className="project-modal" initial={{ opacity: 0, y: 22, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .98 }} onClick={(e) => e.stopPropagation()}>
            <button type="button" className="project-modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details">×</button>
            <div className="project-modal-visual"><img src={selectedProject.image} alt={selectedProject.title} /></div>
            <div className="project-modal-body"><div className="project-modal-header"><span className="project-modal-number">{selectedProject.number}</span><span className="project-modal-category">{selectedProject.category}</span></div>
              <h3>{selectedProject.title}</h3><p className="project-modal-description">{selectedProject.overview}</p>
              <div className="project-modal-grid"><div><h4>My contribution</h4><p>{selectedProject.contribution}</p></div><div><h4>Technology</h4><div className="project-techs modal-techs">{selectedProject.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div></div>
              <div className="project-modal-actions">{selectedProject.demo && <a href={selectedProject.demo} target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faExternalLinkAlt}/><span>Live Demo</span></a>}{selectedProject.github && <a href={selectedProject.github} target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faGithub}/><span>GitHub</span></a>}</div>
            </div>
          </motion.div></motion.div>}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
