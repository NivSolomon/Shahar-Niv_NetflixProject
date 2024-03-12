import axios from "axios";
import { useContext } from "react";
import { IContent } from "../types/interfaces";
import { useSelector } from "react-redux";

const getAllContents = async (userInfo: any) => {
  const { data } = await axios.get("/api/v1/contents", {
    headers: { authorization: `Bearer ${userInfo.token}` },
  });
  // console.log(data);
  return data;
};

const getContentById = async (userInfo, contentId) => {
  const data = await getAllContents(userInfo)
  const contentIndex = data.findIndex(content => content._id === contentId);
  const content = data[contentIndex];
  console.log(content);
  return content;
}

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
    const { data } = await axios.post(
      "http://localhost:8080/api/v1/mylist",
      {
        _id,
      },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );

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

const getRandomContent = (contents) => {
  const spreadedContents = contents.flat(1);
  const randomIndex = Math.floor(Math.random() * spreadedContents.length);
  console.log(spreadedContents[randomIndex]);
  return spreadedContents[randomIndex];
};

const saveMyList = async (userInfo, list) => {
  const { _id, token } = userInfo;

  try {
    console.log(list);
    await axios.post(
      "http://localhost:8080/api/v1/myList/savelist",
      {
        userId: _id,
        myList: list,
      },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
  } catch (err) {
    console.error("Error in finalizerFunc:", err);
  }
};

export { getAllContents, getByListNames, getMyListHandler, getRandomContent, saveMyList, getContentById};

