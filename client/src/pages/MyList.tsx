import React, { useEffect, useState } from "react";
import { getMyListHandler } from "../services/ContentService";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/shared/Card";
import axios from "axios";

const MyList = () => {
  // const [myListContents, setMyListContents] = useState();
  // const userInfo = useSelector((state) => state.userAuth.userInfo);
  const myListContents = useSelector((state) => state.myList.myList)

  useEffect(() => {
    console.log(myListContents);

  }, [myListContents]);

  return (
    <div>
      MyList:

      {myListContents && myListContents.map((content) => (
        <div>
          {
            <Card content={content}/>
          }
        </div>
      ))}
    </div>
  );
};

export default MyList;
