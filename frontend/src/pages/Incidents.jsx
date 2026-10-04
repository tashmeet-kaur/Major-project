import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./Incidents.css";

function Incidents() {
  const incidents = [
    {
      id: "INC-001",
      title: "Multiple failed login attempts",
      source: "CloudTrail",
      severity: "High",
      status: "Open",
      user: "Admin User",
      time: "5 min ago",
    },
    {
      id: "INC-002",
      title: "Suspicious IP address detected",
      source: "GuardDuty",
      severity: "Medium",
      status: "Investigating",
      user: "Tashneet",
      time: "15 min ago",
    },
    {
      id: "INC-003",
      title: "Unauthorized file access attempt",
      source: "CloudTrail",
      severity: "Critical",
      status: "Open",
      user: "Unknown",
      time: "30 min ago",
    },
    {
      id: "INC-004",
      title: "Unusual download activity",
      source: "CloudWatch",
      severity: "Low",
      status: "Resolved",
      user: "Manager",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <Header />

        <div className="incidents-page">

          {/* Page Header */}

          <div className="incidents-header">
            <div>
              <h1>Security Incidents</h1>
              <p>
                Monitor, investigate, and manage security incidents.
              </p>
            </div>

            <span className="incident-monitoring">
              ● Incident Monitoring Active
            </span>
          </div>

          {/* Incident Summary */}

          <div className="incident-stats">

            <div className="incident-stat-card">
              <div className="incident-stat-icon">
                🚨
              </div>

              <div>
                <span>Open Incidents</span>
                <strong>2</strong>
              </div>
            </div>

            <div className="incident-stat-card">
              <div className="incident-stat-icon">
                🔍
              </div>

              <div>
                <span>Investigating</span>
                <strong>1</strong>
              </div>
            </div>

            <div className="incident-stat-card">
              <div className="incident-stat-icon">
                ✓
              </div>

              <div>
                <span>Resolved</span>
                <strong>1</strong>
              </div>
            </div>

            <div className="incident-stat-card">
              <div className="incident-stat-icon">
                ⚠️
              </div>

              <div>
                <span>Critical / High</span>
                <strong>2</strong>
              </div>
            </div>

          </div>

          {/* Incident Table */}

          <div className="incidents-table-card">

            <div className="incidents-table-header">
              <div>
                <h3>All Security Incidents</h3>
                <p>Review and manage detected incidents.</p>
              </div>

              <select className="incident-filter">
                <option>All Incidents</option>
                <option>Open</option>
                <option>Investigating</option>
                <option>Resolved</option>
              </select>
            </div>

            <div className="incidents-table">

              {/* Table Heading */}

              <div className="incident-row incident-row-heading">
                <span>Incident</span>
                <span>Source</span>
                <span>Severity</span>
                <span>Status</span>
                <span>User</span>
                <span>Time</span>
                <span>Actions</span>
              </div>

              {/* Incident Data */}

              {incidents.map((incident, index) => (
                <div
                  className="incident-row"
                  key={index}
                >

                  <div className="incident-name">
                    <strong>{incident.id}</strong>
                    <span>{incident.title}</span>
                  </div>

                  <span>{incident.source}</span>

                  <span
                    className={`incident-severity ${incident.severity.toLowerCase()}`}
                  >
                    {incident.severity}
                  </span>

                  <span
                    className={`incident-status ${incident.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    ● {incident.status}
                  </span>

                  <span>{incident.user}</span>

                  <span>{incident.time}</span>

                  <div className="incident-actions">
                    <button title="View Incident">
                      👁️
                    </button>

                    <button title="Investigate">
                      🔍
                    </button>
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Incidents;