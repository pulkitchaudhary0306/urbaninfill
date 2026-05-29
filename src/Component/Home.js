import { useEffect, useRef, useState, memo } from "react";

import { Link } from "react-router-dom";

import { FaBuilding, FaCouch, FaFilm, FaHospital, FaUtensils, FaHome } from "react-icons/fa";

import usePageReveal from "./usePageReveal";

import useScrollVisibility from "./useScrollVisibility";

import "../HeaderFooter/Header.css";

import "./Home.css";
import LazyImage from "./LazyImage";
import TESTIMONIALS from "./testimonialsData";



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

  { name: "Reliance", src: "/logo/reliance.avif" },

  { name: "Airtel", src: "/logo/airtel.avif" },

  { name: "Medanta", src: "/logo/medanta.avif" },

  { name: "United", src: "/logo/united.avif" },

  { name: "UrbanClap", src: "/logo/urbanclap.avif" },

  { name: "Google", src: "/logo/google.avif" },

  { name: "Samsung", src: "/logo/samsung.avif" },

  { name: "Lenskart", src: "/logo/lenskart.avif" },

  { name: "DLF", src: "/logo/dlf.avif" },

  { name: "Honda", src: "/logo/honda.avif" },

  { name: "GAAR", src: "/logo/gaar.avif" },

  { name: "Cine", src: "/logo/cine.avif" },

  { name: "FICCI", src: "/logo/ficci.avif" },

  { name: "PB", src: "/logo/pblogo.avif" },

  { name: "Startek", src: "/logo/startek.avif" },

  { name: "Foundever", src: "/logo/foundever.avif" },

  { name: "Axis Bank", src: "/logo/axis.avif" },

  { name: "NIC", src: "/logo/nic.avif" },

  { name: "Cars24", src: "/logo/cars24.avif" },

  { name: "Personiv", src: "/logo/personiv.avif" },

  { name: "Popular", src: "/logo/popular.avif" },

  { name: "Royal", src: "/logo/royal.avif" },

  { name: "Sitel", src: "/logo/sitel.avif" },

  { name: "Kyndryl", src: "/logo/kyndryl.avif" },

  { name: "Ashoka", src: "/logo/ashoka.avif" },

  { name: "IBM", src: "/logo/ibm.avif" },

  { name: "NTT", src: "/logo/ntt.avif" },

  { name: "Myntra", src: "/logo/myntra.avif" },

  { name: "Cog", src: "/logo/cog.avif" },

  { name: "Konika", src: "/logo/konika.avif" },

  { name: "Allied", src: "/logo/allied.avif" },

  { name: "Convergys", src: "/logo/convergys.avif" },

  { name: "HSBC", src: "/logo/hsbc.avif" },

  { name: "Bhatra", src: "/logo/bhatra.avif" },

  { name: "YKK", src: "/logo/ykk.avif" },

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

const featuredProjectItems = [
  {
    title: "The Aravali Resort",
    src: "/Architecture/Aravali/aravali-resort-main-exterior-rishikesh.avif",
    alt: "The Aravali Resort architecture",
    link: "/architecture-projects/aravali-resort-hospitality-design-india",
  },
  {
    title: "Sargam Theatre",
    src: "/Architecture/Sargam/sargam-theatre-main-exterior-chandpur.avif",
    alt: "Sargam Theatre exterior",
    link: "/architecture-projects/ssargam-cinema-multiplex-design-india",
  },
  {
    title: "Monsoon Mall",
    src: "/Architecture/Sirsa/monsoon-mall-commercial-exterior-sirsa.avif",
    alt: "Monsoon Mall commercial architecture",
    link: "/architecture-projects/moonson-mall-hospitality-retail-design-sirsa",
  },
  {
    title: "Ananta Hospital",
    src: "/Architecture/Ananta/ananta-hospital-healthcare-exterior-gurugram.avif",
    alt: "Ananta Hospital healthcare architecture",
    link: "/architecture-projects/annanta-hospital-healthcare-design-india",
  },
  {
    title: "Movie Lounge Expansion",
    src: "/Interiors/MovieLounge/movie-lounge-cinema-expansion-main-dehradun.avif",
    alt: "Movie Lounge cinema expansion",
    link: "/architecture-projects/movie-lounge-crossroad-mall-dehradun-expansion",
  },
  {
    title: "Darbaripur Residence",
    src: "/Architecture/DarbaripurHouse/main-view.avif",
    alt: "Darbaripur luxury bungalow architecture",
    link: "/architecture-projects/darbaripur-modern-facade-design",
  },
  {
    title: "Club House Sirsa",
    src: "/Architecture/ClubHouseSirsa/club-house-sirsa-main.avif",
    alt: "Club House Sirsa recreational architecture",
    link: "/architecture-projects/club-house-sirsa-recreational-space",
  },
  {
    title: "AKSHORA PADAMPURI",
    src: "/Architecture/AKSHORA PADAMPURI Uttarakhand/hill-view-resort-main.avif",
    alt: "AKSHORA PADAMPURI resort architecture",
    link: "/architecture-projects/hill-view-resort-hospitality-design",
  },
  {
    title: "Jindal Stone",
    src: "/Architecture/JindalStone/jindal-stone-main-facade.avif",
    alt: "Jindal Stone showroom facade",
    link: "/architecture-projects/jindal-stone-showroom-exterior-design",
  },
  {
    title: "Mrs. Jyoti Yadav Hotel",
    src: "/Architecture/JyotiYadavHotel/jyoti-yadav-hotel-main.avif",
    alt: "Mrs. Jyoti Yadav Hotel facade",
    link: "/architecture-projects/mrs-jyoti-yadav-hotel-hospitality-design",
  },
  {
    title: "United Airlines Office",
    src: "/Interiors/United/united-airlines-premium-office-main-delhi.avif",
    alt: "United Airlines premium office interior",
    link: "/interiors/united-airlines-office-interior-t3-delhi",
  },
  {
    title: "Urban Canteen",
    src: "/projects/08-urban-canteen.avif",
    alt: "Urban Canteen restaurant interior",
    link: "/interiors/urban-canteen-cafe-interior-bhubaneswar",
  },
  {
    title: "BBI Booze Buzz",
    src: "/projects/07-bbi.avif",
    alt: "BBI restaurant and bar interior",
    link: "/interiors/restaurant-club-design-bbi-bhubaneswar",
  },
  {
    title: "Cineport Multiplex",
    src: "/projects/05-cineport.avif",
    alt: "Cineport multiplex interior",
    link: "/interiors/cineport-svh-5-screen-multiplex-gurgaon",
  },
  {
    title: "Samsung Corporate Office",
    src: "/projects/02-samsung.avif",
    alt: "Samsung corporate office interior",
    link: "/interiors/samsung-office-interior-design-dehradun",
  },
  {
    title: "Urban Company Office",
    src: "/projects/03-uc.avif",
    alt: "Urban Company corporate office interior",
    link: "/interiors/urban-company-it-head-office-interior-bangalore",
  },
  {
    title: "Movie Lounge Interior",
    src: "/Interiors/MovieLounge/movie-lounge-cinema-expansion-main-dehradun.avif",
    alt: "Movie Lounge cinema interior",
    link: "/interiors/movie-lounge-crossroad-mall-dehradun-expansion",
  },
  {
    title: "Batra Hospital Cathlab",
    src: "/Architecture/BatraHospital/batra-hospital-cathlab-main-delhi.avif",
    alt: "Batra Hospital cathlab interior",
    link: "/interiors/batra-hospital-medical-research-centre-cathlab-renovation",
  },
  {
    title: "Lenskart Store",
    src: "/Interiors/Lenskart/lenskart-store-main.avif",
    alt: "Lenskart store interior",
    link: "/interiors/lenskart-Office-interior-design",
  },
  {
    title: "Mayom Hospital",
    src: "/Interiors/MayomHospital/gita-gyan-main.avif",
    alt: "Mayom Hospital interior",
    link: "/interiors/mayom-hospital-interior-design",
  },
  {
    title: "Club House Sirsa Interior",
    src: "/Architecture/ClubHouseSirsa/club-house-sirsa-main.avif",
    alt: "Club House Sirsa interior project",
    link: "/interiors/club-house-sirsa-recreational-space",
  },
  {
    title: "MET Reliance",
    src: "/Interiors/METReliance/main-hall.avif",
    alt: "MET Reliance interior design",
    link: "/interiors/met-reliance-interior-design",
  },
  {
    title: "Anand Group",
    src: "/Interiors/AnandGroup/anand-group-main-hall.avif",
    alt: "Anand Group Hauz Khas interior",
    link: "/interiors/anand-group-hauz-khas-interior-design",
  },
];

const featuredProjectSets = featuredProjectItems.map((_, index) =>
  [0, 1, 2].map((offset) => featuredProjectItems[(index + offset) % featuredProjectItems.length])
);

const Counter = memo(function Counter({ end, duration = 2000, suffix = " +" }) {

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

});







function HomeComponent() {

  const galleryRef = useRef(null);
  const [brandVisible, setBrandVisible] = useState(false);

  const brandRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = TESTIMONIALS.length; // Number of testimonials

  const [featuredSetIndex, setFeaturedSetIndex] = useState(0);

  const [isFeaturedPaused, setIsFeaturedPaused] = useState(false);

  const featuredProjects = featuredProjectSets[featuredSetIndex];

  const nextFeaturedProjects = featuredProjectSets[(featuredSetIndex + 1) % featuredProjectSets.length];



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

  useEffect(() => {
    if (isFeaturedPaused) return undefined;

    const interval = setInterval(() => {
      setFeaturedSetIndex((prev) => (prev + 1) % featuredProjectSets.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isFeaturedPaused]);

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
    if (!galleryRef.current) {
      console.log('Gallery not found');
      return;
    }
    
    const scrollAmount = 384; // Card width (360px) + gap (24px)
    const currentScroll = galleryRef.current.scrollLeft;
    
    if (direction === 'left') {
      galleryRef.current.scrollTo({ left: Math.max(0, currentScroll - scrollAmount), behavior: 'smooth' });
    } else {
      galleryRef.current.scrollTo({ left: currentScroll + scrollAmount, behavior: 'smooth' });
    }
  };

  const renderFeaturedTile = (project, nextProject, className = "") => (
    <div
      key={`${project.title}-${featuredSetIndex}`}
      className={`featured-collage-item ${className}`.trim()}
    >
      <Link to={project.link} className="featured-collage-link featured-collage-link--current">
        <img
          className="featured-collage-image"
          src={project.src}
          alt={project.alt}
          loading="lazy"
          decoding="async"
        />
        <span className="featured-collage-title">{project.title}</span>
      </Link>
      <Link to={nextProject.link} className="featured-collage-link featured-collage-next">
        <img
          className="featured-collage-image"
          src={nextProject.src}
          alt={nextProject.alt}
          loading="lazy"
          decoding="async"
        />
        <span className="featured-collage-title">{nextProject.title}</span>
      </Link>
      <span className="featured-collage-divider" aria-hidden="true"></span>
    </div>
  );

  return (

    <div className="home-page">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero__crane"></div>

        <div className="hero__overlay"></div>



        <div className="bar">

          <div className="bar__logoWrap">

            <LazyImage

              className="bar__logo"

              src="/logo.avif"

              alt="URBAN iNFiLL Logo"

              decoding="async"

            />

          </div>



          <div className="bar__menu">

            <Link to="/architecture" className="bar__item">ARCHITECTURE</Link>

            <span className="bar__sep">|</span>

            <Link to="/interior" className="bar__item">INTERIOR</Link>

            <span className="bar__sep">|</span>

            <Link to="/project-management" className="bar__item">

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



            {/* Intro Section */}
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

                <LazyImage src="/map.avif" alt="Cities covered map" decoding="async" />



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

     


            {/* Clients Section */}
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

              <span className="stat-value">50+</span>

              <span className="stat-desc">Valued Clients</span>

            </div>

            <div className="stat-box">

              <span className="stat-value">500+</span>

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
              {/* Services Section */}
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


      



            {/* Featured Work Section */}
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

        <div
          className={`featured-collage ${featuredSetIndex % 2 === 1 ? "featured-collage--reverse" : ""}`}
          aria-label="Featured project highlights"
          onMouseEnter={() => setIsFeaturedPaused(true)}
          onMouseLeave={() => setIsFeaturedPaused(false)}
          onFocus={() => setIsFeaturedPaused(true)}
          onBlur={() => setIsFeaturedPaused(false)}
        >
          {renderFeaturedTile(featuredProjects[0], nextFeaturedProjects[0], "featured-collage-item--large")}
          <div className="featured-collage-stack">
            {featuredProjects.slice(1).map((project, index) =>
              renderFeaturedTile(project, nextFeaturedProjects[index + 1])
            )}
          </div>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="work-gallery" ref={galleryRef}>
          <div className="work-track">
            {/* Project 1 */}
            <Link to="/architecture-projects/moonson-mall-hospitality-retail-design-sirsa" className="work-item">
              <div className="work-image-container">
                <div className="work-image">
                  <img src="/Architecture/Sirsa/monsoon-mall-commercial-exterior-sirsa.avif" alt="Monsoon Mall" loading="lazy" decoding="async" />
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
            <Link to="/interiors/cineport-svh-5-screen-multiplex-gurgaon" className="work-item">
              <div className="work-image-container">
                <div className="work-image">
                  <img src="/projects/05-cineport.avif" alt="Cineport Cinema" loading="lazy" decoding="async" />
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
            <Link to="/interiors/samsung-office-interior-design-dehradun" className="work-item">
              <div className="work-image-container">
                <div className="work-image">
                  <img src="/projects/02-samsung.avif" alt="Samsung Office" loading="lazy" decoding="async" />
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
            <Link to="/interiors/urban-company-it-head-office-interior-bangalore" className="work-item">
              <div className="work-image-container">
                <div className="work-image">
                  <img src="/projects/03-uc.avif" alt="Urban Company" loading="lazy" decoding="async" />
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
            <Link to="/interiors/restaurant-club-design-bbi-bhubaneswar" className="work-item">
              <div className="work-image-container">
                <div className="work-image">
                  <img src="/projects/07-bbi.avif" alt="BBI Restaurant" loading="lazy" decoding="async" />
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
            <Link to="/interiors/urban-canteen-cafe-interior-bhubaneswar" className="work-item">
              <div className="work-image-container">
                <div className="work-image">
                  <img src="/projects/08-urban-canteen.avif" alt="Urban Canteen" loading="lazy" decoding="async" />
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
                  <img src="/projects/04-flipkart.avif" alt="Flipkart Office" loading="lazy" decoding="async" />
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
                  <img src="/projects/06-home-theater.avif" alt="Home Theater" loading="lazy" decoding="async" />
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
            <Link to="/luxury-homes" className="work-item">
              <div className="work-image-container">
                <div className="work-image">
                  <img src="/projects/09-interior.avif" alt="Luxury Interior" loading="lazy" decoding="async" />
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


       

{/* Testimonials Section */}
<section className="testimonials-section">

        <div className="testimonials-title">

          <h2>What Clients Says</h2>

        </div>



        <div className="testimonials-wrap">

          <div className="testimonial-slider" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>

            <div className="testimonial-viewport">

              <div className="testimonial-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {TESTIMONIALS.map((testimonial) => (
                  <div className="testimonial-card" key={testimonial.id}>
                    <div className="testimonial-head">
                      <span className="testimonial-badge">{testimonial.badge}</span>
                      <div className="testimonial-stars" aria-label={`${testimonial.rating} out of 5 stars`}>
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <span key={i} className="star">&#9733;</span>
                        ))}
                      </div>
                    </div>
                    <div className="testimonial-content">
                      {testimonial.content.map((p, i) => (
                        <p key={i} className="testimonial-text">{p}</p>
                      ))}
                    </div>
                    <div className="testimonial-author">
                      <h4 className="author-name">{testimonial.author}</h4>
                      <p className="author-time">{testimonial.time}</p>
                    </div>
                  </div>
                ))}
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

                  {/* Quote Section */}
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



export default memo(HomeComponent);
