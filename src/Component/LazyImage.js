import React, { useEffect, useRef, useState } from 'react';

/**
 * LazyImage component loads the image source only when the element enters the viewport.
 * It uses IntersectionObserver for efficient detection and falls back to immediate load if not supported.
 * Props are passed through to the underlying <img> element.
 */
const LazyImage = ({ src, alt = '', className = '', decoding = 'async', ...rest }) => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!imgRef.current) return;
    if (isVisible) return; // already visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px', threshold: 0.1 }
    );
    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : undefined}
      alt={alt}
      className={className}
      decoding={decoding}
      loading="lazy"
      {...rest}
    />
  );
};

export default LazyImage;
