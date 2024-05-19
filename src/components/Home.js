import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "../style/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import bg from "../assets/hero-bg.jpg";
import about from "../assets/budha.webp";
import { BsFileCheck } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import team from "../assets/trainer-3.jpg";
import { FaLinkedin } from "react-icons/fa6";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ceo from "../assets/sathya.webp";
import md from "../assets/saranya.webp";
import md1 from "../assets/sankari.webp";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import Carousel from "./Carousel";
import Carousel1 from "./Carousel1";

import shape1 from "../assets/shape.png";
import shape2 from "../assets/shape-1.png";
import shape3 from "../assets/shape-2.png";

function Home() {
  // image animations
  const [hovered, setHovered] = useState(false);
  const imageProps1 = useSpring({
    transform: hovered ? "scale(1.1)" : "scale(1)",
  });
  // Initialize AOS library
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // State variable to track whether animations have finished
  const [animationsFinished, setAnimationsFinished] = useState(false);

  // Define animation for content
  const contentProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500, // Delay the animation
    config: { duration: 2000 }, // Adjust the duration of the animation
    onRest: () => setAnimationsFinished(true), // Set animationsFinished to true when animation finishes
  });

  // Define animation for image
  const imageProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1000,
    config: { duration: 2000 }, // Adjust the duration of the animation
  });

  // Scroll to a specific element on the page when animations finish
  useEffect(() => {
    if (animationsFinished) {
      const element = document.getElementById("scroll-target");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [animationsFinished]);

  const styles = {
    row: {
      width: "30em",
    },
    animatedDiv: {
      animation: "fadeInUp 1s",
      WebkitAnimation: "fadeInUp 1s",
    },
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={6}>
            <div className="row">
              <div className="headBack">
                <div>
                  <img
                    src={shape2}
                    alt="shape"
                    className="img-responsive shape1"
                  />
                </div>
                <div
                  className="col-lg-5 offset-lg-2"
                  style={{ marginTop: "30px" }}
                >
                  <img
                    src={shape3}
                    alt="shape"
                    className="img-responsive shape2"
                  />
                </div>
                <div
                  className="col-lg-6 offset-lg-1"
                  style={{ marginTop: "20px" }}
                >
                  <img
                    src={shape1}
                    alt="shape"
                    className="img-responsive"
                    height="15%"
                    width="15%"
                  />
                </div>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-xs-6">
                  <div
                    className="col-lg-6 offset-lg-3 "
                    id="head_text"
                    style={{ textAlign: "left" }}
                  >
                    <h3
                      className="headText"
                      // style={{ fontFamily: "monstserrat" }}
                      style={{ fontFamily: "Serif" }}
                    >
                      Online Yoga
                    </h3>
                    <div className="row" style={styles.row}>
                      <h1
                        className="mainHeading"
                        // style={{ fontFamily: "monstserrat" }}
                        style={{ fontFamily: "Helvetica" }}
                      >
                        Women physical &amp; <br /> mental wellness
                      </h1>
                    </div>
                    <h3
                      className="subHeading"
                      // style={{ fontFamily: "monstserrat" }}
                      style={{ fontFamily: "Verdana" }}
                    >
                      Join our online yoga classes!
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <Carousel />
          </Col>
        </Row>

        <animated.div style={contentProps}>
          <Row>
            <Col lg={{ span: 10, offset: 1 }} style={{ marginTop: "0px" }}>
              <p className="con-sub">
                Divine Yoga for Women is more than just a yoga studio—it's a
                sanctuary designed exclusively for women to thrive in their
                life's journey. We invite you to explore our offerings and join
                our supportive community.
              </p>
            </Col>
          </Row>
        </animated.div>
      </Container>

      <Container>
        <Row>
          <Col lg={3} data-aos="fade-up" data-aos-duration="1500">
            <div className="box">
              <p className="box-title">Yoga for Women</p>
              <p className="box-content">
                Our theme based yoga classes are uniquely tailored to the needs
                of women, focusing on enhancing feminine energy, strength, and
                balance.
              </p>
              <Button variant="primary" className="btn1" href="/onlineyoga">
                Read More
              </Button>
            </div>
          </Col>
          <Col lg={3} data-aos="fade-up" data-aos-duration="1500">
            <div className="box1">
              <p className="box-title1">Pregnancy Yoga</p>
              <p className="box-content1">
                Embrace the journey of motherhood with our nurturing pregnancy
                yoga classes. Our classes help alleviate discomforts and prepare
                you for childbirth.
              </p>
              <Button
                variant="primary"
                className="btn2"
                href="/onlineyoga"
                // style={{ marginTop: "30px" }}
              >
                Read More
              </Button>
            </div>
          </Col>
          <Col lg={3} data-aos="fade-up" data-aos-duration="1500">
            <div className="box1">
              <p className="box-title1">Detox Diet</p>
              <p className="box-content1">
                Explore our detox diet program, combining yoga with personalized
                nutrition guidance to cleanse and revitalize your body from
                within.
              </p>
              <br />
              <Button
                variant="primary"
                className="btn2"
                href="/detox"
                // style={{ marginTop: "55px" }}
              >
                Read More
              </Button>
            </div>
          </Col>
          <Col lg={3} data-aos="fade-up" data-aos-duration="1500">
            <div className="box1">
              <p className="box-title1">Teacher Training Course</p>
              <p className="box-content1">
                Ready to share your passion for yoga with others? Enroll in our
                comprehensive yoga teacher training course.
              </p>
              <br />
              <Button
                variant="primary"
                className="btn2"
                href="/teacher"
                // style={{ marginTop: "55px" }}
              >
                Read More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <div className="parallax">
              <p className="parallax-text">
                Connect with like-minded women in our supportive community,
                fostering friendships and shared growth.
              </p>
              <NavLink to="https://www.instagram.com/divine_yoga_for_women/">
                <button
                  className="btn2"
                  style={{ marginTop: "40px", border: "none" }}
                >
                  Community
                </button>
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col lg={4} data-aos="zoom-in" data-aos-duration="1500">
            <CardGroup>
              <Card>
                <Card.Img variant="top" src={ceo} />
                <Card.Body>
                  <Card.Title>Sathyapriya A</Card.Title>
                  <Card.Text>Founder & CEO</Card.Text>
                </Card.Body>
                <Card.Footer style={{ fontSize: "30px" }}>
                  <a href="https://www.instagram.com/divine_yoga_for_women/">
                    <FaInstagramSquare className="team-icon" />
                  </a>
                  <a href="https://www.facebook.com/divineyogaforwomen">
                    <FaFacebookSquare className="team-icon" />
                  </a>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
          <Col lg={4} data-aos="zoom-in" data-aos-duration="1500">
            <CardGroup>
              <Card>
                <Card.Img variant="top" src={md} />
                <Card.Body>
                  <Card.Title>Saranya A</Card.Title>
                  <Card.Text>Director</Card.Text>
                </Card.Body>
                <Card.Footer style={{ fontSize: "30px" }}>
                  <a href="https://www.instagram.com/divine_yoga_for_women/">
                    <FaInstagramSquare className="team-icon" />
                  </a>
                  <a href="https://www.facebook.com/divineyogaforwomen">
                    <FaFacebookSquare className="team-icon" />
                  </a>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
          <Col
            lg={4}
            style={{ marginBottom: "50px" }}
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <CardGroup>
              <Card>
                <Card.Img variant="top" src={md1} />
                <Card.Body>
                  <Card.Title>Sankari G</Card.Title>
                  <Card.Text>Meditation Coach</Card.Text>
                </Card.Body>
                <Card.Footer style={{ fontSize: "30px" }}>
                  <a href="https://www.instagram.com/divine_yoga_for_women/">
                    <FaInstagramSquare className="team-icon" />
                  </a>
                  <a href="https://www.facebook.com/divineyogaforwomen">
                    <FaFacebookSquare className="team-icon" />
                  </a>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        </Row>

        <Row>
          <Col lg={{ span: 6, offset: 3 }} className="mb-5 mt-5">
            <Carousel1 />
          </Col>
        </Row>
      </Container>

      <Footer />

      <div id="elementId"></div>
    </>
  );
}

export default Home;
