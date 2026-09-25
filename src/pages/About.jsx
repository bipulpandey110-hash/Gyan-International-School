import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Compass,
  Heart,
  Sparkles,
  Target,
} from "lucide-react";

import { Link } from "react-router-dom";
import schoolData from "../data/schoolData";
import "./About.css";

function ImageBlock({ src, alt, className = "" }) {
  return (
    <div className={`about-image ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
}

function About() {
  const { school, images, values, highlights, academicLevels } = schoolData;

  return (
    <div className="about-page">

      {/* =====================================================
          ABOUT HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-container">

          <div className="about-hero-top">

            <div className="about-kicker">
              <span>01</span>
              <span>ABOUT THE SCHOOL</span>
            </div>

            <div className="about-hero-number">
              <span>GI</span>
              <strong>2026</strong>
            </div>

          </div>


          <div className="about-hero-content">

            <h1>
              Education with
              <span>purpose.</span>
            </h1>

            <p>
              {school.fullName} is a learning environment focused
              on knowledge, character, confidence and future readiness
              for students from Classes 0–10.
            </p>

          </div>


          <div className="about-hero-bottom">

            <span>SCROLL TO EXPLORE</span>

            <div className="about-scroll-line"></div>

            <span>01 / 06</span>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="about-introduction about-section">

        <div className="about-container">

          <div className="about-intro-grid">

            <div className="about-intro-image">

              <ImageBlock
                src={images.school.main}
                alt={`${school.fullName} school`}
              />

              <div className="about-image-caption">
                <span>01</span>
                <strong>OUR SCHOOL</strong>
              </div>

            </div>


            <div className="about-intro-content">

              <div className="about-kicker">
                <span>02</span>
                <span>WHO WE ARE</span>
              </div>

              <h2>
                A learning
                <span>environment built</span>
                around students.
              </h2>

              <p>
                At {school.shortName}, learning is viewed as a journey
                that goes beyond textbooks and examinations. Students
                are encouraged to understand, participate, communicate
                and develop confidence through their everyday school
                experience.
              </p>

              <p>
                From the foundation years through secondary school,
                our approach focuses on creating strong academic
                foundations while supporting character, curiosity,
                responsibility and future readiness.
              </p>


              <Link to="/academics" className="about-primary-button">
                <span>Explore Academics</span>
                <ArrowUpRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="about-philosophy about-section">

        <div className="about-container">

          <div className="about-section-heading">

            <div className="about-kicker">
              <span>03</span>
              <span>OUR PHILOSOPHY</span>
            </div>

            <div>
              <h2>
                Learning should
                <span>create possibilities.</span>
              </h2>

              <p>
                Our educational approach is centred around helping
                students understand their world, discover their
                strengths and develop the confidence to move forward.
              </p>
            </div>

          </div>


          <div className="philosophy-grid">

            <div className="philosophy-card">

              <div className="philosophy-icon">
                <BookOpen size={21} />
              </div>

              <span>01</span>

              <h3>Understand</h3>

              <p>
                Encourage students to understand concepts rather than
                simply memorising information.
              </p>

            </div>


            <div className="philosophy-card">

              <div className="philosophy-icon">
                <Compass size={21} />
              </div>

              <span>02</span>

              <h3>Explore</h3>

              <p>
                Give students opportunities to ask questions, discover
                interests and explore new ideas.
              </p>

            </div>


            <div className="philosophy-card">

              <div className="philosophy-icon">
                <Heart size={21} />
              </div>

              <span>03</span>

              <h3>Develop</h3>

              <p>
                Support personal growth through responsibility,
                communication, participation and character.
              </p>

            </div>


            <div className="philosophy-card philosophy-card-dark">

              <div className="philosophy-icon">
                <Target size={21} />
              </div>

              <span>04</span>

              <h3>Prepare</h3>

              <p>
                Build the habits, knowledge and mindset needed for
                the next stage of a student's journey.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="about-values about-section">

        <div className="about-container">

          <div className="about-values-header">

            <div className="about-kicker light">
              <span>04</span>
              <span>CORE VALUES</span>
            </div>

            <h2>
              What guides
              <span>our learning culture.</span>
            </h2>

          </div>


          <div className="about-values-list">

            {values.map((value, index) => (

              <article className="about-value-row" key={value.title}>

                <div className="about-value-number">
                  0{index + 1}
                </div>

                <div className="about-value-title">
                  <h3>{value.title}</h3>
                </div>

                <div className="about-value-description">
                  <p>{value.description}</p>
                </div>

                <div className="about-value-icon">
                  <Sparkles size={18} />
                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LEARNING JOURNEY
      ===================================================== */}

      <section className="about-journey about-section">

        <div className="about-container">

          <div className="about-section-heading">

            <div className="about-kicker">
              <span>05</span>
              <span>LEARNING JOURNEY</span>
            </div>

            <div>
              <h2>
                Growing through
                <span>every stage.</span>
              </h2>

              <p>
                Each stage of school brings different learning needs,
                experiences and opportunities for development.
              </p>
            </div>

          </div>


          <div className="journey-list">

            {academicLevels.map((level) => (

              <div className="journey-item" key={level.id}>

                <div className="journey-number">
                  {level.number}
                </div>

                <div className="journey-main">

                  <span>{level.classes}</span>

                  <h3>{level.title}</h3>

                </div>

                <p>
                  {level.description}
                </p>

                <Link
                  to="/academics"
                  className="journey-link"
                  aria-label={`Explore ${level.title}`}
                >
                  <ArrowUpRight size={19} />
                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SCHOOL EXPERIENCE
      ===================================================== */}

      <section className="about-experience about-section">

        <div className="about-container">

          <div className="about-experience-grid">

            <div className="about-experience-content">

              <div className="about-kicker">
                <span>06</span>
                <span>THE SCHOOL EXPERIENCE</span>
              </div>

              <h2>
                A place to
                <span>learn, participate</span>
                and grow.
              </h2>

              <p>
                A strong school experience is created through the
                combination of learning, relationships, participation
                and a supportive environment.
              </p>

              <div className="about-experience-points">

                <div>
                  <span>01</span>
                  <strong>Academic Learning</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Confidence & Communication</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Character & Responsibility</strong>
                </div>

              </div>

              <Link to="/campus" className="about-outline-button">
                <span>Explore Campus</span>
                <ArrowRight size={18} />
              </Link>

            </div>


            <div className="about-experience-image">

              <ImageBlock
                src={images.students[1]?.src || images.school.main}
                alt="Students at Gyan International"
              />

              <div className="about-experience-badge">
                <span>GI</span>
                <strong>Learning<br />Together</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="about-final">

        <div className="about-container">

          <div className="about-final-inner">

            <div className="about-kicker">
              <span>07</span>
              <span>NEXT STEP</span>
            </div>

            <h2>
              Discover the
              <span>Gyan International</span>
              experience.
            </h2>

            <p>
              Explore academics, school life, admissions and the
              wider learning environment.
            </p>

            <div className="about-final-actions">

              <Link to="/academics" className="about-primary-button">
                <span>Explore Academics</span>
                <ArrowUpRight size={18} />
              </Link>

              <Link to="/contact" className="about-secondary-button">
                <span>Contact School</span>
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;