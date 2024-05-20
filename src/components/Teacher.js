import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Teacher.css";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import Table from "react-bootstrap/Table";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avathar from "../assets/avathar.jpg";
import gallery from "../assets/gallery.jpg";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import SpaIcon from "@mui/icons-material/Spa";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SupportIcon from "@mui/icons-material/Support";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
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
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import feed1 from "../assets/teacher/feedback/feedback (1).jpeg";
import feed2 from "../assets/teacher/feedback/feedback (2).jpeg";
import feed3 from "../assets/teacher/feedback/feedback (3).jpeg";
import feed4 from "../assets/teacher/feedback/feedback (4).jpeg";
import feed5 from "../assets/teacher/feedback/feedback (5).jpeg";
import feed6 from "../assets/teacher/feedback/feedback (6).jpeg";
import feed7 from "../assets/teacher/feedback/feedback (7).jpeg";
import feed8 from "../assets/teacher/feedback/feedback (8).jpeg";
import feed9 from "../assets/teacher/feedback/feedback (9).jpeg";
import feed10 from "../assets/teacher/feedback/feedback (10).jpeg";
import feed11 from "../assets/teacher/feedback/feedback (11).jpeg";
import feed12 from "../assets/teacher/feedback/feedback (12).jpeg";
const Teacher = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12} className="mt-5">
            <h2 className="heading">
              Online 200 Hours Yoga Teacher Training Course
            </h2>
            <h5 className="sub-title">
              <i>
                Welcome to our comprehensive Online 200 Hours Yoga Teacher
                Training Course, designed to deepen your understanding and
                practice of yoga from the comfort of your own space. Whether you
                aspire to become a certified yoga instructor or wish to advance
                your personal practice, this course offers a transformative
                journey guided by experienced instructors.
              </i>
            </h5>
          </Col>
        </Row>

        <Row>
          <Col lg={12} className="mt-5">
            <h2 className="heading">Course Overview</h2>
            <h5 className="sub-title">
              <i>
                Our 200 Hours Yoga Teacher Training Course is a comprehensive
                program that covers the foundational aspects of yoga philosophy,
                anatomy, asana practice, teaching methodology, and more. Through
                a blend of live interactive sessions, pre-recorded lectures,
                reading materials, and practical assignments, you'll gain a
                holistic understanding of yoga.
              </i>
            </h5>
          </Col>
        </Row>
        <Row>
          <h2 className="mt-4 mb-4 heading">What You'll Learn</h2>
          <Col lg={4}>
            <div className="box3">
              <p className="box-title3">
                <LocalLibraryIcon className="yogaicon1" />
                Yoga Philosophy
              </p>
              <p className="box-content3">
                Explore the roots and philosophy of yoga, including key texts
                and concepts.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="box3">
              <p className="box-title3">
                <SelfImprovementIcon className="yogaicon1" />
                Asana Practice
              </p>
              <p className="box-content3">
                Deepen your practice with alignment techniques, sequencing, and
                adjustments.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="box3">
              <p className="box-title3">
                <DirectionsRunIcon className="yogaicon1" />
                Anatomy
              </p>
              <p className="box-content3">
                Understand the human body's anatomy relevant to yoga postures
                and movements.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="box3">
              <p className="box-title3">
                <SpaIcon className="yogaicon1" />
                Pranayama and Meditation
              </p>
              <p className="box-content3">
                Learn breathing techniques and meditation practices.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="box3">
              <p className="box-title3">
                <CastForEducationIcon className="yogaicon1" />
                Teaching Methodology
              </p>
              <p className="box-content3">
                Develop skills to confidently lead classes and create sequences.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="box3">
              <p className="box-title3">
                <SupportIcon className="yogaicon1" />
                Ethics and Lifestyle
              </p>
              <p className="box-content3">
                Explore the ethical principles of yoga and its application in
                daily life.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <h2 className="mt-4 mb-4 heading">Course Features</h2>
          <Col lg={4}>
            <div className="box4">
              <p className="box-title4">
                <LiveTvIcon className="yogaicon1" />
                Interactive Sessions
              </p>
              <p className="box-content4">
                Engage in live sessions with our expert instructors for
                personalized guidance and feedback.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="box4">
              <p className="box-title4">
                <LocalLibraryIcon className="yogaicon1" />
                Flexible Learning
              </p>
              <p className="box-content4">
                Access course materials at your convenience and study at your
                own pace.
              </p>
            </div>
          </Col>

          <Col lg={4}>
            <div className="box4">
              <p className="box-title4">
                <WorkspacePremiumIcon className="yogaicon1" />
                Certification
              </p>
              <p className="box-content4">
                Earn a Yoga Alliance accredited certificate upon successful
                completion of the course.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12} className="mt-2">
            <h2 className="heading">Who Can Join</h2>
            <h5 className="sub-title"></h5>
            <ol>
              <li>
                <p class="inner-text">
                  Beginners looking to establish a strong foundation in yoga.
                </p>
              </li>
              <li>
                <p class="inner-text">
                  Yoga enthusiasts seeking to deepen their practice.
                </p>
              </li>
              <li>
                <p class="inner-text">
                  Experienced practitioners aspiring to become certified yoga
                  instructors.
                </p>
              </li>
            </ol>
            <NavLink to="https://wa.me/9176331621">
              <button
                className="btn2"
                style={{
                  marginTop: "0px",
                  border: "none",
                  marginBottom: "50px",
                }}
              >
                Enquire Now
              </button>
            </NavLink>
          </Col>
        </Row>

        <Row>
          <h2 className="heading">Gallery</h2>
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
          <Col lg={{ span: 6, offset: 3 }} className="mt-5 mb-5">
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

              <div>
                <img src={feed6} alt="Image 1" />
              </div>
              <div>
                <img src={feed7} alt="Image 1" />
              </div>
              <div>
                <img src={feed8} alt="Image 1" />
              </div>
              <div>
                <img src={feed9} alt="Image 1" />
              </div>
              <div>
                <img src={feed10} alt="Image 1" />
              </div>
              <div>
                <img src={feed11} alt="Image 1" />
              </div>
              <div>
                <img src={feed12} alt="Image 1" />
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Teacher;
