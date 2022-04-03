import { combineReducers } from "redux";
import boards from "./boards";
import lists from "./lists";
import cards from "./cards";
import currentBoardId from './currentBoardId';

const rootReducer = combineReducers({ boards, lists, cards, currentBoardId });

export default rootReducer;
