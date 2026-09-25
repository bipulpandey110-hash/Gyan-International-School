import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  CalendarDays,
  ChevronRight,
  Clock3,
  MapPin,
} from "lucide-react";

import { Link } from "react-router-dom";
import schoolData from "../data/schoolData";
import "./Events.css";

const eventData = [
  {
    id: "event-01",
    month: "SEP",
    day: "28",
    date: "28 September 2026",
    type: "ACADEMIC",
    title: "Academic Session & Learning",
    description:
      "A focused school day built around classroom learning, participation and student development.",
    time: "09:00 AM",
    location: "School Campus",
  },
  {
    id: "event-02",
    month: "OCT",
    day: "02",
    date: "02 October 2026",
    type: "SCHOOL",
    title: "School Community Day",
    description:
      "A day bringing together learning, participation and the wider school community.",
    time: "10:00 AM",
    location: "School Campus",
  },
  {
    id: "event-03",
    month: "OCT",
    day: "12",
    date: "12 October 2026",
    type: "ACTIVITY",
    title: "Student Activity Session",
    description:
      "An opportunity for students to participate, explore interests and learn beyond the classroom.",
    time: "11:00 AM",
    location: "Activity Area",
  },
  {
    id: "event-04",
    month: "OCT",
    day: "24",
    date: "24 October 2026",
    type: "ACADEMIC",
    title: "Learning Review",
    description:
      "A structured academic review focused on understanding, progress and future learning goals.",
    time: "09:30 AM",
    location: "School Campus",
  },
];

const noticeData = [
  {
    id: "notice-01",
    number: "01",
    type: "NOTICE",
    title: "Admissions & Enquiry",
    description:
      "Connect with the school team for admission information and general enquiries.",
    action: "/admissions",
    actionLabel: "Admissions",
  },
  {
    id: "notice-02",
    number: "02",
    type: "INFORMATION",
    title: "Academic Information",
    description:
      "Explore the academic structure and learning journey for Classes 0–10.",
    action: "/academics",
    actionLabel: "Academics",
  },
  {
    id: "notice-03",
    number: "03",
    type: "SCHOOL LIFE",
    title: "Campus & Student Experience",
    description:
      "Discover the spaces and experiences that form part of everyday school life.",
    action: "/campus",
    actionLabel: "Campus",
  },
];

function Events() {
  const { school } = schoolData;

  const [activeFilter, setActiveFilter] = useState("ALL");

  const filters = ["ALL", "ACADEMIC", "ACTIVITY", "SCHOOL"];

  const filteredEvents = useMemo(() => {
    if (activeFilter === "ALL") {
      return eventData;
    }

    return eventData.filter(
      (event) => event.type === activeFilter
    );
  }, [activeFilter]);

  return (
    <div className="events-page">
      {/* HERO */}
      <section className="events-hero">
        <div className="events-container">
          <div className="events-hero-top">
            <div className="events-kicker">
              <span>01</span>
              <span>EVENTS &amp; NOTICES</span>
            </div>

            <div className="events-hero-meta">
              <span>{school.classes}</span>
              <span className="events-meta-dot"></span>
              <span>SCHOOL CALENDAR</span>
            </div>
          </div>

          <div className="events-hero-content">
            <span className="events-hero-label">
              WHAT'S HAPPENING
            </span>

            <h1>
              Stay connected
              <span>with school life.</span>
            </h1>

            <p>
              Follow important school information, upcoming
              activities and moments from the academic journey.
            </p>
          </div>

          <div className="events-hero-bottom">
            <div>
              <strong>04</strong>
              <span>UPCOMING EVENTS</span>
            </div>

            <div>
              <strong>03</strong>
              <span>SCHOOL UPDATES</span>
            </div>

            <div>
              <strong>01</strong>
              <span>COMMUNITY</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="events-intro events-section">
        <div className="events-container">
          <div className="events-intro-grid">
            <div className="events-intro-index">
              <span>02</span>

              <strong>
                PLAN
                <br />
                PARTICIPATE
                <br />
                GROW
              </strong>
            </div>

            <div className="events-intro-content">
              <div className="events-kicker">
                <span>SCHOOL CALENDAR</span>
              </div>

              <h2>
                Keep track of
                <span>what matters.</span>
              </h2>

              <p>
                School life is more than classroom learning.
                Events, activities and important updates create
                opportunities for students and families to stay
                informed and involved.
              </p>

              <p>
                This section is structured to become fully
                dynamic later, so events and notices can be
                managed through the school backend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="events-list-section events-section">
        <div className="events-container">
          <div className="events-section-heading">
            <div className="events-kicker">
              <span>03</span>
              <span>UPCOMING</span>
            </div>

            <div>
              <h2>
                What's coming
                <span>next.</span>
              </h2>

              <p>
                Upcoming activities and school moments.
              </p>
            </div>
          </div>

          {/* FILTERS */}
          <div className="events-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={
                  activeFilter === filter
                    ? "active"
                    : ""
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* EVENT LIST */}
          <div className="events-list">
            {filteredEvents.map((event, index) => (
              <article
                className="event-row"
                key={event.id}
              >
                <div className="event-date">
                  <span>{event.month}</span>
                  <strong>{event.day}</strong>
                </div>

                <div className="event-main">
                  <div className="event-topline">
                    <span>{event.type}</span>
                    <span className="event-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3>{event.title}</h3>

                  <p>{event.description}</p>

                  <div className="event-details">
                    <span>
                      <Clock3 size={14} />
                      {event.time}
                    </span>

                    <span>
                      <MapPin size={14} />
                      {event.location}
                    </span>
                  </div>
                </div>

                <div className="event-arrow">
                  <ArrowUpRight size={19} />
                </div>
              </article>
            ))}

            {filteredEvents.length === 0 && (
              <div className="events-empty">
                <CalendarDays size={28} />
                <h3>No events in this category.</h3>
                <p>
                  More school activities will appear here
                  when they are added.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* NOTICE BOARD */}
      <section className="notice-section events-section">
        <div className="events-container">
          <div className="notice-heading">
            <div className="events-kicker light">
              <span>04</span>
              <span>NOTICE BOARD</span>
            </div>

            <div>
              <h2>
                Important
                <span>information.</span>
              </h2>

              <p>
                Useful links and school information for
                students and families.
              </p>
            </div>
          </div>

          <div className="notice-grid">
            {noticeData.map((notice) => (
              <article
                className="notice-card"
                key={notice.id}
              >
                <div className="notice-card-top">
                  <span>{notice.number}</span>
                  <Bell size={17} />
                </div>

                <span className="notice-type">
                  {notice.type}
                </span>

                <h3>{notice.title}</h3>

                <p>{notice.description}</p>

                <Link to={notice.action}>
                  <span>{notice.actionLabel}</span>
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOOL RHYTHM */}
      <section className="events-rhythm events-section">
        <div className="events-container">
          <div className="events-rhythm-grid">
            <div className="events-rhythm-content">
              <div className="events-kicker">
                <span>05</span>
                <span>SCHOOL RHYTHM</span>
              </div>

              <h2>
                Learning has
                <span>a rhythm.</span>
              </h2>

              <p>
                Every school day brings a combination of
                learning, interaction, participation and
                discovery.
              </p>

              <div className="rhythm-points">
                <div>
                  <span>01</span>
                  <strong>Learn</strong>
                  <small>
                    Classroom and academic experiences.
                  </small>
                </div>

                <div>
                  <span>02</span>
                  <strong>Participate</strong>
                  <small>
                    Activities and shared experiences.
                  </small>
                </div>

                <div>
                  <span>03</span>
                  <strong>Connect</strong>
                  <small>
                    Building relationships and community.
                  </small>
                </div>
              </div>
            </div>

            <div className="events-rhythm-visual">
              <div className="rhythm-orbit orbit-one"></div>
              <div className="rhythm-orbit orbit-two"></div>
              <div className="rhythm-orbit orbit-three"></div>

              <div className="rhythm-core">
                <CalendarDays size={28} />
                <strong>2026</strong>
                <span>SCHOOL YEAR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="events-final">
        <div className="events-container">
          <div className="events-final-inner">
            <div className="events-kicker">
              <span>06</span>
              <span>STAY CONNECTED</span>
            </div>

            <h2>
              Want to know
              <span>more?</span>
            </h2>

            <p>
              Explore admissions or contact the school team
              for more information about the school journey.
            </p>

            <div className="events-final-actions">
              <Link
                to="/admissions"
                className="events-primary-button"
              >
                <span>Admissions</span>
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="events-secondary-button"
              >
                <span>Contact School</span>
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;