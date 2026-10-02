import React from "react";
import "./Dashboard.css";

function Dashboard() {
  const appointments = [
    {
      initial: "R",
      name: "Ram Bahadur Thapa",
      doctor: "Dr. Anil Sharma",
      date: "2026-10-02",
      time: "10:00 AM",
      status: "Completed",
    },
    {
      initial: "S",
      name: "Sita Sharma",
      doctor: "Dr. Sushma Adhikari",
      date: "2026-10-02",
      time: "11:30 AM",
      status: "Scheduled",
    },
    {
      initial: "H",
      name: "Hari Prasad Karki",
      doctor: "Dr. Rajesh Shrestha",
      date: "2026-10-03",
      time: "09:30 AM",
      status: "Scheduled",
    },
    {
      initial: "M",
      name: "Mina Gurung",
      doctor: "Dr. Nisha Karki",
      date: "2026-10-03",
      time: "01:00 PM",
      status: "Cancelled",
    },
  ];

  return (
    <div className="dashboard-page">

      {/* TOP HEADER */}
      <header className="dashboard-header">
        <div className="header-left">
          <button className="menu-button">☰</button>

          <div className="hospital-brand">
            <div className="brand-logo">✚</div>
            <div>
              <h2>TU Teaching Hospital</h2>
              <span>Hospital Management System</span>
            </div>
          </div>
        </div>

        <div className="header-right">
          <button className="notification-button">
            🔔
            <span className="notification-dot"></span>
          </button>

          <div className="admin-profile">
            <div className="admin-avatar">A</div>

            <div className="admin-info">
              <strong>Admin</strong>
              <span>Administrator</span>
            </div>

            <span className="profile-arrow">⌄</span>
          </div>
        </div>
      </header>

      {/* MAIN AREA */}
      <div className="dashboard-body">

        {/* SIDEBAR */}
        <aside className="dashboard-sidebar">

          <div className="sidebar-title">
            <span className="sidebar-title-icon">✚</span>
            <span>Main Menu</span>
          </div>

          <nav className="sidebar-menu">

            <button className="sidebar-item active">
              <span className="sidebar-icon">▦</span>
              <span>Dashboard</span>
            </button>

            <button className="sidebar-item">
              <span className="sidebar-icon">👥</span>
              <span>Patients</span>
            </button>

            <button className="sidebar-item">
              <span className="sidebar-icon">🩺</span>
              <span>Doctors</span>
            </button>

            <button className="sidebar-item">
              <span className="sidebar-icon">📅</span>
              <span>Appointments</span>
            </button>

            <button className="sidebar-item">
              <span className="sidebar-icon">🏥</span>
              <span>Departments</span>
            </button>

            <button className="sidebar-item">
              <span className="sidebar-icon">💊</span>
              <span>Pharmacy</span>
            </button>

            <button className="sidebar-item">
              <span className="sidebar-icon">🧾</span>
              <span>Billing</span>
            </button>

            <button className="sidebar-item">
              <span className="sidebar-icon">📊</span>
              <span>Reports</span>
            </button>

            <button className="sidebar-item">
              <span className="sidebar-icon">⚙</span>
              <span>Settings</span>
            </button>

          </nav>

          <div className="sidebar-bottom">
            <button className="logout-button">
              <span>↪</span>
              <span>Logout</span>
            </button>
          </div>

        </aside>

        {/* CONTENT */}
        <main className="dashboard-content">

          {/* PAGE TITLE */}
          <div className="page-heading">
            <div>
              <h1>Dashboard</h1>
              <p>
                Welcome to TU Teaching Hospital Management System
              </p>
            </div>

            <button className="date-button">
              📅 &nbsp; October 02, 2026
            </button>
          </div>

          {/* STAT CARDS */}
          <section className="stats-grid">

            <div className="stat-card">
              <div className="stat-top">
                <div className="stat-icon patients-icon">
                  👥
                </div>

                <span className="stat-change positive">
                  +12%
                </span>
              </div>

              <div className="stat-label">Total Patients</div>
              <div className="stat-value">6</div>
              <div className="stat-description">
                Registered patients
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <div className="stat-icon doctors-icon">
                  🩺
                </div>

                <span className="stat-change positive">
                  +8%
                </span>
              </div>

              <div className="stat-label">Total Doctors</div>
              <div className="stat-value">6</div>
              <div className="stat-description">
                Active medical staff
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <div className="stat-icon appointment-icon">
                  📅
                </div>

                <span className="stat-change positive">
                  +5%
                </span>
              </div>

              <div className="stat-label">Appointments</div>
              <div className="stat-value">5</div>
              <div className="stat-description">
                Upcoming appointments
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <div className="stat-icon revenue-icon">
                  💰
                </div>

                <span className="stat-change positive">
                  +15%
                </span>
              </div>

              <div className="stat-label">Total Revenue</div>
              <div className="stat-value revenue-value">
                Rs. 5,730
              </div>
              <div className="stat-description">
                Total collected revenue
              </div>
            </div>

          </section>

          {/* LOWER CONTENT */}
          <section className="dashboard-grid">

            {/* APPOINTMENTS */}
            <div className="dashboard-card appointments-card">

              <div className="card-header">
                <div>
                  <h2>Recent Appointments</h2>
                  <p>Latest patient appointments</p>
                </div>

                <button className="view-all-button">
                  View All →
                </button>
              </div>

              <div className="appointments-list">

                {appointments.map((appointment, index) => (
                  <div className="appointment-row" key={index}>

                    <div className="patient-avatar">
                      {appointment.initial}
                    </div>

                    <div className="appointment-patient">
                      <strong>{appointment.name}</strong>
                      <span>{appointment.doctor}</span>
                    </div>

                    <div className="appointment-date">
                      <strong>{appointment.date}</strong>
                      <span>{appointment.time}</span>
                    </div>

                    <div>
                      <span
                        className={`status-badge ${appointment.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {appointment.status}
                      </span>
                    </div>

                  </div>
                ))}

              </div>

            </div>

            {/* BILLING */}
            <div className="dashboard-card billing-card">

              <div className="card-header">
                <div>
                  <h2>Billing Summary</h2>
                  <p>Overview of hospital billing</p>
                </div>

                <button className="manage-button">
                  Manage
                </button>
              </div>

              <div className="billing-main">
                <div className="billing-circle">
                  <span>Revenue</span>
                  <strong>Rs. 5,730</strong>
                </div>
              </div>

              <div className="billing-stats">

                <div className="billing-stat">
                  <div className="billing-number">5</div>
                  <span>Total Bills</span>
                </div>

                <div className="billing-stat">
                  <div className="billing-number paid">3</div>
                  <span>Paid Bills</span>
                </div>

                <div className="billing-stat">
                  <div className="billing-number pending">1</div>
                  <span>Pending Bills</span>
                </div>

              </div>

              <div className="billing-progress">
                <div className="progress-header">
                  <span>Payment Collection</span>
                  <strong>75%</strong>
                </div>

                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>

            </div>

          </section>

          {/* QUICK ACCESS */}
          <section className="quick-section">

            <div className="section-heading">
              <div>
                <h2>Quick Access</h2>
                <p>Frequently used hospital modules</p>
              </div>
            </div>

            <div className="quick-grid">

              <button className="quick-card">
                <div className="quick-icon">👥</div>
                <div>
                  <strong>Patients</strong>
                  <span>Manage patient records</span>
                </div>
                <span className="quick-arrow">→</span>
              </button>

              <button className="quick-card">
                <div className="quick-icon">📅</div>
                <div>
                  <strong>Appointments</strong>
                  <span>Manage appointments</span>
                </div>
                <span className="quick-arrow">→</span>
              </button>

              <button className="quick-card">
                <div className="quick-icon">🩺</div>
                <div>
                  <strong>Doctors</strong>
                  <span>View medical staff</span>
                </div>
                <span className="quick-arrow">→</span>
              </button>

              <button className="quick-card">
                <div className="quick-icon">🧾</div>
                <div>
                  <strong>Billing</strong>
                  <span>Manage hospital bills</span>
                </div>
                <span className="quick-arrow">→</span>
              </button>

            </div>

          </section>

        </main>
      </div>
    </div>
  );
}

export default Dashboard;