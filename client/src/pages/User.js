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
    <div>
      <h2 className="card-header">
        {userId ? `${user.name}'s` : 'Your'} activities.
      </h2>
      <div className="col-12 col-md-10 mb-5">
          <ActivityList
            activities={user.activities}
            title={`${user.username}'s actvities`}
          />
        </div>
    </div>
  );
};

export default User;