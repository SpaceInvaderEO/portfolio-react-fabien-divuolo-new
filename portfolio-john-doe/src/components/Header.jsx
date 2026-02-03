import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';  

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="py-3">
      <Container fluid>
        <Navbar.Brand className="text-uppercase">John Doe</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto text-uppercase">
              <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
              <LinkContainer to="/services"><Nav.Link>Services</Nav.Link></LinkContainer>
              <LinkContainer to="/portfolio"><Nav.Link>Portfolio</Nav.Link></LinkContainer>
              <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
              <LinkContainer to="/legal"><Nav.Link>Mentions Légales</Nav.Link></LinkContainer>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;