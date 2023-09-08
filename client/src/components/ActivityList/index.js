import React from 'react';
import { Link } from 'react-router-dom';

const ActivityList = ({
    activities,
    title,
}) => {
  console.log(activities);
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
              <p>{activity.activityText}</p>
            </div>
            
          </div>
        ))}
    </div>
    );
};

export default ActivityList;