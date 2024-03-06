// reducers/userAuthReducer.js
import { USER_SIGNIN, USER_SIGNOUT } from '../../src/actions';

const initialState = {
  userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
  contents: null,
};

const userAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNIN:
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
      return {
        ...state,
        userInfo: action.payload,
      };
    case USER_SIGNOUT:
      return {
        ...state,
        userInfo: null,
      };
    default:
      return state;
  }
};

export default userAuthReducer;
