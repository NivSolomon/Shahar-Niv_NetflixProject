// reducers/contentsReducer.js
import { SET_CONTENTS } from '../../src/actions';

const initialState = {
  contents: null,
};

const contentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTENTS:
      return {
        ...state,
        contents: action.payload,
      };
    default:
      return state;
  }
};

export default contentsReducer;
