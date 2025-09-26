import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import otlum from "../assets/franz2x2.png"

function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <Container>
        <Row>
          <Col md={6}>
            <img src={otlum} alt="about" className="img-fluid rounded" style={{ width: "450px", height: "450px" }} />
          </Col>
          <Col md={6}>
            <h2>About Me</h2>
            <p>
              Hello! I’m Franz Lawrence M. Aseo, a passionate web designer and frontend developer who enjoys turning ideas into modern, responsive, and user-friendly websites. I specialize in building sleek interfaces with React.js and Bootstrap, ensuring every project looks great on any device.

              I’ve worked on projects such as KokuPerfume, an e-commerce platform for perfumes across Europe; Boost Rewards, a marketing and loyalty system for shops; and VPro, a software development services company. Each project has strengthened my skills in design, development, and problem-solving, and I continue to learn new technologies to deliver better digital experiences.

              When I’m not coding, I enjoy exploring design trends, watching movies, and reading books that inspire effectiveness and creativity. My goal is to combine technology and creativity to help businesses grow and make a meaningful impact online.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;
