import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const PasswordReset = () => {
  return (
    <div className="auth-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={6} className="auth-card p-4">
            <h3 className="text-center mb-4">Reset Password</h3>
            <Form>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your registered email"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Send Reset Link
              </Button>
            </Form>
            <p className="text-center mt-3">
              Remember your password? <a href="/login">Login</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PasswordReset;
