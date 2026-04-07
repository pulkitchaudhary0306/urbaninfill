import { Link } from "react-router-dom";
import "./Interior.css";
import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";

function Interior() {
  usePageReveal([
    ".interior-hero-content > *",
    ".interior-projects > p",
    ".interior-projects > h2",
    ".interior-card",
    ".site-footer .site-footer__col",
    ".site-footer .site-footer__line",
    ".site-footer .site-footer__copy",
  ]);

  useScrollVisibility([
    ".interior-hero-image",
    ".interior-hero-content",
    ".interior-projects > p",
    ".interior-projects > h2",
    ".interior-projects > .section-text",
    ".interior-card",
  ]);

  const projects = [
    {
      id: 1,
      slug: "united-airlines-office-interior-t3-delhi",
      image: "/Interiors/United/Image 1.webp",
      title: "United Airlines Office",
      location: "Terminal 3, IGI Airport, New Delhi",
    },
    {
      id: 2,
      slug: "urban-canteen-cafe-interior-bhubaneswar",
      image: "/Interiors/Urban/Image 1.webp",
      title: "The Urban Canteen ",
      location: "Bhubaneswar, Odisha ",
    },
    {
      id: 3,
      slug: "restaurant-club-design-bbi-bhubaneswar",
      image: "/Interiors/BBI/Image 6.webp",
      title: "BBi Booze Buzz Inhouse",
      location: "Chandrasekharpur, Bhubaneswar, Odisha",
    },
    {
      id: 4,
      slug: "cineport-svh-cinema-interior-design– Gurgaon",
      image: "/Interiors/Cineport/Image 4.webp",
      title: "Cineport 5-Screen Multiplex ",
      location: "Gurgaon",
    },
    {
      id: 5,
      slug: "samsung-office-interior-design-dehradun",
      image: "/Interiors/Samsung/Image 1.webp",
      title: "Samsung Corporate Office ",
      location: "Dehradun Uttrakhand",
    },
    {
      id: 6,
      slug: "urban-company-it-head-office-interior-bangalore",
      image: "/Interiors/Ucompany/Image 1.webp",
      title: "Urban Company Corporate Office ",
      location: "Bengaluru",
    },
  ];

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
        <p className="mini-title">Featured Interiors</p>
        <h2>Our Interior Projects</h2>
        <p className="section-text">
          Discover elegant interior design projects crafted to deliver
          sophisticated spatial experiences.
        </p>

        <div className="interior-grid">
          {projects.map((project) => (
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
</div>
  );
}

export default Interior;

