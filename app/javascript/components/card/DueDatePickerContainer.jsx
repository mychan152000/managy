import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/BoardActions';
import DueDatePicker from './DueDatePicker';

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.card.id;

  return {
    onUpdateDate: (newDate) => {
      dispatch(actions.updateCardDate(id, newDate));
    },
  };
};


export default connect(null, mapDispatchToProps)(DueDatePicker);