import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import awake1 from './../images/awake1.jpg';
import awake2 from './../images/awake2.jpg';
import awake3 from './../images/awake3.jpg';
import awake4 from './../images/awake4.jpg';
import awake5 from './../images/awake5.jpg';
import awake6 from './../images/awake6.jpg';
import './test.css';

const MultipleItems = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={'productingredients-slider-control productingredients-slider-prev'}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;        
        return (
            <div
                className={'productingredients-slider-control productingredients-slider-next'}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <SampleNextArrow />,
        nextArrow: <SamplePrevArrow />,
        focusOnSelect: true,
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>1
          </div>
          <div>2
          </div>
          <div>3
          </div>
          <div>4
          </div>
          <div>5
          </div>
          <div>6
          </div>
        </Slider>
      </div>
    );

}
export default MultipleItems;
