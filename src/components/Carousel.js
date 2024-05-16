import React from "react";
import "../style/Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "../assets/8C1A0356-Edit.jpg";
import Slide2 from "../assets/Pregnancy yoga.jpg";
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
        <img src={Slide1} alt="Image 1" className="carousel-img" />
        {/* <div
          className="slide-text"
          style={{ marginTop: "-550px", animation: "slide-in 1s ease-out" }}
        >
          <p
            style={{
              fontSize: "25px",
              marginTop: "-20px",
            }}
          >
            Your Space
          </p>
          <p style={{ fontSize: "25px" }}>Your Practice</p>
          <p style={{ fontSize: "25px" }}>Your Community</p>
          <p style={{ fontSize: "20px" }}>
            Empowering Women through Yoga, Wellness, and Education
          </p>
          <button
            style={{
              backgroundColor: "#ab3c94",
              height: "60px",
              width: "150px",
              color: "white",
              fontSize: "16px",
              marginTop: "20px",
              marginBottom: "600px",
            }}
          >
            <Link
              to="/onlineyoga"
              style={{ color: "white", textDecoration: "none" }}
            >
              More About
            </Link>
          </button>
        </div> */}
      </div>
      <div className="slide-content">
        <img src={Slide2} alt="Image 1" className="carousel-img" />
        {/* <div
          className="slide-text"
          style={{
            marginTop: "-550px",
            marginBottom: "230px",
            animation: "slide-in 1s ease-out",
          }}
        >

          <p
            style={{
              fontSize: "25px",
              paddingLeft: "250px",
              paddingRight: "250px",
            }}
            className="mt-5"
          >
            Whether you're new to yoga or looking to deepen your practice, we
            invite you to explore our offerings and join our supportive
            community.
          </p>
          <button
            style={{
              backgroundColor: "#ab3c94",
              height: "60px",
              width: "150px",
              color: "white",
              fontSize: "16px",
              marginTop: "20px",
            }}
          >
            <Link
              to="/detox"
              style={{ color: "white", textDecoration: "none" }}
            >
              More About
            </Link>
          </button>
        </div> */}
      </div>
    </Slider>
  );
}

export default Carousel;
