import banner from "../assets/images/banner.jpg";

import img1 from "../assets/portfolio/fresh-food.jpg";
import img2 from "../assets/portfolio/restaurant-japonais.jpg";
import img3 from "../assets/portfolio/espace-bien-etre.jpg";
import img4 from "../assets/portfolio/seo.jpg";
import img5 from "../assets/portfolio/coder.jpg";
import img6 from "../assets/portfolio/screens.jpg";

const Portfolio = () => {
  return (
    <> 
      <section
        className="portfolio-hero"
        style={{ backgroundImage: `url(${banner})` }}
      ></section>
 
      <section className="portfolio-content">
        <div className="portfolio-wrapper">
          <h2>Portfolio</h2>
          <h4>Voici quelques-unes de mes réalisations</h4>
          <div className="portfolio-underline"></div>

          <div className="portfolio-grid"> 
            <div className="portfolio-card">
              <div className="card-header">
                <img src={img1} alt="Fresh Food" />
              </div>
              <div className="card-main">
                <h5>Fresh Food</h5>
                <p>Site de vente de produits frais en ligne</p>
                <button>Voir le site</button>
              </div>
              <div className="card-footer">
                Site réalisé avec PHP et MySQL
              </div>
            </div>
 
            <div className="portfolio-card">
              <div className="card-header">
                <img src={img2} alt="Restaurant Akira" />
              </div>
              <div className="card-main">
                <h5>Restaurant Akira</h5>
                <p>Site de vente de produits frais en ligne</p>
                <button>Voir le site</button>
              </div>
              <div className="card-footer">
                Site réalisé avec WordPress
              </div>
            </div>
 
            <div className="portfolio-card">
              <div className="card-header">
                <img src={img3} alt="Espace bien-être" />
              </div>
              <div className="card-main">
                <h5>Espace bien-être</h5>
                <p>Site de vente de produits frais en ligne</p>
                <button>Voir le site</button>
              </div>
              <div className="card-footer">
                Site réalisé avec LARAVEL
              </div>
            </div>
 
            <div className="portfolio-card">
              <div className="card-header">
                <img src={img4} alt="SEO" />
              </div>
              <div className="card-main">
                <h5>SEO</h5>
                <p>Amélioration du référencement d'un site e-commerce</p>
                <button>Voir le site</button>
              </div>
              <div className="card-footer">
                Utilisation des outils SEO
              </div>
            </div>
 
            <div className="portfolio-card">
              <div className="card-header">
                <img src={img5} alt="API" />
              </div>
              <div className="card-main">
                <h5>Création d'une API</h5>
                <p>Création d'une API RESTFULL publique</p>
                <button>Voir le site</button>
              </div>
              <div className="card-footer">
                PHP - SYMFONY
              </div>
            </div>
 
            <div className="portfolio-card">
              <div className="card-header">
                <img src={img6} alt="Maquette" />
              </div>
              <div className="card-main">
                <h5>Maquette d'un site web</h5>
                <p>Création du prototype d'un site</p>
                <button>Voir le site</button>
              </div>
              <div className="card-footer">
                Réalisé avec FIGMA
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;