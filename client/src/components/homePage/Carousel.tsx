import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Card from "../shared/Card";

const Carousel = ({ contents }) => {
  const [isHovered, setIsHovered] = useState(false);
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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="slider-container">
      <button className="prev-btn" onClick={goToPrev}>
        Prev
      </button>
      <Slider {...settings} ref={sliderRef}>
        {contents &&
          contents.map((content) => (
            <div key={content._id} className={`carousel-item ${isHovered ? "enlarged" : ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Card content={content} />
            </div>
          ))}
      </Slider>
      <button className="next-btn" onClick={goToNext}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
