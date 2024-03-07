import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../shared/Card';
import styles from './styles/Carsousel.module.css'; 
import { IContent }  from '../../types/interfaces.ts'



const Carousel : React.FC<{ contents: IContent[] }> = ({ contents }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <NextArrow /> ,
    prevArrow: <PrevArrow />,
  };

  const [isExistsInMyList, setIsExistsInMyList] = useState<boolean>(false);

  useEffect(() => {
   console.log("contents in carousel: ", contents);
  }, [])

  return (

    
    <div className={styles.carouselWrapper}>
    <Slider {...settings}>
      {Array.isArray(contents) && // Check if contents is an array
        contents.map(content => (
          <div key={content._id} className={styles.carouselItem}>
            <Card content={content}
             isExistsInMyList={isExistsInMyList}/>
          </div>
        ))}
    </Slider>
  </div>
  );
};



const NextArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className={`${styles.arrow} ${styles.nextArrow}`} onClick={onClick}>
      <span>&#9654;</span>
    </div>
  );
};

const PrevArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => {
const PrevArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className={`${styles.arrow} ${styles.prevArrow}`} onClick={onClick}>
      <span>&#9664;</span>
    </div>
  );
};

export default Carousel;
