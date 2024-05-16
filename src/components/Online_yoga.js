import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Onlineyoga.css";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import Table from "react-bootstrap/Table";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hormaone from "../assets/hormones.png";
import Thumble from "../assets/dumbbell.png";
import Pragancy from "../assets/pregnant.png";
import Weight from "../assets/weight-loss.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import post from "../assets/exercise_11888113.png";
import fat from "../assets/fat.png";
import strength from "../assets/think_12430457.png";
import fun from "../assets/chat_7112992.png";
import pcos from "../assets/pain_8902284.png";
import enquiry from "../assets/enquiry.gif";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { FaWhatsapp } from "react-icons/fa";

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

const Onlineyoga = () => {
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
            <h2>Theme-Based Online Yoga Class</h2>
            <h5 className="sub-title mt-3">
              <i>
                Our theme-based classes are thoughtfully designed to support
                various aspects of women's health and empower you to achieve
                balance, strength, and vitality.
              </i>
            </h5>
          </Col>
        </Row>

        <Row>
          <Col lg={{ span: 4 }}>
            <img src={Hormaone} className="yogaicon" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>Hormone Balancing</b>
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
              Restore hormonal harmony with yoga practices targeting the
              endocrine system, promoting balance and well-being.
            </p>
          </Col>
          <Col lg={{ span: 4 }}>
            <img src={Thumble} className="yogaicon" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>Regular Fitness</b>
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
              Stay active and energized with our online yoga classes focused on
              building strength, improving flexibility, and enhancing overall
              fitness levels.
            </p>
          </Col>
          <Col lg={{ span: 4 }}>
            <img src={Pragancy} className="yogaicon" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>Pre-pregnancy Preparation</b>
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
              Prepare your body and mind for pregnancy with specialized yoga
              sessions designed to enhance fertility, optimize reproductive
              health, and cultivate a nurturing environment for conception.
            </p>
          </Col>
          <Col lg={{ span: 4 }}>
            <img src={Weight} className="yogaicon" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>Weight Loss</b>
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
              Embrace a holistic approach to weight management through yoga
              practices that stimulate metabolism, promote fat burning, and
              support healthy lifestyle habits.
            </p>
          </Col>
          <Col lg={{ span: 4 }}>
            <img src={post} className="yogaicon" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>Postpartum Fitness</b>
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
              Rejuvenate and rebuild after childbirth with gentle yet effective
              yoga sessions tailored to postpartum recovery. Strengthen core
              muscles, improve flexibility, and promote emotional well-being.
            </p>
          </Col>
          <Col lg={{ span: 4 }}>
            <img src={strength} className="yogaicon" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>Core Strengthening</b>
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
              Develop a strong and stable core with targeted yoga exercises that
              enhance abdominal strength, improve posture, and support overall
              body alignment.
            </p>
          </Col>
          <Col lg={{ span: 4 }}>
            <img src={fat} className="yogaicon" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>Belly Fat Reduction</b>
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
              Target stubborn belly fat with yoga sequences aimed at toning the
              abdominal region and promoting fat loss.
            </p>
          </Col>
          <Col lg={{ span: 4 }}>
            <img src={pcos} className="yogaicon" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>PCOS (Polycystic Ovary Syndrome) </b>
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
              Manage symptoms of PCOS through yoga practices focused on
              improving insulin sensitivity, reducing stress, and supporting
              reproductive health.
            </p>
          </Col>
          <Col lg={{ span: 4 }}>
            <img src={fun} className="yogaicon" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>Interactive and Fun</b>
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
              Engage in group activities, challenges, and discussions that make
              your yoga journey enjoyable and enriching.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 6 }}>
            <Table className="mt-5">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Monthly</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5 AM IST</td>
                  <td>Mon to Fri</td>
                </tr>
                <tr>
                  <td>6 AM IST</td>
                  <td>Mon to Fri</td>
                </tr>
                <tr>
                  <td>6.30 AM IST</td>
                  <td>Mon to Fri</td>
                </tr>
                <tr>
                  <td>9.30 AM IST</td>
                  <td>Mon to Fri</td>
                </tr>
                <tr>
                  <td>10.30 AM IST</td>
                  <td>Mon to Fri</td>
                </tr>
                <tr>
                  <td>3.30 AM IST</td>
                  <td>Mon to Fri</td>
                </tr>
                <tr>
                  <td>6 PM IST</td>
                  <td>Mon to Fri</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col
            lg={{ span: 6, offset: 0 }}
            xs={{ span: 6, offset: 2 }}
            className="mt-lg-5 mt-xs-2"
            style={{ marginBottom: "-500px" }}
          >
            <CalendarMonthIcon className="yogaicon10" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>Days</b>
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
              Monday - Friday
            </p>
            <PersonalVideoIcon className="yogaicon10" />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                textAlign: "left",
                marginLeft: "100px",
              }}
            >
              <b>Sessions</b>
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
              Live Class on Zoom
            </p>

            {/* <NavLink to="https://www.instagram.com/divine_yoga_for_women/">
              <button className="btnonline">Enquire Now</button>
            </NavLink> */}
            <NavLink to="https://wa.me/9176331621">
              <button className="btnonline">
                <FaWhatsapp className="whatsapp-icon" />
                Enquire Now
              </button>
            </NavLink>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col lg="12" className="mt-lg-2 mb-5">
            <h1>Testimonial</h1>

            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <h3 style={{ color: "green" }}>{testimonial.name}</h3>
                <p>{testimonial.comment}</p>
              </div>
            ))}
            {/* <img src={testi2} height={800} width={800} /> */}
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="mb-5">
          <Col lg={12}>
            <div className="parallax">
              <p className="parallax-text">
                Join our community of women committed to holistic wellness.
                Whether you're seeking fitness, hormone balance, fertility
                support, weight management, postpartum recovery, core strength,
                or relief from PCOS symptoms, our online yoga sessions offer a
                nurturing and empowering experience.
              </p>
              {/* <NavLink to="https://www.instagram.com/divine_yoga_for_women/">
                <button
                  className="btn2"
                  style={{ marginTop: "40px", border: "none" }}
                >
                  Enquire Now
                </button>
              </NavLink> */}
              <NavLink to="https://www.instagram.com/divine_yoga_for_women/">
                <img src={enquiry} height="100" width="250" />
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <Container fluid>
        <Row className="mb-5">
          <Col lg={12}>
            <div className="parallax1">
              <p class="parallex-text1">
                Join our community of women committed to holistic wellness.
                Whether you're seeking fitness, hormone balance, fertility
                support, weight management, postpartum recovery, core strength,
                or relief from PCOS symptoms, our online yoga sessions offer a
                nurturing and empowering experience.
              </p>
              <NavLink to="https://www.instagram.com/divine_yoga_for_women/">
                <button
                  className="btn2"
                  style={{ marginTop: "40px", border: "none" }}
                >
                  Enquire Now
                </button>
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container> */}

      <Footer />
    </>
  );
};

export default Onlineyoga;
