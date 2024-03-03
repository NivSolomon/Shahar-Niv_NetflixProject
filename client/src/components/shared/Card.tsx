import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';

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

  const handleTrailerStart = () => {
    setTrailerStarted(true);
  };

  return (
    <div
      className={`card-container ${isHover ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={content.imgThumb}
        alt={content.title}
        className={`thumbnail ${isHover ? 'hidden' : ''}`}
      />
      {
        trailerStarted ?   <ReactPlayer
        className={`video-player ${isHover ? 'visible' : ''}`}
        url={content.trailerSource}
        playing={isHover ? true : false} // Ensure the player starts when both hover and trailer started
        controls={false}
        height="7.7em"
        width="15.4em"
        loop={true}      
        onPlay={handleTrailerStart}
        
      /> 
      :
      <img
      src={content.imgThumb}
      alt={content.title}
      className={`thumbnail`}
    />
      }
    
      {isHover && !trailerStarted && <div className="title">{content.title}</div>}
    </div>
  );
};

export default Card;
