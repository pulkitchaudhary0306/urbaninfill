import { FaBriefcase, FaUsers, FaChartLine, FaEnvelope } from "react-icons/fa";
import "../HeaderFooter/Header.css";
import "./Career.css";
import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";

const jobOpenings = [
  {
    id: 1,
    title: "Architect Intern",
    location: "GURUGRAM",
    type: "INTERNSHIP",
    description: "Learn design development, drafting support, and presentation workflows with our team."
  },
  {
    id: 2,
    title: "3D Designer",
    location: "GURUGRAM",
    type: "INTERNSHIP",
    description: "Lead concept coordination, site execution, and client communication across live projects."
  },
  {
    id: 3,
    title: "Interior Designer",
    location: "GURUGRAM",
    type: "INTERNSHIP",
    description: "Shape residential and commercial interior experiences from planning to finish details."
  }
];

function Career() {
  usePageReveal([
    ".career-page .career-hero-content > *",
    ".career-page .career-top-card",
    ".career-page .benefits-section",
    ".career-page .job-card",
  ]);

  useScrollVisibility([
    ".career-page .career-hero-content",
    ".career-page .career-top-section",
    ".career-page .benefits-section",
    ".career-page .jobs-section",
  ]);

  return (
    <div className="career-page">
      <section className="career-hero">
        <div className="career-hero-overlay">
          <div className="career-hero-content">
            <h1>CAREERS</h1>
          </div>
        </div>
      </section>

      <section className="career-top-section">
        <div className="career-top-container">
          <div className="career-top-card career-card-white">
            <span className="card-label">WHY URBAN INFILL</span>
            <h2>Build work that matters</h2>
            <p>
              Our studio works on architecture, interiors, and project management 
              with a focus on detail, function, and long term value. If you care about 
              quality and want to grow in a professional environment, we would like to 
              hear from you.
            </p>
          </div>

          <div className="career-top-card career-card-dark">
            <span className="card-label">APPLY</span>
            <h2>Share your portfolio</h2>
            <p>
              Send your CV, portfolio, and a short note about the role you are 
              interested in. We review applications for current and future 
              opportunities.
            </p>
            <a href="mailto:info@urbaninfill.in" className="career-link">
              info@urbaninfill.in
            </a>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <span className="section-label">WHAT WE OFFER</span>
        <h2 className="section-heading">A professional place to grow</h2>
        
        <div className="benefits-cards">
          <div className="benefit-card-icon">
            <div className="benefit-icon-wrap">
              <FaBriefcase />
            </div>
            <h4>Design-led work</h4>
            <p>Work across architecture, interiors, and project delivery with real client outcomes.</p>
          </div>
          <div className="benefit-card-icon">
            <div className="benefit-icon-wrap">
              <FaUsers />
            </div>
            <h4>Collaborative team</h4>
            <p>Join a studio culture built around mentorship, precision, and shared ownership.</p>
          </div>
          <div className="benefit-card-icon">
            <div className="benefit-icon-wrap">
              <FaChartLine />
            </div>
            <h4>Growth mindset</h4>
            <p>Build skills in a fast-moving environment that values learning and accountability.</p>
          </div>
        </div>
      </section>

      <section className="jobs-section">
        <div className="jobs-container">
            <span className="section-label">OPEN ROLES</span>
          <h2 className="section-heading">Current opportunities</h2>
          <div className="jobs-grid">
            {jobOpenings.map((job) => (
              <div key={job.id} className="job-card">
                <span className="job-type">{job.type}</span>
                <span className="job-location">{job.location}</span>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="career-cta-section">
        <div className="career-cta-content">
          <h2>Think you are a good fit?</h2>
          <p>We would be glad to review your background and see where you can add value to the team.</p>
          <div className="cta-buttons">
            <a href="mailto:careers@urbaninfill.in" className="cta-btn-primary">
              <FaEnvelope /> Apply Now
            </a>
            <a href="tel:+911244241186" className="cta-btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Career;
