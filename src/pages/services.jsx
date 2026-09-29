import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="simple-page">
      <h1>Our Services</h1>

      <p>
        We provide quality healthcare services for our patients.
      </p>

      <div className="service-cards">

        <div className="service-card">
          <div className="icon">🩺</div>
          <h2>General Care</h2>
          <p>
            Complete medical consultation and general healthcare.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">❤️</div>
          <h2>Cardiology</h2>
          <p>
            Specialized care for heart-related conditions.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">💊</div>
          <h2>Pharmacy</h2>
          <p>
            Access to prescribed medicines and pharmacy services.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🚑</div>
          <h2>Emergency Care</h2>
          <p>
            Quick medical assistance for emergency situations.
          </p>
        </div>

      </div>

      <Link to="/">
        <button className="secondary-btn">
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export default Services;