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
import "./academics.css";

function Academics() {
  const { school, academicLevels } = schoolData;

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
              <span>ACADEMIC PROGRAMME</span>
            </div>

            <div className="academics-hero-meta">
              <span>{school.classes}</span>
              <strong>2026</strong>
            </div>

          </div>


          <div className="academics-hero-content">

            <div className="academics-hero-label">
              LEARNING JOURNEY
            </div>

            <h1>
              Learn with
              <span>clarity.</span>
            </h1>

            <p>
              A structured learning journey designed to help students
              build strong foundations, explore ideas, develop
              confidence and prepare for the next stage of their
              education.
            </p>

          </div>


          <div className="academics-hero-bottom">

            <div>
              <span>FOUNDATION</span>
              <strong>→</strong>
            </div>

            <div>
              <span>PRIMARY</span>
              <strong>→</strong>
            </div>

            <div>
              <span>MIDDLE</span>
              <strong>→</strong>
            </div>

            <div>
              <span>SECONDARY</span>
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
              <span>02</span>
              <strong>HOW WE<br />APPROACH<br />LEARNING</strong>
            </div>

            <div className="academics-intro-content">

              <div className="academics-kicker">
                <span>ACADEMIC APPROACH</span>
              </div>

              <h2>
                Every stage has
                <span>a purpose.</span>
              </h2>

              <p>
                At {school.shortName}, the academic journey is organised
                around the changing needs of students as they grow.
                Each stage focuses on developing the knowledge,
                understanding and habits needed for the next step.
              </p>

              <p>
                The aim is to create learning experiences where
                students can understand what they learn, participate
                actively and gradually become more independent learners.
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
              <span>03</span>
              <span>ACADEMIC STAGES</span>
            </div>

            <div>

              <h2>
                Four stages.
                <span>One learning journey.</span>
              </h2>

              <p>
                From the early foundation years to secondary school,
                every stage builds upon the learning and development
                of the previous one.
              </p>

            </div>

          </div>


          <div className="academic-level-list">

            {academicLevels.map((level, index) => (

              <article
                className={`academic-level-card ${
                  index === academicLevels.length - 1
                    ? "academic-level-card-dark"
                    : ""
                }`}
                key={level.id}
              >

                <div className="academic-level-top">

                  <span className="academic-level-number">
                    {level.number}
                  </span>

                  <span className="academic-level-classes">
                    {level.classes}
                  </span>

                </div>


                <div className="academic-level-main">

                  <div className="academic-level-title">

                    <span>STAGE {level.number}</span>

                    <h3>{level.title}</h3>

                  </div>

                  <p>{level.description}</p>

                </div>


                <div className="academic-level-action">

                  <Link
                    to="/contact"
                    aria-label={`Enquire about ${level.title}`}
                  >
                    <ArrowUpRight size={19} />
                  </Link>

                </div>

              </article>

            ))}

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
              <span>04</span>
              <span>LEARNING APPROACH</span>
            </div>

            <div>

              <h2>
                More than
                <span>just academics.</span>
              </h2>

              <p>
                Academic progress is supported by curiosity,
                participation, communication and personal development.
              </p>

            </div>

          </div>


          <div className="learning-approach-grid">

            {learningApproach.map((item) => {

              const Icon = item.icon;

              return (
                <article
                  className="learning-approach-card"
                  key={item.number}
                >

                  <div className="learning-approach-top">

                    <span>{item.number}</span>

                    <div className="learning-approach-icon">
                      <Icon size={19} />
                    </div>

                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </article>
              );
            })}

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
                <span>05</span>
                <span>STUDENT DEVELOPMENT</span>
              </div>

              <h2>
                Building skills
                <span>for the next step.</span>
              </h2>

              <p>
                Alongside subject knowledge, students need the ability
                to communicate, think independently, solve problems
                and take responsibility for their learning.
              </p>

              <Link
                to="/faculty"
                className="academics-outline-button"
              >
                <span>Meet Our Faculty</span>
                <ArrowRight size={18} />
              </Link>

            </div>


            <div className="academic-focus-list">

              {academicFocus.map((item, index) => (

                <div
                  className="academic-focus-item"
                  key={item}
                >

                  <span>
                    0{index + 1}
                  </span>

                  <strong>{item}</strong>

                  <div>
                    <Check size={16} />
                  </div>

                </div>

              ))}

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
              <span>06</span>
              <span>THE NEXT STEP</span>
            </div>

            <h2>
              Explore the
              <span>school experience.</span>
            </h2>

            <p>
              Discover the campus, meet the faculty and learn more
              about admissions at {school.shortName}.
            </p>

            <div className="academics-journey-actions">

              <Link
                to="/campus"
                className="academics-primary-button"
              >
                <span>Explore Campus</span>
                <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/admissions"
                className="academics-secondary-button"
              >
                <span>Admissions</span>
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Academics;