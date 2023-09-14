import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_USER, QUERY_ME } from "../utils/queries";
// import {REMOVE_ACTIVITY} from '../utils/mutations'

import Auth from "../utils/auth";
import UserActivities from "../components/UserActivities";

const User = () => {
  const { userId } = useParams();

  const { loading, data } = useQuery(userId ? QUERY_USER : QUERY_ME, {
    variables: { userId: userId },
  });
  //lets do this
  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getUser().data._id === userId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.name) {
    return (
      <h4 className="redirect">
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }
  console.log(user);
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={user.profilePic} alt="profile pic " />
        <button className="upload-button">Upload</button>
      </div>
      <h1 className="greeting">Hello, {user.name}!</h1>
      <div class="friend-dropdown">
        <button class="friend-dropbtn">Friends</button>
        <div class="friend-dropdown-content">
          <li>friend1</li>
          <li>friend2</li>
          <li>friend3</li>
          <li>friend4</li>
        </div>
      </div>
      <div className="user-info-container">
        <ul className="user-info">
          <li>Location:</li>
          <li>Contact: {user.email}</li>
          <li>Bio:</li>
          <li>Favorite Activity:</li>
          <li>Favorite Sports Teams:</li>
        </ul>
      </div>
      <div className="activity-container">
        <h2 className="profile-card-header">{user.name}'s activities.</h2>
        <div className="activity-list ">
          <UserActivities
            activities={user.activities}
            title={`${user.username}'s actvities`}
          />
        </div>
      </div>
    </div>
  );
};

export default User;
