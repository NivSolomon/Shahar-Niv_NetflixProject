// import { useNavigate } from "react-router-dom";
import Carousel from "../components/homePage/Carousel";
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Billboard from "../components/homePage/Billboard";
import { useEffect, useState } from "react";
import { getRandomContent } from "../services/ContentService";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const contents = useSelector((state : RootState ) => state.contents.contents);
  const userInfo = useSelector((state : RootState ) => state.userAuth.userInfo);
  const [randomContent, setRandomContent] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    contents && setRandomContent(getRandomContent(Object.values(contents)));
  }, [contents])

  useEffect(() => {
   if(!userInfo) {
     navigate("/signin")
   }
  }, [userInfo])
  
  return (
   <>
     {randomContent&&<div className="z-10">
      <Billboard randomContent={randomContent}/>
     </div> } 
     <div className="carouselsContainer">
         {contents && Object.entries(contents).map(([key, value]) => (
        <div key={key}>
          <h3 className="text-2xl relative ml-5">{key}</h3>
          <Carousel contents={value} />
        </div>
      ))}
      {!contents && <h1>Loading...</h1>}
     </div>
   
    </>
  );
  
};

export default Home;
