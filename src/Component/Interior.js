import React, { useState } from 'react';
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
      image: "/Interiors/United/united-airlines-premium-office-main-delhi.webp",
      title: "United Airlines Office",
      location: "Terminal 3, IGI Airport, New Delhi",
      category: "Corporate Office",
    },
    {
      id: 2,
      slug: "urban-canteen-cafe-interior-bhubaneswar",
      image: "/Interiors/Urban/urban-canteen-restaurant-main-bhubaneswar.webp",
      title: "The Urban Canteen",
      location: "Bhubaneswar, Odisha",
      category: "Hospitality",
    },
    {
      id: 3,
      slug: "restaurant-club-design-bbi-bhubaneswar",
      image: "/Interiors/BBI/bbi-interior-lighting-design-bhubaneswar.webp",
      title: "BBi Booze Buzz Inhouse",
      location: "Chandrasekharpur, Bhubaneswar, Odisha",
      category: "Hospitality",
    },
    {
      id: 4,
      slug: "cineport-svh-5-screen-multiplex-gurgaon", 
      image: "/Interiors/Cineport/cineport-cinema-seating-arrangement-gurgaon.webp",
      title: "Cineport 5-Screen Multiplex",
      location: "Gurgaon, Haryana",
      category: "Cinema",
      scope: "Architecture & Interior Design", // Added for extra detail on cards
    },
    {
      id: 5,
      slug: "samsung-office-interior-design-dehradun",
      image: "/Interiors/Samsung/samsung-corporate-office-main-dehradun.webp",
      title: "Samsung Corporate Office",
      location: "Dehradun Uttrakhand",
      category: "Corporate Office",
    },
    {
      id: 6,
      slug: "urban-company-it-head-office-interior-bangalore",
      image: "/Interiors/Ucompany/urban-company-corporate-office-main-bengaluru.webp",
      title: "Urban Company Corporate Office",
      location: "Bengaluru",
      category: "Corporate Office",
    },
  {
      id: 7,
      slug: "movie-lounge-crossroad-mall-dehradun-expansion",
      image: "/Interiors/MovieLounge/movie-lounge-cinema-expansion-main-dehradun.webp",
      title: "Movie Lounge Cinema Expansion ",
      location: "Dehradun, Uttarakhand",
      category: "Cinema",
    },   
  {
      id: 8,
      slug: "batra-hospital-medical-research-centre-cathlab-renovation",
      image: "/Architecture/BatraHospital/batra-hospital-cathlab-main-delhi.webp",
      title: "Batra Hospital & Medical Research Centre – Cathlab",
      location: "New Delhi",
      category: "Hospitals",
    },
  {
  id: 9,
  slug: "lenskart-Office-interior-design",
  image: "/Interiors/Lenskart/lenskart-store-main.webp",
  title: "Lenskart Store – Retail Interior Design",
  location: "Gurugram, Haryana",
  category: "Corporate Office",
},
{
  id: 10,
  slug: "mayom-hospital-interior-design",
  image: "/Interiors/MayomHospital/gita-gyan-main.webp",
  title: "Mayom Hospital – Interior Design",
  location: "Gurugram, Haryana",
  category: "Hospitals",
},
{
  id: 11,
  slug: "club-house-sirsa-recreational-space",
  image: "/Architecture/ClubHouseSirsa/club-house-sirsa-main.webp",
  title: "Club House – Sirsa",
  location: "Sirsa, Haryana",
  category: "Hospitality",
},
{
  id: 12,
  slug: "met-reliance-interior-design",
  image: "/Interiors/METReliance/main-hall.webp",
  title: "MET Reliance -Jhajjar",
  location: "Jhajjar, Haryana",
  category: "Hospitality",
  scope: "Interior Design & Execution",
},
];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div>
<section className="interior-hero">
        <img
          src="/Interiors/cover.webp"
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
              <img src="/UIHomes/luxury-living-room-interior-design.webp" alt="Residential Luxury Interiors" loading="lazy" decoding="async" />
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
              <img src="/Archives/food-court-view-1.webp" alt="Archives" loading="lazy" decoding="async" />
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
                to={`/InteriorsProjects/${project.slug}`}
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

