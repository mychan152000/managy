export const BOARDS_INDEX_URL = "/api/boards";
export const CREATE_BOARD_URL = "/api/boards";
export const CREATE_LIST_URL = '/api/lists';
export const CREATE_CARD_URL = '/api/cards';
export const UPDATE_LIST_URL = (list_id) => {
	return `/api/lists/${list_id}`;
};
export const GET_CARD_URL = (card_id) => {
	return `/api/cards/${card_id}`;
};
export const UPDATE_CARD_URL = (card_id) => {
  return `/api/cards/${card_id}`
}

export const POST_COMMENT_URL = `/api/comments`;