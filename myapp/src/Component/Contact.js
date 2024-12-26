import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";


const Contact = () => {
  return (
    <div className="contact-page">
      <Container className="py-5">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, drop us a message.
        </p>

        <Row className="mt-5">
          <Col md={6}>
            <h2 className="section-title">Contact Information</h2>
            <p className="contact-info">
              <strong>Address:</strong> JAIPUR (RAJASTHAN) <br />
              <strong>Email:</strong> FURNACEX.INFO@PROTON.ME <br />
              <strong>Phone:</strong> +91-7849955055
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>


          </Col>

          <Col md={6}>
            <h2 className="section-title">Send Us a Message</h2>
            <Form className="contact-form">
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Write your message here..." />
              </Form.Group>

              <Button className="submit-btn mt-4" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
