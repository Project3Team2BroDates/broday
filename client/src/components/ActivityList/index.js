import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { ADD_EXISTING_ACTIVITY } from "../../utils/mutations";
import { QUERY_ACTIVITIES, QUERY_ME } from '../../utils/queries';

const ActivityList = ({
    activities,
    title,
}) => {
  const [activityText, setActivityText] = useState("");
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
      // const { me } = cache.readQuery({ query: QUERY_ME });
      // cache.writeQuery({
      //   query: QUERY_ME,
      //   data: { me: { ...me, activities: [...me.activities, addExistingActivity] } },
      // });
    },
  })
  const addActivity = async (activity) =>{
    try {
      const { data } = await addExistingActivity({
        variables: { activity },
      });
      console.log(data);
      
    } catch (error) {
      console.error(error)
    }
    return "done"
  }
  const handleClick = async (event) =>{
    event.stopPropagation()
    // console.log(event.target.value);
    let a = '';
    a = event.target.value; 
    console.log(a);
    
   setActivityText(a);
   setTimeout(console.log("hi"),2000);
   addActivity(activityText)
  //  console.log(activityText)
  
    
  
    
    // setActivityText("")
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
            
                <span></span>
            
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