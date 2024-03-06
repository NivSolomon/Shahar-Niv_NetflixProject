import axios from "axios";
import { useContext } from "react";

const getAllContents = async (userInfo: any) => {
  const { data } = await axios.get("/api/v1/contents", {
    headers: { authorization: `Bearer ${userInfo.token}` },
  });
  // console.log(data);
  return data;
};

const getByListNames = async (userInfo) => {
  console.log("User info from getByListNames: ", userInfo);
  try {
    const { data } = await axios.get(
      "http://localhost:8080/api/v1/contents/listnames",
      {
        headers: { authorization: `Bearer ${userInfo.token}` },
      }
    );
    console.log("getByListNames Function:", data);
    // setContents(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getMyListHandler = async (userInfo) => {
  try {
    const { _id, token } = userInfo;
    console.log(`Id: ${_id}, token: ${token}`);
    const { data } = await axios.post("http://localhost:8080/api/v1/mylist", {
      _id,
    }, {
      headers: { authorization: `Bearer ${token}` },
    });
    
     console.log(data);
    //   dispatch({type: SET_MY_CONTENTS, payload: data});
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
     console.log(error.response?.data?.message || "An error occurred");
    } else {
      // Handle non-Axios errors
      console.log("An error occurred");
    }
  }
};

export { getAllContents, getByListNames, getMyListHandler };


// const getMyListHandler = async(userId: any, token: any) => {
//   try{
//     const {data} = await axios.get('http://localhost:8080/api/v1/mylist', {_id : userId, 
//       headers: { authorization: `Bearer ${token}` }});
//     ctxDispatch({type: SET_MY_CONTENTS, payload: data});
//   }
//   catch(error){
//     if (axios.isAxiosError(error)) {
//       alert(error.response?.data?.message || 'An error occurred');
//   } else {
//       // Handle non-Axios errors
//       alert('An error occurred');
//   }
// }
// }