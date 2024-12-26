import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";


const About = () => {
  return (
    <div className="about-page">
      <Container className="text-center py-5">
        {/* About Section */}
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">
          Bridging the gap between talent and opportunity through innovation and passion.
        </p>

        {/* Mission Section */}
        <Row className="align-items-center py-5">
          <Col md={6} className="about-image">
            <Image src="/assets/about-us.png" fluid className="animated-image" />
          </Col>
          <Col md={6}>
            <h2 className="section-title">Our Mission</h2>
            <p className="section-text">
              At Internship Portal, we aim to empower individuals by connecting them with the
              best learning opportunities while helping companies find their next big talent.
            </p>
          </Col>
        </Row>

        {/* Core Values Section */}
        <h2 className="section-title">Core Values</h2>
        <Row className="py-4">
          <Col md={4}>
            <Card className="value-card">
              <Card.Body>
                <h3 className="value-title">Integrity</h3>
                <p className="value-text">
                  We believe in building trust through transparency and accountability in all our interactions.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="value-card">
              <Card.Body>
                <h3 className="value-title">Innovation</h3>
                <p className="value-text">
                  Driving forward with creativity and technology to deliver exceptional results.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="value-card">
              <Card.Body>
                <h3 className="value-title">Excellence</h3>
                <p className="value-text">
                  Striving for quality in everything we do to ensure the best experience for all stakeholders.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Team Members Section */}
        <h2 className="section-title">Meet Our Team</h2>
        <Row className="team-cards py-4">
          <Col md={4} className="mb-4">
            <Card className="team-card">
              <Card.Img variant="top" src="/assets/team1.jpg" className="team-img" />
              <Card.Body>
                <Card.Title>Vijay Sharma</Card.Title>
                <Card.Text>Full Stack Developer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="team-card">
              <Card.Img variant="top" src="/assets/team2.jpg" className="team-img" />
              <Card.Body>
                <Card.Title>Ananya Roy</Card.Title>
                <Card.Text>UI/UX Designer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="team-card">
              <Card.Img variant="top" src="/assets/team3.jpg" className="team-img" />
              <Card.Body>
                <Card.Title>Karan Mehta</Card.Title>
                <Card.Text>Project Manager</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="team-cards py-4">
          <Col md={4} className="mb-4">
            <Card className="team-card">
              <Card.Img variant="top" src="/assets/team4.jpg" className="team-img" />
              <Card.Body>
                <Card.Title>Riya Patel</Card.Title>
                <Card.Text>Backend Developer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="team-card">
              <Card.Img variant="top" src="/assets/team5.jpg" className="team-img" />
              <Card.Body>
                <Card.Title>Arjun Singh</Card.Title>
                <Card.Text>Frontend Developer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="team-card">
              <Card.Img variant="top" src="/assets/team6.jpg" className="team-img" />
              <Card.Body>
                <Card.Title>Neha Kapoor</Card.Title>
                <Card.Text>Quality Analyst</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
