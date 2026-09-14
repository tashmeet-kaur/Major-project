import { useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./Dashboard.css";


function Dashboard() {
   const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };
  

  
const stats = [
  {
    icon: "📁",
    title: "Total Files",
    value: "128",
    subtitle: "+8 this week",
    type: "files",
  },
  {
    icon: "💾",
    title: "Storage Used",
    value: "64.2 GB",
    subtitle: "64% of 100 GB",
    type: "storage",
  },
  {
    icon: "🔔",
    title: "Security Alerts",
    value: "12",
    subtitle: "3 require attention",
    type: "alerts",
  },
  {
    icon: "🛡️",
    title: "Risk Level",
    value: "Low",
    subtitle: "System protected",
    type: "risk",
  },
];

  const activities = [
    {
      icon: "📤",
      file: "project-report.pdf",
      action: "Uploaded",
      user: "Admin",
      time: "2 minutes ago",
    },
    {
      icon: "📥",
      file: "presentation.pptx",
      action: "Downloaded",
      user: "Tashneet",
      time: "10 minutes ago",
    },
    {
      icon: "🔗",
      file: "database.xlsx",
      action: "Shared",
      user: "Manager",
      time: "20 minutes ago",
    },
    {
      icon: "🗑️",
      file: "old-document.pdf",
      action: "Deleted",
      user: "Admin",
      time: "35 minutes ago",
    },
  ];

  const alerts = [
    {
      title: "Multiple failed login attempts",
      severity: "High",
      status: "Open",
      time: "5 min ago",
    },
    {
      title: "Suspicious IP address detected",
      severity: "Medium",
      status: "Investigating",
      time: "15 min ago",
    },
    {
      title: "Unauthorized file access attempt",
      severity: "Critical",
      status: "Open",
      time: "30 min ago",
    },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">

  <Header />

{selectedFile && (
  <div className="upload-preview">
    <div>
      <strong>Selected File</strong>
      <p>{selectedFile.name}</p>
    </div>

    <button
      className="remove-file-button"
      onClick={() => setSelectedFile(null)}
    >
      Remove
    </button>
  </div>
)}

  {/* Dashboard Welcome Header */}
  <div className="dashboard-header">
          <div>
            <h1>Welcome back! 👋</h1>
            <p>
              Here's your security and storage overview.
            </p>
          </div>

          <button className="upload-btn"  onClick={handleUploadClick}>
            + Upload File
          </button>
          <input
  type="file"
  ref={fileInputRef}
  onChange={handleFileChange}
  style={{ display: "none" }}
/>
        </div>

        {/* Statistics Cards */}
        <section className="stats-grid">
          {stats.map((stat, index) => (
            <div className={`stat-card ${stat.type}`} key={index}>
              <div className="stat-icon">
                {stat.icon}
              </div>

              <div className="stat-content">
                <p>{stat.title}</p>
                <h2>{stat.value}</h2>
                <span>{stat.subtitle}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Middle Section */}
        <section className="dashboard-grid">

          {/* Storage Usage */}
          {/* Recent File Activity */}
<div className="dashboard-card activity-card">
  <div className="card-header">
    <div>
      <h3>Recent File Activity</h3>
      <p>Latest actions performed on files</p>
    </div>

    <button className="view-all-button">View All</button>
  </div>

  <div className="activity-list">
    {activities.map((item, index) => (
      <div className="activity-item" key={index}>

        <div className="activity-icon">
          {item.icon}
        </div>

        <div className="activity-info">
          <strong>{item.file}</strong>
          <span>
            {item.action} by {item.user}
          </span>
        </div>

        <span className="activity-time">
          {item.time}
        </span>

      </div>
    ))}
  </div>
</div>


{/* Security Alerts */}
<div className="dashboard-card alerts-card">
  <div className="card-header">
    <div>
      <h3>Security Alerts</h3>
      <p>Recent security events</p>
    </div>

    <button className="view-all-button">View All</button>
  </div>

  <div className="alerts-list">
    {alerts.map((alert, index) => (
      <div className="alert-item" key={index}>

        <div className="alert-icon">
          ⚠️
        </div>

        <div className="alert-info">
          <strong>{alert.title}</strong>

          <div className="alert-meta">
            <span className={`severity ${alert.severity.toLowerCase()}`}>
              {alert.severity}
            </span>

            <span>{alert.status}</span>
          </div>
        </div>

        <span className="alert-time">
          {alert.time}
        </span>

      </div>
    ))}
  </div>
</div>
        </section>

        {/* Bottom Section */}
        <section className="dashboard-grid bottom-grid">

          {/* Recent Activity */}
          <div className="dashboard-card activity-card">

            <div className="card-header">
              <div>
                <h3>Recent File Activity</h3>
                <p>Latest file operations</p>
              </div>

              <button className="view-btn">
                View All
              </button>
            </div>

            <div className="activity-list">

              {activities.map((activity, index) => (
                <div className="activity-item" key={index}>

                  <div className="activity-icon">
                    {activity.icon}
                  </div>

                  <div className="activity-details">
                    <strong>{activity.file}</strong>

                    <span>
                      {activity.action} by {activity.user}
                    </span>
                  </div>

                  <time>
                    {activity.time}
                  </time>

                </div>
              ))}

            </div>
          </div>

          {/* Security Alerts */}
          <div className="dashboard-card alerts-card">

            <div className="card-header">
              <div>
                <h3>Security Alerts</h3>
                <p>Recent security events</p>
              </div>

              <button className="view-btn">
                View All
              </button>
            </div>

            <div className="alerts-list">

              {alerts.map((alert, index) => (
                <div className="alert-item" key={index}>

                  <div className={`alert-indicator ${alert.severity.toLowerCase()}`}>
                    !
                  </div>

                  <div className="alert-details">
                    <strong>{alert.title}</strong>

                    <span>
                      {alert.status} • {alert.time}
                    </span>
                  </div>

                  <span
                    className={`severity ${alert.severity.toLowerCase()}`}
                  >
                    {alert.severity}
                  </span>

                </div>
              ))}

            </div>
          </div>

        </section>

        {/* Quick Actions */}
        <section className="quick-actions">

          <div>
            <h3>Quick Actions</h3>
            <p>Manage your SkyGuard system</p>
          </div>

          <div className="quick-buttons">

            <button>
              📤 Upload File
            </button>

            <button>
              📁 View Files
            </button>

            <button>
              ⚠️ Review Alerts
            </button>

            <button>
              👥 Manage Users
            </button>

          </div>

        </section>

      </main>
    </div>
  );
}

export default Dashboard;