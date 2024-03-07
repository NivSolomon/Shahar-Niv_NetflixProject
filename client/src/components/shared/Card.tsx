import  { useState } from 'react';
import styles from './styles/Card.module.css'
import CardHover from './CardHover';
import { IContent } from '../../types/interfaces';

interface Props {
  content: IContent;
}


interface Content {
  title: { type: string, required: true },
  description: { type: string, required: true },
  img: { type: string, required: true },
  imgTitle: { type: string, required: true },
  imgThumb: { type: string, required: true },
  imgVertical: { type: string, required: true },
  trailerSource: { type: string, required: true },
  contentSource: { type: string, required: true },
  duration: { type: string, required: true },
  year: { type: string, required: true },
  ageLimit: { type: number, required: true },
  genre: { type: string, enum: object, required: true },
  isSeries: { type: boolean, required: true },
  listNames: { type: [string], enum: object, required: true }
}
interface Props {
  content: Content[]; // Define contents as an array of Content
}

const Card: React.FC<Props> = ({ content }) => {
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
