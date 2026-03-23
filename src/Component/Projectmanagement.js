import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./Projectmanagement.css";




function Projectmanagement() {


  return (
    <div className="project-page">
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
                <span className="nav-link dropdown-toggle">
                  Project
                </span>

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

      <div >
        <h1 className="we"><center>We Will Update Soon....</center></h1>
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
          © 2026 URBAN iNFiLL. All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default Projectmanagement;