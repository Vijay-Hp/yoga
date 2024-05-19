import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Gallery.css";
import Footer from "../components/Footer";
import gallery from "../assets/gallery.jpg";
import img1 from "../assets/gallery/IMG_3818.jpg";
import img2 from "../assets/gallery/IMG_4398.jpg";
import img3 from "../assets/gallery/IMG_4541.jpg";
import img4 from "../assets/gallery/6EBC7961-6684-4801-8C80-9B1C3ED82F0A_Original.jpg";
import img5 from "../assets/gallery/1e28f770-c181-4279-ae24-113d4a1f6b8d_Original.jpg";
import img6 from "../assets/gallery/c3e94c5d-fccd-4023-b15e-ed2019394e9c.jpg";
import img7 from "../assets/gallery/IMG_8469.webp";
import img8 from "../assets/gallery/IMG_8470.jpeg";
import img9 from "../assets/gallery/IMG_8472.jpeg";
import img10 from "../assets/gallery/IMG_8474.webp";
import img11 from "../assets/gallery/IMG_8471.webp";
import img12 from "../assets/gallery/IMG_7451_Original.jpg";
import gal1 from "../assets/gallery/gallery1.jpeg";
import gal2 from "../assets/gallery/1.jpg";
import gal3 from "../assets/gallery/2.jpg";
import gal4 from "../assets/gallery/3.jpg";
import gal5 from "../assets/gallery/4.jpg";
import gal6 from "../assets/gallery/gallery6.jpeg";
import gal8 from "../assets/gallery/gallery8.jpeg";
import gal11 from "../assets/gallery/gallery11.jpeg";
import gal12 from "../assets/gallery/gallery12.jpeg";
import office from "../assets/gallery/office.jpeg";
const Gallery = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12} className="mt-5">
            <h2 className="heading">Gallery</h2>
          </Col>
        </Row>

        <Row>
          <Col lg={3} xs={6} className="mb-5">
            <img src={img1} className="gallery1" />
          </Col>
          <Col lg={3} xs={6} className="mb-5">
            <img src={img2} className="gallery1" />
          </Col>
          <Col lg={3} xs={6} className="mb-5">
            <img src={img3} className="gallery1" />
          </Col>
          <Col lg={3} xs={6} className="mb-5">
            <img src={img4} className="gallery1" />
          </Col>
          <Col lg={3} xs={6} className="mb-5">
            <img src={img5} className="gallery1" />
          </Col>
          <Col lg={3} xs={6} className="mb-5">
            <img src={img6} className="gallery1" />
          </Col>
          <Col lg={3} xs={6} className="mb-5">
            <img src={img7} className="gallery1" />
          </Col>
          <Col lg={3} xs={6} className="mb-5">
            <img src={img8} className="gallery1" />
          </Col>
          <Col lg={3} xs={6} className="mb-5">
            <img src={img9} className="gallery1" />
          </Col>
          <Col lg={3} xs={6} className="mb-5">
            <img src={img10} className="gallery1" />
          </Col>
          <Col lg={3} xs={6} className="mb-5">
            <img src={img11} className="gallery1" />
          </Col>
          <Col lg={3} xs={6} className="mb-5">
            <img src={img12} className="gallery1" />
          </Col>
          <Col lg={3} xs={6} className="mb-5">
            <img src={gal1} className="gallery1" />
          </Col>
          <Col lg={3} xs={6} className="mb-5">
            <img src={gal6} className="gallery1" />
          </Col>
          <Col lg={3} xs={6} className="mb-5">
            <img src={gal8} className="gallery1" />
          </Col>
          <Col lg={3} xs={6} className="mb-5">
            <img src={gal11} className="gallery1" />
          </Col>
          <Col lg={3} xs={6} className="mb-5">
            <img src={gal12} className="gallery1" />
          </Col>
          <Col lg={4} xs={6} className="mb-5">
            <img src={gal2} className="gallery1" />
          </Col>
          <Col lg={4} xs={6} className="mb-5">
            <img src={gal3} className="gallery1" />
          </Col>
          <Col lg={4} xs={6} className="mb-5">
            <img src={gal4} className="gallery1" />
          </Col>
          <Col lg={4} xs={6} className="mb-5">
            <img src={gal5} className="gallery1" />
          </Col>
          <Col lg={4} xs={6} className="mb-5">
            <img src={office} className="gallery1" />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Gallery;
