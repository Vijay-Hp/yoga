import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import "../style/Footer.css";
const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="text-dark py-4" style={{ backgroundColor: "#ab3c94" }}>
      <Container>
        <Row>
          <Col md={4} style={{ textAlign: "left" }}>
            <h5>
              <span>Useful Links</span>
            </h5>
            <Link
              to="/onlineyoga"
              className="nav-link"
              style={{
                color: "black",
                marginRight: "25px",
                marginTop: "10px",
                fontSize: "17px",
              }}
              onClick={handleLinkClick}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "25px",
                  fontWeight: 800,
                  textAlign: "right",
                }}
              >
                +
              </span>
              ONLINE YOGA
            </Link>
            <hr style={{ color: "#8b8b8b" }} />
            <Link
              to="/detox"
              className="nav-link"
              style={{
                color: "#eb3656",
                marginRight: "25px",
                marginTop: "-10px",
                fontSize: "17px",
              }}
              onClick={handleLinkClick}
            >
              <span
                style={{
                  marginRight: "5px",
                  color: "white",
                  fontSize: "25px",
                  fontWeight: 800,
                }}
              >
                +
              </span>
              DETOX DIET
            </Link>
            <hr style={{ color: "#8b8b8b" }} />
            <Link
              to="/teacher"
              className="nav-link"
              style={{
                color: "#eb3656",
                marginRight: "25px",
                marginTop: "-10px",
                fontSize: "17px",
              }}
              onClick={handleLinkClick}
            >
              <span
                style={{
                  marginRight: "5px",
                  color: "white",
                  fontSize: "25px",
                  fontWeight: 800,
                }}
              >
                +
              </span>
              TEACHER TRAINING
            </Link>
            <hr style={{ color: "#8b8b8b" }} />

            <Link
              to="/testimonial"
              className="nav-link"
              style={{
                color: "white",
                marginRight: "25px",
                marginTop: "-10px",
                fontSize: "17px",
              }}
              onClick={handleLinkClick}
            >
              <span
                style={{
                  marginRight: "5px",
                  color: "white",
                  fontSize: "25px",
                  fontWeight: 800,
                }}
              >
                +
              </span>
              TESTIMONIALS
            </Link>
          </Col>
          <Col md={4} style={{ textAlign: "left" }}>
            <h5>
              <span>Teams</span>
            </h5>
            <Link
              to="/gallery"
              className="nav-link"
              style={{
                color: "white",
                marginRight: "25px",
                marginTop: "10px",
                fontSize: "17px",
              }}
              onClick={handleLinkClick}
            >
              <span
                style={{
                  marginRight: "5px",
                  color: "white",
                  fontSize: "25px",
                  fontWeight: 800,
                }}
              >
                +
              </span>
              GALLERY
            </Link>
            <hr style={{ color: "#8b8b8b" }} />
            <Link
              to="/team "
              className="nav-link"
              style={{
                color: "white",
                marginRight: "25px",
                marginTop: "-10px",
                fontSize: "17px",
              }}
              onClick={handleLinkClick}
            >
              <span
                style={{
                  marginRight: "5px",
                  color: "white",
                  fontSize: "25px",
                  fontWeight: 800,
                }}
              >
                +
              </span>
              OUR TEAM
            </Link>
            <hr style={{ color: "#8b8b8b" }} />
            <Link
              to="https://www.instagram.com/divine_yoga_for_women/"
              className="nav-link"
              style={{
                color: "white",
                marginRight: "25px",
                marginTop: "-10px",
                fontSize: "17px",
              }}
              onClick={handleLinkClick}
            >
              <span
                style={{
                  marginRight: "5px",
                  color: "white",
                  fontSize: "25px",
                  fontWeight: 800,
                }}
              >
                +
              </span>
              COMMUNITY
            </Link>
          </Col>

          <Col md={4} style={{ textAlign: "left" }}>
            <h5>
              <span>Get In Touch</span>
            </h5>
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="address"
            >
              <FaMapMarkerAlt className="add-icon" />
              <div>
                <p style={{ margin: 0, textAlign: "left", color: "white" }}>
                  51, Kalidasan Street,
                </p>
                <p style={{ margin: 0, textAlign: "left", color: "white" }}>
                  Revathipuram Main Road,
                </p>
                <p style={{ margin: 0, textAlign: "left", color: "white" }}>
                  Urapakkam,
                </p>
                <p style={{ margin: 0, textAlign: "left", color: "white" }}>
                  Tamil Nadu - 603 210.
                </p>
              </div>
            </div>
            <hr style={{ color: "#8b8b8b" }} />
            <p>
              <FaPhoneAlt className="phone-icon" />

              <span style={{ color: "white" }}>
                <a
                  href="tel:94448 00697"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  +91-94448 00697,
                  <a
                    href="tel:70108 42898"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <span style={{ color: "white" }}>+91-70108 42898</span>
                  </a>
                </a>
              </span>
            </p>

            <hr style={{ color: "#8b8b8b" }} />
            <p>
              <FaEnvelope className="mail-icon" />
              <a
                href="mailto:divineyogaforwomen@gmail.com"
                style={{ color: "white", textDecoration: "none" }}
              >
                divineyogaforwomen@gmail.com
              </a>
            </p>
            <div style={{ display: "flex", marginTop: "40px" }}>
              <a href="https://www.facebook.com/divineyogaforwomen">
                <FaFacebook
                  style={{
                    marginRight: "30px",
                    fontSize: "30px",
                    color: "white",
                  }}
                />
              </a>
              <a href="https://www.instagram.com/divine_yoga_for_women/">
                <FaInstagram
                  style={{
                    marginRight: "30px",
                    fontSize: "30px",
                    color: "white",
                  }}
                />
              </a>
              <a href="https://twitter.com/divineyogaforwomen">
                <FaTwitter
                  style={{
                    marginRight: "30px",
                    fontSize: "30px",
                    color: "white",
                  }}
                />
              </a>
            </div>
            <a
              className="whats-app"
              href="https://wa.me/9176331621"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="my-float" />
            </a>
            <a
              className="phone"
              href="tel:9176331621"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhoneAlt className="my-float1" />
            </a>
          </Col>
        </Row>
      </Container>
      <div className="copyright">
        &copy; 2024 Divine yoga. All Rights Reserved.
        <br />
        <span>
          Developed by
          <a
            href="https://vebbox.com/"
            style={{ textDecoration: "none", color: "black" }}
          >
            <i>Vebbox Software Solutions</i>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
