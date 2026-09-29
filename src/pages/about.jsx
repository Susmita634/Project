import { Link } from "react-router-dom";

function About() {
  return (
    <div className="simple-page">
      <h1>About Us</h1>

      <p>
        MediCare is a modern healthcare platform designed
        to make healthcare services simple and accessible.
      </p>

      <div className="about-box">
        <h2>Our Mission</h2>

        <p>
          Our mission is to connect patients with trusted
          healthcare professionals and provide convenient
          access to medical services.
        </p>

        <h2>Our Vision</h2>

        <p>
          We aim to provide a simple and user-friendly
          healthcare experience for everyone.
        </p>
      </div>

      <Link to="/">
        <button className="secondary-btn">
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export default About;