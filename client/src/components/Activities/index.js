import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ACTIVITIES } from '../../utils/queries';

const Activites = () =>{
const {loading, data} = useQuery(QUERY_ACTIVITIES)
// const activities = data.activities;
console.log(data);
if (loading) {
    return <div>Loading...</div>;
  }
  return(
    <div>
        <h2>Browse Activites</h2>

    </div>
  )
}
export default Activites