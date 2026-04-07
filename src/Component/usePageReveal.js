import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function usePageReveal(selectors = []) {
  const location = useLocation();

  useEffect(() => {
    if (!selectors.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("site-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    let revealIndex = 0;

    selectors.forEach((selector) => {
      const elements = document.querySelectorAll(selector);

      elements.forEach((element) => {
        if (
          !(element instanceof HTMLElement) ||
          element.classList.contains("site-reveal-ready") ||
          element.classList.contains("scroll-reveal") ||
          element.classList.contains("scroll-reveal-home")
        ) {
          return;
        }

        element.classList.add("site-reveal", "site-reveal-ready");
        element.style.setProperty(
          "--reveal-delay",
          `${Math.min(revealIndex % 6, 5) * 0.08}s`
        );
        observer.observe(element);
        revealIndex += 1;
      });
    });

    return () => observer.disconnect();
  }, [location.pathname, selectors]);
}

export default usePageReveal;
