import { useEffect, useState } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  GraduationCap,
  Lightbulb,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";

import schoolData from "../data/schoolData";
import schoolAPI from "../services/api";

import "./academics.css";

function Academics() {
  const {
    school: localSchool,
    academicLevels: localAcademicLevels,
  } = schoolData;

  const [school, setSchool] = useState(localSchool);
  const [academicLevels, setAcademicLevels] = useState(
    localAcademicLevels
  );

  const learningApproach = [
    {
      number: "01",
      icon: BookOpen,
      title: "Strong Foundations",
      description:
        "Building clear academic fundamentals so students can understand concepts, develop good learning habits and progress with confidence.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Curiosity & Understanding",
      description:
        "Encouraging students to ask questions, explore ideas and develop a deeper understanding of the subjects they study.",
    },
    {
      number: "03",
      icon: Users,
      title: "Participation & Growth",
      description:
        "Creating opportunities for students to communicate, participate and develop confidence alongside their academic learning.",
    },
    {
      number: "04",
      icon: GraduationCap,
      title: "Future Readiness",
      description:
        "Helping students develop knowledge, responsibility and learning habits that prepare them for their next academic stage.",
    },
  ];

  const academicFocus = [
    "Concept-based learning",
    "Communication and expression",
    "Independent thinking",
    "Problem solving",
    "Responsible learning habits",
    "Confidence and participation",
  ];

  useEffect(() => {
    let mounted = true;

    const loadAcademicData = async () => {
      try {
        const [
          schoolResponse,
          academicsResponse,
        ] = await Promise.all([
          schoolAPI.getSchool(),
          schoolAPI.getAcademics(),
        ]);

        if (!mounted) return;

        // =====================================================
        // SCHOOL INFORMATION
        // =====================================================

        const schoolRecord = Array.isArray(
          schoolResponse
        )
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

        const academicData = Array.isArray(
          academicsResponse
        )
          ? academicsResponse
          : academicsResponse?.results || [];

        if (academicData.length > 0) {
          const formattedAcademicData =
            academicData
              .filter(
                (program) =>
                  program.is_active !== false
              )
              .map(
                (program, index) => ({
                  id:
                    program.id ||
                    `academic-${index}`,

                  number: String(
                    index + 1
                  ).padStart(2, "0"),

                  classes:
                    program.class_name ||
                    "Academic Programme",

                  title:
                    program.title ||
                    "Learning Programme",

                  description:
                    program.description ||
                    "A structured learning programme designed to support student development.",

                  subjects:
                    program.subjects || "",

                  highlights:
                    program.highlights || "",

                  image_url:
                    program.image_url ||
                    null,

                  is_featured:
                    Boolean(
                      program.is_featured
                    ),

                  is_active:
                    program.is_active !==
                    false,
                })
              );

          setAcademicLevels(
            formattedAcademicData
          );
        }
      } catch (error) {
        console.error(
          "Failed to load Academics API data:",
          error
        );
      }
    };

    loadAcademicData();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="academics-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="academics-hero">
        <div className="academics-container">

          <div className="academics-hero-top">

            <div className="academics-kicker">
              <span>01</span>

              <span>
                ACADEMIC PROGRAMME
              </span>
            </div>

            <div className="academics-hero-meta">

              <span>
                {school.classes ||
                  "Classes 0 to 10"}
              </span>

              <strong>
                {school.year || "2026"}
              </strong>

            </div>

          </div>

          <div className="academics-hero-content">

            <div className="academics-hero-label">
              LEARNING JOURNEY
            </div>

            <h1>
              Learn with
              <span>
                clarity.
              </span>
            </h1>

            <p>
              A structured learning journey
              designed to help students build
              strong foundations, explore ideas,
              develop confidence and prepare
              for the next stage of their
              education.
            </p>

          </div>

          <div className="academics-hero-bottom">

            <div>
              <span>
                FOUNDATION
              </span>

              <strong>
                →
              </strong>
            </div>

            <div>
              <span>
                PRIMARY
              </span>

              <strong>
                →
              </strong>
            </div>

            <div>
              <span>
                MIDDLE
              </span>

              <strong>
                →
              </strong>
            </div>

            <div>
              <span>
                SECONDARY
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="academics-intro academics-section">

        <div className="academics-container">

          <div className="academics-intro-grid">

            <div className="academics-intro-number">

              <span>
                02
              </span>

              <strong>
                HOW WE
                <br />
                APPROACH
                <br />
                LEARNING
              </strong>

            </div>

            <div className="academics-intro-content">

              <div className="academics-kicker">

                <span>
                  ACADEMIC APPROACH
                </span>

              </div>

              <h2>
                Every stage has
                <span>
                  a purpose.
                </span>
              </h2>

              <p>
                At{" "}
                {school.shortName ||
                  "Gyan International"}
                , the academic journey is
                organised around the changing
                needs of students as they grow.
                Each stage focuses on developing
                the knowledge, understanding
                and habits needed for the next
                step.
              </p>

              <p>
                The aim is to create learning
                experiences where students can
                understand what they learn,
                participate actively and
                gradually become more
                independent learners.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ACADEMIC LEVELS
      ===================================================== */}

      <section className="academic-levels academics-section">

        <div className="academics-container">

          <div className="academics-section-heading">

            <div className="academics-kicker">

              <span>
                03
              </span>

              <span>
                ACADEMIC STAGES
              </span>

            </div>

            <div>

              <h2>
                {academicLevels.length || 0}{" "}
                stages.
                <span>
                  One learning journey.
                </span>
              </h2>

              <p>
                From the early foundation years
                to secondary school, every stage
                builds upon the learning and
                development of the previous one.
              </p>

            </div>

          </div>

          <div className="academic-level-list">

            {academicLevels.length > 0 ? (
              academicLevels.map(
                (level, index) => (

                  <article
                    className={`academic-level-card ${
                      index ===
                      academicLevels.length - 1
                        ? "academic-level-card-dark"
                        : ""
                    }`}
                    key={
                      level.id ||
                      `level-${index}`
                    }
                  >

                    <div className="academic-level-top">

                      <span className="academic-level-number">
                        {level.number ||
                          String(
                            index + 1
                          ).padStart(2, "0")}
                      </span>

                      <span className="academic-level-classes">
                        {level.classes}
                      </span>

                    </div>

                    <div className="academic-level-main">

                      <div className="academic-level-title">

                        <span>
                          STAGE{" "}
                          {level.number ||
                            String(
                              index + 1
                            ).padStart(
                              2,
                              "0"
                            )}
                        </span>

                        <h3>
                          {level.title}
                        </h3>

                      </div>

                      <p>
                        {level.description}
                      </p>

                      {level.subjects && (
                        <div className="academic-level-extra">

                          <strong>
                            Subjects
                          </strong>

                          <p>
                            {level.subjects}
                          </p>

                        </div>
                      )}

                      {level.highlights && (
                        <div className="academic-level-extra">

                          <strong>
                            Highlights
                          </strong>

                          <p>
                            {level.highlights}
                          </p>

                        </div>
                      )}

                    </div>

                    <div className="academic-level-action">

                      <Link
                        to="/contact"
                        aria-label={`Enquire about ${level.title}`}
                      >
                        <ArrowUpRight
                          size={19}
                        />
                      </Link>

                    </div>

                  </article>

                )
              )
            ) : (
              <div className="academic-level-empty">
                <h3>
                  Academic programmes
                  are being prepared.
                </h3>

                <p>
                  Programme information
                  will appear here shortly.
                </p>
              </div>
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          LEARNING APPROACH
      ===================================================== */}

      <section className="academics-approach academics-section">

        <div className="academics-container">

          <div className="academics-section-heading approach-heading">

            <div className="academics-kicker light">

              <span>
                04
              </span>

              <span>
                LEARNING APPROACH
              </span>

            </div>

            <div>

              <h2>
                More than
                <span>
                  just academics.
                </span>
              </h2>

              <p>
                Academic progress is supported
                by curiosity, participation,
                communication and personal
                development.
              </p>

            </div>

          </div>

          <div className="learning-approach-grid">

            {learningApproach.map(
              (item) => {

                const Icon =
                  item.icon;

                return (
                  <article
                    className="learning-approach-card"
                    key={item.number}
                  >

                    <div className="learning-approach-top">

                      <span>
                        {item.number}
                      </span>

                      <div className="learning-approach-icon">

                        <Icon
                          size={19}
                        />

                      </div>

                    </div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                  </article>
                );
              }
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          ACADEMIC FOCUS
      ===================================================== */}

      <section className="academics-focus academics-section">

        <div className="academics-container">

          <div className="academics-focus-grid">

            <div className="academics-focus-content">

              <div className="academics-kicker">

                <span>
                  05
                </span>

                <span>
                  STUDENT DEVELOPMENT
                </span>

              </div>

              <h2>
                Building skills
                <span>
                  for the next step.
                </span>
              </h2>

              <p>
                Alongside subject knowledge,
                students need the ability to
                communicate, think independently,
                solve problems and take
                responsibility for their learning.
              </p>

              <Link
                to="/faculty"
                className="academics-outline-button"
              >

                <span>
                  Meet Our Faculty
                </span>

                <ArrowRight
                  size={18}
                />

              </Link>

            </div>

            <div className="academic-focus-list">

              {academicFocus.map(
                (item, index) => (

                  <div
                    className="academic-focus-item"
                    key={item}
                  >

                    <span>
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <strong>
                      {item}
                    </strong>

                    <div>
                      <Check
                        size={16}
                      />
                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ACADEMIC JOURNEY CTA
      ===================================================== */}

      <section className="academics-journey">

        <div className="academics-container">

          <div className="academics-journey-inner">

            <div className="academics-kicker">

              <span>
                06
              </span>

              <span>
                THE NEXT STEP
              </span>

            </div>

            <h2>
              Explore the
              <span>
                school experience.
              </span>
            </h2>

            <p>
              Discover the campus, meet the
              faculty and learn more about
              admissions at{" "}
              {school.shortName ||
                "Gyan International"}.
            </p>

            <div className="academics-journey-actions">

              <Link
                to="/campus"
                className="academics-primary-button"
              >

                <span>
                  Explore Campus
                </span>

                <ArrowUpRight
                  size={18}
                />

              </Link>

              <Link
                to="/admissions"
                className="academics-secondary-button"
              >

                <span>
                  Admissions
                </span>

                <ArrowRight
                  size={18}
                />

              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Academics;