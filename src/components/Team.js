import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Team.css";
import Footer from "../components/Footer";
import Card from "react-bootstrap/Card";
import ceo from "../assets/team/sathya.jpg";
import md from "../assets/team/saranya.jpg";
import md1 from "../assets/team/sankari .jpg";
import nivetha from "../assets/team/Nivetha.jpg";
import sunitha from "../assets/team/Sunitha.jpg";
import syla from "../assets/team/Shyla.jpg";
import keerthika from "../assets/team/Keerthika.jpg";
import priyanka from "../assets/team/Priyanka-Kumar.jpg";
import sathish from "../assets/team/sathish.jpg";
import hema from "../assets/team/Hema.jpg";
import akilan from "../assets/team/IMG_9131.jpg";
import prabha from "../assets/team/prapha.jpg";
import amudha from "../assets/team/IMG_9134.jpg";
import divya from "../assets/team/divya.jpg";
import Yuganda from "../assets/team/Yuganda.jpg";
import sankar from "../assets/team/shankar.jpg";
import anand from "../assets/team/anand.jpg";
import vignesh from "../assets/team/vignesh.jpg";
import abirami from "../assets/team/Abirami.jpg";
import breami from "../assets/team/Breami.jpg";
const Team = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12} className="mt-5">
            <h2>Our Team</h2>
            <h6 className="sub-title"></h6>
          </Col>
        </Row>

        <Row>
          <Col lg={3} xs={6}>
            <div>
              <Card.Img variant="top" src={ceo} className="mt-4 team-img" />
            </div>
            <div className="text-center">
              <h6 className="name">Sathyapriya A</h6>
              <p className="role">Founder, RYT 500, RPYT, YACEP</p>
            </div>
          </Col>

          <Col lg={3} xs={6}>
            <div>
              <Card.Img variant="top" src={md} className="mt-4 team-img" />
            </div>
            <div className="text-center">
              <h6 className="name">Saranya Anandhajothi</h6>
              <p className="role">Founder, RYT 500, RPYT, YACEP</p>
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div>
              <Card.Img variant="top" src={md1} className="mt-4 team-img" />
            </div>
            <div className="text-center">
              <h6 className="name">Sankari Gnanasambandam</h6>
              <p className="role">Meditation Coach</p>
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div>
              <Card.Img variant="top" src={sathish} className="mt-4 team-img" />
            </div>
            <div className="text-center">
              <h6 className="name">Sathish Kumar</h6>
              <p className="role">Head - Academics & Studio</p>
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div>
              <Card.Img variant="top" src={sunitha} className="mt-4 team-img" />
            </div>
            <div className="text-center">
              <h6 className="name">Sunitha Sowthiri</h6>
              <p className="role">Head - Helpdesk Team</p>
            </div>
          </Col>

          <Col lg={3} xs={6}>
            <div>
              <Card.Img
                variant="top"
                src={keerthika}
                className="mt-4 team-img"
              />
            </div>
            <div className="text-center">
              <h6 className="name">Keerthika Selvarajan</h6>
              <p className="role">Senior Yoga Coach</p>
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div>
              <Card.Img variant="top" src={syla} className="mt-4 team-img" />
            </div>
            <div className="text-center">
              <h6 className="name">Shylaja N</h6>
              <p className="role">Senior Yoga Trainer</p>
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div>
              <Card.Img variant="top" src={divya} className="mt-4 team-img" />
            </div>
            <div className="text-center">
              <h6 className="name">Dr.Uppalapati Divya Sree</h6>
              <p className="role">Senior Yoga Trainer</p>
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div>
              <Card.Img variant="top" src={Yuganda} className="mt-4 team-img" />
            </div>
            <div className="text-center">
              <h6 className="name">P M Yugandar</h6>
              <p className="role">Senior Yoga Trainer</p>
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div>
              <Card.Img variant="top" src={akilan} className="mt-4 team-img" />
            </div>
            <div className="text-center">
              <h6 className="name">Akilan Perumal</h6>
              <p className="role">Content Manager</p>
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div>
              <Card.Img variant="top" src={nivetha} className="mt-4 team-img" />
            </div>
            <div className="text-center">
              <h6 className="name">Nivetha Kothandan</h6>
              <p className="role">Senior Yoga Trainerr</p>
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div>
              <Card.Img variant="top" src={abirami} className="mt-4 team-img" />
            </div>
            <div className="text-center">
              <h6 className="name">Abirami Muthiah</h6>
              <p className="role">Yoga Trainer</p>
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div>
              <Card.Img variant="top" src={breami} className="mt-4 team-img" />
            </div>
            <div className="text-center">
              <h6 className="name">Breami Marasamy</h6>
              <p className="role">Yoga Trainer</p>``
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div>
              <Card.Img
                variant="top"
                src={priyanka}
                className="mt-4 team-img"
              />
            </div>
            <div className="text-center">
              <h6 className="name">Priyanka Kumar</h6>
              <p className="role">Yoga Trainer</p>
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div>
              <Card.Img variant="top" src={sankar} className="mt-4 team-img" />
            </div>
            <div className="text-center">
              <h6 className="name">Shankar Kanniyappan</h6>
              <p className="role">Finance & Auditing</p>
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div>
              <Card.Img variant="top" src={hema} className="mt-4 team-img" />
            </div>
            <div className="text-center">
              <h6 className="name">Hemalatha Vinjam</h6>
              <p className="role">Senior Yoga Trainer</p>
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div>
              <Card.Img variant="top" src={anand} className="mt-4 team-img" />
            </div>
            <div className="text-center">
              <h6 className="name">Anandhajothi K</h6>
              <p className="role">Head - Maintanence</p>
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div>
              <Card.Img variant="top" src={prabha} className="mt-4 team-img" />
            </div>
            <div className="text-center">
              <h6 className="name">Prabhakaran S</h6>
              <p className="role">Content Manager</p>
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div>
              <Card.Img variant="top" src={amudha} className="mt-4 team-img" />
            </div>
            <div className="text-center">
              <h6 className="name">Amudha S</h6>
              <p className="role">Senior Yoga Trainer</p>
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div>
              <Card.Img variant="top" src={vignesh} className="mt-4 team-img" />
            </div>
            <div className="text-center">
              <h6 className="name">Vignesh Karthikeyan</h6>
              <p className="role">Head - Organics</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Team;
