import { useNavigate } from "react-router-dom";
// import useTokenVerification from "../hooks/useTokenVerification";
import Carousel from "../components/homePage/Carousel";
import { useContext, useEffect, useState } from "react";
import { getByListNames } from "../services/ContentService";
import { useSelector } from 'react-redux';

const Home = () => {
  // const { isValidToken } = useTokenVerification();
  const navigate = useNavigate();
  // const { state, dispatch: ctxDispatch } = useContext(Store);
  // const { userInfo, contents } = state;
  const [firstLoad, setfirstLoad] = useState(true);
  const contents = useSelector((state) => state.contents.contents);
  const userInfo = useSelector((state) => state.userAuth.userInfo);

  // useEffect(() => {
  //    console.log(contents);
  //    console.log(userInfo);
  // }, [])

  // useEffect(() => {
  //   if (firstLoad) {
  //     // Only reload the page on the first load
  //     setfirstLoad(false);
  //     location.reload();
  //   }
  // }, [firstLoad]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (userInfo) {
  //         const data = await getByListNames(userInfo);
  //         ctxDispatch({ type: "SET_CONTENTS", payload: data });

  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchData(); // Call fetchData directly here
  // }, []); // Add userInfo and ctxDispatch to dependency array

  //   useEffect(() => {
  //     // Fetch content data when userInfo changes or when the component mounts
  //     if (userInfo) {
  //         fetchData(); // Call a function to fetch data
  //     }
  // }, []); // Dependency array to re-run effect when userInfo changes

//   useEffect(() => {
//     const tokenHandler = () => {
//       if (!userInfo) {
//         navigate("/signin");
//         return null;
//       }
//     };
//     const fetchData = async () => {
//           try {
//             if (userInfo) {
//               const data = await getByListNames(userInfo.userInfo);
//               await ctxDispatch({ type: "SET_CONTENTS", payload: data });
//               console.log("contents from use effect 2:", data);
//             }
//           } catch (err) {
//             console.log(err);
//           }
//         };

    
//     console.log("userInfo from use effect:", userInfo.userInfo);
//     console.log("contents from use effect:", contents);
// fetchData();
//     tokenHandler();
//   }, []);

  return (
    <>
      <p>{userInfo.email}</p> 
      {contents && Object.entries(contents).map(([key, value]) => (
        <div key={key}>
          <h3>{key}</h3>
          <Carousel contents={value} />
        </div>
      ))}
      {!contents && <h1>Loading...</h1>}
    </>
  );
  
};

export default Home;
