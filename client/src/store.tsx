import { legacy_createStore as createStore , combineReducers } from 'redux';
import userAuthReducer from './Reducers/userAuthReducer';
import contentsReducer from './Reducers/contentsReducer';
import myListReducer from './Reducers/myListReducer';

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  contents: contentsReducer, // Change the name later 
  myList: myListReducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;