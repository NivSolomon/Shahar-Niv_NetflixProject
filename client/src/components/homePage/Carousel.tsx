// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useContext, useRef } from "react";
import Slider from "react-slick";
import { Store } from "../../store";
import Card from "../shared/Card";

const Carousel = ({contents}) => {

  const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        vertical: false,
        
      };

      const goToPrev = () => {
        sliderRef.current.slickPrev();
      };
    
      const goToNext = () => {
        sliderRef.current.slickNext();
      };

  return ( 
    <>
   
    <div className="slider-container">


    <div className="slider-content">
 <Slider {...settings} ref={sliderRef}>
   
     {contents && contents.map(content => <div key={content._id}>
      <Card content={content}/>
     </div>)}
    </Slider>
    </div>

    
 </div>     <div className="slider-buttons"> 
      <button className="prev-btn" onClick={goToPrev}>{"<"}</button>
    <button className="next-btn" onClick={goToNext}>{">"}</button>
  </div>
   
 </>
  );
}

export default Carousel


