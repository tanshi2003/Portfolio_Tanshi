import React from 'react';
import { FaArrowUpRightFromSquare, FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaLocationDot, FaXTwitter } from 'react-icons/fa6';

const Contact = () => (
  <section className="contact" id="contact">
    <div className="max-width">
      <div className="contact-panel reveal">
        <div className="contact-copy">
          <span className="section-kicker">HAVE A GOOD PROBLEM?</span>
          <h2>Let’s make<br /><span>something useful.</span></h2>
          <p>Open to conversations around software engineering, AI-enabled products, automation, and interesting opportunities.</p>
          <a className="button button-primary" href="https://mail.google.com/mail/?view=cm&fs=1&to=tanshikhandelwal03@gmail.com" target="_blank" rel="noreferrer">Start a conversation <FaArrowUpRightFromSquare /></a>
        </div>
        <div className="contact-details">
          <div className="contact-detail"><span className="contact-detail-icon"><FaEnvelope /></span><div><small>EMAIL</small><a href="mailto:tanshikhandelwal03@gmail.com">tanshikhandelwal03@gmail.com</a></div></div>
          <div className="contact-detail"><span className="contact-detail-icon"><FaLocationDot /></span><div><small>LOCATION</small><strong>India</strong></div></div>
          <div className="contact-socials">
            <a href="https://github.com/tanshi2003" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/tanshi-khandelwal-30a1b8209" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/_itstan.shi_/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com/Tanshi_03" target="_blank" rel="noreferrer" aria-label="X"><FaXTwitter /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
