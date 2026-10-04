import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./Settings.css";

function Settings() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <Header />

        <div className="settings-page">

          {/* Page Header */}

          <div className="settings-header">
            <div>
              <h1>Settings</h1>
              <p>
                Manage your account and SkyGuard preferences.
              </p>
            </div>
          </div>

          {/* Account Settings */}

          <div className="settings-card">
            <div className="settings-card-header">
              <div className="settings-section-icon">
                👤
              </div>

              <div>
                <h3>Account Settings</h3>
                <p>Manage your account information.</p>
              </div>
            </div>

            <div className="settings-form">

              <div className="settings-field">
                <label>Full Name</label>
                <input
                  type="text"
                  value="Admin User"
                  readOnly
                />
              </div>

              <div className="settings-field">
                <label>Email Address</label>
                <input
                  type="email"
                  value="admin@skyguard.com"
                  readOnly
                />
              </div>

              <div className="settings-field">
                <label>Role</label>
                <input
                  type="text"
                  value="Security Administrator"
                  readOnly
                />
              </div>

            </div>

            <button className="settings-save-button">
              Save Changes
            </button>
          </div>

          {/* Security Settings */}

          <div className="settings-card">

            <div className="settings-card-header">
              <div className="settings-section-icon">
                🔐
              </div>

              <div>
                <h3>Security Settings</h3>
                <p>
                  Manage authentication and account security.
                </p>
              </div>
            </div>

            <div className="settings-option">

              <div>
                <strong>Two-Factor Authentication</strong>
                <span>
                  Add an extra layer of security to your account.
                </span>
              </div>

              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>

            </div>

            <div className="settings-option">

              <div>
                <strong>Login Alerts</strong>
                <span>
                  Receive alerts when a new login is detected.
                </span>
              </div>

              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>

            </div>

            <div className="settings-option">

              <div>
                <strong>Session Timeout</strong>
                <span>
                  Automatically end inactive sessions.
                </span>
              </div>

              <select className="settings-select">
                <option>15 Minutes</option>
                <option>30 Minutes</option>
                <option>1 Hour</option>
                <option>2 Hours</option>
              </select>

            </div>

          </div>

          {/* Notification Settings */}

          <div className="settings-card">

            <div className="settings-card-header">

              <div className="settings-section-icon">
                🔔
              </div>

              <div>
                <h3>Notifications</h3>
                <p>
                  Choose which notifications you receive.
                </p>
              </div>

            </div>

            <div className="settings-option">

              <div>
                <strong>Security Alerts</strong>
                <span>
                  Receive notifications for security threats.
                </span>
              </div>

              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>

            </div>

            <div className="settings-option">

              <div>
                <strong>File Activity</strong>
                <span>
                  Get notified about file uploads and downloads.
                </span>
              </div>

              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>

            </div>

            <div className="settings-option">

              <div>
                <strong>Incident Notifications</strong>
                <span>
                  Receive alerts when security incidents occur.
                </span>
              </div>

              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>

            </div>

          </div>

          {/* Storage Settings */}

          <div className="settings-card">

            <div className="settings-card-header">

              <div className="settings-section-icon">
                💾
              </div>

              <div>
                <h3>Storage</h3>
                <p>
                  Monitor your SkyGuard storage usage.
                </p>
              </div>

            </div>

            <div className="storage-settings">

              <div className="storage-info">
                <div>
                  <strong>64.2 GB</strong>
                  <span>of 100 GB used</span>
                </div>

                <span>64%</span>
              </div>

              <div className="storage-progress">
                <div className="storage-progress-fill"></div>
              </div>

              <p>
                You have 35.8 GB of available storage remaining.
              </p>

            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

export default Settings;