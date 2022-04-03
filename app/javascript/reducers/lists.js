export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS":
      const id = action.payload.board.id;
      let newLists = state.filter(list => list.board_id !== id);
      const newListsWithoutCards =  action.payload.board.lists.map(list => {
        const { cards, ...listWithoutCards } = list;
        return listWithoutCards;
      });
      newLists = [...newLists, ...newListsWithoutCards];
      return newLists;
    case "CREATE_LIST_SUCCESS":
      {
        const { board_id, title } = action.payload;
        let list = {
          board_id,
          title
        };

        return [ ...state, list ];
      }
    case "EDIT_LIST_TITLE":
      {
        console.log(action.payload);
        const { id, title } = action.payload;
        return state.map((list) => {
          if (list.id === id) {
            return Object.assign({}, list, {
              title
            })
          }
          return list;
        })
      }
    default:
      return state;
  }
}
