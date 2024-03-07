import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../shared/Card';
import Slider, { Settings } from 'react-slick';
import styles from './styles/Carsousel.module.css'; // Import CSS module for styling

interface Content {
  _id: string,
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
  contents: Content[]; // Define contents as an array of Content
}

const Carousel: React.FC<Props> = ({  contents }) => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <div className={styles.carouselWrapper}>
      <Slider {...settings}>
        {contents &&
          contents.map(content => (
            <div key={content._id} className={styles.carouselItem}>
              <Card content={content} />
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
  return (
    <div className={`${styles.arrow} ${styles.prevArrow}`} onClick={onClick}>
      <span>&#9664;</span>
    </div>
  );
};

export default Carousel;
