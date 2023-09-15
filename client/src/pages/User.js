import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_USER, QUERY_ME } from "../utils/queries";
// import {REMOVE_ACTIVITY} from '../utils/mutations'

import Auth from "../utils/auth";
import UserActivities from "../components/UserActivities";

const User = () => {
  const { userId } = useParams();
  const [file, setFile] = useState(null);

  const { loading, data } = useQuery(userId ? QUERY_USER : QUERY_ME, {
    variables: { userId: userId },
  });
  //lets do this
  const user = data?.me || data?.user || {};

  // const handleFileChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   setFile(selectedFile);
  // };

  // const handleUpload = async () => {
  //   if (!file) {
  //     return; // No file selected, do nothing
  //   }

  //   // Create a FormData object to send the file to the server
  //   const formData = new FormData();
  //   formData.append("file", file);

  //   // Send the file to the server (you should replace 'uploadEndpoint' with your actual server endpoint)
  //   try {
  //     const response = await fetch("/uploadEndpoint", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     // Handle the response from the server as needed
  //     if (response.ok) {
  //       // File uploaded successfully
  //       console.log("File uploaded successfully!");
  //       // You can update the user's profile with the new file information here
  //     } else {
  //       console.error("File upload failed.");
  //     }
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //   }
  // };

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
        {/* <input type="file" accept=".jpeg, .jpg, .png" onChange={handleFileChange} /> */}
        {/* <button className="upload-button" onClick={handleUpload}>Upload</button> */}
      </div>
      <h1 className="greeting">Hello, {user.name}!</h1>
      
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
