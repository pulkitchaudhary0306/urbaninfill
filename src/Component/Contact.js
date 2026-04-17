import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../HeaderFooter/Header.css";
import "./Contact.css";
import usePageReveal from "./usePageReveal";
import useScrollVisibility from "./useScrollVisibility";

function Contact() {
  usePageReveal([
    ".contact-page .contact-hero-content > *",
    ".contact-page .contact-card",
    ".contact-page .address-box",
    ".contact-page iframe",
    ".footer__col",
    ".footer__line",
    ".footer__copy",
  ]);

  useScrollVisibility([
    ".contact-page .contact-hero-content",
    ".contact-page .contact-card",
    ".contact-page .address-box",
    ".contact-page iframe",
  ]);

  return (
    <div>
<div className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-overlay">
            <div className="contact-hero-content">
              <h1>CONTACT US</h1>
            </div>
          </div>
        </section>

        <section className="contact-info-section">
          <div className="contact-info-container">
            <div className="contact-card">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>
              <h3>CALL US</h3>
              <p>
                Speak directly with our team for project discussions and design
                support.
              </p>
              <h4>+91 124 4241186</h4>
              <h4>+91 9319166609</h4>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <FaHome />
              </div>
              <h3>VISIT US</h3>
              <p>
                Visit our office for architecture, interior design, and project
                consultations.
              </p>

              <div className="address-row">
                <div className="address-box">
                  <h4>Gurugram Office</h4>
                  <p>302, Third Floor, Sushant Lok 2, Sector 55, Gurugram, Haryana, India</p>
                </div>

                <div className="address-box">
                  <h4>Head Office</h4>
                  <p>
                    204, Shri Ram Plaza, Bank More (Head Office), Dhanbad 826001,
                    Jharkhand, India
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h3>CONTACT US</h3>
              <p>
                Email us your requirements and we’ll get back with the right
                design solution.
              </p>
              <h4>info@urbaninfill.in</h4>
            </div>
          </div>
        </section>

        <section className="map-section">
          <iframe
            title="URBAN iNFiLL Location"
            src="https://www.google.com/maps?q=Sector%2055%20Gurugram%20Haryana&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </div>
</div>
  );
}

export default Contact;


