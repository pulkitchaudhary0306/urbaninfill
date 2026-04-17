import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__col">
          <h2 className="site-footer__logo">URBAN iNFiLL</h2>

          <div className="site-footer__social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="site-footer__icon"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/urban_infill_studio?igsh=MWdiNmhxY3c1MXF5OA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="site-footer__icon"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/company/urbaninfill/"
              target="_blank"
              rel="noreferrer"
              className="site-footer__icon"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="mailto:info@urbaninfill.in"
              className="site-footer__icon"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://maps.app.goo.gl/eCuHCqMigUibJuRf6?g_st=iw"
              target="_blank"
              rel="noreferrer"
              className="site-footer__icon"
              aria-label="Location"
            >
              <FaMapMarkerAlt />
            </a>
          </div>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__title">QUICK LINKS</h3>
          <ul className="site-footer__list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/career">Career</Link></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__title">SERVICES</h3>
          <ul className="site-footer__list">
            <li><Link to="/architecture">Architecture</Link></li>
            <li><Link to="/interior">Interior</Link></li>
            <li><Link to="/projectmanagement">Project Management</Link></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__title">CONTACT</h3>
          <ul className="site-footer__list">
            <li className="site-footer__contact-item">
              <FaEnvelope className="site-footer__contact-icon" />
              <a href="mailto:info@urbaninfill.in">info@urbaninfill.in</a>
            </li>
            <li className="site-footer__contact-item">
              <FaPhone className="site-footer__contact-icon" />
              <span>+91 124 4241186</span>
            </li>
            <li className="site-footer__contact-item">
              <FaMapMarkerAlt className="site-footer__contact-icon" />
              <span>302, Third Floor, Huda Sector, Sushant Lok 2, Sector 55, Gurugram, Haryana 122011</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__line"></div>

      <div className="site-footer__copy">
        © 2026 URBAN iNFiLL. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
