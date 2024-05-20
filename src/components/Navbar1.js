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
import NavDropdown from "react-bootstrap/NavDropdown";
import Home from "./Home";
import Onlineyoga from "./Online_yoga";
import Detox from "./Detox";
import Teacher from "./Teacher";
import Testimonial from "./Testimonial";
import Gallery from "./Gallery";
import Team from "./Team";

function Navbar1() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubMenuOpen(false);
  };

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleSelect = () => setExpanded(false);
  return (
    <Router>
      <Navbar
        expanded={expanded}
        expand="lg"
        style={{
          backgroundColor: "#ab3c94",
          position: "sticky",
          top: "0",
          zIndex: "1000",
        }}
        className="navbar"
      >
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggler-icon"
            onClick={handleToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
        {/*<Route path="/quertly" element={<Quertly />} />
        <Route path="/material" element={<Material />} />
        <Route path="/hr" element={<Hr />} />
        <Route path="/exports" element={<Exports />} />
        <Route path="/contact" element={<Contact1 />} />
        <Route path="/cinnamon" element={<Cinnamon />} />
        <Route path="/pepper" element={<Pepper />} />
        <Route path="/tamarind" element={<Tamarind />} />
        <Route path="/asafoetida" element={<Asafoetida />} />
        <Route path="/turmeric" element={<Turmeric />} />
        <Route path="/funnel" element={<Funnel />} />
        <Route path="/garlic" element={<Garlic />} />
        <Route path="/mustard" element={<Mustard />} />
        <Route path="/nutmeg" element={<Nutmeg />} />
        <Route path="/anise" element={<Anise />} />
        <Route path="/cumin" element={<Cumin />} />
        <Route path="/maize" element={<Maize />} />
        <Route path="/ragi" element={<Ragi />} />
        <Route path="/bengal" element={<Bengal />} />
        <Route path="/horse" element={<Horse />} />
        <Route path="/green" element={<Green />} />
        <Route path="/dhall" element={<Dhall />} />
        <Route path="/cashew" element={<Cashew />} />
        <Route path="/arcanut" element={<Arcanut />} />
        <Route path="/sugar" element={<Sugar />} />
        <Route path="/jaggery" element={<Jaggery />} />
        <Route path="/honey" element={<Honey />} />
        <Route path="/chillis" element={<Chillis />} />
        <Route path="/poppy" element={<Poppy />} />
        <Route path="/sandal" element={<Sandal />} />
        <Route path="/oil" element={<Oil />} />
        <Route path="/gingelly" element={<Gingelly />} /> */}
      </Routes>
    </Router>
  );
}

export default Navbar1;
