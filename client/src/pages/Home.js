import React from 'react';
import { useQuery } from '@apollo/client';

import ActivityList from '../components/ActivityList';
import ActivityForm from '../components/ActivityForm';

import { QUERY_ACTIVITIES } from '../utils/queries';

const Home = () => {
  const { data } = useQuery(QUERY_ACTIVITIES);
  const activities = data?.activities || [];

  return (
    <main>
     <div className='container'>
      <div>
        <ActivityForm />
      </div>
      <div className="ActivityList">
        
          <ActivityList
            activities={activities}
            title="Activites"
            />
      </div>
     </div>
    </main>
  );
};

export default Home;
