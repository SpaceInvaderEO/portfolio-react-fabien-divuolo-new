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
            <div className="footer-socials">
            <a
              href="https://github.com/john-doe"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="GitHub John Doe"
            >
              <FaGithub />
            </a>

            <a
              href="https://twitter.com/john_doe"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Twitter John Doe"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/in/john-doe"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="LinkedIn John Doe"
            >
              <FaLinkedin />
            </a>
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

            <ul className="footer-links">
              <li>
                <Link to="/portfolio">Fresh Food</Link>
              </li>
              <li>
                <Link to="/portfolio">Restaurant Akira</Link>
              </li>
              <li>
                <Link to="/portfolio">Espace bien-être</Link>
              </li>
              <li>
                <Link to="/portfolio">SEO</Link>
              </li>
              <li>
                <Link to="/portfolio">Création d'une API</Link>
              </li>
              <li>
                <Link to="/portfolio">Maquette d'un site web</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;