import { useState } from "react";
import "./App.css";

function App() {
  // =========================
  // MAIN PAGE STATE
  // =========================
  const [page, setPage] = useState("home");
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [showPassword, setShowPassword] = useState(false);

  // =========================
  // PATIENT STATE
  // =========================
  const [patients, setPatients] = useState([
    {
      id: "PT-10245",
      name: "Raj Kumar",
      age: 34,
      gender: "Male",
      phone: "9841234567",
      department: "Cardiology",
      doctor: "Dr. Anil Sharma",
      status: "Active",
    },
    {
      id: "PT-10246",
      name: "Sita Maya",
      age: 28,
      gender: "Female",
      phone: "9812345678",
      department: "General Medicine",
      doctor: "Dr. Ramesh Thapa",
      status: "Active",
    },
    {
      id: "PT-10247",
      name: "Amit Pradhan",
      age: 12,
      gender: "Male",
      phone: "9801234567",
      department: "Pediatrics",
      doctor: "Dr. Sunita Rai",
      status: "Active",
    },
    {
      id: "PT-10248",
      name: "Bina Gurung",
      age: 45,
      gender: "Female",
      phone: "9861234567",
      department: "Orthopedics",
      doctor: "Dr. Prakash KC",
      status: "Inactive",
    },
    {
      id: "PT-10249",
      name: "Suman Thapa",
      age: 51,
      gender: "Male",
      phone: "9851234567",
      department: "Neurology",
      doctor: "Dr. Bikash Shrestha",
      status: "Active",
    },
    {
      id: "PT-10250",
      name: "Anita Rai",
      age: 31,
      gender: "Female",
      phone: "9821234567",
      department: "Dermatology",
      doctor: "Dr. Manisha Joshi",
      status: "Active",
    },
  ]);

  const [patientSearch, setPatientSearch] = useState("");
  const [showPatientForm, setShowPatientForm] = useState(false);

  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    gender: "Male",
    phone: "",
    department: "General Medicine",
    doctor: "",
  });

  // =========================
  // DOCTOR STATE
  // =========================
  const [doctors] = useState([
    {
      id: "DR-001",
      name: "Dr. Anil Sharma",
      specialization: "Cardiologist",
      department: "Cardiology",
      qualification: "MBBS MD",
      experience: "12 yrs",
      fee: "Rs 800",
      status: "Available",
    },
    {
      id: "DR-002",
      name: "Dr. Ramesh Thapa",
      specialization: "Physician",
      department: "General Medicine",
      qualification: "MBBS MD",
      experience: "9 yrs",
      fee: "Rs 700",
      status: "Available",
    },
    {
      id: "DR-003",
      name: "Dr. Sunita Rai",
      specialization: "Pediatrician",
      department: "Pediatrics",
      qualification: "MBBS MD",
      experience: "7 yrs",
      fee: "Rs 600",
      status: "Available",
    },
    {
      id: "DR-004",
      name: "Dr. Prakash KC",
      specialization: "Orthopedic Surgeon",
      department: "Orthopedics",
      qualification: "MBBS MS",
      experience: "15 yrs",
      fee: "Rs 1000",
      status: "On Leave",
    },
    {
      id: "DR-005",
      name: "Dr. Bikash Shrestha",
      specialization: "Neurologist",
      department: "Neurology",
      qualification: "MBBS MD",
      experience: "11 yrs",
      fee: "Rs 900",
      status: "Available",
    },
    {
      id: "DR-006",
      name: "Dr. Manisha Joshi",
      specialization: "Dermatologist",
      department: "Dermatology",
      qualification: "MBBS MD",
      experience: "8 yrs",
      fee: "Rs 700",
      status: "Unavailable",
    },
  ]);

  const [doctorSearch, setDoctorSearch] = useState("");

  // =========================
  // APPOINTMENT STATE
  // =========================
  const [appointments, setAppointments] = useState([
    {
      id: "APT-1001",
      patient: "Aarav Sharma",
      patientId: "PT-10245",
      doctor: "Dr. Anil Sharma",
      doctorId: "DR-001",
      department: "Cardiology",
      date: "2026-10-01",
      time: "10:00 AM",
      type: "Consultation",
      status: "Scheduled",
      phone: "9841234567",
      reason: "Chest pain and regular checkup",
    },
    {
      id: "APT-1002",
      patient: "Sita Rai",
      patientId: "PT-10246",
      doctor: "Dr. Sunita Rai",
      doctorId: "DR-003",
      department: "Pediatrics",
      date: "2026-10-01",
      time: "11:30 AM",
      type: "Follow-up",
      status: "Pending",
      phone: "9812345678",
      reason: "Child fever follow-up",
    },
    {
      id: "APT-1003",
      patient: "Rohan Thapa",
      patientId: "PT-10247",
      doctor: "Dr. Ramesh Thapa",
      doctorId: "DR-002",
      department: "General Medicine",
      date: "2026-10-02",
      time: "09:30 AM",
      type: "Consultation",
      status: "Scheduled",
      phone: "9860123456",
      reason: "General health examination",
    },
    {
      id: "APT-1004",
      patient: "Mina Gurung",
      patientId: "PT-10248",
      doctor: "Dr. Bikash Shrestha",
      doctorId: "DR-005",
      department: "Neurology",
      date: "2026-09-30",
      time: "02:00 PM",
      type: "Follow-up",
      status: "Completed",
      phone: "9801234567",
      reason: "Headache follow-up",
    },
    {
      id: "APT-1005",
      patient: "Nabin KC",
      patientId: "PT-10249",
      doctor: "Dr. Prakash KC",
      doctorId: "DR-004",
      department: "Orthopedics",
      date: "2026-10-03",
      time: "01:00 PM",
      type: "Consultation",
      status: "Cancelled",
      phone: "9823456789",
      reason: "Knee pain",
    },
  ]);

  const [appointmentSearch, setAppointmentSearch] = useState("");
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  const [newAppointment, setNewAppointment] = useState({
    patient: "",
    patientId: "",
    doctor: "",
    doctorId: "",
    department: "General Medicine",
    date: "",
    time: "",
    type: "Consultation",
    status: "Scheduled",
    phone: "",
    reason: "",
  });

  // =========================
  // SIDEBAR MENU
  // =========================
  const menuItems = [
    { name: "Dashboard", icon: "▦" },
    { name: "Patients", icon: "♙" },
    { name: "Doctors", icon: "⚕" },
    { name: "Appointments", icon: "▣" },
    { name: "Departments", icon: "▤" },
    { name: "Pharmacy", icon: "✚" },
    { name: "Billing", icon: "▤" },
    { name: "Reports", icon: "▥" },
    { name: "Settings", icon: "⚙" },
  ];

  // =========================
  // LOGIN
  // =========================
  const handleLogin = (e) => {
    e.preventDefault();
    setPage("dashboard");
    setActiveMenu("Dashboard");
  };

  // =========================
  // MENU CLICK
  // =========================
  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setPage("dashboard");
  };

  // =========================
  // ADD PATIENT
  // =========================
  const handleAddPatient = (e) => {
    e.preventDefault();

    const newId = `PT-${10251 + patients.length}`;

    const patient = {
      id: newId,
      name: newPatient.name,
      age: Number(newPatient.age),
      gender: newPatient.gender,
      phone: newPatient.phone,
      department: newPatient.department,
      doctor: newPatient.doctor || "Not Assigned",
      status: "Active",
    };

    setPatients([...patients, patient]);

    setNewPatient({
      name: "",
      age: "",
      gender: "Male",
      phone: "",
      department: "General Medicine",
      doctor: "",
    });

    setShowPatientForm(false);
  };

  // =========================
  // ADD APPOINTMENT
  // =========================
  const handleAddAppointment = (e) => {
    e.preventDefault();

    const newId = `APT-${1001 + appointments.length}`;

    const appointment = {
      ...newAppointment,
      id: newId,
    };

    setAppointments([...appointments, appointment]);

    setNewAppointment({
      patient: "",
      patientId: "",
      doctor: "",
      doctorId: "",
      department: "General Medicine",
      date: "",
      time: "",
      type: "Consultation",
      status: "Scheduled",
      phone: "",
      reason: "",
    });

    setShowAppointmentForm(false);
  };

  // =========================
  // HOME PAGE
  // =========================
  const renderHomePage = () => {
    return (
      <div className="home-page">

        {/* NAVBAR */}
        <nav className="home-navbar">
          <div className="home-logo">
            <div className="home-logo-icon">✚</div>

            <div>
              <h2>TU Teaching Hospital</h2>
              <span>Trusted Healthcare</span>
            </div>
          </div>

          <div className="home-nav-links">
            <button
              onClick={() =>
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Home
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About Us
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Services
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("departments")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Departments
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact
            </button>

            <button
              className="home-login-btn"
              onClick={() => setPage("login")}
            >
              Staff Login
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero-section" id="home">
          <div className="hero-content">

            <span className="hero-small-title">
              WELCOME TO TU TEACHING HOSPITAL
            </span>

            <h1>
              Quality Healthcare,
              <br />
              <span>Trusted Care.</span>
            </h1>

            <p>
              Providing compassionate, accessible and reliable healthcare
              services with modern facilities and experienced medical
              professionals.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-home-btn"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Our Services
              </button>

              <button
                className="secondary-home-btn"
                onClick={() => setPage("login")}
              >
                Staff Login
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <strong>24/7</strong>
                <span>Emergency Care</span>
              </div>

              <div>
                <strong>50+</strong>
                <span>Medical Experts</span>
              </div>

              <div>
                <strong>20+</strong>
                <span>Departments</span>
              </div>
            </div>
          </div>

          <div className="hero-image-area">
            <div className="hospital-circle">
              <div className="hospital-icon">🏥</div>
            </div>

            <div className="floating-card floating-card-one">
              <span className="floating-icon">✓</span>
              <div>
                <strong>Trusted Care</strong>
                <small>Professional service</small>
              </div>
            </div>

            <div className="floating-card floating-card-two">
              <span className="floating-icon">❤</span>
              <div>
                <strong>Patient First</strong>
                <small>Compassionate healthcare</small>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="home-section services-section" id="services">
          <div className="section-heading">
            <span>OUR SERVICES</span>
            <h2>Healthcare Services</h2>
            <p>
              Comprehensive healthcare services designed around the needs of
              every patient.
            </p>
          </div>

          <div className="service-grid">

            <div className="service-card">
              <div className="service-icon">🚑</div>
              <h3>Emergency Care</h3>
              <p>
                24/7 emergency medical services for urgent healthcare needs.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🩺</div>
              <h3>Specialist Consultation</h3>
              <p>
                Consult experienced doctors across multiple medical
                specialties.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🔬</div>
              <h3>Laboratory Services</h3>
              <p>
                Modern diagnostic and laboratory services for accurate
                testing.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">💊</div>
              <h3>Pharmacy</h3>
              <p>
                Convenient access to prescribed medicines and pharmaceutical
                services.
              </p>
            </div>

          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
          <div className="about-image">
            <div className="about-image-box">
              🏥
            </div>
          </div>

          <div className="about-content">
            <span>ABOUT US</span>

            <h2>
              Caring for Your Health,
              <br />
              Every Step of the Way
            </h2>

            <p>
              TU Teaching Hospital is dedicated to providing quality
              healthcare services while supporting medical education,
              training and research.
            </p>

            <p>
              Our healthcare team works together to provide patient-centered
              care in a safe and professional environment.
            </p>

            <div className="about-points">
              <div>
                <span>✓</span>
                Experienced healthcare professionals
              </div>

              <div>
                <span>✓</span>
                Modern healthcare facilities
              </div>

              <div>
                <span>✓</span>
                Patient-centered services
              </div>
            </div>
          </div>
        </section>

        {/* DEPARTMENTS */}
        <section
          className="home-section departments-section"
          id="departments"
        >
          <div className="section-heading">
            <span>MEDICAL DEPARTMENTS</span>
            <h2>Our Departments</h2>
            <p>
              Specialized medical services for different healthcare needs.
            </p>
          </div>

          <div className="department-grid">

            <div className="department-card">
              <span>❤</span>
              <h3>Cardiology</h3>
              <p>Heart and cardiovascular care.</p>
            </div>

            <div className="department-card">
              <span>⚕</span>
              <h3>General Medicine</h3>
              <p>General medical consultation and treatment.</p>
            </div>

            <div className="department-card">
              <span>👶</span>
              <h3>Pediatrics</h3>
              <p>Healthcare services for children.</p>
            </div>

            <div className="department-card">
              <span>🦴</span>
              <h3>Orthopedics</h3>
              <p>Bone, joint and muscle care.</p>
            </div>

            <div className="department-card">
              <span>🧠</span>
              <h3>Neurology</h3>
              <p>Diagnosis and treatment of neurological conditions.</p>
            </div>

            <div className="department-card">
              <span>✨</span>
              <h3>Dermatology</h3>
              <p>Skin and dermatological care.</p>
            </div>

          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="why-section">
          <div className="section-heading">
            <span>WHY CHOOSE US</span>
            <h2>Healthcare You Can Trust</h2>
            <p>
              We focus on quality, safety and compassionate patient care.
            </p>
          </div>

          <div className="why-grid">

            <div className="why-card">
              <div>01</div>
              <h3>Experienced Team</h3>
              <p>
                Healthcare professionals working together to provide quality
                patient care.
              </p>
            </div>

            <div className="why-card">
              <div>02</div>
              <h3>Modern Facilities</h3>
              <p>
                Healthcare facilities designed to support efficient diagnosis
                and treatment.
              </p>
            </div>

            <div className="why-card">
              <div>03</div>
              <h3>Patient Focused</h3>
              <p>
                Services designed to make healthcare more accessible and
                comfortable.
              </p>
            </div>

            <div className="why-card">
              <div>04</div>
              <h3>Available 24/7</h3>
              <p>
                Emergency services are available around the clock for urgent
                medical needs.
              </p>
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="contact-content">

            <div>
              <span>CONTACT US</span>
              <h2>We're Here to Help</h2>

              <p>
                Have questions about our healthcare services? Contact our
                hospital team for assistance.
              </p>
            </div>

            <div className="contact-details">

              <div>
                <span>📍</span>
                <div>
                  <strong>Location</strong>
                  <p>Kathmandu, Nepal</p>
                </div>
              </div>

              <div>
                <span>☎</span>
                <div>
                  <strong>Phone</strong>
                  <p>+977-01-0000000</p>
                </div>
              </div>

              <div>
                <span>✉</span>
                <div>
                  <strong>Email</strong>
                  <p>info@tuteachinghospital.com</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="home-footer">
          <div>
            <h3>TU Teaching Hospital</h3>
            <p>Quality Healthcare. Trusted Care.</p>
          </div>

          <div>
            <p>© 2026 TU Teaching Hospital. All rights reserved.</p>
          </div>
        </footer>

      </div>
    );
  };

  // =========================
  // HOME PAGE ROUTING
  // =========================
  if (page === "home") {
    return renderHomePage();
  }

  // =========================
  // LOGIN PAGE
  // =========================
  if (page === "login") {
    return (
      <div className="login-page">

        <div className="login-left">

          <div className="login-left-content">

            <div className="login-brand">
              <div className="login-brand-icon">✚</div>

              <div>
                <h2>TU Teaching Hospital</h2>
                <span>Hospital Management System</span>
              </div>
            </div>

            <div className="login-message">
              <span>HOSPITAL MANAGEMENT</span>

              <h1>
                Better Healthcare,
                <br />
                <span>Better Management.</span>
              </h1>

              <p>
                Manage patients, doctors, appointments and hospital
                operations from one secure platform.
              </p>
            </div>

            <div className="login-features">

              <div>
                <span>✓</span>
                <p>Patient Management</p>
              </div>

              <div>
                <span>✓</span>
                <p>Doctor Management</p>
              </div>

              <div>
                <span>✓</span>
                <p>Appointment Scheduling</p>
              </div>

            </div>

          </div>

        </div>

        <div className="login-right">

          <div className="login-card">

            <button
              className="back-home-btn"
              type="button"
              onClick={() => setPage("home")}
            >
              ← Back to Home
            </button>

            <div className="login-card-heading">
              <div className="login-icon">✚</div>

              <h1>Staff Login</h1>

              <p>
                Sign in to access the hospital management system.
              </p>
            </div>

            <form onSubmit={handleLogin}>

              <div className="form-group">
                <label>Email or Username</label>

                <input
                  type="text"
                  placeholder="Enter your email or username"
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>

                <div className="password-wrapper">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                  />

                  <button
                    type="button"
                    className="show-password-btn"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>
              </div>

              <div className="login-options">

                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>

                <button type="button" className="forgot-btn">
                  Forgot Password?
                </button>

              </div>

              <button type="submit" className="sign-in-btn">
                Sign In
              </button>

            </form>

            <div className="login-footer">
              <p>
                Authorized hospital staff only.
              </p>
            </div>

          </div>

        </div>

      </div>
    );
  }

  // =========================
  // DASHBOARD
  // =========================
  const renderDashboard = () => {
    return (
      <div className="dashboard-content">

        <div className="page-header">
          <div>
            <span className="page-label">OVERVIEW</span>
            <h1>Dashboard</h1>
            <p>
              Welcome back. Here's what's happening today.
            </p>
          </div>

          <button
            className="header-action-btn"
            onClick={() => setActiveMenu("Appointments")}
          >
            + New Appointment
          </button>
        </div>

        {/* STAT CARDS */}
        <div className="stat-grid">

          <div className="stat-card">
            <div className="stat-icon blue">♙</div>

            <div>
              <span>Total Patients</span>
              <strong>{patients.length}</strong>
              <small>Registered patients</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">⚕</div>

            <div>
              <span>Total Doctors</span>
              <strong>{doctors.length}</strong>
              <small>Medical professionals</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">▣</div>

            <div>
              <span>Appointments</span>
              <strong>{appointments.length}</strong>
              <small>Scheduled appointments</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">✚</div>

            <div>
              <span>Departments</span>
              <strong>20+</strong>
              <small>Medical departments</small>
            </div>
          </div>

        </div>

        {/* LOWER DASHBOARD */}
        <div className="dashboard-grid">

          <div className="dashboard-panel">

            <div className="panel-header">
              <div>
                <h2>Recent Appointments</h2>
                <p>Latest scheduled appointments</p>
              </div>

              <button
                onClick={() => setActiveMenu("Appointments")}
              >
                View All
              </button>
            </div>

            <div className="appointment-list">

              {appointments.slice(0, 5).map((appointment) => (
                <div
                  className="appointment-item"
                  key={appointment.id}
                >
                  <div className="appointment-date">
                    <strong>
                      {appointment.date.split("-")[2]}
                    </strong>

                    <span>
                      {appointment.date.split("-")[1]}
                    </span>
                  </div>

                  <div className="appointment-info">
                    <strong>{appointment.patient}</strong>
                    <span>{appointment.doctor}</span>
                    <small>
                      {appointment.time} • {appointment.department}
                    </small>
                  </div>

                  <span
                    className={`status-badge ${appointment.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {appointment.status}
                  </span>
                </div>
              ))}

            </div>

          </div>

          <div className="dashboard-panel">

            <div className="panel-header">
              <div>
                <h2>Hospital Overview</h2>
                <p>Today's information</p>
              </div>
            </div>

            <div className="overview-list">

              <div>
                <span>Active Patients</span>
                <strong>
                  {patients.filter(
                    (patient) => patient.status === "Active"
                  ).length}
                </strong>
              </div>

              <div>
                <span>Available Doctors</span>
                <strong>
                  {doctors.filter(
                    (doctor) => doctor.status === "Available"
                  ).length}
                </strong>
              </div>

              <div>
                <span>Scheduled</span>
                <strong>
                  {
                    appointments.filter(
                      (appointment) =>
                        appointment.status === "Scheduled"
                    ).length
                  }
                </strong>
              </div>

              <div>
                <span>Pending</span>
                <strong>
                  {
                    appointments.filter(
                      (appointment) =>
                        appointment.status === "Pending"
                    ).length
                  }
                </strong>
              </div>

            </div>

          </div>

        </div>

      </div>
    );
  };

  // =========================
  // PATIENT MANAGEMENT
  // =========================
  const renderPatientManagement = () => {

    const filteredPatients = patients.filter((patient) =>
      `${patient.name} ${patient.id} ${patient.phone} ${patient.department}`
        .toLowerCase()
        .includes(patientSearch.toLowerCase())
    );

    return (
      <div className="management-page">

        <div className="page-header">

          <div>
            <span className="page-label">MANAGEMENT</span>
            <h1>Patient Management</h1>
            <p>Manage hospital patient records.</p>
          </div>

          <button
            className="header-action-btn"
            onClick={() => setShowPatientForm(true)}
          >
            + Add Patient
          </button>

        </div>

        {showPatientForm && (
          <div className="form-panel">

            <div className="panel-header">
              <div>
                <h2>Add New Patient</h2>
                <p>Enter patient information.</p>
              </div>

              <button
                className="close-btn"
                onClick={() => setShowPatientForm(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleAddPatient}>

              <div className="form-grid">

                <div className="form-group">
                  <label>Patient Name</label>
                  <input
                    type="text"
                    value={newPatient.name}
                    onChange={(e) =>
                      setNewPatient({
                        ...newPatient,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Age</label>
                  <input
                    type="number"
                    value={newPatient.age}
                    onChange={(e) =>
                      setNewPatient({
                        ...newPatient,
                        age: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Gender</label>

                  <select
                    value={newPatient.gender}
                    onChange={(e) =>
                      setNewPatient({
                        ...newPatient,
                        gender: e.target.value,
                      })
                    }
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>

                </div>

                <div className="form-group">
                  <label>Phone</label>

                  <input
                    type="text"
                    value={newPatient.phone}
                    onChange={(e) =>
                      setNewPatient({
                        ...newPatient,
                        phone: e.target.value,
                      })
                    }
                    required
                  />

                </div>

                <div className="form-group">
                  <label>Department</label>

                  <select
                    value={newPatient.department}
                    onChange={(e) =>
                      setNewPatient({
                        ...newPatient,
                        department: e.target.value,
                      })
                    }
                  >
                    <option>General Medicine</option>
                    <option>Cardiology</option>
                    <option>Pediatrics</option>
                    <option>Orthopedics</option>
                    <option>Neurology</option>
                    <option>Dermatology</option>
                  </select>

                </div>

                <div className="form-group">
                  <label>Doctor</label>

                  <select
                    value={newPatient.doctor}
                    onChange={(e) =>
                      setNewPatient({
                        ...newPatient,
                        doctor: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Doctor</option>

                    {doctors.map((doctor) => (
                      <option
                        value={doctor.name}
                        key={doctor.id}
                      >
                        {doctor.name}
                      </option>
                    ))}

                  </select>

                </div>

              </div>

              <div className="form-actions">

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowPatientForm(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="save-btn"
                >
                  Save Patient
                </button>

              </div>

            </form>

          </div>
        )}

        <div className="table-panel">

          <div className="table-toolbar">

            <div>
              <h2>Patient Records</h2>
              <p>{patients.length} registered patients</p>
            </div>

            <input
              className="search-input"
              type="text"
              placeholder="Search patients..."
              value={patientSearch}
              onChange={(e) =>
                setPatientSearch(e.target.value)
              }
            />

          </div>

          <div className="table-container">

            <table>

              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>Patient</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>Department</th>
                  <th>Doctor</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {filteredPatients.map((patient) => (
                  <tr key={patient.id}>

                    <td>
                      <strong>{patient.id}</strong>
                    </td>

                    <td>
                      <div className="person-cell">
                        <div className="person-avatar">
                          {patient.name.charAt(0)}
                        </div>

                        <span>{patient.name}</span>
                      </div>
                    </td>

                    <td>{patient.age}</td>
                    <td>{patient.gender}</td>
                    <td>{patient.phone}</td>
                    <td>{patient.department}</td>
                    <td>{patient.doctor}</td>

                    <td>
                      <span
                        className={`status-badge ${patient.status.toLowerCase()}`}
                      >
                        {patient.status}
                      </span>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    );
  };

  // =========================
  // DOCTOR MANAGEMENT
  // =========================
  const renderDoctorManagement = () => {

    const filteredDoctors = doctors.filter((doctor) =>
      `${doctor.name} ${doctor.id} ${doctor.specialization} ${doctor.department}`
        .toLowerCase()
        .includes(doctorSearch.toLowerCase())
    );

    return (
      <div className="management-page">

        <div className="page-header">

          <div>
            <span className="page-label">MANAGEMENT</span>
            <h1>Doctor Management</h1>
            <p>Manage hospital doctors and specialists.</p>
          </div>

        </div>

        <div className="table-panel">

          <div className="table-toolbar">

            <div>
              <h2>Medical Professionals</h2>
              <p>{doctors.length} doctors registered</p>
            </div>

            <input
              className="search-input"
              type="text"
              placeholder="Search doctors..."
              value={doctorSearch}
              onChange={(e) =>
                setDoctorSearch(e.target.value)
              }
            />

          </div>

          <div className="table-container">

            <table>

              <thead>
                <tr>
                  <th>Doctor ID</th>
                  <th>Doctor</th>
                  <th>Specialization</th>
                  <th>Department</th>
                  <th>Qualification</th>
                  <th>Experience</th>
                  <th>Fee</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {filteredDoctors.map((doctor) => (
                  <tr key={doctor.id}>

                    <td>
                      <strong>{doctor.id}</strong>
                    </td>

                    <td>
                      <div className="person-cell">
                        <div className="doctor-avatar">
                          ⚕
                        </div>

                        <span>{doctor.name}</span>
                      </div>
                    </td>

                    <td>{doctor.specialization}</td>
                    <td>{doctor.department}</td>
                    <td>{doctor.qualification}</td>
                    <td>{doctor.experience}</td>
                    <td>{doctor.fee}</td>

                    <td>
                      <span
                        className={`status-badge ${doctor.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {doctor.status}
                      </span>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    );
  };

  // =========================
  // APPOINTMENT MANAGEMENT
  // =========================
  const renderAppointmentManagement = () => {

    const filteredAppointments = appointments.filter((appointment) =>
      `${appointment.id} ${appointment.patient} ${appointment.doctor} ${appointment.department} ${appointment.status}`
        .toLowerCase()
        .includes(appointmentSearch.toLowerCase())
    );

    return (
      <div className="management-page">

        <div className="page-header">

          <div>
            <span className="page-label">MANAGEMENT</span>
            <h1>Appointment Management</h1>
            <p>Schedule and manage patient appointments.</p>
          </div>

          <button
            className="header-action-btn"
            onClick={() => setShowAppointmentForm(true)}
          >
            + New Appointment
          </button>

        </div>

        {showAppointmentForm && (
          <div className="form-panel">

            <div className="panel-header">

              <div>
                <h2>New Appointment</h2>
                <p>Enter appointment details.</p>
              </div>

              <button
                className="close-btn"
                onClick={() =>
                  setShowAppointmentForm(false)
                }
              >
                ×
              </button>

            </div>

            <form onSubmit={handleAddAppointment}>

              <div className="form-grid">

                <div className="form-group">
                  <label>Patient Name</label>

                  <input
                    type="text"
                    value={newAppointment.patient}
                    onChange={(e) =>
                      setNewAppointment({
                        ...newAppointment,
                        patient: e.target.value,
                      })
                    }
                    required
                  />

                </div>

                <div className="form-group">
                  <label>Patient ID</label>

                  <input
                    type="text"
                    value={newAppointment.patientId}
                    onChange={(e) =>
                      setNewAppointment({
                        ...newAppointment,
                        patientId: e.target.value,
                      })
                    }
                    required
                  />

                </div>

                <div className="form-group">
                  <label>Doctor</label>

                  <select
                    value={newAppointment.doctor}
                    onChange={(e) => {
                      const selectedDoctor = doctors.find(
                        (doctor) =>
                          doctor.name === e.target.value
                      );

                      setNewAppointment({
                        ...newAppointment,
                        doctor: e.target.value,
                        doctorId:
                          selectedDoctor?.id || "",
                        department:
                          selectedDoctor?.department ||
                          "General Medicine",
                      });
                    }}
                    required
                  >
                    <option value="">Select Doctor</option>

                    {doctors.map((doctor) => (
                      <option
                        key={doctor.id}
                        value={doctor.name}
                      >
                        {doctor.name}
                      </option>
                    ))}

                  </select>

                </div>

                <div className="form-group">
                  <label>Department</label>

                  <select
                    value={newAppointment.department}
                    onChange={(e) =>
                      setNewAppointment({
                        ...newAppointment,
                        department: e.target.value,
                      })
                    }
                  >
                    <option>General Medicine</option>
                    <option>Cardiology</option>
                    <option>Pediatrics</option>
                    <option>Orthopedics</option>
                    <option>Neurology</option>
                    <option>Dermatology</option>
                  </select>

                </div>

                <div className="form-group">
                  <label>Date</label>

                  <input
                    type="date"
                    value={newAppointment.date}
                    onChange={(e) =>
                      setNewAppointment({
                        ...newAppointment,
                        date: e.target.value,
                      })
                    }
                    required
                  />

                </div>

                <div className="form-group">
                  <label>Time</label>

                  <input
                    type="time"
                    value={newAppointment.time}
                    onChange={(e) =>
                      setNewAppointment({
                        ...newAppointment,
                        time: e.target.value,
                      })
                    }
                    required
                  />

                </div>

                <div className="form-group">
                  <label>Appointment Type</label>

                  <select
                    value={newAppointment.type}
                    onChange={(e) =>
                      setNewAppointment({
                        ...newAppointment,
                        type: e.target.value,
                      })
                    }
                  >
                    <option>Consultation</option>
                    <option>Follow-up</option>
                    <option>Emergency</option>
                    <option>Checkup</option>
                  </select>

                </div>

                <div className="form-group">
                  <label>Phone</label>

                  <input
                    type="text"
                    value={newAppointment.phone}
                    onChange={(e) =>
                      setNewAppointment({
                        ...newAppointment,
                        phone: e.target.value,
                      })
                    }
                  />

                </div>

                <div className="form-group form-full">
                  <label>Reason</label>

                  <textarea
                    value={newAppointment.reason}
                    onChange={(e) =>
                      setNewAppointment({
                        ...newAppointment,
                        reason: e.target.value,
                      })
                    }
                    placeholder="Reason for appointment"
                    rows="3"
                  />

                </div>

              </div>

              <div className="form-actions">

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() =>
                    setShowAppointmentForm(false)
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="save-btn"
                >
                  Save Appointment
                </button>

              </div>

            </form>

          </div>
        )}

        <div className="table-panel">

          <div className="table-toolbar">

            <div>
              <h2>Appointments</h2>
              <p>
                {appointments.length} appointments recorded
              </p>
            </div>

            <input
              className="search-input"
              type="text"
              placeholder="Search appointments..."
              value={appointmentSearch}
              onChange={(e) =>
                setAppointmentSearch(e.target.value)
              }
            />

          </div>

          <div className="table-container">

            <table>

              <thead>
                <tr>
                  <th>Appointment ID</th>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Department</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {filteredAppointments.map(
                  (appointment) => (
                    <tr key={appointment.id}>

                      <td>
                        <strong>{appointment.id}</strong>
                      </td>

                      <td>
                        <div className="person-cell">

                          <div className="person-avatar">
                            {appointment.patient.charAt(0)}
                          </div>

                          <div>
                            <strong>
                              {appointment.patient}
                            </strong>

                            <small>
                              {appointment.patientId}
                            </small>
                          </div>

                        </div>
                      </td>

                      <td>{appointment.doctor}</td>
                      <td>{appointment.department}</td>
                      <td>{appointment.date}</td>
                      <td>{appointment.time}</td>
                      <td>{appointment.type}</td>

                      <td>
                        <span
                          className={`status-badge ${appointment.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {appointment.status}
                        </span>
                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    );
  };

  // =========================
  // MAIN DASHBOARD LAYOUT
  // =========================
  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="sidebar-brand">

          <div className="sidebar-logo">✚</div>

          <div>
            <h2>TU Teaching</h2>
            <span>Hospital</span>
          </div>

        </div>

        <div className="sidebar-menu">

          <span className="menu-title">
            MAIN MENU
          </span>

          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`sidebar-item ${
                activeMenu === item.name ? "active" : ""
              }`}
              onClick={() =>
                handleMenuClick(item.name)
              }
            >
              <span className="sidebar-icon">
                {item.icon}
              </span>

              <span>{item.name}</span>
            </button>
          ))}

        </div>

        <div className="sidebar-bottom">

          <button
            className="sidebar-home-btn"
            onClick={() => setPage("home")}
          >
            <span>⌂</span>
            Hospital Home
          </button>

          <button
            className="logout-btn"
            onClick={() => {
              setPage("home");
              setActiveMenu("Dashboard");
            }}
          >
            <span>↪</span>
            Logout
          </button>

        </div>

      </aside>

      {/* MAIN AREA */}
      <main className="main-area">

        {/* TOPBAR */}
        <header className="topbar">

          <div className="topbar-left">

            <div>
              <span className="topbar-label">
                TU TEACHING HOSPITAL
              </span>

              <h3>
                Hospital Management System
              </h3>
            </div>

          </div>

          <div className="topbar-right">

            <button className="notification-btn">
              🔔
              <span></span>
            </button>

            <div className="user-profile">

              <div className="user-avatar">
                A
              </div>

              <div>
                <strong>Admin User</strong>
                <span>Administrator</span>
              </div>

            </div>

          </div>

        </header>

        {/* CONTENT */}
        <div className="content-area">

          {activeMenu === "Patients"
            ? renderPatientManagement()
            : activeMenu === "Doctors"
            ? renderDoctorManagement()
            : activeMenu === "Appointments"
            ? renderAppointmentManagement()
            : renderDashboard()}

        </div>

      </main>

    </div>
  );
}

export default App;