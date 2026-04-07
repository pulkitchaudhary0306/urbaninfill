import { useEffect, useState } from "react";
import "./UIHomes.css";
import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";

function UIHomes() {
  useEffect(() => {
    document.body.classList.add("uihomes-theme-white");

    return () => {
      document.body.classList.remove("uihomes-theme-white");
    };
  }, []);

  usePageReveal([
    ".residential-page .res-text > *",
    ".residential-page .feature-right",
    ".site-footer .site-footer__col",
    ".site-footer .site-footer__line",
    ".site-footer .site-footer__copy",
  ]);

  const images = [
    "/UIHomes/Image 1.webp",
    "/UIHomes/Image 2.webp",
    "/UIHomes/Image 3.webp",
    "/UIHomes/Image 4.webp",
    "/UIHomes/Image 5.webp",
    "/UIHomes/Image 6.webp",
    "/UIHomes/Image 7.webp",
    "/UIHomes/Image 8.webp",
    "/UIHomes/Image 9.webp",
    "/UIHomes/Image 10.webp",
    "/UIHomes/Image 11.webp",
    "/UIHomes/Image 12.webp",
    "/UIHomes/Image 13.webp",
    "/UIHomes/Image 14.webp",
    "/UIHomes/Image 15.webp",
    "/UIHomes/Image 16.webp",
    "/UIHomes/Image 17.webp",
    "/UIHomes/Image 18.webp",
    "/UIHomes/Image 19.webp",
    "/UIHomes/Image 20.webp",
    "/UIHomes/Image 21.webp",
  ];
  const imageCount = images.length;

  const [activeIndex, setActiveIndex] = useState(null);

  const openImage = (index) => setActiveIndex(index);
  const closeImage = () => setActiveIndex(null);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % imageCount);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? imageCount - 1 : prev - 1));
  };

  

  useEffect(() => {
    const handleKey = (event) => {
      if (activeIndex === null) return;

      if (event.key === "Escape") closeImage();
      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % imageCount);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev === 0 ? imageCount - 1 : prev - 1));
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, imageCount]);

  useScrollVisibility([
    ".residential-page .res-big",
    ".residential-page .res-tall",
    ".residential-page .res-small",
    ".residential-page .feature-left",
    ".residential-page .lux-card",
    ".residential-page .gallery-small",
    ".residential-page .gallery-large",
  ], "scroll-reveal");

  useScrollVisibility([
    ".residential-page .portfolio-grid > *",
    ".residential-page .uihomes-grid > *",
  ]);

  return (
    <div className="residential-page">
<main className="residential-content">
        <section className="res-section">
          <div className="res-grid">
            <div className="res-text">
              <h3>URBAN iNFiLL</h3>
              <p>Luxury Residential Development</p>
            </div>

            <div className="res-small">
              <img
                src={images[1]}
                alt="Residential project 2"
                onClick={() => openImage(1)}
              />
            </div>

            <div className="res-big">
              <img
                src={images[0]}
                alt="Residential project 1"
                onClick={() => openImage(0)}
              />
            </div>

            <div className="res-tall">
              <img
                src={images[2]}
                alt="Residential project 3"
                onClick={() => openImage(2)}
              />
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="feature-grid">
            <div className="feature-left">
              <img
                src={images[3]}
                alt="Residential project 4"
                onClick={() => openImage(3)}
              />

            
            </div>

            <div className="feature-right">
              <div className="card">
                <p className="small-text">Best Architecture Firm</p>
                <h1 className="logo">
                  URBAN<span>INFILL</span>
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="res-section">
          <div className="res-grid">
            <div className="res-big">
              <img
                src={images[4]}
                alt="Residential project 5"
                onClick={() => openImage(4)}
              />
            </div>

            <div className="res-tall">
              <img
                src={images[5]}
                alt="Residential project 6"
                onClick={() => openImage(5)}
              />
            </div>

            <div className="res-text">
              <h3>URBAN iNFiLL</h3>
              <p>Luxury Residential Development</p>
            </div>

            <div className="res-small">
              <img
                src={images[6]}
                alt="Residential project 7"
                onClick={() => openImage(6)}
              />
            </div>
          </div>
        </section>

        <section className="luxury-grid">
          <div className="luxury-container">
            <div className="lux-card">
              <img
                src={images[7]}
                alt="Residential project 8"
                onClick={() => openImage(7)}
              />
            </div>

            <div className="lux-card">
              <img
                src={images[8]}
                alt="Residential project 9"
                onClick={() => openImage(8)}
              />
            </div>

            <div className="lux-card tall">
              <img
                src={images[9]}
                alt="Residential project 10"
                onClick={() => openImage(9)}
              />
            </div>

            <div className="lux-card wide">
              <img
                src={images[10]}
                alt="Residential project 11"
                onClick={() => openImage(10)}
              />
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <div className="gallery-grid">
            <div className="gallery-small gallery-small-top">
              <img
                src={images[11]}
                alt="Residential project 12"
                onClick={() => openImage(11)}
              />
            </div>

            <div className="gallery-small gallery-small-bottom">
              <img
                src={images[12]}
                alt="Residential project 13"
                onClick={() => openImage(12)}
              />
            </div>

            <div className="gallery-large">
              <img
                src={images[13]}
                alt="Residential project 14"
                onClick={() => openImage(13)}
              />
              

            </div>
          </div>
        </section>
        <section className="portfolio-section">
  <div className="portfolio-grid">

    {/* LEFT BIG IMAGE */}
    <div className="portfolio-main">
      <img src={images[14]} alt="" onClick={() => openImage(14)} />
    </div>
  
    {/* RIGHT TALL IMAGE */}
    <div className="portfolio-tall">
      <img src={images[15]} alt="" onClick={() => openImage(15)} />
    </div>

    {/* BOTTOM LEFT SMALL */}
    <div className="portfolio-small-left">
      <img src={images[16]} alt="" onClick={() => openImage(16)} />
    </div>

  

  </div>
</section>
<section className="uihomes-section">
  <div className="uihomes-grid">
    <div className="uihomes-card uihomes-living">
      <img src={images[18]} alt="" onClick={() => openImage(18)} />
      <div className="uihomes-label">LIVING ROOM</div>
    </div>

    <div className="uihomes-card uihomes-bedroom">
      <img src={images[19]} alt="Bedroom" onClick={() => openImage(19)} />
    </div>

    <div className="uihomes-text">
      <h3>URBAN iNFiLL</h3>
      <p>welcome to UI Homes</p>
    </div>

    <div className="uihomes-card uihomes-room">
      <img src={images[20]} alt="Bedroom interior" onClick={() => openImage(20)} />
    </div>

    <div className="uihomes-card uihomes-dining">
      <img src={images[2]} alt="Dining room" onClick={() => openImage(2)} />
    </div>
  </div>
</section>
      </main>

      {activeIndex !== null && (
        <div className="image-modal" onClick={closeImage}>
          <button
            type="button"
            className="close-btn"
            onClick={closeImage}
            aria-label="Close image"
          >
            &times;
          </button>

          <button
            type="button"
            className="nav-btn left"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
          >
            &lsaquo;
          </button>

          <img
            src={images[activeIndex]}
            alt={`Residential project ${activeIndex + 1}`}
            className="modal-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            className="nav-btn right"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            &rsaquo;
          </button>
        </div>
      )}
</div>
  );
}

export default UIHomes;

