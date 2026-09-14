import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">🛡️</div>
        <h2>SkyGuard</h2>
      </div>

      {/* Main Navigation */}
      <nav className="sidebar-nav">

        <p className="nav-title">MAIN MENU</p>

        <NavLink to="/dashboard" className="sidebar-link">
          <span>▣</span>
          Dashboard
        </NavLink>

        <NavLink to="/files" className="sidebar-link">
          <span>📁</span>
          My Files
        </NavLink>

        <NavLink to="/shared" className="sidebar-link">
          <span>🔗</span>
          Shared Files
        </NavLink>

        <NavLink to="/users" className="sidebar-link">
          <span>👥</span>
          Users & Roles
        </NavLink>

        <p className="nav-title security-title">SECURITY</p>

        <NavLink to="/security" className="sidebar-link">
          <span>🛡️</span>
          Security SIEM
        </NavLink>

        <NavLink to="/incidents" className="sidebar-link">
          <span>⚠️</span>
          Incidents
        </NavLink>

        <NavLink to="/activity" className="sidebar-link">
          <span>📊</span>
          Activity Logs
        </NavLink>

      </nav>

      {/* Bottom Navigation */}
      <div className="sidebar-bottom">

        <NavLink to="/settings" className="sidebar-link">
          <span>⚙️</span>
          Settings
        </NavLink>

        <button className="logout-button">
          <span>🚪</span>
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;