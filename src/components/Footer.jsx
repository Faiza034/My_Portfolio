import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Faiza Sajjad</h2>

          <p>
            Frontend Developer & Computer Science Student
          </p>

          <span>
            Building modern, responsive and user-friendly web
            applications.
          </span>
        </div>

        <div className="footer-contact">
          <h3>Get In Touch</h3>

          <p>
            <FaEnvelope />
            faizasajjad112@gmail.com
          </p>

          <p>
            <FaMapMarkerAlt />
            Lalamusa, Punjab, Pakistan
          </p>
        </div>

        <div className="footer-links">
          <h3>Connect</h3>

          <a
            href="https://www.linkedin.com/in/faiza-sajjad-04840b251"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            LinkedIn Profile
          </a>

          <a
            href="https://github.com/Faiza034"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub Profile
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Faiza Sajjad.
          All rights reserved.
        </p>

        <span>
          Built with React, Framer Motion & CSS
        </span>
      </div>
    </footer>
  );
}

export default Footer;