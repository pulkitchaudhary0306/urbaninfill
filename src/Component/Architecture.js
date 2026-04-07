import { Link } from "react-router-dom";
import "./Architecture.css";
import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";

function Architecture() {
  usePageReveal([
    ".project-page .arch-hero-content > *",
    ".project-page .arch-most-viewed > p",
    ".project-page .arch-most-viewed > h2",
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
    ".project-page .arch-card",
  ]);

  const projects = [
    {
      id: 1,
      slug: "aravali-resort-hospitality-design-india",
      image: "/Architecture/Aravali 1.webp",
      title: "The Aravali Resort",
      location: "Rishikesh",
    },
    {
      id: 2,
      slug: "ssargam-cinema-multiplex-design-india",
      image: "/Architecture/Sargam 1.webp",
      title: "Sargam Theatre",
      location: "Chandpur, Bijnor, Uttar Pradesh",
    },
    {
      id: 3,
      slug: "moonson-mall-hospitality-retail-design-sirsa",
      image: "/Architecture/Sirsa 1.webp",
      title: "Monsoon Mall",
      location: "Sirsa, Haryana",
    },
    {
      id: 4,
      slug: "annanta-hospital-healthcare-design-india",
      image: "/Architecture/Ananta/Image 3.webp",
      title: "Ananta Hospital",
      location: "Gurgaon, Haryana",
    },
  ];

  return (
    <div className="project-page">
<section className="arch-hero">
        <img
          src="/Architecture/Cover.webp"
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

        <div className="arch-card-grid">
          {projects.map((project) => (
            <Link
              to={`/projects/${project.slug}`}
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
</div>
  );
}

export default Architecture;

