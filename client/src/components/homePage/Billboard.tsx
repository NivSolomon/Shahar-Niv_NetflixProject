import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { IContent } from '../../types/interfaces'
import style from './styles/Billboard.module.css'
import { CiCircleInfo } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import MoreInfo from '../shared/MoreInfo';
import {Dialog, DialogContent, DialogTitle} from '@material-ui/core';
import MoreInfoDialog from '../shared/MoreInfoDialog';


interface Props {
  randomContent: IContent;
}

const Billboard: React.FC<Props> = ({randomContent}) => {
  const navigate = useNavigate();
  const [isInfoBoxOpen, setisInfoBoxOpen] = useState(false);

  const handleClickOpen = () => {
    setisInfoBoxOpen(true);
  };
  const handleClose = () => {
    setisInfoBoxOpen(false);
  };

  return (
    <div className='relative h-[56.25vw]'>
       <ReactPlayer
       className="pointer-events-none z-2"
        url={randomContent.trailerSource}
        playing={true} 
        controls={false}
        height="100%"
        width="100%"
        loop={true} 
        muted={true} 
      /> 
     
     <div className={style.container}>
      <img src={randomContent.imgTitle} className={style.image} alt="Random" />
      <p className={style.description}>
        {randomContent.description.substring(0, 160)}...
      </p>
      <div className={style.buttons}>
        <button className={`${style.button} ${style.play}`} onClick={()=>navigate(`/watch?=${randomContent._id}`)}><FaPlay />Play</button>
        <button className={`${style.button} ${style.moreInfo}`} onClick={()=> {setisInfoBoxOpen(true)}}><CiCircleInfo /> More Info</button>
      </div>

  {isInfoBoxOpen? <MoreInfoDialog content={randomContent} isOpen={handleClickOpen } onClose={handleClose}/>: null}
</div>


    </div>
  )
}

export default Billboard