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
        {/* Left */}

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

        {/* Center */}

        <div className="footer-contact">
          <h3>Get In Touch</h3>

          <p>
            <FaEnvelope />
            faizasajjad@example.com
          </p>

          <p>
            <FaMapMarkerAlt />
            Punjab, Pakistan
          </p>
        </div>

        {/* Right */}

        <div className="footer-links">
          <h3>Connect</h3>

          <a
            href="https://linkedin.com/in/your-linkedin"
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
            GitHub Repository
          </a>
        </div>

        {/* Bottom */}

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Faiza Sajjad.
            All rights reserved.
          </p>

          <span>
            Built with React, Framer Motion & CSS
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;