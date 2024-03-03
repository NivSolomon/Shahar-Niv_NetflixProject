import { useNavigate } from 'react-router-dom';
import useTokenVerification from '../hooks/useTokenVerification';
import Carousel from '../components/homePage/Carousel';
import { useContext, useEffect, useState } from 'react';
import {getAllContents} from '../services/ContentService';
import { Store } from '../store';
import axios from 'axios';

const Home = () => {

  const { loading, isValidToken } = useTokenVerification();
  const navigate = useNavigate();
  const [contents, setContents] = useState();
  const {state, dispatch: ctxDispatch} = useContext(Store);
  
  // const { userInfo } = state;
  // const userInfo = localStorage.getItem("userInfo")
  // ? JSON.parse(localStorage.getItem("userInfo"))
  // : null;

  const userInfo = state.userInfo;

  useEffect(()=>{
    const fetchData= async() => {
      try{
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
  }, [userInfo]);

  if (loading) {
    console.log(loading);
    return <div>Loading...</div>;
  }

  if (!isValidToken) {
    console.log('invalid token')
    navigate('/signin')
    return null;
  }

  // const keys = Object.keys(state.contents);
  // const value = Object.keys(state.contents);


  return (
    <>
    {

    Object.entries(state.contents).map(([key, value]) => (
 <div>
  <h3>{key}</h3>
  <Carousel contents={value}/>
 </div>

    ))

    }
    
    </>



    

  )
}

export default Home