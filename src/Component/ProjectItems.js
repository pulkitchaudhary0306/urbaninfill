import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin, } from "@fortawesome/free-brands-svg-icons";

import "./ProjectItems.css";

function ProjectItems() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      tag: "Completed Project",
      title: "The Aravali Resort – Rishikesh",
      subtitle: "Architectural & Interior Design by Urban Infill",
      mainImage: "/Architecture/Aravali/Image 1.webp",
      sideImages: [
        "/Architecture/Aravali/Image 2.webp",
        "/Architecture/Aravali/Image 3.webp",
        "/Architecture/Aravali/Image 4.webp",
      ],
      galleryImages: [
        "/Architecture/Aravali/Image 5.webp",
        "/Architecture/Aravali/Image 6.webp",
        "/Architecture/Aravali/Image 7.webp",
        "/Architecture/Aravali/Image 8.webp",
      ],
      info: {
        project: "The Aravali Resort",
        location: "Rishikesh, Uttarakhand",
        scope: "Architecture & Interior Design",
        firm: "Urban Infill",
      },
      overview: [
        "Located in the tranquil town of Rishikesh, The Aravali Resort is an exquisite blend of luxury, nature, and wellness. Designed by Urban Infill, this resort offers a rejuvenating retreat for travelers seeking both peace and adventure.",
        "Set against the breathtaking backdrop of the surrounding hills, the resort merges contemporary design with traditional Indian aesthetics, creating a harmonious environment that celebrates the beauty of Rishikesh.",
      ],
      locationText: "Rishikesh, Uttarakhand.",
      designConcept: [
        "Urban Infill’s design philosophy for The Aravali Resort focuses on sustainable architecture and mindful interior design, seamlessly blending modern luxury with the region’s natural beauty.",
        "The architecture is characterized by minimalist resort design, expansive open spaces, natural light, and unobstructed views of the surrounding hills and landscape.",
        "A careful selection of local materials such as stone, wood, and clay tiles ensures that the resort integrates harmoniously with the site while promoting environmental responsibility.",
      ],
      highlights: [
        {
          title: "Sustainable Architecture",
          text: "The resort emphasizes eco-friendly design by using sustainable materials like reclaimed wood, natural stone, and energy-efficient systems to reduce environmental impact.",
        },
        {
          title: "Vernacular Elements",
          text: "Traditional Indian architecture influences the design, incorporating locally sourced materials and craftsmanship that highlight the region’s cultural heritage.",
        },
        {
          title: "Open, Flowing Spaces",
          text: "Large windows, open-plan layouts, and visual continuity create a seamless connection between the interior spaces and the breathtaking natural surroundings.",
        },
      ],
      designIntent:
        "The Aravali Resort is designed to offer more than just a luxurious stay—it provides an immersive, transformative experience that blends the tranquility of nature with modern comforts. The architecture and interior design are rooted in sustainability and mindfulness, creating an escape from daily stress while maintaining a deep respect for the environment. Every element, from the use of natural materials to the spatial organization of the resort, is carefully curated to enhance relaxation, rejuvenation, and connection.",
      conclusion:
        "The Aravali Resort is not just a getaway—it is an immersive experience that embraces nature, sustainability, and wellness. With Urban Infill’s design vision, the resort offers a unique balance of luxury, tradition, and ecology. It becomes a destination for those seeking to reconnect with nature, enjoy spiritual calm, or simply experience the breathtaking beauty of Rishikesh in a thoughtfully designed environment.",
    },

    {
      id: 2,
      tag: "Completed Project",
      title: "Sargam Theatre, Chandpur ",
      subtitle: "Architecture & Interior Design by Urban Infill",
      mainImage: "/Architecture/Sargam/Image 1.webp",
      sideImages: [
        "/Architecture/Sargam/Image 2.webp",
        "/Architecture/Sargam/Image 3.webp",
        "/Architecture/Sargam/Image 4.webp",
      ],
      galleryImages: [

        "/Architecture/Sargam/Image 5.webp",
        "/Architecture/Sargam/Image 6.webp",
        "/Architecture/Sargam/Image 7.webp",
      ],
      info: {
        project: "Sargam Theatre",
        location: "Chandpur, Bijnor, Uttar Pradesh",
        scope: "Architecture & Interior Design",
        firm: "Urban Infill",
      },
      overview: [
        "Sargam Theatre in Chandpur, Bijnor, Uttar Pradesh, has undergone a remarkable transformation, evolving from a historic single-screen cinema into a modern two-screen multiplex.",
        "This redevelopment reflects the principles of urban infill design, where underutilized urban spaces are revitalized to meet contemporary needs while preserving the area’s cultural heritage and identity.",
      ],
      locationText: "Chandpur, Bijnor, Uttar Pradesh.",
      designConcept: [
        "The redesign of Sargam Theatre showcases an urban infill approach, seamlessly integrating modern architectural interventions into the existing urban fabric of Chandpur.",
        "By repurposing the historic cinema structure, the project preserves a recognized cultural landmark while upgrading it into a modern entertainment destination for the local community.",
        "The interior design focuses on delivering a contemporary cinematic experience through premium finishes, controlled lighting, modern circulation planning, and immersive visual character.",
      ],
      highlights: [
        {
          title: "Urban Infill Redevelopment",
          text: "The project revitalizes an existing cinema property within the town, proving how adaptive reuse and infill design can strengthen cultural and urban continuity.",
        },
        {
          title: "Modern Cinematic Interiors",
          text: "The interiors feature dramatic lighting, polished finishes, premium concession zones, and carefully designed public areas that create a strong multiplex identity.",
        },
        {
          title: "Immersive Viewing Experience",
          text: "Advanced projection systems, acoustic treatment, ergonomic seating, and thoughtful auditorium planning together elevate the overall movie-going experience.",
        },
      ],
      designIntent:
        "The design intent behind Sargam Theatre was to create more than a multiplex; it was to establish a renewed cultural hub for Chandpur. The project combines modern entertainment infrastructure with a respect for the theatre’s historic presence, ensuring that the space remains socially relevant, visually engaging, and functionally efficient. Every intervention, from public foyer design to auditorium detailing, was aimed at creating comfort, excitement, and a memorable cinematic atmosphere.",
      conclusion:
        "The transformation of Sargam Theatre demonstrates how urban infill design and thoughtful interior planning can revive a local landmark for a new generation. By turning a historic single-screen cinema into a contemporary two-screen multiplex, Urban Infill has helped create a dynamic cultural destination that respects the past while embracing the future of entertainment in Chandpur.",
    },
    {
      id: 3,
      tag: "Ongoing Project",
      title: "Monsoon Mall – Sirsa",
      subtitle: "Architecture & Interior Design by Urban Infill",
      mainImage: "/Architecture/Sirsa/Image 1.webp",
      sideImages: [
        "/Architecture/Sirsa/Image 2.webp",
        "/Architecture/Sirsa/Image 3.webp",
        "/Architecture/Sirsa/Image 4.webp",
      ],
      galleryImages: [
        "/Architecture/Sirsa/Image 5.webp",
        "/Architecture/Sirsa/Image 6.webp",
        "/Architecture/Sirsa/Image 7.webp",
        "/Architecture/Sirsa/Image 8.webp",
      ],
      info: {
        project: "Monsoon Mall",
        location: "Sirsa, Haryana",
        scope: "Architecture & Interior Design",
        area: "1,00,000+ sq ft",
        client: "Monsoon Buildwell Private Limited",
        status: "Ongoing",
        firm: "Urban Infill",
      },

      overview: [
        "Located at the highway entry into Sirsa, the Monsoon Mall project is envisioned as a contemporary commercial landmark that defines the city’s arrival experience. The project aims to create a strong architectural identity that is visible from a distance and stands out prominently along the highway corridor.",
        "Urban Infill was commissioned to develop the architectural façade and interior planning, transforming an already constructed framework into a modern retail and entertainment destination. The design responds to evolving mall typologies in emerging urban centers while establishing a bold and recognizable presence.",
      ],

      locationText: "Sirsa, Haryana.",

      designConcept: [
        "The design approach for Monsoon Mall focuses on creating a fluid, continuous architectural expression that responds to its 360-degree visibility. Instead of treating each elevation independently, the façade is conceived as a unified form that wraps the structure and enhances its visual identity from all directions.",
        "Modern materials and integrated façade lighting play a key role in shaping the building’s contemporary character. The design ensures that the mall remains visually dynamic throughout the day and transforms into a vibrant landmark at night.",
        "Urban Infill collaborated with Jaquar Lighting to develop a cohesive lighting strategy that highlights architectural elements while maintaining energy efficiency. The interplay of light and form enhances the building’s presence along the highway and strengthens its role as an urban marker.",
      ],

      highlights: [
        {
          title: "Adaptive Structural Intervention",
          text: "The project required working within an already completed structural framework, limiting major structural modifications. The design strategically adapts the existing building while enhancing both functionality and visual identity.",
        },
        {
          title: "Multiplex Integration",
          text: "A 3-screen multiplex cinema is introduced within the upper floors, creating a strong entertainment anchor. Structural systems such as MS framing, trusses, and PUF roofing were incorporated to accommodate additional loads and spatial requirements.",
        },
        {
          title: "Landmark Façade Design",
          text: "A continuous and fluid façade design ensures visibility from all sides, creating a bold architectural identity. Dynamic lighting further enhances the building’s presence, especially during nighttime.",
        },
        {
          title: "Terrace-Level Brewery Concept",
          text: "A rooftop hospitality zone with a proposed brewery and canopy structure creates an open-air social destination, adding a unique experiential layer to the mall.",
        },
      ],

      designIntent:
        "The design intent of Monsoon Mall is to transform an existing structure into a visually striking and functionally efficient commercial destination. By reimagining the façade and optimizing internal planning, the project creates a modern retail environment that integrates shopping, entertainment, and social experiences. The design emphasizes visibility, adaptability, and user experience, ensuring the development becomes a key urban landmark while maintaining structural feasibility and long-term sustainability.",

      conclusion:
        "Monsoon Mall represents a significant opportunity to redefine the commercial landscape of Sirsa. With its strong architectural identity, integrated entertainment zones, and contemporary design approach, the project is positioned to become a major retail and social hub. Urban Infill’s design transforms the development into a dynamic destination that enhances the city’s gateway experience while contributing to its evolving urban character.",
    },
    {
      id: 4,
      tag: "Completed Project",
      title: "Ananta Hospital – Gurugram",
      subtitle: "Architecture & Interior Design by Urban Infill",
      mainImage: "/Architecture/Ananta/Image 1.webp",
      sideImages: [
        "/Architecture/Ananta/Image 2.webp",
        "/Architecture/Ananta/Image 3.webp",
        "/Architecture/Ananta/Image 4.webp",
      ],
      galleryImages: [
        "/Architecture/Ananta/Image 5.webp",
        "/Architecture/Ananta/Image 6.webp",
        "/Architecture/Ananta/Image 7.webp",
        "/Architecture/Ananta/Image 8.webp",
      ],

      info: {
        project: "Ananta Hospital",
        location: "Sector 70A, Gurugram, Haryana",
        scope: "Architecture + Interior Design",
        area: "50,000+ sq. ft.",
        client: "Mr. Ravinder Mohan",
        status: "Completed (Phase 1: 2019 | Phase 2: 2022)",
        firm: "Urban Infill",
      },

      overview: [
        "Ananta Hospital was envisioned as a compact, multi-speciality healthcare facility combining clinical efficiency with patient-centric experience.",
        "The program was closely aligned with the client’s medical expertise, including ophthalmology and dentistry, while also accommodating a wider ecosystem of internal medicine, orthopedics, gynecology, physiotherapy, and emergency care.",
      ],

      locationText: "Sector 70A, Gurugram, Haryana.",

      designConcept: [
        "The project was taken over after the structural completion, with limited consideration for service integration, resulting in restricted floor-to-floor heights. The design approach focused on working within these constraints through careful coordination of MEP systems while maintaining healthcare standards.",
        "The hospital was planned in two distinct phases, ensuring immediate functionality in Phase 1 while anticipating seamless expansion in Phase 2 without requiring major rework.",
        "Drawing from experience in high-end healthcare environments, the design translates large-hospital standards into a compact footprint, ensuring efficiency, hygiene, and operational clarity.",
        "A distinct visual identity was created through controlled use of colour and material, moving beyond generic hospital aesthetics.",
      ],

      highlights: [
        {
          title: "Phased Planning Strategy",
          text: "The project was executed in two phases, enabling early activation of OPD, diagnostics, and operation theatres, followed by expansion into wards and ICU facilities.",
        },
        {
          title: "Efficient Zoning & Circulation",
          text: "The hospital layout ensures clear segregation of functions across floors, minimizing cross-movement between patients, staff, and services while maintaining intuitive navigation.",
        },
        {
          title: "Compact Healthcare Design",
          text: "Large hospital standards were adapted into a smaller footprint, ensuring operational efficiency without compromising clinical requirements.",
        },
        {
          title: "Distinct Interior Identity",
          text: "Use of olive green accents, clean surfaces, and subtle floor patterns establishes a recognizable identity while supporting hygiene and maintenance.",
        },
        {
          title: "Patient-Centric Spatial Experience",
          text: "Clear wayfinding, calming color schemes, and organized layouts reduce stress and create a more comfortable environment for patients.",
        },
        {
          title: "Sustainable & Support Features",
          text: "The project integrates solar panels, staff accommodation, and informal breakout spaces to enhance operational sustainability and staff well-being.",
        },
      ],

      designIntent:
        "The design intent for Ananta Hospital was to create a compact yet highly efficient healthcare environment that balances clinical functionality with patient comfort. By addressing structural constraints, implementing a phased development strategy, and maintaining clarity in zoning and service planning, the project ensures seamless operation. The design emphasizes adaptability, efficiency, and a strong visual identity, demonstrating how smaller healthcare facilities can achieve high-performance standards without relying on scale.",

      conclusion:
        "Ananta Hospital stands as a strong example of how thoughtful planning and design can overcome structural and spatial constraints to deliver a highly functional healthcare facility. Through strategic zoning, disciplined service coordination, and a patient-centric approach, the project creates an efficient and comfortable environment for both users and staff. It reinforces the idea that in compact healthcare settings, every design decision plays a critical role in shaping both operational success and patient experience.",
    },


  ];
  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <div className="not-found-page">
        <h2>Project Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/architecture" className="back-link-btn">
          Back to Architecture
        </Link>
      </div>
    );
  }

  return (
    <>
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

      <div className="project-page">
        <section className="project-hero">
          <div className="container">
            <p className="project-tag">{project.tag}</p>
            <h1>{project.title}</h1>
            <p className="project-subtitle">{project.subtitle}</p>
          </div>
        </section>

        <section className="project-gallery-section">
          <div className="container">
            <div className="project-gallery">
              <div className="gallery-main">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  onClick={() => setSelectedImage(project.mainImage)}
                  className="clickable-image"
                 loading="lazy" decoding="async"/>
              </div>

              <div className="gallery-side">
                {project.sideImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${project.title} ${index + 2}`}
                    onClick={() => setSelectedImage(img)}
                    className="clickable-image"
                   loading="lazy" decoding="async"/>
                ))}
              </div>
            </div>

            <div className="project-gallery-bottom">
              {project.galleryImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.title} gallery ${index + 5}`}
                  onClick={() => setSelectedImage(img)}
                  className="clickable-image"
                 loading="lazy" decoding="async"
                 />
              ))}
            </div>
          </div>
        </section>

        <section className="project-content-section">
          <div className="container project-content-grid">
            <div className="project-info-card">
              <h3>Project Info</h3>
              <ul>
                <li><strong>Project:</strong> {project.info.project}</li>
                <li><strong>Location:</strong> {project.info.location}</li>
                <li><strong>Scope:</strong> {project.info.scope}</li>
                <li><strong>Firm:</strong> {project.info.firm}</li>
              </ul>

              <Link to="/architecture" className="back-link-btn">
                ← Back to Architecture
              </Link>
            </div>

            <div className="project-content">
              <h2>Project Overview</h2>
              {project.overview.map((text, index) => (
                <p key={index}>{text}</p>
              ))}

              <h2>Location</h2>
              <p>{project.locationText}</p>

              <h2>Design Concept</h2>
              {project.designConcept.map((text, index) => (
                <p key={index}>{text}</p>
              ))}

              <h2>Architectural Highlights</h2>
              <div className="highlights-grid">
                {project.highlights.map((item, index) => (
                  <div className="highlight-card" key={index}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>

              <h2>Design Intent</h2>
              <p>{project.designIntent}</p>

              <h2>Conclusion</h2>
              <p>{project.conclusion}</p>
            </div>
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

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <button
            className="image-modal-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Large preview"
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
             loading="lazy" decoding="async"
          />
        </div>
      )}
    </>
  );
}

export default ProjectItems;