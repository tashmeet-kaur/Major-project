import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./Security.css";

function Security() {
  const securityStats = [
    {
      title: "Security Score",
      value: "92%",
      subtitle: "System protected",
      icon: "🛡️",
    },
    {
      title: "Threats Detected",
      value: "7",
      subtitle: "Last 24 hours",
      icon: "⚠️",
    },
    {
      title: "Open Incidents",
      value: "3",
      subtitle: "Require attention",
      icon: "🚨",
    },
    {
      title: "Events Monitored",
      value: "1,284",
      subtitle: "Last 24 hours",
      icon: "📊",
    },
  ];

  const securityServices = [
    {
      name: "AWS CloudTrail",
      description: "Audit and activity logging",
      status: "Active",
    },
    {
      name: "AWS CloudWatch",
      description: "System monitoring",
      status: "Active",
    },
    {
      name: "AWS GuardDuty",
      description: "Threat detection",
      status: "Active",
    },
    {
      name: "AWS KMS",
      description: "Data encryption",
      status: "Protected",
    },
  ];

  const recentEvents = [
    {
      event: "Multiple failed login attempts",
      source: "CloudTrail",
      severity: "High",
      time: "5 min ago",
    },
    {
      event: "Suspicious IP address detected",
      source: "GuardDuty",
      severity: "Medium",
      time: "15 min ago",
    },
    {
      event: "Unauthorized file access attempt",
      source: "CloudTrail",
      severity: "Critical",
      time: "30 min ago",
    },
    {
      event: "Unusual download activity",
      source: "CloudWatch",
      severity: "Low",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <Header />

        <div className="security-page">
          <div className="security-page-header">
            <div>
              <h1>Security SIEM</h1>
              <p>
                Monitor security events, threats, and cloud activity.
              </p>
            </div>

            <span className="monitoring-status">
              ● Monitoring Active
            </span>
          </div>

          {/* Security Statistics */}

          <div className="security-stats">
            {securityStats.map((stat, index) => (
              <div className="security-stat-card" key={index}>
                <div className="security-stat-icon">
                  {stat.icon}
                </div>

                <div>
                  <h3>{stat.title}</h3>
                  <strong>{stat.value}</strong>
                  <p>{stat.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Security Services */}

          <div className="security-content-grid">
            <div className="dashboard-card">
              <div className="card-header">
                <div>
                  <h3>Security Services</h3>
                  <p>Cloud security components</p>
                </div>
              </div>

              <div className="siem-services">
                {securityServices.map((service, index) => (
                  <div className="siem-service" key={index}>
                    <div className="siem-service-left">
                      <div className="siem-service-icon">
                        🛡️
                      </div>

                      <div>
                        <strong>{service.name}</strong>
                        <span>{service.description}</span>
                      </div>
                    </div>

                    <span className="siem-active">
                      ● {service.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Overview */}

            <div className="dashboard-card risk-overview">
              <div className="card-header">
                <div>
                  <h3>Risk Overview</h3>
                  <p>Current security risk</p>
                </div>
              </div>

              <div className="risk-circle">
                <strong>Low</strong>
                <span>Risk Level</span>
              </div>

              <div className="risk-details">
                <div>
                  <span>Critical</span>
                  <strong>1</strong>
                </div>

                <div>
                  <span>High</span>
                  <strong>1</strong>
                </div>

                <div>
                  <span>Medium</span>
                  <strong>1</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Security Events */}

          <div className="dashboard-card recent-events-card">
            <div className="card-header">
              <div>
                <h3>Recent Security Events</h3>
                <p>Latest events detected by SkyGuard</p>
              </div>

              <button className="view-all-button">
                View All
              </button>
            </div>

            <div className="security-events">
              {recentEvents.map((event, index) => (
                <div className="security-event" key={index}>
                  <div className="event-info">
                    <div className="event-icon">
                      ⚠️
                    </div>

                    <div>
                      <strong>{event.event}</strong>
                      <span>
                        {event.source} • {event.time}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`event-severity ${event.severity.toLowerCase()}`}
                  >
                    {event.severity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Security;