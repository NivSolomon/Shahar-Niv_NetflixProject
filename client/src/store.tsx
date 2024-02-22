import { createContext, useReducer } from "react";
import storeReducer from './Reducers/userAuthReducer'

export const Store = createContext();

const initialState = localStorage.getItem("userInfo");
  
  export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(storeReducer, initialState);
    const body = { state, dispatch };
    return <Store.Provider value={body}>{children}</Store.Provider>;
  };

