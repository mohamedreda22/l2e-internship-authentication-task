import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css';
import pen from './Pen.png';
import text from './Text.png';
import sideImage from "./Image.png";

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email || !username || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    const user = { email, username, password };
    localStorage.setItem('user', JSON.stringify(user));
    toast.success('Account created successfully!');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
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
      <span className='hint'>
        Already have an account?{' '}
        <Link to="/login">Log In</Link>
      </span>
      <form className='form-container' onSubmit={handleSignUp}>
        <div className='form-group'>
          <label>Email</label>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>Username</label>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <span>
          By creating an account, you agree to the <a href=''>Terms of use</a> and{' '}
          <a href=''>Privacy Policy.</a>
        </span>
        <button type="submit">Create an account</button>
        <span>Already have an account?</span>
        <Link to="/login">Log In</Link>
      </form>
    </div>
    </>
  );
}
