import React from 'react';
import './Modal.css';

const Modal = ({ show, handleClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={handleClose}>&times;</span>
        {/* Projects Section */}
        <div className="projects-section">
          <h2>My Projects</h2>
          <div className="projects-list">
            <div className="project-item">
              <h3>Project 1</h3>
              <p>Short description of the project.</p>
            </div>
            <div className="project-item">
              <h3>Project 2</h3>
              <p>Short description of the project.</p>
            </div>
            {/* Add more projects as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
