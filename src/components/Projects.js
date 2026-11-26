import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const filters = ['All', 'Frontend', 'Backend', 'Full Stack', 'AI'];

const projects = [
  {
    number: '01',
    category: 'AI',
    title: 'Email AI Agent',
    short: 'An AI-first workflow for automating inbox understanding and response planning.',
    description: 'Developed a Python-based Email AI Agent that automates Gmail inbox management with smart content analysis and automated responses.',
    image: `${process.env.PUBLIC_URL}/images/work-11.png`,
    stack: ['Python', 'AI', 'NLP', 'Automation'],
    github: 'https://github.com/tanshi2003/Email-AI-Agent.git',
    demo: '',
    overview: 'An intelligent email agent designed to analyze inbox content, support task understanding, and automate relevant actions.',
    contribution: 'Built the AI-driven workflow around content analysis, filtering, and response logic using Python and NLP-focused thinking.',
  },
  // {
  //   number: '02',
  //   category: 'AI',
  //   title: 'AI Resume Analyzer',
  //   short: 'A resume screening experience with ATS scoring and job-fit insights.',
  //   description: 'Created an AI Resume Analyzer that provides ATS scoring and job-market insights using Python, NLP, and Streamlit.',
  //   image: `${process.env.PUBLIC_URL}/images/work-12.png`,
  //   stack: ['Python', 'NLP', 'Streamlit', 'ATS'],
  //   github: 'https://github.com/tanshi2003/AI-Resume-Analyzer.git',
  //   demo: '',
  //   overview: 'A resume analysis tool for extracting insights, reviewing fit, and applying scoring logic to help users assess job-market readiness.',
  //   contribution: 'Built the analyzer workflow and user-facing scoring experience with an emphasis on intelligent resume evaluation and useful output.',
  // },
  {
    number: '03',
    category: 'AI',
    title: 'FrameCheck',
    short: 'Video QA that detects text, spelling, and grammar issues with timestamps.',
    description: 'A video review tool for finding text issues in extracted frames.',
    image: `${process.env.PUBLIC_URL}/images/frame.png`,
    stack: ['Python', 'FastAPI', 'FFmpeg', 'Frame Analysis'],
    github: '',
    demo: '',
    overview: 'FrameCheck helps designers review motion and video content by extracting frames and surfacing visible text for spelling and grammar checks, with timestamps to locate issues quickly.',
    contribution: 'Built the FastAPI backend workflow and integrated FFmpeg frame extraction to support timestamped video review.',
  },
  {
    number: '04',
    category: 'Full Stack',
    title: 'Lost and Found Portal',
    short: 'A campus utility platform for reporting and recovering lost items.',
    description: 'Django-based platform to report & search items in campus.',
    image: `${process.env.PUBLIC_URL}/images/work-4.png`,
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
    image: `${process.env.PUBLIC_URL}/images/work-7.png`,
    stack: ['Django', 'Python', 'Database', 'Bookings'],
    github: 'https://github.com/tanshi2003/Hotel-Management-System',
    demo: 'https://hotel-management-system-k8f0.onrender.com',
    overview: 'A hotel operations application focused on daily business workflows, room and booking coordination, and operational visibility.',
    contribution: 'Designed and implemented core workflows for hotel data management, helping streamline user interactions and backend data handling.',
  },
  {
    number: '06',
    category: 'Full Stack',
    title: 'Saffron & Stone',
    short: 'A modern multi-cuisine restaurant experience featuring an extensive menu, interactive cart, and an AI-powered food guide.',
    description: 'A responsive restaurant and café website with 1,000+ menu entries, smart food discovery, dietary filters, demo checkout, and an AI assistant.',
    image: `${process.env.PUBLIC_URL}/images/rw.png`,
    stack: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Gemini API',
      'Vercel Serverless Functions',
      'GitHub Pages',
    ],
    github: 'https://github.com/tanshi2003/Restaurant-website',
    demo: 'https://tanshi2003.github.io/Restaurant-website/',
    overview: 'Developed Saffron & Stone, a modern restaurant and café website featuring more than 1,000 food and beverage entries across 32 collections and 17 top-level categories. The experience includes interactive menu exploration, dish search, dietary filters, a shopping bag with quantity and price calculations, and Olive, an AI-powered food guide integrated with the Gemini API.',
    contribution: 'Built the responsive frontend using HTML, CSS, and vanilla JavaScript. Implemented category-based menu navigation, dish search, dietary filtering, interactive shopping bag functionality, quantity controls, subtotal and delivery calculations, and demo checkout options. Integrated Olive through a Vercel serverless chat endpoint powered by Gemini API and deployed the frontend using GitHub Pages.',
  },
  {
    number: '06',
    category: 'Backend',
    title: 'Password Manager',
    short: 'An account-based password manager featuring client-side encryption, secure credential storage, and cross-device synchronisation.',
    description: 'A full-stack password management application with authenticated accounts, an encrypted credential vault, and intelligent password generation.',
    image: `${process.env.PUBLIC_URL}/images/pw.png`,
    stack: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'MySQL',
      'TiDB',
      'JWT',
      'bcrypt',
      'Web Crypto API',
    ],
    github: 'https://github.com/tanshi2003/Password_Manager',
    demo: 'https://tanshi2003.github.io/Password_Manager/',
    overview: 'Developed a full-stack password manager that enables users to create accounts, authenticate securely, store and manage website credentials, generate strong passwords, and access their encrypted vault across devices. Implemented browser-side AES-256-GCM encryption with PBKDF2-based key derivation, ensuring vault contents are encrypted before synchronisation with the MySQL-compatible database.',
    contribution: 'Implemented RESTful APIs using Node.js and Express, integrated MySQL database operations, and developed account authentication using bcrypt and JWT. Built client-side vault encryption using the Web Crypto API, along with credential management, password generation, search, and encrypted backup functionality. Deployed the frontend through GitHub Pages and the backend through Render.',
  },
  {
    number: '07',
    category: 'Full Stack',
    title: 'TeleCRM',
    short: 'A role-based CRM focused on campaign and lead management workflows.',
    description: 'Role-based CRM for managing leads, users, campaigns.',
    image: `${process.env.PUBLIC_URL}/images/work-9.png`,
    stack: ['React', 'Node.js', 'CRM', 'UI'],
    github: 'https://github.com/tanshi2003/telecrm_db',
    demo: 'https://tanshi2003.github.io/telecrm_db/',
    overview: 'A customer relationship management system built around lead tracking, access control, and operational execution.',
    contribution: 'Contributed to the CRM experience with a focus on user interaction, campaign workflows, and a structured management interface.',
  },
  {
    number: '08',
    category: 'Frontend',
    title: 'Tic Tac Toe Game',
    short: 'An interactive browser-based Tic Tac Toe game featuring AI opponents, custom player names, and persistent match score tracking.',
    description: 'A responsive 3x3 strategy game where players challenge an AI bot or compete with a friend in local multiplayer mode.',
    image: `${process.env.PUBLIC_URL}/images/ttt.png`,
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Minimax AI', 'Local Storage'],
    github: 'https://github.com/tanshi2003/Tic-tac-toe',
    demo: 'https://tanshi2003.github.io/Tic-tac-toe/',
    overview: 'Developed an interactive Tic Tac Toe game with single-player and local two-player modes. Features three AI difficulty levels, custom player names, automatic win and draw detection, and a live scoreboard that tracks match performance across rounds using browser local storage.',
    contribution: 'Implemented turn-based game logic, AI decision-making using the Minimax algorithm, move validation, win-state detection, and responsive UI interactions. Added customizable player names, persistent score tracking, highlighted winning combinations, and independent controls for restarting rounds and resetting matches.',
  },
  {
    number: '09',
    category: 'Frontend',
    title: 'Snake Game',
    short: 'A redesigned classic Snake arcade game available in both browser and desktop editions, featuring customizable speed, sound effects, and responsive controls.',
    description: 'A browser-playable arcade game with dynamic movement, collision detection, real-time scoring, and customizable gameplay, alongside the original Python desktop version.',
    image: `${process.env.PUBLIC_URL}/images/snake.png`,
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'Python', 'Pygame'],
    github: 'https://github.com/tanshi2003/Snakegame',
    demo: 'https://tanshi2003.github.io/Snakegame/',
    overview: 'Rebuilt the classic Snake game as a responsive browser experience while preserving the original Python and Pygame desktop edition. The browser version includes keyboard and mobile controls, adjustable difficulty, a 10-level manual speed controller, sound effects, wall wrapping, and locally saved personal best scores.',
    contribution: 'Developed the browser game loop, snake movement, food generation, collision detection, and real-time scoring system. Implemented manual speed adjustment, dynamic difficulty progression, audio feedback using the Web Audio API, responsive mobile controls, pause and restart functionality, and persistent high-score tracking.',
  },
  {
    number: '10',
    category: 'Frontend',
    title: 'Rock Paper Scissors',
    short: 'An interactive browser game featuring AI-based solo play, local multiplayer, custom player names, and real-time score tracking.',
    description: 'A responsive Rock Paper Scissors game offering computer and same-device multiplayer modes with interactive feedback and optional Flask API support.',
    image: `${process.env.PUBLIC_URL}/images/rps.png`,
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Flask', 'REST API'],
    github: 'https://github.com/tanshi2003/Rock-Paper-Scisssors',
    demo: 'https://tanshi2003.github.io/Rock-Paper-Scisssors/',
    overview: 'Designed a browser-based Rock Paper Scissors game with solo play against a randomly choosing computer opponent and local two-player matches. Includes custom player names, hidden move selection until both players have chosen, automatic winner detection, score tracking, sound controls, and keyboard shortcuts. Also includes an optional Flask API for standalone game-logic experimentation.',
    contribution: 'Developed the interactive gameplay system, random computer move generation, multiplayer turn management, move validation, and round-based scoring. Implemented hidden player selections, custom name handling, sound effects, keyboard shortcuts, responsive UI components, and an optional Flask REST API for game logic.',
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const reduceMotion = useReducedMotion();
  const featured = projects.find((project) => project.title === 'TeleCRM');
  const otherProjects = projects.filter((project) => project !== featured);
  const filteredProjects = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  useEffect(() => {
    if (!selectedProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKey = (event) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [selectedProject]);

  const openProject = (project) => setSelectedProject(project);
  const projectCard = (project, index) => (
    <motion.article
      key={project.number}
      layout
      className="project-card"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : (index % 3) * 0.07 }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
    >
      <button type="button" className="project-card-visual" onClick={() => openProject(project)} aria-label={`View ${project.title} details`}>
        <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
        <span className="project-card-index">{project.number} / {project.category.toUpperCase()}</span>
        <span className="project-card-arrow">↗</span>
      </button>
      <div className="project-card-info">
        <div className="project-card-title-line"><h3>{project.title}</h3><span className="project-card-number">{project.number}</span></div>
        <p>{project.short}</p>
        
      </div>
    </motion.article>
  );

  return (
    <section className="projects" id="projects">
      <div className="max-width projects-shell">
        <header className="projects-header">
          <div className="projects-heading-copy">
            <span className="section-kicker">THE WORK / 2022—2026</span>
            <h2 className="title">Selected works<span className="projects-title-dot">.</span></h2>
            <p className="projects-lead">Different problems, different tools. A shared obsession with making useful things work beautifully.</p>
          </div>
          <div className="project-filters" aria-label="Filter projects">
            {filters.map((filter) => <button key={filter} type="button" className={`filter-btn ${activeFilter === filter ? 'active' : ''}`} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
          </div>
        </header>

        <div className="projects-count-row"><span>{filteredProjects.length} projects</span><span>SELECTED / 10</span></div>

        {activeFilter === 'All' && featured && (
          <motion.article className="project-feature" initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.5 }}>
            <button type="button" className="project-feature-image" onClick={() => openProject(featured)} aria-label="Open TeleCRM details">
              <img src={featured.image} alt="TeleCRM application preview" loading="lazy" />
              <span className="project-feature-image-label">FEATURED PROJECT / 01</span><span className="project-feature-arrow">↗</span>
            </button>
            <div className="project-feature-copy">
              <div className="project-feature-meta"><span>FULL STACK</span><span>FINAL YEAR PROJECT</span></div>
              <h3>{featured.title}</h3>
              <p className="project-feature-tagline">Lead management, built for teams.</p>
              <p>{featured.short}</p>
              <div className="project-card-stack">{featured.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
              <button type="button" className="project-explore" onClick={() => openProject(featured)}>Explore project <span>↗</span></button>
            </div>
          </motion.article>
        )}

        <div className="projects-grid" aria-label="Project gallery">
          <AnimatePresence mode="popLayout">
            {(activeFilter === 'All' ? otherProjects : filteredProjects).map(projectCard)}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && <motion.div className="project-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}>
          <motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" initial={reduceMotion ? false : { opacity: 0, y: 18, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: .985 }} onClick={(e) => e.stopPropagation()}>
            <button type="button" className="project-modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details">×</button>
            <div className="project-modal-visual"><img src={selectedProject.image} alt={`${selectedProject.title} preview`} /></div>
            <div className="project-modal-body">
              <div className="project-modal-header"><span className="project-modal-number">{selectedProject.number}</span><span className="project-modal-category">{selectedProject.category}</span></div>
              <h3 id="project-modal-title">{selectedProject.title}</h3>
              <p className="project-modal-description">{selectedProject.overview}</p>
              <div className="project-modal-grid">
                <div><h4>What I worked on</h4><p>{selectedProject.contribution}</p></div>
                <div className="project-modal-technology"><h4>Built with</h4><div className="modal-techs">{selectedProject.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
              </div>
              <div className="project-modal-actions">
                {selectedProject.demo && <a href={selectedProject.demo} target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faExternalLinkAlt}/><span>Live demo</span></a>}
                {selectedProject.github && <a href={selectedProject.github} target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faGithub}/><span>Source code</span></a>}
              </div>
            </div>
          </motion.div></motion.div>}
      </AnimatePresence>
    </section>
  );
};
export default Projects;
