import { FaTimes, FaUser, FaMapMarkerAlt, FaDesktop, FaBox, FaUsers } from "react-icons/fa";

const Modal = ({ isOpen, onClose, profile }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="github-modal">
 
        <div className="modal-header">
          <h3>Mon profil GitHub</h3>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
 
        <div className="modal-body">
          <div className="modal-left">
            <img
              src="/src/assets/images/profil-github.png"
              alt="Profil GitHub"
            />
          </div>

          <div className="modal-right">
 
            <div className="info-row">
              <FaUser />
              <a
                href={profile?.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile?.name || "John Doe"}
              </a>
            </div>

            <div className="info-divider"></div>
 
            <div className="info-row">
              <FaMapMarkerAlt />
              <span>{profile?.location || "Mais où suis-je ?"}</span>
            </div>

            <div className="info-divider"></div>
 
            <div className="info-row">
              <FaDesktop />
              <span>
                {profile?.bio ||
                  "As we all know, John Doe's identity is unknown. I just wanted to contribute without being known."}
              </span>
            </div>

            <div className="info-divider"></div>
 
            <div className="info-row">
              <FaBox />
              <span>Repositories : {profile?.public_repos ?? 1}</span>
            </div>

            <div className="info-divider"></div>
 
            <div className="info-row">
              <FaUsers />
              <span>Followers : {profile?.followers ?? 16}</span>
            </div>

            <div className="info-divider"></div>
 
            <div className="info-row">
              <FaUsers />
              <span>Following : {profile?.following ?? 0}</span>
            </div>
          </div>
        </div>
 
        <div className="modal-footer">
          <button className="modal-close-btn" onClick={onClose}>
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
};

export default Modal;