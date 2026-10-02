import { useState } from "react";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedBill, setSelectedBill] = useState(null);
  const [showAddPatient, setShowAddPatient] = useState(false);
  const [showAddAppointment, setShowAddAppointment] = useState(false);
  const [search, setSearch] = useState("");

  const menuItems = [
    { id: "dashboard", icon: "▦", label: "Dashboard" },
    { id: "patients", icon: "👥", label: "Patients" },
    { id: "doctors", icon: "🩺", label: "Doctors" },
    { id: "appointments", icon: "📅", label: "Appointments" },
    { id: "departments", icon: "🏥", label: "Departments" },
    { id: "pharmacy", icon: "💊", label: "Pharmacy" },
    { id: "billing", icon: "🧾", label: "Billing" },
    { id: "reports", icon: "📊", label: "Reports" },
    { id: "settings", icon: "⚙️", label: "Settings" },
  ];

  const patients = [
    {
      id: "P-1001",
      name: "Ram Bahadur Thapa",
      age: 45,
      gender: "Male",
      blood: "O+",
      phone: "9841234567",
      email: "ram@gmail.com",
      address: "Kathmandu",
      department: "Cardiology",
      doctor: "Dr. Anil Sharma",
      status: "Active",
      admission: "2026-09-28",
      history: [
        {
          date: "2026-09-28",
          doctor: "Dr. Anil Sharma",
          diagnosis: "Hypertension",
          prescription: "Amlodipine 5mg",
          notes: "Regular BP monitoring advised",
        },
        {
          date: "2026-08-15",
          doctor: "Dr. Anil Sharma",
          diagnosis: "High Blood Pressure",
          prescription: "Amlodipine 5mg",
          notes: "Follow-up after one month",
        },
      ],
    },
    {
      id: "P-1002",
      name: "Sita Sharma",
      age: 32,
      gender: "Female",
      blood: "A+",
      phone: "9812345678",
      email: "sita@gmail.com",
      address: "Lalitpur",
      department: "Neurology",
      doctor: "Dr. Sushma Adhikari",
      status: "Active",
      admission: "2026-09-30",
      history: [
        {
          date: "2026-09-30",
          doctor: "Dr. Sushma Adhikari",
          diagnosis: "Migraine",
          prescription: "Sumatriptan 50mg",
          notes: "Avoid stress and maintain sleep schedule",
        },
      ],
    },
    {
      id: "P-1003",
      name: "Hari Prasad Karki",
      age: 56,
      gender: "Male",
      blood: "B+",
      phone: "9801234567",
      email: "hari@gmail.com",
      address: "Bhaktapur",
      department: "Orthopedics",
      doctor: "Dr. Rajesh Shrestha",
      status: "Active",
      admission: "2026-09-25",
      history: [
        {
          date: "2026-09-25",
          doctor: "Dr. Rajesh Shrestha",
          diagnosis: "Knee Pain",
          prescription: "Pain relief medication",
          notes: "Physiotherapy recommended",
        },
      ],
    },
    {
      id: "P-1004",
      name: "Mina Gurung",
      age: 28,
      gender: "Female",
      blood: "AB+",
      phone: "9867890123",
      email: "mina@gmail.com",
      address: "Kirtipur",
      department: "Pediatrics",
      doctor: "Dr. Nisha Karki",
      status: "Discharged",
      admission: "2026-09-20",
      history: [
        {
          date: "2026-09-20",
          doctor: "Dr. Nisha Karki",
          diagnosis: "Viral Fever",
          prescription: "Paracetamol 500mg",
          notes: "Recovered successfully",
        },
      ],
    },
    {
      id: "P-1005",
      name: "Aarav Sharma",
      age: 41,
      gender: "Male",
      blood: "O-",
      phone: "9855555555",
      email: "aarav@gmail.com",
      address: "Baneshwor",
      department: "Cardiology",
      doctor: "Dr. Anil Sharma",
      status: "Active",
      admission: "2026-10-01",
      history: [],
    },
    {
      id: "P-1006",
      name: "Priya Adhikari",
      age: 25,
      gender: "Female",
      blood: "B-",
      phone: "9822222222",
      email: "priya@gmail.com",
      address: "Koteshwor",
      department: "Neurology",
      doctor: "Dr. Sushma Adhikari",
      status: "Active",
      admission: "2026-10-01",
      history: [],
    },
  ];

  const doctors = [
    {
      id: "D-001",
      name: "Dr. Anil Sharma",
      specialization: "Cardiologist",
      department: "Cardiology",
      experience: "12 Years",
      phone: "9801111111",
      email: "anil@tuth.org",
      availability: "09:00 AM - 02:00 PM",
      status: "Available",
      patients: 34,
    },
    {
      id: "D-002",
      name: "Dr. Sushma Adhikari",
      specialization: "Neurologist",
      department: "Neurology",
      experience: "9 Years",
      phone: "9802222222",
      email: "sushma@tuth.org",
      availability: "10:00 AM - 04:00 PM",
      status: "Available",
      patients: 28,
    },
    {
      id: "D-003",
      name: "Dr. Rajesh Shrestha",
      specialization: "Orthopedic Surgeon",
      department: "Orthopedics",
      experience: "15 Years",
      phone: "9803333333",
      email: "rajesh@tuth.org",
      availability: "08:00 AM - 01:00 PM",
      status: "In Surgery",
      patients: 41,
    },
    {
      id: "D-004",
      name: "Dr. Nisha Karki",
      specialization: "Pediatrician",
      department: "Pediatrics",
      experience: "7 Years",
      phone: "9804444444",
      email: "nisha@tuth.org",
      availability: "11:00 AM - 05:00 PM",
      status: "Available",
      patients: 22,
    },
    {
      id: "D-005",
      name: "Dr. Sarah Wilson",
      specialization: "General Physician",
      department: "General Medicine",
      experience: "10 Years",
      phone: "9805555555",
      email: "sarah@tuth.org",
      availability: "09:00 AM - 03:00 PM",
      status: "Available",
      patients: 31,
    },
    {
      id: "D-006",
      name: "Dr. James Miller",
      specialization: "Surgeon",
      department: "General Surgery",
      experience: "14 Years",
      phone: "9806666666",
      email: "james@tuth.org",
      availability: "10:00 AM - 04:00 PM",
      status: "Available",
      patients: 26,
    },
  ];

  const appointments = [
    {
      id: "A-001",
      patient: "Ram Bahadur Thapa",
      patientId: "P-1001",
      doctor: "Dr. Anil Sharma",
      department: "Cardiology",
      date: "2026-10-02",
      time: "10:00 AM",
      type: "Follow-up",
      status: "Completed",
      reason: "Blood pressure check",
      phone: "9841234567",
    },
    {
      id: "A-002",
      patient: "Sita Sharma",
      patientId: "P-1002",
      doctor: "Dr. Sushma Adhikari",
      department: "Neurology",
      date: "2026-10-02",
      time: "11:30 AM",
      type: "Consultation",
      status: "Scheduled",
      reason: "Migraine consultation",
      phone: "9812345678",
    },
    {
      id: "A-003",
      patient: "Hari Prasad Karki",
      patientId: "P-1003",
      doctor: "Dr. Rajesh Shrestha",
      department: "Orthopedics",
      date: "2026-10-03",
      time: "09:30 AM",
      type: "Consultation",
      status: "Scheduled",
      reason: "Knee pain",
      phone: "9801234567",
    },
    {
      id: "A-004",
      patient: "Mina Gurung",
      patientId: "P-1004",
      doctor: "Dr. Nisha Karki",
      department: "Pediatrics",
      date: "2026-10-03",
      time: "01:00 PM",
      type: "Follow-up",
      status: "Cancelled",
      reason: "Fever follow-up",
      phone: "9867890123",
    },
    {
      id: "A-005",
      patient: "Aarav Sharma",
      patientId: "P-1005",
      doctor: "Dr. Anil Sharma",
      department: "Cardiology",
      date: "2026-10-04",
      time: "10:30 AM",
      type: "Consultation",
      status: "Scheduled",
      reason: "Chest discomfort",
      phone: "9855555555",
    },
  ];

  const medicines = [
    {
      id: "M-001",
      name: "Paracetamol 500mg",
      category: "Pain Relief",
      stock: 120,
      price: 3,
      expiry: "2027-05-15",
      supplier: "Nepal Pharma",
      status: "In Stock",
    },
    {
      id: "M-002",
      name: "Amlodipine 5mg",
      category: "Cardiology",
      stock: 18,
      price: 8,
      expiry: "2027-01-20",
      supplier: "MediCare Nepal",
      status: "Low Stock",
    },
    {
      id: "M-003",
      name: "Amoxicillin 500mg",
      category: "Antibiotic",
      stock: 65,
      price: 12,
      expiry: "2027-08-10",
      supplier: "Himalayan Pharma",
      status: "In Stock",
    },
    {
      id: "M-004",
      name: "Sumatriptan 50mg",
      category: "Neurology",
      stock: 8,
      price: 25,
      expiry: "2026-12-10",
      supplier: "Nepal Pharma",
      status: "Low Stock",
    },
    {
      id: "M-005",
      name: "Ibuprofen 400mg",
      category: "Pain Relief",
      stock: 92,
      price: 5,
      expiry: "2027-03-18",
      supplier: "MediCare Nepal",
      status: "In Stock",
    },
    {
      id: "M-006",
      name: "Cetirizine 10mg",
      category: "Allergy",
      stock: 45,
      price: 4,
      expiry: "2027-06-22",
      supplier: "Himalayan Pharma",
      status: "In Stock",
    },
  ];

  const bills = [
    {
      id: "INV-001",
      patient: "Ram Bahadur Thapa",
      patientId: "P-1001",
      date: "2026-10-02",
      consultation: 1000,
      laboratory: 1200,
      medicine: 850,
      other: 200,
      discount: 0,
      tax: 248,
      total: 3498,
      paid: 3498,
      status: "Paid",
      method: "Cash",
    },
    {
      id: "INV-002",
      patient: "Sita Sharma",
      patientId: "P-1002",
      date: "2026-10-02",
      consultation: 800,
      laboratory: 600,
      medicine: 450,
      other: 0,
      discount: 50,
      tax: 180,
      total: 1980,
      paid: 1000,
      status: "Pending",
      method: "Card",
    },
    {
      id: "INV-003",
      patient: "Hari Prasad Karki",
      patientId: "P-1003",
      date: "2026-10-01",
      consultation: 1000,
      laboratory: 500,
      medicine: 750,
      other: 300,
      discount: 0,
      tax: 255,
      total: 2805,
      paid: 2805,
      status: "Paid",
      method: "Cash",
    },
    {
      id: "INV-004",
      patient: "Mina Gurung",
      patientId: "P-1004",
      date: "2026-09-30",
      consultation: 700,
      laboratory: 450,
      medicine: 350,
      other: 0,
      discount: 0,
      tax: 150,
      total: 1650,
      paid: 1650,
      status: "Paid",
      method: "Online",
    },
    {
      id: "INV-005",
      patient: "Aarav Sharma",
      patientId: "P-1005",
      date: "2026-10-01",
      consultation: 900,
      laboratory: 1000,
      medicine: 400,
      other: 0,
      discount: 0,
      tax: 230,
      total: 2530,
      paid: 0,
      status: "Pending",
      method: "Cash",
    },
  ];

  const departments = [
    {
      name: "Cardiology",
      icon: "❤️",
      doctors: 8,
      patients: 124,
      description: "Diagnosis and treatment of heart and cardiovascular conditions.",
    },
    {
      name: "Neurology",
      icon: "🧠",
      doctors: 6,
      patients: 86,
      description: "Treatment of brain, spinal cord and nervous system disorders.",
    },
    {
      name: "Orthopedics",
      icon: "🦴",
      doctors: 7,
      patients: 105,
      description: "Treatment of bones, joints, muscles and related conditions.",
    },
    {
      name: "Pediatrics",
      icon: "👶",
      doctors: 5,
      patients: 92,
      description: "Medical care for infants, children and adolescents.",
    },
    {
      name: "General Medicine",
      icon: "🩺",
      doctors: 10,
      patients: 180,
      description: "General diagnosis, consultation and primary medical care.",
    },
    {
      name: "General Surgery",
      icon: "🏥",
      doctors: 6,
      patients: 72,
      description: "Surgical diagnosis and treatment for various conditions.",
    },
  ];

  const logout = () => setLoggedIn(false);

  if (!loggedIn) {
    return <LoginPage onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div className="app">
      <header className="top-header">
        <div className="header-left">
          <div className="header-logo">+</div>
          <div>
            <h2>TU Teaching Hospital</h2>
            <span>Hospital Management System</span>
          </div>
        </div>

        <div className="header-right">
          <div className="header-search">
            🔍
            <input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="notification">🔔<span>3</span></button>
          <div className="profile">
            <div className="profile-avatar">SA</div>
            <div>
              <strong>Susmita Adhikari</strong>
              <small>Administrator</small>
            </div>
          </div>
        </div>
      </header>

      <div className="app-body">
        <aside className="sidebar">
          <div className="menu-title">MAIN MENU</div>

          <nav className="navigation">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`nav-item ${page === item.id ? "active" : ""}`}
                onClick={() => {
                  setPage(item.id);
                  setSelectedPatient(null);
                  setSelectedDoctor(null);
                  setSelectedBill(null);
                }}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="sidebar-bottom">
            <button className="nav-item logout" onClick={logout}>
              <span className="nav-icon">↪</span>
              Logout
            </button>
          </div>
        </aside>

        <main className="main-content">
          {page === "dashboard" && (
            <Dashboard
              appointments={appointments}
              bills={bills}
              setPage={setPage}
            />
          )}

          {page === "patients" && (
            <PatientsPage
              patients={patients}
              search={search}
              setSearch={setSearch}
              selectedPatient={selectedPatient}
              setSelectedPatient={setSelectedPatient}
              showAddPatient={showAddPatient}
              setShowAddPatient={setShowAddPatient}
            />
          )}

          {page === "doctors" && (
            <DoctorsPage
              doctors={doctors}
              selectedDoctor={selectedDoctor}
              setSelectedDoctor={setSelectedDoctor}
            />
          )}

          {page === "appointments" && (
            <AppointmentsPage
              appointments={appointments}
              showAddAppointment={showAddAppointment}
              setShowAddAppointment={setShowAddAppointment}
            />
          )}

          {page === "departments" && (
            <DepartmentsPage departments={departments} />
          )}

          {page === "pharmacy" && (
            <PharmacyPage medicines={medicines} />
          )}

          {page === "billing" && (
            <BillingPage
              bills={bills}
              selectedBill={selectedBill}
              setSelectedBill={setSelectedBill}
            />
          )}

          {page === "reports" && (
            <ReportsPage />
          )}

          {page === "settings" && (
            <SettingsPage />
          )}
        </main>
      </div>
    </div>
  );
}

/* ================= DASHBOARD ================= */

function Dashboard({ appointments, bills, setPage }) {
  return (
    <>
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome to TU Teaching Hospital Management System</p>
        </div>
        <div className="date-selector">📅 October 02, 2026</div>
      </div>

      <div className="stats">
        <StatCard icon="👥" title="Total Patients" value="6" change="+12%" />
        <StatCard icon="🩺" title="Total Doctors" value="6" change="+2%" />
        <StatCard icon="📅" title="Appointments" value="5" change="+8%" />
        <StatCard icon="💰" title="Total Revenue" value="Rs. 5,730" change="+15%" />
      </div>

      <div className="dashboard-columns">
        <section className="card">
          <div className="card-header">
            <div>
              <h2>Recent Appointments</h2>
              <p>Today's and upcoming appointments</p>
            </div>
            <button className="view-button" onClick={() => setPage("appointments")}>
              View All
            </button>
          </div>

          <div className="appointment-list">
            {appointments.map((item) => (
              <div className="appointment" key={item.id}>
                <div className="patient-letter">
                  {item.patient.charAt(0)}
                </div>

                <div className="patient-details">
                  <strong>{item.patient}</strong>
                  <span>{item.doctor}</span>
                </div>

                <div className="appointment-time">
                  <strong>{item.date}</strong>
                  <span>{item.time}</span>
                </div>

                <StatusBadge status={item.status} />
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            <div>
              <h2>Billing Summary</h2>
              <p>Current billing overview</p>
            </div>
            <button className="view-button" onClick={() => setPage("billing")}>
              Details
            </button>
          </div>

          <div className="revenue-circle">
            <div>
              <strong>75%</strong>
              <span>Collected</span>
            </div>
          </div>

          <div className="billing-stats">
            <div>
              <span>Total Bills</span>
              <strong>5</strong>
            </div>
            <div>
              <span>Paid Bills</span>
              <strong>3</strong>
            </div>
            <div>
              <span>Pending</span>
              <strong>2</strong>
            </div>
            <div>
              <span>Revenue</span>
              <strong>Rs. 5,730</strong>
            </div>
          </div>
        </section>
      </div>

      <section className="card quick-section">
        <div className="card-header">
          <div>
            <h2>Quick Access</h2>
            <p>Frequently used hospital modules</p>
          </div>
        </div>

        <div className="quick-grid">
          <QuickCard icon="👥" title="Patients" onClick={() => setPage("patients")} />
          <QuickCard icon="📅" title="Appointments" onClick={() => setPage("appointments")} />
          <QuickCard icon="🩺" title="Doctors" onClick={() => setPage("doctors")} />
          <QuickCard icon="💊" title="Pharmacy" onClick={() => setPage("pharmacy")} />
          <QuickCard icon="🧾" title="Billing" onClick={() => setPage("billing")} />
          <QuickCard icon="📊" title="Reports" onClick={() => setPage("reports")} />
        </div>
      </section>
    </>
  );
}

/* ================= PATIENTS ================= */

function PatientsPage({
  patients,
  search,
  setSearch,
  selectedPatient,
  setSelectedPatient,
  showAddPatient,
  setShowAddPatient,
}) {
  if (selectedPatient) {
    return (
      <PatientDetails
        patient={selectedPatient}
        onBack={() => setSelectedPatient(null)}
      />
    );
  }

  const filtered = patients.filter((p) =>
    `${p.name} ${p.id} ${p.phone} ${p.department}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <PageTitle
        title="Patients"
        subtitle="Manage patient information, medical records and history"
        button="+ Add Patient"
        onClick={() => setShowAddPatient(true)}
      />

      <div className="summary-row">
        <MiniCard icon="👥" label="Total Patients" value="6" />
        <MiniCard icon="🟢" label="Active Patients" value="5" />
        <MiniCard icon="🏠" label="Discharged" value="1" />
        <MiniCard icon="📅" label="New Today" value="2" />
      </div>

      <section className="card">
        <div className="table-toolbar">
          <div>
            <h2>Patient Records</h2>
            <p>Complete registered patient information</p>
          </div>

          <input
            className="table-search"
            placeholder="Search patient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Patient</th>
                <th>Age / Gender</th>
                <th>Blood Group</th>
                <th>Department</th>
                <th>Doctor</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((patient) => (
                <tr key={patient.id}>
                  <td><strong>{patient.id}</strong></td>
                  <td>
                    <div className="table-person">
                      <div className="small-avatar">{patient.name.charAt(0)}</div>
                      <div>
                        <strong>{patient.name}</strong>
                        <small>{patient.phone}</small>
                      </div>
                    </div>
                  </td>
                  <td>{patient.age} / {patient.gender}</td>
                  <td><span className="blood">{patient.blood}</span></td>
                  <td>{patient.department}</td>
                  <td>{patient.doctor}</td>
                  <td><StatusBadge status={patient.status} /></td>
                  <td>
                    <button
                      className="action-button"
                      onClick={() => setSelectedPatient(patient)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {showAddPatient && (
        <Modal title="Add New Patient" onClose={() => setShowAddPatient(false)}>
          <PatientForm onClose={() => setShowAddPatient(false)} />
        </Modal>
      )}
    </>
  );
}

function PatientDetails({ patient, onBack }) {
  return (
    <>
      <button className="back-button" onClick={onBack}>← Back to Patients</button>

      <div className="detail-header">
        <div className="detail-avatar">{patient.name.charAt(0)}</div>
        <div>
          <h1>{patient.name}</h1>
          <p>{patient.id} • {patient.department}</p>
        </div>
        <StatusBadge status={patient.status} />
      </div>

      <div className="detail-grid">
        <section className="card">
          <div className="card-header">
            <h2>Patient Information</h2>
          </div>

          <div className="info-grid">
            <Info label="Patient ID" value={patient.id} />
            <Info label="Age" value={`${patient.age} Years`} />
            <Info label="Gender" value={patient.gender} />
            <Info label="Blood Group" value={patient.blood} />
            <Info label="Phone" value={patient.phone} />
            <Info label="Email" value={patient.email} />
            <Info label="Address" value={patient.address} />
            <Info label="Admission Date" value={patient.admission} />
            <Info label="Department" value={patient.department} />
            <Info label="Doctor" value={patient.doctor} />
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            <div>
              <h2>Medical Summary</h2>
              <p>Current patient condition</p>
            </div>
          </div>

          <div className="medical-summary">
            <div>
              <span>Current Doctor</span>
              <strong>{patient.doctor}</strong>
            </div>
            <div>
              <span>Department</span>
              <strong>{patient.department}</strong>
            </div>
            <div>
              <span>Medical Visits</span>
              <strong>{patient.history.length}</strong>
            </div>
          </div>
        </section>
      </div>

      <section className="card">
        <div className="card-header">
          <div>
            <h2>Patient Medical History</h2>
            <p>Previous visits, diagnosis and prescriptions</p>
          </div>
          <button className="primary-button">+ Add Medical Record</button>
        </div>

        {patient.history.length === 0 ? (
          <div className="empty-state">
            <div>📋</div>
            <h3>No medical history available</h3>
            <p>Medical records will appear here after the patient's visit.</p>
          </div>
        ) : (
          <div className="history-list">
            {patient.history.map((record, index) => (
              <div className="history-item" key={index}>
                <div className="history-date">
                  <strong>{record.date}</strong>
                  <span>Visit {index + 1}</span>
                </div>

                <div className="history-content">
                  <strong>{record.diagnosis}</strong>
                  <span>{record.doctor}</span>

                  <div className="history-details">
                    <div>
                      <label>Prescription</label>
                      <p>{record.prescription}</p>
                    </div>
                    <div>
                      <label>Doctor's Notes</label>
                      <p>{record.notes}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="card">
        <div className="card-header">
          <h2>Patient Activity</h2>
        </div>

        <div className="activity-grid">
          <div>
            <span>Appointments</span>
            <strong>4</strong>
          </div>
          <div>
            <span>Prescriptions</span>
            <strong>{patient.history.length + 2}</strong>
          </div>
          <div>
            <span>Lab Reports</span>
            <strong>3</strong>
          </div>
          <div>
            <span>Previous Bills</span>
            <strong>3</strong>
          </div>
        </div>
      </section>
    </>
  );
}

/* ================= DOCTORS ================= */

function DoctorsPage({ doctors, selectedDoctor, setSelectedDoctor }) {
  if (selectedDoctor) {
    return (
      <>
        <button
          className="back-button"
          onClick={() => setSelectedDoctor(null)}
        >
          ← Back to Doctors
        </button>

        <div className="detail-header">
          <div className="doctor-large-avatar">🩺</div>
          <div>
            <h1>{selectedDoctor.name}</h1>
            <p>{selectedDoctor.specialization} • {selectedDoctor.department}</p>
          </div>
          <StatusBadge status={selectedDoctor.status} />
        </div>

        <div className="detail-grid">
          <section className="card">
            <div className="card-header">
              <h2>Doctor Information</h2>
            </div>

            <div className="info-grid">
              <Info label="Doctor ID" value={selectedDoctor.id} />
              <Info label="Specialization" value={selectedDoctor.specialization} />
              <Info label="Department" value={selectedDoctor.department} />
              <Info label="Experience" value={selectedDoctor.experience} />
              <Info label="Phone" value={selectedDoctor.phone} />
              <Info label="Email" value={selectedDoctor.email} />
              <Info label="Availability" value={selectedDoctor.availability} />
              <Info label="Patients" value={selectedDoctor.patients} />
            </div>
          </section>

          <section className="card">
            <div className="card-header">
              <h2>Today's Schedule</h2>
            </div>

            <div className="schedule-list">
              <div><span>09:00 AM</span><strong>Patient Consultation</strong></div>
              <div><span>10:30 AM</span><strong>Patient Follow-up</strong></div>
              <div><span>12:00 PM</span><strong>Medical Review</strong></div>
              <div><span>01:30 PM</span><strong>Department Meeting</strong></div>
            </div>
          </section>
        </div>
      </>
    );
  }

  return (
    <>
      <PageTitle
        title="Doctors"
        subtitle="Manage doctors, specializations and schedules"
      />

      <div className="summary-row">
        <MiniCard icon="🩺" label="Total Doctors" value="6" />
        <MiniCard icon="🟢" label="Available" value="5" />
        <MiniCard icon="🏥" label="Departments" value="6" />
        <MiniCard icon="👥" label="Patients Today" value="34" />
      </div>

      <div className="doctor-grid">
        {doctors.map((doctor) => (
          <div className="doctor-card" key={doctor.id}>
            <div className="doctor-card-top">
              <div className="doctor-avatar">🩺</div>
              <StatusBadge status={doctor.status} />
            </div>

            <h3>{doctor.name}</h3>
            <p className="doctor-specialization">{doctor.specialization}</p>

            <div className="doctor-info">
              <div><span>Department</span><strong>{doctor.department}</strong></div>
              <div><span>Experience</span><strong>{doctor.experience}</strong></div>
              <div><span>Availability</span><strong>{doctor.availability}</strong></div>
              <div><span>Patients</span><strong>{doctor.patients}</strong></div>
            </div>

            <button
              className="outline-button full"
              onClick={() => setSelectedDoctor(doctor)}
            >
              View Doctor Details
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

/* ================= APPOINTMENTS ================= */

function AppointmentsPage({
  appointments,
  showAddAppointment,
  setShowAddAppointment,
}) {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? appointments
      : appointments.filter((item) => item.status === filter);

  return (
    <>
      <PageTitle
        title="Appointments"
        subtitle="Schedule and manage patient appointments"
        button="+ Schedule Appointment"
        onClick={() => setShowAddAppointment(true)}
      />

      <div className="summary-row">
        <MiniCard icon="📅" label="Total" value="5" />
        <MiniCard icon="🟡" label="Scheduled" value="3" />
        <MiniCard icon="🟢" label="Completed" value="1" />
        <MiniCard icon="🔴" label="Cancelled" value="1" />
      </div>

      <section className="card">
        <div className="table-toolbar">
          <div>
            <h2>Appointment Schedule</h2>
            <p>All patient appointments</p>
          </div>

          <div className="filter-buttons">
            {["All", "Scheduled", "Completed", "Cancelled"].map((item) => (
              <button
                key={item}
                className={filter === item ? "filter-active" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Appointment ID</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Date & Time</th>
                <th>Type</th>
                <th>Status</th>
                <th>Reason</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((item) => (
                <tr key={item.id}>
                  <td><strong>{item.id}</strong></td>
                  <td>
                    <strong>{item.patient}</strong>
                    <small className="table-sub">{item.patientId}</small>
                  </td>
                  <td>{item.doctor}</td>
                  <td>{item.department}</td>
                  <td>
                    <strong>{item.date}</strong>
                    <small className="table-sub">{item.time}</small>
                  </td>
                  <td>{item.type}</td>
                  <td><StatusBadge status={item.status} /></td>
                  <td>{item.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {showAddAppointment && (
        <Modal
          title="Schedule New Appointment"
          onClose={() => setShowAddAppointment(false)}
        >
          <AppointmentForm onClose={() => setShowAddAppointment(false)} />
        </Modal>
      )}
    </>
  );
}

/* ================= DEPARTMENTS ================= */

function DepartmentsPage({ departments }) {
  return (
    <>
      <PageTitle
        title="Departments"
        subtitle="Hospital departments and medical services"
      />

      <div className="department-grid">
        {departments.map((department) => (
          <div className="department-card" key={department.name}>
            <div className="department-icon">{department.icon}</div>
            <h2>{department.name}</h2>
            <p>{department.description}</p>

            <div className="department-stats">
              <div>
                <strong>{department.doctors}</strong>
                <span>Doctors</span>
              </div>
              <div>
                <strong>{department.patients}</strong>
                <span>Patients</span>
              </div>
            </div>

            <button className="outline-button full">View Department</button>
          </div>
        ))}
      </div>
    </>
  );
}

/* ================= PHARMACY ================= */

function PharmacyPage({ medicines }) {
  const [medicineSearch, setMedicineSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(medicines.map((m) => m.category))];

  const filtered = medicines.filter((medicine) => {
    const matchesSearch = medicine.name
      .toLowerCase()
      .includes(medicineSearch.toLowerCase());

    const matchesCategory =
      category === "All" || medicine.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageTitle
        title="Pharmacy"
        subtitle="Manage medicines, inventory and dispensing"
        button="+ Add Medicine"
      />

      <div className="summary-row">
        <MiniCard icon="💊" label="Total Medicines" value="6" />
        <MiniCard icon="📦" label="Total Stock" value="348" />
        <MiniCard icon="⚠️" label="Low Stock" value="2" />
        <MiniCard icon="💰" label="Inventory Value" value="Rs. 4,850" />
      </div>

      <section className="card">
        <div className="table-toolbar">
          <div>
            <h2>Medicine Inventory</h2>
            <p>Current pharmacy stock and medicine information</p>
          </div>

          <input
            className="table-search"
            placeholder="Search medicine..."
            value={medicineSearch}
            onChange={(e) => setMedicineSearch(e.target.value)}
          />
        </div>

        <div className="category-tabs">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "category-active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Medicine ID</th>
                <th>Medicine</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Unit Price</th>
                <th>Expiry Date</th>
                <th>Supplier</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((medicine) => (
                <tr key={medicine.id}>
                  <td><strong>{medicine.id}</strong></td>
                  <td><strong>{medicine.name}</strong></td>
                  <td>{medicine.category}</td>
                  <td>
                    <strong className={medicine.stock < 20 ? "low-stock" : ""}>
                      {medicine.stock}
                    </strong>
                  </td>
                  <td>Rs. {medicine.price}</td>
                  <td>{medicine.expiry}</td>
                  <td>{medicine.supplier}</td>
                  <td>
                    <StatusBadge status={medicine.status} />
                  </td>
                  <td>
                    <button className="action-button">Dispense</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card pharmacy-process">
        <div className="card-header">
          <div>
            <h2>Pharmacy Process</h2>
            <p>Medicine dispensing workflow</p>
          </div>
        </div>

        <div className="process-steps">
          <div><span>1</span><strong>Prescription Received</strong><p>Doctor submits prescription.</p></div>
          <div><span>2</span><strong>Medicine Check</strong><p>Pharmacy checks availability.</p></div>
          <div><span>3</span><strong>Medicine Dispensed</strong><p>Medicine is issued to patient.</p></div>
          <div><span>4</span><strong>Billing Updated</strong><p>Medicine charges are added to bill.</p></div>
        </div>
      </section>
    </>
  );
}

/* ================= BILLING ================= */

function BillingPage({ bills, selectedBill, setSelectedBill }) {
  if (selectedBill) {
    return (
      <BillDetails
        bill={selectedBill}
        onBack={() => setSelectedBill(null)}
      />
    );
  }

  return (
    <>
      <PageTitle
        title="Billing & Payments"
        subtitle="Manage invoices, payments and hospital revenue"
        button="+ Create Bill"
      />

      <div className="summary-row">
        <MiniCard icon="🧾" label="Total Bills" value="5" />
        <MiniCard icon="✅" label="Paid Bills" value="3" />
        <MiniCard icon="⏳" label="Pending Bills" value="2" />
        <MiniCard icon="💰" label="Total Revenue" value="Rs. 12,463" />
      </div>

      <section className="billing-overview">
        <div className="billing-overview-card">
          <span>Total Collection</span>
          <strong>Rs. 9,953</strong>
          <small>79.8% collected</small>
        </div>

        <div className="billing-overview-card">
          <span>Pending Amount</span>
          <strong>Rs. 2,510</strong>
          <small>Needs collection</small>
        </div>

        <div className="billing-overview-card">
          <span>Today's Revenue</span>
          <strong>Rs. 5,478</strong>
          <small>October 02, 2026</small>
        </div>
      </section>

      <section className="card">
        <div className="table-toolbar">
          <div>
            <h2>Invoices</h2>
            <p>Patient billing and payment records</p>
          </div>
          <input className="table-search" placeholder="Search invoice or patient..." />
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Invoice</th>
                <th>Patient</th>
                <th>Date</th>
                <th>Consultation</th>
                <th>Lab</th>
                <th>Medicine</th>
                <th>Total</th>
                <th>Paid</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {bills.map((bill) => (
                <tr key={bill.id}>
                  <td><strong>{bill.id}</strong></td>
                  <td>
                    <strong>{bill.patient}</strong>
                    <small className="table-sub">{bill.patientId}</small>
                  </td>
                  <td>{bill.date}</td>
                  <td>Rs. {bill.consultation}</td>
                  <td>Rs. {bill.laboratory}</td>
                  <td>Rs. {bill.medicine}</td>
                  <td><strong>Rs. {bill.total}</strong></td>
                  <td>Rs. {bill.paid}</td>
                  <td><StatusBadge status={bill.status} /></td>
                  <td>
                    <button
                      className="action-button"
                      onClick={() => setSelectedBill(bill)}
                    >
                      View Bill
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

function BillDetails({ bill, onBack }) {
  const balance = bill.total - bill.paid;

  return (
    <>
      <button className="back-button" onClick={onBack}>← Back to Billing</button>

      <div className="invoice-header">
        <div>
          <h1>Invoice {bill.id}</h1>
          <p>TU Teaching Hospital • Billing Department</p>
        </div>
        <StatusBadge status={bill.status} />
      </div>

      <section className="invoice">
        <div className="invoice-top">
          <div>
            <div className="hospital-logo-small">+</div>
            <h2>TU Teaching Hospital</h2>
            <p>Institute of Medicine, Kathmandu, Nepal</p>
          </div>

          <div className="invoice-number">
            <span>INVOICE</span>
            <strong>{bill.id}</strong>
            <small>Date: {bill.date}</small>
          </div>
        </div>

        <div className="invoice-patient">
          <div>
            <span>Patient Name</span>
            <strong>{bill.patient}</strong>
          </div>
          <div>
            <span>Patient ID</span>
            <strong>{bill.patientId}</strong>
          </div>
          <div>
            <span>Payment Method</span>
            <strong>{bill.method}</strong>
          </div>
        </div>

        <table className="invoice-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Doctor Consultation</td><td>Rs. {bill.consultation}</td></tr>
            <tr><td>Laboratory Services</td><td>Rs. {bill.laboratory}</td></tr>
            <tr><td>Medicine Charges</td><td>Rs. {bill.medicine}</td></tr>
            <tr><td>Other Hospital Charges</td><td>Rs. {bill.other}</td></tr>
            <tr><td>Discount</td><td>- Rs. {bill.discount}</td></tr>
            <tr><td>Tax</td><td>Rs. {bill.tax}</td></tr>
          </tbody>
        </table>

        <div className="invoice-total">
          <div><span>Grand Total</span><strong>Rs. {bill.total}</strong></div>
          <div><span>Amount Paid</span><strong>Rs. {bill.paid}</strong></div>
          <div className="balance"><span>Remaining Balance</span><strong>Rs. {balance}</strong></div>
        </div>

        <div className="payment-process">
          <div className="payment-step done">
            <span>✓</span>
            <div><strong>Bill Created</strong><small>Invoice generated</small></div>
          </div>

          <div className={`payment-step ${bill.paid > 0 ? "done" : ""}`}>
            <span>{bill.paid > 0 ? "✓" : "2"}</span>
            <div><strong>Payment Received</strong><small>Rs. {bill.paid}</small></div>
          </div>

          <div className={`payment-step ${balance === 0 ? "done" : ""}`}>
            <span>{balance === 0 ? "✓" : "3"}</span>
            <div><strong>Payment Completed</strong><small>{balance === 0 ? "Fully paid" : "Payment pending"}</small></div>
          </div>
        </div>

        <div className="invoice-footer">
          <button className="outline-button">🖨 Print Invoice</button>
          {balance > 0 && <button className="primary-button">💳 Collect Payment</button>}
        </div>
      </section>
    </>
  );
}

/* ================= REPORTS ================= */

function ReportsPage() {
  return (
    <>
      <PageTitle
        title="Reports & Analytics"
        subtitle="Hospital performance and operational reports"
      />

      <div className="report-grid">
        <ReportCard icon="👥" title="Patient Report" value="6" description="Registered patients" />
        <ReportCard icon="🩺" title="Doctor Report" value="6" description="Active doctors" />
        <ReportCard icon="📅" title="Appointment Report" value="5" description="Total appointments" />
        <ReportCard icon="💊" title="Pharmacy Report" value="348" description="Medicine stock" />
        <ReportCard icon="🧾" title="Billing Report" value="Rs. 12,463" description="Total billing" />
        <ReportCard icon="💰" title="Revenue Report" value="Rs. 9,953" description="Collected amount" />
      </div>

      <section className="card">
        <div className="card-header">
          <div>
            <h2>Monthly Hospital Overview</h2>
            <p>October 2026 performance</p>
          </div>
        </div>

        <div className="chart">
          <div className="bar" style={{ height: "65%" }}><span>Patients</span></div>
          <div className="bar" style={{ height: "82%" }}><span>Appointments</span></div>
          <div className="bar" style={{ height: "52%" }}><span>Bills</span></div>
          <div className="bar" style={{ height: "90%" }}><span>Revenue</span></div>
          <div className="bar" style={{ height: "70%" }}><span>Pharmacy</span></div>
        </div>
      </section>

      <section className="card">
        <div className="card-header">
          <h2>Department Performance</h2>
        </div>

        <div className="department-report">
          <ReportRow name="Cardiology" patients="124" percentage="82%" />
          <ReportRow name="General Medicine" patients="180" percentage="91%" />
          <ReportRow name="Orthopedics" patients="105" percentage="76%" />
          <ReportRow name="Neurology" patients="86" percentage="65%" />
          <ReportRow name="Pediatrics" patients="92" percentage="72%" />
        </div>
      </section>
    </>
  );
}

/* ================= SETTINGS ================= */

function SettingsPage() {
  return (
    <>
      <PageTitle
        title="Settings"
        subtitle="Manage hospital and administrator settings"
      />

      <div className="settings-grid">
        <section className="card">
          <div className="card-header">
            <h2>Hospital Information</h2>
          </div>

          <div className="form-grid">
            <label>
              Hospital Name
              <input value="TU Teaching Hospital" readOnly />
            </label>

            <label>
              Hospital Code
              <input value="TUTH" readOnly />
            </label>

            <label>
              Email
              <input value="info@tuth.org.np" readOnly />
            </label>

            <label>
              Phone
              <input value="+977-1-4412303" readOnly />
            </label>

            <label className="full-field">
              Address
              <input value="Maharajgunj, Kathmandu, Nepal" readOnly />
            </label>
          </div>

          <button className="primary-button">Save Changes</button>
        </section>

        <section className="card">
          <div className="card-header">
            <h2>Administrator Profile</h2>
          </div>

          <div className="profile-settings">
            <div className="profile-large">SA</div>
            <h2>Susmita Adhikari</h2>
            <p>Administrator</p>
          </div>

          <div className="form-grid">
            <label>
              Full Name
              <input value="Susmita Adhikari" readOnly />
            </label>

            <label>
              Role
              <input value="Administrator" readOnly />
            </label>

            <label>
              Email
              <input value="admin@tuth.org.np" readOnly />
            </label>

            <label>
              Phone
              <input value="+977 9800000000" readOnly />
            </label>
          </div>
        </section>
      </div>
    </>
  );
}

/* ================= LOGIN ================= */

function LoginPage({ onLogin }) {
  return (
    <div className="login-page">

  {/* LEFT SIDE — Healthcare Information */}
  <div className="login-right">
    <div className="hospital-overlay">
      <div className="large-cross">+</div>

      <h2>
        Better Healthcare.<br />
        Better Management.
      </h2>

      <p>
        A centralized hospital management system for patients,
        doctors, appointments, pharmacy and billing.
      </p>

      <div className="login-features">
        <span>✓ Patient Management</span>
        <span>✓ Doctor Management</span>
        <span>✓ Appointment Scheduling</span>
        <span>✓ Pharmacy & Billing</span>
      </div>
    </div>
  </div>


  {/* RIGHT SIDE — Login */}
  <div className="login-left">

    <div className="login-brand">
      <div className="brand-icon">+</div>

      <div>
        <h1>TU Teaching Hospital</h1>
        <span>Hospital Management System</span>
      </div>
    </div>

    <div className="login-content">

      <div className="login-icon">🏥</div>

      <h2>Welcome Back</h2>

      <p>
        Sign in to access the hospital management system.
      </p>

      <div className="login-form">

        <label>
          Email Address
          <input
            type="email"
            placeholder="admin@tuth.org.np"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            placeholder="Enter your password"
          />
        </label>

        <div className="login-options">

          <label className="remember">
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#forgot">
            Forgot password?
          </a>

        </div>

        <button
          className="login-button"
          onClick={onLogin}
        >
          Sign In →
        </button>

      </div>
    </div>

    <div className="login-footer">
      © 2026 TU Teaching Hospital. All rights reserved.
    </div>

  </div>

</div>
  )
}

/* ================= REUSABLE COMPONENTS ================= */

function StatCard({ icon, title, value, change }) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <div className="stat-icon">{icon}</div>
        <span className="change">{change}</span>
      </div>
      <span className="stat-title">{title}</span>
      <strong className="stat-value">{value}</strong>
      <span className="stat-description">Compared to last month</span>
    </div>
  );
}

function MiniCard({ icon, label, value }) {
  return (
    <div className="mini-card">
      <div className="mini-icon">{icon}</div>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

function QuickCard({ icon, title, onClick }) {
  return (
    <button className="quick-card" onClick={onClick}>
      <div className="quick-icon">{icon}</div>
      <div className="quick-content">
        <strong>{title}</strong>
        <span>Open module</span>
      </div>
      <span className="quick-arrow">→</span>
    </button>
  );
}

function PageTitle({ title, subtitle, button, onClick }) {
  return (
    <div className="page-header">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      {button && (
        <button className="primary-button" onClick={onClick}>
          {button}
        </button>
      )}
    </div>
  );
}

function StatusBadge({ status }) {
  let className = "";

  if (
    status === "Completed" ||
    status === "Paid" ||
    status === "Available" ||
    status === "In Stock" ||
    status === "Active"
  ) {
    className = "status completed";
  } else if (
    status === "Scheduled" ||
    status === "Pending" ||
    status === "Low Stock"
  ) {
    className = "status scheduled";
  } else {
    className = "status cancelled";
  }

  return <span className={className}>{status}</span>;
}

function Info({ label, value }) {
  return (
    <div className="info-item">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Modal({ title, children, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose}>×</button>
        </div>
        {children}
      </div>
    </div>
  );
}

function PatientForm({ onClose }) {
  return (
    <div className="form-grid">
      <label>
        Full Name
        <input placeholder="Enter patient name" />
      </label>

      <label>
        Age
        <input type="number" placeholder="Age" />
      </label>

      <label>
        Gender
        <select>
          <option>Select gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </label>

      <label>
        Blood Group
        <select>
          <option>Select blood group</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>AB+</option>
          <option>AB-</option>
          <option>O+</option>
          <option>O-</option>
        </select>
      </label>

      <label>
        Phone
        <input placeholder="98XXXXXXXX" />
      </label>

      <label>
        Email
        <input placeholder="patient@email.com" />
      </label>

      <label>
        Department
        <select>
          <option>Select department</option>
          <option>Cardiology</option>
          <option>Neurology</option>
          <option>Orthopedics</option>
          <option>Pediatrics</option>
          <option>General Medicine</option>
        </select>
      </label>

      <label>
        Doctor
        <select>
          <option>Select doctor</option>
          <option>Dr. Anil Sharma</option>
          <option>Dr. Sushma Adhikari</option>
          <option>Dr. Rajesh Shrestha</option>
          <option>Dr. Nisha Karki</option>
        </select>
      </label>

      <label className="full-field">
        Address
        <input placeholder="Patient address" />
      </label>

      <div className="modal-actions">
        <button className="outline-button" onClick={onClose}>Cancel</button>
        <button className="primary-button" onClick={onClose}>Save Patient</button>
      </div>
    </div>
  );
}

function AppointmentForm({ onClose }) {
  return (
    <div className="form-grid">
      <label>
        Patient
        <select>
          <option>Select patient</option>
          <option>Ram Bahadur Thapa</option>
          <option>Sita Sharma</option>
          <option>Hari Prasad Karki</option>
          <option>Mina Gurung</option>
        </select>
      </label>

      <label>
        Doctor
        <select>
          <option>Select doctor</option>
          <option>Dr. Anil Sharma</option>
          <option>Dr. Sushma Adhikari</option>
          <option>Dr. Rajesh Shrestha</option>
          <option>Dr. Nisha Karki</option>
        </select>
      </label>

      <label>
        Department
        <select>
          <option>Select department</option>
          <option>Cardiology</option>
          <option>Neurology</option>
          <option>Orthopedics</option>
          <option>Pediatrics</option>
        </select>
      </label>

      <label>
        Appointment Type
        <select>
          <option>Consultation</option>
          <option>Follow-up</option>
          <option>Emergency</option>
        </select>
      </label>

      <label>
        Date
        <input type="date" />
      </label>

      <label>
        Time
        <input type="time" />
      </label>

      <label className="full-field">
        Reason for Visit
        <textarea placeholder="Enter reason for appointment"></textarea>
      </label>

      <div className="modal-actions">
        <button className="outline-button" onClick={onClose}>Cancel</button>
        <button className="primary-button" onClick={onClose}>
          Schedule Appointment
        </button>
      </div>
    </div>
  );
}

function ReportCard({ icon, title, value, description }) {
  return (
    <div className="report-card">
      <div className="report-icon">{icon}</div>
      <span>{title}</span>
      <strong>{value}</strong>
      <small>{description}</small>
    </div>
  );
}

function ReportRow({ name, patients, percentage }) {
  return (
    <div className="report-row">
      <div>
        <strong>{name}</strong>
        <span>{patients} patients</span>
      </div>

      <div className="report-progress">
        <div style={{ width: percentage }}></div>
      </div>

      <strong>{percentage}</strong>
    </div>
  );
}

export default App;