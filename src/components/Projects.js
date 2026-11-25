import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const filters = ['All', 'Frontend', 'Backend', 'Full Stack', 'AI'];

const projects = [
  {
    number: '01',
    category: 'Frontend',
    title: 'Tic Tac Toe Game',
    short: 'Interactive browser game built with a clean UI and logic-driven gameplay.',
    description: 'Python-based two-player game in a 3x3 grid.',
    image: '/images/work-1.png',
    stack: ['Python', 'Game Logic', 'UI'],
    github: 'https://github.com/tanshi2003/Tic-tac-toe',
    demo: 'https://tic-tac-toe-1-lqzs.onrender.com',
    overview: 'A lightweight browser game designed around turn-based interaction, win-state logic, and a simple but engaging experience.',
    contribution: 'Built the gameplay flow, move validation, and the visual interaction layer for a polished single-page game experience.',
  },
  {
    number: '02',
    category: 'Frontend',
    title: 'Snake Game (Python)',
    short: 'A classic arcade experience focused on responsiveness and game-state transitions.',
    description: 'Classic snake game with food-eating and self-collision logic.',
    image: '/images/work-2.png',
    stack: ['Python', 'Game Logic', 'Controls'],
    github: 'https://github.com/tanshi2003/Snakegame',
    demo: '',
    overview: 'A nostalgic snake game that emphasizes motion, progression, and core game loop behavior.',
    contribution: 'Implemented collision logic, movement rules, scoring updates, and a clean loop for an engaging retro gameplay experience.',
  },
  {
    number: '03',
    category: 'Frontend',
    title: 'Rock Paper Scissors',
    short: 'A quick-play decision game with live outcomes and simple interactive feedback.',
    description: 'Python CLI game where you battle the computer.',
    image: '/images/work-5.png',
    stack: ['Python', 'CLI UI', 'Decision Logic'],
    github: 'https://github.com/tanshi2003/Rock-Paper-Scisssors',
    demo: 'https://rpsbytanshi.netlify.app/',
    overview: 'A fun and fast interactive game built to showcase simple competition logic and user-driven gameplay.',
    contribution: 'Created the game flow and outcome handling with a clean interactive interface that keeps the experience lightweight and fun.',
  },
  {
    number: '04',
    category: 'Full Stack',
    title: 'Lost and Found Portal',
    short: 'A campus utility platform for reporting and recovering lost items.',
    description: 'Django-based platform to report & search items in campus.',
    image: '/images/work-4.png',
    stack: ['Django', 'Python', 'MySQL', 'Web App'],
    github: 'https://github.com/tanshi2003/Lost-and-Found-Portal',
    demo: 'https://lost-and-found-portal-b7gw.onrender.com/',
    overview: 'A campus-focused inventory and reporting platform designed to help users quickly track and recover lost items.',
    contribution: 'Built the application flow for item reporting, search, and retrieval while working across Django backend logic and user-facing screens.',
  },
  {
    number: '05',
    category: 'Full Stack',
    title: 'Hotel Management System',
    short: 'A management dashboard covering bookings, rooms, and operational workflows.',
    description: 'Django app for managing bookings, staff & rooms.',
    image: '/images/work-7.png',
    stack: ['Django', 'Python', 'Database', 'Bookings'],
    github: 'https://github.com/tanshi2003/Hotel-Management-System',
    demo: 'https://hotel-management-system-k8f0.onrender.com',
    overview: 'A hotel operations application focused on daily business workflows, room and booking coordination, and operational visibility.',
    contribution: 'Designed and implemented core workflows for hotel data management, helping streamline user interactions and backend data handling.',
  },
  {
    number: '06',
    category: 'Backend',
    title: 'Password Manager',
    short: 'A secure storage and generation tool built for managing credentials efficiently.',
    description: 'A secure password storage and generator tool.',
    image: '/images/work-8.png',
    stack: ['Python', 'Security', 'Storage', 'Utility'],
    github: 'https://github.com/tanshi2003/Password_Manager',
    demo: 'https://password-manager-pptl.onrender.com/',
    overview: 'A utility app focused on credential storage, easier retrieval, and secure password generation for everyday workflow needs.',
    contribution: 'Built the core authentication and storage logic with a clean user experience focused on practical utility and security-minded design.',
  },
  {
    number: '07',
    category: 'Full Stack',
    title: 'TeleCRM',
    short: 'A role-based CRM focused on campaign and lead management workflows.',
    description: 'Role-based CRM for managing leads, users, campaigns.',
    image: '/images/work-9.png',
    stack: ['React', 'Node.js', 'CRM', 'UI'],
    github: 'https://github.com/tanshi2003/telecrm_db',
    demo: 'https://telecrmio.netlify.app/',
    overview: 'A customer relationship management system built around lead tracking, access control, and operational execution.',
    contribution: 'Contributed to the CRM experience with a focus on user interaction, campaign workflows, and a structured management interface.',
  },
  {
    number: '08',
    category: 'AI',
    title: 'Email AI Agent',
    short: 'An AI-first workflow for automating inbox understanding and response planning.',
    description: 'Developed a Python-based Email AI Agent that automates Gmail inbox management with smart content analysis and automated responses.',
    image: '/images/work-11.png',
    stack: ['Python', 'AI', 'NLP', 'Automation'],
    github: 'https://github.com/tanshi2003/Email-AI-Agent.git',
    demo: '',
    overview: 'An intelligent email agent designed to analyze inbox content, support task understanding, and automate relevant actions.',
    contribution: 'Built the AI-driven workflow around content analysis, filtering, and response logic using Python and NLP-focused thinking.',
  },
  {
    number: '09',
    category: 'AI',
    title: 'AI Resume Analyzer',
    short: 'A resume screening experience with ATS scoring and job-fit insights.',
    description: 'Created an AI Resume Analyzer that provides ATS scoring and job-market insights using Python, NLP, and Streamlit.',
    image: '/images/work-12.png',
    stack: ['Python', 'NLP', 'Streamlit', 'ATS'],
    github: 'https://github.com/tanshi2003/AI-Resume-Analyzer.git',
    demo: '',
    overview: 'A resume analysis tool for extracting insights, reviewing fit, and applying scoring logic to help users assess job-market readiness.',
    contribution: 'Built the analyzer workflow and user-facing scoring experience with an emphasis on intelligent resume evaluation and useful output.',
  },
  {
    number: '10',
    category: 'AI',
    title: 'FrameCheck',
    short: 'Video QA that detects text, spelling, and grammar issues with timestamps.',
    description: 'A video review tool for finding text issues in extracted frames.',
    image: '/images/image.png',
    stack: ['Python', 'FastAPI', 'FFmpeg', 'Frame Analysis'],
    github: '',
    demo: '',
    overview: 'FrameCheck helps designers review motion and video content by extracting frames and surfacing visible text for spelling and grammar checks, with timestamps to locate issues quickly.',
    contribution: 'Built the FastAPI backend workflow and integrated FFmpeg frame extraction to support timestamped video review.',
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && selectedProject) setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

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
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </header>

        <div className="projects-count-row">
          <span>{filteredProjects.length} projects</span>
          <span>10 TOTAL</span>
        </div>

        <div className="projects-list">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.number}
                layout
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="project-row"
              >
                <button
                  type="button"
                  className="project-row-image"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Open ${project.title} details`}
                >
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                  <span className="project-image-open">↗</span>
                </button>
                <div className="project-row-content">
                  <div className="project-row-meta">
                    <span>{project.number}</span>
                    <span>{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.short}</p>
                  <div className="project-stack-line" aria-label="Technology stack">
                    {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                </div>
                <button
                  className="project-row-open"
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View ${project.title} details`}
                >
                  ↗
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="project-modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                ×
              </button>

              <div className="project-modal-visual">
                <img src={selectedProject.image} alt={`${selectedProject.title} preview`} />
              </div>

              <div className="project-modal-body">
                <div className="project-modal-header">
                  <span className="project-modal-number">{selectedProject.number}</span>
                  <span className="project-modal-category">{selectedProject.category}</span>
                </div>
                <h3>{selectedProject.title}</h3>
                <p className="project-modal-description">{selectedProject.overview}</p>

                <div className="project-modal-grid">
                  <div className="project-modal-contribution">
                    <h4>My contribution</h4>
                    <p>{selectedProject.contribution}</p>
                  </div>
                  <div className="project-modal-technology">
                    <h4>Technology stack</h4>
                    <div className="project-techs modal-techs">
                      {selectedProject.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-modal-actions">
                  {selectedProject.demo && (
                    <a href={selectedProject.demo} target="_blank" rel="noreferrer noopener">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noreferrer noopener">
                      <FontAwesomeIcon icon={faGithub} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
