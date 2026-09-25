import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";


import "./footer.css";
import { Link } from "react-router-dom";
import schoolData from "../data/schoolData";

function Footer() {
  const { school, brand, navigation, contact, footer } = schoolData;

  const exploreLinks = navigation.filter((item) =>
    ["/", "/about", "/academics", "/faculty", "/campus"].includes(item.path)
  );

  const schoolLinks = navigation.filter((item) =>
    ["/gallery", "/events", "/admissions", "/contact"].includes(item.path)
  );

  const social = contact?.social || {};

  const socialLinks = [
    {
      name: "Facebook",
      short: "f",
      href: social.facebook,
    },
    {
      name: "Instagram",
      short: "ig",
      href: social.instagram,
    },
    {
      name: "YouTube",
      short: "▶",
      href: social.youtube,
    },
  ];

  return (
    <footer className="site-footer">
      {/* Decorative background */}
      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>

      {/* =====================================================
          MAIN FOOTER
          ===================================================== */}

      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand-column">
          <Link to="/" className="footer-brand">
            <div className="brand-symbol small">
              <span>{brand.mark}</span>
              <small>{brand.secondaryMark}</small>
            </div>

            <div className="footer-brand-content">
              <strong>{school.shortName}</strong>
              <span>Future Training Res School</span>
            </div>
          </Link>

          <p className="footer-description">
            {footer.description}
          </p>

          <div className="footer-status">
            <span className="footer-status-dot"></span>
            <span>{footer.status}</span>
          </div>

          <div className="footer-school-meta">
            <span>{school.tagline}</span>
          </div>

          {/* SOCIAL */}
          <div className="footer-social">
            <span className="footer-social-label">
              FOLLOW THE SCHOOL
            </span>

            <div className="footer-social-links">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href || "#"}
                  target={
                    item.href && item.href !== "#"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.href && item.href !== "#"
                      ? "noreferrer"
                      : undefined
                  }
                  className="footer-social-link"
                  aria-label={item.name}
                  title={item.name}
                  onClick={(event) => {
                    if (!item.href || item.href === "#") {
                      event.preventDefault();
                    }
                  }}
                >
                  <span>{item.short}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            EXPLORE
            ===================================================== */}

        <div className="footer-column">
          <div className="footer-column-heading">
            <span>01</span>
            <h3>Explore</h3>
          </div>

          {exploreLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="footer-nav-link"
            >
              <span>{item.label}</span>
              <ArrowUpRight size={15} />
            </Link>
          ))}
        </div>

        {/* =====================================================
            SCHOOL
            ===================================================== */}

        <div className="footer-column">
          <div className="footer-column-heading">
            <span>02</span>
            <h3>School</h3>
          </div>

          {schoolLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="footer-nav-link"
            >
              <span>{item.label}</span>
              <ArrowUpRight size={15} />
            </Link>
          ))}
        </div>

        {/* =====================================================
            CONTACT
            ===================================================== */}

        <div className="footer-column footer-contact-column">
          <div className="footer-column-heading">
            <span>03</span>
            <h3>Connect</h3>
          </div>

          <p className="footer-contact-intro">
            {contact.description}
          </p>

          <div className="footer-contact-list">

            {/* PHONE */}
            {contact.phone && (
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
              >
                <span className="footer-contact-icon">
                  <Phone size={15} />
                </span>

                <span className="footer-contact-text">
                  <small>Phone</small>
                  <strong>{contact.phone}</strong>
                </span>
              </a>
            )}

            {/* EMAIL */}
            {contact.email && (
              <a href={`mailto:${contact.email}`}>
                <span className="footer-contact-icon">
                  <Mail size={15} />
                </span>

                <span className="footer-contact-text">
                  <small>Email</small>
                  <strong>{contact.email}</strong>
                </span>
              </a>
            )}

            {/* ADDRESS */}
            {contact.address && (
              <div className="footer-contact-address">
                <span className="footer-contact-icon">
                  <MapPin size={15} />
                </span>

                <span className="footer-contact-text">
                  <small>Location</small>
                  <strong>{contact.address}</strong>
                </span>
              </div>
            )}

          </div>

          {/* CONTACT PAGE */}
          <Link
            to="/contact"
            className="footer-contact-link"
          >
            <span>Get in touch</span>
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      {/* =====================================================
          ADMISSIONS CTA
          ===================================================== */}

      <div className="footer-cta">
        <div className="footer-cta-content">
          <span className="footer-cta-label">
            START THE JOURNEY
          </span>

          <h2>
            Building knowledge.
            <br />
            Growing with confidence.
          </h2>
        </div>

        <Link
          to="/admissions"
          className="footer-cta-button"
        >
          <span>Admissions</span>
          <ArrowUpRight size={18} />
        </Link>
      </div>

      {/* =====================================================
          DIVIDER
          ===================================================== */}

      <div className="footer-divider"></div>

      {/* =====================================================
          BOTTOM FOOTER
          ===================================================== */}

      <div className="footer-bottom">

        <span>
          © {school.year} {school.fullName}
        </span>

        <div className="footer-bottom-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/academics">
            Academics
          </Link>

          <Link to="/faculty">
            Faculty
          </Link>

          <Link to="/gallery">
            Gallery
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>

        <span className="footer-made">
          {footer.closingLine}
        </span>

      </div>
    </footer>
  );
}

export default Footer;