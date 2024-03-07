import { createContext, useReducer } from "react";
import storeReducer from './Reducers/userAuthReducer';
import { getByListNames } from "./services/ContentService";

// Define an interface for the stored user information
interface UserInfo {
  id: string;
  username: string;
  // Add more properties as needed
}
interface Content {
  title: { type: string, required: true },
  description: { type: string, required: true },
  img: { type: string, required: true },
  imgTitle: { type: string, required: true },
  imgThumb: { type: string, required: true },
  imgVertical: { type: string, required: true },
  trailerSource: { type: string, required: true },
  contentSource: { type: string, required: true },
  duration: { type: string, required: true },
  year: { type: string, required: true },
  ageLimit: { type: number, required: true },
  genre: { type: string, enum: object, required: true },
  isSeries: { type: boolean, required: true },
  listNames: { type: [string], enum: object, required: true }
}

// Define the type for the initial state
interface InitialStateType {
  userInfo: UserInfo | null;
  contents: Content[] | null; // Assuming contents is an array of some type
  myList: Array<Content> | null;
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
const contents = userInfo ? getByListNames(userInfo) : null;

// Define the initial state
const initialState: InitialStateType = {
  userInfo: userInfo,
  contents: await contents,
  myList: null
};

// Define the provider component
export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  // Update contents if userInfo changes
  // useEffect(() => {
  //   if (state.userInfo) {
  //     const newContents = getByListNames(state.userInfo);
  //     dispatch({ type: "UPDATE_CONTENTS", payload: newContents });
  //   }
  // }, [state.userInfo]);

  const body = { state, dispatch };
  return <Store.Provider value={body}>{children}</Store.Provider>;
};
