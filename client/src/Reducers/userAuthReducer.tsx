import { USER_SIGNIN, USER_SIGNOUT } from '../actions.jsx';

const userAuthReducer = (state, action) => {
  
    switch (action.type) {
        case USER_SIGNIN:{
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
            return {...state, userInfo: action.payload};
        }
        case USER_SIGNOUT:{
            // cookies.remove('userToken');
            localStorage.removeItem('userInfo');
            return {...state, userInfo: null}
        }
        default:{
            return {...state};
        }
    }
}

export default userAuthReducer