import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { Link } from "react-router-dom";
import schoolData from "../data/schoolData";
import "./Contact.css";

function Contact() {
  const { school, contact } = schoolData;

  const phone = contact?.phone || "";
  const email = contact?.email || "";
  const address = contact?.address || "";

  return (
    <div className="contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero-new">
        <div className="contact-container-new">

          <div className="contact-hero-badge">
            <span className="contact-live-dot"></span>
            CONTACT THE SCHOOL
          </div>

          <div className="contact-hero-grid">

            <div className="contact-hero-copy">

              <h1>
                Let's build a
                <span>connection.</span>
              </h1>

              <p>
                Whether you want to know about admissions,
                academics, school life or anything else,
                our school team is here to help.
              </p>

              <div className="contact-hero-actions">

                <a
                  href="#enquiry"
                  className="contact-main-button"
                >
                  <span>Send an Enquiry</span>
                  <ArrowUpRight size={17} />
                </a>

                <Link
                  to="/admissions"
                  className="contact-outline-button"
                >
                  <span>Admissions</span>
                  <ArrowRight size={16} />
                </Link>

              </div>

            </div>


            <div className="contact-hero-card">

              <div className="contact-hero-card-top">

                <span>
                  GYAN INTERNATIONAL
                </span>

                <div className="contact-card-symbol">
                  GI
                </div>

              </div>


              <div className="contact-hero-card-content">

                <small>
                  SCHOOL
                </small>

                <strong>
                  {school?.shortName || "Gyan International"}
                </strong>

                <p>
                  {school?.tagline ||
                    "Learning with purpose. Growing with confidence."}
                </p>

              </div>


              <div className="contact-hero-card-bottom">

                <div>
                  <span>CLASSES</span>

                  <strong>
                    {school?.classes || "0–10"}
                  </strong>
                </div>

                <div>
                  <span>SESSION</span>

                  <strong>
                    2026
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          QUICK CONTACT
      ===================================================== */}

      <section className="contact-quick-section">

        <div className="contact-container-new">

          <div className="contact-section-intro">

            <div>

              <span className="contact-section-number">
                01
              </span>

              <span className="contact-section-label">
                GET IN TOUCH
              </span>

            </div>

            <h2>
              We're here to
              <span>help.</span>
            </h2>

          </div>


          <div className="contact-info-grid">

            {/* PHONE */}

            <div className="contact-info-card">

              <div className="contact-info-icon">
                <Phone size={21} />
              </div>

              <div className="contact-info-content">

                <span>
                  CALL US
                </span>

                <strong>
                  {phone || "School phone number"}
                </strong>

                <p>
                  For admissions and general enquiries.
                </p>

              </div>

              <ArrowUpRight
                className="contact-info-arrow"
                size={18}
              />

            </div>


            {/* EMAIL */}

            <div className="contact-info-card">

              <div className="contact-info-icon">
                <Mail size={21} />
              </div>

              <div className="contact-info-content">

                <span>
                  EMAIL US
                </span>

                <strong>
                  {email || "School email address"}
                </strong>

                <p>
                  Send us your questions or requirements.
                </p>

              </div>

              <ArrowUpRight
                className="contact-info-arrow"
                size={18}
              />

            </div>


            {/* LOCATION */}

            <div className="contact-info-card">

              <div className="contact-info-icon">
                <MapPin size={21} />
              </div>

              <div className="contact-info-content">

                <span>
                  VISIT US
                </span>

                <strong>
                  {address || "School address"}
                </strong>

                <p>
                  School location and campus information.
                </p>

              </div>

              <ArrowUpRight
                className="contact-info-arrow"
                size={18}
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ENQUIRY
      ===================================================== */}

      <section
        className="contact-enquiry-section"
        id="enquiry"
      >

        <div className="contact-container-new">

          <div className="contact-enquiry-grid">

            {/* LEFT CONTENT */}

            <div className="contact-enquiry-left">

              <div className="contact-section-tag">

                <span>
                  02
                </span>

                SEND AN ENQUIRY

              </div>


              <h2>
                Have a
                <span>question?</span>
              </h2>


              <p>
                Fill in the details and share your message.
                The school team can use this information to
                understand your enquiry and respond accordingly.
              </p>


              <div className="contact-enquiry-points">

                <div>
                  <span>
                    01
                  </span>

                  <p>
                    Admissions &amp; school information
                  </p>
                </div>


                <div>
                  <span>
                    02
                  </span>

                  <p>
                    Academic and student enquiries
                  </p>
                </div>


                <div>
                  <span>
                    03
                  </span>

                  <p>
                    General school information
                  </p>
                </div>

              </div>

            </div>


            {/* FORM */}

            <div className="contact-form-card">

              <div className="contact-form-top">

                <div>

                  <span>
                    ENQUIRY FORM
                  </span>

                  <strong>
                    Tell us about it.
                  </strong>

                </div>


                <div className="contact-form-number">
                  02
                </div>

              </div>


              <form
                className="contact-new-form"
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >

                {/* NAME + PHONE */}

                <div className="contact-input-row">

                  <label>

                    <span>
                      FULL NAME
                    </span>

                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                    />

                  </label>


                  <label>

                    <span>
                      PHONE NUMBER
                    </span>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your phone number"
                    />

                  </label>

                </div>


                {/* EMAIL + TYPE */}

                <div className="contact-input-row">

                  <label>

                    <span>
                      EMAIL ADDRESS
                    </span>

                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                    />

                  </label>


                  <label>

                    <span>
                      ENQUIRY TYPE
                    </span>

                    <select
                      name="enquiryType"
                      defaultValue=""
                    >

                      <option
                        value=""
                        disabled
                      >
                        Select enquiry
                      </option>

                      <option value="admission">
                        Admissions
                      </option>

                      <option value="academic">
                        Academics
                      </option>

                      <option value="general">
                        General Information
                      </option>

                      <option value="other">
                        Other
                      </option>

                    </select>

                  </label>

                </div>


                {/* MESSAGE */}

                <label className="contact-message-field">

                  <span>
                    YOUR MESSAGE
                  </span>

                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    rows="6"
                  ></textarea>

                </label>


                {/* SUBMIT */}

                <button
                  type="submit"
                  className="contact-send-button"
                >

                  <span>
                    Send Enquiry
                  </span>

                  <div>
                    <Send size={16} />
                  </div>

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SOCIAL MEDIA
      ===================================================== */}

      <section className="contact-social-section">

        <div className="contact-container-new">

          <div className="contact-social-layout">

            <div>

              <div className="contact-section-tag">

                <span>
                  03
                </span>

                STAY CONNECTED

              </div>


              <h2>
                Follow school
                <span>life.</span>
              </h2>

            </div>


            <p>
              Follow the school on social platforms for
              updates, activities, events and moments from
              everyday school life.
            </p>

          </div>


          <div className="contact-social-grid">

            {/* FACEBOOK */}

            <a
              href="#"
              onClick={(event) =>
                event.preventDefault()
              }
              className="contact-social-card"
              aria-label="Facebook"
            >

              <div className="contact-social-icon-new">
                <Globe2 size={20} />
              </div>

              <div>

                <span>
                  FACEBOOK
                </span>

                <strong>
                  School Updates
                </strong>

              </div>

              <ArrowUpRight size={18} />

            </a>


            {/* INSTAGRAM */}

            <a
              href="#"
              onClick={(event) =>
                event.preventDefault()
              }
              className="contact-social-card"
              aria-label="Instagram"
            >

              <div className="contact-social-icon-new">
                <Globe2 size={20} />
              </div>

              <div>

                <span>
                  INSTAGRAM
                </span>

                <strong>
                  School Moments
                </strong>

              </div>

              <ArrowUpRight size={18} />

            </a>


            {/* YOUTUBE */}

            <a
              href="#"
              onClick={(event) =>
                event.preventDefault()
              }
              className="contact-social-card"
              aria-label="YouTube"
            >

              <div className="contact-social-icon-new">
                <Globe2 size={20} />
              </div>

              <div>

                <span>
                  YOUTUBE
                </span>

                <strong>
                  Videos &amp; Events
                </strong>

              </div>

              <ArrowUpRight size={18} />

            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section className="contact-location-section">

        <div className="contact-container-new">

          <div className="contact-location-card">

            <div className="contact-location-content">

              <div className="contact-section-tag light">

                <span>
                  04
                </span>

                SCHOOL LOCATION

              </div>


              <h2>
                Come and
                <span>meet us.</span>
              </h2>


              <p>
                Visit the school to understand the campus,
                learning environment and school community.
              </p>


              <div className="contact-location-address">

                <MapPin size={19} />

                <span>
                  {address ||
                    "School address will be added here."}
                </span>

              </div>


              <button
                type="button"
                className="contact-map-button"
              >

                <span>
                  View Location
                </span>

                <ArrowUpRight size={16} />

              </button>

            </div>


            <div className="contact-location-visual">

              <div className="contact-map-grid"></div>


              <div className="contact-map-pin">
                <MapPin size={25} />
              </div>


              <span className="contact-map-label">
                GYAN INTERNATIONAL
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact-final-new">

        <div className="contact-container-new">

          <div className="contact-final-card">

            <span className="contact-final-small">
              GYAN INTERNATIONAL FUTURE TRAINING RES SCHOOL
            </span>


            <h2>
              Your question could be
              <span>the beginning.</span>
            </h2>


            <p>
              For admissions, school information and general
              enquiries, connect with the school team.
            </p>


            <div className="contact-final-actions">

              <a
                href="#enquiry"
                className="contact-main-button"
              >

                <span>
                  Send an Enquiry
                </span>

                <ArrowUpRight size={17} />

              </a>


              <Link
                to="/"
                className="contact-outline-button"
              >

                <span>
                  Back to Home
                </span>

                <ArrowRight size={16} />

              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;