import { useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./Dashboard.css";

function Dashboard() {

  const fileInputRef = useRef(null);
const [selectedFile, setSelectedFile] = useState(null);

const handleUploadClick = () => {
  fileInputRef.current.click();
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

  {/* Dashboard Welcome Header */}
        <div className="dashboard-header">
          <div>
            <h1>Welcome back! 👋</h1>
            <p>
              Here's your security and storage overview.
            </p>
          </div>

          <button className="upload-button" onClick={handleUploadClick}>
  + Upload File
</button>

<input
  type="file"
  ref={fileInputRef}
  onChange={handleFileChange}
  style={{ display: "none" }}
/>

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
          <div className="dashboard-card storage-card">
            <div className="card-header">
              <div>
                <h3>Storage Usage</h3>
                <p>Your current cloud storage</p>
              </div>

              <span className="percentage">
                64%
              </span>
            </div>

            <div className="storage-summary">
              <strong>64.2 GB</strong>
              <span>100 GB</span>
            </div>

            <div className="storage-bar">
              <div className="storage-progress"></div>
            </div>

            <div className="storage-info">
              <span>64.2 GB used</span>
              <span>100 GB total</span>
            </div>

            <div className="storage-types">
              <div>
                <span className="dot documents"></span>
                Documents
                <strong>35%</strong>
              </div>

              <div>
                <span className="dot images"></span>
                Images
                <strong>25%</strong>
              </div>

              <div>
                <span className="dot videos"></span>
                Videos
                <strong>30%</strong>
              </div>

              <div>
                <span className="dot others"></span>
                Others
                <strong>10%</strong>
              </div>
            </div>
          </div>

          {/* Security Status */}
          <div className="dashboard-card security-card">
            <div className="card-header">
              <div className="dashboard-card security-card">
  <div className="card-header">
    <div>
      <h3>Security Status</h3>
      <p>Cloud security services</p>
    </div>

    <span className="security-score">92%</span>
  </div>

  <div className="security-score-bar">
    <div className="security-score-fill"></div>
  </div>

  <div className="security-services">

    <div className="security-service">
      <div className="service-left">
        <span className="service-icon">🗄️</span>
        <div>
          <strong>AWS S3</strong>
          <span>Secure Storage</span>
        </div>
      </div>
      <span className="service-status active">Protected</span>
    </div>

    <div className="security-service">
      <div className="service-left">
        <span className="service-icon">🔐</span>
        <div>
          <strong>AWS KMS</strong>
          <span>Encryption</span>
        </div>
      </div>
      <span className="service-status active">Protected</span>
    </div>

    <div className="security-service">
      <div className="service-left">
        <span className="service-icon">👤</span>
        <div>
          <strong>IAM & RBAC</strong>
          <span>Access Control</span>
        </div>
      </div>
      <span className="service-status active">Protected</span>
    </div>

    <div className="security-service">
      <div className="service-left">
        <span className="service-icon">📋</span>
        <div>
          <strong>CloudTrail</strong>
          <span>Audit Logging</span>
        </div>
      </div>
      <span className="service-status active">Active</span>
    </div>

    <div className="security-service">
      <div className="service-left">
        <span className="service-icon">📊</span>
        <div>
          <strong>CloudWatch</strong>
          <span>Monitoring</span>
        </div>
      </div>
      <span className="service-status active">Active</span>
    </div>

    <div className="security-service">
      <div className="service-left">
        <span className="service-icon">🛡️</span>
        <div>
          <strong>GuardDuty</strong>
          <span>Threat Detection</span>
        </div>
      </div>
      <span className="service-status active">Active</span>
    </div>

  </div>
</div>


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
           
           <div className="quick-actions-card dashboard-card">
  <div className="card-header">
    <div>
      <h3>Quick Actions</h3>
      <p>Frequently used actions</p>
    </div>
  </div>

  <div className="quick-actions">

    <button className="quick-action" onClick={handleUploadClick}>
      <span className="quick-action-icon">📤</span>
      <span>
        <strong>Upload File</strong>
        <small>Add a new file</small>
      </span>
    </button>

    <button className="quick-action">
      <span className="quick-action-icon">🔗</span>
      <span>
        <strong>Share File</strong>
        <small>Share with users</small>
      </span>
    </button>

    <button className="quick-action">
      <span className="quick-action-icon">👥</span>
      <span>
        <strong>Manage Users</strong>
        <small>Users & roles</small>
      </span>
    </button>

    <button className="quick-action">
      <span className="quick-action-icon">🛡️</span>
      <span>
        <strong>Security Center</strong>
        <small>View security</small>
      </span>
    </button>

  </div>
</div>
      </main>
    </div>
  );
}

export default Dashboard;