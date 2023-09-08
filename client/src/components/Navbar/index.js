import React from 'react';
import { Link } from 'react-router-dom';
  
const Navbar = () => {
  return (
    <div className='nav-container'>
  
          
          <Link to='/' >
            Home
          </Link>
          <Link to='/me' >
            Profile
          </Link>
        
          <Link to='/ActivityForm' >
            ActivityForm
          </Link>
          
          <Link to='/about' >
            About
          </Link>
        
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        
    </div>
  );
};
  
export default Navbar; 