import React, { useState } from "react";
import "../style/Navbar.css";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./Home";
import Onlineyoga from "./Online_yoga";
import Detox from "./Detox";
import Teacher from "./Teacher";
import Testimonial from "./Testimonial";
import Gallery from "./Gallery";
import Team from "./Team";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar1() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleSelect = () => {
    setExpanded(false);
  };

  return (
    <Router>
      <Navbar
        expanded={expanded}
        expand="lg"
        className="navbar"
        style={{
          backgroundColor: "#ab3c94",
          position: "sticky",
          top: "0",
          zIndex: "1000",
        }}
        onToggle={handleToggle}
      >
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
            style={{
              padding: "5px 5px",
              borderRadius: "0.25rem",
              color: "white",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <FontAwesomeIcon icon={expanded ? faTimes : faBars} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" onSelect={handleSelect}>
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active"
                onClick={handleSelect}
              >
                HOME
              </NavLink>
              <NavLink
                to="/onlineyoga"
                className="nav-link"
                activeClassName="active"
                onClick={handleSelect}
              >
                ONLINE YOGA
              </NavLink>
              <NavLink
                to="/detox"
                className="nav-link"
                activeClassName="active"
                onClick={handleSelect}
              >
                DETOX DIET
              </NavLink>
              <NavLink
                to="/teacher"
                className="nav-link"
                activeClassName="active"
                onClick={handleSelect}
              >
                TEACHER TRAINING
              </NavLink>

              <NavLink
                to="/testimonial"
                className="nav-link"
                activeClassName="active"
                onClick={handleSelect}
              >
                TESTIMONIALS
              </NavLink>

              <NavLink
                to="/gallery"
                className="nav-link"
                activeClassName="active"
                onClick={handleSelect}
              >
                GALLERY
              </NavLink>
              <NavLink
                to="/team"
                className="nav-link"
                activeClassName="active"
                onClick={handleSelect}
              >
                OUR TEAM
              </NavLink>
              <NavLink
                to="https://www.instagram.com/divine_yoga_for_women/"
                className="nav-link"
                activeClassName="active"
                onClick={handleSelect}
              >
                COMMUNITY
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onlineyoga" element={<Onlineyoga />} />
        <Route path="/detox" element={<Detox />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default Navbar1;
