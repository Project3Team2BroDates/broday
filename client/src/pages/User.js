import React from 'react';

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_USER, QUERY_ME} from '../utils/queries';

import Auth from '../utils/auth';
import ActivityList from '../components/ActivityList';

const User = () => {
  const { userId } = useParams();

  const { loading, data } = useQuery(
   userId ? 
    QUERY_SINGLE_USER 
    : QUERY_ME
    ,

    {
      variables: { userId: userId },
    }
  );

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getUser().data._id === userId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.name) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div className='profile-container'>
      <div className='profile-picture'>
    </div>
    <h1 className='greeting'>Hello, {user.name}!</h1>


      <h2 className="profile-card-header">
        {userId ? `${user.name}'s` : 'Your'} activities.
      </h2>
      <div className="activity-list ">
          <ActivityList
            activities={user.activities}
            title={`${user.username}'s actvities`}
          />
        </div>
    </div>

  );
};

export default User;