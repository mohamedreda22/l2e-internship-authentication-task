import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css';
import pen from './Pen.png';
import text from './Text.png';
import sideImage from "./Image.png";

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      toast.error('Invalid email or password');
      return;
    }
    localStorage.setItem('isAuthenticated', 'true');
    toast.success('Logged in successfully!');
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
    };  


  return (
    <>
    <div className="side-image">
      <img src={sideImage} alt="sideImage" />
    </div>

    <div className="auth-page">
      <ToastContainer />
      <img src={pen} alt="pen" />
      <img src={text} alt="text" />
      <h1 className='header'>Welcome to Learn2Earn</h1>
      <span className='hint'>Don't have an account?{' '}
        <Link to="/signup">Sign Up</Link>
      </span>
      <form className='form-container' onSubmit={handleLogIn}>
        <div className='form-group'>
          <label>Email</label>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Log In</button>
        <span>Don't have an account?{' '}
          <Link to="/signup">Sign Up</Link>
        </span>
      </form>
    </div></>
  );
}
