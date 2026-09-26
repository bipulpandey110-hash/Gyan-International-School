import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  GraduationCap,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";
import schoolData from "../data/schoolData";
import schoolAPI from "../services/api";
import "./faculty.css";

function FacultyImage({ src, alt, initials = "GI" }) {
  return (
    <div className="faculty-image">
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <div className="faculty-image-placeholder">
          <span>{initials}</span>
          <small>FACULTY</small>
        </div>
      )}
    </div>
  );
}

function Faculty() {
  const { school, facultyCategories } = schoolData;

  const [leadership, setLeadership] = useState([]);
  const [teachingFaculty, setTeachingFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    let mounted = true;

    const loadFaculty = async () => {
      try {
        setLoading(true);
        setApiError("");

        const [leadershipResponse, facultyResponse] =
          await Promise.all([
            schoolAPI.getLeadership(),
            schoolAPI.getFaculty(),
          ]);

        if (!mounted) return;

        const leadershipData = Array.isArray(leadershipResponse)
          ? leadershipResponse
          : leadershipResponse?.results || [];

        const facultyData = Array.isArray(facultyResponse)
          ? facultyResponse
          : facultyResponse?.results || [];

        const formattedLeadership = leadershipData.map((member) => ({
          id: member.id,
          name: member.name,
          role: member.role === "principal"
            ? "Principal"
            : member.role === "director"
            ? "Director"
            : member.designation || "Leadership",
          designation: member.designation,
          description: member.message || member.bio || "",
          src: member.photo_url || member.photo || "",
          initials:
            member.name?.charAt(0)?.toUpperCase() || "GI",
        }));

        const formattedFaculty = facultyData.map((member) => ({
          id: member.id,
          name: member.name,
          role: member.designation || "Teaching Faculty",
          subject: member.subject,
          description: member.bio || "",
          src: member.photo_url || member.photo || "",
          initials:
            member.name?.charAt(0)?.toUpperCase() || "GI",
        }));

        setLeadership(formattedLeadership);
        setTeachingFaculty(formattedFaculty);
      } catch (error) {
        console.error("Faculty API error:", error);

        if (mounted) {
          setApiError(
            "Faculty information could not be loaded from the school server."
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadFaculty();

    return () => {
      mounted = false;
    };
  }, []);

  const leadershipDisplay = leadership.slice(0, 3);

  return (
    <div className="faculty-page">

      {/* HERO */}
      <section className="faculty-hero">
        <div className="faculty-container">
          <div className="faculty-hero-top">
            <div className="faculty-kicker">
              <span>01</span>
              <span>OUR PEOPLE</span>
            </div>

            <div className="faculty-hero-meta">
              <span>{school.classes}</span>
              <strong>GI</strong>
            </div>
          </div>

          <div className="faculty-hero-content">
            <span className="faculty-hero-label">
              FACULTY &amp; LEADERSHIP
            </span>

            <h1>
              People behind
              <span>the learning.</span>
            </h1>

            <p>
              A school grows through the people who teach, guide,
              support and encourage students throughout their
              learning journey.
            </p>
          </div>

          <div className="faculty-hero-bottom">
            <div>
              <strong>01</strong>
              <span>LEADERSHIP</span>
            </div>

            <div>
              <strong>02</strong>
              <span>TEACHING</span>
            </div>

            <div>
              <strong>03</strong>
              <span>SUPPORT</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="faculty-intro faculty-section">
        <div className="faculty-container">
          <div className="faculty-intro-grid">
            <div className="faculty-intro-index">
              <span>02</span>

              <strong>
                PEOPLE
                <br />
                &amp;
                <br />
                PURPOSE
              </strong>
            </div>

            <div className="faculty-intro-content">
              <div className="faculty-kicker">
                <span>THE PEOPLE</span>
              </div>

              <h2>
                Learning is
                <span>people-led.</span>
              </h2>

              <p>
                At {school.shortName}, teachers and school leaders
                play an important role in creating an environment
                where students can learn, participate and develop
                confidence.
              </p>

              <p>
                The faculty structure is designed to support students
                across different stages of their academic journey,
                from the foundation years through secondary school.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="faculty-leadership faculty-section">
        <div className="faculty-container">
          <div className="faculty-section-heading">
            <div className="faculty-kicker">
              <span>03</span>
              <span>SCHOOL LEADERSHIP</span>
            </div>

            <div>
              <h2>
                Guidance with
                <span>clear direction.</span>
              </h2>

              <p>
                School leadership provides direction for the academic
                environment, student development and wider school
                experience.
              </p>
            </div>
          </div>

          {loading ? (
            <div className="faculty-empty-leadership">
              <div className="faculty-empty-icon">
                <GraduationCap size={25} />
              </div>

              <div>
                <span>LOADING LEADERSHIP</span>
                <h3>Loading Principal &amp; Director...</h3>
                <p>
                  School leadership information is being loaded
                  from the school server.
                </p>
              </div>
            </div>
          ) : leadershipDisplay.length > 0 ? (
            <div className="faculty-leadership-grid">
              {leadershipDisplay.map((member, index) => (
                <article
                  className={`faculty-leader-card ${
                    index === 0
                      ? "faculty-leader-card-featured"
                      : ""
                  }`}
                  key={member.id || member.name || index}
                >
                  <FacultyImage
                    src={member.src}
                    alt={member.name || "School leader"}
                    initials={member.initials || "GI"}
                  />

                  <div className="faculty-leader-content">
                    <span>
                      {member.role || "Leadership"}
                    </span>

                    <h3>{member.name || "School Leadership"}</h3>

                    {member.description && (
                      <p>{member.description}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="faculty-empty-leadership">
              <div className="faculty-empty-icon">
                <GraduationCap size={25} />
              </div>

              <div>
                <span>LEADERSHIP PROFILES</span>

                <h3>
                  Principal &amp; Director profiles
                  are not available.
                </h3>

                <p>
                  Add leadership information through the
                  Django Admin panel.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* TEACHING FACULTY */}
      <section className="faculty-teaching faculty-section">
        <div className="faculty-container">
          <div className="faculty-section-heading">
            <div className="faculty-kicker">
              <span>04</span>
              <span>TEACHING FACULTY</span>
            </div>

            <div>
              <h2>
                Supporting students
                <span>every day.</span>
              </h2>

              <p>
                Teachers support students through classroom learning,
                subject understanding, communication and participation.
              </p>
            </div>
          </div>

          {loading ? (
            <div className="faculty-empty-state">
              <div className="faculty-empty-state-icon">
                <Users size={25} />
              </div>

              <div>
                <span>FACULTY DIRECTORY</span>
                <h3>Loading faculty...</h3>
                <p>
                  Faculty information is being loaded from
                  the school server.
                </p>
              </div>
            </div>
          ) : teachingFaculty.length > 0 ? (
            <div className="faculty-grid">
              {teachingFaculty.map((member, index) => (
                <article
                  className="faculty-card"
                  key={member.id || member.name || index}
                >
                  <FacultyImage
                    src={member.src}
                    alt={member.name || "Faculty member"}
                    initials={member.initials || "GI"}
                  />

                  <div className="faculty-card-content">
                    <div className="faculty-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <span>
                      {member.role ||
                        member.subject ||
                        "Teaching Faculty"}
                    </span>

                    <h3>
                      {member.name || "Faculty Member"}
                    </h3>

                    {member.description && (
                      <p>{member.description}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="faculty-empty-state">
              <div className="faculty-empty-state-icon">
                <Users size={25} />
              </div>

              <div>
                <span>FACULTY DIRECTORY</span>

                <h3>
                  Faculty profiles will appear here.
                </h3>

                <p>
                  Teacher information and photos can be added
                  directly through the Django Admin panel.
                </p>
              </div>
            </div>
          )}

          {apiError && (
            <p
              style={{
                marginTop: "18px",
                fontSize: "14px",
                opacity: 0.7,
              }}
            >
              {apiError}
            </p>
          )}
        </div>
      </section>

      {/* FACULTY CATEGORIES */}
      <section className="faculty-categories faculty-section">
        <div className="faculty-container">
          <div className="faculty-section-heading faculty-heading-light">
            <div className="faculty-kicker light">
              <span>05</span>
              <span>FACULTY STRUCTURE</span>
            </div>

            <div>
              <h2>
                A connected
                <span>school team.</span>
              </h2>

              <p>
                Different roles work together to support learning,
                school operations and student development.
              </p>
            </div>
          </div>

          <div className="faculty-category-grid">
            {facultyCategories.map((category, index) => {
              const icons = [
                BookOpen,
                Award,
                Users,
              ];

              const Icon = icons[index % icons.length];

              return (
                <article
                  className="faculty-category-card"
                  key={category.title}
                >
                  <div className="faculty-category-top">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="faculty-category-icon">
                      <Icon size={19} />
                    </div>
                  </div>

                  <h3>{category.title}</h3>

                  <p>{category.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FACULTY APPROACH */}
      <section className="faculty-approach faculty-section">
        <div className="faculty-container">
          <div className="faculty-approach-grid">
            <div className="faculty-approach-content">
              <div className="faculty-kicker">
                <span>06</span>
                <span>OUR APPROACH</span>
              </div>

              <h2>
                Teaching with
                <span>purpose.</span>
              </h2>

              <p>
                A positive learning environment depends on
                meaningful interaction between students, teachers
                and the wider school community.
              </p>

              <div className="faculty-approach-points">
                <div>
                  <span>01</span>
                  <strong>Clear Communication</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Student Participation</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Continuous Development</strong>
                </div>
              </div>
            </div>

            <div className="faculty-approach-panel">
              <div className="faculty-approach-panel-icon">
                <GraduationCap size={26} />
              </div>

              <span>STUDENT EXPERIENCE</span>

              <h3>
                Helping every learner
                move forward with confidence.
              </h3>

              <p>
                Teachers and school teams contribute to an environment
                where students can ask questions, participate, learn
                from mistakes and continue developing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="faculty-final">
        <div className="faculty-container">
          <div className="faculty-final-inner">
            <div className="faculty-kicker">
              <span>07</span>
              <span>NEXT STEP</span>
            </div>

            <h2>
              Discover the
              <span>school environment.</span>
            </h2>

            <p>
              Explore the campus, academic programme and admission
              information at {school.shortName}.
            </p>

            <div className="faculty-final-actions">
              <Link
                to="/campus"
                className="faculty-primary-button"
              >
                <span>Explore Campus</span>
                <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="faculty-secondary-button"
              >
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

export default Faculty;