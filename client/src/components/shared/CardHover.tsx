import React, { useEffect } from 'react'
import ReactPlayer from 'react-player/youtube';
import styles from './styles/CardHover.module.css'
import { BsFillPlayFill } from "react-icons/bs";
import { GoMute, GoUnmute } from "react-icons/go";
import { useDispatch } from 'react-redux';
import { ADD_CONTENT_TO_MY_LIST } from '../../actions';


const CardHover = ({ isHover, content, isExistsInMyList }) => {



  const dispatch = useDispatch();
  const addButtonHandler = () => {
    dispatch({type: ADD_CONTENT_TO_MY_LIST, payload: content});
  }


  return (
    <>
    <div className={styles.cardContainer}>

    <ReactPlayer
        url={content.trailerSource}
        playing={isHover ? true : false} 
        controls={false}
        height="7.7em"
        width="15.4em"
        loop={true} 
        muted={true}    
      /> 
      <div className={styles.buttonsContainer}>
      <BsFillPlayFill size={25} />
      <button onClick={addButtonHandler}>+</button>
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