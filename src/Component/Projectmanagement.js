import { Link } from "react-router-dom";
import "../HeaderFooter/Header.css";
import "./Projectmanagement.css";
import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";




function Projectmanagement() {
  usePageReveal([
    ".project-page .pm-hero-content > *",
    ".project-page .pm-status-card > *",
    ".project-page .footer__col",
    ".project-page .footer__line",
    ".project-page .footer__copy",
  ]);

  useScrollVisibility([
    ".project-page .pm-hero-content",
    ".project-page .pm-status-card",
  ]);

  return (
    <div className="project-page">
<div className="pm-hero">
        <div className="pm-hero-content">
          <div className="pm-tag">COMING SOON</div>
          <h1>  Project Management</h1>
          <p>
            WE WILL UPDATE YOU SOON . . .
          </p>
          <div className="pm-status-card">
            <p>Our comprehensive Project Management dashboard is under development.</p>
            <Link to="/contact" className="pm-contact-btn">Inquire for Details</Link>
          </div>
        </div>
      </div>
</div>
  );
}

export default Projectmanagement;

