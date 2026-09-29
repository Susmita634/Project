import { Link } from "react-router-dom";

function Doctor() {
  return (
    <div className="simple-page">
      <h1>Our Doctors</h1>

      <p>
        Meet our experienced healthcare professionals.
      </p>

      <div className="doctor-cards">

        <div className="doctor-card">
          <div className="doctor1.png">👨‍⚕️</div>
          <h2>Dr. John Smith</h2>
          <p className="specialization">Cardiologist</p>
          <p>
            Specializes in heart and cardiovascular care.
          </p>

          <button className="secondary-btn">
            View Details
          </button>
        </div>

        <div className="doctor-card">
          <div className="">👩‍⚕️</div>
          <h2>Dr. Sarah Lee</h2>
          <p className="specialization">General Physician</p>
          <p>
            Provides general medical consultation and care.
          </p>

          <button className="secondary-btn">
            View Details
          </button>
        </div>

        <div className="doctor-card">
          <div className="doctor-image">👨‍⚕️</div>
          <h2>Dr. David Kumar</h2>
          <p className="specialization">Orthopedic Specialist</p>
          <p>
            Specializes in bones, joints, and muscle conditions.
          </p>

          <button className="secondary-btn">
            View Details
          </button>
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

export default Doctor;

