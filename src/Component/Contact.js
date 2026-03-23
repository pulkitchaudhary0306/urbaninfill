import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            URBAN INFILL
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle">Project</span>

                <ul className="dropdown-menu-custom">
                  <li>
                    <Link to="/architecture" className="dropdown-item-custom">
                      Architecture
                    </Link>
                  </li>
                  <li>
                    <Link to="/interior" className="dropdown-item-custom">
                      Interior
                    </Link>
                  </li>
                  <li>
                    <Link to="/projectmanagement" className="dropdown-item-custom">
                      Project Management
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-overlay">
            <div className="contact-hero-content">
              <h1>CONTACT US</h1>
            </div>
          </div>
        </section>

        <section className="contact-info-section">
          <div className="contact-info-container">
            <div className="contact-card">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>
              <h3>CALL US</h3>
              <p>
                Speak directly with our team for project discussions and design
                support.
              </p>
              <h4>+91 124 4241186</h4>
              <h4>+91 9319166609</h4>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <FaHome />
              </div>
              <h3>VISIT US</h3>
              <p>
                Visit our office for architecture, interior design, and project
                consultations.
              </p>

              <div className="address-row">
                <div className="address-box">
                  <h4>Gurugram Office</h4>
                  <p>302, Third Floor, Sushant Lok 2, Sector 55, Gurugram, Haryana, India</p>
                </div>

                <div className="address-box">
                  <h4>Head Office</h4>
                  <p>
                    204, Shri Ram Plaza, Bank More (Head Office), Dhanbad 826001,
                    Jharkhand, India
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h3>CONTACT US</h3>
              <p>
                Email us your requirements and we’ll get back with the right
                design solution.
              </p>
              <h4>info@urbaninfill.in</h4>
            </div>
          </div>
        </section>

        <section className="map-section">
          <iframe
            title="Urban Infill Location"
            src="https://www.google.com/maps?q=Sector%2055%20Gurugram%20Haryana&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </div>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__col">
            <h2 className="footer__logo">URBAN iNFiLL</h2>

            <div className="footer__social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="footer__icon"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a
                href="https://www.instagram.com/urban_infill_studio?igsh=MWdiNmhxY3c1MXF5OA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="footer__icon"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://maps.app.goo.gl/eCuHCqMigUibJuRf6?g_st=iw"
                target="_blank"
                rel="noreferrer"
                className="footer__icon"
                aria-label="Location"
              >
                📍
              </a>

              <a
                href="https://www.linkedin.com/company/urbaninfill/"
                target="_blank"
                rel="noreferrer"
                className="footer__icon"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">Services</h3>
            <ul className="footer__list">
              <li><Link to="/architecture">Architecture</Link></li>
              <li><Link to="/interior">Interior</Link></li>
              <li><Link to="/projectmanagement">Project Management</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">Contact</h3>
            <ul className="footer__list">
              <li><a href="mailto:info@urbaninfill.in">info@urbaninfill.in</a></li>
              <li>+91 124 4241186</li>
              <li>
                302, Third Floor, Huda Sector, Sushant Lok 2, Sector 55,
                Gurugram, Ghata, Haryana 122011
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__line"></div>

        <div className="footer__copy">
          © 2026 uRBAN iNFiLL. All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default Contact;