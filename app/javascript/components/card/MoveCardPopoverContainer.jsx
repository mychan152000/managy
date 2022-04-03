import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/BoardActions';
import MoveCardPopover from './MoveCardPopover';

const mapStateToProps = (state, ownProps) => {
  const card = state.cards.find((card) => card.id === ownProps.cardId);

  return {
    allBoards: state.boards,
    allLists: state.lists,
    card,
  };
};

class MoveCardPopoverContainer extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.card) {
      return;
    }
  }

  render() {
    return (
      <>
        {this.props.card ? <MoveCardPopover {...this.props} /> : 'Loading...'}
      </>
    );
  }
}

export default connect(mapStateToProps, null)(MoveCardPopoverContainer);
