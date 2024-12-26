import React from "react";
import { Row, Col } from "react-bootstrap";
import InternshipCard from "./InternshipCard"; // Reusable card component
import Backend from "./MyAppImages/Backend.png";
import cyberSecurity from "./MyAppImages/cyberSecurity.jpeg";
import dataScience from "./MyAppImages/dataScience.jpeg";
import uiux from "./MyAppImages/uiux.jpg";
import cloudComputing from "./MyAppImages/cloudComputing.jpeg";
import aiml from "./MyAppImages/aiml.jpeg"; 
import salesForce from "./MyAppImages/salesForce.png";

const internships = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "Build modern web applications using React.js.",
    image: "/static/media/webDevelopment.8ddb5461f983104e1e6e.jpg",
  },
  {
    id: 2,
    title: "Backend Developer",
    description: "Develop robust APIs and backend systems.",
    image: Backend,
  },
  {
    id: 3,
    title: "Full Stack Developer",
    description: "Work on both frontend and backend technologies.",
    image: "/static/media/fullStack.d783c45f4ec5c9d20d67.png",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    description: "Create intuitive and beautiful user interfaces.",
    image: uiux, // Add the correct path
  },
  {
    id: 5,
    title: "Data Analyst",
    description: "Analyze and interpret complex data.",
    image: dataScience, // Add the correct path
  },
  {
    id: 6,
    title: "Cyber Security",
    description: "Build and deploy ML models.",
    image: cyberSecurity, // Add the correct path
  },
  {
    id: 7,
    title: "Cloud Computingr",
    description: "Build and deploy ML models.",
    image: cloudComputing, // Add the correct path
  },
  {
    id: 8,
    title: "AI & ML",
    description: "Build and deploy ML models.",
    image: aiml, // Add the correct path
  },
  {
    id: 9,
    title: "Sales Force",
    description: "Build and deploy ML models.",
    image: salesForce, // Add the correct path
  },
];

const InternshipListing = () => {
  return (
    <div className="app-container" >
      <h2 className="text-center mb-4 internship-title" >Available Internships</h2>
      <Row>
        {internships.map((internship) => (
          <Col xs={12} md={6} lg={4} key={internship.id} className="mb-4">
            <InternshipCard
              title={internship.title}
              description={internship.description}
              image={internship.image}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default InternshipListing;
