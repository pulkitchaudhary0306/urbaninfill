import React from 'react';
import { Link, useSearchParams } from "react-router-dom";
import "../HeaderFooter/Header.css";
import "./Interior.css";
import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";

function Interior() {
  const [searchParams] = useSearchParams();

  usePageReveal([
    ".interior-hero-content > *",
    ".interior-projects > p",
    ".interior-projects > h2",
    ".filter-tabs",
    ".interior-card",
    ".footer__col",
    ".footer__line",
    ".footer__copy",
  ]);

  useScrollVisibility([
    ".interior-hero-image",
    ".interior-hero-content",
    ".interior-projects > p",
    ".interior-projects > h2",
    ".interior-projects > .section-text",
    ".filter-tabs",
    ".interior-card",
  ]);

  const filterCategories = [
    "All",
    "Corporate Office",
    "Commercial Interior",
    "Hospitals",
    "Hospitality",
    "Cinema",
    "Residential Luxury Interiors",
    "Archives",
  ];

  const requestedCategory = searchParams.get("category");
  const activeFilter = filterCategories.includes(requestedCategory)
    ? requestedCategory
    : "All";

  const getCategoryLink = (category) =>
    category === "All"
      ? "/interior"
      : `/interior?category=${encodeURIComponent(category)}`;

  const projects = [
    {
      id: 1,
      slug: "united-airlines-office-interior-t3-delhi",
      image: "/Interiors/United/united-airlines-premium-office-main-delhi.avif",
      title: "United Airlines Office",
      location: "Terminal 3, IGI Airport, New Delhi",
      category: "Corporate Office",
    },
    {
      id: 2,
      slug: "urban-canteen-cafe-interior-bhubaneswar",
      image: "/Interiors/Urban/urban-canteen-restaurant-main-bhubaneswar.avif",
      title: "The Urban Canteen",
      location: "Bhubaneswar, Odisha",
      category: "Hospitality",
    },
    {
      id: 3,
      slug: "restaurant-club-design-bbi-bhubaneswar",
      image: "/Interiors/BBI/bbi-interior-lighting-design-bhubaneswar.avif",
      title: "BBi Booze Buzz Inhouse",
      location: "Chandrasekharpur, Bhubaneswar, Odisha",
      category: "Hospitality",
    },
    {
      id: 4,
      slug: "cineport-svh-5-screen-multiplex-gurgaon",
      image: "/Interiors/Cineport/cineport-cinema-seating-arrangement-gurgaon.avif",
      title: "Cineport 5-Screen Multiplex",
      location: "Gurgaon, Haryana",
      category: "Cinema",
      scope: "Architecture & Interior Design", // Added for extra detail on cards
    },
    {
      id: 5,
      slug: "samsung-office-interior-design-dehradun",
      image: "/Interiors/Samsung/samsung-corporate-office-main-dehradun.avif",
      title: "Samsung Corporate Office",
      location: "Dehradun Uttrakhand",
      category: "Corporate Office",
    },
    {
      id: 6,
      slug: "urban-company-it-head-office-interior-bangalore",
      image: "/Interiors/Ucompany/urban-company-corporate-office-main-bengaluru.avif",
      title: "Urban Company Corporate Office",
      location: "Bengaluru",
      category: "Corporate Office",
    },
    {
      id: 7,
      slug: "movie-lounge-crossroad-mall-dehradun-expansion",
      image: "/Interiors/MovieLounge/movie-lounge-cinema-expansion-main-dehradun.avif",
      title: "Movie Lounge Cinema Expansion ",
      location: "Dehradun, Uttarakhand",
      category: "Cinema",
    },
    {
      id: 8,
      slug: "batra-hospital-medical-research-centre-cathlab-renovation",
      image: "/Architecture/BatraHospital/batra-hospital-cathlab-main-delhi.avif",
      title: "Batra Hospital & Medical Research Centre – Cathlab",
      location: "New Delhi",
      category: "Hospitals",
    },
    {
      id: 9,
      slug: "lenskart-Office-interior-design",
      image: "/Interiors/Lenskart/lenskart-store-main.avif",
      title: "Lenskart Store – Retail Interior Design",
      location: "Gurugram, Haryana",
      category: "Corporate Office",
    },
    {
      id: 10,
      slug: "mayom-hospital-interior-design",
      image: "/Interiors/MayomHospital/gita-gyan-main.avif",
      title: "Mayom Hospital – Interior Design",
      location: "Gurugram, Haryana",
      category: "Hospitals",
    },
    {
      id: 11,
      slug: "club-house-sirsa-recreational-space",
      image: "/Architecture/ClubHouseSirsa/club-house-sirsa-main.avif",
      title: "Club House – Sirsa",
      location: "Sirsa, Haryana",
      category: "Hospitality",
    },
    {
      id: 12,
      slug: "met-reliance-interior-design",
      image: "/Interiors/METReliance/main-hall.avif",
      title: "MET Reliance -Jhajjar",
      location: "Jhajjar, Haryana",
      category: "Hospitality",
      scope: "Interior Design & Execution",
    },
    {
      id: 13,
      slug: "anand-group-hauz-khas-interior-design",
      image: "/Interiors/AnandGroup/anand-group-main-hall.avif",
      title: "Anand Group",
      location: "Hauz Khas, New Delhi",
      category: "Commercial Interior",
    },
    {
      id: 14,
      slug: "medanta-foundation-interior-design",
      image: "/Interiors/MedantaFoundation/reception-main.avif",
      title: "Gita Gyan Sansthanam - Medanta Foundation",
      location: " KDB Road Kurukshetra, Haryana",
      category: "Hospitals",
    },
    {
      id: 15,
      slug: "sargam-theatre-interior-design",
      image: "/Architecture/Sargam/sargam-theatre-interior-auditorium-chandpur.avif",
      title: "Sargam Theatre",
      location: "Chandpur, Bijnor, Uttar Pradesh",
      category: "Cinema",
    },
    {
      id: 16,
      slug: "medanta-diagnostics-ranchi-interior-design",
      image: "/Interiors/MedantaDiagnosticsRanchi/reception-area.avif",
      title: "Medanta - Diagnostics",
      location: "Ranchi, Jharkhand",
      category: "Hospitals",
    },
    {
      id: 17,
      slug: "medanta-medicity-auditorium-interior-design",
      image: "/Interiors/MedantaAuditorium/main-auditorium.avif",
      title: "Medanta Medicity - Auditorium",
      location: "Gurugram, Haryana",
      category: "Hospitals",
    },
    {
      id: 18,
      slug: "medanta-medicity-radiology-interior-design",
      image: "/Interiors/MedantaRadiology/main-workstation.avif",
      title: "Medanta Medicity - Radiology",
      location: "Gurugram, Haryana",
      category: "Hospitals",
    },
    {
      id: 19,
      slug: "cinepolish-conference-room-interior-design",
      image: "/Interiors/cinepolish/image-1.avif",
      title: "Cinepolish - Conference Room",
      location: "India",
      category: "Corporate Office",
    },
    {
      id: 20,
      slug: "startek-bhopal-office-renovation",
      image: "/Interiors/StartekBhopal/glass-partition-office.avif",
      title: "Startek Bhopal - Office Renovation",
      location: "Bhopal, India",
      category: "Corporate Office",
    },
    {
      id: 21,
      slug: "medanta-blood-lab-diagnostic-center",

      image: "/Interiors/MedantaLabs/main-exterior.avif",

      title: "Medanta Blood Lab – Diagnostic Center",

      location: "Ranchi, Jharkhand",

      category: "Hospitals",
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="project-page">
      {/* Hero Section */}
      <section className="interior-hero">
        <img
          src="/Interiors/cover.avif"
          alt="Interior Design"
          className="interior-hero-image"
          loading="lazy"
          decoding="async" />

        <div className="interior-hero-overlay"></div>

        <div className="interior-hero-content">
          <h1>INTERIORS</h1>
          <p>
            <b>URBAN iNFiLL</b> creates thoughtful interior spaces that blend
            aesthetics, functionality, and comfort for modern living and work
            environments.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="interior-projects">
        <p className="mini-title">Featured Interiors Projects</p>
        <h2>Our Projects</h2>
        <p className="section-text">
          Discover elegant interior design projects crafted to deliver
          sophisticated spatial experiences.
        </p>

        <div className="filter-tabs">
          {filterCategories.map((category) => (
            <Link
              key={category}
              to={getCategoryLink(category)}
              className={`filter-tab ${activeFilter === category ? "active" : ""}`}
            >
              {category}
            </Link>
          ))}
        </div>

        {activeFilter === "Residential Luxury Interiors" ? (
          <div className="residential-luxury-section">
            <div className="residential-luxury-image">
              <img src="/UIHomes/luxury-homes-hero.png" alt="Residential Luxury Interiors" loading="lazy" decoding="async" />
            </div>
            <div className="residential-luxury-content">
              <h2>RESIDENTIAL<br />LUXURY<br />INTERIORS</h2>
              <p>Explore the residential and lifestyle collection in a full-width page-style presentation.</p>
              <Link to="/luxury-homes" className="see-full-page">SEE FULL PAGE</Link>
            </div>
          </div>
        ) : activeFilter === "Archives" ? (
          <div className="archives-section">
            <div className="archives-image">
              <img src="/Archives/food-court-view-1.avif" alt="Archives" loading="lazy" decoding="async" />
            </div>
            <div className="archives-content">
              <h2>ARCHIVES</h2>
              <p>Explore our archive collection featuring past design concepts and project visualizations.</p>
              <Link to="/archives" className="see-full-page">SEE FULL PAGE</Link>
            </div>
          </div>
        ) : (
          <div className="interior-grid">
            {filteredProjects.map((project) => (
              <Link
                to={`/interiors/${project.slug}`}
                className="interior-card-link"
                key={project.id}
              >
                <div className="interior-card">
                  <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                  <div className="interior-card-body">
                    <h3>{project.title}</h3>
                    <p>{project.location}</p>
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Interior;
