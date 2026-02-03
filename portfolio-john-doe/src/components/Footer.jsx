import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container fluid>
        <Row> 
          <Col xs={12} md={{ span: 2, offset: 2 }} className="mb-4 mb-md-0">
            <h5>John Doe</h5>
            <p className="mb-1">40 rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon, France</p>
            <p className="mb-1">10 20 30 40 50</p>
            <p className="mb-1">john.doe@gmail.com</p>
            <div className="d-flex gap-2">
              <FaGithub color="gray" />
              <FaTwitter color="gray" />
              <FaLinkedin color="gray" />
            </div>
          </Col>
 
          <Col xs={12} md={{ span: 2, offset: 1 }} className="mb-4 mb-md-0">
            <h5>Liens utiles</h5>
            <p className="mb-1"><Link to="/">Accueil</Link></p>
            <p className="mb-1"><Link to="/services">Services</Link></p>
            <p className="mb-1"><Link to="/portfolio">Portfolio</Link></p>
            <p className="mb-1"><Link to="/contact">Me contacter</Link></p>
            <p className="mb-1"><Link to="/legal">Mentions légales</Link></p>
          </Col>
 
          <Col xs={12} md={{ span: 2, offset: 1 }}>
            <h5>Mes dernières réalisations</h5>
            <p>Info ligne 1</p>
            <p>Info ligne 2</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;