import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./Interior.css";

function Interior() {
  const projects = [
    {
      id: 1,
      image: "/Interiors/United/Image 1.webp",
      title: "United Airlines Office",
      location: "Terminal 3, IGI Airport, New Delhi",
    },
    {
      id: 2,
      image: "/Interiors/Urban/Image 1.webp",
      title: "The Urban Canteen ",
      location: "Bhubaneswar, Odisha ",
    },
    {
      id: 3,
      image: "/Interiors/BBI/Image 6.webp",
      title: "BBi Booze Buzz Inhouse",
      location: "Chandrasekharpur, Bhubaneswar, Odisha",
    },
    {
      id: 4,
      image: "/Interiors/Cineport/Image 4.webp",
      title: "Cineport 5-Screen Multiplex ",
      location: "Gurgaon",
    },
    {
      id: 5,
      image: "/Interiors/Samsung/Image 1.webp",
      title: "Samsung Corporate Office ",
      location: "Dehradun Uttrakhand",
    },
    {
      id: 6,
      image: "/Interiors/Ucompany/Image 1.webp",
      title: "Urban Company Corporate Office ",
      location: "Bengaluru",
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

      <section className="interior-hero">
        <img
          src="/Interiors/Interior .webp"
          alt="Interior Design"
          className="interior-hero-image"
         decoding="async"/>

        <div className="interior-hero-overlay"></div>

        <div className="interior-hero-content">
          <h1>INTERIORS</h1>
          <p>
            <b>Urban Infill</b> creates thoughtful interior spaces that blend
            aesthetics, functionality, and comfort for modern living and work
            environments.
          </p>
        </div>
      </section>

      <section className="interior-projects">
        <p className="mini-title">Featured Interiors</p>
        <h2>Our Interior Projects</h2>
        <p className="section-text">
          Discover elegant interior design projects crafted to deliver
          sophisticated spatial experiences.
        </p>

        <div className="interior-grid">
          {projects.map((project) => (
            <Link
              to={`/interioritems/${project.id}`}
              className="interior-card-link"
              key={project.id}
            >
              <div className="interior-card">
                <img src={project.image} alt={project.title}  loading="lazy" decoding="async"/>

                <div className="interior-card-body">
                  <h3>{project.title}</h3>
                  <p>{project.location}</p>
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

export default Interior;