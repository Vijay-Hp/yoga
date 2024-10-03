import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Onlineyoga.css";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import Table from "react-bootstrap/Table";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import feed1 from "../assets/review/onlinefeed (1).jpeg";
import feed2 from "../assets/review/onlinefeed (2).jpeg";
import feed3 from "../assets/review/onlinefeed (3).jpeg";
import feed4 from "../assets/review/onlinefeed (4).jpeg";
import enquiry from "../assets/enquiry (1).gif";
import detox1 from "../assets/review/detox (1).jpeg";
import detox2 from "../assets/review/detox (2).jpeg";
import detox3 from "../assets/review/detox (3).jpeg";
import detox4 from "../assets/review/detox (4).jpeg";
import review1 from "../assets/review/review (1).jpeg";
import review2 from "../assets/review/review (2).jpeg";
import review3 from "../assets/review/review (3).jpeg";
import review4 from "../assets/review/review (4).jpeg";
import review5 from "../assets/review/review (5).jpeg";
import review6 from "../assets/review/review (6).jpeg";
import review7 from "../assets/review/review (7).jpeg";
import review8 from "../assets/review/review (8).jpeg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Container>
        <Row>
          <Col lg="12" className="mt-5 ">
            <h2 className="heading">Testimonials</h2>
          </Col>
          <Col lg={4}>
            <img src={feed1} height={320} className="gallery" />
          </Col>
          <Col lg={4}>
            <img src={feed2} height={320} className="gallery" />
          </Col>
          <Col lg={4}>
            <img src={feed3} height={320} className="gallery" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg={4}>
            <img src={feed4} height={320} className="gallery" />
          </Col>
          <Col lg={4}>
            <img src={detox1} height={320} className="gallery" />
          </Col>
          <Col lg={4}>
            <img src={detox2} height={320} className="gallery" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg={4}>
            <img src={detox3} height={320} className="gallery" />
          </Col>
          <Col lg={4}>
            <img src={detox4} height={320} className="gallery" />
          </Col>
          <Col lg={4}>
            <img src={review1} height={320} className="gallery" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg={4}>
            <img src={review2} height={320} className="gallery" />
          </Col>
          <Col lg={4}>
            <img src={review3} height={320} className="gallery" />
          </Col>
          <Col lg={4}>
            <img src={review4} height={320} className="gallery" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg={4}>
            <img src={review5} height={320} className="gallery" />
          </Col>
          <Col lg={4}>
            <img src={review6} height={320} className="gallery" />
          </Col>
          <Col lg={4}>
            <img src={review7} height={320} className="gallery" />
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="mb-5 mt-3">
          <Col lg={12}>
            <div className="parallax">
              <p className="parallax-text">
                Join our community of women committed to holistic wellness.
                Whether you're seeking fitness, hormone balance, fertility
                support, weight management, postpartum recovery, core strength,
                or relief from PCOS symptoms, our online yoga sessions offer a
                nurturing and empowering experience.
              </p>

              <NavLink to="https://www.instagram.com/divine_yoga_for_women/">
                <img src={enquiry} height="80" width="240" />
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Testimonial;
