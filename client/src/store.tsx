import { legacy_createStore as createStore , combineReducers } from 'redux';
import userAuthReducer from './Reducers/userAuthReducer';
import contentsReducer from './Reducers/contentsReducer';

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  contents: contentsReducer,
});

const store = createStore(rootReducer);

export default store;