import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Onlineyoga.css";
import Table from "react-bootstrap/Table";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
import enquiry from "../assets/enquiry (1).gif";
import { FaWhatsapp } from "react-icons/fa";
import feed1 from "../assets/review/onlinefeed (1).jpeg";
import feed2 from "../assets/review/onlinefeed (2).jpeg";
import feed3 from "../assets/review/onlinefeed (3).jpeg";
import feed4 from "../assets/review/onlinefeed (4).jpeg";
import feed5 from "../assets/review/onlinefeed (5).jpeg";
import teacher1 from "../assets/teacher/teacher (1).jpeg";
import teacher2 from "../assets/teacher/teacher (2).jpeg";
import teacher3 from "../assets/teacher/teacher (3).jpeg";
import teacher4 from "../assets/teacher/teacher (4).jpeg";
import teacher5 from "../assets/teacher/teacher (5).jpeg";
import teacher6 from "../assets/teacher/teacher (6).jpeg";
import teacher7 from "../assets/teacher/teacher (7).jpeg";
import teacher8 from "../assets/teacher/teacher (8).jpeg";
import teacher9 from "../assets/teacher/teacher (9).jpeg";
import teacher10 from "../assets/teacher/teacher (10).jpeg";
import teacher11 from "../assets/teacher/teacher (11).jpeg";
import teacher12 from "../assets/teacher/teacher (12).jpeg";
import teacher13 from "../assets/teacher/teacher (13).jpeg";
import teacher14 from "../assets/teacher/teacher (14).jpeg";
import teacher15 from "../assets/teacher/teacher (15).jpeg";
import teacher16 from "../assets/teacher/teacher (16).jpeg";
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
            <h2 className="heading">Theme-Based Online Yoga Class</h2>
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
          <h2 className="heading" style={{ marginTop: "-50px" }}>
            Gallery
          </h2>
          <Col lg={3}>
            <img src={teacher1} height={300} />
          </Col>
          <Col lg={3}>
            <img src={teacher2} height={300} className="gallery" />
          </Col>
          <Col lg={3}>
            <img src={teacher3} height={300} className="gallery" />
          </Col>
          <Col lg={3}>
            <img src={teacher4} height={300} className="gallery" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg={3}>
            <img src={teacher5} height={300} className="gallery" />
          </Col>
          <Col lg={3}>
            <img src={teacher6} height={300} className="gallery" />
          </Col>
          <Col lg={3}>
            <img src={teacher7} height={300} className="gallery" />
          </Col>
          <Col lg={3}>
            <img src={teacher8} height={300} className="gallery" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg={3}>
            <img src={teacher9} height={300} className="gallery" />
          </Col>
          <Col lg={3}>
            <img src={teacher10} height={300} className="gallery" />
          </Col>
          <Col lg={3}>
            <img src={teacher11} height={300} className="gallery" />
          </Col>
          <Col lg={3}>
            <img src={teacher12} height={300} className="gallery" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg={3}>
            <img src={teacher13} height={300} className="gallery" />
          </Col>
          <Col lg={3}>
            <img src={teacher14} height={300} className="gallery" />
          </Col>
          <Col lg={3}>
            <img src={teacher15} height={300} className="gallery" />
          </Col>
          <Col lg={3}>
            <img src={teacher16} height={300} className="gallery" />
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 6, offset: 3 }} className="mb-5 mt-5 ">
            <h2 className="heading">Feedbacks</h2>
            <Carousel
              showArrows={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              showThumbs={false}
            >
              <div>
                <img src={feed1} alt="Image 1" />
              </div>
              <div>
                <img src={feed2} alt="Image 1" />
              </div>
              <div>
                <img src={feed3} alt="Image 1" />
              </div>
              <div>
                <img src={feed4} alt="Image 1" />
              </div>
              <div>
                <img src={feed5} alt="Image 1" />
              </div>
            </Carousel>

            {/* {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <h3 style={{ color: "green" }}>{testimonial.name}</h3>
                <p>{testimonial.comment}</p>
              </div>
            ))} */}
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
                <img src={enquiry} height="80" width="240" />
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
