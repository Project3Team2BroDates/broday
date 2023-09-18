/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_EXISTING_ACTIVITY } from "../../utils/mutations";
import { QUERY_ACTIVITIES, QUERY_ME } from "../../utils/queries";

const ActivityList = ({ activities, title }) => {
  const [activityArray, setActivityArray] = useState([]);

  const [addExistingActivity, { error }] = useMutation(ADD_EXISTING_ACTIVITY, {
    update(cache, { data: { addExistingActivity } }) {
      try {
        const { activities } = cache.readQuery({ query: QUERY_ACTIVITIES });

        cache.writeQuery({
          query: QUERY_ACTIVITIES,
          data: { activities: [...activities] },
        });
      } catch (err) {
        console.error(err);
      }
      // const { me } = cache.readQuery({ query: QUERY_ME });
      // cache.writeQuery({
      //   query: QUERY_ME,
      //   data: { me: { ...me, activities: [...me.activities, addExistingActivity] } },
      // });
    },
  });
  const handleChange = (event) => {
    const value = event.target.value;
    activityArray.push(value);
    console.log(activityArray);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(activityArray);
      for (let i = 0; i < activityArray.length; i++) {
        let currentActivity = activityArray[i];
        console.log(currentActivity);
        const { data } = await addExistingActivity({
          variables: { activityText: currentActivity },
        });
        console.log(data);
      }
    } catch (err) {
      console.error(err);
    }
    setActivityArray([]);
  };
  if (!activities.length) {
    return <h3>No Activities Yet</h3>;
  }

  return (
    <div className="activity">
      <h3>What activities do you enjoy?</h3>
      <>
        <form onSubmit={handleFormSubmit}>
          {activities &&
            activities.map((activity) => (
              <div key={activity._id} className="card-container ">
                <h4 className="card-header  ">
                  <span></span>
                </h4>
                <div className="card-body ">
                  <input
                    type="checkbox"
                    name={activity.activityText}
                    value={activity.activityText}
                    onChange={handleChange}
                  />
                  {activity.activityText}
                </div>
              </div>
            ))}

          <div className="col-12 col-lg-3">
            <button className=".add" type="submit">
              Add Activity
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      </>
    </div>
  );
};

export default ActivityList;
