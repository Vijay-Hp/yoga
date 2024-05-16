import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/logo.png";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
function Head() {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={{ span: 1, offset: 5 }} className="mt-3 mb-3">
            <img src={logo} height="70px" width="200px" alt="Logo" />
          </Col>

          {/* <Col lg={{ span: 3, offset: 1 }} className="d-none d-lg-block">
            <PhoneOutlinedIcon
              style={{ fontSize: "30px", marginTop: "40px", color: "d57315" }}
            />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "-50px",
                marginLeft: "100px",
              }}
            >
              <b>+91-7358805707</b>
            </p>
            <p
              style={{
                marginLeft: "53px",
                color: "#8b8b8b",
                fontSize: "15px",
              }}
            >
              Make A Call
            </p>
          </Col>
          <Col lg={{ span: 3 }} className="d-none d-lg-block">
            <DraftsOutlinedIcon
              style={{ fontSize: "50px", marginTop: "40px", color: "d57315" }}
            />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "50px",
                marginLeft: "55px",
              }}
            >
              <b>hiimhighindia@gmail.com</b>
            </p>
            <p
              style={{
                marginLeft: "53px",
                color: "#8b8b8b",
                fontSize: "15px",
              }}
            >
              Make A Mail
            </p>
          </Col>
          <Col lg={{ span: 3 }} className="d-none d-lg-block">
            <PublicOutlinedIcon
              style={{ fontSize: "50px", marginTop: "40px", color: "d57315" }}
            />
            <p
              className="phoneno"
              style={{
                fontSize: "15px",
                marginTop: "50px",
                marginLeft: "55px",
              }}
            >
              <b>Thiruvarur-TamilNadu-India-614017</b>
            </p>
            <p
              style={{
                marginLeft: "53px",
                color: "#8b8b8b",
                fontSize: "15px",
              }}
            >
              Location
            </p>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default Head;
