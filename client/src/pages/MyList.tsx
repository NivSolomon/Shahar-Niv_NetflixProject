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
    <div className="grid-container-mylist">
      {myListContents && myListContents.map((content) => (
        <div className="grid-item-mylist">
          {
            <Card content={content}/>
          }
        </div>
      ))}
      </div>
    </div>
  );
};

export default MyList;


{/* <div className="grid-container">
{filterContents &&
  filterContents.map((content) => (
    <div className="grid-item">
      <Card content={content} />
    </div>
  ))}
</div> */}