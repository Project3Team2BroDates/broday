import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='header-container'>
      <div className='header'>
        <h1 className='title'>
          BroDay
        </h1>
        <div className='nav-container'>
          <Link to='/' >
            Home
          </Link>
          <Link to='/me' >
            Profile
          </Link>
          <Link to='/chat' >
            Chat
          </Link>
          
          <Link to='/about' >
            About
          </Link>
          
        <Link to='/'>
          Logout
          </Link>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        
    </div>
      </div>
    </header>
  );
};

export default Header;