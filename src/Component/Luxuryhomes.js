import { Link } from "react-router-dom";
import "../HeaderFooter/Header.css";
import "./Luxuryhomes.css";
import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";

function Luxuryhomes() {

  usePageReveal([
    ".project-page .luxury-hero-content > *",
    ".project-page .luxury-most-viewed > p",
    ".project-page .luxury-most-viewed > h2",
    ".filter-tabs",
    ".project-page .luxury-card",
    ".project-page .footer__col",
    ".project-page .footer__line",
    ".project-page .footer__copy",
  ]);

  useScrollVisibility([
    ".project-page .luxury-hero-image",
    ".project-page .luxury-hero-content",
    ".project-page .luxury-most-viewed > p",
    ".project-page .luxury-most-viewed > h2",
    ".project-page .luxury-most-viewed > .section-text",
    ".project-page .luxury-card",
  ]);

  const luxuryHomesProjects = [
    {
  id: 15,
  slug: "adani-oyster-sector-102-dwarka-expressway",

  image:
    "/luxuryhomes/adani-oyster-sector-102/luxury-living-room-interior-design.webp",

  title: "Adani Oyster Sector 102",

  location: "Gurgaon, India",

  category: "Luxury Residence",
},
    {
  id: 14,
  slug: "parx-laureate-sector-108-noida-luxury-residence",

  image:
    "/luxuryhomes/parx-laureate-sector-108-noida/luxury-living-dining-interior-design.webp",

  title: "Parx Laureate Sector 108",

  location: "Noida, India",

  category: "Luxury Residence",
},
  
    {
  id: 13,
  slug: "godrej-apartment-delhi-luxury-residence",
  image: "/luxuryhomes/godrej-apartment-delhi/designer-modular-kitchen-design.webp",

  title: "Godrej Summit Apartment",

  location: "Delhi, India",

  category: "Luxury Residence",
},
    {
  id: 12,
  slug: "ireo-uptown-premium-residence",
  image: "/luxuryhomes/ireo-uptown/luxury-bedroom-interior-design.webp",

  title: "Ireo Uptown Premium Residence",

  location: "Gurgaon, India",

  category: "Premium Residence",
},
    {
  id: 11,
  slug: "dlf-sky-court-premium-residence",
  image: "/luxuryhomes/dlf-sky-court/luxury-bedroom-interior-design.webp",

  title: "DLF Sky Court Luxury Residence",

  location: "Gurgaon, India",

  category: "Premium Residence",
},{
  id: 10,
  slug: "magnolia-apartment-luxury-residence",
  image: "/luxuryhomes/magnolia-apartment-gurgaon/luxury-master-bedroom-interior-design.webp",

  title: "Magnolia Apartment ",

  location: "Gurgaon, India",

  category: "Luxury Residence",
},
{
  id: 9,
  slug: "DLF-Apartment-modern-bedroom-luxury-residence",
  image: "/luxuryhomes/DLF Apartment - Gurgaon/wooden-bedroom-interior-design.webp",

  title: "DLF Apartment - Gurgaon",

  location: "Gurgaon, India",

  category: "Luxury Residence",
},

   {
  id: 2,
  slug: "nirman-vihar-d321-luxury-residence",
  image: "/luxuryhomes/nirman-vihar-d321/modern-luxury-home-exterior-design-delhi.webp",
  title: "Luxury Residence Nirman Vihar ",
  location: "Delhi, India",
  category: "Luxury Residence",
},
   {
  id: 3,
  slug: "dr-arpit-jain-luxury-residence",
  image: "/luxuryhomes/dr-arpit-jain/master-bedroom-modern-interior-design.webp",
  title: "Dr. Arpit Jain Residence",
  location: "Delhi, India",
  category: "Luxury Residence",
},
{
  id: 4,
  slug: "mr-h-s-bhatiya-luxury-residence",
  image:"/luxuryhomes/mr-h-s-bhatiya/contemporary-living-dining-interior.webp",
  title: "Luxury Residence ",
  location: "Gurgaon, India",
  category: "Luxury Residence",
},
{
  id: 5,
  slug: "mr-dinesh-modern-residence",
  image: "/luxuryhomes/mr-dinesh/modern-residence-front-elevation.webp",
  title: "Luxury Residence ",
  location: "Gurgaon, India",
  category: "Modern Residence",
},
{
  id: 6,
  slug: "mr-kaul-luxury-residence",
  image: "/luxuryhomes/mr-kaul/luxury-living-room-interior-design.webp",

  title: "Luxury Apartment- Gurgaon",

  location: "Gurgaon, India",

  category: "Luxury Interior",
}
,{
  id: 7,
  slug: "villa-no-22-23-luxury-residence",
  image:  "/luxuryhomes/villa-no-22-23/luxury-bedroom-interior-design.webp",
  title: " Luxury Villa- Gurgaon",
  location: "Gurgaon, India",
  category: "Luxury Villa",
},
{
  id: 8,

  slug: "mr-baljeet-singh-dlf-luxury-residence",

  image:
    "/luxuryhomes/mr-baljeet-singh-dlf/modern-bedroom-study-interior-design.webp",

  title: " DLF Residence",

  location: "Gurgaon, India",

  category: "Luxury Interior",
},
  ];

  const filteredProjects = luxuryHomesProjects;

  return (
    <div className="project-page luxury-homes-page">
      <section className="luxury-hero">
        <img
          src="/luxuryhomes/cover.webp"
          alt="Luxury home interior"
          className="luxury-hero-image"
          loading="lazy"
          decoding="async"
        />
        <div className="luxury-hero-overlay"></div>

        <div className="luxury-hero-content">
          <h1>LUXURY HOMES</h1>
          <p>
            <b>URBAN iNFiLL</b> showcases a curated collection of premium luxury
            homes, villas, penthouses, and estates built for refined living.
          </p>
        </div>
      </section>

      <section className="luxury-most-viewed">
        <p className="mini-title">Signature Residences</p>
        <h2> Our Projects</h2>
        <p className="section-text">
          Discover exceptional luxury homes crafted with elegant finishes,
          expansive lifestyles, and world-class amenities.
        </p>

        <div className="luxury-card-grid">
          {filteredProjects.map((project) => (
            <Link
              to={`/luxury-home-projects/${project.slug}`}
              className="luxury-card-link"
              key={project.id}
            >
              <div className="luxury-card">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                />

                <div className="luxury-card-body">
                  <h3>{project.title}</h3>
                  <p className="luxury-location">{project.location}</p>
             
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Luxuryhomes;
