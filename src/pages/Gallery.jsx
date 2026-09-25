import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Expand,
  Images,
  X,
} from "lucide-react";

import schoolData from "../data/schoolData";
import "./gallery.css";

function Gallery() {
  const gallery = schoolData?.images?.gallery || [];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedImage =
    selectedIndex !== null ? gallery[selectedIndex] : null;

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null || gallery.length === 0) return current;

      return current === 0 ? gallery.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null || gallery.length === 0) return current;

      return current === gallery.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <section className="gallery-page">
      {/* =====================================================
          HERO
          ===================================================== */}

      <div className="gallery-hero">
        <div className="gallery-hero-glow gallery-hero-glow-one" />
        <div className="gallery-hero-glow gallery-hero-glow-two" />

        <div className="gallery-container">
          <div className="gallery-hero-grid">
            <div className="gallery-hero-content">
              <span className="section-eyebrow">
                <Images size={15} />
                SCHOOL GALLERY
              </span>

              <h1>
                Moments that
                <span> become memories.</span>
              </h1>

              <p>
                Explore moments from school life, learning, activities and
                the experiences that shape our students.
              </p>
            </div>

            <div className="gallery-hero-count">
              <strong>{String(gallery.length).padStart(2, "0")}</strong>
              <span>CURATED MOMENTS</span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          GALLERY GRID
          ===================================================== */}

      <div className="gallery-container">
        <div className="gallery-heading-row">
          <div>
            <span className="gallery-mini-label">EXPLORE SCHOOL LIFE</span>
            <h2>Inside Gyan International</h2>
          </div>

          <p>
            A visual collection of learning, participation, community and
            everyday school experiences.
          </p>
        </div>

        {gallery.length > 0 ? (
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <button
                type="button"
                className={`gallery-card ${
                  index === 0
                    ? "gallery-card-large"
                    : index === 5
                    ? "gallery-card-wide"
                    : ""
                }`}
                key={item.id || item.src || index}
                onClick={() => openLightbox(index)}
                aria-label={`Open ${item.title || "gallery image"}`}
              >
                <div className="gallery-image-wrap">
                  <img
                    src={item.src}
                    alt={item.title || "School gallery"}
                    loading={index < 4 ? "eager" : "lazy"}
                  />

                  <div className="gallery-image-overlay" />

                  <div className="gallery-card-top">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="gallery-expand">
                      <Expand size={16} />
                    </span>
                  </div>

                  <div className="gallery-card-bottom">
                    <span className="gallery-card-label">
                      SCHOOL LIFE
                    </span>

                    <h3>{item.title || "School Moment"}</h3>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="gallery-empty">
            <Images size={30} />
            <h3>No gallery images available</h3>
            <p>
              Gallery images will appear here once they are added to the
              school data.
            </p>
          </div>
        )}
      </div>

      {/* =====================================================
          LIGHTBOX
          ===================================================== */}

      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          <div className="gallery-lightbox-header">
            <div className="gallery-lightbox-counter">
              <strong>
                {String(selectedIndex + 1).padStart(2, "0")}
              </strong>

              <span>
                / {String(gallery.length).padStart(2, "0")}
              </span>
            </div>

            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close image viewer"
            >
              <X size={21} />
            </button>
          </div>

          <div className="gallery-lightbox-content">
            <button
              type="button"
              className="gallery-lightbox-arrow gallery-lightbox-prev"
              onClick={showPrevious}
              aria-label="Previous image"
            >
              <ArrowLeft size={22} />
            </button>

            <div className="gallery-lightbox-image">
              <img
                src={selectedImage.src}
                alt={selectedImage.title || "School gallery"}
              />

              <div className="gallery-lightbox-caption">
                <span>SCHOOL GALLERY</span>
                <h2>{selectedImage.title || "School Moment"}</h2>
              </div>
            </div>

            <button
              type="button"
              className="gallery-lightbox-arrow gallery-lightbox-next"
              onClick={showNext}
              aria-label="Next image"
            >
              <ArrowRight size={22} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;