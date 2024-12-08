// src/components/Auth/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Portal</h1>
      <p>
        This is the landing page of our Fishery Data Portal. You can log in as an admin or a user, or
        learn more about the project by clicking the buttons below.
      </p>

      <button>
        <Link to="/aboutus">About Us</Link>
      </button>
      <button>
        <Link to="/login">Login</Link>
      </button>

      <div>
        <h3>Project Overview:</h3>
        <p>This project aims to provide fishery data insights, including species occurrence, trends, and abundance.</p>
      </div>
    </div>
  );
};

export default Home;
