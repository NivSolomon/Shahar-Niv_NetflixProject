import { useNavigate } from "react-router-dom";
import useTokenVerification from "../hooks/useTokenVerification";
import Carousel from "../components/homePage/Carousel";
import { useContext, useEffect, useState } from "react";
import { getAllContents, getByListNames } from "../services/ContentService";
import { Store } from "../store";
import axios from "axios";

const Home = () => {
  // const { loading, isValidToken } = useTokenVerification();
  const navigate = useNavigate();
  const [contents, setContents] = useState(null);
  const { state, dispatch: ctxDispatch } = useContext(Store);

  // const { userInfo } = state;
  // const userInfo = localStorage.getItem("userInfo")
  // ? JSON.parse(localStorage.getItem("userInfo"))
  // : null;

  const userInfo = state.userInfo;

  useEffect(() => {
    console.log(`user from useEffect ${userInfo?.name}`);
    if (!userInfo) {
      navigate("/signin");
    }

    const fetchData = async () => {
      try {
        if (!userInfo) return;
        const data = await getByListNames(userInfo);
        await ctxDispatch({ action: "SET_CONTENTS", payload: data });
        setContents(data);
        //  const {data} = await axios.get('http://localhost:8080/api/v1/contents/listnames', {
        //   headers: { authorization: `Bearer ${userInfo.token}` }})
        //   console.log(data);
        console.log(state.contents);
        // setContents(data);
      } catch (err) {
        console.log(err);
      }
    };

    if (userInfo) {
      fetchData();
    }

  }, [userInfo, ctxDispatch]);

  return (
    <>
      {contents &&
        Object.entries(contents).map(([key, value]) => (
          <div key={key}>
            <h3>{key}</h3>
            <Carousel contents={value} />
          </div>
        ))}
    </>
  );
};

export default Home;
