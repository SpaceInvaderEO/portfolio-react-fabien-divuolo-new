import { FaMapMarkerAlt, FaMapPin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-page"> 
      <div className="contact-header">
        <h2>Contact</h2>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
        </p>
        <div className="contact-underline"></div>
      </div>
 
      <div className="contact-card">
        <div className="row g-5"> 
          <div className="col-md-6">
            <h3>Formulaire de contact</h3>
            <div className="title-underline"></div>

             <div className="form-wrapper">
               <form className="contact-form">
                 <input type="text" placeholder="Votre nom" />
                 <input type="email" placeholder="Votre adresse email" />
                 <input type="tel" placeholder="Votre numéro de téléphone" />
                 <input type="text" placeholder="Sujet" />
                 <textarea
                   rows="25"
                   placeholder="Votre message"
                 ></textarea>

                 <button type="submit">Envoyer</button>
               </form> 
             </div>
          </div>
 
          <div className="col-md-6">
            <h3>Mes coordonnées</h3>
            <div className="title-underline"></div>

            <h5>John Doe</h5>

            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt /> 40 rue Laure Diebold
              </li>
              <li>
                <FaMapPin /> 69009 Lyon, France
              </li>
              <li>
                <FaPhoneAlt /> 10 20 30 40 50
              </li>
              <li>
                <FaEnvelope /> john.doe@gmail.com
              </li>
            </ul>

            <div className="contact-map">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=40%20rue%20Laure%20Diebold%2069009%20Lyon&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;