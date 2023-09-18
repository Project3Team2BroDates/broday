import React, { useState } from "react";
import {Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";


import { QUERY_USER } from "../utils/queries";
// import {REMOVE_ACTIVITY} from '../utils/mutations'

import Auth from "../utils/auth";
import UserActivities from "../components/UserActivities";
import messages from "../images/friends.png"


const Bro = () => {
  let { userId } = useParams();
  console.log(userId);
 
  const [file, setFile] = useState(null);

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: userId },
  });
  console.log(data);
  //lets do this
  const user =  data?.user || {};
  const bros = user.bros;
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    console.log("Upload button clicked!");
    if (!file) {
      return; // No file selected, do nothing
    }

    // Create a FormData object to send the file to the server
    const formData = new FormData();
    formData.append("file-demo", file);

    // Send the file to the server (you should replace 'uploadEndpoint' with your actual server endpoint)
    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });

      // Handle the response from the server as needed
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        console.log("File uploaded successfully!", data);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  // if (Auth.loggedIn() && Auth.getUser().data._id === userId) {
  //   return <Navigate to="/me" />;
  // }

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
  return (
    <div className="profile-container">
      <div className="infoContainer">
      <h1 className="greeting">{user.name}'s profile</h1>

        <img src={user.profilePic} alt="profile pic " />
        <input
          className="chosenPic"
          type="file"
          accept=".jpeg, .jpg, .png"
          onChange={handleFileChange}
        />
      
</div>
      <div className="user-info-container">
        <ul className="user-info">
        <li>< Link to={`mailto:${user.email}`}>Contact: {user.email}</Link></li>
        </ul>
      </div>
      <div class="friend-dropdown">
        <button class="friend-dropbtn"><img src={messages} alt="friends"></img></button>
        <div class="friend-dropdown-content">
          {bros.map((bro)=>(
            <li>{bro.name}</li>
            
          ))}
        </div>
      </div>
      <div className="activity-container">
        <h2 className="profile-card-header">{user.name}'s activities.</h2>
        <div className="activity-list ">
          <UserActivities
            activities={user.activities}
            title={`${user.username}'s activities`}
          />
        </div>
      </div>
    </div>
  );
};

export default Bro;
