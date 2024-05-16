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
import Hormaone from "../assets/hormones.png";
import Thumble from "../assets/dumbbell.png";
import Pragancy from "../assets/pregnant.png";
import Weight from "../assets/weight-loss.png";
import enquiry from "../assets/enquiry.gif";
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
        {/* <Row>
          <Col lg={12} className="mt-5">
            <h2>Testimonials</h2>
            <h5 className="sub-title"></h5>
          </Col>
        </Row> */}

        {/* <Row>
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
            <PhoneOutlinedIcon className="yogaicon" />
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
            <PhoneOutlinedIcon className="yogaicon" />
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
            <PhoneOutlinedIcon className="yogaicon" />
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
            <PhoneOutlinedIcon className="yogaicon" />
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
            <PhoneOutlinedIcon className="yogaicon" />
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
        </Row> */}
      </Container>

      <Container>
        <Row>
          <Col lg="12" className="mt-5 mb-5">
            <h1>Testimonial</h1>
            <Slider {...settings} className="mt-5">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id}>
                  <h3 style={{ color: "green" }}>{testimonial.name}</h3>
                  <p>{testimonial.comment}</p>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="mb-5">
          <Col lg={12}>
            <div className="parallax">
              <p   className="parallax-text"
                // style={{
                //   textAlign: "center",
                //   fontSize: "25px",
                //   paddingTop: "50px",
                //   paddingLeft: "150px",
                //   paddingRight: "150px",
                //   color: "white",
                // }}
              >
                Join our community of women committed to holistic wellness.
                Whether you're seeking fitness, hormone balance, fertility
                support, weight management, postpartum recovery, core strength,
                or relief from PCOS symptoms, our online yoga sessions offer a
                nurturing and empowering experience.
              </p>
              {/* <NavLink to="https://www.instagram.com/divine_yoga_for_women/">
                <button className="btn2" style={{ marginTop: "40px" }}>
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

      <Footer />
    </>
  );
};

export default Testimonial;
