import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Home.css";

const cities = [
  { name: "LUDHIANA", x: 477, y: 420, cls: "right" },
  { name: "DEHRADUN", x: 597, y: 452, cls: "right" },
  { name: "SIRSA", x: 430, y: 497, cls: "left" },
  { name: "BIJNOR", x: 567, y: 497, cls: "right" },
  { name: "JHAJJAR", x: 522, y: 543, cls: "left" },
  { name: "DELHI NCR", x: 544, y: 566, cls: "right big-label" },
  { name: "DARJEELING", x: 1148, y: 636, cls: "right" },
  { name: "JAIPUR", x: 476, y: 651, cls: "right" },
  { name: "LUCKNOW", x: 749, y: 667, cls: "right" },
  { name: "AJMER", x: 415, y: 682, cls: "right" },
  { name: "GWALIOR", x: 597, y: 697, cls: "right" },
  { name: "PATNA", x: 978, y: 727, cls: "right" },
  { name: "VARANASI", x: 856, y: 743, cls: "left" },
  { name: "DHANBAD", x: 1054, y: 836, cls: "left" },
  { name: "RANCHI", x: 993, y: 866, cls: "left" },
  { name: "BHOPAL", x: 568, y: 866, cls: "right" },
  { name: "AHMEDABAD", x: 293, y: 881, cls: "left" },
  { name: "UJJAIN", x: 461, y: 881, cls: "left" },
  { name: "KOLKATA", x: 1161, y: 897, cls: "left" },
  { name: "INDORE", x: 476, y: 912, cls: "right" },
  { name: "RAIPUR", x: 794, y: 1004, cls: "right" },
  { name: "BHUBANESWAR", x: 1039, y: 1049, cls: "left" },
  { name: "MUMBAI", x: 308, y: 1127, cls: "right" },
  { name: "PUNE", x: 355, y: 1158, cls: "right" },
  { name: "HYDERABAD", x: 627, y: 1234, cls: "right" },
  { name: "CHENNAI", x: 721, y: 1480, cls: "right" },
  { name: "BENGALURU", x: 567, y: 1496, cls: "left" },
  { name: "KOCHI", x: 492, y: 1665, cls: "right" },
  { name: "COLOMBO", x: 693, y: 1791, cls: "left" },
];

function Home() {
  return (
    <div className="home-page">
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
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
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
                <Link className="nav-link" to="/blogs">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero__crane"></div>
        <div className="hero__overlay"></div>

        <div className="bar">
          <div className="bar__logoWrap">
            <img
              className="bar__logo"
              src="/logo.webp"
              alt="Urban Infill Logo"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="bar__menu">
            <Link to="/architecture" className="bar__item">ARCHITECTURE</Link>
            <span className="bar__sep">|</span>
            <Link to="/interior" className="bar__item">INTERIOR</Link>
            <span className="bar__sep">|</span>
            <Link to="/projectmanagement" className="bar__item">
              PROJECT MANAGEMENT
            </Link>
          </div>
        </div>

        <div className="brand">
          <h1 className="brand__title">
            URBAN iNFiLL <span className="bar__since">SINCE 2018</span>
          </h1>
          <p className="brand__line">
            Architecture & Interior Design Firm Across India
          </p>
          <p className="brand__tag">thinking made visual</p>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-wrap">
          <div className="intro-left">
            <h2 className="section-heading">Filling in the Urban Gaps</h2>

            <p className="description">
              <strong>Urban Infill</strong> is a leading Pan-India architecture and commercial
              interior design firm headquartered in Gurgaon. We partner with corporate clients,
              developers, and institutions to design functional, future-ready spaces — from corporate
              office interiors and workplace architecture to multiplex cinema design, hospital planning,
              and large-scale hospitality projects.
            </p>

            <p className="description">
              With a proven track record spanning 20+ cities — including Delhi NCR,
              Mumbai, Bengaluru, Hyderabad, Kolkata, Pune, Chennai, and Kochi —
              Urban Infill combines strategic space planning, operational efficiency,
              and contemporary design to deliver commercial environments built for performance.
            </p>

            <p className="highlight">
              No matter where you&apos;re located,
              <br />
              we can deliver exceptional design consultancy services
            </p>

            <div className="stats">
              <div><h3>150+</h3><p>COMMERCIAL (OFFICES)</p></div>
              <div><h3>10+</h3><p>ENTERTAINMENT (CINEMAS)</p></div>
              <div><h3>15+</h3><p>HOSPITALITY<br />(F&amp;B + CLUB HOUSE)</p></div>
              <div><h3>10+</h3><p>MEDICAL<br />(HOSPITAL + CLINICS)</p></div>
              <div><h3>20+</h3><p>CITIES</p></div>
            </div>
          </div>

          <div className="intro-right">
            <div className="map-stage">
              <img src="/Map.webp" alt="Cities covered map" loading="lazy" decoding="async" />

              {cities.map((city) => (
                <div
                  key={city.name}
                  className="city-marker"
                  style={{
                    left: `${(city.x / 1290) * 63}%`,
                    top: `${(city.y / 1971) * 100}%`,
                  }}
                >
                  <span className="city-dot"></span>
                  <span className={`city-label ${city.cls}`}>{city.name}</span>
                </div>
              ))}
            </div>

            <div className="legend">
              <span className="red-dot"></span>
              <p>CITIES COVERED</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="services-container">
          <div className="service-card">
            <img
              src="/box-ikon.webp"
              alt="Corporate Office Architecture India"
              loading="lazy"
              decoding="async" />
            <h3>Corporate Office Architecture India</h3>
          </div>

          <div className="service-card">
            <img src="/box-ikon.webp" alt="Commercial Interior Design India" loading="lazy" decoding="async" />
            <h3>Commercial Interior Design India</h3>
          </div>

          <div className="service-card">
            <img src="/box-ikon.webp" alt="Cinema Architecture and Multiplex Design India" loading="lazy" decoding="async" />
            <h3>Cinema Architecture & Multiplex Design India</h3>
          </div>

          <div className="service-card">
            <img src="/box-ikon.webp" alt="Hospital Architecture and Medical Planning India" loading="lazy" decoding="async" />
            <h3>Hospital Architecture & Medical Planning India</h3>
          </div>

          <div className="service-card">
            <img src="/box-ikon.webp" alt="Hospitality Architecture" loading="lazy" decoding="async" />
            <h3>Hospitality Architecture (Clubs, Restaurants, Banquets)</h3>
          </div>

          <div className="service-card">
            <img src="/box-ikon.webp" alt="Luxury Residential Architecture" loading="lazy" decoding="async" />
            <h3>High-End Residential Architecture & Luxury Interiors India</h3>
          </div>
        </div>
      </section>

      <section className="clients-section">
        <div className="client-title">
          <h2>OUR VALUED CLIENTS</h2>
          <img src="/scale-1.webp" alt="" className="scale" loading="lazy" decoding="async" />
        </div>

        <div className="clients-wrap">
          <div className="clients-row">
            <div className="client-box"><img src="/logo/Reliance.webp" alt="Reliance" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/Airtel.webp" alt="Airtel" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/Medanta.webp" alt="Medanta" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/United.webp" alt="United" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/UrbanClap.webp" alt="UrbanClap" loading="lazy" decoding="async" /></div>
          </div>

          <div className="clients-row">
            <div className="client-box"><img src="/logo/Google.webp" alt="Google" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/Samsung.webp" alt="Samsung" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/lenskart.webp" alt="Lenskart" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/DLF.webp" alt="DLF" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/Honda.webp" alt="Honda" loading="lazy" decoding="async" /></div>
          </div>

          <div className="clients-row">
            <div className="client-box"><img src="/logo/GAAR.webp" alt="GAAR" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/Cine.webp" alt="Cine" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/FICCI.webp" alt="FICCI" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/pblogo.webp" alt="PB" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/Startek.webp" alt="Startek" loading="lazy" decoding="async" /></div>
          </div>

          <div className="clients-row">
            <div className="client-box"><img src="/logo/Foundever.webp" alt="Foundever" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/Axis.webp" alt="Axis Bank" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/NIC.webp" alt="NIC" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/CARS24.webp" alt="Cars24" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/Personiv.webp" alt="Personiv" loading="lazy" decoding="async" /></div>
          </div>

          <div className="clients-row">
            <div className="client-box"><img src="/logo/Popular.webp" alt="Popular" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/Royal.webp" alt="Royal" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/Sitel.webp" alt="Sitel" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/Kyndryl.webp" alt="Kyndryl" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/Ashoka.webp" alt="Ashoka" loading="lazy" decoding="async" /></div>
          </div>

          <div className="clients-row">
            <div className="client-box"><img src="/logo/IBM.webp" alt="IBM" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/NTT.webp" alt="NTT" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/Myntra.webp" alt="Myntra" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/cog.webp" alt="Cog" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/KONIKA.webp" alt="Konika" loading="lazy" decoding="async" /></div>
          </div>

          <div className="clients-row">
            <div className="client-box"><img src="/logo/Allied.webp" alt="Allied" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/convergys.webp" alt="Convergys" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/HSBC.webp" alt="HSBC" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/bhatra.webp" alt="Bhatra" loading="lazy" decoding="async" /></div>
            <div className="client-box"><img src="/logo/YKK.webp" alt="YKK" loading="lazy" decoding="async" /></div>
          </div>
        </div>

        <img src="/scale-2.webp" alt="" className="scale" loading="lazy" decoding="async" />
      </section>

      <section className="projects-section">
        <h2 className="projects-title">Featured Projects</h2>

        <div className="collage">
          <div className="collageRow collageRow--A">
            <div className="big">
              <Link to="/Projectitems/3" className="small">
                <img src="/projects/01_sirsa mall.webp" alt="Sirsa Mall project" loading="lazy" decoding="async" />
                <div className="hoverOverlay">
                  <div className="hoverFrame" />
                  <div className="hoverText">
                    <h3>Monsoon Mall</h3>
                    <p>Sirsa, Haryana</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="stack">
              <div className="small">
                <Link to="/interioritems/5" className="small">
                  <img src="/projects/02_samsung.webp" alt="Samsung project" loading="lazy" decoding="async" />
                  <div className="hoverOverlay">
                    <div className="hoverFrame" />
                    <div className="hoverText">
                      <h3>SAMSUNG</h3>
                      <p>OFFICE</p>
                    </div>
                  </div>
                </Link>
              </div>
              <Link to="/interioritems/6" className="small">
                <img src="/projects/03_uc.webp" alt="Urban workspace project" loading="lazy" decoding="async" />
                <div className="hoverOverlay">
                  <div className="hoverFrame" />
                  <div className="hoverText">
                    <h3>URBAN</h3>
                    <p>WORKSPACE</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="collageRow collageRow--B">
            <div className="stack">
              <div className="small">
                <img src="/projects/04_flipkart.webp" alt="Flipkart office project" loading="lazy" decoding="async" />
                <div className="hoverOverlay">
                  <div className="hoverFrame" />
                  <div className="hoverText">
                    <h3>FLIPKART</h3>
                    <p>OFFICE</p>
                  </div>
                </div>
              </div>

              <div className="small">
                <img src="/projects/06_HOME THEATER.webp" alt="Home theatre project" loading="lazy" decoding="async" />
                <div className="hoverOverlay">
                  <div className="hoverFrame" />
                  <div className="hoverText">
                    <h3>THEATRE</h3>
                    <p>INTERIOR</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="big">
              <Link to="/interioritems/4" className="small">
                <img src="/projects/05_cineport.webp" alt="Cineport cinema project" loading="lazy" decoding="async" />
                <div className="hoverOverlay">
                  <div className="hoverFrame" />
                  <div className="hoverText">
                    <h3>CINEPORT</h3>
                    <p>CINEMA</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="collageRow collageRow--A">
            <div className="big">
              <Link to="/interioritems/3" className="small">
                <img src="/projects/07_BBI.webp" alt="BBI commercial project" loading="lazy" decoding="async" />
                <div className="hoverOverlay">
                  <div className="hoverFrame" />
                  <div className="hoverText">
                    <h3>BBI</h3>
                    <p>COMMERCIAL</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="stack">
              <div className="small">
                <Link to="/interioritems/2" className="small">
                  <img src="/projects/08_urban canteen.webp" alt="Urban canteen project" loading="lazy" decoding="async" />
                  <div className="hoverOverlay">
                    <div className="hoverFrame" />
                    <div className="hoverText">
                      <h3> URBAN CANTEEN</h3>
                      <p>Bhubaneswar, Odisha</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="small">
                <img src="/projects/09_interior.webp" alt="Luxury interior project" loading="lazy" decoding="async" />
                <div className="hoverOverlay">
                  <div className="hoverFrame" />
                  <div className="hoverText">
                    <h3>INTERIOR</h3>
                    <p>LUXURY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quoteSection">
        <Link to="/architecture" className="quoteBtnLink">
          View All Projects
        </Link>

        <h2 className="quoteText">
          A DREAM DOESN&apos;T BECOME REALITY THROUGH MAGIC,
          <br />
          IT TAKES SWEAT, DETERMINATION AND HARDWORK.
        </h2>
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

export default Home;