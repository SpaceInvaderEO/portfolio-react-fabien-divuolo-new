import heroBg from "../assets/images/hero-bg.jpg";
import aboutImg from "../assets/images/john-doe-about.jpg";

const Home = () => {
  return (
    <> 
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button className="hero-btn">En savoir plus</button>
        </div>
      </section>
 
      <section className="home-content">
        <div className="home-card">
          <div className="row g-5"> 
            <div className="col-md-6">
              <h3>A propos</h3>
              <div className="title-underline"></div>

              <div className="section-content">
                <img
                  src={aboutImg}
                  alt="John Doe"
                  className="img-fluid my-3"
                />

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis fugit, mollitia sit dolorem odit at sed vitae alias necessitatibus delectus minus fugiat quis inventore impedit aperiam dignissimos recusandae pariatur nulla.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis fugit, mollitia sit dolorem odit at sed vitae alias necessitatibus delectus minus fugiat quis inventore impedit aperiam dignissimos recusandae pariatur nulla.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis fugit, mollitia sit dolorem odit at sed vitae alias necessitatibus delectus minus fugiat quis inventore impedit aperiam dignissimos recusandae pariatur nulla.</p>
              </div>
            </div>
 
            <div className="col-md-6">
              <h3>Mes compétences</h3>
              <div className="title-underline"></div>

              <div className="skill">
                <span>HTML5 90%</span>
                <div className="progress">
                  <div className="progress-bar html"></div>
                </div>
              </div>

              <div className="skill">
                <span>CSS3 80%</span>
                <div className="progress">
                  <div className="progress-bar css"></div>
                </div>
              </div>

              <div className="skill">
                <span>JAVASCRIPT 70%</span>
                <div className="progress">
                  <div className="progress-bar js"></div>
                </div>
              </div>

              <div className="skill">
                <span>PHP 60%</span>
                <div className="progress">
                  <div className="progress-bar php"></div>
                </div>
              </div>

              <div className="skill">
                <span>REACT 50%</span>
                <div className="progress">
                  <div className="progress-bar react"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;