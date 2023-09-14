import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { ADD_ACTIVITY, REMOVE_ACTIVITY } from "../../utils/mutations";
import { QUERY_ACTIVITIES, QUERY_ME } from '../../utils/queries';

const UserActivities = ({
    activities,
    title,
}) => {
  const [addActivity, { error }] = useMutation(ADD_ACTIVITY,{
    update(cache, { data: { addActivity } }) {
      try {
        const { activities } = cache.readQuery({ query: QUERY_ACTIVITIES });

        cache.writeQuery({
          query: QUERY_ACTIVITIES,
          data: { activities: [addActivity, ...activities] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, activities: [...me.activities, addActivity] } },
      });
    },
  });

  // const addExistingActivity = async (event) =>{
  //   console.log(event.target);
  //   let activityText = event.target.value
  //   try {
  //     // console.log(activityText);
  //     // write a new mutation that doesnt create duplicate db entries
  //     const { data } = await addActivity({
  //       variables: { activityText },
  //     });

      
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
    if (!activities.length) {
        return <h3>No Activities Yet</h3>;
    }
  
    return (
        <div>
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
              <li value={activity.activityText} >{activity.activityText}</li>
              <button>Remove Activity</button>
            </div>
            
          </div>
        ))}
    </div>
    );
};

export default UserActivities;