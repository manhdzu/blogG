import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../static/blogG.png";
import "./Landing.css";

const Landing = () => (
   <Container
      style={{ height: "75vh" }}
      className="d-flex flex-column justify-content-center align-items-center"
   >
      {" "}
      <Row className="mb-4">
         <p className="text-secondary h3"> Welcome BlogG</p>
      </Row>
      <Row>
         <Col>
            <img src={logo} alt="logo" className="img-fluid" />
         </Col>
         
      </Row>
   </Container>
);

export default Landing;
