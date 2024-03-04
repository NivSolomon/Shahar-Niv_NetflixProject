import { SET_CONTENTS } from '../actions.jsx';

const contentsReducer = (state, action) => {
  
    switch (action.type) {
        case SET_CONTENTS:{
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
            return {...state, userInfo: action.payload};
        }

        default:{
            return {...state};
        }
    }
}

export default contentsReducer