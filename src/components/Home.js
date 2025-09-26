import React from "react";
import { Container, Button } from "react-bootstrap";

function Home() {
  return (
    <section
      id="home"
      className="d-flex align-items-center text-center text-light"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0d6efd, #6610f2)", // blue to purple
      }}
    >
      <Container>
        <h1>Hello, I'm <span
            style={{
              background: "linear-gradient(90deg, #ff7eb3, #ff758c, #ff6a00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
            }}
          >Franz Lawrence M. Aseo</span></h1>
        <p className="lead">Frontend Developer</p>
        <Button variant="primary" href="#projects">View My Work</Button>
      </Container>
    </section>
  );
}
export default Home;
