

import { createContext, useReducer } from "react";
import storeReducer from './Reducers/userAuthReducer'

// Define an interface for the stored user information
interface UserInfo {
  id: string;
  username: string;
  // Add more properties as needed
}

// Define the type for the initial state
interface InitialStateType {
  userInfo: UserInfo | null;
}

// Create a context for the store
export const Store = createContext(null);

// Retrieve user information from localStorage
const userInfoFromLocalStorage = localStorage.getItem("userInfo");

// Parse user information from localStorage if available
const initialState: InitialStateType = {
  userInfo: userInfoFromLocalStorage
    ? JSON.parse(userInfoFromLocalStorage) as UserInfo // Parse the JSON string to UserInfo type
    : null
};  

// Define the provider component
export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  const body = { state, dispatch };
  return <Store.Provider value={body}>{children}</Store.Provider>;
};
