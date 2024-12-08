// src/components/Auth/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Select Login Type</h2>
      <button>
        <Link to="/adminlogin">Login as Admin</Link>
      </button>
      <button>
        <Link to="/userlogin">Login as User</Link>
      </button>
    </div>
  );
};
export default Login;
