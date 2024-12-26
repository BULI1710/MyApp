import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    contactNumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    branchOfStudy: "",
    collegeName: "",
    yearOfStudy: "",
    resume: null,
    skills: [],
    startDate: "",
    linkedInUrl: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else if (type === "checkbox") {
      const newSkills = formData.skills.includes(value)
        ? formData.skills.filter((skill) => skill !== value)
        : [...formData.skills, value];
      setFormData((prevState) => ({
        ...prevState,
        skills: newSkills,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.fullName) errors.fullName = "Full name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is not valid";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!formData.contactNumber) errors.contactNumber = "Contact number is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.branchOfStudy) errors.branchOfStudy = "Branch of Study is required";
    if (!formData.collegeName) errors.collegeName = "College/University name is required";
    if (!formData.yearOfStudy) errors.yearOfStudy = "Year of Study is required";
    if (!formData.resume) errors.resume = "Resume is required";
    if (!formData.startDate) errors.startDate = "Start date is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully!");
    }
  };

  return (
    <div className="auth-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={8} lg={6} className="auth-card p-4">
            <h3 className="text-center mb-4">Signup</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName" className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  isInvalid={errors.fullName}
                />
                <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleInputChange}
                  isInvalid={errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  isInvalid={errors.password}
                />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formContactNumber" className="mb-3">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  name="contactNumber"
                  placeholder="Enter contact number"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  isInvalid={errors.contactNumber}
                />
                <Form.Control.Feedback type="invalid">{errors.contactNumber}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formAddress" className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Enter address"
                  value={formData.address}
                  onChange={handleInputChange}
                  isInvalid={errors.address}
                />
                <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formCity" className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formState" className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  placeholder="Enter state"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formZipCode" className="mb-3">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="text"
                  name="zipCode"
                  placeholder="Enter zip code"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formBranchOfStudy" className="mb-3">
                <Form.Label>Branch of Study</Form.Label>
                <Form.Control
                  type="text"
                  name="branchOfStudy"
                  placeholder="Enter your branch of study"
                  value={formData.branchOfStudy}
                  onChange={handleInputChange}
                  isInvalid={errors.branchOfStudy}
                />
                <Form.Control.Feedback type="invalid">{errors.branchOfStudy}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formCollegeName" className="mb-3">
                <Form.Label>College/University Name</Form.Label>
                <Form.Control
                  type="text"
                  name="collegeName"
                  placeholder="Enter your college/university name"
                  value={formData.collegeName}
                  onChange={handleInputChange}
                  isInvalid={errors.collegeName}
                />
                <Form.Control.Feedback type="invalid">{errors.collegeName}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formYearOfStudy" className="mb-3">
                <Form.Label>Year of Study</Form.Label>
                <Form.Control
                  type="text"
                  name="yearOfStudy"
                  placeholder="Enter year of study"
                  value={formData.yearOfStudy}
                  onChange={handleInputChange}
                  isInvalid={errors.yearOfStudy}
                />
                <Form.Control.Feedback type="invalid">{errors.yearOfStudy}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formResume" className="mb-3">
                <Form.Label>Upload Resume</Form.Label>
                <Form.Control
                  type="file"
                  name="resume"
                  onChange={handleInputChange}
                  isInvalid={errors.resume}
                />
                <Form.Control.Feedback type="invalid">{errors.resume}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formSkills" className="mb-3">
                <Form.Label>Skills/Technologies</Form.Label>
                <div className="d-flex flex-wrap">
                  <Form.Check
                    type="checkbox"
                    label="JavaScript"
                    value="JavaScript"
                    checked={formData.skills.includes("JavaScript")}
                    onChange={handleInputChange}
                  />
                  <Form.Check
                    type="checkbox"
                    label="React"
                    value="React"
                    checked={formData.skills.includes("React")}
                    onChange={handleInputChange}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Node.js"
                    value="Node.js"
                    checked={formData.skills.includes("Node.js")}
                    onChange={handleInputChange}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Python"
                    value="Python"
                    checked={formData.skills.includes("Python")}
                    onChange={handleInputChange}
                  />
                  {/* Add more skills/technologies as needed */}
                </div>
              </Form.Group>

              <Form.Group controlId="formStartDate" className="mb-3">
                <Form.Label>Available Start Date</Form.Label>
                <Form.Control
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  isInvalid={errors.startDate}
                />
                <Form.Control.Feedback type="invalid">{errors.startDate}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formLinkedIn" className="mb-3">
                <Form.Label>LinkedIn/Portfolio URL (Optional)</Form.Label>
                <Form.Control
                  type="url"
                  name="linkedInUrl"
                  placeholder="Enter LinkedIn or portfolio URL"
                  value={formData.linkedInUrl}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 submit-btn">
                Signup
              </Button>
            </Form>
            <p className="text-center mt-3">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
