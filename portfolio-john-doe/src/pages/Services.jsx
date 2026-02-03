import banner from "../assets/images/banner.jpg";
import { FaPaintBrush, FaCode, FaSearch } from "react-icons/fa";

const Services = () => {
  return (
    <> 
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${banner})` }}
      ></section>
 
      <section className="services-content">
        <div className="services-wrapper">
          <h2>Mon offre de services</h2>
          <h4>Voici les prestations sur lesquelles je peux intervenir</h4>
          <div className="services-underline"></div>

          <div className="services-cards"> 
            <div className="service-card">
              <FaPaintBrush className="service-icon" />
              <h5>UX Design</h5>
              <p>
                L'UX Design est une discipline qui consiste à concevoir des
                produits (sites web, applications, mobiles, logiciels, objets
                connectés, etc...) en plaçant l'utilisateur au centre des
                préoccupations. L'objectif est de rendre l'expérience utilisateur
                la plus fluide et agréable possible. 
              </p>
            </div>
 
            <div className="service-card">
              <FaCode className="service-icon" />
              <h5>Développement web</h5>
              <p>
                Le développement des sites web consiste à créer des sites
                internet en utilisant des langages de programmation (HTML, CSS,
                JavaScript, PHP, etc...) et des frameworks (Bootstrap, React,
                Angular, etc...).
              </p>
            </div>
 
            <div className="service-card">
              <FaSearch className="service-icon" />
              <h5>Référencement</h5>
              <p>
                Le référencement naturel (SEO) est une technique qui consiste à
                optimiser un site web pour le faire remonter dans les résultats
                des moteurs de recherche (Google, Bing, Yahoo, Lycos, etc...).
                L'objectif est d'attirer un maximum de visiteurs qualifiés sur le
                site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;