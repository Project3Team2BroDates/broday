import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
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
          <Link to='/ActivitiesList' >
            Activities
          </Link>
          <Link to='/Friends' >
            Friends
          </Link>
          <Link to='/me' >
            Profile
          </Link>
          {/* <Link to='/ChatRoom' >
            Chat
          </Link> */}
          
          
          
          <Link to='/Meet' >
            The Bro Squad
          </Link>
          
          <div className="login-logout">
            
          {Auth.loggedIn() ? (
            <button className="logout" onClick={logout}>
              Logout
            </button>
            
          ) : (
            <>
              <Link className="btn" to="/login">
                Login
              </Link>
              <Link className="btn" to="/signup">
                Signup
              </Link>
            </>
          )}
       
      </div>  
        
    </div>
    
      </div>
    </header>
  );
};

export default Header;