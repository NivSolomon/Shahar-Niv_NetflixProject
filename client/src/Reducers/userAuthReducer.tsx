import { USER_SIGNIN, USER_SIGNOUT } from '../actions.jsx';

interface Action {
    type: string; // Define the common type property
    payload?: any; // Define the optional payload property
    // Add more properties as needed
  }


const userAuthReducer = (state: StateType, action: Action) => {
  
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