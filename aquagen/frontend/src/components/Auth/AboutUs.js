// src/components/Auth/AboutUs.js
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About Us</h1>
      <p>
        Welcome to the Fishery Data Portal! This platform helps users access and analyze fishery data. 
        Whether you are a researcher, admin, or user, you can log in, apply filters, visualize data, and much more.
      </p>
      <Link to="/"><button>Back to Home</button></Link>
    </div>
  );
};

export default AboutUs;
