import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/BoardActions';
import Labels from './Labels';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.cardId;
  const card = state.cards.find((card) => card.id === id);

  if (!card) {
    var labels = null;
  } else {
    var labels = card.labels;
  }

  return {
    labels,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.cardId;

  return {
    onToggleLabel: (newColors) => {
      dispatch(actions.updateCardLabels(id, newColors));
    },
  };
};

class LabelsContainer extends React.Component {
  onToggleLabel = (color) => {
    const hasColor = this.props.labels.includes(color);

    if (hasColor) {
      var newColors = this.props.labels.filter(thisColor => thisColor !== color)
    } else {
      var newColors = [  ...this.props.labels, color ];
    }

    this.props.onToggleLabel(newColors)
  }

  render() {
    return (
      <>
        {this.props.labels ? (
          <Labels labels={this.props.labels} onToggleLabel={this.onToggleLabel} />
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  }
}

LabelsContainer = connect(mapStateToProps, mapDispatchToProps)(LabelsContainer);

export default LabelsContainer;
