import { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";

import "../HeaderFooter/Header.css";
import "./ArchitectureProjects.css";

import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";
import useImageModal from "./useImageModal";

import projectsData from "./ArchitectureProjectsData";

function ArchitectureProjects() {
  // Page animations
  usePageReveal([
    ".project-page .project-hero .container > *",
    ".project-page .project-gallery > *",
    ".project-page .project-gallery-bottom > *",
    ".project-page .project-info-card",
    ".project-page .project-content > *",
    ".project-page .highlight-card",
    ".project-page .back-link-btn",
  ]);

  // Scroll visibility
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

  // Get route param
  const { id } = useParams();

  // Projects data
  const architectureProjects = useMemo(() => projectsData, []);

  // Find project
  const project = useMemo(() => {
    if (!id) return null;

    return architectureProjects.find(
      (item) =>
        item.slug?.toLowerCase() === id.toLowerCase() ||
        String(item.id) === String(id)
    );
  }, [id, architectureProjects]);

  // All images
  const allImages = useMemo(() => {
    if (!project) return [];

    return [
      project.mainImage,
      ...(project.sideImages || []),
      ...(project.galleryImages || []),
    ];
  }, [project]);

  // Image modal hook
  const {
    selectedImageIndex,
    activeImage,
    openImageModal,
    closeImageModal,
    showPrevImage,
    showNextImage,
  } = useImageModal(allImages);

  // Redirect if not found
  if (!project) {
    return <Navigate to="/architecture" replace />;
  }

  return (
    <div className="project-page">
      {/* HERO SECTION */}
      <section className="project-hero">
        <div className="container">
          <p className="project-tag">{project.tag}</p>

          <h1>{project.title}</h1>

          <p className="project-subtitle">
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="project-gallery-section">
        <div className="container">
          <div className="project-gallery">

            {/* MAIN IMAGE */}
            <div className="gallery-main">
              <img
                src={project.mainImage}
                alt={project.title}
                className="clickable-image"
                loading="lazy"
                decoding="async"
                onClick={() =>
                  openImageModal(project.mainImage)
                }
              />
            </div>

            {/* SIDE IMAGES */}
            <div className="gallery-side">
              {(project.sideImages || []).map((img, idx) => (
                <img
                  key={`side-${idx}`}
                  src={img}
                  alt={project.title}
                  className="clickable-image"
                  loading="lazy"
                  decoding="async"
                  onClick={() => openImageModal(img)}
                />
              ))}
            </div>
          </div>

          {/* BOTTOM GALLERY */}
          <div className="project-gallery-bottom">
            {(project.galleryImages || []).map((img, idx) => (
              <img
                key={`gallery-${idx}`}
                src={img}
                alt={project.title}
                className="clickable-image"
                loading="lazy"
                decoding="async"
                onClick={() => openImageModal(img)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="project-content-section">
        <div className="container project-content-grid">

          {/* PROJECT INFO */}
          <div className="project-info-card">
            <h3>Project Info</h3>

            <ul>
              {Object.entries(project.info || {}).map(
                ([key, value]) => (
                  <li key={key}>
                    <strong
                      style={{
                        textTransform: "capitalize",
                      }}
                    >
                      {key}:
                    </strong>{" "}
                    {value}
                  </li>
                )
              )}
            </ul>

            <Link
              to="/architecture"
              className="back-link-btn"
            >
              ← Back to Architecture
            </Link>
          </div>

          {/* MAIN CONTENT */}
          <div className="project-content">

            {/* OVERVIEW */}
            <h2>Project Overview</h2>

            {(project.overview || []).map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}

            {/* LOCATION */}
            <h2>Location</h2>

            <p>
              <strong>Project Location:</strong>{" "}
              {project.info?.location}
            </p>

            <p>{project.locationText}</p>

            {/* DESIGN CONCEPT */}
            <h2>Design Concept</h2>

            {(project.designConcept || []).map(
              (text, idx) => (
                <p key={idx}>{text}</p>
              )
            )}

            {/* HIGHLIGHTS */}
            <h2>Architectural Highlights</h2>

            <div className="highlights-grid">
              {(project.highlights || []).map(
                (item, idx) => (
                  <div
                    className="highlight-card"
                    key={idx}
                  >
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                )
              )}
            </div>

            {/* MATERIALS */}
            {project.materials?.length > 0 && (
              <>
                <h2>Materials</h2>

                <div className="materials-grid">
                  {project.materials.map((item, idx) => (
                    <div
                      className="material-card"
                      key={idx}
                    >
                      <h4>{item.category}</h4>
                      <p>{item.details}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* DESIGN INTENT */}
            <h2>Design Intent</h2>

            <p>{project.designIntent}</p>

            {/* CONCLUSION */}
            <h2>Conclusion</h2>

            <p>{project.conclusion}</p>
          </div>
        </div>
      </section>

      {/* IMAGE MODAL */}
      {selectedImageIndex !== null && (
        <div
          className="image-modal"
          onClick={closeImageModal}
        >
          {/* PREV BUTTON */}
          <button
            className="image-slide-btn image-slide-btn--left"
            onClick={(e) => {
              e.stopPropagation();
              showPrevImage();
            }}
          >
            ‹
          </button>

          {/* MODAL IMAGE */}
          <div
            className="image-modal-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage}
              alt={project.title}
              className="image-modal-content"
            />
          </div>

          {/* NEXT BUTTON */}
          <button
            className="image-slide-btn image-slide-btn--right"
            onClick={(e) => {
              e.stopPropagation();
              showNextImage();
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

export default ArchitectureProjects;