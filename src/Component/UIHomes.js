import { useEffect, useState } from "react";
import "../HeaderFooter/Header.css";
import "./UIHomes.css";
import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";

function UIHomes() {
  usePageReveal([
    ".residential-page .res-text > *",
    ".residential-page .feature-right",
    ".residential-page .footer__col",
    ".residential-page .footer__line",
    ".residential-page .footer__copy",
  ]);

  const images = [
    "/UIHomes/luxury-living-room-interior-design.webp",
    "/UIHomes/modern-bedroom-suite-design.webp",
    "/UIHomes/elegant-dining-area-interior.webp",
    "/UIHomes/contemporary-kitchen-design.webp",
    "/UIHomes/premium-bathroom-vanity-design.webp",
    "/UIHomes/home-office-study-room.webp",
    "/UIHomes/residential-entrance-foyer.webp",
    "/UIHomes/luxury-villa-staircase-design.webp",
    "/UIHomes/modern-pooja-mandir-interior.webp",
    "/UIHomes/penthouse-terrace-garden.webp",
    "/UIHomes/walk-in-wardrobe-closet.webp",
    "/UIHomes/home-theatre-room-design.webp",
    "/UIHomes/indoor-swimming-pool-area.webp",
    "/UIHomes/residential-gym-fitness-room.webp",
    "/UIHomes/servants-quarters-design.webp",
    "/UIHomes/guest-bedroom-suite.webp",
    "/UIHomes/kids-room-play-area.webp",
    "/UIHomes/balcony-sitout-design.webp",
    "/UIHomes/utility-laundry-room.webp",
    "/UIHomes/pantry-wet-kitchen-area.webp",
    "/UIHomes/residential-lobby-common-area.webp",
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
              <p> Is a luxury architectural and development concept 
                that focuses on "The Art of the Impossible." It targets the 
                transformation of small, narrow, or neglected urban pockets 
                into sophisticated, vertical luxury homes. The brand positions itself 
                at the intersection of metropolitan grit and refined sanctuary.</p>
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
                <h2 className="small-text">Best Architecture Firm</h2>
                <h1 className="logo">
                  URBAN<span> iNFiLL</span>
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
              <h3>• Atmosphere</h3>
              <p>Secluded Luxury, Metropolitan Retreat, Curated Light.</p><br/>
              <h3>• Architecture</h3>
              <p>Cantilevered Forms, Internal Courtyards, Volumetric Design.</p><br/>
            <h3>• Experience</h3>
              <p>Seamless Flow, Sensory Balance, Intuitive Movement, Layered Privacy, Human-Centered Design, Emotional Comfort.</p><br/>
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
    
    </div>

    <div className="uihomes-card uihomes-bedroom">
      <img src={images[19]} alt="Bedroom" onClick={() => openImage(19)} />
    </div>

    <div className="uihomes-text">
     
      <p><b>URBAN iNFiLL</b> content shouldn't just show a house;
         it should tell the story of reclaiming the city.
         It sells the idea that you don't have to leave the heart of the 
         city to find a quiet, expansive, and high-design lifestyle.</p>
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


