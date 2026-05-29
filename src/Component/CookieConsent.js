import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CookieConsent.css";

const COOKIE_KEY = "urbaninfill_cookie_consent";
const CONSENT_EXPIRY_DAYS = 180;

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const storedConsent = localStorage.getItem(COOKIE_KEY);

      if (!storedConsent) {
        setIsVisible(true);
        return;
      }

      const parsed = JSON.parse(storedConsent);

      const isExpired =
        Date.now() > parsed.timestamp + CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000;

      if (isExpired) {
        localStorage.removeItem(COOKIE_KEY);
        setIsVisible(true);
        return;
      }

      setIsVisible(false);

      // Example: load analytics only after accept
      if (parsed.status === "accepted") {
        enableAnalytics();
      }
    } catch (error) {
      console.error("Cookie consent error:", error);
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!isVisible) {
      document.body.classList.remove("cookie-banner-open");
      return undefined;
    }

    document.body.classList.add("cookie-banner-open");

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsVisible(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.classList.remove("cookie-banner-open");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isVisible]);

  const saveConsent = (status) => {
    const consentData = {
      status,
      timestamp: Date.now(),
    };

    localStorage.setItem(COOKIE_KEY, JSON.stringify(consentData));

    if (status === "accepted") {
      enableAnalytics();
    }

    setIsVisible(false);
  };

  // Example analytics loader
  const enableAnalytics = () => {
    if (window.__analyticsLoaded) return;

    window.__analyticsLoaded = true;

    console.log("Analytics enabled");

    /*
      Example Google Analytics:

      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX";
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];

      function gtag() {
        window.dataLayer.push(arguments);
      }

      gtag("js", new Date());
      gtag("config", "G-XXXXXXX");
    */
  };

  if (!isVisible) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-modal="true"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="cookie-content">
        <p className="cookie-text">
          We use cookies to improve your browsing experience, analyze traffic,
          and enhance user experience. By clicking “Accept”, you consent to our
          use of cookies.
        </p>

        <div className="cookie-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
        </div>
      </div>

      <div className="cookie-actions">
        <button
          type="button"
          className="cookie-btn cookie-btn--secondary"
          onClick={() => saveConsent("rejected")}
        >
          Reject
        </button>

        <button
          type="button"
          className="cookie-btn cookie-btn--primary"
          onClick={() => saveConsent("accepted")}
        >
          Accept
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;