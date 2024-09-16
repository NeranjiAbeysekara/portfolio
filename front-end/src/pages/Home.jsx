import React, { useState } from 'react';
import './Home.css';
import mine from '../assets/mine.jpg';
import Modal from '../components/Modal.jsx/Modal';
import CTA from '../components/CTA/CTA'; // Import CTA component

const Home = () => {
  // useState hook to manage the modal visibility
  const [showModal, setShowModal] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="profile-img-container">
          <img className="profile-img" src={mine} alt="Profile" />
        </div>
        <div className="intro-text">
          <h1>Hello, I'm Neranji Abeysekara</h1>
          <p>
            I'm a passionate software developer with experience in building
            modern web applications. I love coding, learning new technologies, and
            solving problems!
          </p>
        </div>
      
        <button onClick={toggleModal} className="project-button">
          View My Projects
        </button>

        <Modal show={showModal} handleClose={toggleModal} />
      </div>

     



      {/* Skills Section */}
      <div className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-list">
          <div className="skill-item">
            <h3>React</h3>
            <p>Building interactive UIs with ReactJS</p>
          </div>
          <div className="skill-item">
            <h3>Node.js</h3>
            <p>Server-side development with Node.js</p>
          </div>
          <div className="skill-item">
            <h3>MongoDB</h3>
            <p>Database management with MongoDB</p>
          </div>
          {/* Add more skills as needed */}
        </div>
      </div>

      {/* CTA Section */}
      <CTA />

    </div>
  );
};

export default Home;
