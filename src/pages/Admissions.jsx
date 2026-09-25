import { ArrowRight, ArrowUpRight, Check, FileText, MessageCircle, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

import schoolData from "../data/schoolData";
import "./admissions.css";

function Admissions() {
  const { school, admissions } = schoolData;

  const steps = admissions?.steps || [];

  return (
    <div className="admissions-page">
      {/* HERO */}
      <section className="admissions-hero">
        <div className="admissions-container">
          <div className="admissions-hero-top">
            <div className="admissions-kicker">
              <span>01</span>
              <span>ADMISSIONS</span>
            </div>

            <div className="admissions-hero-meta">
              <span>{school.classes}</span>
              <span className="admissions-meta-dot"></span>
              <span>2026 SESSION</span>
            </div>
          </div>

          <div className="admissions-hero-content">
            <span className="admissions-hero-label">
              START THE JOURNEY
            </span>

            <h1>
              Begin your
              <span>school journey.</span>
            </h1>

            <p>
              Learn about the admission journey at{" "}
              {school.shortName} and connect with the school
              team for further information.
            </p>
          </div>

          <div className="admissions-hero-bottom">
            <div>
              <strong>01</strong>
              <span>ENQUIRY</span>
            </div>

            <div>
              <strong>02</strong>
              <span>INTERACTION</span>
            </div>

            <div>
              <strong>03</strong>
              <span>ADMISSION</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="admissions-intro admissions-section">
        <div className="admissions-container">
          <div className="admissions-intro-grid">
            <div className="admissions-intro-index">
              <span>02</span>

              <strong>
                A SIMPLE
                <br />
                START
              </strong>
            </div>

            <div className="admissions-intro-content">
              <div className="admissions-kicker">
                <span>ADMISSION JOURNEY</span>
              </div>

              <h2>
                Every journey
                <span>starts somewhere.</span>
              </h2>

              <p>
                Choosing a school is an important decision for
                every family. The admission process is designed
                to provide an opportunity to understand the
                school, ask questions and move forward with
                clarity.
              </p>

              <p>
                Connect with the school team to understand
                current admission requirements, availability
                and the next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="admissions-process admissions-section">
        <div className="admissions-container">
          <div className="admissions-section-heading">
            <div className="admissions-kicker">
              <span>03</span>
              <span>THE PROCESS</span>
            </div>

            <div>
              <h2>
                Three steps.
                <span>One beginning.</span>
              </h2>

              <p>
                A simple overview of how the admission journey
                can begin.
              </p>
            </div>
          </div>

          <div className="admissions-steps">
            {steps.map((step, index) => (
              <article
                className="admission-step"
                key={step.number || index}
              >
                <div className="admission-step-number">
                  {step.number || `0${index + 1}`}
                </div>

                <div className="admission-step-icon">
                  {index === 0 && <MessageCircle size={21} />}
                  {index === 1 && <UserRound size={21} />}
                  {index === 2 && <FileText size={21} />}
                </div>

                <span className="admission-step-label">
                  STEP {step.number || `0${index + 1}`}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

                <div className="admission-step-line"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TO PREPARE */}
      <section className="admissions-prepare admissions-section">
        <div className="admissions-container">
          <div className="admissions-prepare-grid">
            <div className="admissions-prepare-content">
              <div className="admissions-kicker">
                <span>04</span>
                <span>BE PREPARED</span>
              </div>

              <h2>
                Start with the
                <span>right information.</span>
              </h2>

              <p>
                Before connecting with the school, families can
                keep their basic requirements and questions ready.
                The exact documents and formalities should be
                confirmed directly with the school team.
              </p>

              <div className="prepare-points">
                <div>
                  <span>
                    <Check size={15} />
                  </span>

                  <div>
                    <strong>Student Information</strong>
                    <small>
                      Keep basic student details available.
                    </small>
                  </div>
                </div>

                <div>
                  <span>
                    <Check size={15} />
                  </span>

                  <div>
                    <strong>Parent / Guardian Details</strong>
                    <small>
                      Keep contact information ready for enquiry.
                    </small>
                  </div>
                </div>

                <div>
                  <span>
                    <Check size={15} />
                  </span>

                  <div>
                    <strong>Questions &amp; Requirements</strong>
                    <small>
                      Note down anything you would like to know.
                    </small>
                  </div>
                </div>

                <div>
                  <span>
                    <Check size={15} />
                  </span>

                  <div>
                    <strong>Required Documents</strong>
                    <small>
                      Confirm the current document requirements
                      with the school.
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="admissions-prepare-visual">
              <div className="prepare-orbit prepare-orbit-one"></div>
              <div className="prepare-orbit prepare-orbit-two"></div>

              <div className="prepare-card">
                <span>ADMISSION</span>

                <strong>
                  2026
                  <small>SESSION</small>
                </strong>

                <div className="prepare-card-bottom">
                  <span>CLASSES</span>
                  <strong>{school.classes}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOOL INFORMATION */}
      <section className="admissions-information admissions-section">
        <div className="admissions-container">
          <div className="admissions-information-panel">
            <div className="admissions-information-heading">
              <div className="admissions-kicker light">
                <span>05</span>
                <span>GOOD TO KNOW</span>
              </div>

              <h2>
                Information before
                <span>you begin.</span>
              </h2>
            </div>

            <div className="admissions-information-list">
              <div>
                <span>01</span>

                <div>
                  <strong>Classes</strong>
                  <p>{school.classes}</p>
                </div>
              </div>

              <div>
                <span>02</span>

                <div>
                  <strong>School</strong>
                  <p>{school.fullName}</p>
                </div>
              </div>

              <div>
                <span>03</span>

                <div>
                  <strong>Session</strong>
                  <p>2026</p>
                </div>
              </div>

              <div>
                <span>04</span>

                <div>
                  <strong>Next Step</strong>
                  <p>Connect with the school team.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="admissions-final">
        <div className="admissions-container">
          <div className="admissions-final-inner">
            <div className="admissions-kicker">
              <span>06</span>
              <span>READY TO CONNECT?</span>
            </div>

            <h2>
              Let's start the
              <span>conversation.</span>
            </h2>

            <p>
              For current admission availability, requirements
              and school information, connect with the school
              team.
            </p>

            <div className="admissions-final-actions">
              <Link
                to="/contact"
                className="admissions-primary-button"
              >
                <span>Contact School</span>
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/about"
                className="admissions-secondary-button"
              >
                <span>Know the School</span>
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admissions;