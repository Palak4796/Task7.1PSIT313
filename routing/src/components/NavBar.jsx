// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [postMessageVisible, setPostMessageVisible] = useState(false);
  const [postMessage, setPostMessage] = useState('');

  const handlePostClick = () => {
    if (postMessageVisible) {
      
      setPostMessageVisible(false);
      setPostMessage('');
    } else {
     
      setPostMessage('Post functionality is currently under development!');
      setPostMessageVisible(true);
    }
  };

  const handleLoginClick = () => {
   
    setPostMessageVisible(false);
    setPostMessage('');
    navigate('/login');
  };

  useEffect(() => {
    if (location.pathname !== '/') {
      setPostMessageVisible(false);
      setPostMessage('');
    }
  }, [location]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">DEV@Deakin</div>
        <div className="navbar-items">
          <input type="text" placeholder="Search..." className="navbar-search" />
          <button className="navbar-button" onClick={handlePostClick}>
            Post
          </button>
          <button className="navbar-button" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </nav>
      <div className="content">
        {postMessageVisible && <p className="post-message">{postMessage}</p>}
      </div>
    </>
  );
};

export default NavBar;
