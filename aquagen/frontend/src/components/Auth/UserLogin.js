// // src/components/Auth/UserLogin.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const UserLogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUserLogin = () => {
//     console.log('User logged in:', { username, password });
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>User Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />
//       <button onClick={handleUserLogin}>Login</button>
//       <br />
//       <p>New user? <Link to="/signup">Sign up here</Link></p>
//     </div>
//   );
// };

// export default UserLogin;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUserLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Login successful');
        localStorage.setItem('token', data.token); // Save token for future API requests
        navigate('/userDashboard'); // Navigate to user dashboard
      } else {
        const data = await response.json();
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleUserLogin}>Login</button>
      <br />
      <p>New user? <Link to="/signup">Sign up here</Link></p>
    </div>
  );
};

export default UserLogin;
