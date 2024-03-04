import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import styles from './styles/Card.module.css'
import CardHover from './CardHover';

const Card = ({ content }) => {
  const [isHover, setIsHover] = useState(false);
  const [trailerStarted, setTrailerStarted] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
    setTrailerStarted(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    setTrailerStarted(false);
  };


  return (
    <div
      className={`${styles.cardContainer}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={content.imgThumb}
        alt={content.title}
        className={`thumbnail ${isHover ? 'hidden' : ''}`}
      />
      
      {
        trailerStarted ?   
        <CardHover isHover={isHover} content={content} />
      :
      <img
      src={content.imgThumb}
      alt={content.title}
      className={`thumbnail`}
    />
}
    </div>
  );
};

export default Card;
