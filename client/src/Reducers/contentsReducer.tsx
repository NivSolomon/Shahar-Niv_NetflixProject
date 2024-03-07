import { SET_CONTENTS, SET_MY_CONTENTS } from '../actions.jsx';

const contentsReducer = (state, action) => {
  
    switch (action.type) {
        case SET_CONTENTS:{
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
            return {...state, userInfo: action.payload};
        }
        case SET_MY_CONTENTS:{
            // localStorage.setItem('userInfo', JSON.stringify(action.payload));
            console.log(action.payload);
            return {...state, myList: action.payload};
        }

        default:{
            return {...state};
        }
    }
}

export default contentsReducer