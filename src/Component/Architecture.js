import { useState } from "react";
import { Link } from "react-router-dom";
import "../HeaderFooter/Header.css";
import "./Architecture.css";
import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";

function Architecture() {
  const [activeFilter, setActiveFilter] = useState("All");

  usePageReveal([
    ".project-page .arch-hero-content > *",
    ".project-page .arch-most-viewed > p",
    ".project-page .arch-most-viewed > h2",
    ".filter-tabs",
    ".project-page .arch-card",
    ".project-page .footer__col",
    ".project-page .footer__line",
    ".project-page .footer__copy",
  ]);

  useScrollVisibility([
    ".project-page .arch-hero-image",
    ".project-page .arch-hero-content",
    ".project-page .arch-most-viewed > p",
    ".project-page .arch-most-viewed > h2",
    ".project-page .arch-most-viewed > .section-text",
    ".filter-tabs",
    ".project-page .arch-card",
  ]);

  const filterCategories = [
    "All",
    "Commercial",
    "Healthcare",
    "Hospitality",
    "Cinema",
    "Residential",
  ];

  const ArchitectureProjects = [
    {
      id: 1,
      slug: "aravali-resort-hospitality-design-india",
      image: "/Architecture/Aravali/aravali-resort-main-exterior-rishikesh.webp",
      title: "The Aravali Resort",
      location: "Rishikesh",
      category: "Hospitality",
    },
    {
      id: 2,
      slug: "ssargam-cinema-multiplex-design-india",
      image: "/Architecture/Sargam/sargam-theatre-main-exterior-chandpur.webp",
      title: "Sargam Theatre",
      location: "Chandpur, Bijnor, Uttar Pradesh",
      category: "Cinema",
    },
    {
      id: 3,
      slug: "moonson-mall-hospitality-retail-design-sirsa",
      image: "/Architecture/Sirsa/monsoon-mall-commercial-exterior-sirsa.webp",
      title: "Monsoon Mall",
      location: "Sirsa, Haryana",
      category: "Commercial",
    },
    {
      id: 4,
      slug: "annanta-hospital-healthcare-design-india",
      image: "/Architecture/Ananta/ananta-hospital-medical-facilities-gurugram.webp",
      title: "Ananta Hospital",
      location: "Gurgaon, Haryana",
      category: "Healthcare",
    },
    {
      id: 5,
      slug: "movie-lounge-crossroad-mall-dehradun-expansion",
      image: "/Interiors/MovieLounge/movie-lounge-cinema-expansion-main-dehradun.webp",
      title: "Movie Lounge Cinema Expansion ",
      location: "Dehradun, Uttarakhand",
      category: "Cinema",
    },
    {
      id: 6,
      slug: "batra-hospital-medical-research-centre-cathlab-renovation",
      image: "/Architecture/BatraHospital/batra-hospital-cathlab-main-delhi.webp",
      title: "Batra Hospital & Medical Research Centre – Cathlab",
      location: "New Delhi",
      category: "Healthcare",
    },
    {
  id: 7,
  slug: "darbaripur-modern-facade-design",
  image: "/Architecture/DarbaripurHouse/front-angle.webp",
  title: "Modern Facade Design – Darbaripur Residence",
  location: "Gurugram, Haryana",
  category: "Residential",
},
{
  id: 8,
  slug: "club-house-sirsa-recreational-space",
  image: "/Architecture/ClubHouseSirsa/club-house-sirsa-main.webp",
  title: "Club House Sirsa",
  location: "Sirsa",
  category: "Hospitality",
},
  ];

  const filteredProjects = activeFilter === "All" 
    ? ArchitectureProjects 
    : ArchitectureProjects.filter(p => p.category === activeFilter);

  return (
    <div className="project-page">
<section className="arch-hero">
        <img
          src="/Architecture/cover.webp"
          alt="Modern architecture house"
          className="arch-hero-image"
          loading="lazy"
          decoding="async"
        />
        <div className="arch-hero-overlay"></div>

        <div className="arch-hero-content">
          <h1>ARCHITECTURE</h1>
          <p>
            <b>URBAN iNFiLL </b>
            helps you explore premium architecture, residences, villas, and
            commercial design opportunities with clarity and confidence.
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

        <div className="arch-card-grid">
          {filteredProjects.map((project) => (
            <Link
              to={`/ArchitectureProjects/${project.slug}`}
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
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
</div>
  );
}

export default Architecture;

