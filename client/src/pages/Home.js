import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='about'>
      <h1> Welcome To BroDay</h1>
        <p>Have you ever wanted to go golfing but all your friends already have plans? Ever wanted to go grab a beer and watch a sporting event but didn't want to do it alone? If you're like some guys and you just don't know how to approach new people, scared and not knowing if they share similar interests, then don't worry. BroDay is here for you!</p>

            <h3><Link to="/ActivitiesList" >Check Out our Activity Form</Link></h3>

        <h3 className='offer'>Here at BroDay we offer</h3>
        <ul>
          <li>A way to create a User profile</li>
          <li>Add friends</li>
          <li>A way to connect with new friends through our chat system</li>
          <li>Forms to create and compare liked activities</li>
          <li>A way to connect to other Users who share activity interests</li>
          <li>And an overall friendly User experience</li>

        </ul>
    </div>
  )
}

export default Home;