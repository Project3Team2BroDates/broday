import React from 'react';

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_USER} from '../utils/queries';

import Auth from '../utils/auth';

const User = () => {
  const { userId } = useParams();

  const { loading, data } = useQuery(
   // userId ? 
    QUERY_SINGLE_USER 
    //: QUERY_ME
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
        {userId ? `${user.name}'s` : 'Your'} friends have endorsed these
        skills...
      </h2>

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        
      </div>
    </div>
  );
};

export default User;