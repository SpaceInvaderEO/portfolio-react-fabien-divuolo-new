import { Helmet } from "react-helmet-async";
import { useState } from "react"; 

export default function Legal() {
  const [open, setOpen] = useState({
    editor: false,
    host: false,
    credits: false,
  });

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return ( 
   <>
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>

    <section className="legal-page">
      <h1>Mentions légales</h1>
      <div className="legal-underline"></div>
 
      <div className={`legal-accordion ${open.editor ? "open" : ""}`}>
        <button
          className="accordion-header"
          onClick={() => toggle("editor")}>
          Éditeur du site
          <span className="arrow">{open.editor ? "˄" : "˅"}</span>
        </button>

        <div className="accordion-content">
          <p><strong>John Doe</strong></p>
          <p>40 rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>10 20 30 40 50</p>
          <p>john.doe@gmail.com</p>
        </div>
      </div>
 
      <div className={`legal-accordion ${open.host ? "open" : ""}`}>
        <button
          className="accordion-header"
          onClick={() => toggle("host")}
        >
          Hébergeur
          <span className="arrow">{open.host ? "˄" : "˅"}</span>
        </button>

        <div className="accordion-content">
          <h5>alwaysdata</h5>
          <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
          <p>🌍 <a href="https://www.alwaysdata.com" target="_blank">www.alwaysdata.com</a></p>
        </div>
      </div>
 
      <div className={`legal-accordion ${open.credits ? "open" : ""}`}>
        <button
          className="accordion-header"
          onClick={() => toggle("credits")}
        >
          Crédits
          <span className="arrow">{open.credits ? "˄" : "˅"}</span>
        </button>

        <div className="accordion-content">
          <p>
            Ce site a été réalisé par John Doe, étudiant au{" "}
            <a
              href="https://www.centre-europeen-formation.fr/"
              target="_blank"
            >
              Centre Européen de formation
            </a>.
          </p>

          <p><em>
            Les images utilisées sur ce site sont libres de droits et ont été
            obtenues sur{" "}
            <a href="https://pixabay.com/fr/" target="_blank">Pixabay</a>.
          </em></p>

          <p>
            La favicon de ce site a été fournie par{" "}
            <a
              href="https://www.flaticon.com/free-icons/john-doe"
              target="_blank"
            >
              John doe Icons erstellt von Freepik - Flaticon
            </a>
          </p>
        </div>
      </div>
    </section>
   </>
  );
}