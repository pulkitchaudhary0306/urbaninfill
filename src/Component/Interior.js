import { useState } from "react";
import { Link } from "react-router-dom";
import "../HeaderFooter/Header.css";
import "./Interior.css";
import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";

function Interior() {
  const [activeFilter, setActiveFilter] = useState("All");

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
    "Hospitals",
    "Hospitality",
    "Cinema",
    "Residential Luxury Interiors",
    "Archives",
  ];

  const projects = [
    {
      id: 1,
      slug: "united-airlines-office-interior-t3-delhi",
      image: "/Interiors/United/Image 1.webp",
      title: "United Airlines Office",
      location: "Terminal 3, IGI Airport, New Delhi",
      category: "Corporate Office",
    },
    {
      id: 2,
      slug: "urban-canteen-cafe-interior-bhubaneswar",
      image: "/Interiors/Urban/Image 1.webp",
      title: "The Urban Canteen",
      location: "Bhubaneswar, Odisha",
      category: "Hospitality",
    },
    {
      id: 3,
      slug: "restaurant-club-design-bbi-bhubaneswar",
      image: "/Interiors/BBI/Image 6.webp",
      title: "BBi Booze Buzz Inhouse",
      location: "Chandrasekharpur, Bhubaneswar, Odisha",
      category: "Hospitality",
    },
    {
      id: 4,
      slug: "cineport-svh-cinema-interior-design– Gurgaon",
      image: "/Interiors/Cineport/Image 4.webp",
      title: "Cineport 5-Screen Multiplex ",
      location: "Gurgaon",
      category: "Cinema",
    },
    {
      id: 5,
      slug: "samsung-office-interior-design-dehradun",
      image: "/Interiors/Samsung/Image 1.webp",
      title: "Samsung Corporate Office",
      location: "Dehradun Uttrakhand",
      category: "Corporate Office",
    },
    {
      id: 6,
      slug: "urban-company-it-head-office-interior-bangalore",
      image: "/Interiors/Ucompany/Image 1.webp",
      title: "Urban Company Corporate Office",
      location: "Bengaluru",
      category: "Corporate Office",
    },  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div>
<section className="interior-hero">
        <img
          src="/Interiors/Cover.webp"
          alt="Interior Design"
          className="interior-hero-image"
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

      <section className="interior-projects">
        <p className="mini-title">Featured Interiors Projects</p>
        <h2>Our Projects</h2>
        <p className="section-text">
          Discover elegant interior design projects crafted to deliver
          sophisticated spatial experiences.
        </p>

        <div className="filter-tabs">
          {filterCategories.map((category) => (
            <button
              key={category}
              className={`filter-tab ${activeFilter === category ? "active" : ""}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {activeFilter === "Residential Luxury Interiors" ? (
          <div className="residential-luxury-section">
            <div className="residential-luxury-image">
              <img src="/UIHomes/Image 1.webp" alt="Residential Luxury Interiors" loading="lazy" decoding="async" />
            </div>
            <div className="residential-luxury-content">
              <h2>RESIDENTIAL<br/>LUXURY<br/>INTERIORS</h2>
              <p>Explore the residential and lifestyle collection in a full-width page-style presentation.</p>
              <Link to="/uihomes" className="see-full-page">SEE FULL PAGE</Link>
            </div>
          </div>
        ) : activeFilter === "Archives" ? (
          <div className="archives-section">
            <div className="archives-image">
              <img src="/Archives/FOOD COURT VIEW 1.webp" alt="Archives" loading="lazy" decoding="async" />
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
                to={`/Interiors/${project.slug}`}
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

