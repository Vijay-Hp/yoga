import React from "react";
import "../style/Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import review1 from "../assets/review/review (1).jpeg";
import review2 from "../assets/review/review (2).jpeg";
import review3 from "../assets/review/review (3).jpeg";
import review4 from "../assets/review/review (4).jpeg";
import review5 from "../assets/review/review (5).jpeg";
import review6 from "../assets/review/review (6).jpeg";
import review7 from "../assets/review/review (7).jpeg";
import review8 from "../assets/review/review (8).jpeg";
import review9 from "../assets/review/review (9).jpeg";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "10px",
        zIndex: 1,
        marginTop: "-250px",
      }}
      onClick={onClick}
    />
  );
}

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "10px",
        zIndex: 1,
        marginTop: "-250px",
      }}
      onClick={onClick}
    />
  );
}

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true, // Set fade property to true for fade animation
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider {...settings} className="head">
      <div className="slide-content">
        <img src={review1} alt="Image 1" className="carousel-img1" />
      </div>
      <div className="slide-content">
        <img src={review2} alt="Image 1" className="carousel-img1" />
      </div>
      <div className="slide-content">
        <img src={review3} alt="Image 1" className="carousel-img1" />
      </div>
      <div className="slide-content">
        <img src={review4} alt="Image 1" className="carousel-img1" />
      </div>
      <div className="slide-content">
        <img src={review5} alt="Image 1" className="carousel-img1" />
      </div>
      <div className="slide-content">
        <img src={review6} alt="Image 1" className="carousel-img1" />
      </div>
      <div className="slide-content">
        <img src={review7} alt="Image 1" className="carousel-img1" />
      </div>
      <div className="slide-content">
        <img src={review8} alt="Image 1" className="carousel-img1" />
      </div>
      <div className="slide-content">
        <img src={review9} alt="Image 1" className="carousel-img1" />
      </div>
    </Slider>
  );
}

export default Carousel;
