import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import SearchResults from "./components/shared/SearchResults";
import { useContext, useEffect, useState } from "react";
import { getByListNames, getMyListHandler } from "./services/ContentService";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import MyList from "./pages/MyList";
import { SAVE_MY_LIST_IN_DB, SET_MY_LIST } from "./actions";
import Watch from "./pages/Watch";
import Movies from "./pages/Movies";
import Series from "./pages/Series";

function App() {
  // const { state, dispatch: ctxDispatch } = useContext(Store);
  // const { userInfo, contents } = state;
  const userInfo = useSelector((state) => state.userAuth.userInfo);
  const myList = useSelector((state) => state.myList.myList);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      console.log(myList);
      try {
        if (userInfo) {
          const { data } = await axios.get(
            "api/v1/contents/listnames",
            {
              headers: { authorization: `Bearer ${userInfo.token}` },
            }
          );
          dispatch({ type: "SET_CONTENTS", payload: data });

          const result = await getMyListHandler(userInfo);
          dispatch({ type: SET_MY_LIST, payload: result });
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    
  }, [userInfo]);
  

  return (
    <>
    <div className="">
        <Header />
    </div>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/watch" element={<Watch/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/series" element={<Series/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
