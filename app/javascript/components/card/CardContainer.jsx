import React from 'react';

import { connect } from 'react-redux';
import Card from './Card';
import * as actions from '../../actions/BoardActions';

const mapStateToProps = (state, ownProps) => {
  const card = state.cards.find(
    (card) => card.id === Number(ownProps.match.params.card_id)
  );

  if (card) {
    var list = state.lists.find((list) => list.id === card.list_id);
  }

  return {
    card,
    list,
    cardId: ownProps.match.params.card_id,
    boardId: state.currentBoardId,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchCard: (id) => {
      dispatch(actions.fetchCard(id));
    },
  };
};

class CardContainer extends React.Component {
  componentDidMount() {
    this.props.onFetchCard(this.props.cardId);
  }

  render() {
    return (
      <>
        {this.props.card ? (
          <Card
            card={this.props.card}
            list={this.props.list}
            boardId={this.props.boardId}
          />
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  }
}

CardContainer = connect(mapStateToProps, mapDispatchToProps)(CardContainer);

export default CardContainer;
