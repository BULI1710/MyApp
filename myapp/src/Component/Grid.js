import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import fullStack from './MyAppImages/fullStack.png';
import mernStack from './MyAppImages/mernStack.jpeg';
import webDevelopment from './MyAppImages/webDevelopment.jpg';
import cloudComputing from './MyAppImages/cloudComputing.jpeg';
import dataScience from './MyAppImages/dataScience.jpeg';
import cyberSecurity from './MyAppImages/cyberSecurity.jpeg';

function GridExample() {
  const cardsData = [
    { 
      image: fullStack, 
      title: "FULL STACK",
      text: "This is the first card's description text. It gives more information about this card."
    },
    { 
      image: mernStack, 
      title: "MERN STACK",
      text: "This is the second card's description text. Here is some unique content."
    },
    { 
      image: webDevelopment, 
      title: "WEB DEVELOPMENT",
      text: "This is the third card's description text. It also has some supporting details."
    },
    { 
      image: cloudComputing, 
      title: "CLOUD COMPUTING",
      text: "This is the third card's description text. It also has some supporting details."
    },
    { 
      image: dataScience, 
      title: "DATA SCIENCE",
      text: "This is the third card's description text. It also has some supporting details."
    },
    { 
      image: cyberSecurity, 
      title: "CYBERSECURITY",
      text: "This is the third card's description text. It also has some supporting details."
    },
  ]

  return (
    <Row className="g-4  d-flex justify-content-center align-items-center vh-100">
      {cardsData.map((card, idx) => (
        <Col xs={6} md={4} key={idx} className="d-flex justify-content-center">
          <Card style={{ width: '18rem', height:'20rem'}} className="card-hover">
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                {card.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;