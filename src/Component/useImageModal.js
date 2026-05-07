import { useCallback, useEffect, useState } from "react";

function useImageModal(images = []) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const imageCount = images.length;

  const closeImageModal = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const openImageModal = useCallback(
    (imageOrIndex) => {
      if (typeof imageOrIndex === "number") {
        setSelectedImageIndex(imageOrIndex);
        return;
      }

      const index = images.findIndex((image) => image === imageOrIndex);
      setSelectedImageIndex(index >= 0 ? index : 0);
    },
    [images]
  );

  const showPrevImage = useCallback(
    (event) => {
      event?.stopPropagation();
      if (!imageCount) return;
      setSelectedImageIndex((prev) =>
        prev === 0 ? imageCount - 1 : Math.max((prev ?? 0) - 1, 0)
      );
    },
    [imageCount]
  );

  const showNextImage = useCallback(
    (event) => {
      event?.stopPropagation();
      if (!imageCount) return;
      setSelectedImageIndex((prev) => ((prev ?? 0) + 1) % imageCount);
    },
    [imageCount]
  );

  useEffect(() => {
    if (selectedImageIndex === null || !imageCount) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeImageModal();
      if (event.key === "ArrowLeft") showPrevImage(event);
      if (event.key === "ArrowRight") showNextImage(event);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    selectedImageIndex,
    imageCount,
    closeImageModal,
    showPrevImage,
    showNextImage,
  ]);

  return {
    selectedImageIndex,
    activeImage: selectedImageIndex === null ? null : images[selectedImageIndex],
    openImageModal,
    closeImageModal,
    showPrevImage,
    showNextImage,
  };
}

export default useImageModal;
