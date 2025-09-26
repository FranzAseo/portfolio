import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 text-center">
      <Container>
        <p>© {new Date().getFullYear()} Franz Lawrence Aseo. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}
export default Footer;
