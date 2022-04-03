import React from 'react';
import LabelsContainer from './LabelsContainer';
import DueDatePickerContainer from './DueDatePickerContainer';

import { getDateDetails } from '../../lib/viewHelpers';

class DetailsSection extends React.Component{
  state = {
    datePopOverOpen: false
  };

  handleShowDatePopOver = () => {
    this.setState({
      datePopOverOpen: true
    });
  }

  handleCloseDatePopOver = (event) => {
    event.preventDefault();
    this.setState({
      datePopOverOpen: false
    });
  };


  render() {
    return (
      <>
        { this.state.datePopOverOpen && 
        <DueDatePickerContainer 
          handleCloseDatePopOver={this.handleCloseDatePopOver}
          card={this.props.card}
        /> }
        <ul className="modal-details-list">
          <li className="labels-section">
            <LabelsContainer 
              cardId={this.props.card.id}
            />
          </li>
          <li className="due-date-section">
            <h3>Due Date</h3>
            <div onClick={this.handleShowDatePopOver} id="dueDateDisplay" className={getDateDetails(this.props.card).className}>
              <input
                id="dueDateCheckbox"
                type="checkbox"
                className="checkbox"
                checked=""
              ></input>
              {this.props.card.due_date
                ? getDateDetails(this.props.card).formattedDueDate
                : 'N/A'}
              <span>{getDateDetails(this.props.card).isOverdue && ' (past due)'}</span>
            </div>
          </li>
        </ul>
      </>
    )
  }
}

export default DetailsSection;
