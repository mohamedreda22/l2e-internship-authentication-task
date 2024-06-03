import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard.js';

export const RouterComponent  = () => {
  const isAuthenticated =localStorage.getItem('isAuthenticated');

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<LogIn/>} />
        {isAuthenticated ? (
          <Route path="/dashboard" element={<Dashboard/>} />
        ) : (
          <Route path="/dashboard" element={<LogIn/>} />
        )}
      </Routes>
    </Router>
  );
};

