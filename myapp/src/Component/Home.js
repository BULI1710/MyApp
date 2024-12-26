import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import fullStack from "./MyAppImages/fullStack.png";
import mernStack from "./MyAppImages/mernStack.jpeg";
import webDevelopment from "./MyAppImages/webDevelopment.jpg";
import { useState } from "react";

function Home() {
  const [move, setMove] = useState(false);
  const handleGetStarted = () => {
    setMove(true);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <Container className="text-center hero-content">
          <h1 className="hero-title">Welcome to FURNACEX</h1>
          <p className="hero-subtitle">
            Empowering the next generation of tech innovators through hands-on
            mentorship and real-world challenges.
          </p>
          <Button variant="primary" className="cta-button" onClick={()=>handleGetStarted('/Login')}>
            Get Started
          </Button>
        </Container>
      </section>

      {/* Program Highlights */}
      <section className="programs">
        <Container>
          <h2 className="section-title text-center">Our Programs</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="program-card">
                <Card.Img
                  variant="top"
                  src={fullStack}
                  className="program-image"
                />
                <Card.Body>
                  <Card.Title className="program-title">Full Stack</Card.Title>
                  <Card.Text className="program-text">
                    Learn to build complete web applications with modern
                    frameworks and tools.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="program-card">
                <Card.Img
                  variant="top"
                  src={mernStack}
                  className="program-image"
                />
                <Card.Body>
                  <Card.Title className="program-title">MERN Stack</Card.Title>
                  <Card.Text className="program-text">
                    Master MongoDB, Express, React, and Node.js to create
                    scalable applications.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="program-card">
                <Card.Img
                  variant="top"
                  src={webDevelopment}
                  className="program-image"
                />
                <Card.Body>
                  <Card.Title className="program-title">
                    Web Development
                  </Card.Title>
                  <Card.Text className="program-text">
                    Dive into the fundamentals of front-end and back-end
                    development.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Key Features */}
      <section className="features">
        <Container>
          <h2 className="section-title text-center">Why Choose Us?</h2>
          <Row className="g-4">
            <Col md={4} className="text-center">
              <i className="feature-icon bi bi-lightbulb"></i>
              <h3 className="feature-title">Innovative Curriculum</h3>
              <p className="feature-text">
                Learn the latest technologies and tools in the tech industry.
              </p>
            </Col>
            <Col md={4} className="text-center">
              <i className="feature-icon bi bi-people"></i>
              <h3 className="feature-title">Expert Mentorship</h3>
              <p className="feature-text">
                Gain guidance from industry experts and experienced developers.
              </p>
            </Col>
            <Col md={4} className="text-center">
              <i className="feature-icon bi bi-briefcase"></i>
              <h3 className="feature-title">Career Support</h3>
              <p className="feature-text">
                Get assistance with job placements, resumes, and interviews.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {move && (
        <div>
          <h2>Redirecting to Login Page...</h2>
        </div>
      )}
    </div>
  );
}

export default Home;