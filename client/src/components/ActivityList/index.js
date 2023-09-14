import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { ADD_EXISTING_ACTIVITY } from "../../utils/mutations";
import { QUERY_ACTIVITIES } from '../../utils/queries';

const ActivityList = ({
    activities,
    title,
}) => {
  
  const [addExistingActivity, {e}] = useMutation(ADD_EXISTING_ACTIVITY,{
    update(cache, { data: { addExistingActivity } }){
      try{
        const { activities } = cache.readQuery({ query: QUERY_ACTIVITIES });

        cache.writeQuery({
          query: QUERY_ACTIVITIES,
          data: { activities: [addExistingActivity, ...activities] },
        });
      }catch (err) {
        console.error(err);
      }
    }
  })
  const handleClick = async (event) =>{
    let activityName = event.target.value;
    console.log(activityName);
    try {
      const { data } = await addExistingActivity({
        variables: { activityName },
      });
      console.log(data);
    } catch (error) {
      console.error(error)
    }
  }
 
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
              <button onClick={handleClick} value={activity.activityText} >{activity.activityText}</button>
            </div>
            
          </div>
        ))}
    </div>
    );
};

export default ActivityList;