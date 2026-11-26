import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaArrowUpRightFromSquare, FaBars, FaXmark } from 'react-icons/fa6';

const links = [
  ['About', '/#about'],
  ['Services', '/#services'],
  ['Stack', '/#skills'],
  ['Work', '/#projects'],
  ['Contact', '/#contact'],
];

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMenuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuActive);
    return () => document.body.classList.remove('menu-open');
  }, [isMenuActive]);

  return (
    <header className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <nav className="max-width nav-inner" aria-label="Main navigation">
        <Link className="logo" to="/#home" onClick={() => setMenuActive(false)} aria-label="Tanshi Khandelwal home">
          <span className="logo-mark">T<span>.</span>K</span>
          <span className="logo-caption">ENGINEER / BUILDER</span>
        </Link>
        <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
          {links.map(([label, href], index) => (
            <li key={href}><Link to={href} smooth onClick={() => setMenuActive(false)}>{label}</Link></li>
          ))}
          <li className="mobile-resume"><a href={`${process.env.PUBLIC_URL}/resume.pdf?v=20261126`} target="_blank" rel="noreferrer" onClick={() => setMenuActive(false)}>Resume <FaArrowUpRightFromSquare /></a></li>
        </ul>
        <a className="nav-resume" href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noreferrer">Resume <FaArrowUpRightFromSquare /></a>
        <button type="button" className="menu-toggle" aria-label={isMenuActive ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuActive} onClick={() => setMenuActive(!isMenuActive)}>
          {isMenuActive ? <FaXmark /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
