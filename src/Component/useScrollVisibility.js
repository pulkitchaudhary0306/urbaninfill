import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollVisibility(selectors = [], className = "scroll-reveal-home") {
  const location = useLocation();

  useEffect(() => {
    if (!selectors.length) return undefined;

    const elements = selectors.flatMap((selector) =>
      Array.from(document.querySelectorAll(selector))
    );

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => {
      if (!(element instanceof HTMLElement)) return;
      element.classList.add(className);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname, selectors, className]);
}

export default useScrollVisibility;
