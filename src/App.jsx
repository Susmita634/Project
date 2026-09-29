import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Doctor from "./pages/doctor";
import Services from "./pages/services";
import About from "./pages/about";

function Home() {
  return (
    <div className="page">
      <header className="navbar">
        <div className="logo">🏥 MediCare</div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
        </nav>

        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <p className="small-title">WELCOME TO MEDICARE</p>

            <h1>
              Your Health,
              <br />
              Our Priority
            </h1>

            <p className="description">
              Quality healthcare with trusted doctors and modern medical
              services, all in one place.
            </p>

            <div className="buttons">
              <Link to="/appointment">
                <button className="primary-btn">
                  Book Appointment
                </button>
              </Link>

              <Link to="/doctors">
                <button className="secondary-btn">
                  View Doctors
                </button>
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <div className="doctor-icon">👨‍⚕️</div>
            <h2>Expert Doctors</h2>
            <p>Professional healthcare at your fingertips.</p>
          </div>
        </section>

        <section className="services">
          <h2>Our Services</h2>

          <p className="section-text">
            Healthcare services designed for your needs.
          </p>

          <div className="service-cards">
            <div className="service-card">
              <div className="icon">🩺</div>
              <h3>General Care</h3>
              <p>Complete medical consultation and care.</p>
            </div>

            <div className="service-card">
              <div className="icon">❤️</div>
              <h3>Cardiology</h3>
              <p>Specialized heart care from expert doctors.</p>
            </div>

            <div className="service-card">
              <div className="icon">💊</div>
              <h3>Pharmacy</h3>
              <p>Easy access to prescribed medicines.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


function Login() {
  return (
    <div className="simple-page">
      <h1>Login</h1>
      <p>Welcome back to MediCare.</p>

      <form className="form-box">
        <input
          type="email"
          placeholder="Enter your email"
        />

        <input
          type="password"
          placeholder="Enter your password"
        />

        <button className="primary-btn">
          Login
        </button>
      </form>

      <Link to="/">
        <button className="secondary-btn">
          Back to Home
        </button>
      </Link>
    </div>
  );
}


function Appointment() {
  return (
    <div className="simple-page">
      <h1>Book Appointment</h1>
      <p>Schedule an appointment with our doctors.</p>

      <form className="form-box">
        <input
          type="text"
          placeholder="Patient Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="date"
        />

        <select>
          <option>Select Doctor</option>
          <option>Dr. John Smith</option>
          <option>Dr. Sarah Lee</option>
          <option>Dr. David Kumar</option>
        </select>

        <button className="primary-btn">
          Book Appointment
        </button>
      </form>

      <Link to="/">
        <button className="secondary-btn">
          Back to Home
        </button>
      </Link>
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/doctors" element={<Doctor />} />

        <Route path="/services" element={<Services />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/appointment"
          element={<Appointment />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;