import Container from "react-bootstrap/Container";
import "../style/Navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../components/Home";
import logo from "../assets/logo.png";
function Navbar1() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} width={200} height={60} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link" activeClassName="active">
                HOME
              </NavLink>

              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                ONLINE YOGA
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                TEACHER TRAINING
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                DETOX DIET
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                TESTIMONIALS
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                AWARDS
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                GALLERY
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                OUR TEAM
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                COMMUNITY
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<Sugar />} />
        <Route path="/spices" element={<Spices />} />
        <Route path="/food" element={<Food />} />
        <Route path="/tea" element={<Tea />} />
        <Route path="/pulses" element={<Pulses />} />
        <Route path="/agro" element={<Agro />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/quertly" element={<Quertly />} />
        <Route path="/material" element={<Material />} />
        <Route path="/hr" element={<Hr />} />
        <Route path="/exports" element={<Exports />} />
        <Route path="/contact" element={<Contact1 />} /> */}
      </Routes>
    </Router>
  );
}

export default Navbar1;
