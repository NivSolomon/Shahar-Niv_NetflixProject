import {
  ADD_CONTENT_TO_MY_LIST,
  REMOVE_CONTENT_FROM_MY_LIST,
  SAVE_MY_LIST_IN_DB,
  SET_MY_LIST,
} from "../actions";
import { IContent, IMyList } from "../types/interfaces";


const initialState: IMyList = {
  myList: [],
};

const myListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_LIST:
      return {
        ...state,
        myList: action.payload,
      };

    case ADD_CONTENT_TO_MY_LIST:
      if (state.myList.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };

    case REMOVE_CONTENT_FROM_MY_LIST:
      return {
        ...state,
        myList: state.myList.filter((item) => item._id !== action.payload._id),
      };

    case SAVE_MY_LIST_IN_DB:
      return state;

    default:
      return state;
  }
};

export default myListReducer;
