import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import aman from "../assets/projects/aman.png";
import gsjs from "../assets/projects/gsjs.png";
import krypto from "../assets/projects/krypto.png";
import aldaya from "../assets/projects/aldaya.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gsjs}
              isBlog={false}
              title="Good Samaratian Website"
              description="Good Samaritan Care Services aims to provide disability support services in home care and in supported living environments, supporting participants to live independently. Since our beginning, we have been empowering participants through an individualised person-centred care.
              Good Samaritan Care Services is owned and operated locally, providing affordable and accessible services that meet your interests and needs. The staff support you with care, compassion and respect. We deliver the services you want, when and how you want them.
              This website is build using php codeigniter framework and mysql as database"
              demoLink="https://gsjs.com.au/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aman}
              isBlog={false}
              title="Aman Steel Website"
              description="man Steel is a brand new enterprise based in Doha, State of Qatar. As a recognized market dealer in steel products, we are ready to proven new trends and introducing alternative solutions. Since its establishment, Aman Steel will grown to become a forward-thinking, client-focused supplier of quality products sourced from around the world.

Our projects included supplying steel reinforcement and building material products to the construction projects and various high and low-rise housing community development projects in Qatar.
This website is build using php codeigniter framework and mysql as database."
              demoLink="https://amansteel.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aldaya}
              isBlog={false}
              title="Al Daya Website"
              description="Al Daya Services is a Jeddah based Foreign Investment Company in Saudi Arabia. Our Company has well experience in the field of Civil and Electro-Mechanical works. We do a high quality job and provide all our customers with good service, treating their property  with respect. We are reliable and competitive with our pricing. It's the way we've managed to grow and develop our business over the years. We provide Civil and Electro-Mechanical installation maintenance works. We have well experienced qualified our own technicians."
              demoLink="https://aldayaservices.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="TraxON (offline)"
              description="Bus Fee Tracking System for Govt School.This website is build using php codeigniter framework and mysql as database.aLL CRUD operations are implemnted here"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
