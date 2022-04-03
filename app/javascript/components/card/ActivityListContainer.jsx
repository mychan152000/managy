import { connect } from 'react-redux';
import ActivityList from './ActivityList';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.cardId;
  const card = state.cards.find((card) => card.id === id);
  if (!card) {
    var activities = null;
  } else {
    var activities = [...card.actions, ...card.comments].sort((a, b) => {
      return new Date(a.updated_at) - new Date(b.updated_at);
    });
  }

  return {
    activities,
  };
};

let ActivityListContainer = ({ activities }) => {
  return (
    <>
      {activities ? (
        <ActivityList activities={activities} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

ActivityListContainer = connect(mapStateToProps, null)(ActivityListContainer);

export default ActivityListContainer;
