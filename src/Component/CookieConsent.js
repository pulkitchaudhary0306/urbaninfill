import { useEffect, useState } from "react";
import "./CookieConsent.css";

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) {
      document.body.classList.remove("cookie-banner-open");
      return undefined;
    }

    document.body.classList.add("cookie-banner-open");

    return () => {
      document.body.classList.remove("cookie-banner-open");
    };
  }, [isVisible]);

  const saveConsent = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p className="cookie-text">
        We use cookies to improve your browsing experience and analyze website traffic.
      </p>
      <div className="cookie-actions">
        <button type="button" className="cookie-btn cookie-btn--secondary" onClick={saveConsent}>
          Reject
        </button>
        <button type="button" className="cookie-btn cookie-btn--primary" onClick={saveConsent}>
          Accept
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;
