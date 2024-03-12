import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube';
import styles from './styles/CardHover.module.css'
import { BsFillPlayFill } from "react-icons/bs";
import { GoMute, GoUnmute } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CONTENT_TO_MY_LIST, REMOVE_CONTENT_FROM_MY_LIST } from '../../actions';
import { IMyList } from '../../types/interfaces';
import { saveMyList } from '../../services/ContentService';
import { useNavigate } from 'react-router-dom';


const CardHover = ({ isHover, content }) => {

  const [isExist,setIsExist] = useState(false);
  const myListContents = useSelector((state: IMyList) => state.myList.myList)
  const userInfo = useSelector((state) => state.userAuth.userInfo);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const addButtonHandler = () => {
    dispatch({type: ADD_CONTENT_TO_MY_LIST, payload: content});
    saveMyList(userInfo ,myListContents);
  }
  const removeButtonHandler = () => {
    dispatch({type: REMOVE_CONTENT_FROM_MY_LIST, payload: content});
    saveMyList(userInfo ,myListContents);
  }
  
  useEffect(()=>{
    if(myListContents.includes(content)){
      setIsExist(true);
      console.log(isExist);
    }
    else{
      setIsExist(false);
      console.log(isExist);
    }
    console.log(myListContents)

    
  },[myListContents])
  

  return (
    <>
    <div className={styles.cardContainer}>

    <ReactPlayer
        className="pointer-events-none"
        url={content.trailerSource}
        playing={isHover ? true : false} 
        controls={false}
        height="7.7em"
        width="15.4em"
        loop={true} 
        muted={true}    
      /> 
      <div className={styles.buttonsContainer}>
      <button onClick={()=>navigate(`/watch?=${content._id}`)}><BsFillPlayFill size={25}/></button>
      {isExist === true ?
         <button onClick={removeButtonHandler}>-</button>
       :  <button onClick={addButtonHandler}>+</button>}
      </div>
      <p>
       <span className={styles.matchPercent}>95% Match</span> {content.duration}
      </p>
      <p>
        { content.genre }
      </p>
    </div>
        
    </>
  )
}

export default CardHover