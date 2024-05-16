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
import fruits from "../assets/fruits.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carousel1 from "../assets/carousel1.jpeg";
import carousel2 from "../assets/carousel2.jpeg";
import carousel3 from "../assets/carousel3.jpeg";
import month from "../assets/calendars_6050385.png";
import family from "../assets/foster_12969672.png";
import journey from "../assets/calendar_10447953.png";
import food from "../assets/idea_5196919.png";
import nutri from "../assets/diet_6722122.png";
import support from "../assets/customer-service_9115952.png";
import stomach from "../assets/stomach_10916924.png";
import energy from "../assets/energy_11245496.png";
import share from "../assets/sharing_10879318.png";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Jane Smith",
    comment:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // Add more testimonials as needed
];

const Detox = () => {
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
          <Col lg={12} className="mt-5">
            <h2>Detox Diet Workshop </h2>
            <h5 className="sub-title mt-3">
              <i>
                Welcome to Divine Yoga for Women's exclusive Detox Diet Program,
                a well-curated 10-day journey designed specifically for women
                and their families.
              </i>
            </h5>
          </Col>
        </Row>

        <Row>
          <Col lg={{ span: 4 }}>
            <img src={month} className="yogaicon" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>Monthly Program</b>
            </p>
            <p
              style={{
                marginLeft: "53px",
                color: "#8b8b8b",
                fontSize: "15px",
                marginLeft: "100px",
                textAlign: "left",
              }}
            >
              Our detox diet program runs once a month, offering you the
              opportunity to reset and revitalize your body regularly.
            </p>
          </Col>
          <Col lg={{ span: 4 }}>
            <img src={family} className="yogaicon" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>Family-Friendly</b>
            </p>
            <p
              style={{
                marginLeft: "53px",
                color: "#8b8b8b",
                fontSize: "15px",
                marginLeft: "100px",
                textAlign: "left",
              }}
            >
              This program is ideal for women and their families, encouraging a
              holistic approach to wellness that can benefit everyone in the
              household.
            </p>
          </Col>
          <Col lg={{ span: 4 }}>
            <img src={journey} className="yogaicon" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>10-Day Journey</b>
            </p>
            <p
              style={{
                marginLeft: "53px",
                color: "#8b8b8b",
                fontSize: "15px",
                marginLeft: "100px",
                textAlign: "left",
              }}
            >
              Embark on a 10-day detox journey guided by our experienced
              nutritionist. Discover the power of clean eating and rejuvenate
              your body from within.
            </p>
          </Col>
          <Col lg={{ span: 4 }}>
            <img src={support} className="yogaicon" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>Consistency and Support</b>
            </p>
            <p
              style={{
                marginLeft: "53px",
                color: "#8b8b8b",
                fontSize: "15px",
                marginLeft: "100px",
                textAlign: "left",
              }}
            >
              Stay consistent and motivated throughout the program with the
              support of our dedicated WhatsApp group. Share your progress,
              challenges, and successes with fellow participants.
            </p>
          </Col>
          <Col lg={{ span: 4 }}>
            <img src={nutri} className="yogaicon" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>Nutritionist Guidance</b>
            </p>
            <p
              style={{
                marginLeft: "53px",
                color: "#8b8b8b",
                fontSize: "15px",
                marginLeft: "100px",
                textAlign: "left",
              }}
            >
              Interact directly with our nutritionist in the group. Ask
              questions, seek advice, and receive personalized tips to optimize
              your detox experience.
            </p>
          </Col>
          <Col lg={{ span: 4 }}>
            <img src={food} className="yogaicon" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>Food Sharing and Inspiration</b>
            </p>
            <p
              style={{
                marginLeft: "53px",
                color: "#8b8b8b",
                fontSize: "15px",
                marginLeft: "100px",
                textAlign: "left",
              }}
            >
              Share photos of your detox-friendly meals and recipes within the
              group. Exchange ideas and culinary inspiration with other
              participants.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 12 }}>
            <NavLink to="https://www.instagram.com/divine_yoga_for_women/">
              <button
                className="btn2"
                style={{
                  border: "none",
                }}
              >
                Enquire Now
              </button>
            </NavLink>
          </Col>
          <Col lg={{ span: 12 }} className={"mt-5"}>
            <h1>Experience the Benifits</h1>
          </Col>
          <Col lg={{ span: 4 }}>
            <img src={energy} className="yogaicon" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>Increased Energy</b>
            </p>
            <p
              style={{
                marginLeft: "53px",
                color: "#8b8b8b",
                fontSize: "15px",
                marginLeft: "100px",
                textAlign: "left",
              }}
            >
              Feel revitalized and energized as toxins are eliminated from your
              body.
            </p>
          </Col>
          <Col lg={{ span: 4 }}>
            <img src={stomach} className="yogaicon" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>Improved Digestion</b>
            </p>
            <p
              style={{
                marginLeft: "53px",
                color: "#8b8b8b",
                fontSize: "15px",
                marginLeft: "100px",
                textAlign: "left",
              }}
            >
              Support digestive health and optimize nutrient absorption.
            </p>
          </Col>
          <Col lg={{ span: 4 }}>
            <img src={share} className="yogaicon" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>Enhanced Well-Being</b>
            </p>
            <p
              style={{
                marginLeft: "53px",
                color: "#8b8b8b",
                fontSize: "15px",
                marginLeft: "100px",
                textAlign: "left",
              }}
            >
              Enjoy clearer skin, improved mood, and a renewed sense of
              vitality.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col lg="6" className="mt-5 mb-5">
            <h1>Detox Diet</h1>
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              showThumbs={false}
            >
              <div>
                <img
                  src={carousel1}
                  alt="Image 1"
                  style={{ height: "500px", width: "500px" }}
                />
              </div>
              <div>
                <img
                  src={carousel2}
                  alt="Image 1"
                  style={{ height: "500px", width: "500px" }}
                />
                {/* <p className="legend">Legend 2</p> */}
              </div>
              <div>
                <img
                  src={carousel3}
                  alt="Image 1"
                  style={{ height: "500px", width: "500px" }}
                />
              </div>
              {/* Add more images as needed */}
            </Carousel>
          </Col>

          <Col lg="6" className="mt-5 mb-5">
            <h1>FEED BACKS</h1>
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              showThumbs={false}
            >
              <div>
                <img src={fruits} alt="Image 1" />
              </div>
              <div>
                <img src={fruits} alt="Image 1" />
                {/* <p className="legend">Legend 2</p> */}
              </div>
              <div>
                <img src={fruits} alt="Image 1" />
              </div>
              {/* Add more images as needed */}
            </Carousel>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="mt-5 mb-5">
          <Col lg={12}>
            <div className="parallax">
              <p
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  paddingTop: "50px",
                  paddingLeft: "150px",
                  paddingRight: "150px",
                  color: "white",
                }}
              >
                Join our monthly detox program and take charge of your health
                and wellness journey. Together, let's embrace a healthier
                lifestyle and thrive as a community of empowered women and
                families.
              </p>
              <NavLink to="https://www.instagram.com/divine_yoga_for_women/">
                <button
                  className="btn2"
                  style={{
                    marginTop: "40px",
                    border: "none",
                    marginBottom: "100px",
                  }}
                >
                  Join Now
                </button>
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Detox;
