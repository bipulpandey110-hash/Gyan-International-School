import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Maximize2,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";
import schoolData from "../data/schoolData";
import "./campus.css";

function Campus() {
  const { school, images, campusAreas } = schoolData;

  const campusImages = Array.isArray(images.campus)
    ? images.campus
    : [];

  return (
    <div className="campus-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="campus-hero">

        <div className="campus-container">

          <div className="campus-hero-top">

            <div className="campus-kicker">
              <span>01</span>
              <span>THE CAMPUS</span>
            </div>

            <div className="campus-hero-meta">
              <span>{school.classes}</span>

              <div className="campus-meta-icon">
                <Building2 size={16} />
              </div>
            </div>

          </div>


          <div className="campus-hero-content">

            <span className="campus-hero-label">
              SCHOOL ENVIRONMENT
            </span>

            <h1>
              A place built
              <span>for learning.</span>
            </h1>

            <p>
              Explore the spaces and surroundings that form part
              of everyday school life at {school.shortName}.
            </p>

          </div>


          <div className="campus-hero-bottom">

            <div>
              <strong>04</strong>
              <span>CAMPUS VIEWS</span>
            </div>

            <div>
              <strong>01</strong>
              <span>SCHOOL ENVIRONMENT</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>DAILY EXPERIENCES</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="campus-intro campus-section">

        <div className="campus-container">

          <div className="campus-intro-grid">

            <div className="campus-intro-index">

              <span>02</span>

              <strong>
                SPACE
                <br />
                FOR
                <br />
                GROWTH
              </strong>

            </div>


            <div className="campus-intro-content">

              <div className="campus-kicker">
                <span>THE ENVIRONMENT</span>
              </div>

              <h2>
                More than
                <span>a building.</span>
              </h2>

              <p>
                A school environment becomes part of a student's
                everyday learning experience. Classrooms, activity
                spaces and shared areas create opportunities for
                interaction, participation and discovery.
              </p>

              <p>
                The campus experience at {school.shortName} is
                presented through the spaces and moments that
                students experience as part of their school journey.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CAMPUS FEATURE
      ===================================================== */}

      <section className="campus-feature campus-section">

        <div className="campus-container">

          <div className="campus-section-heading">

            <div className="campus-kicker">
              <span>03</span>
              <span>CAMPUS EXPERIENCE</span>
            </div>

            <div>

              <h2>
                Spaces that
                <span>support learning.</span>
              </h2>

              <p>
                From focused classroom environments to spaces for
                activities and interaction, every part of school life
                contributes to the student experience.
              </p>

            </div>

          </div>


          {campusImages.length > 0 ? (

            <div className="campus-feature-grid">

              {campusImages.slice(0, 4).map((item, index) => (

                <article
                  className={`campus-image-card ${
                    index === 0
                      ? "campus-image-card-large"
                      : ""
                  }`}
                  key={item.id || index}
                >

                  <div className="campus-image-wrap">

                    <img
                      src={item.src}
                      alt={item.title || "School campus"}
                    />

                    <div className="campus-image-overlay"></div>

                    <div className="campus-image-number">
                      0{index + 1}
                    </div>

                    <div className="campus-image-expand">
                      <Maximize2 size={15} />
                    </div>

                  </div>


                  <div className="campus-image-content">

                    <span>
                      CAMPUS / 0{index + 1}
                    </span>

                    <h3>
                      {item.title || "Campus Space"}
                    </h3>

                    {item.description && (
                      <p>{item.description}</p>
                    )}

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="campus-empty">

              <Building2 size={25} />

              <div>

                <span>CAMPUS IMAGES</span>

                <h3>
                  Campus photographs will appear here.
                </h3>

                <p>
                  Add campus images inside the
                  <strong> schoolData.images.campus</strong>
                  array to display them automatically.
                </p>

              </div>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          CAMPUS AREAS
      ===================================================== */}

      <section className="campus-areas campus-section">

        <div className="campus-container">

          <div className="campus-section-heading campus-heading-light">

            <div className="campus-kicker light">
              <span>04</span>
              <span>KEY SPACES</span>
            </div>

            <div>

              <h2>
                Designed around
                <span>school life.</span>
              </h2>

              <p>
                Different spaces contribute to different parts of
                the learning and student experience.
              </p>

            </div>

          </div>


          <div className="campus-area-grid">

            {campusAreas.map((area, index) => (

              <article
                className="campus-area-card"
                key={area.title}
              >

                <div className="campus-area-top">

                  <span>
                    0{index + 1}
                  </span>

                  <ArrowUpRight size={18} />

                </div>

                <h3>{area.title}</h3>

                <p>{area.description}</p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          VISUAL JOURNEY
      ===================================================== */}

      <section className="campus-journey campus-section">

        <div className="campus-container">

          <div className="campus-journey-grid">

            <div className="campus-journey-content">

              <div className="campus-kicker">
                <span>05</span>
                <span>DAILY EXPERIENCE</span>
              </div>

              <h2>
                Every space
                <span>has a purpose.</span>
              </h2>

              <p>
                A student's school day is made up of many small
                experiences — entering the campus, attending classes,
                interacting with teachers, participating in activities
                and spending time with classmates.
              </p>

              <div className="campus-journey-points">

                <div>
                  <span>01</span>
                  <strong>Learn</strong>
                  <small>
                    Focused academic experiences.
                  </small>
                </div>

                <div>
                  <span>02</span>
                  <strong>Participate</strong>
                  <small>
                    Activities and shared experiences.
                  </small>
                </div>

                <div>
                  <span>03</span>
                  <strong>Grow</strong>
                  <small>
                    Confidence through everyday learning.
                  </small>
                </div>

              </div>

            </div>


            <div className="campus-journey-visual">

              {campusImages.length > 0 ? (

                <div className="campus-journey-image">

                  <img
                    src={
                      campusImages[0]?.src ||
                      "/images/school/school-10.webp"
                    }
                    alt={
                      campusImages[0]?.title ||
                      "Gyan International campus"
                    }
                  />

                  <div className="campus-journey-image-overlay"></div>

                  <div className="campus-journey-badge">

                    <Sparkles size={16} />

                    <span>
                      SCHOOL
                      <br />
                      EXPERIENCE
                    </span>

                  </div>

                </div>

              ) : (

                <div className="campus-journey-placeholder">

                  <Building2 size={35} />

                  <span>
                    CAMPUS
                  </span>

                </div>

              )}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY LINK
      ===================================================== */}

      <section className="campus-gallery-link campus-section">

        <div className="campus-container">

          <div className="campus-gallery-panel">

            <div>

              <div className="campus-kicker">
                <span>06</span>
                <span>SEE MORE</span>
              </div>

              <h2>
                Explore school
                <span>moments.</span>
              </h2>

              <p>
                Visit the gallery to explore more photographs from
                school life, student activities and the campus.
              </p>

            </div>


            <Link
              to="/gallery"
              className="campus-gallery-button"
            >
              <span>Open Gallery</span>
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="campus-final">

        <div className="campus-container">

          <div className="campus-final-inner">

            <div className="campus-kicker">
              <span>07</span>
              <span>NEXT STEP</span>
            </div>

            <h2>
              See where the
              <span>journey begins.</span>
            </h2>

            <p>
              Learn more about academics, admissions and life at
              {` ${school.shortName}.`}
            </p>

            <div className="campus-final-actions">

              <Link
                to="/academics"
                className="campus-primary-button"
              >
                <span>Explore Academics</span>
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/admissions"
                className="campus-secondary-button"
              >
                <span>Admissions</span>
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Campus;