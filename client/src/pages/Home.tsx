// import { useNavigate } from "react-router-dom";
import Carousel from "../components/homePage/Carousel";
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Billboard from "../components/homePage/Billboard";
import { useEffect, useState } from "react";
import { getRandomContent } from "../services/ContentService";

const Home = () => {
  // const navigate = useNavigate(); // Redirect user to sign in 
  const contents = useSelector((state : RootState ) => state.contents.contents);
  const userInfo = useSelector((state : RootState ) => state.userAuth.userInfo);
  const [randomContent, setRandomContent] = useState();

  useEffect(() => {
    contents && setRandomContent(getRandomContent(Object.values(contents)));
  }, [contents])

  
  
  return (
   <>
     {randomContent&&<div className="z-10">
      <Billboard randomContent={randomContent}/>
     </div> } 
     <div className="carouselsContainer">
         {contents && Object.entries(contents).map(([key, value]) => (
        <div key={key}>
          <h3 className="text-2xl">{key}</h3>
          <Carousel contents={value} />
        </div>
      ))}
      {!contents && <h1>Loading...</h1>}
     </div>
   
    </>
  );
  
};

export default Home;
