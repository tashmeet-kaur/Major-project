import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./Activity.css";

function Activity() {
  const activities = [
    {
      action: "File Uploaded",
      description: "project-report.pdf was uploaded",
      user: "Admin User",
      source: "Web Application",
      status: "Success",
      time: "2 minutes ago",
    },
    {
      action: "File Downloaded",
      description: "presentation.pptx was downloaded",
      user: "Tashneet",
      source: "Web Application",
      status: "Success",
      time: "10 minutes ago",
    },
    {
      action: "File Shared",
      description: "database.xlsx was shared with Manager",
      user: "Manager",
      source: "Web Application",
      status: "Success",
      time: "20 minutes ago",
    },
    {
      action: "Failed Login",
      description: "Multiple failed login attempts detected",
      user: "Unknown",
      source: "CloudTrail",
      status: "Warning",
      time: "25 minutes ago",
    },
    {
      action: "Access Denied",
      description: "Unauthorized file access was blocked",
      user: "Unknown",
      source: "CloudTrail",
      status: "Blocked",
      time: "30 minutes ago",
    },
    {
      action: "Security Alert",
      description: "Suspicious IP address detected",
      user: "Unknown",
      source: "GuardDuty",
      status: "Warning",
      time: "45 minutes ago",
    },
    {
      action: "User Login",
      description: "Admin User logged into the system",
      user: "Admin User",
      source: "Web Application",
      status: "Success",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <Header />

        <div className="activity-page">

          {/* Page Header */}

          <div className="activity-header">
            <div>
              <h1>Activity Logs</h1>
              <p>
                Monitor user activity and security events.
              </p>
            </div>

            <span className="logging-status">
              ● Logging Active
            </span>
          </div>

          {/* Activity Summary */}

          <div className="activity-stats">

            <div className="activity-stat-card">
              <div className="activity-stat-icon">
                📊
              </div>

              <div>
                <span>Total Events</span>
                <strong>1,284</strong>
              </div>
            </div>

            <div className="activity-stat-card">
              <div className="activity-stat-icon">
                ✓
              </div>

              <div>
                <span>Successful</span>
                <strong>1,241</strong>
              </div>
            </div>

            <div className="activity-stat-card">
              <div className="activity-stat-icon">
                ⚠️
              </div>

              <div>
                <span>Warnings</span>
                <strong>32</strong>
              </div>
            </div>

            <div className="activity-stat-card">
              <div className="activity-stat-icon">
                🚫
              </div>

              <div>
                <span>Blocked</span>
                <strong>11</strong>
              </div>
            </div>

          </div>

          {/* Activity Logs */}

          <div className="activity-table-card">

            <div className="activity-table-header">

              <div>
                <h3>System Activity</h3>
                <p>
                  Recent user and security events
                </p>
              </div>

              <div className="activity-filters">

                <select>
                  <option>All Events</option>
                  <option>File Activity</option>
                  <option>Login Activity</option>
                  <option>Security Events</option>
                </select>

                <select>
                  <option>All Sources</option>
                  <option>Web Application</option>
                  <option>CloudTrail</option>
                  <option>GuardDuty</option>
                </select>

              </div>

            </div>

            <div className="activity-table">

              {/* Table Heading */}

              <div className="activity-row activity-row-heading">
                <span>Activity</span>
                <span>User</span>
                <span>Source</span>
                <span>Status</span>
                <span>Time</span>
              </div>

              {/* Activity Data */}

              {activities.map((activity, index) => (
                <div
                  className="activity-row"
                  key={index}
                >

                  <div className="activity-name">

                    <div className="activity-icon">
                      {activity.action === "Failed Login"
                        ? "🔐"
                        : activity.action === "Access Denied"
                        ? "🚫"
                        : activity.action === "Security Alert"
                        ? "⚠️"
                        : "📋"}
                    </div>

                    <div>
                      <strong>{activity.action}</strong>
                      <span>{activity.description}</span>
                    </div>

                  </div>

                  <span>{activity.user}</span>

                  <span className="activity-source">
                    {activity.source}
                  </span>

                  <span
                    className={`activity-status ${activity.status.toLowerCase()}`}
                  >
                    ● {activity.status}
                  </span>

                  <span>{activity.time}</span>

                </div>
              ))}

            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

export default Activity;