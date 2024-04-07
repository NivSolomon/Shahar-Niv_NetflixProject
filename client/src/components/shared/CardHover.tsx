import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube';
import styles from './styles/CardHover.module.css'
import { BsFillPlayFill } from "react-icons/bs";
import { GoMute, GoUnmute } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CONTENT_TO_MY_LIST, REMOVE_CONTENT_FROM_MY_LIST, SAVE_MY_LIST_IN_DB } from '../../actions';
import { IContent, IMyList, IUserInfo } from '../../types/interfaces';
import { saveMyList } from '../../services/ContentService';
import { useNavigate } from 'react-router-dom';
import MoreInfoBtn from '../buttons/MoreInfoBtn';
import MoreInfoDialog from './MoreInfoDialog';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";


type CardProps = {
isHover: boolean,
content: IContent
}

type UserState = {
  userInfo: IUserInfo
}


const CardHover = ({ isHover, content } : CardProps)  => {

  const [isExist,setIsExist] = useState(false);
  const myListContents = useSelector((state: IMyList[]) => state.myList.myList)
  const userInfo = useSelector((state: UserState) => state.userAuth.userInfo);
  const navigate = useNavigate();
  const [isInfoBoxOpen, setisInfoBoxOpen] = useState(false);

  const handleClickOpen = () => {
    setisInfoBoxOpen(true);
  };
  const handleClose = () => {
    setisInfoBoxOpen(false);
  };

  const dispatch = useDispatch();

  const addButtonHandler = async () => {
    dispatch({type: ADD_CONTENT_TO_MY_LIST, payload: content});
    dispatch({type: SAVE_MY_LIST_IN_DB, payload: userInfo});
    // saveMyList(userInfo, myListContents);
  }
  const removeButtonHandler = () => {
    dispatch({type: REMOVE_CONTENT_FROM_MY_LIST, payload: content});
    dispatch({type: SAVE_MY_LIST_IN_DB, payload: userInfo});
  }
  
  useEffect(() => {
    const isContentExist = myListContents.some(item => item._id === content._id);
  
    setIsExist(isContentExist);
  
  }, [myListContents, content]); 
  
  

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
      <button className='text-black bg-white rounded-full p-2' onClick={()=>navigate(`/watch?=${content._id}`)}><FaPlay /></button>
      {isExist === true ?
        <button className='text-black bg-white rounded-full p-2' onClick={removeButtonHandler}><FaMinus /></button>
: <button className='text-black bg-white rounded-full p-2' onClick={addButtonHandler}><FaPlus /></button>}
       <button className='text-black bg-white rounded-full p-2' onClick={()=>setisInfoBoxOpen(true)}><FaChevronDown /></button>
      </div>
      <h2>{content.title}</h2>
    </div>
    {isInfoBoxOpen? <MoreInfoDialog content={content} isOpen={handleClickOpen } onClose={handleClose}/>: null}
    </>
  )
}

export default CardHover