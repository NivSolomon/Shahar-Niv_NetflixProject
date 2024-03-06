import { createContext, useReducer, useEffect } from "react";
import userAuthReducer from './Reducers/userAuthReducer';
import contentsReducer from "./Reducers/contentsReducer";
import { getByListNames } from "./services/ContentService";

// Define an interface for the stored user information
interface UserInfo {
  id: string;
  username: string;
  // Add more properties as needed
}

// Define the type for the initial state
interface InitialStateType {
  userInfo: UserInfo | null;
  contents: any[] | null; // Assuming contents is an array of some type
}

// Create a context for the store
export const Store = createContext<any>(null); // Update createContext to allow any type initially

// Retrieve user information from localStorage
const userInfoFromLocalStorage = localStorage.getItem("userInfo");

// Define userInfo
const userInfo: UserInfo | null = userInfoFromLocalStorage
  ? JSON.parse(userInfoFromLocalStorage)
  : null;

// Define contents using getByListNames if userInfo is available
const data = userInfo ? await getByListNames(userInfo) : null;
console.log("Contents: ", data);
console.log("UserInfo: ", userInfo)
// Define the initial state
const initialState: InitialStateType = {
  userInfo: await userInfo, 
  contents: await data, // Include contents in the initial state
};

// Define the provider component
export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  // Combine both reducers into one custom reducer
  const rootReducer = (state: InitialStateType, action: any) => ({
    userInfo: userAuthReducer(state.userInfo, action),
    contents: contentsReducer(state.contents, action),
  });

  const [state, dispatch] = useReducer(rootReducer, initialState);

  // useEffect(() => {
  //   // Fetch contents when userInfo changes
  //   const fetchContents = async () => {
  //     if (state.userInfo) {
  //       const newContents = await getByListNames(state.userInfo);
  //       dispatch({ type: "SET_CONTENTS", payload: newContents });
  //     }
  //   };

  //   fetchContents();
  // }, [state.userInfo]);

  const body = { state, dispatch };
  return <Store.Provider value={body}>{children}</Store.Provider>;
};
