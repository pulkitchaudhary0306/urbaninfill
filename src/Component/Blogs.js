import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./Blogs.css";

function Blogs() {
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

      <div className="blogs-page">
        <div className="blogs-container">
          <section className="featured-blog">
            <img
              src="/Blogs/cover.webp"
              alt="Featured blog"
              className="featured-blog-image"
              decoding="async"
            />
            <div className="featured-blog-overlay"></div>

            <div className="featured-blog-content">
              <p className="featured-label">Featured</p>
              <h1>Building Urban Infill</h1>
              <p className="featured-description">Founder & Principal Architect</p>

              <Link to="/blogdetails/1" className="read-btn">
                Read Blog →
              </Link>
            </div>
          </section>

          <section className="recent-posts">
            <h2>Recent Blog Posts</h2>

            <div className="posts-grid">
              <div className="post-card">
                <img
                  src="/Blogs/cover.webp"
                  alt="Building Urban Infill"
                  className="post-card-image"
                  decoding="async"
                />
                <div className="post-card-content">
                  <h3>Building Urban Infill</h3>
                  <p>Founder & Principal Architect.</p>
                  <div className="post-meta">
                    <span>By Subhankar Sengupta</span>
                    <span>•</span>
                    <span>03 Mar 2026</span>
                  </div>
                  <Link to="/blogdetails/1" className="see-more">
                    See More →
                  </Link>
                </div>
              </div>

              <div className="post-card">
                <img
                  src="/Architecture/Aravali 1.webp"
                  alt="Building your Dream House"
                  className="post-card-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="post-card-content">
                  <h3>Building your Dream Resort</h3>
                  <p>The Aravali Resort.</p>
                  <div className="post-meta">
                    <span> Rishikesh </span>
                    <span></span>
                    <span></span>
                  </div>
                  <Link to="/blogdetails/2" className="see-more">
                    See More →
                  </Link>
                </div>
              </div>

              <div className="post-card">
                <img
                  src="/Interiors/Urban/Image 1.webp"
                  alt="Building your Luxury Villa"
                  className="post-card-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="post-card-content">
                  <h3> Modern Aesthetics Canteen </h3>
                  <p>Commercial Restaurant Design.</p>
                  <div className="post-meta">
                    <span> Bhubaneswar, Odisha</span>
                    <span>•</span>
                    <span>07 JULY 2024</span>
                  </div>
                  <Link to="/blogdetails/3" className="see-more">
                    See More →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
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
                302, Third Floor. Huda Sector, Sushant Lok 2, Sector 55,
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

export default Blogs;