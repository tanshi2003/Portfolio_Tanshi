import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const filters = ['All', 'Frontend', 'Backend', 'Full Stack', 'AI'];

const projects = [
  {
    number: '01',
    category: 'AI',
    title: 'FrameCheck',
    short: 'Video QA that detects text, spelling, and grammar issues with timestamps.',
    description: 'A video review tool that checks text in extracted frames.',
    image: `${process.env.PUBLIC_URL}/images/framecheck.png`,
    stack: ['Python', 'FastAPI', 'FFmpeg', 'Frame Analysis'],
    github: 'https://github.com/tanshi2003/Frame-check/',
    demo: 'https://tanshi2003.github.io/Frame-check/',
    overview: 'FrameCheck helps designers spot spelling and grammar issues in video text, with timestamps to find each issue quickly.',
    contribution: 'Built the FastAPI backend and integrated FFmpeg to extract video frames for timestamped text review.',
  },
  {
    number: '02',
    category: 'AI',
    title: 'Email AI Agent',
    short: 'An AI-powered assistant for understanding inbox content and planning email actions.',
    description: 'A Python-based agent for analysing email content and supporting inbox workflows.',
    image: `${process.env.PUBLIC_URL}/images/work-11.png`,
    stack: ['Python', 'AI', 'NLP', 'Automation'],
    github: 'https://github.com/tanshi2003/Email-AI-Agent.git',
    demo: '',
    overview: 'A Python email assistant that analyses inbox content and helps automate everyday email workflows.',
    contribution: 'Developed the email-processing workflow and Python logic for content analysis and response support.',
  },
  {
    number: '03',
    category: 'Full Stack',
    title: 'TeleCRM',
    short: 'A role-based CRM for managing leads, teams, and campaigns.',
    description: 'A role-based CRM for managing leads, users, and campaigns.',
    image: `${process.env.PUBLIC_URL}/images/work-9.png`,
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'Socket.io'],
    github: 'https://github.com/tanshi2003/telecrm_db',
    demo: 'https://tanshi2003.github.io/telecrm_db/',
    overview: 'A role-based CRM that brings lead tracking, team coordination, and campaign management into one workspace.',
    contribution: 'Developed CRM workflows and interfaces for managing leads, users, and campaigns across role-based dashboards.',
  },
  {
    number: '04',
    category: 'Backend',
    title: 'Password Manager',
    short: 'A password vault with secure accounts, encrypted storage, and password generation.',
    description: 'A full-stack password manager with authentication and an encrypted credential vault.',
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
    overview: 'A full-stack password manager with account authentication and a synced credential vault. Vault data is encrypted in the browser using AES-256-GCM and PBKDF2 before storage.',
    contribution: 'Built the Express APIs, MySQL integration, and bcrypt/JWT authentication. Added browser-side encryption, credential management, password generation, search, and encrypted backups.',
  },
  {
    number: '05',
    category: 'Full Stack',
    title: 'Saffron & Stone',
    short: 'A multi-cuisine restaurant experience with an interactive menu, cart, and AI food guide.',
    description: 'A responsive restaurant website with 1,000+ menu entries, dietary filters, demo checkout, and an AI assistant.',
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
    overview: 'A restaurant website with 1,000+ dishes across 32 collections, menu search, dietary filters, an interactive cart, and Olive, an AI food guide.',
    contribution: 'Built the responsive menu, search and filter tools, cart calculations, and demo checkout. Integrated Olive with Gemini through a Vercel serverless endpoint.',
  },
  {
    number: '06',
    category: 'Full Stack',
    title: 'Lost and Found Portal',
    short: 'A campus platform for reporting and recovering lost items.',
    description: 'A Django application for reporting and searching for items on campus.',
    image: `${process.env.PUBLIC_URL}/images/work-4.png`,
    stack: ['Django', 'Python', 'MySQL', 'Web App'],
    github: 'https://github.com/tanshi2003/Lost-and-Found-Portal',
    demo: 'https://lost-and-found-portal-b7gw.onrender.com/',
    overview: 'A campus portal where users can report lost belongings and search for items that have been found.',
    contribution: 'Built the item reporting and search flows, connecting Django backend logic with the user interface.',
  },
  {
    number: '07',
    category: 'Full Stack',
    title: 'Hotel Management System',
    short: 'A management dashboard for bookings, rooms, and hotel operations.',
    description: 'A Django application for managing hotel bookings, staff, and rooms.',
    image: `${process.env.PUBLIC_URL}/images/work-7.png`,
    stack: ['Django', 'Python', 'Database', 'Bookings'],
    github: 'https://github.com/tanshi2003/Hotel-Management-System',
    demo: 'https://hotel-management-system-k8f0.onrender.com',
    overview: 'A hotel operations app for coordinating rooms, bookings, and day-to-day management.',
    contribution: 'Implemented core booking and hotel data workflows across the Django application.',
  },
  {
    number: '08',
    category: 'Frontend',
    title: 'Tic Tac Toe Game',
    short: 'A browser game with AI opponents, local multiplayer, and persistent scores.',
    description: 'A responsive strategy game with AI and local multiplayer modes.',
    image: `${process.env.PUBLIC_URL}/images/ttt.png`,
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Minimax AI', 'Local Storage'],
    github: 'https://github.com/tanshi2003/Tic-tac-toe',
    demo: 'https://tanshi2003.github.io/Tic-tac-toe/',
    overview: 'A responsive Tic Tac Toe game with three AI difficulty levels, local multiplayer, custom player names, and a saved scoreboard.',
    contribution: 'Implemented game logic, Minimax-based AI, win detection, responsive controls, and persistent match scores.',
  },
  {
    number: '09',
    category: 'Frontend',
    title: 'Snake Game',
    short: 'A classic Snake game with adjustable speed, sound, and browser and desktop versions.',
    description: 'A browser arcade game with responsive controls and a Python desktop edition.',
    image: `${process.env.PUBLIC_URL}/images/snake.png`,
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'Python', 'Pygame'],
    github: 'https://github.com/tanshi2003/Snakegame',
    demo: 'https://tanshi2003.github.io/Snakegame/',
    overview: 'A modern browser version of Snake alongside the original Python/Pygame edition, with mobile controls, adjustable speed, sound, and saved high scores.',
    contribution: 'Built movement, food generation, collision detection, scoring, difficulty controls, sound effects, and responsive mobile controls.',
  },
  {
    number: '10',
    category: 'Frontend',
    title: 'Rock Paper Scissors',
    short: 'A browser game with solo AI play, local multiplayer, and score tracking.',
    description: 'A responsive game with computer and same-device multiplayer modes.',
    image: `${process.env.PUBLIC_URL}/images/rps.png`,
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Flask', 'REST API'],
    github: 'https://github.com/tanshi2003/Rock-Paper-Scisssors',
    demo: 'https://tanshi2003.github.io/Rock-Paper-Scisssors/',
    overview: 'A browser-based game with computer and two-player modes, custom names, round results, score tracking, and optional Flask API support.',
    contribution: 'Implemented computer moves, multiplayer turns, winner detection, scoring, sound and keyboard controls, plus the optional Flask API.',
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectDirection, setProjectDirection] = useState(1);
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

  const navigateProject = useCallback((direction) => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((project) => project.title === selectedProject.title);
    const nextIndex = (currentIndex + direction + projects.length) % projects.length;
    setProjectDirection(direction);
    setSelectedProject(projects[nextIndex]);
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKey = (event) => {
      if (event.key === 'Escape') setSelectedProject(null);
      if (event.key === 'ArrowRight') navigateProject(1);
      if (event.key === 'ArrowLeft') navigateProject(-1);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [selectedProject, navigateProject]);


  const openProject = (project) => { setProjectDirection(1); setSelectedProject(project); };
  const projectCard = (project, index) => (
    <motion.article
      key={project.title}
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
        <span className="project-card-arrow">↗</span>
      </button>
      <div className="project-card-info">
        <div className="project-card-title-line"><h3>{project.title}</h3></div>
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
            <h2 className="title">Selected projects</h2>
            <p className="projects-lead">A selection of applications, tools, and experiments I have built.</p>
          </div>
          <div className="project-filters" aria-label="Filter projects">
            {filters.map((filter) => <button key={filter} type="button" className={`filter-btn ${activeFilter === filter ? 'active' : ''}`} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
          </div>
        </header>


        {activeFilter === 'All' && featured && (
          <motion.article className="project-feature" initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.5 }}>
            <button type="button" className="project-feature-image" onClick={() => openProject(featured)} aria-label="Open TeleCRM details">
              <img src={featured.image} alt="TeleCRM application preview" loading="lazy" />
              <span className="project-feature-arrow">↗</span>
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
          <div className="project-carousel-orbit" aria-label="Project navigation"><button type="button" className="project-orbit-arrow project-orbit-prev" onClick={() => navigateProject(-1)} aria-label="Previous project"><span className="orbit-arrow-glyph">‹</span><span className="orbit-arrow-label">PREV</span></button><div className="project-orbit-progress" aria-label={`Project ${projects.findIndex((project) => project.title === selectedProject.title) + 1} of ${projects.length}`}>{projects.map((project, index) => <span key={project.title} className={project.title === selectedProject.title ? "active" : ""} />)}</div><button type="button" className="project-orbit-arrow project-orbit-next" onClick={() => navigateProject(1)} aria-label="Next project"><span className="orbit-arrow-glyph">›</span><span className="orbit-arrow-label">NEXT</span></button></div><motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" initial={reduceMotion ? false : { opacity: 0, y: 18, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: .985 }} onClick={(e) => e.stopPropagation()}>
            <button type="button" className="project-modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details">×</button>
            <div className="project-modal-visual"><img src={selectedProject.image} alt={`${selectedProject.title} preview`} /></div>
            <motion.div key={selectedProject.title} className="project-modal-body" initial={reduceMotion ? false : { opacity: 0, x: projectDirection * 38 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: reduceMotion ? 0 : 0.24, ease: "easeOut" }}>
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
            </motion.div>
          </motion.div></motion.div>}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
