import React from "react";
import BoardHeader from "./BoardHeader";
import List from "../list/List"
import AddList from "../list/AddList";
import AddListContainer from "../list/AddListContainer";
import ListContainer from "../list/ListContainer";

const Board = ({ title, lists, cards, id }) => {
  return (
    <div>
        <BoardHeader title={title} />
        <div id="list-container" className="list-container">
          <div id="existing-lists" className="existing-lists">
            {lists.map(list => {
              let ownCards = cards.filter(card => {
                return card.list_id === list.id;
              });
              return (
                <ListContainer
                  list={list} 
                  cards={ownCards} 
                  key={list.id}
                  id={list.id} 
                />
              );
            })}
          </div>
          <AddListContainer 
            board_id={id}
          />
        </div>
    </div>
  );
};

export default Board;
