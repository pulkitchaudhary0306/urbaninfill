import React from "react";
import "../HeaderFooter/Header.css";
import "./Archives.css";
import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";
import useImageModal from "./useImageModal";

const archiveItems = [
  {
    id: 1,
    title: "Food Court View 1",
    slug: "food-court-view-1",
    image: "/Archives/food-court-view-1.avif",
    category: "Architecture",
    year: "2024",
    location: "Gurugram",
  },
  {
    id: 2,
    title: "Food Court View 2",
    slug: "food-court-view-2",
    image: "/Archives/food-court-view-2.avif",
    category: "Architecture",
    year: "2024",
    location: "India",
  },
  {
    id: 3,
    title: "Food Court View 3",
    slug: "food-court-view-3",
    image: "/Archives/food-court-view-3.avif",
    category: "Project Management",
    year: "2023",
    location: "India",
  },
  {
    id: 4,
    title: "Gym 1",
    slug: "gym-1",
    image: "/Archives/gym-1.avif",
    category: "Architecture",
    year: "2023",
    location: "Gurugram",
  },
  {
    id: 5,
    title: "Gym 2",
    slug: "gym-2",
    image: "/Archives/gym-2.avif",
    category: "Interior",
    year: "2024",
    location: "India",
  },
  {
    id: 6,
    title: "Gym 3",
    slug: "gym-3",
    image: "/Archives/gym-3.avif",
    category: "Interior",
    year: "2024",
    location: "Gurugram",
  },
  {
    id: 7,
    title: "Batra Hospital Clinic",
    slug: "batra-hospital-clinic",
    image: "/Archives/batra-hospital-clinic.avif",
    category: "Architecture",
    year: "2024",
    location: "India",
  },
  {
    id: 8,
    title: "Medanta Ranchi",
    slug: "medanta-ranchi",
    image: "/Archives/medanta-ranchi.avif",
    category: "Architecture",
    year: "2024",
    location: "India",
  },
  {
    id: 9,
    title: "Mayom Hospital",
    slug: "mayom-hospital",
    image: "/Archives/mayom-hospital.avif",
    category: "Architecture",
    year: "2023",
    location: "Gurugram",
  },
  {
    id: 10,
    title: "Home Theater 3",
    slug: "home-theater-3",
    image: "/Archives/home-theater-3.avif",
    category: "Project Management",
    year: "2024",
    location: "India",
  },
  {
    id: 11,
    title: "Home Theater 1",
    slug: "home-theater-1",
    image: "/Archives/home-theater-1.avif",
    category: "Interior",
    year: "2024",
    location: "India",
  },
  {
    id: 12,
    title: "Home Theater 2",
    slug: "home-theater-2",
    image: "/Archives/home-theater-2.avif",
    category: "Architecture",
    year: "2023",
    location: "Gurugram",
  },
];

function Archives() {
  usePageReveal([
    ".archives-page .archiveGrid-item",
    ".archives-page .archiveGrid-content > *",
    ".archives-page .footer__col",
    ".archives-page .footer__line",
    ".archives-page .footer__copy",
  ]);

  useScrollVisibility([
    ".archives-page .archiveGrid-item",
    ".archives-page .archiveGrid-content",
    ".archives-page .archiveGrid-content > *",
  ]);

  const {
    selectedImageIndex,
    openImageModal,
    closeImageModal,
    showPrevImage,
    showNextImage,
  } = useImageModal(archiveItems);

  const selectedItem =
    selectedImageIndex !== null ? archiveItems[selectedImageIndex] : null;

  return (
    <div className="archives-page">
      <header className="archives-header">
        <div className="archives-header-content">
          <p className="mini-title">Design History</p>
          <h1>Archives</h1>
          <p className="archives-description">
            A curated collection of our past explorations, completed projects,
            and architectural milestones since our inception.
          </p>
        </div>
      </header>

      <section className="archives-container">
        <div className="archiveGrid">
          {archiveItems.map((item, index) => (
            <div
              key={item.id}
              className="archiveGrid-item"
              onClick={() => openImageModal(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  openImageModal(index);
                }
              }}
              aria-label={`Open ${item.title}`}
            >
              <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
              <div className="archiveGrid-overlay">
                <div className="archiveGrid-content">
                  <h3 className="archiveGrid-title">{item.title}</h3>
                  <div className="archiveGrid-meta">
                    <span className="archiveGrid-year">{item.year}</span>
                    <span className="archiveGrid-category">{item.category}</span>
                    <span className="archiveGrid-location">{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedItem && (
        <div className="imageModal" onClick={closeImageModal}>
          <button
            type="button"
            className="closeBtn"
            onClick={closeImageModal}
            aria-label="Close image preview"
          >
            ×
          </button>

          <button
            type="button"
            className="slideBtn slideBtn--left"
            onClick={showPrevImage}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="imageModal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="imageModal__img"
              loading="lazy"
              decoding="async"
            />
            <div className="imageModal__info">
              <span className="imageModal__year">{selectedItem.year}</span>
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.category}</p>
              <p>{selectedItem.location}</p>
            </div>
          </div>

          <button
            type="button"
            className="slideBtn slideBtn--right"
            onClick={showNextImage}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

export default Archives;


