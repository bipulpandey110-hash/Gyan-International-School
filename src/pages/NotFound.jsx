import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found-page">

      <div className="not-found-glow"></div>

      <div className="not-found-card">

        <div className="not-found-number">
          404
        </div>

        <div className="not-found-label">
          PAGE NOT FOUND
        </div>

        <h1>
          This page could not be found.
        </h1>

        <p>
          The page you are looking for may have been moved,
          renamed, or is currently unavailable.
        </p>

        <div className="not-found-actions">

          <Link
            to="/"
            className="not-found-primary"
          >
            <span>
              Back to Home
            </span>

            <strong>
              →
            </strong>
          </Link>

          <Link
            to="/contact"
            className="not-found-secondary"
          >
            Contact School
          </Link>

        </div>

        <div className="not-found-school">

          <div className="not-found-logo">
            G
          </div>

          <div>
            <strong>
              Gyan International
            </strong>

            <span>
              Future Training Res School
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default NotFound;