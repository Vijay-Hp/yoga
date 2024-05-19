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
      </Container>

      <Footer />
    </>
  );
};

export default Teacher;
