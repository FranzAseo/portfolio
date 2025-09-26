import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 text-center">
      <Container>
        <p>© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}
export default Footer;
