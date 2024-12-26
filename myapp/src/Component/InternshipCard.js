import React from "react";
import { Card } from "react-bootstrap";

const InternshipCard = ({ title, description, image }) => {
  return (
    <Card style={{ width: "100%", height: "100%" }} className="shadow-sm">
      <Card.Img
        variant="top"
        src={image}
        style={{ height: "12rem", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <button className="btn btn-primary">Apply Now</button>
      </Card.Body>
    </Card>
  );
};

export default InternshipCard;