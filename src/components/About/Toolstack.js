import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoLogoWindows,IoLogoGithub  } from "react-icons/io";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoGithub  />
      </Col>
    </Row>
  );
}

export default Toolstack;
