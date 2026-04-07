import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";
import "./Home.css";

const cities = [
  { name: "LUDHIANA", x: 477, y: 420, cls: "right" },
  { name: "DEHRADUN", x: 597, y: 452, cls: "right" },
  { name: "SIRSA", x: 430, y: 497, cls: "left", isRed: true },
  { name: "BIJNOR", x: 567, y: 497, cls: "right" },
  { name: "JHAJJAR", x: 522, y: 543, cls: "left", isRed: true },
  { name: "DELHI NCR", x: 544, y: 566, cls: "right big-label", isRed: true },
  { name: "DARJEELING", x: 1148, y: 636, cls: "right", isRed: true },
  { name: "JAIPUR", x: 476, y: 651, cls: "right" },
  { name: "LUCKNOW", x: 749, y: 667, cls: "right", isRed: true },
  { name: "AJMER", x: 415, y: 682, cls: "right" },
  { name: "GWALIOR", x: 597, y: 697, cls: "right" },
  { name: "PATNA", x: 978, y: 727, cls: "right" },
  { name: "VARANASI", x: 856, y: 743, cls: "left", isRed: true },
  { name: "DHANBAD", x: 1054, y: 836, cls: "left" },
  { name: "RANCHI", x: 993, y: 866, cls: "left" },
  { name: "BHOPAL", x: 568, y: 866, cls: "right" },
  { name: "AHMEDABAD", x: 293, y: 881, cls: "left" },
  { name: "UJJAIN", x: 461, y: 881, cls: "left" },
  { name: "KOLKATA", x: 1161, y: 897, cls: "left" },
  { name: "INDORE", x: 476, y: 912, cls: "right" },
  { name: "RAIPUR", x: 794, y: 1004, cls: "right" },
  { name: "BHUBANESWAR", x: 1039, y: 1049, cls: "left" },
  { name: "MUMBAI", x: 308, y: 1127, cls: "right" },
  { name: "PUNE", x: 355, y: 1158, cls: "right" },
  { name: "HYDERABAD", x: 627, y: 1234, cls: "right" },
  { name: "CHENNAI", x: 721, y: 1480, cls: "right" },
  { name: "BENGALURU", x: 567, y: 1496, cls: "left" },
  { name: "KOCHI", x: 492, y: 1665, cls: "right" },
  { name: "COLOMBO", x: 693, y: 1791, cls: "left" },
];

const clients = [
  { name: "Reliance", src: "/logo/Reliance.webp" },
  { name: "Airtel", src: "/logo/Airtel.webp" },
  { name: "Medanta", src: "/logo/Medanta.webp" },
  { name: "United", src: "/logo/United.webp" },
  { name: "UrbanClap", src: "/logo/UrbanClap.webp" },
  { name: "Google", src: "/logo/Google.webp" },
  { name: "Samsung", src: "/logo/Samsung.webp" },
  { name: "Lenskart", src: "/logo/lenskart.webp" },
  { name: "DLF", src: "/logo/DLF.webp" },
  { name: "Honda", src: "/logo/Honda.webp" },
  { name: "GAAR", src: "/logo/GAAR.webp" },
  { name: "Cine", src: "/logo/Cine.webp" },
  { name: "FICCI", src: "/logo/FICCI.webp" },
  { name: "PB", src: "/logo/pblogo.webp" },
  { name: "Startek", src: "/logo/Startek.webp" },
  { name: "Foundever", src: "/logo/Foundever.webp" },
  { name: "Axis Bank", src: "/logo/Axis.webp" },
  { name: "NIC", src: "/logo/NIC.webp" },
  { name: "Cars24", src: "/logo/CARS24.webp" },
  { name: "Personiv", src: "/logo/Personiv.webp" },
  { name: "Popular", src: "/logo/Popular.webp" },
  { name: "Royal", src: "/logo/Royal.webp" },
  { name: "Sitel", src: "/logo/Sitel.webp" },
  { name: "Kyndryl", src: "/logo/Kyndryl.webp" },
  { name: "Ashoka", src: "/logo/Ashoka.webp" },
  { name: "IBM", src: "/logo/IBM.webp" },
  { name: "NTT", src: "/logo/NTT.webp" },
  { name: "Myntra", src: "/logo/Myntra.webp" },
  { name: "Cog", src: "/logo/cog.webp" },
  { name: "Konika", src: "/logo/KONIKA.webp" },
  { name: "Allied", src: "/logo/Allied.webp" },
  { name: "Convergys", src: "/logo/convergys.webp" },
  { name: "HSBC", src: "/logo/HSBC.webp" },
  { name: "Bhatra", src: "/logo/bhatra.webp" },
  { name: "YKK", src: "/logo/YKK.webp" },
];

const services = [
  {
    title: "Corporate Office Architecture India",
    alt: "Corporate Office Architecture India",
    icon: "/box-ikon.webp",
  },
  {
    title: "Commercial Interior Design India",
    alt: "Commercial Interior Design India",
    icon: "/box-ikon.webp",
  },
  {
    title: "Cinema Architecture & Multiplex Design India",
    alt: "Cinema Architecture and Multiplex Design India",
    icon: "/box-ikon.webp",
  },
  {
    title: "Hospital Architecture & Medical Planning India",
    alt: "Hospital Architecture and Medical Planning India",
    icon: "/box-ikon.webp",
  },
  {
    title: "Hospitality Architecture (Clubs, Restaurants, Banquets)",
    alt: "Hospitality Architecture",
    icon: "/box-ikon.webp",
  },
  {
    title: "High-End Residential Architecture & Luxury Interiors India",
    alt: "Luxury Residential Architecture",
    icon: "/box-ikon.webp",
  },
];
function Counter({ end, duration = 2000, suffix = " +" }) {
  const [count, setCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const incrementTime = 20;
    const steps = duration / incrementTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [startAnimation, end, duration]);

  return <h3 ref={ref}>{count}{suffix}</h3>;
}



function Home() {
  usePageReveal([
    ".home-page .brand",
    ".home-page .intro-left > *",
    ".home-page .intro-right > *",
    ".home-page .service-card",
    ".home-page .clients-section",
    ".home-page .client-title > *",
    ".home-page .clients-wrap",
    ".home-page .clients-row",
    ".home-page .client-box",
    ".home-page .client-box img",
    ".home-page .projects-title",
    ".home-page .quoteSection > *",
    ".home-page .footer__col",
    ".home-page .footer__line",
    ".home-page .footer__copy",
  ]);

  useScrollVisibility([
    ".home-page .bar__logoWrap",
    ".home-page .brand",
    ".home-page .intro-left",
    ".home-page .intro-right",
    ".home-page .services-section",
    ".home-page .service-card",
    ".home-page .clients-section",
    ".home-page .client-title",
    ".home-page .clients-row",
    ".home-page .client-box",
    ".home-page .projects-section .big",
    ".home-page .projects-section .small",
  ]);

  return (
    <div className="home-page">
<section className="hero">
        <div className="hero__crane"></div>
        <div className="hero__overlay"></div>

        <div className="bar">
          <div className="bar__logoWrap">
            <img
              className="bar__logo"
              src="/logo.webp"
              alt="URBAN iNFiLL Logo"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="bar__menu">
            <Link to="/architecture" className="bar__item">ARCHITECTURE</Link>
            <span className="bar__sep">|</span>
            <Link to="/interior" className="bar__item">INTERIOR</Link>
            <span className="bar__sep">|</span>
            <Link to="/projectmanagement" className="bar__item">
              PROJECT MANAGEMENT
            </Link>
          </div>
        </div>

        <div className="brand">
          <h1 className="brand__title">
            URBAN iNFiLL <span className="bar__since">SINCE 2018</span>
          </h1>
          <p className="brand__line">
            Architecture & Interior Design Firm Across India
          </p>
          <p className="brand__tag">thinking made visual</p>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-wrap">
          <div className="intro-left">
            <h2 className="section-heading">Filling in the Urban Gaps</h2>

            <p className="description">
              <strong>URBAN iNFiLL</strong> is a leading Pan-India architecture and commercial
              interior design firm headquartered in Gurgaon. We partner with corporate clients,
              developers, and institutions to design functional, future-ready spaces - from corporate
              office interiors and workplace architecture to multiplex cinema design, hospital planning,
              and large-scale hospitality projects.
            </p>

            <p className="description">
              With a proven track record spanning 20+ cities - including Delhi NCR,
              Mumbai, Bengaluru, Hyderabad, Kolkata, Pune, Chennai, and Kochi -
              URBAN iNFiLL combines strategic space planning, operational efficiency,
              and contemporary design to deliver commercial environments built for performance.
            </p>

            <p className="highlight">
              No matter where you&apos;re located,
              <br />
              we can deliver exceptional design consultancy services
            </p>

            <div className="stats">
              <div>
                <Counter end={150} />
                <p>COMMERCIAL (OFFICES)</p>
              </div>

              <div>
                <Counter end={10} />
                <p>ENTERTAINMENT (CINEMAS)</p>
              </div>

              <div>
                <Counter end={15} />
                <p>HOSPITALITY<br />(F&amp;B + CLUB HOUSE)</p>
              </div>

              <div>
                <Counter end={10} />
                <p>MEDICAL<br />(HOSPITAL + CLINICS)</p>
              </div>

              <div>
                <Counter end={20} />
                <p>CITIES</p>
              </div>
            </div>
          </div>

            <div className="intro-right">
              <div className="map-stage">
                <img src="/Map.webp" alt="Cities covered map" loading="lazy" decoding="async" />

                {cities.map((city) => (
                  <div
                    key={city.name}
                    className="city-marker"
                    style={{
                      left: `${(city.x / 1290) * 63}%`,
                      top: `${(city.y / 1971) * 100}%`,
                    }}
                  >
                    <span className={`city-dot ${city.isRed ? "red" : ""}`}></span>
                    <span className={`city-label ${city.cls}`}>{city.name}</span>
                  </div>
                ))}
              </div>
              <div className="legend">
                <span className="red-dot"></span>
                <p>ON-GOING PROJECTS</p>
              </div>
              <div className="legend">
                <span className="blue-dot"></span>
                <p>CITIES COVERED</p>
              </div>
            </div>
          </div>
      </section>

      <section className="services-section">
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img
                src={service.icon}
                alt={service.alt}
                loading="lazy"
                decoding="async"
              />
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="clients-section">
        <div className="client-title">
          <h2>OUR VALUED CLIENTS</h2>
          <img src="/scale-1.webp" alt="" className="scale" loading="lazy" decoding="async" />
        </div>

        <div className="clients-wrap">
          <div className="clients-row">
            {clients.map((client) => (
              <div key={client.name} className="client-box">
                <img src={client.src} alt={client.name} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
        <img src="/scale-2.webp" alt="" className="scale" loading="lazy" decoding="async" />
      </section>
      <section className="projects-section">
        <h2 className="projects-title">Featured Projects</h2>
        <div className="collage">
          <div className="collageRow collageRow--A">
            <div className="big">
              <Link to="/Projects/3" className="big">
                <img src="/projects/01_sirsa mall.webp" alt="Sirsa Mall" loading="lazy" decoding="async" />
                <div className="hoverOverlay">
                  <div className="hoverFrame" />
                  <div className="hoverText">
                    <h3>Monsoon Mall</h3>
                    <p>Sirsa, Haryana</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="stack">
              <div className="small">
                <Link to="/Interiors/5" className="small">
                  <img src="/projects/02_samsung.webp" alt="Samsung Office" loading="lazy" decoding="async" />
                  <div className="hoverOverlay">
                    <div className="hoverFrame" />
                    <div className="hoverText">
                      <h3>SAMSUNG</h3>
                      <p>OFFICE</p>
                    </div>
                  </div>
                </Link>
              </div>
              <Link to="/Interiors/6" className="small">
                <img src="/projects/03_uc.webp" alt="Urban Workspace" loading="lazy" decoding="async" />
                <div className="hoverOverlay">
                  <div className="hoverFrame" />
                  <div className="hoverText">
                    <h3>URBAN</h3>
                    <p>WORKSPACE</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="collageRow collageRow--B">
            <div className="stack">
              <div className="small">
                <img src="/projects/04_flipkart.webp" alt="Flipkart office project" loading="lazy" decoding="async" />
                <div className="hoverOverlay">
                  <div className="hoverFrame" />
                  <div className="hoverText">
                    <h3>FLIPKART</h3>
                    <p>OFFICE</p>
                  </div>
                </div>
              </div>
              <div className="small">
                <img src="/projects/06_HOME THEATER.webp" alt="Home theatre project" loading="lazy" decoding="async" />
                <div className="hoverOverlay">
                  <div className="hoverFrame" />
                  <div className="hoverText">
                    <h3>THEATRE</h3>
                    <p>INTERIOR</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="big">
              <Link to="/Interiors/4" className="small">
                <img src="/projects/05_cineport.webp" alt="Cineport Cinema" loading="lazy" decoding="async" />
                <div className="hoverOverlay">
                  <div className="hoverFrame" />
                  <div className="hoverText">
                    <h3>CINEPORT</h3>
                    <p>CINEMA</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="collageRow collageRow--A">
            <div className="big">
              <Link to="/Interiors/3" className="small">
                <img src="/projects/07_BBI.webp" alt="BBI Commercial" loading="lazy" decoding="async" />
                <div className="hoverOverlay">
                  <div className="hoverFrame" />
                  <div className="hoverText">
                    <h3>BBI</h3>
                    <p>COMMERCIAL</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="stack">
              <div className="small">
                <Link to="/Interiors/2" className="small">
                  <img src="/projects/08_urban canteen.webp" alt="Urban Canteen" loading="lazy" decoding="async" />
                  <div className="hoverOverlay">
                    <div className="hoverFrame" />
                    <div className="hoverText">
                      <h3> URBAN CANTEEN</h3>
                      <p>Bhubaneswar, Odisha</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="small">
                <img src="/projects/09_interior.webp" alt="Luxury interior project" loading="lazy" decoding="async" />
                <div className="hoverOverlay">
                  <div className="hoverFrame" />
                  <div className="hoverText">
                    <h3>INTERIOR</h3>
                    <p>LUXURY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quoteSection">
        <Link to="/archives" className="quoteBtnLink">
          ARCHIVES PROJECTS
        </Link>

        <h2 className="quoteText">
          A DREAM DOESN&apos;T BECOME REALITY THROUGH MAGIC,
          <br />
          IT TAKES SWEAT, DETERMINATION AND HARDWORK.
        </h2>
      </section>
</div>
  );
}

export default Home;

