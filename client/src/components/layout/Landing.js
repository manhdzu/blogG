import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../static/blogG.png";
import "./Landing.css";

const Landing = () => (
   <Container
      style={{ height: "75vh" }}
      className="d-flex flex-column justify-content-md-center align-items-center">
      {" "}
      <Row className="my-5"></Row>
      <Row className="my-5"></Row>
      <Row className="my-5"></Row>
      <Row className="my-4"></Row>
      <Row className="mb-4">
         <p className="text-secondary h3"> Welcome BlogG</p>
      </Row>
      <Row className="mb-5">
         <Col>
            <img src={logo} alt="logo" className="img-fluid" />  
         </Col>
      </Row>
      <Row className="my-5"></Row>
      <Row className="my-5"></Row>
      <Row className="my-2"></Row>
      <Row className="align-me">
         <small className="text-muted" >Powered by ManhDzu</small>
      </Row>
      
   </Container>
);

export default Landing;
