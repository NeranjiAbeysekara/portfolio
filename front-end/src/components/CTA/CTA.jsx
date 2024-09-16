import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <div className="cta-section">
      <h2>Want to work with me?</h2>
      <p>I am currently open to freelance projects and job opportunities!</p>
      <div className="cta-buttons">
        <a href="/contact" className="cta-button">Contact Me</a>
        <a href="/resume.pdf" download className="cta-button">Download Resume</a>
      </div>
    </div>
  );
};

export default CTA;
