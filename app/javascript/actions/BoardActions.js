import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function updateListSuccess({ id, title }) {
  return {
    type: types.EDIT_LIST_TITLE,
    payload: {
      id,
      title,
    },
  };
}

export function fetchBoardsRequest() {
  return { type: types.FETCH_BOARDS_REQUEST };
}

export function fetchBoardSuccess(board) {
  return { type: types.FETCH_BOARD_SUCCESS, payload: { board } };
}

export function fetchBoardsSuccess(boards) {
  return { type: types.FETCH_BOARDS_SUCCESS, boards };
}

export function createBoardRequest() {
  return { type: types.CREATE_BOARD_REQUEST };
}

export function createBoardSuccess(board) {
  return { type: types.CREATE_BOARD_SUCCESS, board: board };
}

export function createListSuccess(list) {
  const { board_id, title } = list;

  return {
    type: types.ADD_LIST,
    payload: {
      board_id,
      title,
    },
  };
}

export function createCardSuccess(card) {
  return {
    type: types.CREATE_CARD_SUCCESS,
    payload: {
      card,
    },
  };
}

export function fetchBoards() {
  return function(dispatch) {
    dispatch(fetchBoardsRequest());
    apiClient.getBoards((boards) => dispatch(fetchBoardsSuccess(boards)));
  };
}

export function fetchBoard(id) {
  return function(dispatch) {
    apiClient.getBoard(id, (board) => dispatch(fetchBoardSuccess(board)));
  };
}

export function createBoard(board, callback) {
  return function(dispatch) {
    dispatch(createBoardRequest());
    apiClient.createBoard(board, (newBoard) => {
      dispatch(createBoardSuccess(newBoard));

      if (callback) {
        callback(newBoard);
      }
    });
  };
}

export function createList(board_id, title, callback) {
  return function(dispatch) {
    apiClient.createList(board_id, title, (newList) => {
      dispatch(createListSuccess(newList));

      if (callback) {
        callback(newList);
      }
    });
  };
}

export function updateList(list_id, title, callback) {
  return function(dispatch) {
    apiClient.updateList(list_id, title, (newList) => {
      dispatch(updateListSuccess(newList));

      if (callback) {
        callback(newList);
      }
    });
  };
}

export function createCard(list_id, title, callback) {
  return function(dispatch) {
    apiClient.createCard(list_id, title, (newCard) => {
      dispatch(createCardSuccess(newCard));

      if (callback) {
        callback(newCard);
      }
    });
  };
}

export function updateCard(card_id, newAttrs, callback) {
  return function(dispatch) {
    apiClient.updateCard(card_id, newAttrs, (newCard) => {
      dispatch(fetchCardSuccess(newCard));

      if (callback) {
        callback(newCard);
      }
    });
  };
}

export function updateCardDate(card_id, due_date, callback) {
  return updateCard(card_id, { due_date }, callback);
}

export function updateCardLabels(card_id, labels, callback) {
  return updateCard(card_id, { labels }, callback);
}

export function updateCardTitle(card_id, title, callback) {
  return updateCard(card_id, { title }, callback);
}

export function updateCardDescription(card_id, description, callback) {
  return updateCard(card_id, { description }, callback);
}

export function updateCardArchived(card_id, archived, callback) {
  return updateCard(card_id, { archived }, callback);
}

export function addCommentSuccess(comment) {
  return {
    type: types.CREATE_COMMENT_SUCCESS,
    payload: {
      comment,
    },
  };
}

export function addComment(card_id, comment, callback) {
  return function(dispatch) {
    apiClient.addComment(card_id, comment, (newComment) => {
      dispatch(addCommentSuccess(newComment));

      if (callback) {
        callback(newComment);
      }
    });
  };
}

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, payload: { ...card } };
}

export function fetchCard(id) {
  return function(dispatch) {
    apiClient.fetchCard(id, (card) => dispatch(fetchCardSuccess(card)));
  };
}
