import { ADD_CONTENT_TO_MY_LIST, REMOVE_CONTENT_FROM_MY_LIST, SET_MY_LIST } from "../actions";

const initialState = {
  myList: null,
};

const myListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_LIST:
      return {
        ...state,
        myList: action.payload,
      };

      case ADD_CONTENT_TO_MY_LIST:
        return {
          ...state,
          myList: [...state.myList, action.payload]
        };

      case REMOVE_CONTENT_FROM_MY_LIST:
        return {
          ...state, 
          myList: [state.myList.filter(item => item._id !== action.payload)]
        }
     
    default:
      return state;
  }
};

export default myListReducer;