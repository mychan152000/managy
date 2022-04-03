import React from 'react';

const Action = (activity) => {
  return (
    <>
      <div class="member-container">
        <div class="card-member small-size">MFT</div>
      </div>
      <p>
        <span class="member-name">My Favorite Team</span>
        <p>&nbsp;{activity.description}</p>
        <small>{activity.created_at}</small>
      </p>
    </>
  );
};

export default Action;
