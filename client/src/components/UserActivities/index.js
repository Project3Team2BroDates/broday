import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import {  REMOVE_ACTIVITY } from "../../utils/mutations";
import { QUERY_ACTIVITIES, QUERY_ME } from '../../utils/queries';

const UserActivities = ({
    activities,
    title,
}) => {
  const [removeActivity, { error }] = useMutation(REMOVE_ACTIVITY,{
    update(cache, { data: { removeActivity } }) {
      try {
        const { activities } = cache.readQuery({ query: QUERY_ACTIVITIES });

        cache.writeQuery({
          query: QUERY_ACTIVITIES,
          data: { activities: [removeActivity, ...activities] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, activities: [...me.activities, removeActivity] } },
      });
    },
  });

  const handleClick = async (event) =>{
    const value = event.target.value;
    console.log(value);
    const {data} = await removeActivity({
      variables: {activityText: value},
    });
    console.log(data);
  }

    if (!activities.length) {
        return <h3>No Activities Yet</h3>;
    }
  
    return (
        <div className='activityListContainer'>
      {activities &&
        activities.map((activity) => (
          <div key={activity._id} className="card-container ">
            <h4 className="card-header bg-primary text-light ">
              {activity.activityAuthor ?(
                <Link
                  className="text-light"
                  to={`/users/${activity.activityAuthor}`}
                >
                </Link>
              ) : (
                <span></span>
              )}
            </h4>
            <div className="card-body ">
              <li >{activity.activityText}</li>
              <button value={activity.activityText} onClick={handleClick}>X</button>
            </div>
            
          </div>
        ))}
    </div>
    );
};

export default UserActivities;