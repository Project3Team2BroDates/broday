import React from 'react';
import { Link } from 'react-router-dom';

const ActivityList = ({
    activities,
    title,
}) => {
    if (!activities.length) {
        return <h3>No Activities Yet</h3>;
    }

    return (
        <div>
      {activities &&
        activities.map((activity) => (
          <div key={activity._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
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
            <div className="card-body bg-light p-2">
              <p>{activity.activityText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/activities/${activity._id}`}
            >
              test.
            </Link>
          </div>
        ))}
    </div>
    );
};

export default ActivityList;