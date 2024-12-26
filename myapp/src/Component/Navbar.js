import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, useLocation, Link } from 'react-router-dom';

function NavScrollExample() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand className='custom-brand'>FurnaceX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="#Home" onClick={() => handleNavigate('/')} className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link href="#internship" onClick={() => handleNavigate('/internships')} className={location.pathname === '/internships' ? 'active' : ''}>Internship</Nav.Link>

            <Nav.Link href="#about" onClick={() => handleNavigate('/About')} className={location.pathname === '/About' ? 'active' : ''}>About</Nav.Link>
            <Nav.Link href="#Contact" onClick={() => handleNavigate('/Contact')} className={location.pathname === '/Contact' ? 'active' : ''}>
              Contact
            </Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ms-3">
            <Nav.Link as={Link} to="/Login" className="nav-link-custom">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/Signup" className="nav-link-custom">
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
