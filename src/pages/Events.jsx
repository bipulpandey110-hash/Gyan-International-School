import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";
import { schoolAPI } from "../services/api";
import "./Events.css";

function formatEventDate(dateValue) {
  if (!dateValue) return "Date to be announced";

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return dateValue;
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getEventMonth(dateValue) {
  if (!dateValue) return "EVENT";

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return "EVENT";
  }

  return date
    .toLocaleDateString("en-IN", {
      month: "short",
    })
    .toUpperCase();
}

function getEventDay(dateValue) {
  if (!dateValue) return "--";

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return "--";
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
  });
}

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadEvents = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await schoolAPI.getEvents();

        if (!isMounted) return;

        const eventList = Array.isArray(response)
          ? response
          : response?.results || [];

        setEvents(eventList);
      } catch (err) {
        console.error("Events API error:", err);

        if (!isMounted) return;

        setError(
          "Events are temporarily unavailable. Please try again shortly."
        );
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadEvents();

    return () => {
      isMounted = false;
    };
  }, []);

  const featuredEvents = events.filter((event) => event.is_featured);
  const regularEvents = events.filter((event) => !event.is_featured);

  return (
    <section className="events-page">
      {/* HERO */}
      <div className="events-hero">
        <div className="events-hero-glow events-hero-glow-one" />
        <div className="events-hero-glow events-hero-glow-two" />

        <div className="events-container">
          <div className="events-hero-grid">
            <div className="events-hero-content">
              <span className="section-eyebrow">
                <CalendarDays size={15} />
                SCHOOL EVENTS
              </span>

              <h1>
                Moments that bring
                <span> our community together.</span>
              </h1>

              <p>
                Stay connected with important school activities, celebrations,
                programmes and events happening throughout the academic year.
              </p>

              <div className="events-hero-actions">
                <Link to="/contact" className="events-primary-button">
                  <span>Contact School</span>
                  <ArrowRight size={17} />
                </Link>

                <Link to="/admissions" className="events-secondary-button">
                  Admissions
                </Link>
              </div>
            </div>

            <div className="events-hero-card">
              <div className="events-hero-card-icon">
                <CalendarDays size={25} />
              </div>

              <span>UPCOMING ACTIVITIES</span>

              <strong>
                {String(events.length).padStart(2, "0")}
              </strong>

              <p>
                Events currently published by the school.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* EVENTS */}
      <div className="events-container">
        <div className="events-heading-row">
          <div>
            <span className="events-mini-label">SCHOOL CALENDAR</span>

            <h2>
              Upcoming school
              <span> experiences.</span>
            </h2>
          </div>

          <p>
            From academic programmes to cultural celebrations, school events
            give students opportunities to participate, learn and grow
            together.
          </p>
        </div>

        {loading && (
          <div className="events-state">
            <div className="events-loader" />
            <h3>Loading school events</h3>
            <p>Please wait while we load the latest events.</p>
          </div>
        )}

        {!loading && error && (
          <div className="events-state events-state-error">
            <CalendarDays size={32} />
            <h3>Unable to load events</h3>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && events.length === 0 && (
          <div className="events-state">
            <CalendarDays size={32} />
            <h3>No events published yet</h3>
            <p>
              New school events will appear here once they are added through
              the school administration panel.
            </p>
          </div>
        )}

        {!loading && !error && events.length > 0 && (
          <>
            {/* FEATURED EVENT */}
            {featuredEvents.length > 0 && (
              <div className="events-featured-section">
                {featuredEvents.map((event) => (
                  <article
                    className="event-featured-card"
                    key={event.id}
                  >
                    <div className="event-featured-image">
                      {event.image_url ? (
                        <img
                          src={event.image_url}
                          alt={event.title}
                        />
                      ) : (
                        <div className="event-image-placeholder">
                          <CalendarDays size={42} />
                          <span>SCHOOL EVENT</span>
                        </div>
                      )}

                      <div className="event-featured-overlay" />

                      <div className="event-featured-badge">
                        <Sparkles size={14} />
                        FEATURED EVENT
                      </div>

                      <div className="event-featured-date">
                        <strong>{getEventDay(event.event_date)}</strong>
                        <span>{getEventMonth(event.event_date)}</span>
                      </div>
                    </div>

                    <div className="event-featured-content">
                      <span className="event-card-label">
                        UPCOMING EVENT
                      </span>

                      <h3>{event.title}</h3>

                      {event.description && (
                        <p>{event.description}</p>
                      )}

                      <div className="event-meta-list">
                        <div>
                          <CalendarDays size={16} />
                          <span>
                            {formatEventDate(event.event_date)}
                          </span>
                        </div>

                        {event.location && (
                          <div>
                            <MapPin size={16} />
                            <span>{event.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* REGULAR EVENTS */}
            {regularEvents.length > 0 && (
              <div className="events-grid">
                {regularEvents.map((event) => (
                  <article className="event-card" key={event.id}>
                    <div className="event-card-image">
                      {event.image_url ? (
                        <img
                          src={event.image_url}
                          alt={event.title}
                        />
                      ) : (
                        <div className="event-image-placeholder">
                          <CalendarDays size={32} />
                          <span>EVENT</span>
                        </div>
                      )}

                      <div className="event-card-date">
                        <strong>{getEventDay(event.event_date)}</strong>
                        <span>{getEventMonth(event.event_date)}</span>
                      </div>
                    </div>

                    <div className="event-card-content">
                      <span className="event-card-label">
                        SCHOOL EVENT
                      </span>

                      <h3>{event.title}</h3>

                      {event.description && (
                        <p>{event.description}</p>
                      )}

                      <div className="event-card-meta">
                        <div>
                          <Clock3 size={15} />
                          <span>
                            {formatEventDate(event.event_date)}
                          </span>
                        </div>

                        {event.location && (
                          <div>
                            <MapPin size={15} />
                            <span>{event.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* CTA */}
      <div className="events-container">
        <div className="events-cta">
          <div>
            <span className="events-mini-label">STAY CONNECTED</span>

            <h2>
              Have a question about
              <span> an upcoming event?</span>
            </h2>

            <p>
              Contact the school office for event timings, participation
              details and other information.
            </p>
          </div>

          <Link to="/contact" className="events-cta-button">
            <span>Contact School</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Events;