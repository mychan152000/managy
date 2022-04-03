import React from 'react';
import CommentContainer from './CommentContainer';
import Action from './Action';

const ActivityList = ({ activities }) => {
  return (
    <>
      <h2 className="activity-icon icon">Activity</h2>
      <ul className="horiz-list">
        <li className="not-implemented">Show Details</li>
      </ul>
      <ul className="modal-activity-list">
        {activities.map((activity) => {
          const isComment = activity.text;

          return (
            <li>
              {isComment ? (
                <CommentContainer comment={activity} />
              ) : (
                <Action {...activity} />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ActivityList;
