// // src/App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes here
// import Login from './components/Auth/Login';
// import Signup from './components/Auth/Signup';
// import Admin from './components/Admin/AdminDashboard';
// import User from './components/User/UserDashboard';

// const App = () => {
//   const [isAdmin, setIsAdmin] = useState(false);

//   return (
//     <Router>
//       <Routes>
//         {/* Wrap components with Route components */}
//         <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/admin" element={isAdmin ? <Admin /> : <Login setIsAdmin={setIsAdmin} />} />
//         <Route path="/user" element={<User />} />
//         <Route path="/" element={<h1>Welcome to the Portal</h1>} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Auth/Home';
import AboutUs from './components/Auth/AboutUs';
import Login from './components/Auth/Login';
import AdminLogin from './components/Auth/AdminLogin';
import UserLogin from './components/Auth/UserLogin';
import Signup from './components/Auth/Signup';
import AdminDashboard from './components/Admin/AdminDashboard'; // Assuming this is another component you will create later
import UserDashboard from './components/User/UserDashboard';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
