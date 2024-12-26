import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark  py-3 ">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} My Project Name. All Rights Reserved.</p>
        <p>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            /*className="text-light text-decoration-none mx-2"*/
          >
            LinkedIn
          </a>
          |
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            /*className="text-light text-decoration-none mx-2"*/
          >
            GitHub
          </a>
          |
          <a
            href="mailto:example@example.com"
            /*className="text-light text-decoration-none mx-2"*/
          >
            Email Us
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
