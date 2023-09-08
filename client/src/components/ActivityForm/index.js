/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_ACTIVITY } from "../../utils/mutations";
import { QUERY_ACTIVITIES, QUERY_ME } from '../../utils/queries';

import Auth from "../../utils/auth";

const ActivityForm = () => {
  const [activityText, setActivityText] = useState("");

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

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(activityText);
      const { data } = await addActivity({
        variables: { activityText },
      });

      setActivityText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "activityText") {
      setActivityText(value);
    }
  };

  return (
    <div>
      <h3>What activities do you enjoy?</h3>

      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="activityText"
                placeholder="Here's a new activity..."
                value={activityText}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
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
      ) : (
        <p>
          You need to be logged in to add an activity. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ActivityForm;
