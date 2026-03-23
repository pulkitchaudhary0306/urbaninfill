import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./BlogDetails.css";

function BlogDetails() {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      category: "Founder Story",
      title: "Building Urban Infill: A Founder’s Journey",
      image: "/Blogs/cover.webp",
      author: "Subhankar Sengupta",
      role: "Founder & Principal Architect",
      paragraphs: [
        "Urban Infill did not begin as a large architecture practice. ",
        "It began with a few drawings, a small project, and a simple belief — that disciplined work and honest design thinking would eventually find their place in the market.",
        "My journey into architecture was not shaped by a family background in the profession. I come from a family of doctors, where discussions at home were centered around medicine rather than buildings.There were no architects in the family, no construction businesses, and no industry connections to lean on.",
        "Architecture, therefore, was a path that had to be built from scratch.",
        "I completed my schooling at De Nobili School, CMRI, in Dhanbad, Jharkhand. I later moved to Pune to pursue my Bachelor of Architecture from Dr. D. Y. Patil College of Architecture, affiliated with Savitribai Phule Pune University. Like most young architects entering the profession, the early years were about understanding the realities of practice — drawings, coordination, site challenges, and the discipline required to translate ideas into built form.",
        "In June 2015, I moved to Delhi to begin my professional career.",
        "The first three years were deeply formative. While working full-time in professional practice, I also spent my remaining hours building the foundations of what would eventually become Urban Infill. Those years were defined by long days and even longer nights — managing office responsibilities during the day and gradually developing my own professional network, portfolio, and industry relationships after work hours.",
        "However, one principle remained clear throughout that period: respect for the profession and the organizations I worked with. I remained fully committed to my responsibilities in the offices where I was employed and never diverted or solicited clients from them. The goal during those years was not to compete with the firms I worked for, but to learn, grow, and slowly prepare for an independent path.",
        "In June 2018, that aspiration became Urban Infill.",
        "One of the very first independent assignments was designing a 500 sq ft office, a modest project but an important beginning. What mattered most at that stage was not the size of the project, but the opportunity to build trust and demonstrate the ability to deliver thoughtful design.",
        "The practice later operated from a small 500 sq ft studio, gradually taking on more work and building relationships with clients and collaborators. In the early years, the focus was simple: take on projects, learn continuously, collaborate with experienced professionals, and deliver work with sincerity.",
        "During this period, I also associated with several architecture and engineering firms, contributing to design development, detailed drawings, and backend project coordination. These collaborations became an important learning platform and helped shape the professional discipline that defines Urban Infill today.",
        "Gradually, projects began to grow in scale and complexity.",
        "What started with smaller assignments expanded into larger commercial and institutional work. Over time, the studio began handling diverse typologies including corporate offices, data centers, healthcare facilities, restaurants, cinemas, and residential developments.",
        "Like many young practices, Urban Infill also faced its most challenging phase during the COVID period. The industry slowed down, projects were uncertain, and the future of many businesses became unpredictable.",
        "But challenges also build resilience.",
        "The period became an opportunity to reorganize, strengthen internal processes, and prepare the practice for the next phase of growth.",
        "Today, Urban Infill works on projects ranging from corporate workplaces and cinema architecture to hospitals, data centers, hospitality spaces, and residential developments. From a 500 sq ft office project in the early days to developments spanning several lakh square feet, the journey has been gradual and shaped by persistence, learning, and the trust of clients.",
        "At its core, the philosophy of the practice remains unchanged: architecture must go beyond visual expression. It must solve real spatial, technical, and operational challenges.",
        "Urban Infill continues to grow with this belief — combining architectural clarity with technical discipline to deliver thoughtful and efficient built environments.",
        "And the journey continues."
      ],
      aboutStory:
        "A personal account of how Urban Infill was built through discipline, learning, resilience, and long-term client trust.",
      focus: [
        "Corporate Workplaces",
        "Cinema Architecture",
        "Healthcare Facilities",
        "Data Centers",
        "Hospitality Spaces",
        "Residential Developments"
      ]
    },

    {
      id: 2,
      category: "Architecture",
      title: "The Aravali Resort – Rishikesh",
      image: "/Architecture/Aravali/image 1.webp",
      author: "Urban Infill",
      role: "Architectural & Interior Design Studio",
      paragraphs: [
        "  We are thrilled to share another successful project completed by Urban Infill — The Aravali Resort in Rishikesh.",
        "Located in the tranquil town of Rishikesh, Uttarakhand, The Aravali Resort is an exquisite blend of luxury, nature, and wellness.",
        "Set against the breathtaking backdrop of the surrounding hills and lush greenery, the resort merges contemporary architectural design with traditional Indian aesthetics.",
        "Urban Infill’s design philosophy for The Aravali Resort focuses on sustainable architecture and mindful interior design.",
        "The architecture emphasizes minimalist resort design, expansive open spaces, natural light, and unobstructed views of the surrounding hills and gardens.",
        "Carefully selected local materials such as natural stone, wood, and clay tiles ensure the resort blends seamlessly with the landscape.",
        "Large windows, verandas, and open-plan layouts create a strong visual connection between interior spaces and nature.",
        "The design intent behind The Aravali Resort was to create more than just a luxurious stay — it was envisioned as a space for relaxation and rejuvenation.",
        "The resort stands as a destination where visitors can reconnect with nature and experience contemporary hospitality."
      ],
      aboutStory:
        "A look at how Urban Infill designed The Aravali Resort to merge luxury hospitality with nature and sustainability.",
      focus: [
        "Resort Architecture",
        "Sustainable Design",
        "Landscape Integration",
        "Hospitality Design",
        "Natural Materials",
        "Guest Experience Planning"
      ]
    },

    {
      id: 3,
      category: "Commercial Interior Design",
      title: "URBAN CANTEEN | Restaurant Design in Bhubaneswar",
      image: "/Interiors/Urban/Image 1.webp",
      author: "Urban Infill",
      role: "Architecture & Interior Design Studio",
      paragraphs: [
        "  We are excited to unveil the newly completed restaurant design project, URBAN CANTEEN, in the heart of Bhubaneswar.",
        "This 3000 SQFT commercial space was designed to bring together contemporary cafe culture, comfort, and a strong sense of place.",
        "Located in Bhubaneswar, Odisha, and developed in collaboration with In Interior Design Studio.",
        "The design focuses on creating a vibrant dining atmosphere through thoughtful space planning and modern interior aesthetics.",
        "A carefully selected colour palette and mood lighting strategy elevate the dining experience.",
        "The layout supports efficient movement and seamless navigation for both guests and staff.",
        "Sustainable design elements and modern aesthetics were integrated to ensure long-term value.",
        "URBAN CANTEEN represents a dynamic space that enhances both brand identity and customer experience."
      ],
      aboutStory:
        "A completed commercial restaurant interior project blending modern design and local character in Bhubaneswar.",
      focus: [
        "Restaurant Interior Design",
        "Commercial Space Planning",
        "Cafe Culture Design",
        "Mood Lighting",
        "Brand Experience",
        "Hospitality Interiors"
      ]
    }
  ];
  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return <h2 style={{ padding: "120px 20px" }}>Blog not found</h2>;
  }

  return (
    <div>
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

      <div className="blog-page">
        <div className="blog-wrapper">
          <div className="blog-content">
            <span className="blog-category">{blog.category}</span>

            <h1 className="blog-title">{blog.title}</h1>

            <div className="blog-text">
              {blog.paragraphs.map((paragraph, index) => (
                <p key={index}>
                  {index === 0 ? (
                    <>
                      <b>Urban Infill</b>
                      {paragraph.replace("Urban Infill", "")}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>

            <div className="blog-sign">
              <h3>{blog.author}</h3>
              <p>{blog.role}</p>
              <h4>Urban Infill</h4>
            </div>
          </div>

          <div className="blog-image">
            <img
              src={blog.image}
              alt={blog.title}
              loading="lazy"
              decoding="async"
            />

            <div className="blog-bottom">
              <div className="blog-card">
                <h3>About This Story</h3>
                <p>{blog.aboutStory}</p>
              </div>

              <div className="blog-card">
                <h3>Practice Focus</h3>
                <ul>
                  {blog.focus.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="blog-card">
                <h3>Explore More</h3>
                <div className="blog-links">
                  <Link to="/about">About Urban Infill</Link>
                  <Link to="/Project"> Projects</Link>
                  <Link to="/contact">Get in Touch</Link>
                  <Link to="/Blogs"> Back To Blogs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                302, Third Floor. Huda Sector, Sushant Lok 2, Sector 55,
                Gurugram, Ghata, Haryana 122011
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__line"></div>

        <div className="footer__copy">
          © 2026 uRBAN iNFiLL. All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default BlogDetails;