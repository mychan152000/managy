import React from "react";
import * as actions from "../../actions/BoardActions"
import { connect } from "react-redux";
import Board from "./Board";

const mapStateToProps = (state, ownProps) => {
  let id;

  if (ownProps.match.url.includes('/cards/')) {
    id = state.currentBoardId;
  } else {
    id = Number(ownProps.match.params.id)
  }

  const board = state.boards.find(board => board.id === id);

  return {
    id,
    board,
    lists: state.lists.slice(),
    cards: state.cards.slice().filter(card => !card.archived),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchBoard: (id) => {
      dispatch(actions.fetchBoard(id));
    }
  };
};

class BoardContainer extends React.Component {
  componentDidMount() {
    if (this.props.id) {
      this.props.onFetchBoard(this.props.id);
    }
  }

  componentDidUpdate() {
    if (this.props.id && !this.props.board) {
      this.props.onFetchBoard(this.props.id);
    }
  }

  render() {

    return (
      <div>
        {
          this.props.board ? (
            <Board
              title={ this.props.board.title }
              lists={ this.props.lists }
              id={ this.props.id }
              cards={ this.props.cards }
            />
          ) : null
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);
