import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "../HeaderFooter/Header.css";
import "./Interiors.css";
import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";

function Interiors() {
  usePageReveal([
    ".project-page .project-hero .container > *",
    ".project-page .project-gallery > *",
    ".project-page .project-gallery-bottom > *",
    ".project-page .project-info-card",
    ".project-page .project-content > *",
    ".project-page .highlight-card",
    ".project-page .back-link-btn",
    ".project-page .footer__col",
    ".project-page .footer__line",
    ".project-page .footer__copy",
  ]);

  useScrollVisibility([
    ".project-page .project-hero .container",
    ".project-page .gallery-main",
    ".project-page .gallery-side > *",
    ".project-page .project-gallery-bottom > *",
    ".project-page .project-info-card",
    ".project-page .project-content > *",
    ".project-page .highlight-card",
    ".project-page .back-link-btn",
  ]);

  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const projects = [
    {
      id: 1,
      slug: "united-airlines-office-interior-t3-delhi",
      tag: "United Airlines Office",
      title: "United Airlines Premium Office",
      subtitle: "Commercial Interior Design by URBAN iNFiLL",
      mainImage: "/Interiors/United/Image 1.webp",
      sideImages: [
        "/Interiors/United/Image 2.webp",
        "/Interiors/United/Image 3.webp",
        "/Interiors/United/Image 4.webp",
      ],
      galleryImages: [
        "/Interiors/United/Image 5.webp",
        "/Interiors/United/Image 6.webp",
        "/Interiors/United/Image 7.webp",
        "/Interiors/United/Image 8.webp",
      ],
      info: {
        project: "United Airlines Premium Office",
        location: "Terminal 3, IGI Airport, New Delhi",
        scope: "Commercial Interior Design",
        firm: "URBAN iNFiLL",
      },
      overview: [
        "The United Airlines premium office at Terminal 3 of Indira Gandhi International Airport, New Delhi, is a sophisticated and highly functional commercial office designed to support the airline’s operational activities.",
        "Designed by URBAN iNFiLL, the project combines modern office design with operational efficiency, creating a workplace that reflects the airline’s global brand presence and professionalism.",
      ],
      locationText:
        "Terminal 3, Indira Gandhi International Airport, New Delhi.",
      designConcept: [
        "The design blends functionality and brand identity using United Airlines’ signature blue, white, and silver palette.",
        "A custom graphic world map at reception highlights the airline's global network.",
        "The central aisle connects reception, cabins, meeting areas, and support spaces ensuring smooth workflow.",
      ],
      highlights: [
        {
          title: "Branded Reception Design",
          text: "A custom graphic map showcases United Airlines’ global network.",
        },
        {
          title: "Leadership Cabins",
          text: "Cabins reflect department culture with custom graphics and layouts.",
        },
        {
          title: "Conference & Briefing Area",
          text: "Flexible meeting space designed for presentations and team coordination.",
        },
      ],
      designIntent:
        "The design intent was to create a premium commercial office that supports operational efficiency while strengthening United Airlines’ global brand identity.",
      conclusion:
        "The project demonstrates URBAN iNFiLL’s ability to deliver high-performance commercial interiors that balance functionality, branding, and professional workplace environments.",
    },

    {
      id: 2,
      slug: "urban-canteen-cafe-interior-bhubaneswar",
      tag: "Commercial Restaurant Design",
      title: "URBAN CANTEEN",
      subtitle: "Interior Design by URBAN iNFiLL",
      mainImage: "/Interiors/Urban/Image 1.webp",
      sideImages: [
        "/Interiors/Urban/Image 2.webp",
        "/Interiors/Urban/Image 3.webp",
        "/Interiors/Urban/Image 4.webp",
      ],
      galleryImages: [
        "/Interiors/Urban/Image 5.webp",
        "/Interiors/Urban/Image 6.webp",
        "/Interiors/Urban/Image 7.webp",
        "/Interiors/Urban/Image 8.webp",
      ],
      info: {
        project: "Commercial Restaurant Design",
        location: "Bhubaneswar, Odisha",
        scope: "Restaurant Interior Design",
        firm: "Interior Design by URBAN iNFiLL",
        completionDate: "07-07-2024",
      },
      overview: [
        "URBAN CANTEEN is a newly completed restaurant design project located in the heart of Bhubaneswar.",
        "The space combines modern interior design with local Odisha architectural elements to create a vibrant and welcoming dining environment.",
      ],
      locationText: "Bhubaneswar, Odisha.",
      designConcept: [
        "Contemporary cafe culture design focused on comfort and flexibility.",
        "Thoughtful colour palette and mood lighting to elevate the dining experience.",
        "Functional commercial space planning for smooth navigation and customer flow.",
        "Sustainable design elements paired with modern aesthetics for long-term impact.",
      ],
      highlights: [
        {
          title: "Welcoming Dining Ambience",
          text: "A lively and inviting restaurant space shaped by modern design and local character.",
        },
        {
          title: "Smart Space Planning",
          text: "The layout supports easy movement, flexibility, and efficient restaurant operations.",
        },
        {
          title: "Brand-Focused Experience",
          text: "The design reflects the brand identity while enhancing the overall customer experience.",
        },
      ],
      designIntent:
        "The aim was to create a modern restaurant interior that feels vibrant, functional, and deeply connected to its local context.",
      conclusion:
        "URBAN CANTEEN reflects a balanced approach to restaurant interior design, blending aesthetics, comfort, and operational efficiency.",
    },

    {
      id: 3,
      slug: "restaurant-club-design-bbi-bhubaneswar",
      tag: "Completed Project",
      title: "BBi Booze Buzz Inhouse – Bhubaneswar",
      subtitle: "Architecture & Interior Design by URBAN iNFiLL",
      mainImage: "/Interiors/BBI/Image 1.webp",
      sideImages: [
        "/Interiors/BBI/Image 2.webp",
        "/Interiors/BBI/Image 3.webp",
        "/Interiors/BBI/Image 4.webp",
      ],
      galleryImages: [
        "/Interiors/BBI/Image 5.webp",
        "/Interiors/BBI/Image 6.webp",
        "/Interiors/BBI/Image 7.webp",
        "/Interiors/BBI/Image 8.webp",
      ],
      info: {
        project: "BBi Booze Buzz Inhouse",
        location: "Chandrasekharpur, Bhubaneswar, Odisha",
        scope: "Architecture & Interior Design",
        area: "8,000 sq ft",
        client: "Booze Buzz Inhouse",
        status: "Completed – November 2025",
        firm: "URBAN iNFiLL",
      },

      overview: [
        "URBAN iNFiLL designed #BBi Booze Buzz Inhouse, an 8,000 sq ft cocktail bar and restaurant in Bhubaneswar, reimagining the venue to enhance both its spatial experience and seating capacity. Already established as one of the city’s popular nightlife destinations, the project focused on upgrading the interiors to create a stronger and more engaging identity.",
        "The design transforms the venue into a versatile hospitality environment that seamlessly transitions between a relaxed dining atmosphere during the day and a vibrant, high-energy nightlife destination after sunset. The intervention balances functionality, movement, and visual appeal to create an immersive customer experience.",
      ],

      locationText: "Chandrasekharpur, Bhubaneswar, Odisha.",

      designConcept: [
        "The design concept revolves around creating a dynamic and fluid interior environment that enhances movement, energy, and user engagement. A key intervention involved repositioning the bar counter, which was originally located at the center of the space. The bar was relocated to the corner and redesigned as a prominent L-shaped feature element, freeing up the central floor area and significantly improving circulation.",
        "The spatial layout is further enhanced through the use of patterned flooring, which subtly guides movement and defines seating zones without relying on rigid partitions. This creates a sense of openness while maintaining spatial organization.",
        "An open industrial ceiling aesthetic with exposed ducts adds to the raw and contemporary character of the space, while a sculptural floating wavy ceiling element in the open seating area introduces visual drama and spatial identity. Lighting and sound design, developed in collaboration with specialists, play a crucial role in transforming the ambiance from a calm daytime restaurant to a lively nightlife venue.",
      ],

      highlights: [
        {
          title: "L-Shaped Feature Bar",
          text: "The redesigned L-shaped bar acts as the focal element of the space, improving circulation while enhancing visual impact and user interaction.",
        },
        {
          title: "Open Industrial Ceiling",
          text: "Exposed service ducts and an industrial ceiling aesthetic create a contemporary and raw design language that complements the nightlife environment.",
        },
        {
          title: "Dynamic Floor & Ceiling Design",
          text: "Patterned flooring guides movement and defines zones, while the floating wavy ceiling feature creates a distinctive spatial identity in the seating area.",
        },
        {
          title: "Day-to-Night Transformation",
          text: "Integrated lighting and sound design enable the venue to seamlessly transition from a relaxed dining space during the day to a high-energy nightlife destination.",
        },
        {
          title: "Experiential Entrance & Social Spaces",
          text: "Photogenic entrance foyers and feature walls are designed to enhance customer engagement and encourage social media interaction.",
        },
        {
          title: "Façade Seating Integration",
          text: "Open seating along the façade enhances the spatial experience and strengthens the connection between the interior and exterior environment.",
        },
      ],

      designIntent:
        "The design intent for #BBi Booze Buzz Inhouse was to reimagine an already successful venue by enhancing its spatial efficiency, visual identity, and experiential quality. By reorganizing key elements such as the bar placement and circulation flow, the design creates a more open and engaging layout. The integration of lighting, sound, and architectural features ensures a seamless transition between different modes of use, allowing the space to function effectively throughout the day and night. The project aims to deliver a memorable hospitality experience that blends functionality with strong visual appeal.",

      conclusion:
        "#BBi Booze Buzz Inhouse stands as a refined example of contemporary hospitality design that successfully balances dining, social interaction, and nightlife. Through strategic spatial planning, bold feature elements, and a cohesive design language, URBAN iNFiLL has transformed the venue into a vibrant and versatile destination. The project enhances both the operational efficiency and the experiential quality of the space, making it a prominent nightlife landmark in Bhubaneswar.",
    },
    {
      id: 4,
      slug: "cineport-svh-cinema-interior-design– Gurgaon",
      tag: "Completed Project",
      title: "Cineport 5-Screen Multiplex – Gurgaon",
      subtitle: "Architecture & Interior Design by URBAN iNFiLL",
      mainImage: "/Interiors/Cineport/Image 1.webp",
      sideImages: [
        "/Interiors/Cineport/Image 2.webp",
        "/Interiors/Cineport/Image 3.webp",
        "/Interiors/Cineport/Image 4.webp",
      ],
      galleryImages: [
        "/Interiors/Cineport/Image 5.webp",
        "/Interiors/Cineport/Image 6.webp",
        "/Interiors/Cineport/Image 7.webp",
        "/Interiors/Cineport/Image 8.webp",
      ],
      info: {
        project: "Cineport 5-Screen Multiplex",
        location: "Gurgaon",
        scope: "Architecture & Interior Design",
        area: "50,000+ sq ft",
        client: "Cineport | SVH",
        status: "Completed – 2025",
        firm: "URBAN iNFiLL",
      },

      overview: [
        "URBAN iNFiLL designed this 5-screen multiplex in Gurgaon for Cineport, creating a contemporary entertainment destination that extends beyond the conventional cinema experience. Spread across more than 50,000 sq ft, the project was envisioned as both a public attraction within the mall and a flagship development that establishes the design language for the Cineport brand.",
        "The architectural layout follows an L-shaped configuration, with two auditoriums located on one wing and three on the other. A central entrance foyer connects the two blocks and houses the primary concession area, forming the social core of the multiplex. The design transforms circulation spaces into active zones, creating an immersive pre-movie experience for visitors.",
      ],

      locationText: "Gurgaon.",

      designConcept: [
        "The design concept focuses on activating large common areas and transforming them into engaging, interactive spaces rather than passive waiting zones. A double-height entrance foyer acts as the main gathering space, visually connecting different parts of the multiplex while enhancing spatial openness.",
        "A large LED media wall is integrated within the entrance foyer, displaying movie trailers, promotional content, and brand visuals. This transforms the foyer into a dynamic media environment that enhances user engagement even before entering the auditoriums.",
        "Circulation corridors and waiting areas are designed as exhibition-style lobbies with digital screens and visual elements, ensuring that movement through the cinema becomes part of the entertainment journey. The design combines lighting, materials, and digital media to create a premium and immersive cinematic environment.",
      ],

      highlights: [
        {
          title: "Double-Height Entrance Foyer",
          text: "A large entrance space designed as a public interaction zone, connected to the mall and food court, encouraging engagement beyond moviegoers.",
        },
        {
          title: "Central Concession Hub",
          text: "A strategically placed concession area located within the foyer, accessible to both cinema visitors and general mall users.",
        },
        {
          title: "LED Media Wall Experience",
          text: "A large digital display wall showcasing trailers and promotional content, transforming the foyer into an interactive media environment.",
        },
        {
          title: "Gaming & Recreation Zone",
          text: "Under-auditorium spaces are utilized as gaming and entertainment zones, adding another layer of visitor engagement.",
        },
        {
          title: "Premium Recliner Auditorium",
          text: "Dedicated luxury seating experience designed to enhance comfort and provide a premium cinematic environment.",
        },
        {
          title: "Multi-Functional Auditorium",
          text: "The largest auditorium includes a stage for film promotions, events, and live interactions, expanding its functional use beyond screenings.",
        },
        {
          title: "Contemporary Material Palette",
          text: "Metallic finishes, dynamic lighting, and modern materials create a sophisticated and high-end cinema atmosphere.",
        },
      ],

      designIntent:
        "The design intent for the Cineport multiplex was to redefine the traditional cinema experience by transforming it into a comprehensive entertainment environment. By activating circulation spaces, integrating digital media, and creating strong visual focal points, the project enhances user engagement at every stage of the journey. The planning balances operational efficiency with experiential quality, ensuring smooth movement while delivering a premium environment. As a flagship project, it establishes a scalable design identity for future Cineport developments.",

      conclusion:
        "The Cineport 5-screen multiplex stands as a contemporary entertainment destination that blends architecture, technology, and user experience. Through strategic planning, immersive spaces, and strong visual identity, URBAN iNFiLL has created a dynamic cinema environment that goes beyond traditional movie viewing. The project not only enhances the mall experience but also sets a benchmark for future Cineport multiplexes across India.",
    },
    {
      id: 5,
      slug: "samsung-office-interior-design-dehradun",
      tag: "Completed Project",
      title: "Samsung Corporate Office – Dehradun",
      subtitle: "Architecture & Interior Design by URBAN iNFiLL",
      mainImage: "/Interiors/Samsung/Image 1.webp",
      sideImages: [
        "/Interiors/Samsung/Image 2.webp",
        "/Interiors/Samsung/Image 3.webp",
        "/Interiors/Samsung/Image 4.webp",
      ],
      galleryImages: [
        "/Interiors/Samsung/Image 5.webp",
        "/Interiors/Samsung/Image 6.webp",
        "/Interiors/Samsung/Image 7.webp",
        "/Interiors/Samsung/Image 8.webp",
      ],
      info: {
        project: "Samsung Corporate Office",
        location: "Rajpur Road, Dehradun",
        scope: "Corporate Office Interior",
        area: "3,100 sq ft",
        client: "Samsung",
        status: "Completed – December 2024",
        firm: "URBAN iNFiLL",
      },

      overview: [
        "URBAN iNFiLL designed this corporate office in Dehradun for Samsung as a contemporary workplace aligned with the evolving demands of the hybrid work era. The 3,100 sq ft workspace reflects the brand’s global identity while creating an environment that supports collaboration, flexibility, and employee well-being.",
        "The office layout moves away from traditional cubicle-based planning and instead adopts a zoned approach, organizing the workspace into clearly defined functional areas. Open workstations, meeting rooms, and informal collaboration zones are strategically integrated to create a dynamic, efficient, and future-ready workplace environment.",
      ],

      locationText: "Rajpur Road, Dehradun.",

      designConcept: [
        "The design concept focuses on creating a balanced and human-centric workplace that integrates spatial clarity, technology, and comfort. The layout encourages fluid movement between focused work areas and collaborative zones, supporting the changing dynamics of modern office culture.",
        "Biophilic design elements such as indoor plants and natural material textures are introduced to enhance well-being and create a calming work environment. These elements help establish a connection to nature within the office setting, improving overall user experience.",
        "Lighting and colour play a significant role in defining the workspace atmosphere. Carefully curated palettes and layered lighting strategies are used to enhance productivity while maintaining visual comfort. The integration of smart lighting systems and motion-sensor controls further strengthens the office’s sustainable and efficient design approach.",
      ],

      highlights: [
        {
          title: "Flexible Workplace Planning",
          text: "The layout supports both focused work and collaboration, allowing employees to seamlessly transition between different work modes.",
        },
        {
          title: "Biophilic Design Integration",
          text: "Indoor planting and natural textures create a calming and refreshing environment that enhances employee well-being.",
        },
        {
          title: "Smart Lighting & Energy Efficiency",
          text: "Motion-sensor lighting and energy-efficient systems improve operational efficiency while supporting sustainability goals.",
        },
        {
          title: "Modular & Adaptable Spaces",
          text: "The workspace is designed with flexibility in mind, allowing easy adaptation to future changes in team size or work patterns.",
        },
        {
          title: "Contemporary Brand Identity",
          text: "The design reflects Samsung’s innovation-driven culture through modern materials, clean lines, and a cohesive visual language.",
        },
        {
          title: "Collaborative Work Environment",
          text: "Open workstations, meeting rooms, and informal zones encourage interaction while maintaining productivity.",
        },
      ],

      designIntent:
        "The design intent for the Samsung Corporate Office was to create a future-ready workplace that supports the evolving hybrid work culture. By combining flexible spatial planning, biophilic elements, and smart technology integration, the project delivers a balanced environment that enhances both productivity and employee well-being. The design reinforces Samsung’s global brand identity while creating a comfortable, efficient, and adaptable workspace.",

      conclusion:
        "The Samsung Corporate Office in Dehradun represents a contemporary approach to workplace design that prioritizes flexibility, technology, and human experience. Through thoughtful planning and a cohesive design language, URBAN iNFiLL has created a workspace that supports collaboration, innovation, and well-being. The project stands as a model for modern corporate interiors that respond to the changing needs of today’s workforce.",
    },
    {
      id: 6,
      slug: "urban-company-it-head-office-interior-bangalore",
      tag: "Completed Project",
      title: "Urban Company Corporate Office – Bengaluru",
      subtitle: "Architecture & Interior Design by URBAN iNFiLL",
      mainImage: "/Interiors/Ucompany/Image 1.webp",
      sideImages: [
        "/Interiors/Ucompany/Image 2.webp",
        "/Interiors/Ucompany/Image 3.webp",
        "/Interiors/Ucompany/Image 4.webp",
      ],
      galleryImages: [
        "/Interiors/Ucompany/Image 5.webp",
        "/Interiors/Ucompany/Image 6.webp",
        "/Interiors/Ucompany/Image 7.webp",
        "/Interiors/Ucompany/Image 8.webp",
      ],
      info: {
        project: "Urban Company Corporate Office",
        location: "Bengaluru, Karnataka",
        scope: "Corporate Office Interior",
        area: "4,000 sq ft",
        client: "Urban Company",
        status: "Completed – April 2022",
        firm: "URBAN iNFiLL",
      },

      overview: [
        "URBAN iNFiLL designed this corporate office in Bengaluru for Urban Company, creating a contemporary workspace tailored for the company’s IT and design teams. Spread across 4,000 sq ft, the office was planned to support an open and collaborative work culture while providing flexible zones for focused work and informal interaction.",
        "The project moves beyond conventional office layouts by introducing open workstations, breakout spaces, and informal discussion zones. These elements encourage collaboration, creativity, and a more relaxed working atmosphere, aligning with the dynamic nature of technology and design teams.",
      ],

      locationText: "Bengaluru, Karnataka.",

      designConcept: [
        "The design concept focuses on creating a flexible, open, and human-centric workplace that supports multiple modes of working. Instead of rigid planning, the office is organized into adaptable zones that allow employees to work, collaborate, or unwind throughout the day.",
        "Natural light and views were maximized by placing breakout areas along the window side, creating informal spaces where employees could relax or hold quick discussions. Minimalist material selections and a clean design language help maintain visual clarity while ensuring the space feels bright and welcoming.",
        "Given the fast-paced nature of the project, the design was also developed with efficiency in mind, allowing the office to be executed within a short timeline while maintaining functionality and quality.",
      ],

      highlights: [
        {
          title: "Open Workplace Layout",
          text: "A flexible layout designed to support IT and design teams, encouraging collaboration and seamless workflow.",
        },
        {
          title: "Breakout & Collaboration Zones",
          text: "Informal spaces are integrated throughout the office to promote quick discussions and team interaction.",
        },
        {
          title: "Window-Side Seating",
          text: "Breakout areas along the façade maximize natural light and provide calming external views for employees.",
        },
        {
          title: "Phone Booths & Meeting Pods",
          text: "Dedicated spaces for quick calls and discussions ensure privacy while maintaining an open office environment.",
        },
        {
          title: "Minimalist Design Language",
          text: "Clean lines, simple materials, and a contemporary aesthetic create a clutter-free and efficient workspace.",
        },
        {
          title: "Flexible & Adaptable Planning",
          text: "The layout supports evolving workplace needs, allowing easy adjustments as teams grow or change.",
        },
      ],

      designIntent:
        "The design intent for the Urban Company office was to create a modern, flexible workplace that reflects the fast-paced and collaborative nature of technology and design teams. By integrating open workspaces, breakout zones, and natural light, the project enhances employee comfort and productivity. The design emphasizes adaptability, ensuring the office can evolve with changing work patterns while maintaining a strong visual identity and efficient functionality.",

      conclusion:
        "The Urban Company Corporate Office in Bengaluru represents a contemporary approach to workplace design that prioritizes flexibility, collaboration, and user experience. Through thoughtful planning and a minimalist design language, URBAN iNFiLL has created a workspace that supports creativity and efficiency. The project demonstrates how modern office environments can balance functionality with a comfortable and engaging atmosphere for employees.",
    },
  ];

  const project = projects.find(
    (item) => item.slug === id || item.id === Number(id)
  );

  const allImages = useMemo(() => {
    if (!project) return [];
    return [
      project.mainImage,
      ...(project.sideImages || []),
      ...(project.galleryImages || []),
    ];
  }, [project]);

  const openImageModal = (image) => {
    const index = allImages.findIndex((img) => img === image);
    setSelectedImageIndex(index >= 0 ? index : 0);
  };

  const closeImageModal = () => {
    setSelectedImageIndex(null);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null || allImages.length === 0) return;

      if (e.key === "Escape") {
        closeImageModal();
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) =>
          prev === 0 ? allImages.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) =>
          prev === allImages.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, allImages.length]);

  if (!project) {
    return (
      <div className="not-found-page">
        <h2>Project Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/interior" className="back-link-btn">
          Back to Interior
        </Link>
      </div>
    );
  }

  return (
    <>
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
                  onClick={() => openImageModal(project.mainImage)}
                  className="clickable-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="gallery-side">
                {project.sideImages?.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${project.title} ${index + 2}`}
                    onClick={() => openImageModal(img)}
                    className="clickable-image"
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            </div>

            <div className="project-gallery-bottom">
              {project.galleryImages?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.title} gallery ${index + 5}`}
                  onClick={() => openImageModal(img)}
                  className="clickable-image"
                  loading="lazy"
                  decoding="async"
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
                <li>
                  <strong>Project:</strong> {project.info?.project}
                </li>
                <li>
                  <strong>Location:</strong> {project.info?.location}
                </li>
                <li>
                  <strong>Scope:</strong> {project.info?.scope}
                </li>

                {project.info?.area && (
                  <li>
                    <strong>Area:</strong> {project.info.area}
                  </li>
                )}

                {project.info?.client && (
                  <li>
                    <strong>Client:</strong> {project.info.client}
                  </li>
                )}

                {project.info?.status && (
                  <li>
                    <strong>Status:</strong> {project.info.status}
                  </li>
                )}

                {project.info?.completionDate && (
                  <li>
                    <strong>Completion Date:</strong> {project.info.completionDate}
                  </li>
                )}

                <li>
                  <strong>Firm:</strong> {project.info?.firm}
                </li>
              </ul>

              <Link to="/interior" className="back-link-btn">
                ← Back to Interior
              </Link>
            </div>

            <div className="project-content">
              <h2>Project Overview</h2>
              {project.overview?.map((text, index) => (
                <p key={index}>{text}</p>
              ))}

              <h2>Location</h2>
              <p>{project.locationText}</p>

              <h2>Design Concept</h2>
              {project.designConcept?.map((text, index) => (
                <p key={index}>{text}</p>
              ))}

              <h2>Interior Highlights</h2>
              <div className="highlights-grid">
                {project.highlights?.map((item, index) => (
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
</div>

      {selectedImageIndex !== null && allImages.length > 0 && (
        <div className="image-modal" onClick={closeImageModal}>
          <button
            type="button"
            className="image-modal-close"
            onClick={(e) => {
              e.stopPropagation();
              closeImageModal();
            }}
            aria-label="Close preview"
          >
            ×
          </button>

          {allImages.length > 1 && (
            <button
              type="button"
              className="image-slide-btn image-slide-btn--left"
              onClick={showPrevImage}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          <div
            className="image-modal-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={allImages[selectedImageIndex]}
              alt={`${project.title} preview ${selectedImageIndex + 1}`}
              className="image-modal-content"
              loading="lazy"
              decoding="async"
            />
          </div>

          {allImages.length > 1 && (
            <button
              type="button"
              className="image-slide-btn image-slide-btn--right"
              onClick={showNextImage}
              aria-label="Next image"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default Interiors;

