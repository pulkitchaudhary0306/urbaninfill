import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import { FaBuilding, FaCouch, FaFilm, FaHospital, FaUtensils, FaHome } from "react-icons/fa";

import usePageReveal from "./usePageReveal";

import useScrollVisibility from "./useScrollVisibility";

import "../HeaderFooter/Header.css";

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

  { name: "Reliance", src: "/logo/reliance.webp" },

  { name: "Airtel", src: "/logo/airtel.webp" },

  { name: "Medanta", src: "/logo/medanta.webp" },

  { name: "United", src: "/logo/united.webp" },

  { name: "UrbanClap", src: "/logo/urbanclap.webp" },

  { name: "Google", src: "/logo/google.webp" },

  { name: "Samsung", src: "/logo/samsung.webp" },

  { name: "Lenskart", src: "/logo/lenskart.webp" },

  { name: "DLF", src: "/logo/dlf.webp" },

  { name: "Honda", src: "/logo/honda.webp" },

  { name: "GAAR", src: "/logo/gaar.webp" },

  { name: "Cine", src: "/logo/cine.webp" },

  { name: "FICCI", src: "/logo/ficci.webp" },

  { name: "PB", src: "/logo/pblogo.webp" },

  { name: "Startek", src: "/logo/startek.webp" },

  { name: "Foundever", src: "/logo/foundever.webp" },

  { name: "Axis Bank", src: "/logo/axis.webp" },

  { name: "NIC", src: "/logo/nic.webp" },

  { name: "Cars24", src: "/logo/cars24.webp" },

  { name: "Personiv", src: "/logo/personiv.webp" },

  { name: "Popular", src: "/logo/popular.webp" },

  { name: "Royal", src: "/logo/royal.webp" },

  { name: "Sitel", src: "/logo/sitel.webp" },

  { name: "Kyndryl", src: "/logo/kyndryl.webp" },

  { name: "Ashoka", src: "/logo/ashoka.webp" },

  { name: "IBM", src: "/logo/ibm.webp" },

  { name: "NTT", src: "/logo/ntt.webp" },

  { name: "Myntra", src: "/logo/myntra.webp" },

  { name: "Cog", src: "/logo/cog.webp" },

  { name: "Konika", src: "/logo/konika.webp" },

  { name: "Allied", src: "/logo/allied.webp" },

  { name: "Convergys", src: "/logo/convergys.webp" },

  { name: "HSBC", src: "/logo/hsbc.webp" },

  { name: "Bhatra", src: "/logo/bhatra.webp" },

  { name: "YKK", src: "/logo/ykk.webp" },

];



const services = [

  {

    title: "Corporate Office Architecture & Workplace Design India",

    shortDescription:

      "High-performance corporate office architecture integrating hybrid workspaces, smart lighting, and biophilic design.",

    fullDescription: `In the evolving landscape of Corporate India 2026, office design is no longer just about desks - it is about brand storytelling and hybrid flexibility. URBAN iNFiLL delivers high-performance workplace interiors that integrate biophilic elements, IoT-enabled smart lighting, and modular collaboration pods. Our designs across Bengaluru, Hyderabad, and Pune prioritize employee wellness and operational efficiency, helping companies maximize ROI on their physical real estate.`,

    icon: FaBuilding,

  },

  {

    title: "Commercial Interior Design & Fit-Out Solutions India",

    shortDescription:

      "End-to-end commercial interior design solutions focused on efficiency, branding, and user experience.",

    fullDescription: `We deliver commercial interior design and fit-out solutions that align brand identity with functionality. Our approach ensures optimized layouts, efficient workflows, and engaging customer environments across retail spaces and corporate offices.`,

    icon: FaCouch,

  },

  {

    title: "Cinema Architecture & Multiplex Design Consultants India",

    shortDescription:

      "Specialized cinema architecture with advanced acoustic engineering and immersive multiplex design.",

    fullDescription: `As a premier cinema architecture firm in India, URBAN iNFiLL specializes in creating immersive entertainment hubs. From high-end multiplex design in Tier-1 cities to boutique cinema planning in regional centers like Sirsa and Jhajjar, we combine advanced acoustic engineering with brand theater aesthetics. We do not just design theaters - we create destination-driven environments that redefine the movie-going experience.`,

    icon: FaFilm,

  },

  {

    title: "Hospital Architecture & Healthcare Planning India",

    shortDescription:

      "Patient-centric hospital architecture and healthcare planning focused on efficiency and safety.",

    fullDescription: `Our healthcare architecture and hospital planning solutions focus on patient experience, infection control, and operational efficiency. We design future-ready hospitals and medical facilities that meet global standards while optimizing workflow and care delivery.`,

    icon: FaHospital,

  },

  {

    title: "Hospitality Architecture (Restaurants, Clubs & Banquets)",

    shortDescription:

      "Innovative hospitality architecture creating engaging and memorable guest environments.",

    fullDescription: `We design hospitality spaces that seamlessly blend ambiance, functionality, and brand storytelling. Our expertise spans restaurants, clubs, and banquet venues, creating immersive environments that enhance customer experience and operational performance.`,

    icon: FaUtensils,

  },

  {

    title: "Luxury Residential Architecture & High-End Interiors India",

    shortDescription:

      "Premium residential architecture and luxury interiors tailored for modern lifestyles.",

    fullDescription: `Our luxury residential architecture and high-end interior design solutions combine aesthetics, comfort, and cutting-edge technology. We create sophisticated living environments that reflect modern lifestyles while delivering functionality and long-term value.`,

    icon: FaHome,

  },

];

function Counter({ end, duration = 2000, suffix = " +" }) {

  const [count, setCount] = useState(0);

  const [isVisible, setIsVisible] = useState(false);

  const [hasAnimated, setHasAnimated] = useState(false);

  const ref = useRef(null);



  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setIsVisible(true);

          setHasAnimated(true);

        } else {

          setIsVisible(false);

          // Reset counter when out of view

          if (hasAnimated) {

            setCount(0);

          }

        }

      },

      { threshold: 0.3 }

    );



    if (ref.current) observer.observe(ref.current);



    return () => observer.disconnect();

  }, [hasAnimated]);



  useEffect(() => {

    if (!isVisible) return;



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

  }, [isVisible, end, duration]);



  return <h3 ref={ref}>{count}{suffix}</h3>;

}







function Home() {

  const [brandVisible, setBrandVisible] = useState(false);

  const brandRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 4; // Number of testimonials



  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setBrandVisible(true);

        } else {

          setBrandVisible(false);

        }

      },

      { threshold: 0.3 }

    );



    if (brandRef.current) {

      observer.observe(brandRef.current);

    }



    return () => observer.disconnect();

  }, []);



  const [isPaused, setIsPaused] = useState(false);



  useEffect(() => {

    if (isPaused) return;



    const interval = setInterval(() => {

      setCurrentSlide((prev) => (prev + 1) % totalSlides);

    }, 5000); // Change slide every 5 seconds



    return () => clearInterval(interval);

  }, [totalSlides, isPaused]);



  usePageReveal([

    ".home-page .intro-left > *",

    ".home-page .intro-right > *",

    ".home-page .service-card",

    ".home-page .clients-section",

    ".home-page .client-title > *",

    ".home-page .clients-wrap",

    ".home-page .clients-row",

    ".home-page .client-box",

    ".home-page .client-box img",

    ".home-page .testimonials-section",

    ".home-page .testimonials-title > *",

    ".home-page .testimonials-wrap",

    ".home-page .testimonial-card",

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

    ".home-page .testimonials-section",

    ".home-page .testimonials-title",

    ".home-page .testimonials-wrap",

    ".home-page .testimonial-card",

    ".home-page .projects-section .big",

    ".home-page .projects-section .small",

  ]);



  // Custom scroll reveal for featured projects - triggers every time on scroll

  useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            // Add visible class when scrolling into view

            entry.target.classList.add("project-reveal-visible");

          } else {

            // Remove visible class when scrolling out of view (reset for next time)

            entry.target.classList.remove("project-reveal-visible");

          }

        });

      },

      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }

    );



    const projectCards = document.querySelectorAll(".collageRow .big, .collageRow .small");

    projectCards.forEach((card) => observer.observe(card));



    return () => observer.disconnect();

  }, []);

  // Gallery scroll functionality with 360-degree rotation
  const scrollGallery = (direction) => {
    const gallery = document.querySelector('.work-gallery');
    if (!gallery) {
      console.log('Gallery not found');
      return;
    }
    
    const scrollAmount = 384; // Card width (360px) + gap (24px)
    const currentScroll = gallery.scrollLeft;
    
    if (direction === 'left') {
      gallery.scrollTo({ left: Math.max(0, currentScroll - scrollAmount), behavior: 'smooth' });
    } else {
      gallery.scrollTo({ left: currentScroll + scrollAmount, behavior: 'smooth' });
    }
  };

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



        <div ref={brandRef} className="brand">

          <h1 className={`brand__title ${brandVisible ? 'animate-title' : ''}`}>

           URBAN iNFiLL <span className={`bar__since ${brandVisible ? 'animate-since' : ''}`}>SINCE 2018</span>

          </h1>

          <p className={`brand__line ${brandVisible ? 'animate-line' : ''}`}>

            Architecture & Interior Design Firm Across India

          </p>

          <p className={`brand__tag ${brandVisible ? 'animate-tag' : ''}`}>thinking made visual</p>

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

                <img src="/map.webp" alt="Cities covered map" loading="lazy" decoding="async" />



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

     


      <section className="clients-section">

        <div className="clients-container">

          <div className="clients-header-modern">

            <span className="clients-badge">Trusted Partners</span>

            <h2 className="clients-heading">Our Valued Clients</h2>

            <p className="clients-subtext">

              Proudly serving 35+ industry-leading brands across India with exceptional architectural solutions

            </p>

          </div>



          {/* Infinite Scrolling Marquee - Row 1 */}

          <div className="clients-marquee">

            <div className="marquee-track">

              {clients.slice(0, 12).map((client, index) => (

                <div key={`row1-${client.name}-${index}`} className="marquee-item">

                  <img src={client.src} alt={client.name} loading="lazy" decoding="async" />

                </div>

              ))}

              {/* Duplicate for seamless loop */}

              {clients.slice(0, 12).map((client, index) => (

                <div key={`row1-dup-${client.name}-${index}`} className="marquee-item">

                  <img src={client.src} alt={client.name} loading="lazy" decoding="async" />

                </div>

              ))}

            </div>

          </div>



          {/* Infinite Scrolling Marquee - Row 2 (Reverse) */}

          <div className="clients-marquee reverse">

            <div className="marquee-track">

              {clients.slice(12, 24).map((client, index) => (

                <div key={`row2-${client.name}-${index}`} className="marquee-item">

                  <img src={client.src} alt={client.name} loading="lazy" decoding="async" />

                </div>

              ))}

              {/* Duplicate for seamless loop */}

              {clients.slice(12, 24).map((client, index) => (

                <div key={`row2-dup-${client.name}-${index}`} className="marquee-item">

                  <img src={client.src} alt={client.name} loading="lazy" decoding="async" />

                </div>

              ))}

            </div>

          </div>



          {/* Infinite Scrolling Marquee - Row 3 */}

          <div className="clients-marquee">

            <div className="marquee-track">

              {clients.slice(24, 35).map((client, index) => (

                <div key={`row3-${client.name}-${index}`} className="marquee-item">

                  <img src={client.src} alt={client.name} loading="lazy" decoding="async" />

                </div>

              ))}

              {/* Duplicate for seamless loop */}

              {clients.slice(24, 35).map((client, index) => (

                <div key={`row3-dup-${client.name}-${index}`} className="marquee-item">

                  <img src={client.src} alt={client.name} loading="lazy" decoding="async" />

                </div>

              ))}

            </div>

          </div>



          {/* Stats Bar */}

          <div className="clients-stats-bar">

            <div className="stat-box">

              <span className="stat-value">35+</span>

              <span className="stat-desc">Valued Clients</span>

            </div>

            <div className="stat-box">

              <span className="stat-value">800+</span>

              <span className="stat-desc">Projects Delivered</span>

            </div>

            <div className="stat-box">

              <span className="stat-value">20+</span>

              <span className="stat-desc">Cities Covered</span>

            </div>

            <div className="stat-box">

              <span className="stat-value">8</span>

              <span className="stat-desc">Years Experience</span>

            </div>

          </div>

        </div>

      </section>
       <section className="services-section">

        <h2 className="services-title">Our Services</h2>

        <div className="services-container">

          {services.map((service, index) => {

            const IconComponent = service.icon;

            return (

              <article key={index} className={`service-card service-card--${index + 1}`}>

                <div className="service-top">

                  <div className="service-icon">

                    <IconComponent aria-hidden="true" />

                  </div>

                  <h3>{service.title}</h3>

                </div>

                <div className="service-step" aria-hidden="true">

                  {String(index + 1).padStart(2, "0")}

                </div>

              </article>

            );

          })}

        </div>

      </section>


      



      <section className="featured-work">
        <div className="work-header">
          <div className="work-header-content">
            <div className="work-badge">
              <span className="badge-icon">✦</span>
              <span className="badge-text">Portfolio Showcase</span>
            </div>
            <h2 className="work-title">
              <span className="title-highlight">Featured</span> Projects
            </h2>
            <p className="work-description">
              Explore our curated collection of award-winning architectural masterpieces and innovative interior designs
            </p>
          </div>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="work-gallery">
          <div className="work-track">
            {/* Project 1 */}
            <Link to="/ArchitectureProjects/moonson-mall-hospitality-retail-design-sirsa" className="work-item">
              <div className="work-image-container">
                <div className="work-image">
                  <img src="/Architecture/Sirsa/monsoon-mall-commercial-exterior-sirsa.webp" alt="Monsoon Mall" loading="lazy" decoding="async" />
                  <div className="image-overlay"></div>
                </div>
                <div className="project-number">01</div>
              </div>
              <div className="work-info">
                <div className="project-header">
                  <span className="work-tag premium-tag">Commercial</span>
                  <div className="project-meta">
                    <span className="year">2023</span>
                    <span className="location-dot">•</span>
                    <span className="location">Sirsa</span>
                  </div>
                </div>
                <h3 className="work-project-name">Monsoon Mall</h3>
                <p className="work-description-text">Award-winning commercial complex featuring modern retail architecture</p>
                <div className="project-footer">
                  <span className="view-project">View Project</span>
                  <div className="arrow-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Project 2 */}
            <Link to="/InteriorsProjects/cineport-svh-5-screen-multiplex-gurgaon" className="work-item">
              <div className="work-image-container">
                <div className="work-image">
                  <img src="/projects/05-cineport.webp" alt="Cineport Cinema" loading="lazy" decoding="async" />
                  <div className="image-overlay"></div>
                </div>
                <div className="project-number">02</div>
              </div>
              <div className="work-info">
                <div className="project-header">
                  <span className="work-tag premium-tag">Entertainment</span>
                  <div className="project-meta">
                    <span className="year">2023</span>
                    <span className="location-dot">•</span>
                    <span className="location">Multiplex</span>
                  </div>
                </div>
                <h3 className="work-project-name">Cineport</h3>
                <p className="work-description-text">State-of-the-art cinema complex with premium seating</p>
                <div className="project-footer">
                  <span className="view-project">View Project</span>
                  <div className="arrow-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Project 3 */}
            <Link to="/InteriorsProjects/samsung-office-interior-design-dehradun" className="work-item">
              <div className="work-image-container">
                <div className="work-image">
                  <img src="/projects/02-samsung.webp" alt="Samsung Office" loading="lazy" decoding="async" />
                  <div className="image-overlay"></div>
                </div>
                <div className="project-number">03</div>
              </div>
              <div className="work-info">
                <div className="project-header">
                  <span className="work-tag premium-tag">Corporate</span>
                  <div className="project-meta">
                    <span className="year">2022</span>
                    <span className="location-dot">•</span>
                    <span className="location">Dehradun</span>
                  </div>
                </div>
                <h3 className="work-project-name">Samsung</h3>
                <p className="work-description-text">Modern corporate office with sustainable design</p>
                <div className="project-footer">
                  <span className="view-project">View Project</span>
                  <div className="arrow-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Project 4 */}
            <Link to="/InteriorsProjects/urban-company-it-head-office-interior-bangalore" className="work-item">
              <div className="work-image-container">
                <div className="work-image">
                  <img src="/projects/03-uc.webp" alt="Urban Company" loading="lazy" decoding="async" />
                  <div className="image-overlay"></div>
                </div>
                <div className="project-number">04</div>
              </div>
              <div className="work-info">
                <div className="project-header">
                  <span className="work-tag premium-tag">Technology</span>
                  <div className="project-meta">
                    <span className="year">2023</span>
                    <span className="location-dot">•</span>
                    <span className="location">Bengaluru</span>
                  </div>
                </div>
                <h3 className="work-project-name">Urban Company</h3>
                <p className="work-description-text">Innovative tech workspace with collaborative zones</p>
                <div className="project-footer">
                  <span className="view-project">View Project</span>
                  <div className="arrow-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Project 5 */}
            <Link to="/InteriorsProjects/restaurant-club-design-bbi-bhubaneswar" className="work-item">
              <div className="work-image-container">
                <div className="work-image">
                  <img src="/projects/07-bbi.webp" alt="BBI Restaurant" loading="lazy" decoding="async" />
                  <div className="image-overlay"></div>
                </div>
                <div className="project-number">05</div>
              </div>
              <div className="work-info">
                <div className="project-header">
                  <span className="work-tag premium-tag">Hospitality</span>
                  <div className="project-meta">
                    <span className="year">2023</span>
                    <span className="location-dot">•</span>
                    <span className="location">Bhubaneswar</span>
                  </div>
                </div>
                <h3 className="work-project-name">BBI Booze Buzz</h3>
                <p className="work-description-text">Contemporary restaurant with innovative bar design</p>
                <div className="project-footer">
                  <span className="view-project">View Project</span>
                  <div className="arrow-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Project 6 */}
            <Link to="/InteriorsProjects/urban-canteen-cafe-interior-bhubaneswar" className="work-item">
              <div className="work-image-container">
                <div className="work-image">
                  <img src="/projects/08-urban-canteen.webp" alt="Urban Canteen" loading="lazy" decoding="async" />
                  <div className="image-overlay"></div>
                </div>
                <div className="project-number">06</div>
              </div>
              <div className="work-info">
                <div className="project-header">
                  <span className="work-tag premium-tag">Restaurant</span>
                  <div className="project-meta">
                    <span className="year">2022</span>
                    <span className="location-dot">•</span>
                    <span className="location">Bhubaneswar</span>
                  </div>
                </div>
                <h3 className="work-project-name">Urban Canteen</h3>
                <p className="work-description-text">Modern cafeteria with sustainable design elements</p>
                <div className="project-footer">
                  <span className="view-project">View Project</span>
                  <div className="arrow-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Project 7 */}
            <div className="work-item">
              <div className="work-image-container">
                <div className="work-image">
                  <img src="/projects/04-flipkart.webp" alt="Flipkart Office" loading="lazy" decoding="async" />
                  <div className="image-overlay"></div>
                </div>
                <div className="project-number">07</div>
              </div>
              <div className="work-info">
                <div className="project-header">
                  <span className="work-tag premium-tag">Corporate</span>
                  <div className="project-meta">
                    <span className="year">2023</span>
                    <span className="location-dot">•</span>
                    <span className="location">Office Space</span>
                  </div>
                </div>
                <h3 className="work-project-name">Flipkart</h3>
                <p className="work-description-text">Dynamic workspace with collaborative design</p>
                <div className="project-footer">
                  <span className="view-project">View Project</span>
                  <div className="arrow-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 8 */}
            <div className="work-item">
              <div className="work-image-container">
                <div className="work-image">
                  <img src="/projects/06-home-theater.webp" alt="Home Theater" loading="lazy" decoding="async" />
                  <div className="image-overlay"></div>
                </div>
                <div className="project-number">08</div>
              </div>
              <div className="work-info">
                <div className="project-header">
                  <span className="work-tag premium-tag">Residential</span>
                  <div className="project-meta">
                    <span className="year">2022</span>
                    <span className="location-dot">•</span>
                    <span className="location">Luxury Interior</span>
                  </div>
                </div>
                <h3 className="work-project-name">Home Theater</h3>
                <p className="work-description-text">Premium entertainment space with acoustic design</p>
                <div className="project-footer">
                  <span className="view-project">View Project</span>
                  <div className="arrow-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 9 */}
            <Link to="/uihomes" className="work-item">
              <div className="work-image-container">
                <div className="work-image">
                  <img src="/projects/09-interior.webp" alt="Luxury Interior" loading="lazy" decoding="async" />
                  <div className="image-overlay"></div>
                </div>
                <div className="project-number">09</div>
              </div>
              <div className="work-info">
                <div className="project-header">
                  <span className="work-tag premium-tag">Interior</span>
                  <div className="project-meta">
                    <span className="year">2023</span>
                    <span className="location-dot">•</span>
                    <span className="location">Residential</span>
                  </div>
                </div>
                <h3 className="work-project-name">Luxury Home</h3>
                <p className="work-description-text">Sophisticated interior with bespoke furnishings</p>
                <div className="project-footer">
                  <span className="view-project">View Project</span>
                  <div className="arrow-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            
          </div>
        </div>
        
        {/* Navigation Controls - Centered */}
        <div className="gallery-navigation">
          <button className="nav-btn prev-btn" onClick={() => scrollGallery('left')} aria-label="Previous project">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="nav-btn next-btn" onClick={() => scrollGallery('right')} aria-label="Next project">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

      </section>


       

<section className="testimonials-section">

        <div className="testimonials-title">

          <h2>What Clients Says</h2>

        </div>



        <div className="testimonials-wrap">

          <div className="testimonial-slider" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>

            <div className="testimonial-viewport">

              <div className="testimonial-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>

          <div className="testimonial-card">

            <div className="testimonial-head">

              <span className="testimonial-badge">Google Review</span>

              <div className="testimonial-stars" aria-label="5 out of 5 stars">

                <span className="star">&#9733;</span>

                <span className="star">&#9733;</span>

                <span className="star">&#9733;</span>

                <span className="star">&#9733;</span>

                <span className="star">&#9733;</span>

              </div>

            </div>

            <div className="testimonial-content">

              <p className="testimonial-text">

                I have worked closely with Urban Infill on multiple office design and fit-out projects in Gurugram over the years. From design development to detailed working drawings and execution support, their team brings strong clarity and technical understanding to every stage.

              </p>

              <p className="testimonial-text">

                What really helps on-site is their responsiveness and ability to resolve design and coordination issues quickly, especially during fast-track office interior projects. Their drawings are practical, well-detailed, and aligned with execution realities, which makes a big difference in timely delivery.

              </p>

              <p className="testimonial-text">

                For anyone looking for reliable office design services in Gurugram, Urban Infill is a highly dependable team with solid experience in commercial workspace projects.

              </p>

            </div>

            <div className="testimonial-author">

              <h4 className="author-name">Neeraj Pal</h4>

              <p className="author-time"> 5 weeks ago</p>

            </div>

          </div>



          <div className="testimonial-card">

            <div className="testimonial-head">

              <span className="testimonial-badge">Google Review</span>

              <div className="testimonial-stars" aria-label="5 out of 5 stars">

                <span className="star">&#9733;</span>

                <span className="star">&#9733;</span>

                <span className="star">&#9733;</span>

                <span className="star">&#9733;</span>

                <span className="star">&#9733;</span>

              </div>

            </div>

            <div className="testimonial-content">

              <p className="testimonial-text">

                We engaged Urban Infill for our office design and execution support across multiple locations including Dhanbad, Kolkata, and Patna. The team demonstrated strong planning skills and a clear understanding of commercial workspace requirements.

              </p>

              <p className="testimonial-text">

                Their coordination with different stakeholders was smooth throughout, and the projects were delivered on time without unnecessary delays. The design approach was practical, efficient, and aligned well with our operational needs.

              </p>

              <p className="testimonial-text">

                Highly recommended for office interior design and multi-city commercial projects. A professional team that ensures timely delivery and hassle-free execution.

              </p>

            </div>

            <div className="testimonial-author">

              <h4 className="author-name">Gaurav Goyal</h4>

              <p className="author-time"> 5 weeks ago</p>

            </div>

          </div>



          <div className="testimonial-card">

            <div className="testimonial-head">

              <span className="testimonial-badge">Google Review</span>

              <div className="testimonial-stars" aria-label="5 out of 5 stars">

                <span className="star">&#9733;</span>

                <span className="star">&#9733;</span>

                <span className="star">&#9733;</span>

                <span className="star">&#9733;</span>

                <span className="star">&#9733;</span>

              </div>

            </div>

            <div className="testimonial-content">

              <p className="testimonial-text">

                We the team of TRAVWIKI are grateful for all the help and effort that we have received for getting our startup venture set up done. We contacted numerous architecture but the service and budgeting that we received was commendable. Thanks Subhankar and the entire team of Urbaninfill.

              </p>

            </div>

            <div className="testimonial-author">

              <h4 className="author-name">TRAVWIKI </h4>

              <p className="author-time"> 5 weeks ago</p>

            </div>

          </div>



          <div className="testimonial-card">

            <div className="testimonial-head">

              <span className="testimonial-badge">Google Review</span>

              <div className="testimonial-stars" aria-label="5 out of 5 stars">

                <span className="star">&#9733;</span>

                <span className="star">&#9733;</span>

                <span className="star">&#9733;</span>

                <span className="star">&#9733;</span>

                <span className="star">&#9733;</span>

              </div>

            </div>

            <div className="testimonial-content">

              <p className="testimonial-text">

                I head Corporate Communications at EROS Group, New Delhi. We are truly delighted with the spectacular design concepts & on-site execution of URBAN iNFILL team. Subhankar is always on with his remarkable ideas & on-time delivery commitments.

              </p>

            </div>

            <div className="testimonial-author">

              <h4 className="author-name">Alakshendra Singh</h4>

              <p className="author-time">6 Mar 2020</p>

            </div>

          </div>

            </div>

          </div>

          <div className="testimonial-dots">

            {Array.from({ length: totalSlides }, (_, index) => (

              <button

                key={index}

                className={`testimonial-dot ${index === currentSlide ? 'active' : ''}`}

                onClick={() => setCurrentSlide(index)}

                aria-label={`Go to testimonial ${index + 1}`}

              />

            ))}

          </div>

        </div>

      </div>

      </section>

         <section className="quoteSection">

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





