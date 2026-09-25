import { useState } from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Faculty from "./pages/Faculty";
import Campus from "./pages/Campus";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import NotFound from "./pages/NotFound";

import schoolData from "./data/schoolData";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`site-header ${menuOpen ? "mobile-menu-open" : ""}`}>
      <div className="header-container">
        <Link to="/" className="school-brand" onClick={closeMenu}>
          <div className="brand-symbol">
            <span>{schoolData.brand.mark}</span>
            <small>{schoolData.brand.secondaryMark}</small>
          </div>

          <div className="brand-content">
            <strong>{schoolData.school.shortName}</strong>
            <span>Future Training Res School</span>
          </div>
        </Link>

        <nav className="main-navigation">
          {schoolData.navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="header-action">
          <span>Get in touch</span>
          <strong>↗</strong>
        </Link>

        <button
          type="button"
          className={`mobile-menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-navigation ${menuOpen ? "show" : ""}`}>
        <div className="mobile-navigation-inner">
          <nav className="mobile-navigation-links">
            {schoolData.navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? "active" : ""}`
                }
              >
                <span>{item.label}</span>
                <strong>→</strong>
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="mobile-contact-button"
            onClick={closeMenu}
          >
            <span>Get in touch</span>
            <strong>↗</strong>
          </Link>

          <div className="mobile-school-note">
            <span className="mobile-school-dot" />
            <span>
              {schoolData.school.shortName} · {schoolData.school.classes}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

function App() {
  return (
    <div className="school-site">
      <Header />

      <main className="site-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;