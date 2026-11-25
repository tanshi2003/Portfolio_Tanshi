import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const [isMenuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <div className="max-width">
                <div className="logo">
                    <Link to="/"><span>Portfolio</span></Link>
                </div>
                <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
                    <li><Link to="/#" smooth onClick={() => setMenuActive(false)}>Home</Link></li>
                    <li><Link to="/#about" smooth onClick={() => setMenuActive(false)}>About</Link></li>
                    <li><Link to="/#services" smooth onClick={() => setMenuActive(false)}>Services</Link></li>
                    <li><Link to="/#skills" smooth onClick={() => setMenuActive(false)}>Skills</Link></li>
                    <li><Link to="/#projects" smooth onClick={() => setMenuActive(false)}>Projects</Link></li>
                    <li><Link to="/#contact" smooth onClick={() => setMenuActive(false)}>Contact</Link></li>
                </ul>
                <button
                    type="button"
                    className="menu-toggle"
                    aria-label={isMenuActive ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isMenuActive}
                    onClick={() => setMenuActive(!isMenuActive)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
