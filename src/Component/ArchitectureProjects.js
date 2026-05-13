import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import "../HeaderFooter/Header.css";
import "./ArchitectureProjects.css";
import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";
import useImageModal from "./useImageModal";
import projectsData from "./ArchitectureProjectsData";

function ArchitectureProjects() {
  // ... hooks remain the same ...
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

  const architectureProjects = useMemo(() => projectsData, []);
 
  // FIXED: Improved project lookup logic
  const project = useMemo(() => {
    return architectureProjects.find((item) => item.slug === id || String(item.id) === id);
  }, [id, architectureProjects]);

  const allImages = useMemo(() => {
    if (!project) return [];
    return [project.mainImage, ...project.sideImages, ...project.galleryImages];
  }, [project]);

  const {
    selectedImageIndex,
    activeImage,
    openImageModal,
    closeImageModal,
    showPrevImage,
    showNextImage,
  } = useImageModal(allImages);

  if (!project) {
    return (
      <div className="not-found-page">
        <h2>Project Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/architecture" className="back-link-btn">Back to Architecture</Link>
      </div>
    );
  }

  return (
    <div className="project-page">
            {/* Hero Section */}
      <section className="project-hero">
        <div className="container">
          <p className="project-tag">{project.tag}</p>
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
      </section>

            {/* Gallery Section */}
      <section className="project-gallery-section">
        <div className="container">
          <div className="project-gallery">
            <div className="gallery-main">
              <img
                src={project.mainImage}
                alt={`Modern ${project.title} Design in Gurugram by URBAN iNFiLL`}
                onClick={() => openImageModal(project.mainImage)}
                className="clickable-image"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="gallery-side">
              {project.sideImages.map((img, idx) => (
                <img
                  key={`side-${idx}`}
                  src={img}
                  alt={`Modern ${project.title} Design in Gurugram by URBAN iNFiLL`}
                  onClick={() => openImageModal(img)}
                  className="clickable-image"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
          <div className="project-gallery-bottom">
            {project.galleryImages.map((img, idx) => (
              <img
                key={`gallery-${idx}`}
                src={img}
                alt={`Modern ${project.title} Design in Gurugram by URBAN iNFiLL`}
                onClick={() => openImageModal(img)}
                className="clickable-image"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </section>

            {/* Content Section */}
      <section className="project-content-section">
        <div className="container project-content-grid">
          <div className="project-info-card">
            <h3>Project Info</h3>
            <ul>
              {Object.entries(project.info).map(([key, value]) => (
                <li key={key}><strong style={{textTransform: 'capitalize'}}>{key}:</strong> {value}</li>
              ))}
            </ul>
            <Link to="/architecture" className="back-link-btn">← Back to Architecture</Link>
          </div>

          <div className="project-content">
            <h2>Project Overview</h2>
            {project.overview.map((text, idx) => <p key={idx}>{text}</p>)}
            
            <h2>Location</h2>
            <p><strong>Project Location:</strong> {project.info.location}</p>
            <p>{project.locationText}</p>

            <h2>Design Concept</h2>
            {project.designConcept.map((text, idx) => <p key={idx}>{text}</p>)}

            <h2>Architectural Highlights</h2>
            <div className="highlights-grid">
              {project.highlights.map((item, idx) => (
                <div className="highlight-card" key={idx}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            {project.materials?.length > 0 && (
              <>
                <h2>Materials</h2>
                <div className="materials-grid">
                  {project.materials.map((item, idx) => (
                    <div className="material-card" key={idx}>
                      <h4>{item.category}</h4>
                      <p>{item.details}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            <h2>Design Intent</h2>
            <p>{project.designIntent}</p>

            <h2>Conclusion</h2>
            <p>{project.conclusion}</p>
          </div>
        </div>
      </section>

      {selectedImageIndex !== null && (
        <div className="image-modal" onClick={closeImageModal}>
          <button className="image-slide-btn image-slide-btn--left" onClick={showPrevImage}>‹</button>
          <div className="image-modal-inner" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeImage}
              alt={`Modern ${project.title} Design in Gurugram by URBAN iNFiLL`}
              className="image-modal-content"
              loading="lazy"
              decoding="async"
            />
          </div>
          <button className="image-slide-btn image-slide-btn--right" onClick={showNextImage}>›</button>
        </div>
      )}
    </div>
  );
}

export default ArchitectureProjects;
