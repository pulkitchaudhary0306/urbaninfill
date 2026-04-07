import React, { useEffect, useState } from "react";
import "./Archives.css";
import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";

const archiveItems = [
  {
    id: 1,
    title: "Food Court View 1",
    slug: "food-court-view-1",
    image: "/Archives/FOOD COURT VIEW 1.webp",
    category: "Architecture",
    year: "2024",
    location: "Gurugram",
  },
  {
    id: 2,
    title: "Food Court View 2",
    slug: "food-court-view-2",
    image: "/Archives/FOOD COURT VIEW 2.webp",
    category: "Architecture",
    year: "2024",
    location: "India",
  },
  {
    id: 3,
    title: "Food Court View 3",
    slug: "food-court-view-3",
    image: "/Archives/FOOD COURT VIEW 3.webp",
    category: "Project Management",
    year: "2023",
    location: "India",
  },
  {
    id: 4,
    title: "Gym 1",
    slug: "gym-1",
    image: "/Archives/GYM 1.webp",
    category: "Architecture",
    year: "2023",
    location: "Gurugram",
  },
  {
    id: 5,
    title: "Gym 2",
    slug: "gym-2",
    image: "/Archives/GYM 2.webp",
    category: "Interior",
    year: "2024",
    location: "India",
  },
  {
    id: 6,
    title: "Gym 3",
    slug: "gym-3",
    image: "/Archives/GYM 3.webp",
    category: "Interior",
    year: "2024",
    location: "Gurugram",
  },
  {
    id: 7,
    title: "Batra Hospital Clinic",
    slug: "batra-hospital-clinic",
    image: "/Archives/batra hospital clinic.webp",
    category: "Architecture",
    year: "2024",
    location: "India",
  },
  {
    id: 8,
    title: "Medanta Ranchi",
    slug: "medanta-ranchi",
    image: "/Archives/medanta ranchi.webp",
    category: "Architecture",
    year: "2024",
    location: "India",
  },
  {
    id: 9,
    title: "Mayom Hospital",
    slug: "mayom-hospital",
    image: "/Archives/MAYOM HOSPITAL.webp",
    category: "Architecture",
    year: "2023",
    location: "Gurugram",
  },
  {
    id: 10,
    title: "Home Theater 3",
    slug: "home-theater-3",
    image: "/Archives/home theater 3.webp",
    category: "Project Management",
    year: "2024",
    location: "India",
  },
  {
    id: 11,
    title: "Home Theater 1",
    slug: "home-theater-1",
    image: "/Archives/home theater 1.webp",
    category: "Interior",
    year: "2024",
    location: "India",
  },
  {
    id: 12,
    title: "Home Theater 2",
    slug: "home-theater-2",
    image: "/Archives/home theater 2.webp",
    category: "Architecture",
    year: "2023",
    location: "Gurugram",
  },
 
  
];

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

function ArchiveCard({ item, size = "small", onImageClick }) {
  if (!item) return null;

  return (
    <div
      className={`archiveCard archiveCard--${size}`}
      onClick={() => onImageClick(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onImageClick(item);
        }
      }}
      aria-label={`Open ${item.title}`}
    >
      <img src={item.image} alt={item.title} loading="lazy" />
      <div className="archiveOverlay">
        <div className="archiveFrame" />
        <div className="archiveText">
          <span className="archiveYear">{item.year}</span>
          <h3>{item.title}</h3>
          <p>{item.category}</p>
          <p className="archiveLocation">{item.location}</p>
        </div>
      </div>
    </div>
  );
}

function Archives() {
  usePageReveal([
    ".archives-page .archiveCard",
    ".archives-page .archiveText > *",
    ".archives-page .footer__col",
    ".archives-page .footer__line",
    ".archives-page .footer__copy",
  ]);

  useScrollVisibility([
    ".archives-page .archiveCard",
    ".archives-page .archiveText",
    ".archives-page .archiveText > *",
  ]);

  const rows = chunkArray(archiveItems, 3);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (item) => {
    const index = archiveItems.findIndex((archive) => archive.id === item.id);
    setSelectedIndex(index);
  };

  const closeModal = () => setSelectedIndex(null);

  const showPrevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? archiveItems.length - 1 : prev - 1
    );
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === archiveItems.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === 0 ? archiveItems.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev === archiveItems.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const selectedItem =
    selectedIndex !== null ? archiveItems[selectedIndex] : null;

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
        <div className="archives-collage">
          {rows.map((group, index) => {
            const isEven = index % 2 === 0;
            const first = group[0];
            const second = group[1];
            const third = group[2];

            return (
              <div
                key={index}
                className={`archiveRow ${isEven ? "archiveRow--A" : "archiveRow--B"}`}
              >
                {isEven ? (
                  <>
                    <ArchiveCard item={first} size="big" onImageClick={openModal} />
                    <div className="archiveStack">
                      <ArchiveCard item={second} size="small" onImageClick={openModal} />
                      <ArchiveCard item={third} size="small" onImageClick={openModal} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="archiveStack">
                      <ArchiveCard item={second} size="small" onImageClick={openModal} />
                      <ArchiveCard item={third} size="small" onImageClick={openModal} />
                    </div>
                    <ArchiveCard item={first} size="big" onImageClick={openModal} />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {selectedItem && (
        <div className="imageModal" onClick={closeModal}>
          <button
            type="button"
            className="closeBtn"
            onClick={closeModal}
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


