import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.css'
import icon1 from './asserts/Welcome.png'
import icon2 from './asserts/Welcome2.png'
import icon3 from './asserts/Welcome3.png'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnHover: true,
      adaptiveHeight: true
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          <div>
            <a>
                <img src={icon1} height="100%" width="100%"/>
            </a>
          </div>
          <div>
            <a>
                <img src={icon2} height="100%" width="100%"/>
            </a>
          </div>
          <div>
            <a>
                <img src={icon3} height="100%" width="100%"/>
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}