import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Users,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import schoolData from "../data/schoolData";
import schoolAPI from "../services/api";
import "./home.css";

function ImageBlock({ src, alt, className = "" }) {
  return (
    <div className={`image-block ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
}

function Home() {
  const {
    school: localSchool,
    images,
    values,
    academicLevels,
    highlights,
    admissions,
  } = schoolData;

  const [school, setSchool] = useState(localSchool);
  const [academicPrograms, setAcademicPrograms] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [achievements, setAchievements] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadHomeData = async () => {
      try {
        const [
          schoolResponse,
          academicResponse,
          facilityResponse,
          achievementResponse,
        ] = await Promise.all([
          schoolAPI.getSchool(),
          schoolAPI.getAcademics(),
          schoolAPI.getFacilities(),
          schoolAPI.getAchievements(),
        ]);

        if (!mounted) return;

        // =====================================================
        // SCHOOL INFORMATION
        // =====================================================

        const schoolRecord = Array.isArray(schoolResponse)
          ? schoolResponse[0]
          : schoolResponse;

        if (schoolRecord) {
          setSchool((current) => ({
            ...current,

            fullName:
              schoolRecord.name ||
              current.fullName,

            shortName:
              schoolRecord.short_name ||
              current.shortName,

            tagline:
              schoolRecord.tagline ||
              current.tagline,

            description:
              schoolRecord.description ||
              current.description,

            classes:
              schoolRecord.classes ||
              current.classes,

            address:
              schoolRecord.address ||
              current.address,

            phone:
              schoolRecord.phone ||
              current.phone,

            email:
              schoolRecord.email ||
              current.email,

            year:
              schoolRecord.established_year ||
              current.year,
          }));
        }

        // =====================================================
        // ACADEMIC PROGRAMS
        // =====================================================

        const academicData = Array.isArray(academicResponse)
          ? academicResponse
          : academicResponse?.results || [];

        setAcademicPrograms(academicData);

        // =====================================================
        // FACILITIES
        // =====================================================

        const facilityData = Array.isArray(facilityResponse)
          ? facilityResponse
          : facilityResponse?.results || [];

        setFacilities(facilityData);

        // =====================================================
        // ACHIEVEMENTS
        // =====================================================

        const achievementData = Array.isArray(achievementResponse)
          ? achievementResponse
          : achievementResponse?.results || [];

        setAchievements(achievementData);
      } catch (error) {
        console.error(
          "Failed to load Home page API data:",
          error
        );
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadHomeData();

    return () => {
      mounted = false;
    };
  }, []);

  // =========================================================
  // FALLBACK ACADEMIC DATA
  // =========================================================

  const displayAcademicLevels =
    academicPrograms.length > 0
      ? academicPrograms.map((program, index) => ({
          id: program.id,
          number: String(index + 1).padStart(2, "0"),
          classes:
            program.class_name ||
            "Academic Programme",
          title:
            program.title ||
            "Learning Programme",
          description:
            program.description ||
            "A structured learning programme designed to support student growth.",
        }))
      : academicLevels;

  // =========================================================
  // FALLBACK FACILITIES
  // =========================================================

  const displayFacilities =
    facilities.length > 0
      ? facilities.slice(0, 3)
      : [
          {
            id: "facility-1",
            title: "Learning Spaces",
          },
          {
            id: "facility-2",
            title: "Activity & Participation",
          },
          {
            id: "facility-3",
            title: "Community & Belonging",
          },
        ];

  return (
    <div className="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="home-hero">
        <div className="home-container home-hero-grid">

          <div className="home-hero-content">

            <div className="home-eyebrow">
              <span className="eyebrow-dot"></span>

              <span>
                {school.classes || "Classes 0 to 10"}
              </span>

              <span className="eyebrow-line"></span>

              <span>
                {school.year || "2026"}
              </span>
            </div>

            <h1>
              Learning today.
              <span>Growing for tomorrow.</span>
            </h1>

            <p className="home-hero-description">
              {school.tagline ||
                "Learn. Grow. Lead."}{" "}
              We create a learning environment where
              students can build knowledge, confidence,
              character and the skills needed for their
              future.
            </p>

            <div className="home-hero-actions">

              <Link
                to="/admissions"
                className="primary-action"
              >
                <span>Explore Admissions</span>
                <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/about"
                className="secondary-action"
              >
                <span>Discover the School</span>
                <ArrowRight size={18} />
              </Link>

            </div>

            <div className="home-hero-meta">

              <div>
                <strong>0–10</strong>
                <span>Classes</span>
              </div>

              <div className="meta-divider"></div>

              <div>
                <strong>
                  {displayAcademicLevels.length || 4}
                </strong>
                <span>Learning Stages</span>
              </div>

              <div className="meta-divider"></div>

              <div>
                <strong>
                  {school.year || "2026"}
                </strong>
                <span>School Year</span>
              </div>

            </div>

          </div>

          <div className="home-hero-visual">

            <div className="hero-image-frame">

              <ImageBlock
                src={images.hero.main}
                alt={`${school.fullName || "Gyan International Future Training Res School"} campus`}
                className="hero-main-image"
              />

            </div>

            <div className="hero-floating-card">

              <div className="floating-icon">
                <GraduationCap size={20} />
              </div>

              <div>
                <span>Our Focus</span>
                <strong>Learning & Growth</strong>
              </div>

            </div>

            <div className="hero-number">
              <span>GI</span>
              <strong>01</strong>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="home-intro section-space">

        <div className="home-container">

          <div className="section-heading-row">

            <div className="section-kicker">
              <span>01</span>
              <span>ABOUT THE SCHOOL</span>
            </div>

            <div className="section-heading-copy">

              <h2>
                A place where
                <span>learning becomes growth.</span>
              </h2>

              <p>
                {school.description ||
                  "Gyan International Future Training Res School is focused on creating a meaningful educational environment for students from the foundation years through secondary school."}
              </p>

            </div>

          </div>


          <div className="intro-grid">

            <div className="intro-feature">

              <div className="intro-feature-icon">
                <BookOpen size={23} />
              </div>

              <span className="card-index">
                01
              </span>

              <h3>Strong Foundations</h3>

              <p>
                Building clear academic foundations
                through curiosity, understanding and
                consistent learning.
              </p>

              <Link
                to="/academics"
                className="inline-link"
              >
                <span>Explore academics</span>
                <ArrowRight size={17} />
              </Link>

            </div>


            <div className="intro-feature">

              <div className="intro-feature-icon">
                <Users size={23} />
              </div>

              <span className="card-index">
                02
              </span>

              <h3>Student Development</h3>

              <p>
                Supporting students beyond textbooks
                through confidence, communication,
                participation and character.
              </p>

              <Link
                to="/about"
                className="inline-link"
              >
                <span>Our approach</span>
                <ArrowRight size={17} />
              </Link>

            </div>


            <div className="intro-feature intro-feature-dark">

              <div className="intro-feature-icon">
                <Sparkles size={23} />
              </div>

              <span className="card-index">
                03
              </span>

              <h3>Future Readiness</h3>

              <p>
                Helping students develop the mindset,
                habits and skills needed for the
                changing world.
              </p>

              <Link
                to="/about"
                className="inline-link"
              >
                <span>Know more</span>
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}

      <section className="home-highlights section-space">

        <div className="home-container">

          <div className="section-heading-row compact">

            <div className="section-kicker">
              <span>02</span>
              <span>WHAT WE FOCUS ON</span>
            </div>

            <div className="section-heading-copy">

              <h2>
                More than
                <span>just academics.</span>
              </h2>

            </div>

          </div>


          <div className="highlight-list">

            {highlights.map((item) => (

              <div
                className="highlight-row"
                key={item.number}
              >

                <div className="highlight-number">
                  {item.number}
                </div>

                <div className="highlight-title">
                  <h3>{item.title}</h3>
                </div>

                <div className="highlight-description">
                  <p>{item.description}</p>
                </div>

                <div className="highlight-arrow">
                  <ChevronRight size={20} />
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          STUDENT EXPERIENCE
      ===================================================== */}

      <section className="home-experience section-space">

        <div className="home-container">

          <div className="experience-header">

            <div>

              <div className="section-kicker">
                <span>03</span>
                <span>STUDENT EXPERIENCE</span>
              </div>

              <h2>
                Everyday moments.
                <span>Meaningful growth.</span>
              </h2>

            </div>

            <Link
              to="/gallery"
              className="outline-action"
            >
              <span>View Gallery</span>
              <ArrowUpRight size={18} />
            </Link>

          </div>


          <div className="experience-grid">

            {images.students
              .slice(0, 3)
              .map((student, index) => (

                <article
                  className={`experience-card experience-card-${index + 1}`}
                  key={student.id}
                >

                  <ImageBlock
                    src={student.src}
                    alt={student.title}
                  />

                  <div className="experience-overlay">

                    <span>
                      {student.label}
                    </span>

                    <div className="experience-card-bottom">

                      <h3>
                        {student.title}
                      </h3>

                      <div className="experience-arrow">
                        <ArrowUpRight size={17} />
                      </div>

                    </div>

                  </div>

                </article>

              ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ACADEMICS
      ===================================================== */}

      <section className="home-academics section-space">

        <div className="home-container">

          <div className="section-heading-row">

            <div className="section-kicker">
              <span>04</span>
              <span>ACADEMIC JOURNEY</span>
            </div>

            <div className="section-heading-copy">

              <h2>
                Every stage has
                <span>its own journey.</span>
              </h2>

              <p>
                From early foundations to secondary
                education, each stage is designed
                around the changing needs of students.
              </p>

            </div>

          </div>


          <div className="academic-list">

            {displayAcademicLevels.map((level) => (

              <Link
                to="/academics"
                className="academic-item"
                key={level.id}
              >

                <div className="academic-number">
                  {level.number}
                </div>

                <div className="academic-main">

                  <span>
                    {level.classes}
                  </span>

                  <h3>
                    {level.title}
                  </h3>

                </div>

                <p>
                  {level.description}
                </p>

                <div className="academic-arrow">
                  <ArrowUpRight size={20} />
                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="home-values section-space">

        <div className="home-container values-layout">

          <div className="values-intro">

            <div className="section-kicker light">
              <span>05</span>
              <span>OUR VALUES</span>
            </div>

            <h2>
              What we
              <span>believe in.</span>
            </h2>

            <p>
              Education is not only about what
              students learn. It is also about who
              they become.
            </p>

            <Link
              to="/about"
              className="light-action"
            >
              <span>Our philosophy</span>
              <ArrowRight size={18} />
            </Link>

          </div>


          <div className="values-grid">

            {values.map((value, index) => (

              <div
                className="value-card"
                key={value.title}
              >

                <span className="value-number">
                  0{index + 1}
                </span>

                <div className="value-icon">
                  <Sparkles size={18} />
                </div>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SCHOOL LIFE / CAMPUS
      ===================================================== */}

      <section className="home-campus section-space">

        <div className="home-container">

          <div className="campus-grid">

            <div className="campus-image">

              <ImageBlock
                src={
                  images.campus[0]?.src ||
                  images.hero.main
                }
                alt="Gyan International school environment"
              />

              <div className="campus-image-label">
                <span>06</span>
                <strong>SCHOOL LIFE</strong>
              </div>

            </div>


            <div className="campus-content">

              <div className="section-kicker">
                <span>06</span>
                <span>THE ENVIRONMENT</span>
              </div>

              <h2>
                A space designed
                <span>for learning.</span>
              </h2>

              <p>
                A positive school environment helps
                students feel comfortable, participate
                actively and build confidence throughout
                their learning journey.
              </p>


              <div className="campus-points">

                {displayFacilities.map(
                  (facility, index) => (

                    <div key={facility.id}>

                      <span>
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <strong>
                        {facility.title}
                      </strong>

                    </div>

                  )
                )}

              </div>


              <Link
                to="/campus"
                className="primary-action dark-button"
              >
                <span>Explore Campus</span>
                <ArrowUpRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ADMISSIONS
      ===================================================== */}

      <section className="home-admissions section-space">

        <div className="home-container">

          <div className="admission-card">

            <div className="admission-content">

              <div className="section-kicker">
                <span>07</span>
                <span>ADMISSIONS</span>
              </div>

              <h2>
                Begin the
                <span>journey.</span>
              </h2>

              <p>
                {admissions.description}
              </p>

              <Link
                to="/admissions"
                className="primary-action"
              >
                <span>
                  {admissions.title}
                </span>

                <ArrowUpRight size={18} />
              </Link>

            </div>


            <div className="admission-image">

              <ImageBlock
                src={
                  images.gallery[5]?.src ||
                  images.hero.main
                }
                alt="Students at Gyan International"
              />

              <div className="admission-image-badge">

                <GraduationCap size={20} />

                <span>
                  {school.classes ||
                    "Classes 0–10"}
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ACHIEVEMENTS
      ===================================================== */}

      {achievements.length > 0 && (

        <section className="home-highlights section-space">

          <div className="home-container">

            <div className="section-heading-row compact">

              <div className="section-kicker">
                <span>08</span>
                <span>SCHOOL DEVELOPMENT</span>
              </div>

              <div className="section-heading-copy">

                <h2>
                  Growing through
                  <span>learning & participation.</span>
                </h2>

              </div>

            </div>


            <div className="highlight-list">

              {achievements
                .slice(0, 3)
                .map((achievement, index) => (

                  <div
                    className="highlight-row"
                    key={achievement.id}
                  >

                    <div className="highlight-number">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </div>

                    <div className="highlight-title">

                      <h3>
                        {achievement.title}
                      </h3>

                    </div>

                    <div className="highlight-description">

                      <p>
                        {achievement.description}
                      </p>

                    </div>

                    <div className="highlight-arrow">
                      <ChevronRight size={20} />
                    </div>

                  </div>

                ))}

            </div>

          </div>

        </section>

      )}


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="home-final-cta">

        <div className="home-container">

          <div className="final-cta-inner">

            <div className="section-kicker">
              <span>09</span>
              <span>CONNECT WITH US</span>
            </div>

            <h2>
              Let's build a
              <span>better beginning.</span>
            </h2>

            <p>
              Explore the school, discover our
              approach and connect with the school
              team for admissions and enquiries.
            </p>

            <div className="final-cta-actions">

              <Link
                to="/contact"
                className="primary-action"
              >
                <span>Contact School</span>
                <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/gallery"
                className="secondary-action"
              >
                <span>View School Gallery</span>
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;