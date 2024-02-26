// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useContext } from "react";
import Slider from "react-slick";
import { Store } from "../../store";

const Carousel = ({contents}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

  return (
    <Slider {...settings}>
     {contents.map(content => <div>
      <h1>{content.title}</h1>
     </div>)}
    </Slider>
  );
}

export default Carousel