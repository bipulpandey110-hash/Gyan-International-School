import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useState } from "react";

import schoolData from "../data/schoolData";
import schoolAPI from "../services/api";

import "./admissions.css";

function Admissions() {
  const school = schoolData?.school || {};

  const schoolName =
    school.fullName ||
    school.name ||
    "Gyan International Future Training Res School";

  const shortName =
    school.shortName ||
    "Gyan International";

  const schoolClasses =
    school.classes ||
    "Classes 0 to 10";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    student_name: "",
    class_applying_for: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (submitStatus) {
      setSubmitStatus("");
      setSubmitMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitStatus("");
    setSubmitMessage("");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.student_name.trim() ||
      !formData.class_applying_for
    ) {
      setSubmitStatus("error");
      setSubmitMessage(
        "Please fill in all required fields."
      );
      return;
    }

    try {
      setIsSubmitting(true);

      await schoolAPI.submitAdmission({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        student_name: formData.student_name.trim(),
        class_applying_for:
          formData.class_applying_for,
        message: formData.message.trim(),
      });

      setSubmitStatus("success");

      setSubmitMessage(
        "Your admission enquiry has been submitted successfully. The school team will contact you for further information."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        student_name: "",
        class_applying_for: "",
        message: "",
      });
    } catch (error) {
      console.error(
        "Admission enquiry submission failed:",
        error
      );

      setSubmitStatus("error");

      setSubmitMessage(
        "We couldn't submit your enquiry right now. Please try again or contact the school directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="admissions-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="admissions-hero">
        <div className="admissions-container">

          <div className="admissions-hero-top">

            <div className="admissions-kicker">
              <span>01</span>
              <span>ADMISSIONS</span>
            </div>

            <div className="admissions-hero-meta">
              <span>{schoolClasses}</span>

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
              {shortName} and connect with the
              school team for further information.
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


      {/* =====================================================
          INTRO
      ===================================================== */}

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
                Choosing a school is an important
                decision for every family. The admission
                process is designed to provide an
                opportunity to understand the school,
                ask questions and move forward with
                clarity.
              </p>

              <p>
                Connect with the school team to
                understand current admission
                requirements, availability and the
                next steps.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

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
                A simple overview of how the admission
                journey can begin.
              </p>

            </div>

          </div>


          <div className="admissions-steps">

            {/* STEP 01 */}

            <article className="admission-step">

              <div className="admission-step-number-big">
                01
              </div>

              <div className="admission-step-top">
                <span>STEP 01</span>
              </div>

              <div className="admission-step-content">

                <h3>
                  Enquiry
                </h3>

                <p>
                  Share your basic requirements and
                  learn more about the school.
                </p>

              </div>

              <div className="admission-step-line">
                <span></span>
              </div>

            </article>


            {/* STEP 02 */}

            <article className="admission-step">

              <div className="admission-step-number-big">
                02
              </div>

              <div className="admission-step-top">
                <span>STEP 02</span>
              </div>

              <div className="admission-step-content">

                <h3>
                  Interaction
                </h3>

                <p>
                  Connect with the school team and
                  understand the learning environment.
                </p>

              </div>

              <div className="admission-step-line">
                <span></span>
              </div>

            </article>


            {/* STEP 03 */}

            <article className="admission-step">

              <div className="admission-step-number-big">
                03
              </div>

              <div className="admission-step-top">
                <span>STEP 03</span>
              </div>

              <div className="admission-step-content">

                <h3>
                  Admission Process
                </h3>

                <p>
                  Complete the required admission
                  formalities and documentation.
                </p>

              </div>

              <div className="admission-step-line">
                <span></span>
              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          PREPARE
      ===================================================== */}

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
                Before connecting with the school,
                families can keep their basic
                requirements and questions ready.
                The exact documents and formalities
                should be confirmed directly with the
                school team.
              </p>


              <div className="prepare-points">

                <div>

                  <span>
                    <Check size={15} />
                  </span>

                  <div>

                    <strong>
                      Student Information
                    </strong>

                    <small>
                      Keep basic student details
                      available.
                    </small>

                  </div>

                </div>


                <div>

                  <span>
                    <Check size={15} />
                  </span>

                  <div>

                    <strong>
                      Parent / Guardian Details
                    </strong>

                    <small>
                      Keep contact information ready
                      for enquiry.
                    </small>

                  </div>

                </div>


                <div>

                  <span>
                    <Check size={15} />
                  </span>

                  <div>

                    <strong>
                      Questions & Requirements
                    </strong>

                    <small>
                      Note down anything you would
                      like to know.
                    </small>

                  </div>

                </div>


                <div>

                  <span>
                    <Check size={15} />
                  </span>

                  <div>

                    <strong>
                      Required Documents
                    </strong>

                    <small>
                      Confirm the current document
                      requirements with the school.
                    </small>

                  </div>

                </div>

              </div>

            </div>


            <div className="admissions-prepare-visual">

              <div className="prepare-orbit prepare-orbit-one"></div>

              <div className="prepare-orbit prepare-orbit-two"></div>

              <div className="prepare-card">

                <span>
                  ADMISSION
                </span>

                <strong>
                  2026

                  <small>
                    SESSION
                  </small>
                </strong>


                <div className="prepare-card-bottom">

                  <span>
                    CLASSES
                  </span>

                  <strong>
                    {schoolClasses}
                  </strong>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INFORMATION
      ===================================================== */}

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

                  <strong>
                    Classes
                  </strong>

                  <p>
                    {schoolClasses}
                  </p>

                </div>

              </div>


              <div>

                <span>02</span>

                <div>

                  <strong>
                    School
                  </strong>

                  <p>
                    {schoolName}
                  </p>

                </div>

              </div>


              <div>

                <span>03</span>

                <div>

                  <strong>
                    Session
                  </strong>

                  <p>
                    2026
                  </p>

                </div>

              </div>


              <div>

                <span>04</span>

                <div>

                  <strong>
                    Next Step
                  </strong>

                  <p>
                    Connect with the school team.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ADMISSION ENQUIRY
      ===================================================== */}

      <section className="admissions-form-section">

        <div className="admissions-container">

          <div className="admissions-form-heading">

            <div className="admissions-kicker">

              <span>06</span>

              <span>ADMISSION ENQUIRY</span>

            </div>


            <h2>
              Tell us about
              <span>your enquiry.</span>
            </h2>


            <p>
              Submit your basic details and the
              school team can follow up regarding
              admission information.
            </p>

          </div>


          <div className="admissions-form-layout">


            {/* FORM INFORMATION */}

            <div className="admissions-form-info">

              <div className="admissions-form-info-number">
                06
              </div>


              <h3>
                Start your
                <span>enquiry.</span>
              </h3>


              <p>
                Please provide accurate contact and
                student information. Required fields
                are marked with an asterisk.
              </p>


              <div className="admissions-form-info-points">

                <div>

                  <CheckCircle2 size={18} />

                  <span>
                    Simple admission enquiry
                  </span>

                </div>


                <div>

                  <CheckCircle2 size={18} />

                  <span>
                    Student information included
                  </span>

                </div>


                <div>

                  <CheckCircle2 size={18} />

                  <span>
                    School team follow-up
                  </span>

                </div>

              </div>

            </div>


            {/* FORM */}

            <form
              className="admissions-enquiry-form"
              onSubmit={handleSubmit}
            >

              <div className="admissions-form-row">

                <div className="admissions-form-field">

                  <label htmlFor="admission-name">
                    Parent / Guardian Name *
                  </label>

                  <input
                    id="admission-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />

                </div>


                <div className="admissions-form-field">

                  <label htmlFor="admission-phone">
                    Phone Number *
                  </label>

                  <input
                    id="admission-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                  />

                </div>

              </div>


              <div className="admissions-form-row">

                <div className="admissions-form-field">

                  <label htmlFor="admission-email">
                    Email Address *
                  </label>

                  <input
                    id="admission-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    required
                  />

                </div>


                <div className="admissions-form-field">

                  <label htmlFor="admission-student">
                    Student Name *
                  </label>

                  <input
                    id="admission-student"
                    type="text"
                    name="student_name"
                    value={formData.student_name}
                    onChange={handleChange}
                    placeholder="Enter student's name"
                    required
                  />

                </div>

              </div>


              <div className="admissions-form-field">

                <label htmlFor="admission-class">
                  Class Applying For *
                </label>

                <select
                  id="admission-class"
                  name="class_applying_for"
                  value={formData.class_applying_for}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select class
                  </option>

                  <option value="Class 0">
                    Class 0
                  </option>

                  <option value="Class 1">
                    Class 1
                  </option>

                  <option value="Class 2">
                    Class 2
                  </option>

                  <option value="Class 3">
                    Class 3
                  </option>

                  <option value="Class 4">
                    Class 4
                  </option>

                  <option value="Class 5">
                    Class 5
                  </option>

                  <option value="Class 6">
                    Class 6
                  </option>

                  <option value="Class 7">
                    Class 7
                  </option>

                  <option value="Class 8">
                    Class 8
                  </option>

                  <option value="Class 9">
                    Class 9
                  </option>

                  <option value="Class 10">
                    Class 10
                  </option>

                </select>

              </div>


              <div className="admissions-form-field">

                <label htmlFor="admission-message">
                  Message
                </label>

                <textarea
                  id="admission-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us anything you would like to know about admission..."
                  rows="5"
                />

              </div>


              {/* STATUS MESSAGE */}

              {submitMessage && (

                <div
                  className={`admissions-submit-message ${
                    submitStatus === "success"
                      ? "success"
                      : "error"
                  }`}
                >

                  {submitStatus === "success" ? (
                    <CheckCircle2 size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}

                  <span>
                    {submitMessage}
                  </span>

                </div>

              )}


              {/* SUBMIT */}

              <button
                type="submit"
                className="admissions-submit-button"
                disabled={isSubmitting}
              >

                <span>
                  {isSubmitting
                    ? "Submitting..."
                    : "Submit Admission Enquiry"}
                </span>

                {isSubmitting ? (
                  <span className="admissions-submit-loader">
                    ...
                  </span>
                ) : (
                  <Send size={17} />
                )}

              </button>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="admissions-final">

        <div className="admissions-container">

          <div className="admissions-final-inner">

            <div className="admissions-kicker">

              <span>07</span>

              <span>READY TO CONNECT?</span>

            </div>


            <h2>
              Let's start the
              <span>conversation.</span>
            </h2>


            <p>
              For current admission availability,
              requirements and school information,
              connect with the school team.
            </p>


            <div className="admissions-final-actions">

              <Link
                to="/contact"
                className="admissions-primary-button"
              >

                <span>
                  Contact School
                </span>

                <ArrowUpRight size={17} />

              </Link>


              <Link
                to="/about"
                className="admissions-secondary-button"
              >

                <span>
                  Know the School
                </span>

                <ArrowRight size={17} />

              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Admissions;