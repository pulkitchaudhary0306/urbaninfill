import { useEffect, useMemo, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";

import "../HeaderFooter/Header.css";
import "./InteriorsProjects.css";
import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";
import interiorProjects from "./InteriorsProjectsData";

function InteriorsProjects() {
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

  const interiorsProjects = useMemo(() => interiorProjects, []);

  const project = useMemo(() => {
    return interiorsProjects.find((item) => item.slug === id || String(item.id) === id);
  }, [id, interiorsProjects]);

  const allImages = useMemo(() => {
    if (!project) return [];
    return [
      project.mainImage,
      ...(project.sideImages || []),
      ...(project.galleryImages || []),
    ];
  }, [project]);

  const openImageModal = useCallback((image) => {
    const index = allImages.findIndex((img) => img === image);
    setSelectedImageIndex(index >= 0 ? index : 0);
  }, [allImages]);

  const closeImageModal = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const showPrevImage = useCallback((e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  }, [allImages]);

  const showNextImage = useCallback((e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  }, [allImages]);

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
  }, [selectedImageIndex, allImages.length, closeImageModal]);

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

              {project.materials?.length > 0 && (
                <>
                  <h2>Materials</h2>
                  <div className="materials-grid">
                    {project.materials.map((item, index) => (
                      <div className="material-card" key={index}>
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

export default InteriorsProjects;
