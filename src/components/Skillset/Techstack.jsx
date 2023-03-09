import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiGit,
  DiPhp,
  DiLaravel,
  DiMysql,
  DiCodeigniter,
} from "react-icons/di";
import {
  SiHtml5,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiCodeigniter,
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodeigniter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
};

export default Techstack;
