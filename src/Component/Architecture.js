import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faFacebook,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./Architecture.css";


function Architecture() {
    const projects = [
        {
            id: 1,
            image: "/Architecture/Aravali 1.webp",
            title: "The Aravali Resort",
            location: "Rishikesh",
        },
        {
            id: 2,
            image: "/Architecture/Sargam 1.webp",
            title: "Sargam Theatre",
            location: "Chandpur, Bijnor, Uttar Pradesh",
        },
        {
            id: 3,
            image: "/Architecture/Sirsa 1.webp",
            title: "Monsoon Mall ",
            location: "Sirsa, Haryana",
        },
        {
            id: 4,
            image: "/Architecture/Ananta/Image 3.webp",
            title: "Ananta Hospital ",
            location: "Gurgaon, Haryana",
        },
    ];



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

            <section className="arch-hero">
                <img
                    src="/Architecture/Architecture .webp"
                    alt="MAodern architecture house"
                    className="arch-hero-image"
                    loading="lazy"
                    decoding="async"
                />
                <div className="arch-hero-overlay"></div>

                <div className="arch-hero-content">
                    <h1>
                        ARCHITECTURE
                    </h1>
                    <p>
                        <b>Urban Infill </b>helps you explore premium architecture, residences,
                        villas, and commercial design opportunities with clarity and
                        confidence.
                    </p>
                </div>
            </section>

            <section className="arch-most-viewed">
                <p className="mini-title">Featured Architecture</p>
                <h2>Our Projects</h2>
                <p className="section-text">
                    Discover a curated range of architecture projects, premium villas,
                    and modern spaces designed for contemporary living.
                </p>

                <div className="arch-card-grid">
                    {projects.map((project) => (
                        <Link
                            to={`/ProjectItems/${project.id}`}
                            className="arch-card-link"
                            key={project.id}
                        >
                            <div className="arch-card">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    decoding="async"
                                />

                                <div className="arch-card-body">
                                    <h3>{project.title}</h3>
                                    <p className="arch-location">{project.location}</p>
                                </div>

                            </div>
                        </Link>
                    ))}
                </div>

            </section>
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

export default Architecture;